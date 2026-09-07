"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

/*
=========================================================
 HABERİSTA - STATİK HABER SAYFASI OLUŞTURUCU
=========================================================

Klasör yapısı:

HABERISA/
├── js/
│   └── haberler.js
├── haber.html
├── scripts/
│   └── generate-news.js
└── haber/
    └── haber-slug/
        └── index.html

Bu script:
1. js/haberler.js dosyasını okur.
2. haberler dizisini güvenli şekilde çıkarır.
3. haber.html dosyasını şablon olarak kullanır.
4. Her haber için statik HTML üretir.
5. /haber/slug/ klasörüne index.html koyar.
=========================================================
*/

const ROOT = path.join(__dirname, "..");

const NEWS_FILE = path.join(
    ROOT,
    "js",
    "haberler.js"
);

const TEMPLATE_FILE = path.join(
    ROOT,
    "haber.html"
);

const OUTPUT_DIR = path.join(
    ROOT,
    "haber"
);

/*
=========================================================
 DOSYA KONTROLÜ
=========================================================
*/

if (!fs.existsSync(NEWS_FILE)) {
    throw new Error(
        `haberler.js bulunamadı: ${NEWS_FILE}`
    );
}

if (!fs.existsSync(TEMPLATE_FILE)) {
    throw new Error(
        `haber.html bulunamadı: ${TEMPLATE_FILE}`
    );
}

/*
=========================================================
 SLUG OLUŞTUR
=========================================================
*/

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

/*
=========================================================
 HTML ESCAPE
=========================================================
*/

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/*
=========================================================
 JAVASCRIPT DİZİSİNİN KAPANIŞINI BUL
=========================================================

haberler.js bir browser JS dosyası olduğu için
dosyanın tamamını vm ile çalıştırmak yerine sadece:

const haberler = [ ... ];

kısmını alıyoruz.

Böylece window, document vb. gerektiren kodlar
build sırasında çalıştırılmıyor.
=========================================================
*/

function findMatchingBracket(source, startIndex) {
    let squareDepth = 0;
    let curlyDepth = 0;
    let roundDepth = 0;

    let quote = null;
    let template = false;
    let escaped = false;
    let lineComment = false;
    let blockComment = false;

    for (
        let i = startIndex;
        i < source.length;
        i++
    ) {
        const char = source[i];
        const next = source[i + 1];

        /*
        -------------------------------------------------
        LINE COMMENT
        -------------------------------------------------
        */

        if (lineComment) {
            if (char === "\n") {
                lineComment = false;
            }

            continue;
        }

        /*
        -------------------------------------------------
        BLOCK COMMENT
        -------------------------------------------------
        */

        if (blockComment) {
            if (
                char === "*" &&
                next === "/"
            ) {
                blockComment = false;
                i++;
            }

            continue;
        }

        /*
        -------------------------------------------------
        STRING ESCAPE
        -------------------------------------------------
        */

        if (escaped) {
            escaped = false;
            continue;
        }

        /*
        -------------------------------------------------
        QUOTE
        -------------------------------------------------
        */

        if (quote) {
            if (char === "\\") {
                escaped = true;
                continue;
            }

            if (char === quote) {
                quote = null;
            }

            continue;
        }

        /*
        -------------------------------------------------
        TEMPLATE
        -------------------------------------------------
        */

        if (template) {
            if (char === "\\") {
                escaped = true;
                continue;
            }

            if (char === "`") {
                template = false;
            }

            continue;
        }

        /*
        -------------------------------------------------
        COMMENT BAŞLANGICI
        -------------------------------------------------
        */

        if (
            char === "/" &&
            next === "/"
        ) {
            lineComment = true;
            i++;
            continue;
        }

        if (
            char === "/" &&
            next === "*"
        ) {
            blockComment = true;
            i++;
            continue;
        }

        /*
        -------------------------------------------------
        STRING BAŞLANGICI
        -------------------------------------------------
        */

        if (
            char === '"' ||
            char === "'"
        ) {
            quote = char;
            continue;
        }

        if (char === "`") {
            template = true;
            continue;
        }

        /*
        -------------------------------------------------
        PARANTEZLER
        -------------------------------------------------
        */

        if (char === "[") {
            squareDepth++;
            continue;
        }

        if (char === "]") {
            squareDepth--;

            if (
                squareDepth === 0 &&
                curlyDepth === 0 &&
                roundDepth === 0
            ) {
                return i;
            }

            continue;
        }

        if (char === "{") {
            curlyDepth++;
            continue;
        }

        if (char === "}") {
            curlyDepth--;
            continue;
        }

        if (char === "(") {
            roundDepth++;
            continue;
        }

        if (char === ")") {
            roundDepth--;
            continue;
        }
    }

    return -1;
}

/*
=========================================================
 HABERLER.JS İÇİNDEN HABERLER DİZİSİNİ ÇIKAR
=========================================================
*/

function loadNews() {
    const source = fs.readFileSync(
        NEWS_FILE,
        "utf8"
    );

    const match =
        source.match(
            /\b(?:const|let|var)\s+haberler\s*=\s*\[/
        );

    if (!match) {
        throw new Error(
            "haberler.js içinde 'haberler = [...]' dizisi bulunamadı."
        );
    }

    const arrayStart =
        match.index +
        match[0].lastIndexOf("[");

    const arrayEnd =
        findMatchingBracket(
            source,
            arrayStart
        );

    if (arrayEnd === -1) {
        throw new Error(
            "haberler dizisinin kapanışı bulunamadı."
        );
    }

    const arraySource =
        source.slice(
            arrayStart,
            arrayEnd + 1
        );

    const context = {};

    vm.createContext(context);

    const code =
        `result = ${arraySource};`;

    try {
        vm.runInContext(
            code,
            context,
            {
                timeout: 5000
            }
        );
    } catch (error) {
        throw new Error(
            "haberler.js içindeki haberler dizisi okunamadı.\n\n" +
            error.message
        );
    }

    const haberler =
        context.result;

    if (!Array.isArray(haberler)) {
        throw new Error(
            "haberler dizisi geçerli bir Array değil."
        );
    }

    return haberler;
}

/*
=========================================================
 GÖRSEL YOLU
=========================================================
*/

function getImagePath(haber) {
    const image =
        haber.resim ||
        haber.image ||
        haber.gorsel ||
        haber.foto ||
        haber.imageUrl ||
        "";

    if (!image) {
        return "";
    }

    if (
        image.startsWith("http://") ||
        image.startsWith("https://") ||
        image.startsWith("data:") ||
        image.startsWith("/")
    ) {
        return image;
    }

    return "/" + image;
}

/*
=========================================================
 İÇERİK OLUŞTUR
=========================================================
*/

function renderContent(content) {
    if (!content) {
        return `
            <p>
                Bu haberin detayları
                yakında güncellenecektir.
            </p>
        `;
    }

    const text = String(content);

    /*
    HTML zaten varsa koru.
    */
    if (/<[a-z][\s\S]*>/i.test(text)) {
        return text;
    }

    /*
    Düz metni paragraflara ayır.
    */
    return text
        .split(/\n+/)
        .map(
            item => item.trim()
        )
        .filter(Boolean)
        .map(
            item =>
                `<p>${escapeHtml(item)}</p>`
        )
        .join("\n");
}

/*
=========================================================
 HABER İÇERİĞİ HTML
=========================================================
*/

function createArticleContent(haber) {
    const title =
        haber.baslik ||
        haber.title ||
        "Haber";

    const spot =
        haber.spot ||
        haber.ozet ||
        haber.description ||
        "";

    const content =
        haber.icerik ||
        haber.content ||
        haber.metin ||
        "";

    const category =
        haber.kategori ||
        haber.category ||
        "Haber";

    const date =
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        "";

    const time =
        haber.saat ||
        haber.time ||
        "";

    const source =
        haber.kaynak ||
        haber.source ||
        "HABERİSTA";

    const views =
        haber.goruntulenme ??
        haber.views ??
        0;

    const image =
        getImagePath(haber);

    const imageHtml = image
        ? `
            <div class="article-image-wrap">
                <img
                    class="article-image"
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(title)}"
                    loading="eager"
                >
            </div>
        `
        : "";

    const timeHtml = time
        ? `
            <span>
                🕒 ${escapeHtml(time)}
            </span>
        `
        : "";

    const spotHtml = spot
        ? `
            <div class="article-spot">
                <p>
                    ${escapeHtml(spot)}
                </p>
            </div>
        `
        : "";

    return `
        <div class="article-layout">

            <article class="article-main">

                <header class="article-header">

                    <div class="article-category">
                        ${escapeHtml(category)}
                    </div>

                    <div class="article-title">
                        <h1>
                            ${escapeHtml(title)}
                        </h1>
                    </div>

                    ${spotHtml}

                    <div class="article-meta">

                        <span>
                            📅 ${escapeHtml(date)}
                        </span>

                        ${timeHtml}

                        <span>
                            👁️ ${escapeHtml(views)}
                        </span>

                        <span>
                            📰 ${escapeHtml(source)}
                        </span>

                    </div>

                </header>

                <div class="mini-voice-reader">

                    <button
                        id="voiceStart"
                        class="mini-voice-btn"
                        onclick="startVoiceReader()"
                    >
                        🔊 Oku
                    </button>

                    <button
                        id="voicePause"
                        class="mini-control"
                        onclick="pauseVoiceReader()"
                    >
                        ⏸
                    </button>

                    <button
                        id="voiceResume"
                        class="mini-control"
                        onclick="resumeVoiceReader()"
                    >
                        ▶
                    </button>

                    <button
                        id="voiceStop"
                        class="mini-control"
                        onclick="stopVoiceReader()"
                    >
                        ⏹
                    </button>

                    <span id="voiceStatus">
                        Haberi dinle
                    </span>

                </div>

                ${imageHtml}

                <div
                    id="articleContent"
                    class="article-content"
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
                            ${escapeHtml(category)}
                        </span>
                    </div>

                    <div class="sidebar-info">
                        <strong>Tarih</strong>
                        <span>
                            ${escapeHtml(date)}
                        </span>
                    </div>

                    ${
                        time
                            ? `
                                <div class="sidebar-info">
                                    <strong>Saat</strong>
                                    <span>
                                        ${escapeHtml(time)}
                                    </span>
                                </div>
                            `
                            : ""
                    }

                    <div class="sidebar-info">
                        <strong>Görüntülenme</strong>
                        <span>
                            ${escapeHtml(views)}
                        </span>
                    </div>

                    <div class="sidebar-info">
                        <strong>Kaynak</strong>
                        <span>
                            ${escapeHtml(source)}
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
                        Türkiye ve dünyadan
                        güncel haberleri
                        hızlı, anlaşılır ve
                        güvenilir şekilde takip edin.
                    </p>

                </div>

            </aside>

        </div>
    `;
}

/*
=========================================================
 META AÇIKLAMASI
=========================================================
*/

function getDescription(haber) {
    const title =
        haber.baslik ||
        haber.title ||
        "HABERİSTA";

    const spot =
        haber.spot ||
        haber.ozet ||
        haber.description ||
        "";

    const content =
        haber.icerik ||
        haber.content ||
        haber.metin ||
        "";

    return String(
        spot ||
        content ||
        title
    )
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160);
}

/*
=========================================================
 TEMPLATE DÜZENLE
=========================================================
*/

function prepareTemplate(template, haber) {
    const title =
        haber.baslik ||
        haber.title ||
        "Haber";

    const category =
        haber.kategori ||
        haber.category ||
        "Haber";

    const date =
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        "";

    const image =
        getImagePath(haber);

    const slug =
        haber.slug ||
        slugOlustur(title);

    const canonical =
        `https://haberisa.vercel.app/haber/${slug}`;

    const description =
        getDescription(haber);

    /*
    -----------------------------------------------------
    ARTICLE CONTAINER
    -----------------------------------------------------
    */

    const articleHtml =
        createArticleContent(haber);

    const containerRegex =
        /<div\s+id=["']articleContainer["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/i;

    if (!containerRegex.test(template)) {
        throw new Error(
            "haber.html içinde articleContainer bulunamadı."
        );
    }

    let result =
        template.replace(
            containerRegex,
            `
        <div id="articleContainer">
            ${articleHtml}
        </div>
        `
        );

    /*
    -----------------------------------------------------
    DYNAMIC HABERLER.JS DOSYASINI KALDIR
    -----------------------------------------------------

    Statik sayfada haberler.js gerekli değil.
    Çünkü haber zaten HTML'in içine yazıldı.
    -----------------------------------------------------
    */

    result =
        result.replace(
            /\s*<script\s+src=["']\/js\/haberler\.js["']><\/script>\s*/i,
            "\n"
        );

    /*
    -----------------------------------------------------
    RENDERARTICLE ÇAĞRISINI DEVRE DIŞI BIRAK
    -----------------------------------------------------

    Yoksa browser sayfayı açınca tekrar URL'den haber
    arayıp statik içeriğin üzerine "Haber Bulunamadı"
    yazabilir.
    -----------------------------------------------------
    */

    result =
        result.replace(
            /renderArticle\s*\(\s*\)\s*;/g,
            "/* renderArticle(); */"
        );

    /*
    -----------------------------------------------------
    TITLE
    -----------------------------------------------------
    */

    result =
        result.replace(
            /<title>[\s\S]*?<\/title>/i,
            `
<title>
    ${escapeHtml(title)} | HABERİSTA
</title>
            `
        );

    /*
    -----------------------------------------------------
    DESCRIPTION
    -----------------------------------------------------
    */

    const descriptionMetaRegex =
        /<meta\s+name=["']description["'][^>]*>/i;

    if (descriptionMetaRegex.test(result)) {
        result =
            result.replace(
                descriptionMetaRegex,
                `
<meta
    name="description"
    content="${escapeHtml(description)}"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    CANONICAL
    -----------------------------------------------------
    */

    const canonicalRegex =
        /<link\s+rel=["']canonical["'][^>]*>/i;

    if (canonicalRegex.test(result)) {
        result =
            result.replace(
                canonicalRegex,
                `
<link
    rel="canonical"
    href="${canonical}"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    OG TITLE
    -----------------------------------------------------
    */

    const ogTitleRegex =
        /<meta\s+property=["']og:title["'][^>]*>/i;

    if (ogTitleRegex.test(result)) {
        result =
            result.replace(
                ogTitleRegex,
                `
<meta
    property="og:title"
    content="${escapeHtml(title)} | HABERİSTA"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    OG DESCRIPTION
    -----------------------------------------------------
    */

    const ogDescriptionRegex =
        /<meta\s+property=["']og:description["'][^>]*>/i;

    if (ogDescriptionRegex.test(result)) {
        result =
            result.replace(
                ogDescriptionRegex,
                `
<meta
    property="og:description"
    content="${escapeHtml(description)}"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    OG URL
    -----------------------------------------------------
    */

    const ogUrlRegex =
        /<meta\s+property=["']og:url["'][^>]*>/i;

    if (ogUrlRegex.test(result)) {
        result =
            result.replace(
                ogUrlRegex,
                `
<meta
    property="og:url"
    content="${canonical}"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    OG IMAGE
    -----------------------------------------------------
    */

    const ogImageRegex =
        /<meta\s+property=["']og:image["'][^>]*>/i;

    if (
        image &&
        ogImageRegex.test(result)
    ) {
        const absoluteImage =
            image.startsWith("http")
                ? image
                : `https://haberisa.vercel.app${image}`;

        result =
            result.replace(
                ogImageRegex,
                `
<meta
    property="og:image"
    content="${escapeHtml(absoluteImage)}"
>
                `
            );
    }

    /*
    -----------------------------------------------------
    TARİH BİLGİSİ
    -----------------------------------------------------
    */

    const articlePublishedRegex =
        /<meta\s+property=["']article:published_time["'][^>]*>/i;

    if (articlePublishedRegex.test(result)) {
        result =
            result.replace(
                articlePublishedRegex,
                `
<meta
    property="article:published_time"
    content="${escapeHtml(date)}"
>
                `
            );
    }

    return result;
}

/*
=========================================================
 JSON-LD EKLE
=========================================================
*/

function addJsonLd(html, haber) {
    const title =
        haber.baslik ||
        haber.title ||
        "Haber";

    const category =
        haber.kategori ||
        haber.category ||
        "Haber";

    const date =
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        "";

    const spot =
        haber.spot ||
        haber.ozet ||
        haber.description ||
        "";

    const image =
        getImagePath(haber);

    const slug =
        haber.slug ||
        slugOlustur(title);

    const url =
        `https://haberisa.vercel.app/haber/${slug}`;

    const description =
        getDescription(haber);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "description": description,
        "articleSection": category,
        "datePublished": date,
        "dateModified": date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "author": {
            "@type": "Organization",
            "name": "HABERİSTA"
        },
        "publisher": {
            "@type": "Organization",
            "name": "HABERİSTA"
        }
    };

    if (image) {
        jsonLd.image = [
            image.startsWith("http")
                ? image
                : `https://haberisa.vercel.app${image}`
        ];
    }

    const script = `
<script type="application/ld+json">
${JSON.stringify(
    jsonLd,
    null,
    2
)}
</script>
`;

    /*
    JSON-LD zaten varsa değiştirelim.
    */

    const existing =
        /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i;

    if (existing.test(html)) {
        return html.replace(
            existing,
            script
        );
    }

    return html.replace(
        /<\/head>/i,
        `${script}\n</head>`
    );
}

/*
=========================================================
 KLASÖR TEMİZLEME
=========================================================
*/

function prepareOutputDirectory() {
    /*
    haber klasörünü oluştur.
    */

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(
            OUTPUT_DIR,
            {
                recursive: true
            }
        );
    }

    /*
    Sadece bizim oluşturduğumuz haber alt klasörlerini
    temizle.

    Ana /haber klasörünü silmiyoruz.
    */

    const entries =
        fs.readdirSync(
            OUTPUT_DIR,
            {
                withFileTypes: true
            }
        );

    for (const entry of entries) {
        const fullPath =
            path.join(
                OUTPUT_DIR,
                entry.name
            );

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
}

/*
=========================================================
 TEK HABER OLUŞTUR
=========================================================
*/

function generateArticle(
    template,
    haber,
    index
) {
    const title =
        haber.baslik ||
        haber.title ||
        `haber-${index + 1}`;

    let slug =
        haber.slug ||
        slugOlustur(title);

    if (!slug) {
        slug =
            `haber-${haber.id || index + 1}`;
    }

    /*
    Aynı slug iki kez gelirse bozulmaması için.
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

    let html =
        prepareTemplate(
            template,
            haber
        );

    html =
        addJsonLd(
            html,
            haber
        );

    const outputFile =
        path.join(
            articleDir,
            "index.html"
        );

    fs.writeFileSync(
        outputFile,
        html,
        "utf8"
    );

    return {
        slug,
        title,
        outputFile
    };
}

/*
=========================================================
 ANA BUILD
=========================================================
*/

function main() {
    console.log("");
    console.log(
        "=========================================="
    );
    console.log(
        " HABERİSTA HABER SAYFASI BUILD"
    );
    console.log(
        "=========================================="
    );
    console.log("");

    /*
    Template oku.
    */

    const template =
        fs.readFileSync(
            TEMPLATE_FILE,
            "utf8"
        );

    /*
    Haberleri oku.
    */

    const haberler =
        loadNews();

    console.log(
        `Toplam ${haberler.length} haber bulundu.`
    );

    console.log("");

    /*
    Çıkış klasörünü hazırla.
    */

    prepareOutputDirectory();

    let successCount = 0;

    /*
    Her haberi üret.
    */

    haberler.forEach(
        (haber, index) => {
            try {
                const result =
                    generateArticle(
                        template,
                        haber,
                        index
                    );

                successCount++;

                console.log(
                    `✓ ${index + 1}. ${result.slug}`
                );
            } catch (error) {
                console.error(
                    `✗ ${index + 1}. haber oluşturulamadı`
                );

                console.error(
                    error.message
                );

                throw error;
            }
        }
    );

    /*
    Ana sonuç.
    */

    console.log("");
    console.log(
        "=========================================="
    );
    console.log(
        ` ${successCount} haber başarıyla oluşturuldu.`
    );
    console.log(
        "=========================================="
    );
    console.log("");
}

/*
=========================================================
 ÇALIŞTIR
=========================================================
*/

try {
    main();
} catch (error) {
    console.error("");
    console.error(
        "=========================================="
    );
    console.error(
        " BUILD HATASI"
    );
    console.error(
        "=========================================="
    );
    console.error("");
    console.error(
        error.message
    );
    console.error("");

    process.exit(1);
}
