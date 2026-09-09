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
const HABER_ROOT = path.join(ROOT, "haber");

const SITE_URL = "https://haberisa.vercel.app";
const SITE_NAME = "Haberİsta";

/* =========================================================
   DOSYA İŞLEMLERİ
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

    fs.writeFileSync(file, content, "utf8");
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

function getContent(haber) {
    return (
        haber.icerik ||
        haber.content ||
        ""
    );
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

    /* Harici URL */
    if (
        /^https?:\/\//i.test(image) ||
        /^data:/i.test(image)
    ) {
        return image;
    }

    /* Root-relative URL */
    if (image.startsWith("/")) {
        return image;
    }

    /*
       images/haber.jpg
       ./images/haber.jpg

       ->
       
       /images/haber.jpg
    */

    image = image
        .replace(/^\.\/+/, "")
        .replace(/^\/+/, "");

    return "/" + image;
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

    const source = readFile(HABERLER_JS);

    const windowObject = {};

    const context = {
        console: console,
        window: windowObject,
        globalThis: windowObject,
        self: windowObject,
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

    let haberler = context.window.haberler;

    if (!Array.isArray(haberler)) {
        haberler = context.globalThis.haberler;
    }

    if (!Array.isArray(haberler)) {
        haberler = context.self.haberler;
    }

    if (!Array.isArray(haberler)) {
        throw new Error(
            "haberler.js içinde haberler dizisi bulunamadı."
        );
    }

    return haberler.map(function (haber) {
        const copy = {
            ...haber
        };

        copy.slug = getSlug(copy);
        copy.url = getNewsURL(copy);
        copy.gorsel = getImage(copy);

        return copy;
    });
}

/* =========================================================
   İÇERİK RENDER
   ========================================================= */

function renderContent(content) {
    if (!content) {
        return `
            <p class="article-empty">
                Bu haber için içerik bulunmuyor.
            </p>
        `;
    }

    const text = String(content).trim();

    /*
       Eğer içerik zaten HTML ise
       HTML olarak bırak.
    */

    if (
        /<(p|h2|h3|ul|ol|li|strong|em|blockquote|br|div)[\s>]/i.test(text)
    ) {
        return text;
    }

    const lines = text
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .split("\n");

    let html = "";

    for (const line of lines) {
        const temiz = line.trim();

        if (!temiz) {
            continue;
        }

        /*
           TAMAMI BÜYÜK HARF olan kısa satırları
           başlık olarak değerlendir.
        */

        if (
            temiz.length > 3 &&
            temiz.length < 120 &&
            temiz === temiz.toLocaleUpperCase("tr-TR") &&
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
    const others = GLOBAL_NEWS
        .filter(function (haber) {
            return (
                String(haber.id) !==
                String(currentHaber.id)
            );
        })
        .slice(0, 5);

    if (!others.length) {
        return `
            <p>
                Henüz başka haber bulunmuyor.
            </p>
        `;
    }

    return others
        .map(function (haber) {
            const title = escapeHTML(
                getTitle(haber)
            );

            const image = escapeAttribute(
                getImage(haber)
            );

            const url = escapeAttribute(
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
                        decoding="async"
                    >

                    <span>
                        ${title}
                    </span>
                </a>
            `;
        })
        .join("\n");
}

/* =========================================================
   ARTICLE HTML
   ========================================================= */

function createArticleHTML(haber) {
    const title = escapeHTML(
        getTitle(haber)
    );

    const category = escapeHTML(
        getCategory(haber)
    );

    const spot = escapeHTML(
        getSpot(haber)
    );

    const image = escapeAttribute(
        getImage(haber)
    );

    const date = escapeHTML(
        getDate(haber)
    );

    const time = escapeHTML(
        getTime(haber)
    );

    const url = getNewsURL(haber);

    const content = renderContent(
        getContent(haber)
    );

    const shareText = encodeURIComponent(
        getTitle(haber) +
        " - " +
        SITE_NAME
    );

    const shareURL = encodeURIComponent(
        url
    );

    const fullImageURL =
        /^https?:\/\//i.test(getImage(haber))
            ? getImage(haber)
            : SITE_URL + getImage(haber);

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

        <meta
            itemprop="image"
            content="${escapeAttribute(fullImageURL)}"
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
   HTML ELEMENT BULMA
   ========================================================= */

/*
   İç içe div'ler bulunduğu için basit regex yerine
   gerçek bir tag sayacı kullanıyoruz.
*/

function findElementById(html, id) {
    const idRegex = new RegExp(
        `<([a-zA-Z0-9]+)\\b[^>]*\\bid=["']${id}["'][^>]*>`,
        "i"
    );

    const match = idRegex.exec(html);

    if (!match) {
        return null;
    }

    const tagName = match[1];
    const openingStart = match.index;
    const openingEnd = match.index + match[0].length;

    const tagRegex = new RegExp(
        `<\\/?${tagName}\\b[^>]*>`,
        "gi"
    );

    tagRegex.lastIndex = openingEnd;

    let depth = 1;
    let tagMatch;

    while ((tagMatch = tagRegex.exec(html)) !== null) {
        const tag = tagMatch[0];

        if (/^<\//.test(tag)) {
            depth--;

            if (depth === 0) {
                return {
                    start: openingStart,
                    end: tagMatch.index + tag.length
                };
            }
        } else if (!/\/>$/.test(tag)) {
            depth++;
        }
    }

    return null;
}

/* =========================================================
   ARTICLE CONTAINER
   ========================================================= */

function replaceArticleContainer(
    html,
    articleHTML
) {
    const element = findElementById(
        html,
        "articleContainer"
    );

    if (!element) {
        throw new Error(
            "haber.html içinde #articleContainer bulunamadı."
        );
    }

    return (
        html.slice(0, element.start) +
        `<div id="articleContainer">
${articleHTML}
</div>` +
        html.slice(element.end)
    );
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
        newTitle + "\n</head>"
    );
}

/* =========================================================
   META NAME
   ========================================================= */

function escapeRegex(value) {
    return String(value).replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}

function replaceMeta(
    html,
    name,
    content
) {
    const value =
        escapeAttribute(content);

    const safeName =
        escapeRegex(name);

    const regex = new RegExp(
        `<meta\\b[^>]*\\bname=["']${safeName}["'][^>]*>`,
        "i"
    );

    const replacement =
        `<meta name="${escapeAttribute(name)}" content="${value}">`;

    if (regex.test(html)) {
        return html.replace(
            regex,
            replacement
        );
    }

    return html.replace(
        /<\/head>/i,
        replacement + "\n</head>"
    );
}

/* =========================================================
   OG PROPERTY META
   ========================================================= */

function replacePropertyMeta(
    html,
    property,
    content
) {
    const value =
        escapeAttribute(content);

    const safeProperty =
        escapeRegex(property);

    const regex = new RegExp(
        `<meta\\b[^>]*\\bproperty=["']${safeProperty}["'][^>]*>`,
        "i"
    );

    const replacement =
        `<meta property="${escapeAttribute(property)}" content="${value}">`;

    if (regex.test(html)) {
        return html.replace(
            regex,
            replacement
        );
    }

    return html.replace(
        /<\/head>/i,
        replacement + "\n</head>"
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
        /<link\b[^>]*\brel=["']canonical["'][^>]*>/i;

    const replacement =
        `<link rel="canonical" href="${value}">`;

    if (regex.test(html)) {
        return html.replace(
            regex,
            replacement
        );
    }

    return html.replace(
        /<\/head>/i,
        replacement + "\n</head>"
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
                /data-static-article\s*=/i.test(
                    attributes
                )
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
   ARTICLE SCHEMA
   ========================================================= */

function createArticleSchema(haber) {
    const image =
        getImage(haber);

    const fullImageURL =
        /^https?:\/\//i.test(image)
            ? image
            : SITE_URL + image;

    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",

        headline: getTitle(haber),

        description: getSpot(haber),

        image: [
            fullImageURL
        ],

        datePublished:
            haber.publishedAt || "",

        dateModified:
            haber.dateModified ||
            haber.publishedAt ||
            "",

        author: {
            "@type": "Organization",
            name: SITE_NAME
        },

        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL
        },

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": getNewsURL(haber)
        },

        url: getNewsURL(haber)
    };

    return `
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
`;
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

    const fullImageURL =
        /^https?:\/\//i.test(image)
            ? image
            : SITE_URL + image;

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
            fullImageURL
        );

    /* OG TYPE */

    html =
        replacePropertyMeta(
            html,
            "og:type",
            "article"
        );

    /* TWITTER CARD */

    html =
        replaceMeta(
            html,
            "twitter:card",
            "summary_large_image"
        );

    /* TWITTER TITLE */

    html =
        replaceMeta(
            html,
            "twitter:title",
            title
        );

    /* TWITTER DESCRIPTION */

    html =
        replaceMeta(
            html,
            "twitter:description",
            description
        );

    /* TWITTER IMAGE */

    html =
        replaceMeta(
            html,
            "twitter:image",
            fullImageURL
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

        if (!id || id === "undefined") {
            throw new Error(
                `ID bulunmayan haber: ${getTitle(haber)}`
            );
        }

        if (!slug) {
            throw new Error(
                `Slug oluşturulamayan haber: ${getTitle(haber)}`
            );
        }

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

    console.log("✓ haber.html bulundu");
    console.log("✓ haberler.js bulundu");

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
       ÇOK ÖNEMLİ:
       index.html kesinlikle değiştirilmiyor.
    */

    console.log(
        "✓ index.html korunuyor"
    );

    /* HABER KLASÖRÜ */

    if (!fs.existsSync(HABER_ROOT)) {
        fs.mkdirSync(
            HABER_ROOT,
            {
                recursive: true
            }
        );
    }

    /*
       Eski klasörü silmiyoruz.
       Böylece yanlışlıkla manuel eklenen
       dosyalar kaybolmaz.

       Yeni oluşturulan sayfalar aynı slug
       üzerine yazılır.
    */

    console.log(
        "✓ haber/ klasörü hazır"
    );

    /* BUILD */

    let success = 0;
    let failed = 0;

    for (const haber of haberler) {
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
                    HABER_ROOT,
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

    console.log(
        "🎉 Tüm haber sayfaları başarıyla oluşturuldu."
    );

    console.log(
        "📌 index.html değiştirilmedi."
    );

    console.log(
        "📌 haberler.js değiştirilmedi."
    );
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
    console.error(error.stack || error.message);
    console.error("");

    process.exit(1);
}
