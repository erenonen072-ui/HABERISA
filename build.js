"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

/* =========================================================
   HABERİSTA STATIC BUILD SYSTEM
   ========================================================= */

const ROOT = __dirname;

const HABER_HTML = path.join(ROOT, "haber.html");
const HABERLER_JS = path.join(ROOT, "js", "haberler.js");

const SITE_URL = "https://haberisa.vercel.app";
const SITE_NAME = "Haberİsta";

/* =========================================================
   DOSYA
   ========================================================= */

function fileExists(file) {
    return fs.existsSync(file);
}

function readFile(file) {
    return fs.readFileSync(file, "utf8");
}

function writeFile(file, content) {
    fs.mkdirSync(path.dirname(file), {
        recursive: true
    });

    fs.writeFileSync(
        file,
        content,
        "utf8"
    );
}

/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
    return escapeHTML(value);
}

/* =========================================================
   SLUG
   ========================================================= */

function slugOlustur(metin) {
    return String(metin || "")
        .toLocaleLowerCase("tr-TR")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/â/g, "a")
        .replace(/î/g, "i")
        .replace(/û/g, "u")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getSlug(haber) {
    return slugOlustur(
        haber.slug || haber.baslik
    );
}

/* =========================================================
   URL
   ========================================================= */

function getNewsURL(haber) {
    return (
        SITE_URL +
        "/haber/" +
        getSlug(haber) +
        "/"
    );
}

/* =========================================================
   HABER ALANLARI
   ========================================================= */

function getTitle(haber) {
    return haber.baslik || "Haberİsta";
}

function getCategory(haber) {
    return haber.kategori || "Gündem";
}

function getSpot(haber) {
    return (
        haber.spot ||
        haber.ozet ||
        ""
    );
}

function getDate(haber) {
    return haber.tarih || "";
}

function getTime(haber) {
    return haber.saat || "";
}

/* =========================================================
   GÖRSEL URL DÜZELTME
   ========================================================= */

function getImage(haber) {

    let image =
        haber.gorsel ||
        haber.gorselUrl ||
        haber.image ||
        haber.imageUrl ||
        "/images/default-news.jpg";

    image = String(image).trim();

    if (!image) {
        return "/images/default-news.jpg";
    }

    /*
       Harici URL ise aynen bırak.
    */

    if (
        /^https?:\/\//i.test(image) ||
        /^data:/i.test(image)
    ) {
        return image;
    }

    /*
       Root-relative ise aynen bırak.
    */

    if (image.startsWith("/")) {
        return image;
    }

    /*
       ./images/... veya images/...
       -> /images/...
    */

    image =
        image
            .replace(/^\.\/+/, "")
            .replace(/^\/+/, "");

    return "/" + image;
}

/* =========================================================
   İÇERİK
   ========================================================= */

function getContent(haber) {
    return (
        haber.icerik ||
        haber.content ||
        ""
    );
}

/* =========================================================
   HABERLER.JS OKU
   ========================================================= */

function loadNews() {

    if (!fileExists(HABERLER_JS)) {
        throw new Error(
            "js/haberler.js bulunamadı."
        );
    }

    const source =
        readFile(HABERLER_JS);

    const context = {
        console: console,
        window: {},
        globalThis: {},
        self: {},
        URL: URL,
        URLSearchParams: URLSearchParams
    };

    vm.createContext(context);

    try {

        vm.runInContext(
            source,
            context,
            {
                filename: HABERLER_JS
            }
        );

    } catch (error) {

        throw new Error(
            "haberler.js çalıştırılırken hata oluştu:\n" +
            error.message
        );

    }

    let haberler =
        context.window.haberler;

    if (!Array.isArray(haberler)) {
        haberler =
            context.globalThis.haberler;
    }

    if (!Array.isArray(haberler)) {
        throw new Error(
            "haberler.js içinde window.haberler bulunamadı."
        );
    }

    return haberler.map(
        function (haber) {

            const copy = {
                ...haber
            };

            copy.slug =
                getSlug(copy);

            copy.url =
                getNewsURL(copy);

            copy.gorsel =
                getImage(copy);

            return copy;

        }
    );
}

/* =========================================================
   CONTENT RENDER
   ========================================================= */

function renderContent(content) {

    if (!content) {

        return `
            <p class="article-empty">
                Bu haber için içerik bulunmuyor.
            </p>
        `;

    }

    const text =
        String(content).trim();

    /*
       Haber içeriği zaten HTML ise
       olduğu gibi kullan.
    */

    if (
        /<(p|h2|h3|ul|ol|li|strong|em|blockquote|br)[\s>]/i
            .test(text)
    ) {

        return text;

    }

    const lines =
        text
            .replace(/\r\n/g, "\n")
            .replace(/\r/g, "\n")
            .split("\n");

    let html = "";

    for (const line of lines) {

        const temiz =
            line.trim();

        if (!temiz) {
            continue;
        }

        if (
            temiz.length > 3 &&
            temiz.length < 120 &&
            temiz ===
                temiz.toLocaleUpperCase("tr-TR") &&
            !/[.!?]$/.test(temiz)
        ) {

            html += `
                <h2>
                    ${escapeHTML(temiz)}
                </h2>
            `;

        } else {

            html += `
                <p>
                    ${escapeHTML(temiz)}
                </p>
            `;

        }

    }

    return html;
}

/* =========================================================
   SIDEBAR
   ========================================================= */

let GLOBAL_NEWS = [];

function createSidebarNews(currentHaber) {

    const others =
        GLOBAL_NEWS
            .filter(
                function (haber) {

                    return (
                        String(haber.id) !==
                        String(currentHaber.id)
                    );

                }
            )
            .slice(0, 5);

    if (!others.length) {

        return `
            <p>
                Henüz başka haber bulunmuyor.
            </p>
        `;

    }

    return others
        .map(
            function (haber) {

                const title =
                    escapeHTML(
                        getTitle(haber)
                    );

                const image =
                    escapeAttribute(
                        getImage(haber)
                    );

                const url =
                    escapeAttribute(
                        getNewsURL(haber)
                    );

                return `
                    <a
                        href="${url}"
                        class="sidebar-news-item"
                    >

                        <img
                            src="${image}"
                            alt="${title}"
                            loading="lazy"
                        >

                        <span>
                            ${title}
                        </span>

                    </a>
                `;

            }
        )
        .join("\n");
}

/* =========================================================
   ARTICLE HTML
   ========================================================= */

function createArticleHTML(haber) {

    const title =
        escapeHTML(
            getTitle(haber)
        );

    const category =
        escapeHTML(
            getCategory(haber)
        );

    const spot =
        escapeHTML(
            getSpot(haber)
        );

    const image =
        escapeAttribute(
            getImage(haber)
        );

    const date =
        escapeHTML(
            getDate(haber)
        );

    const time =
        escapeHTML(
            getTime(haber)
        );

    const url =
        getNewsURL(haber);

    const content =
        renderContent(
            getContent(haber)
        );

    const shareText =
        encodeURIComponent(
            getTitle(haber) +
            " - " +
            SITE_NAME
        );

    const shareURL =
        encodeURIComponent(url);

    return `

<div class="article-layout">

    <article
        class="article-main"
        itemscope
        itemtype="https://schema.org/NewsArticle"
    >

        <meta
            itemprop="mainEntityOfPage"
            content="${escapeAttribute(url)}"
        >

        <meta
            itemprop="headline"
            content="${escapeAttribute(getTitle(haber))}"
        >

        <meta
            itemprop="articleSection"
            content="${escapeAttribute(getCategory(haber))}"
        >

        <header class="article-header">

            <div class="article-category">
                ${category}
            </div>

            <h1
                class="article-title"
                itemprop="headline"
            >
                ${title}
            </h1>

            ${
                spot
                    ? `
                        <p
                            class="article-spot"
                            itemprop="description"
                        >
                            ${spot}
                        </p>
                    `
                    : ""
            }

            <div class="article-meta">

                ${
                    date
                        ? `
                            <time
                                itemprop="datePublished"
                                datetime="${escapeAttribute(
                                    haber.publishedAt || ""
                                )}"
                            >
                                ${date}
                            </time>
                        `
                        : ""
                }

                ${
                    time
                        ? `
                            <span>
                                ${time}
                            </span>
                        `
                        : ""
                }

                <span>
                    Haberİsta
                </span>

            </div>

        </header>

        <figure class="article-image-wrap">

            <img
                class="article-image"
                src="${image}"
                alt="${title}"
                itemprop="image"
                loading="eager"
                decoding="async"
            >

            <figcaption>
                ${title}
            </figcaption>

        </figure>

        <div
            id="articleContent"
            class="article-content"
            itemprop="articleBody"
        >

            ${content}

            <div class="article-share">

                <strong>
                    Bu haberi paylaş
                </strong>

                <div class="article-share-buttons">

                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=${shareURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="share-facebook"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="share-twitter"
                    >
                        X
                    </a>

                    <a
                        href="https://wa.me/?text=${shareText}%20${shareURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="share-whatsapp"
                    >
                        WhatsApp
                    </a>

                </div>

            </div>

        </div>

        <div class="article-source-box">

            <strong>
                Haberİsta
            </strong>

            <p>
                Bu haber Haberİsta tarafından
                haber kaynaklarından derlenen bilgiler
                doğrultusunda hazırlanmıştır.
            </p>

        </div>

    </article>

    <aside class="article-sidebar">

        <div class="sidebar-box">

            <h2>
                Son Haberler
            </h2>

            <div class="sidebar-news-list">

                ${createSidebarNews(haber)}

            </div>

        </div>

    </aside>

</div>

`;
}

/* =========================================================
   TITLE
   ========================================================= */

function replaceTitle(
    html,
    title
) {

    const newTitle =
        `<title>${escapeHTML(title)} | ${SITE_NAME}</title>`;

    const regex =
        /<title\b[^>]*>[\s\S]*?<\/title>/i;

    if (regex.test(html)) {

        return html.replace(
            regex,
            newTitle
        );

    }

    return html.replace(
        /<\/head>/i,
        newTitle +
        "\n</head>"
    );
}

/* =========================================================
   META
   ========================================================= */

function replaceMeta(
    html,
    name,
    content
) {

    const value =
        escapeAttribute(content);

    const regex =
        new RegExp(
            `<meta\\s+[^>]*name=["']${name}["'][^>]*>`,
            "i"
        );

    if (regex.test(html)) {

        return html.replace(
            regex,
            `<meta name="${name}" content="${value}">`
        );

    }

    return html.replace(
        /<\/head>/i,
        `<meta name="${name}" content="${value}">\n</head>`
    );
}

/* =========================================================
   OG
   ========================================================= */

function replacePropertyMeta(
    html,
    property,
    content
) {

    const value =
        escapeAttribute(content);

    const regex =
        new RegExp(
            `<meta\\s+[^>]*property=["']${property}["'][^>]*>`,
            "i"
        );

    if (regex.test(html)) {

        return html.replace(
            regex,
            `<meta property="${property}" content="${value}">`
        );

    }

    return html.replace(
        /<\/head>/i,
        `<meta property="${property}" content="${value}">\n</head>`
    );
}

/* =========================================================
   CANONICAL
   ========================================================= */

function replaceCanonical(
    html,
    url
) {

    const value =
        escapeAttribute(url);

    const regex =
        /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

    if (regex.test(html)) {

        return html.replace(
            regex,
            `<link rel="canonical" href="${value}">`
        );

    }

    return html.replace(
        /<\/head>/i,
        `<link rel="canonical" href="${value}">\n</head>`
    );
}

/* =========================================================
   ARTICLE SCHEMA
   ========================================================= */

function createArticleSchema(haber) {

    const schema = {

        "@context":
            "https://schema.org",

        "@type":
            "NewsArticle",

        headline:
            getTitle(haber),

        description:
            getSpot(haber),

        image: [
            SITE_URL +
            getImage(haber)
        ],

        datePublished:
            haber.publishedAt ||
            "",

        dateModified:
            haber.dateModified ||
            haber.publishedAt ||
            "",

        author: {

            "@type":
                "Organization",

            name:
                SITE_NAME

        },

        publisher: {

            "@type":
                "Organization",

            name:
                SITE_NAME,

            url:
                SITE_URL

        },

        mainEntityOfPage: {

            "@type":
                "WebPage",

            "@id":
                getNewsURL(haber)

        },

        url:
            getNewsURL(haber)

    };

    /*
       Harici görsel kullanılıyorsa
       SITE_URL + https:// gibi hatalı
       bir URL oluşmasını engelle.
    */

    const image =
        getImage(haber);

    schema.image = [
        /^https?:\/\//i.test(image)
            ? image
            : SITE_URL + image
    ];

    return `
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
`;
}

/* =========================================================
   ARTICLE CONTAINER
   ========================================================= */

function replaceArticleContainer(
    html,
    articleHTML
) {

    const regex =
        /<([a-zA-Z0-9]+)([^>]*\bid=["']articleContainer["'][^>]*)>[\s\S]*?<\/\1>/i;

    if (!regex.test(html)) {

        throw new Error(
            "haber.html içinde #articleContainer bulunamadı."
        );

    }

    return html.replace(
        regex,
        `<div id="articleContainer">
            ${articleHTML}
        </div>`
    );
}

/* =========================================================
   STATIC FLAG
   ========================================================= */

function addStaticFlag(html) {

    const bodyRegex =
        /<body\b([^>]*)>/i;

    if (!bodyRegex.test(html)) {
        throw new Error(
            "haber.html içinde <body> bulunamadı."
        );
    }

    return html.replace(
        bodyRegex,
        function (
            match,
            attributes
        ) {

            if (
                /data-static-article\s*=/i
                    .test(attributes)
            ) {
                return match;
            }

            return (
                `<body${attributes} ` +
                `data-static-article="true">`
            );

        }
    );
}

/* =========================================================
   STATİK HABER SAYFASI
   ========================================================= */

function buildArticlePage(
    template,
    haber
) {

    const title =
        getTitle(haber);

    const description =
        getSpot(haber) ||
        title +
        " - " +
        SITE_NAME;

    const image =
        getImage(haber);

    const url =
        getNewsURL(haber);

    let html =
        template;

    /* TITLE */

    html =
        replaceTitle(
            html,
            title
        );

    /* DESCRIPTION */

    html =
        replaceMeta(
            html,
            "description",
            description
        );

    /* ROBOTS */

    html =
        replaceMeta(
            html,
            "robots",
            "index, follow, max-image-preview:large"
        );

    /* CANONICAL */

    html =
        replaceCanonical(
            html,
            url
        );

    /* OG TITLE */

    html =
        replacePropertyMeta(
            html,
            "og:title",
            title
        );

    /* OG DESCRIPTION */

    html =
        replacePropertyMeta(
            html,
            "og:description",
            description
        );

    /* OG URL */

    html =
        replacePropertyMeta(
            html,
            "og:url",
            url
        );

    /* OG IMAGE */

    html =
        replacePropertyMeta(
            html,
            "og:image",
            /^https?:\/\//i.test(image)
                ? image
                : SITE_URL + image
        );

    /* OG TYPE */

    html =
        replacePropertyMeta(
            html,
            "og:type",
            "article"
        );

    /* TWITTER */

    html =
        replaceMeta(
            html,
            "twitter:card",
            "summary_large_image"
        );

    html =
        replaceMeta(
            html,
            "twitter:title",
            title
        );

    html =
        replaceMeta(
            html,
            "twitter:description",
            description
        );

    html =
        replaceMeta(
            html,
            "twitter:image",
            /^https?:\/\//i.test(image)
                ? image
                : SITE_URL + image
        );

    /* ARTICLE */

    const articleHTML =
        createArticleHTML(haber);

    html =
        replaceArticleContainer(
            html,
            articleHTML
        );

    /* STATIC FLAG */

    html =
        addStaticFlag(html);

    /* SCHEMA */

    html =
        html.replace(
            /<\/head>/i,
            createArticleSchema(haber) +
            "\n</head>"
        );

    return html;
}

/* =========================================================
   DUPLICATE KONTROLÜ
   ========================================================= */

function checkDuplicates(haberler) {

    const ids =
        new Set();

    const slugs =
        new Set();

    for (const haber of haberler) {

        const id =
            String(haber.id);

        const slug =
            getSlug(haber);

        if (ids.has(id)) {

            throw new Error(
                "Tekrarlanan haber ID: " +
                id
            );

        }

        if (slugs.has(slug)) {

            throw new Error(
                "Tekrarlanan haber slug: " +
                slug
            );

        }

        ids.add(id);
        slugs.add(slug);
    }
}

/* =========================================================
   BUILD
   ========================================================= */

function build() {

    console.log("");
    console.log("========================================");
    console.log("       HABERİSTA BUILD BAŞLADI");
    console.log("========================================");
    console.log("");

    /* DOSYALAR */

    if (!fileExists(HABER_HTML)) {

        throw new Error(
            "haber.html bulunamadı."
        );

    }

    if (!fileExists(HABERLER_JS)) {

        throw new Error(
            "js/haberler.js bulunamadı."
        );

    }

    console.log(
        "✓ haber.html bulundu"
    );

    console.log(
        "✓ haberler.js bulundu"
    );

    /* HABERLER */

    const haberler =
        loadNews();

    GLOBAL_NEWS =
        haberler;

    console.log(
        `✓ ${haberler.length} haber yüklendi`
    );

    /* DUPLICATE */

    checkDuplicates(
        haberler
    );

    console.log(
        "✓ ID ve slug kontrolü tamamlandı"
    );

    /* TEMPLATE */

    const articleTemplate =
        readFile(HABER_HTML);

    if (
        !articleTemplate.includes(
            'id="articleContainer"'
        ) &&
        !articleTemplate.includes(
            "id='articleContainer'"
        )
    ) {

        throw new Error(
            "haber.html içinde #articleContainer bulunamadı."
        );

    }

    console.log(
        "✓ #articleContainer bulundu"
    );

    /*
       INDEX.HTML'E DOKUNMUYORUZ
    */

    console.log(
        "✓ index.html korunuyor"
    );

    /* TEMİZ BUILD */

    const haberRoot =
        path.join(
            ROOT,
            "haber"
        );

    /*
       Eski oluşturulmuş haber klasörlerini
       temizle.
    */

    if (fs.existsSync(haberRoot)) {

        fs.rmSync(
            haberRoot,
            {
                recursive: true,
                force: true
            }
        );

        console.log(
            "✓ Eski haber klasörü temizlendi"
        );

    }

    fs.mkdirSync(
        haberRoot,
        {
            recursive: true
        }
    );

    /* BUILD */

    let success = 0;
    let failed = 0;

    for (
        const haber of haberler
    ) {

        try {

            const slug =
                getSlug(haber);

            if (!slug) {

                throw new Error(
                    "Haber slug oluşturulamadı."
                );

            }

            const articleHTML =
                buildArticlePage(
                    articleTemplate,
                    haber
                );

            const articleDirectory =
                path.join(
                    ROOT,
                    "haber",
                    slug
                );

            const articleFile =
                path.join(
                    articleDirectory,
                    "index.html"
                );

            writeFile(
                articleFile,
                articleHTML
            );

            success++;

            console.log(
                `✓ /haber/${slug}/`
            );

        } catch (error) {

            failed++;

            console.error(
                `✗ ${getTitle(haber)}`
            );

            console.error(
                "  " +
                error.message
            );

        }

    }

    console.log("");
    console.log("========================================");
    console.log("       HABERİSTA BUILD BİTTİ");
    console.log("========================================");

    console.log(
        `Toplam   : ${haberler.length}`
    );

    console.log(
        `Başarılı : ${success}`
    );

    console.log(
        `Hatalı   : ${failed}`
    );

    console.log("========================================");
    console.log("");

    if (failed > 0) {

        throw new Error(
            `${failed} haber sayfası oluşturulamadı.`
        );

    }

}

/* =========================================================
   ÇALIŞTIR
   ========================================================= */

try {

    build();

} catch (error) {

    console.error("");
    console.error("❌ BUILD HATASI");
    console.error("");
    console.error(error.message);
    console.error("");

    process.exit(1);
}
