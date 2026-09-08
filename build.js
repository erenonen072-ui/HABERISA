"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const NEWS_FILE = path.join(ROOT, "js", "haberler.js");
const NEWS_DIR = path.join(ROOT, "haber");

const SITE_URL = "https://haberisa.vercel.app";

console.log("========================================");
console.log("HABERİSTA SEO BUILD BAŞLADI");
console.log("========================================");

/* =========================================================
   HABERLER.JS OKU
========================================================= */

if (!fs.existsSync(NEWS_FILE)) {
    throw new Error("js/haberler.js bulunamadı.");
}

const newsCode = fs.readFileSync(NEWS_FILE, "utf8");

const context = {
    console,
    window: {}
};

vm.createContext(context);

vm.runInContext(newsCode, context);

const haberler = context.window.haberler;

if (!Array.isArray(haberler)) {
    throw new Error("haberler.js içindeki haberler okunamadı.");
}

console.log("Toplam haber:", haberler.length);

/* =========================================================
   YARDIMCI FONKSİYONLAR
========================================================= */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function stripHTML(value) {
    return String(value ?? "")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
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
        .replace(/â/g, "a")
        .replace(/î/g, "i")
        .replace(/û/g, "u")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getImage(haber) {
    return (
        haber.gorsel ||
        haber.image ||
        haber.resim ||
        haber.foto ||
        ""
    ).toString().trim();
}

function absoluteImage(image) {
    if (!image) {
        return `${SITE_URL}/images/logo.jpeg`;
    }

    if (/^https?:\/\//i.test(image)) {
        return image;
    }

    if (image.startsWith("/")) {
        return SITE_URL + image;
    }

    return SITE_URL + "/" + image;
}

function parseDate(tarih, saat) {
    const months = {
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
        /(\d{1,2})\s+([A-Za-zÇĞİÖŞÜçğıöşü]+)\s+(\d{4})/i
    );

    if (!match) {
        return new Date().toISOString();
    }

    const day = match[1].padStart(2, "0");
    const month = months[match[2]] || "01";
    const year = match[3];

    const time = String(saat || "00:00");

    return `${year}-${month}-${day}T${time}:00+03:00`;
}

function getDescription(haber) {
    const spot = stripHTML(haber.spot || "");

    if (spot.length <= 160) {
        return spot;
    }

    return spot.substring(0, 157).trim() + "...";
}

function normalizeKeywords(haber) {
    const keywords = haber.seo?.keywords;

    if (Array.isArray(keywords)) {
        return keywords.join(", ");
    }

    if (typeof keywords === "string") {
        return keywords;
    }

    return "";
}

function normalizeContent(content) {
    const raw = String(content || "").trim();

    if (!raw) {
        return "<p>Haber içeriği hazırlanıyor.</p>";
    }

    /*
      İçerik HTML içeriyorsa olduğu gibi kullan.
      Düz metinse satırları paragraf haline getir.
    */

    if (/<[a-z][\s\S]*>/i.test(raw)) {
        return raw;
    }

    const blocks = raw
        .split(/\n\s*\n/)
        .map(x => x.trim())
        .filter(Boolean);

    return blocks
        .map(block => {
            const clean = escapeHTML(block)
                .replace(/\n/g, "<br>");

            return `<p>${clean}</p>`;
        })
        .join("\n");
}

function getAuthor(haber) {
    return (
        haber.yazar ||
        "Haberİsta Haber Merkezi"
    );
}

function getCanonical(haber) {
    const slug =
        haber.slug ||
        slugOlustur(haber.baslik);

    return `${SITE_URL}/haber/${slug}/`;
}

/* =========================================================
   HABER HTML
========================================================= */

function createArticleHTML(haber) {

    const title = String(
        haber.baslik || "Haberİsta"
    ).trim();

    const description = getDescription(haber);

    const image = absoluteImage(
        getImage(haber)
    );

    const canonical = getCanonical(haber);

    const published = parseDate(
        haber.tarih,
        haber.saat
    );

    const author = getAuthor(haber);

    const category =
        haber.kategori ||
        "Gündem";

    const keywords =
        normalizeKeywords(haber);

    const content =
        normalizeContent(haber.icerik);

    const source =
        haber.kaynak ||
        "Haberİsta Haber Merkezi";

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",

        "@id": canonical + "#newsarticle",

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
        },

        "headline": title,

        "description": description,

        "image": [
            image
        ],

        "datePublished": published,

        "dateModified": published,

        "articleSection": category,

        "author": {
            "@type": "Organization",
            "name": author
        },

        "publisher": {
            "@type": "Organization",
            "name": "HABERİSTA",
            "url": SITE_URL,
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/images/logo.jpeg`
            }
        },

        "isAccessibleForFree": true,

        "inLanguage": "tr-TR"
    };

    if (keywords) {
        jsonLD.keywords = keywords;
    }

    return `<!DOCTYPE html>
<html lang="tr">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>${escapeHTML(title)} | HABERİSTA</title>

    <meta
        name="description"
        content="${escapeHTML(description)}"
    >

    <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    >

    <meta
        name="author"
        content="${escapeHTML(author)}"
    >

    <meta
        name="publisher"
        content="HABERİSTA"
    >

    <meta
        name="theme-color"
        content="#111111"
    >

    <link
        rel="canonical"
        href="${escapeHTML(canonical)}"
    >

    ${
        keywords
            ? `
    <meta
        name="keywords"
        content="${escapeHTML(keywords)}"
    >
    `
            : ""
    }

    <!-- Open Graph -->

    <meta
        property="og:type"
        content="article"
    >

    <meta
        property="og:site_name"
        content="HABERİSTA"
    >

    <meta
        property="og:locale"
        content="tr_TR"
    >

    <meta
        property="og:title"
        content="${escapeHTML(title)}"
    >

    <meta
        property="og:description"
        content="${escapeHTML(description)}"
    >

    <meta
        property="og:url"
        content="${escapeHTML(canonical)}"
    >

    <meta
        property="og:image"
        content="${escapeHTML(image)}"
    >

    <meta
        property="article:published_time"
        content="${published}"
    >

    <meta
        property="article:section"
        content="${escapeHTML(category)}"
    >

    <!-- Twitter -->

    <meta
        name="twitter:card"
        content="summary_large_image"
    >

    <meta
        name="twitter:title"
        content="${escapeHTML(title)}"
    >

    <meta
        name="twitter:description"
        content="${escapeHTML(description)}"
    >

    <meta
        name="twitter:image"
        content="${escapeHTML(image)}"
    >

    <!-- Google AdSense -->

    <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6348449846402791"
        crossorigin="anonymous">
    </script>

    <!-- Google Analytics -->

    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H6TTCSCZR2">
    </script>

    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag(){
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag(
            'config',
            'G-H6TTCSCZR2'
        );
    </script>

    <!-- NewsArticle Structured Data -->

    <script type="application/ld+json">
${JSON.stringify(jsonLD, null, 4)}
    </script>

    <!-- Mevcut tasarım -->

    <link
        rel="stylesheet"
        href="/css/style.css"
    >

    <link
        rel="stylesheet"
        href="/css/haber.css"
    >

</head>

<body>

<header id="siteHeader">

    <div class="header-inner">

        <a
            href="/"
            class="logo"
        >
            HABERİSTA
        </a>

        <button
            type="button"
            id="menuBtn"
            aria-label="Menüyü aç"
        >
            ☰
        </button>

        <button
            type="button"
            id="searchBtn"
            aria-label="Ara"
        >
            🔍
        </button>

    </div>

</header>


<main>

    <article
        class="article-page"
        itemscope
        itemtype="https://schema.org/NewsArticle"
    >

        <header class="article-header">

            <div class="article-category">
                ${escapeHTML(category)}
            </div>

            <h1 itemprop="headline">
                ${escapeHTML(title)}
            </h1>

            <p
                class="article-spot"
                itemprop="description"
            >
                ${escapeHTML(haber.spot || description)}
            </p>

            <div class="article-meta">

                <span>
                    ${escapeHTML(haber.tarih || "")}
                </span>

                ${
                    haber.saat
                        ? `
                <span>•</span>

                <span>
                    ${escapeHTML(haber.saat)}
                </span>
                `
                        : ""
                }

                <span>•</span>

                <span>
                    ${escapeHTML(author)}
                </span>

            </div>

        </header>


        <figure class="article-image">

            <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(title)}"
                itemprop="image"
                loading="eager"
                fetchpriority="high"
            >

            <figcaption>
                ${escapeHTML(title)}
            </figcaption>

        </figure>


        <div
            class="article-content"
            itemprop="articleBody"
        >

            ${content}

        </div>


        <footer class="article-footer">

            <div class="haber-kaynak">

                <strong>Kaynak:</strong>
                ${escapeHTML(source)}

            </div>

            <div class="article-author">

                <strong>Haber:</strong>
                ${escapeHTML(author)}

            </div>

        </footer>

    </article>

</main>


<footer id="siteFooter">

    <div class="footer-content">

        <a href="/hakkimizda.html">
            Hakkımızda
        </a>

        <a href="/iletisim.html">
            İletişim
        </a>

        <a href="/gizlilik.html">
            Gizlilik
        </a>

        <a href="/cerez-politikasi.html">
            Çerez Politikası
        </a>

    </div>

</footer>

</body>
</html>`;
}

/* =========================================================
   ESKİ HABER KLASÖRÜNÜ TEMİZLE
========================================================= */

if (fs.existsSync(NEWS_DIR)) {

    const entries = fs.readdirSync(
        NEWS_DIR,
        { withFileTypes: true }
    );

    for (const entry of entries) {

        const fullPath =
            path.join(
                NEWS_DIR,
                entry.name
            );

        /*
          haber.html'yi silme.
          Sadece otomatik oluşturulmuş slug klasörlerini temizle.
        */

        if (entry.isDirectory()) {
            fs.rmSync(
                fullPath,
                {
                    recursive: true,
                    force: true
                }
            );
        }
    }

} else {

    fs.mkdirSync(
        NEWS_DIR,
        {
            recursive: true
        }
    );

}

/* =========================================================
   DUPLICATE ID KONTROLÜ
========================================================= */

const idSet = new Set();

for (const haber of haberler) {

    if (idSet.has(String(haber.id))) {

        console.warn(
            "⚠️ DUPLICATE ID:",
            haber.id,
            haber.baslik
        );

    }

    idSet.add(String(haber.id));
}

/* =========================================================
   DUPLICATE SLUG KONTROLÜ
========================================================= */

const slugSet = new Set();

for (const haber of haberler) {

    const slug =
        haber.slug ||
        slugOlustur(haber.baslik);

    if (slugSet.has(slug)) {

        console.warn(
            "⚠️ DUPLICATE SLUG:",
            slug
        );

        continue;
    }

    slugSet.add(slug);

    haber.slug = slug;

    const folder =
        path.join(
            NEWS_DIR,
            slug
        );

    fs.mkdirSync(
        folder,
        {
            recursive: true
        }
    );

    const file =
        path.join(
            folder,
            "index.html"
        );

    fs.writeFileSync(
        file,
        createArticleHTML(haber),
        "utf8"
    );

    console.log(
        "✓ Oluşturuldu:",
        `/haber/${slug}/`
    );
}

/* =========================================================
   SITEMAP
========================================================= */

const staticPages = [
    "/",
    "/gundem.html",
    "/ekonomi.html",
    "/spor.html",
    "/dunya.html",
    "/egitim.html",
    "/turkiye.html",
    "/son-dakika.html",
    "/hakkimizda.html",
    "/iletisim.html",
    "/gizlilik.html",
    "/cerez-politikasi.html"
];

const sitemapUrls = [];

for (const page of staticPages) {

    sitemapUrls.push(`
    <url>
        <loc>${SITE_URL}${page}</loc>
    </url>`);
}

for (const haber of haberler) {

    const slug =
        haber.slug ||
        slugOlustur(haber.baslik);

    sitemapUrls.push(`
    <url>
        <loc>${SITE_URL}/haber/${slug}/</loc>
        <lastmod>${parseDate(
            haber.tarih,
            haber.saat
        )}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${sitemapUrls.join("\n")}
</urlset>
`;

fs.writeFileSync(
    path.join(ROOT, "sitemap.xml"),
    sitemap.trim(),
    "utf8"
);

/* =========================================================
   ROBOTS
========================================================= */

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(
    path.join(ROOT, "robots.txt"),
    robots,
    "utf8"
);

console.log("");
console.log("========================================");
console.log("✓ HABERİSTA SEO BUILD TAMAMLANDI");
console.log("✓ Haber sayfaları oluşturuldu");
console.log("✓ sitemap.xml güncellendi");
console.log("✓ robots.txt güncellendi");
console.log(
    "✓ Toplam haber:",
    haberler.length
);
console.log("========================================");
