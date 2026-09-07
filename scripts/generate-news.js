"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const NEWS_FILE = path.join(ROOT, "js", "haberler.js");
const TEMPLATE_FILE = path.join(ROOT, "haber.html");
const OUTPUT_DIR = path.join(ROOT, "haber");

const SITE_URL = "https://haberisa.vercel.app";

/* =========================================================
   YARDIMCI FONKSİYONLAR
========================================================= */

function slugify(text) {
    return String(text || "")
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

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeJson(value) {
    return JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
}

function makeDescription(haber) {
    const text = String(
        haber.spot || haber.icerik || ""
    )
        .replace(/\s+/g, " ")
        .trim();

    return text.length > 155
        ? text.substring(0, 152).trim() + "..."
        : text;
}

/* =========================================================
   TARİH
========================================================= */

function dateToISO(tarih, saat) {
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

    const match = String(tarih || "").match(
        /(\d{1,2})\s+([A-Za-zÇĞİÖŞÜçğıöşü]+)\s+(\d{4})/
    );

    if (!match) {
        return new Date().toISOString();
    }

    const gun = String(match[1]).padStart(2, "0");
    const ay = aylar[match[2]] || "01";
    const yil = match[3];

    const saatMatch = String(
        saat || "00:00"
    ).match(
        /(\d{1,2}):(\d{2})/
    );

    const saatValue = saatMatch
        ? String(saatMatch[1]).padStart(2, "0")
        : "00";

    const dakika = saatMatch
        ? saatMatch[2]
        : "00";

    return `${yil}-${ay}-${gun}T${saatValue}:${dakika}:00+03:00`;
}

/* =========================================================
   İÇERİK → HTML
========================================================= */

function contentToHtml(content) {
    if (!content) {
        return "";
    }

    const raw = String(content)
        .replace(/\r\n/g, "\n")
        .trim();

    /*
     * İçerik zaten HTML ise doğrudan kullan.
     */
    if (
        /<(p|h2|h3|strong|ul|li|br)\b/i.test(raw)
    ) {
        return raw;
    }

    /*
     * Boş satırlara göre parçalara ayır.
     */
    const blocks = raw
        .split(/\n\s*\n/)
        .map(function (block) {
            return block
                .replace(/\s*\n\s*/g, " ")
                .trim();
        })
        .filter(Boolean);

    let html = "";

    for (const block of blocks) {

        /*
         * Madde listesi
         */
        if (/^[-•]\s+/.test(block)) {

            const items = block
                .split(/\n/)
                .map(function (x) {
                    return x
                        .replace(/^[-•]\s+/, "")
                        .trim();
                })
                .filter(Boolean);

            html += "<ul>";

            for (const item of items) {
                html += `<li>${escapeHtml(item)}</li>`;
            }

            html += "</ul>";

            continue;
        }

        /*
         * Büyük harfle yazılmış kısa satırları
         * başlık olarak kabul et.
         */
        const letters = block.replace(
            /[^A-Za-zÇĞİÖŞÜçğıöşü]/g,
            ""
        );

        const isHeading =
            letters.length >= 3 &&
            letters === letters.toLocaleUpperCase("tr-TR") &&
            block.length <= 120;

        if (isHeading) {

            html += `<h2>${escapeHtml(block)}</h2>`;

        } else {

            html += `<p>${escapeHtml(block)}</p>`;

        }
    }

    return html;
}

/* =========================================================
   HABER VERİTABANINI OKU
========================================================= */

function loadNews() {

    const code = fs.readFileSync(
        NEWS_FILE,
        "utf8"
    );

    const sandbox = {
        window: {},
        console: console
    };

    vm.createContext(sandbox);

    vm.runInContext(
        code,
        sandbox,
        {
            filename: NEWS_FILE
        }
    );

    if (
        !sandbox.window ||
        !Array.isArray(
            sandbox.window.haberler
        )
    ) {
        throw new Error(
            "haberler.js içerisindeki haberler dizisi bulunamadı."
        );
    }

    return sandbox.window.haberler;
}

/* =========================================================
   META DEĞİŞTİR
========================================================= */

function replaceMeta(
    html,
    regex,
    replacement
) {
    if (regex.test(html)) {
        return html.replace(
            regex,
            replacement
        );
    }

    return html;
}

/* =========================================================
   STATİK HABER HTML OLUŞTUR
========================================================= */

function createArticleHtml(
    haber,
    slug,
    template
) {

    const title = escapeHtml(
        haber.baslik
    );

    const description = escapeHtml(
        makeDescription(haber)
    );

    const category = escapeHtml(
        haber.kategori || "Haber"
    );

    const date = escapeHtml(
        haber.tarih || ""
    );

    const time = escapeHtml(
        haber.saat || ""
    );

    const source = escapeHtml(
        haber.kaynak || "HABERİSTA"
    );

    const image = String(
        haber.gorsel || ""
    ).replace(/^\/+/, "");

    const imageUrl = image
        ? `${SITE_URL}/${image}`
        : `${SITE_URL}/images/logo.png`;

    const articleUrl =
        `${SITE_URL}/haber/${slug}`;

    const publishedISO = dateToISO(
        haber.tarih,
        haber.saat
    );

    const contentHtml = contentToHtml(
        haber.icerik
    );

    /* =====================================================
       STATİK HABER GÖVDESİ
    ===================================================== */

    const staticArticle = `
<article
    class="article-card"
    data-static-article="true"
>

    <div class="article-category">
        ${category}
    </div>

    <h1 class="article-title">
        ${title}
    </h1>

    <p class="article-spot">
        ${escapeHtml(haber.spot || "")}
    </p>

    <div class="article-meta">

        <span>
            📅 ${date}
        </span>

        <span>
            ⏰ ${time}
        </span>

        <span>
            📰 ${source}
        </span>

    </div>

    <div
        class="voice-reader"
        aria-label="Haber sesli okuma"
    >

        <button
            type="button"
            onclick="startVoiceReader()"
        >
            🔊 Oku
        </button>

        <button
            type="button"
            onclick="pauseVoiceReader()"
        >
            ⏸
        </button>

        <button
            type="button"
            onclick="resumeVoiceReader()"
        >
            ▶
        </button>

        <button
            type="button"
            onclick="stopVoiceReader()"
        >
            ⏹
        </button>

    </div>

    ${
        image
            ? `
    <figure class="article-image">

        <img
            src="/${escapeHtml(image)}"
            alt="${title}"
            loading="eager"
            decoding="async"
        >

    </figure>
    `
            : ""
    }

    <div class="article-content">
        ${contentHtml}
    </div>

    <div class="article-share">

        <button
            type="button"
            onclick="shareArticle()"
        >
            📤 Paylaş
        </button>

        <button
            type="button"
            onclick="copyArticleLink()"
        >
            🔗 Linki Kopyala
        </button>

    </div>

    <div class="article-source">
        Kaynak: ${source}
    </div>

</article>
`.trim();

    /* =====================================================
       NEWSARTICLE JSON-LD
    ===================================================== */

    const schema = {

        "@context":
            "https://schema.org",

        "@type":
            "NewsArticle",

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },

        "headline":
            haber.baslik,

        "description":
            makeDescription(haber),

        "image": [
            imageUrl
        ],

        "datePublished":
            publishedISO,

        "dateModified":
            publishedISO,

        "author": {
            "@type":
                "Organization",

            "name":
                haber.kaynak ||
                "HABERİSTA"
        },

        "publisher": {
            "@type":
                "Organization",

            "name":
                "HABERİSTA",

            "url":
                SITE_URL
        },

        "articleSection":
            haber.kategori ||
            "Haber",

        "inLanguage":
            "tr-TR",

        "url":
            articleUrl
    };

    let html = template;

    /* =====================================================
       TITLE
    ===================================================== */

    html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${title} | HABERİSTA</title>`
    );

    /* =====================================================
       DESCRIPTION
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+name=["']description["'][^>]*>/i,
        `<meta name="description" content="${description}">`
    );

    /* =====================================================
       CANONICAL
    ===================================================== */

    html = replaceMeta(
        html,
        /<link\s+rel=["']canonical["'][^>]*>/i,
        `<link rel="canonical" href="${articleUrl}">`
    );

    /* =====================================================
       OG TITLE
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+property=["']og:title["'][^>]*>/i,
        `<meta property="og:title" content="${title}">`
    );

    /* =====================================================
       OG DESCRIPTION
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+property=["']og:description["'][^>]*>/i,
        `<meta property="og:description" content="${description}">`
    );

    /* =====================================================
       OG URL
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+property=["']og:url["'][^>]*>/i,
        `<meta property="og:url" content="${articleUrl}">`
    );

    /* =====================================================
       OG IMAGE
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+property=["']og:image["'][^>]*>/i,
        `<meta property="og:image" content="${imageUrl}">`
    );

    /* =====================================================
       TWITTER TITLE
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+name=["']twitter:title["'][^>]*>/i,
        `<meta name="twitter:title" content="${title}">`
    );

    /* =====================================================
       TWITTER DESCRIPTION
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+name=["']twitter:description["'][^>]*>/i,
        `<meta name="twitter:description" content="${description}">`
    );

    /* =====================================================
       TWITTER IMAGE
    ===================================================== */

    html = replaceMeta(
        html,
        /<meta\s+name=["']twitter:image["'][^>]*>/i,
        `<meta name="twitter:image" content="${imageUrl}">`
    );

    /* =====================================================
       HABER CONTAINER
    ===================================================== */

    const containerRegex =
        /<div\s+id=["']articleContainer["'][^>]*>[\s\S]*?<\/div>/i;

    if (containerRegex.test(html)) {

        html = html.replace(
            containerRegex,
            `<div id="articleContainer">
    ${staticArticle}
</div>`
        );

    } else {

        throw new Error(
            "haber.html içerisinde articleContainer bulunamadı."
        );

    }

    /* =====================================================
       JSON-LD
    ===================================================== */

    const jsonLd = `
<script type="application/ld+json">
${escapeJson(schema)}
</script>
`.trim();

    html = html.replace(
        /<\/head>/i,
        `${jsonLd}\n</head>`
    );

    /* =====================================================
       STATİK HABER BİLGİSİ
    ===================================================== */

    const staticData = `
<script>
window.STATIC_ARTICLE = {
    slug: ${JSON.stringify(slug)},
    id: ${JSON.stringify(haber.id)}
};
</script>
`.trim();

    html = html.replace(
        /<\/head>/i,
        `${staticData}\n</head>`
    );

    return html;
}

/* =========================================================
   ANA İŞLEM
========================================================= */

function generate() {

    console.log("");
    console.log(
        "======================================"
    );
    console.log(
        " HABERİSTA STATİK HABER OLUŞTURUCU"
    );
    console.log(
        "======================================"
    );
    console.log("");

    /* Haberleri oku */

    const news = loadNews();

    /* Template oku */

    const template = fs.readFileSync(
        TEMPLATE_FILE,
        "utf8"
    );

    /* Çıktı klasörü oluştur */

    if (!fs.existsSync(OUTPUT_DIR)) {

        fs.mkdirSync(
            OUTPUT_DIR,
            {
                recursive: true
            }
        );

    }

    /*
     * Eski statik haber klasörlerini temizle.
     */

    for (
        const item of fs.readdirSync(
            OUTPUT_DIR
        )
    ) {

        const itemPath =
            path.join(
                OUTPUT_DIR,
                item
            );

        if (
            fs.existsSync(itemPath) &&
            fs.statSync(itemPath).isDirectory()
        ) {

            fs.rmSync(
                itemPath,
                {
                    recursive: true,
                    force: true
                }
            );

        }

    }

    const usedSlugs = new Set();

    let generated = 0;

    /* =====================================================
       HER HABER İÇİN STATİK SAYFA
    ===================================================== */

    for (const haber of news) {

        if (
            !haber ||
            !haber.baslik
        ) {
            continue;
        }

        let baseSlug =
            slugify(haber.baslik);

        if (!baseSlug) {

            baseSlug =
                `haber-${haber.id || generated + 1}`;

        }

        let slug = baseSlug;

        let counter = 2;

        /*
         * Aynı başlık varsa slug çakışmasını önle.
         */

        while (
            usedSlugs.has(slug)
        ) {

            slug =
                `${baseSlug}-${counter}`;

            counter++;

        }

        usedSlugs.add(slug);

        /*
         * Haber klasörü
         */

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

        /*
         * HTML oluştur
         */

        const articleHtml =
            createArticleHtml(
                haber,
                slug,
                template
            );

        /*
         * index.html yaz
         */

        fs.writeFileSync(
            path.join(
                articleDir,
                "index.html"
            ),
            articleHtml,
            "utf8"
        );

        generated++;

        console.log(
            `✓ ${generated}. ${slug}`
        );
    }

    console.log("");

    console.log(
        `Toplam ${generated} statik haber oluşturuldu.`
    );

    console.log("");

    console.log(
        `Çıktı: ${OUTPUT_DIR}`
    );

    console.log("");

    console.log(
        "======================================"
    );

    console.log(
        " İŞLEM TAMAMLANDI"
    );

    console.log(
        "======================================"
    );

    console.log("");
}

/* =========================================================
   BAŞLAT
========================================================= */

try {

    generate();

} catch (error) {

    console.error("");

    console.error(
        "❌ HATA:"
    );

    console.error(
        error
    );

    console.error("");

    process.exit(1);
}
