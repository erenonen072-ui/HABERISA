"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

/* =========================================================
   HABERİSTA - STATIC BUILD SYSTEM
   ========================================================= */

const ROOT = __dirname;

const INDEX_HTML = path.join(ROOT, "index.html");
const HABER_HTML = path.join(ROOT, "haber.html");
const HABERLER_JS = path.join(ROOT, "js", "haberler.js");

const OUTPUT_DIR = ROOT;

const SITE_URL = "https://haberisa.vercel.app";
const SITE_NAME = "Haberİsta";

/* =========================================================
   YARDIMCI FONKSİYONLAR
   ========================================================= */

function log(message) {
    console.log(`[Haberİsta] ${message}`);
}

function fileExists(file) {
    return fs.existsSync(file);
}

function readFile(file) {
    return fs.readFileSync(file, "utf8");
}

function writeFile(file, content) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, "utf8");
}

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
    if (haber.slug) {
        return slugOlustur(haber.slug);
    }

    return slugOlustur(haber.baslik);
}

function getNewsURL(haber) {
    return `${SITE_URL}/haber/${encodeURIComponent(getSlug(haber))}/`;
}

function getImage(haber) {
    return (
        haber.gorsel ||
        haber.gorselUrl ||
        haber.image ||
        haber.imageUrl ||
        "/images/default-news.jpg"
    );
}

function getCategory(haber) {
    return haber.kategori || "Gündem";
}

function getTitle(haber) {
    return haber.baslik || "Haberİsta";
}

function getSpot(haber) {
    return haber.spot || haber.ozet || "";
}

function getDate(haber) {
    return haber.tarih || "";
}

function getTime(haber) {
    return haber.saat || "";
}

function getContent(haber) {
    return haber.icerik || haber.content || "";
}

/* =========================================================
   HABERLER.JS OKUMA
   ========================================================= */

function loadNews() {
    if (!fileExists(HABERLER_JS)) {
        throw new Error(
            `haberler.js bulunamadı: ${HABERLER_JS}`
        );
    }

    const source = readFile(HABERLER_JS);

    const context = {
        console,
        window: {},
        globalThis: {},
        self: {},
        document: {},
        URL,
        URLSearchParams
    };

    vm.createContext(context);

    try {
        vm.runInContext(source, context, {
            filename: HABERLER_JS
        });
    } catch (error) {
        throw new Error(
            `haberler.js çalıştırılamadı:\n${error.message}`
        );
    }

    let haberler = context.window.haberler;

    if (!Array.isArray(haberler)) {
        haberler = context.globalThis.haberler;
    }

    if (!Array.isArray(haberler)) {
        throw new Error(
            "haberler.js içinde window.haberler dizisi bulunamadı."
        );
    }

    return haberler.map((haber) => {
        const copy = { ...haber };

        copy.slug = getSlug(copy);
        copy.url = getNewsURL(copy);

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
       Eğer içerik HTML olarak verilmişse direkt kullan.
       Plain text ise satırlara göre paragraflara ayır.
    */

    if (/<(p|h2|h3|ul|ol|li|strong|em|blockquote|br)[\s>]/i.test(text)) {
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
           BÜYÜK HARFLİ başlıkları bölüm başlığı olarak göster.
        */

        if (
            temiz.length > 3 &&
            temiz.length < 120 &&
            temiz === temiz.toLocaleUpperCase("tr-TR") &&
            !/[.!?]$/.test(temiz)
        ) {
            html += `
                <h2>${escapeHTML(temiz)}</h2>
            `;
        } else {
            html += `
                <p>${escapeHTML(temiz)}</p>
            `;
        }
    }

    return html;
}

/* =========================================================
   HABER LİSTESİ
   ========================================================= */

function createNewsCard(haber) {
    const title = escapeHTML(getTitle(haber));
    const category = escapeHTML(getCategory(haber));
    const image = escapeAttribute(getImage(haber));
    const url = escapeAttribute(getNewsURL(haber));
    const date = escapeHTML(getDate(haber));

    return `
        <article class="news-card">
            <a href="${url}" class="news-card-link">

                <div class="news-card-image">
                    <img
                        src="${image}"
                        alt="${title}"
                        loading="lazy"
                    >
                </div>

                <div class="news-card-body">

                    <span class="news-card-category">
                        ${category}
                    </span>

                    <h3 class="news-card-title">
                        ${title}
                    </h3>

                    ${
                        date
                            ? `<time class="news-card-date">${date}</time>`
                            : ""
                    }

                </div>

            </a>
        </article>
    `;
}

function createNewsList(haberler) {
    return haberler
        .map(createNewsCard)
        .join("\n");
}

/* =========================================================
   HABER DETAY SAYFASI
   ========================================================= */

function createArticleHTML(haber) {
    const title = escapeHTML(getTitle(haber));
    const category = escapeHTML(getCategory(haber));
    const spot = escapeHTML(getSpot(haber));

    const image = escapeAttribute(getImage(haber));
    const date = escapeHTML(getDate(haber));
    const time = escapeHTML(getTime(haber));

    const url = getNewsURL(haber);

    const content = renderContent(getContent(haber));

    const shareText = encodeURIComponent(
        `${getTitle(haber)} - ${SITE_NAME}`
    );

    const shareURL = encodeURIComponent(url);

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
                            datetime="${escapeAttribute(date)}"
                            itemprop="datePublished"
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

                <strong>Bu haberi paylaş</strong>

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

            <strong>Haberİsta</strong>

            <p>
                Bu haber Haberİsta tarafından
                haber kaynaklarından derlenen bilgiler
                doğrultusunda hazırlanmıştır.
            </p>

        </div>

    </article>

    <aside class="article-sidebar">

        <div class="sidebar-box">

            <h2>Son Haberler</h2>

            <div class="sidebar-news-list">

                ${createSidebarNews(haber)}

            </div>

        </div>

    </aside>

</div>
`;
}

/* =========================================================
   SIDEBAR
   ========================================================= */

let GLOBAL_NEWS = [];

function createSidebarNews(currentHaber) {
    const others = GLOBAL_NEWS
        .filter((haber) => {
            return String(haber.id) !== String(currentHaber.id);
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
        .map((haber) => {
            const title = escapeHTML(getTitle(haber));
            const image = escapeAttribute(getImage(haber));
            const url = escapeAttribute(getNewsURL(haber));

            return `
                <a
                    class="sidebar-news-item"
                    href="${url}"
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
        })
        .join("");
}

/* =========================================================
   META DEĞİŞTİRME
   ========================================================= */

function replaceTitle(html, title) {
    const escapedTitle = escapeHTML(title);

    if (/<title>[\s\S]*?<\/title>/i.test(html)) {
        return html.replace(
            /<title>[\s\S]*?<\/title>/i,
            `<title>${escapedTitle} | ${SITE_NAME}</title>`
        );
    }

    return html.replace(
        /<\/head>/i,
        `<title>${escapedTitle} | ${SITE_NAME}</title></head>`
    );
}

function replaceMeta(html, name, content) {
    const escapedContent = escapeAttribute(content);

    const regex = new RegExp(
        `<meta\\s+[^>]*name=["']${name}["'][^>]*>`,
        "i"
    );

    if (regex.test(html)) {
        return html.replace(
            regex,
            `<meta name="${name}" content="${escapedContent}">`
        );
    }

    return html.replace(
        /<\/head>/i,
        `<meta name="${name}" content="${escapedContent}">\n</head>`
    );
}

function replacePropertyMeta(html, property, content) {
    const escapedContent = escapeAttribute(content);

    const regex = new RegExp(
        `<meta\\s+[^>]*property=["']${property}["'][^>]*>`,
        "i"
    );

    if (regex.test(html)) {
        return html.replace(
            regex,
            `<meta property="${property}" content="${escapedContent}">`
        );
    }

    return html.replace(
        /<\/head>/i,
        `<meta property="${property}" content="${escapedContent}">\n</head>`
    );
}

function replaceCanonical(html, url) {
    const escapedURL = escapeAttribute(url);

    const regex = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

    if (regex.test(html)) {
        return html.replace(
            regex,
            `<link rel="canonical" href="${escapedURL}">`
        );
    }

    return html.replace(
        /<\/head>/i,
        `<link rel="canonical" href="${escapedURL}">\n</head>`
    );
}

/* =========================================================
   SCHEMA.ORG
   ========================================================= */

function createArticleSchema(haber) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: getTitle(haber),
        description: getSpot(haber),
        image: [getImage(haber)],
        datePublished:
            `${getDate(haber)} ${getTime(haber)}`.trim(),
        dateModified:
            `${getDate(haber)} ${getTime(haber)}`.trim(),
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
   PLACEHOLDER DEĞİŞTİRME
   ========================================================= */

function replaceElementById(html, id, replacement) {
    const escapedId = id.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

    const regex = new RegExp(
        `<([a-zA-Z0-9]+)([^>]*\\bid=["']${escapedId}["'][^>]*)>[\\s\\S]*?<\\/\\1>`,
        "i"
    );

    if (!regex.test(html)) {
        throw new Error(
            `#${id} elementi bulunamadı.`
        );
    }

    return html.replace(regex, replacement);
}

/* =========================================================
   HABER DETAY SAYFASI OLUŞTUR
   ========================================================= */

function buildArticlePage(template, haber) {
    const title = getTitle(haber);
    const description =
        getSpot(haber) ||
        `${title} - Haberİsta`;

    const image = getImage(haber);
    const url = getNewsURL(haber);

    let html = template;

    /* TITLE */

    html = replaceTitle(html, title);

    /* DESCRIPTION */

    html = replaceMeta(
        html,
        "description",
        description
    );

    /* ROBOTS */

    html = replaceMeta(
        html,
        "robots",
        "index, follow, max-image-preview:large"
    );

    /* CANONICAL */

    html = replaceCanonical(html, url);

    /* OPEN GRAPH */

    html = replacePropertyMeta(
        html,
        "og:title",
        title
    );

    html = replacePropertyMeta(
        html,
        "og:description",
        description
    );

    html = replacePropertyMeta(
        html,
        "og:url",
        url
    );

    html = replacePropertyMeta(
        html,
        "og:image",
        image
    );

    html = replacePropertyMeta(
        html,
        "og:type",
        "article"
    );

    /* TWITTER */

    html = replaceMeta(
        html,
        "twitter:card",
        "summary_large_image"
    );

    html = replaceMeta(
        html,
        "twitter:title",
        title
    );

    html = replaceMeta(
        html,
        "twitter:description",
        description
    );

    html = replaceMeta(
        html,
        "twitter:image",
        image
    );

    /* ARTICLE */

    const articleHTML = createArticleHTML(haber);

    /*
       ÖNEMLİ:
       haber.html içinde mutlaka #articleContainer bulunmalı.
    */

    html = replaceElementById(
        html,
        "articleContainer",
        `
        <div id="articleContainer">
            ${articleHTML}
        </div>
        `
    );

    /* STATIC FLAG */

    if (/<body\b[^>]*>/i.test(html)) {
        html = html.replace(
            /<body\b([^>]*)>/i,
            function (match, attrs) {

                if (/data-static-article\s*=/i.test(attrs)) {
                    return match;
                }

                return `<body${attrs} data-static-article="true">`;
            }
        );
    }

    /* SCHEMA */

    html = html.replace(
        /<\/head>/i,
        `${createArticleSchema(haber)}\n</head>`
    );

    return html;
}

/* =========================================================
   ANA SAYFA HABER LİSTELERİ
   ========================================================= */

function injectHomepageNews(html, haberler) {
    const newsHTML = createNewsList(haberler);

    /*
       Eğer index.html içinde #news-container varsa
       otomatik olarak doldur.
    */

    if (html.includes('id="news-container"')) {
        try {
            html = replaceElementById(
                html,
                "news-container",
                `
                <div id="news-container">
                    ${newsHTML}
                </div>
                `
            );
        } catch (error) {
            log(
                "news-container bulunamadı, ana sayfa mevcut yapısı korunuyor."
            );
        }
    }

    /*
       Alternatif placeholder
    */

    if (html.includes('id="haberler-container"')) {
        try {
            html = replaceElementById(
                html,
                "haberler-container",
                `
                <div id="haberler-container">
                    ${newsHTML}
                </div>
                `
            );
        } catch (error) {
            log(
                "haberler-container değiştirilemedi."
            );
        }
    }

    return html;
}

/* =========================================================
   ANA BUILD
   ========================================================= */

function build() {
    console.log("");
    console.log("========================================");
    console.log("        HABERİSTA STATIC BUILD");
    console.log("========================================");
    console.log("");

    /* DOSYALARI KONTROL ET */

    if (!fileExists(INDEX_HTML)) {
        throw new Error(
            `index.html bulunamadı: ${INDEX_HTML}`
        );
    }

    if (!fileExists(HABER_HTML)) {
        throw new Error(
            `haber.html bulunamadı: ${HABER_HTML}`
        );
    }

    if (!fileExists(HABERLER_JS)) {
        throw new Error(
            `js/haberler.js bulunamadı: ${HABERLER_JS}`
        );
    }

    log("Dosyalar bulundu.");

    /* HABERLER */

    const haberler = loadNews();

    GLOBAL_NEWS = haberler;

    log(
        `${haberler.length} haber başarıyla yüklendi.`
    );

    /* TEMPLATE */

    const indexTemplate = readFile(INDEX_HTML);
    const articleTemplate = readFile(HABER_HTML);

    /* HABER TEMPLATE KONTROLÜ */

    if (!articleTemplate.includes('id="articleContainer"') &&
        !articleTemplate.includes("id='articleContainer'")) {

        throw new Error(
            `haber.html içinde #articleContainer bulunamadı.

haber.html içinde şu yapı bulunmalı:

<div id="articleContainer">
    ...
</div>`
        );
    }

    log(
        "#articleContainer bulundu."
    );

    /* =====================================================
       ANA SAYFA
       ===================================================== */

    let homepage = indexTemplate;

    homepage = injectHomepageNews(
        homepage,
        haberler
    );

    writeFile(
        INDEX_HTML,
        homepage
    );

    log("Ana sayfa güncellendi.");

    /* =====================================================
       HABER SAYFALARI
       ===================================================== */

    let successCount = 0;
    let errorCount = 0;

    for (const haber of haberler) {

        try {

            const slug = getSlug(haber);

            if (!slug) {
                throw new Error(
                    `Geçersiz slug: ${getTitle(haber)}`
                );
            }

            const articlePage =
                buildArticlePage(
                    articleTemplate,
                    haber
                );

            const articleDir =
                path.join(
                    OUTPUT_DIR,
                    "haber",
                    slug
                );

            fs.mkdirSync(
                articleDir,
                {
                    recursive: true
                }
            );

            const articlePath =
                path.join(
                    articleDir,
                    "index.html"
                );

            writeFile(
                articlePath,
                articlePage
            );

            successCount++;

            log(
                `✓ ${getTitle(haber)}`
            );

        } catch (error) {

            errorCount++;

            console.error(
                `✗ ${getTitle(haber)}`
            );

            console.error(
                error.message
            );
        }
    }

    /* =====================================================
       SONUÇ
       ===================================================== */

    console.log("");
    console.log("========================================");
    console.log("BUILD TAMAMLANDI");
    console.log("========================================");
    console.log(
        `Toplam haber : ${haberler.length}`
    );
    console.log(
        `Başarılı     : ${successCount}`
    );
    console.log(
        `Hatalı       : ${errorCount}`
    );
    console.log("========================================");
    console.log("");

    if (errorCount > 0) {
        throw new Error(
            `${errorCount} haber sayfası oluşturulamadı.`
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
