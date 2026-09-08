"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const HABER_HTML = path.join(ROOT, "haber.html");
const HABERLER_JS = path.join(ROOT, "js", "haberler.js");
const OUTPUT_DIR = path.join(ROOT, "haber");

const SITE_URL = "https://haberisa.vercel.app";
const SITE_NAME = "HABERİSTA";

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function stripHTML(value) {
    return String(value ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
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
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getTitle(haber) {
    return (
        haber.baslik ||
        haber.title ||
        "Haber"
    );
}

function getCategory(haber) {
    return (
        haber.kategori ||
        haber.category ||
        "Haber"
    );
}

function getSpot(haber) {
    return (
        haber.spot ||
        haber.ozet ||
        haber.description ||
        ""
    );
}

function getContent(haber) {
    return (
        haber.icerik ||
        haber.content ||
        haber.metin ||
        ""
    );
}

function getImage(haber) {
    return (
        haber.gorsel ||
        haber.resim ||
        haber.image ||
        haber.foto ||
        haber.imageUrl ||
        ""
    );
}

function getDate(haber) {
    return (
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        "Bugün"
    );
}

function getTime(haber) {
    return (
        haber.saat ||
        haber.time ||
        ""
    );
}

function getSource(haber) {
    return (
        haber.kaynak ||
        haber.source ||
        "HABERİSTA"
    );
}

function getAuthor(haber) {
    return (
        haber.yazar ||
        haber.author ||
        "Haberİsta Haber Merkezi"
    );
}

function getViews(haber) {
    return (
        haber.goruntulenme ||
        haber.views ||
        0
    );
}

function getImageURL(image) {
    if (!image) {
        return "";
    }

    const value = String(image).trim();

    if (
        value.startsWith("http://") ||
        value.startsWith("https://") ||
        value.startsWith("data:")
    ) {
        return value;
    }

    if (value.startsWith("/")) {
        return SITE_URL + value;
    }

    return SITE_URL + "/" + value;
}

function getISODate(haber) {
    if (
        haber.publishedAt ||
        haber.published_at ||
        haber.datePublished
    ) {
        return (
            haber.publishedAt ||
            haber.published_at ||
            haber.datePublished
        );
    }

    const tarih = getDate(haber);

    const aylar = {
        "Ocak": "01",
        "Şubat": "02",
        "Mart": "03",
        "Nisan": "04",
        "Mayıs": "05",
        "Haziran": "06",
        "Temmuz": "07",
        "Ağustos": "08",
        "Eylül": "09",
        "Ekim": "10",
        "Kasım": "11",
        "Aralık": "12"
    };

    const match = String(tarih).match(
        /(\d{1,2})\s+([A-Za-zÇçĞğİıÖöŞşÜü]+)\s+(\d{4})/
    );

    if (!match) {
        return "";
    }

    const gun = String(match[1]).padStart(2, "0");
    const ay = aylar[match[2]];
    const yil = match[3];

    if (!ay) {
        return "";
    }

    let saat = getTime(haber);

    if (!saat) {
        saat = "00:00";
    }

    const saatMatch = String(saat).match(
        /(\d{1,2}):(\d{2})/
    );

    let saatISO = "00:00:00";

    if (saatMatch) {
        saatISO =
            String(saatMatch[1]).padStart(2, "0") +
            ":" +
            saatMatch[2] +
            ":00";
    }

    return (
        yil +
        "-" +
        ay +
        "-" +
        gun +
        "T" +
        saatISO +
        "+03:00"
    );
}

function getDescription(haber) {
    let description =
        getSpot(haber) ||
        stripHTML(getContent(haber));

    description = String(description)
        .replace(/\s+/g, " ")
        .trim();

    if (!description) {
        description =
            "Türkiye ve dünyadan güncel haberleri HABERİSTA'da takip edin.";
    }

    if (description.length > 160) {
        description =
            description.substring(0, 157).trim() +
            "...";
    }

    return description;
}

function renderContent(content) {
    if (!content) {
        return `
            <p>
                Bu haberin detayları yakında güncellenecektir.
            </p>
        `;
    }

    const value = String(content).trim();

    /*
     * Haber içeriğinde zaten HTML varsa
     * olduğu gibi koruyoruz.
     */
    if (/<[a-z][\s\S]*>/i.test(value)) {
        return value;
    }

    return value
        .split(/\n+/)
        .map(text => text.trim())
        .filter(Boolean)
        .map(text => `<p>${escapeHTML(text)}</p>`)
        .join("\n");
}

function loadNews() {
    if (!fs.existsSync(HABERLER_JS)) {
        throw new Error(
            "js/haberler.js bulunamadı."
        );
    }

    const code = fs.readFileSync(
        HABERLER_JS,
        "utf8"
    );

    const context = {
        console,
        window: {}
    };

    vm.createContext(context);

    vm.runInContext(
        code,
        context,
        {
            filename: HABERLER_JS
        }
    );

    const haberler =
        context.window.haberler;

    if (!Array.isArray(haberler)) {
        throw new Error(
            "window.haberler bulunamadı veya dizi değil."
        );
    }

    return haberler;
}

function createArticleHTML(haber) {
    const title = getTitle(haber);
    const category = getCategory(haber);
    const spot = getSpot(haber);
    const content = getContent(haber);
    const image = getImage(haber);
    const date = getDate(haber);
    const time = getTime(haber);
    const source = getSource(haber);
    const author = getAuthor(haber);
    const views = getViews(haber);

    return `
<div class="article-layout">

    <article
        class="article-main"
        itemscope
        itemtype="https://schema.org/NewsArticle"
    >

        <header class="article-header">

            <div
                class="article-category"
                itemprop="articleSection"
            >
                ${escapeHTML(category)}
            </div>

            <div class="article-title">
                <h1 itemprop="headline">
                    ${escapeHTML(title)}
                </h1>
            </div>

            ${
                spot
                    ? `
            <div class="article-spot">
                <p itemprop="description">
                    ${escapeHTML(stripHTML(spot))}
                </p>
            </div>
            `
                    : ""
            }

            <div class="article-meta">

                <span>
                    📅 ${escapeHTML(date)}
                </span>

                ${
                    time
                        ? `
                <span>
                    🕒 ${escapeHTML(time)}
                </span>
                `
                        : ""
                }

                <span>
                    👁️ ${escapeHTML(views)}
                </span>

                <span>
                    📰 ${escapeHTML(source)}
                </span>

                <span>
                    ✍️ ${escapeHTML(author)}
                </span>

            </div>

        </header>

        <div class="mini-voice-reader">

            <button
                id="voiceStart"
                class="mini-voice-btn"
                onclick="startVoiceReader()"
                title="Haberi sesli oku"
            >
                🔊 Oku
            </button>

            <button
                id="voicePause"
                class="mini-control"
                onclick="pauseVoiceReader()"
                title="Duraklat"
            >
                ⏸
            </button>

            <button
                id="voiceResume"
                class="mini-control"
                onclick="resumeVoiceReader()"
                title="Devam et"
            >
                ▶
            </button>

            <button
                id="voiceStop"
                class="mini-control"
                onclick="stopVoiceReader()"
                title="Durdur"
            >
                ⏹
            </button>

            <span id="voiceStatus">
                Haberi dinle
            </span>

        </div>

        ${
            image
                ? `
        <div class="article-image-wrap">

            <img
                class="article-image"
                src="${escapeHTML(
                    image.startsWith("http")
                        ? image
                        : "/" + image.replace(/^\/+/, "")
                )}"
                alt="${escapeHTML(title)}"
                title="${escapeHTML(title)}"
                itemprop="image"
                loading="eager"
                decoding="async"
                width="1200"
                height="675"
            >

        </div>
        `
                : ""
        }

        <div
            id="articleContent"
            class="article-content"
            itemprop="articleBody"
        >

            ${renderContent(content)}

            <div class="article-share">

                <button
                    class="share-button"
                    onclick="shareArticle()"
                >
                    📤 Paylaş
                </button>

                <button
                    class="share-button"
                    onclick="copyArticleLink()"
                >
                    🔗 Linki Kopyala
                </button>

            </div>

        </div>

    </article>

    <aside class="article-sidebar">

        <div class="sidebar-box">

            <h3>
                Haber Bilgileri
            </h3>

            <div class="sidebar-info">
                <strong>Kategori</strong>
                <span>
                    ${escapeHTML(category)}
                </span>
            </div>

            <div class="sidebar-info">
                <strong>Tarih</strong>
                <span>
                    ${escapeHTML(date)}
                </span>
            </div>

            ${
                time
                    ? `
            <div class="sidebar-info">
                <strong>Saat</strong>
                <span>
                    ${escapeHTML(time)}
                </span>
            </div>
            `
                    : ""
            }

            <div class="sidebar-info">
                <strong>Görüntülenme</strong>
                <span>
                    ${escapeHTML(views)}
                </span>
            </div>

            <div class="sidebar-info">
                <strong>Yazar</strong>
                <span>
                    ${escapeHTML(author)}
                </span>
            </div>

            <div class="sidebar-info">
                <strong>Kaynak</strong>
                <span>
                    ${escapeHTML(source)}
                </span>
            </div>

        </div>

        <div class="sidebar-box">

            <h3>
                HABERİSTA
            </h3>

            <p
                style="
                    margin:0;
                    color:#555;
                    font-size:14px;
                    line-height:1.7;
                "
            >
                Türkiye ve dünyadan güncel haberleri
                hızlı, anlaşılır ve güvenilir şekilde
                takip edin.
            </p>

        </div>

    </aside>

</div>
`;
}

function createSchema(haber, canonical) {
    const title = getTitle(haber);
    const category = getCategory(haber);
    const description = getDescription(haber);
    const image = getImageURL(getImage(haber));
    const isoDate = getISODate(haber);
    const author = getAuthor(haber);

    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",

        "@id": canonical + "#article",

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
        },

        "headline": title,

        "description": description,

        "url": canonical,

        "inLanguage": "tr-TR",

        "articleSection": category,

        "isAccessibleForFree": true,

        "author": {
            "@type": "Person",
            "name": author
        },

        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": SITE_URL
        }
    };

    if (image) {
        schema.image = [image];
    }

    if (isoDate) {
        schema.datePublished = isoDate;
        schema.dateModified =
            haber.guncellendi ||
            haber.updatedAt ||
            haber.dateModified ||
            isoDate;
    }

    return JSON.stringify(
        schema,
        null,
        4
    );
}

function buildArticlePage(template, haber) {
    const title = getTitle(haber);
    const category = getCategory(haber);
    const description = getDescription(haber);
    const image = getImage(haber);
    const imageURL = getImageURL(image);

    const slug =
        haber.slug ||
        slugOlustur(title);

    const canonical =
        `${SITE_URL}/haber/${slug}`;

    const isoDate =
        getISODate(haber);

    let html = template;

    /*
     * TITLE
     */
    html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHTML(title)} | ${SITE_NAME}</title>`
    );

    /*
     * DESCRIPTION
     */
    html = html.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    /*
     * AUTHOR
     */
    html = html.replace(
        /(<meta\s+name="author"\s+content=")[^"]*(")/i,
        `$1${escapeHTML(getAuthor(haber))}$2`
    );

    /*
     * CANONICAL
     */
    html = html.replace(
        /(<link\s+id="canonicalLink"\s+rel="canonical"\s+href=")[^"]*(")/i,
        `$1${canonical}$2`
    );

    /*
     * OG TITLE
     */
    html = html.replace(
        /(<meta\s+id="ogTitle"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(title)} | ${SITE_NAME}$2`
    );

    /*
     * OG DESCRIPTION
     */
    html = html.replace(
        /(<meta\s+id="ogDescription"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    /*
     * OG URL
     */
    html = html.replace(
        /(<meta\s+id="ogUrl"[\s\S]*?content=")[^"]*(")/i,
        `$1${canonical}$2`
    );

    /*
     * OG IMAGE
     */
    if (imageURL) {
        html = html.replace(
            /(<meta\s+id="ogImage"[\s\S]*?content=")[^"]*(")/i,
            `$1${escapeHTML(imageURL)}$2`
        );
    }

    /*
     * TWITTER TITLE
     */
    html = html.replace(
        /(<meta\s+id="twitterTitle"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(title)} | ${SITE_NAME}$2`
    );

    /*
     * TWITTER DESCRIPTION
     */
    html = html.replace(
        /(<meta\s+id="twitterDescription"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    /*
     * TWITTER IMAGE
     */
    if (imageURL) {
        html = html.replace(
            /(<meta\s+id="twitterImage"[\s\S]*?content=")[^"]*(")/i,
            `$1${escapeHTML(imageURL)}$2`
        );
    }

    /*
     * ARTICLE PUBLISHED TIME
     */
    html = html.replace(
        /(<meta\s+id="articlePublishedTime"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(isoDate)}$2`
    );

    /*
     * ARTICLE MODIFIED TIME
     */
    html = html.replace(
        /(<meta\s+id="articleModifiedTime"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(
            haber.guncellendi ||
            haber.updatedAt ||
            haber.dateModified ||
            isoDate
        )}$2`
    );

    /*
     * ARTICLE SECTION
     */
    html = html.replace(
        /(<meta\s+id="articleSection"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(category)}$2`
    );

    /*
     * STATIC ARTICLE HTML
     */
    const articleHTML =
        createArticleHTML(haber);

    html = html.replace(
        /<div\s+id="articleContainer">[\s\S]*?<\/div>\s*<\/main>/i,
        `<div id="articleContainer">
${articleHTML}
</div>
</main>`
    );

    /*
     * STATIC JSON-LD
     */
    const schema =
        createSchema(
            haber,
            canonical
        );

    const schemaTag = `
<script
    id="newsArticleSchema"
    type="application/ld+json"
>${schema}
</script>
`;

    html = html.replace(
        /<\/head>/i,
        `${schemaTag}
</head>`
    );

    return html;
}

function cleanOutputDirectory() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(
            OUTPUT_DIR,
            { recursive: true }
        );
        return;
    }

    const entries =
        fs.readdirSync(
            OUTPUT_DIR,
            { withFileTypes: true }
        );

    for (const entry of entries) {
        const fullPath =
            path.join(
                OUTPUT_DIR,
                entry.name
            );

        fs.rmSync(
            fullPath,
            {
                recursive: true,
                force: true
            }
        );
    }
}

function buildSitemap(haberler) {
    const urls = [
        `${SITE_URL}/`,
        `${SITE_URL}/son-dakika.html`,
        `${SITE_URL}/gundem.html`
    ];

    for (const haber of haberler) {
        const title = getTitle(haber);

        const slug =
            haber.slug ||
            slugOlustur(title);

        urls.push(
            `${SITE_URL}/haber/${slug}`
        );
    }

    const uniqueUrls =
        [...new Set(urls)];

    const items =
        uniqueUrls
            .map(
                url => `
    <url>
        <loc>${escapeHTML(url)}</loc>
    </url>`
            )
            .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${items}
</urlset>
`;
}

function buildRobots() {
    return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function main() {
    console.log("");
    console.log("==================================");
    console.log(" HABERİSTA STATIC BUILD");
    console.log("==================================");
    console.log("");

    if (!fs.existsSync(HABER_HTML)) {
        throw new Error(
            "haber.html bulunamadı."
        );
    }

    const template =
        fs.readFileSync(
            HABER_HTML,
            "utf8"
        );

    const haberler =
        loadNews();

    console.log(
        `Toplam haber: ${haberler.length}`
    );

    cleanOutputDirectory();

    const slugMap =
        new Map();

    let generated = 0;

    for (const haber of haberler) {
        const title =
            getTitle(haber);

        const slug =
            haber.slug ||
            slugOlustur(title);

        if (!slug) {
            console.warn(
                `Slug oluşturulamadı: ${title}`
            );
            continue;
        }

        if (slugMap.has(slug)) {
            const oldTitle =
                slugMap.get(slug);

            console.warn("");
            console.warn(
                "⚠️ DUPLİKE SLUG"
            );
            console.warn(
                `Yeni: ${title}`
            );
            console.warn(
                `Eski: ${oldTitle}`
            );
            console.warn(
                `Bu haber atlandı.`
            );

            continue;
        }

        slugMap.set(
            slug,
            title
        );

        const articleDir =
            path.join(
                OUTPUT_DIR,
                slug
            );

        fs.mkdirSync(
            articleDir,
            {
                recursive: true
            }
        );

        const page =
            buildArticlePage(
                template,
                haber
            );

        fs.writeFileSync(
            path.join(
                articleDir,
                "index.html"
            ),
            page,
            "utf8"
        );

        generated++;

        console.log(
            `✓ ${generated}. ${title}`
        );
    }

    /*
     * SITEMAP
     */
    fs.writeFileSync(
        path.join(
            ROOT,
            "sitemap.xml"
        ),
        buildSitemap(haberler),
        "utf8"
    );

    /*
     * ROBOTS
     */
    fs.writeFileSync(
        path.join(
            ROOT,
            "robots.txt"
        ),
        buildRobots(),
        "utf8"
    );

    console.log("");
    console.log(
        "=================================="
    );
    console.log(
        `✓ ${generated} statik haber oluşturuldu.`
    );
    console.log(
        "✓ sitemap.xml oluşturuldu."
    );
    console.log(
        "✓ robots.txt oluşturuldu."
    );
    console.log(
        "=================================="
    );
    console.log("");
}

try {
    main();
} catch (error) {
    console.error("");
    console.error(
        "❌ BUILD HATASI:"
    );
    console.error(
        error.message
    );
    console.error("");

    process.exit(1);
}
