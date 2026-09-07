"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

/*
=========================================================
 HABERİSTA - STATIC NEWS GENERATOR
 GitHub root structure compatible
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

const SITE_URL = "https://haberisa.vercel.app";


/* =====================================================
   DOSYA KONTROLÜ
===================================================== */

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


/* =====================================================
   SLUG
===================================================== */

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


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   META DESCRIPTION
===================================================== */

function cleanText(value) {

    return String(value || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function createDescription(haber) {

    const text =
        haber.spot ||
        haber.icerik ||
        haber.baslik ||
        "HABERİSTA";

    return cleanText(text)
        .slice(0, 160);
}


/* =====================================================
   GÖRSEL
===================================================== */

function getImagePath(haber) {

    const image =
        haber.gorsel ||
        haber.resim ||
        haber.image ||
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

    return "/" + image.replace(/^\/+/, "");
}


/* =====================================================
   TARİH
===================================================== */

function getDate(haber) {

    return (
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        ""
    );
}


/* =====================================================
   HABERLER.JS'İ OKU
===================================================== */

console.log(
    "HABERİSTA static build başlıyor..."
);

console.log(
    `Haber verisi: ${NEWS_FILE}`
);

const source =
    fs.readFileSync(
        NEWS_FILE,
        "utf8"
    );


/*
 * haberler.js tarayıcıda çalışmak üzere
 * yazılmış olsa da yalnızca veri dizisini
 * almak için izole VM kullanıyoruz.
 */

const context = {

    console: {
        log: () => {},
        warn: () => {},
        error: () => {}
    },

    window: {},

    document: {},

    navigator: {}

};

vm.createContext(context);


/*
 * Dosyanın sonuna geçici olarak
 * haberler'i dışarı aktaran kod ekle.
 */

const executableSource = `

${source}

globalThis.__HABERISTA_NEWS__ =
    typeof haberler !== "undefined"
        ? haberler
        : [];

`;

try {

    vm.runInContext(
        executableSource,
        context,
        {
            timeout: 5000
        }
    );

} catch (error) {

    console.error(
        "\n❌ haberler.js okunamadı.\n"
    );

    console.error(error);

    process.exit(1);
}


const haberler =
    context.__HABERISTA_NEWS__;


if (!Array.isArray(haberler)) {

    throw new Error(
        "haberler dizisi bulunamadı."
    );

}


console.log(
    `✓ ${haberler.length} haber bulundu.`
);


/* =====================================================
   HABER.HTML ŞABLONU
===================================================== */

const template =
    fs.readFileSync(
        TEMPLATE_FILE,
        "utf8"
    );


/* =====================================================
   HTML İÇERİĞİNİ GÜVENLİ PARAGRAFLARA ÇEVİR
===================================================== */

function renderContent(content) {

    if (!content) {

        return `
<p>
Bu haberin detayları HABERİSTA tarafından
güncellenecektir.
</p>
`;

    }


    /*
     * Eğer içerik zaten HTML ise
     * doğrudan kullan.
     */

    if (
        /<[a-z][\s\S]*>/i.test(
            String(content)
        )
    ) {

        return String(content);

    }


    /*
     * HaberİSTA içerikleri genellikle
     * template literal içinde düz metin.
     *
     * Başlık gibi tamamen büyük harfli
     * satırları H2 yap.
     */

    const lines =
        String(content)
            .split(/\n+/)
            .map(
                line => line.trim()
            )
            .filter(Boolean);


    const output = [];

    for (
        const line of lines
    ) {

        const cleaned =
            line.trim();


        /*
         * Madde işareti
         */

        if (
            cleaned.startsWith("- ")
        ) {

            output.push(
                `<li>${escapeHtml(
                    cleaned.slice(2)
                )}</li>`
            );

            continue;
        }


        /*
         * Büyük harfli başlık
         */

        const lettersOnly =
            cleaned
                .replace(
                    /[^A-Za-zÇĞİÖŞÜçğıöşü]/g,
                    ""
                );


        const isHeading =
            lettersOnly.length > 4 &&
            lettersOnly ===
                lettersOnly.toLocaleUpperCase(
                    "tr-TR"
                );


        if (isHeading) {

            output.push(
                `<h2>${escapeHtml(
                    cleaned
                )}</h2>`
            );

        } else {

            output.push(
                `<p>${escapeHtml(
                    cleaned
                )}</p>`
            );

        }

    }


    return output.join("\n");

}


/* =====================================================
   ŞABLONDAN ESKİ DİNAMİK KISMI TEMİZLE
===================================================== */

function createStaticHtml(haber) {

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


    const category =
        haber.kategori ||
        haber.category ||
        "Haber";


    const date =
        getDate(haber);


    const time =
        haber.saat ||
        haber.time ||
        "";


    const source =
        haber.kaynak ||
        haber.source ||
        "HABERİSTA";


    const views =
        haber.goruntulenme ||
        haber.views ||
        0;


    const image =
        getImagePath(haber);


    const slug =
        haber.slug ||
        slugOlustur(title);


    const url =
        `${SITE_URL}/haber/${slug}`;


    const description =
        createDescription(haber);


    /*
     * Şablonu kopyala.
     */

    let html =
        template;


    /* =================================================
       TITLE
    ================================================= */

    html =
        html.replace(
            /<title>[\s\S]*?<\/title>/i,

            `<title>${escapeHtml(
                title
            )} | HABERİSTA</title>`
        );


    /* =================================================
       DESCRIPTION
    ================================================= */

    const descriptionMeta =
        `<meta name="description" content="${escapeHtml(
            description
        )}">`;


    if (
        /<meta[^>]+name=["']description["'][^>]*>/i
            .test(html)
    ) {

        html =
            html.replace(
                /<meta[^>]+name=["']description["'][^>]*>/i,
                descriptionMeta
            );

    } else {

        html =
            html.replace(
                /<\/head>/i,
                `${descriptionMeta}\n</head>`
            );

    }


    /* =================================================
       CANONICAL
    ================================================= */

    const canonical =
        `<link rel="canonical" href="${url}">`;


    if (
        /<link[^>]+rel=["']canonical["'][^>]*>/i
            .test(html)
    ) {

        html =
            html.replace(
                /<link[^>]+rel=["']canonical["'][^>]*>/i,
                canonical
            );

    } else {

        html =
            html.replace(
                /<\/head>/i,
                `${canonical}\n</head>`
            );

    }


    /* =================================================
       OG META
    ================================================= */

    const absoluteImage =
        image
            ? (
                image.startsWith("http")
                    ? image
                    : `${SITE_URL}${image}`
            )
            : "";


    const ogImage =
        absoluteImage
            ? `
<meta property="og:image"
      content="${escapeHtml(
          absoluteImage
      )}">
`
            : "";


    const socialMeta = `
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(
        title
    )}">
<meta property="og:description" content="${escapeHtml(
        description
    )}">
<meta property="og:url" content="${escapeHtml(
        url
    )}">
<meta property="og:site_name" content="HABERİSTA">
${ogImage}

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(
        title
    )}">
<meta name="twitter:description" content="${escapeHtml(
        description
    )}">
${absoluteImage
    ? `<meta name="twitter:image" content="${escapeHtml(
        absoluteImage
    )}">`
    : ""}
`;


    html =
        html.replace(
            /<\/head>/i,
            `${socialMeta}\n</head>`
        );


    /* =================================================
       NEWSARTICLE JSON-LD
    ================================================= */

    const jsonLd = {

        "@context":
            "https://schema.org",

        "@type":
            "NewsArticle",

        "headline":
            title,

        "description":
            description,

        "datePublished":
            date || undefined,

        "dateModified":
            date || undefined,

        "articleSection":
            category,

        "mainEntityOfPage": {

            "@type":
                "WebPage",

            "@id":
                url

        },

        "author": {

            "@type":
                "Organization",

            "name":
                "HABERİSTA"

        },

        "publisher": {

            "@type":
                "Organization",

            "name":
                "HABERİSTA"

        }

    };


    if (absoluteImage) {

        jsonLd.image =
            [absoluteImage];

    }


    const jsonLdHtml = `
<script type="application/ld+json">
${JSON.stringify(
    jsonLd,
    null,
    4
)}
</script>
`;


    html =
        html.replace(
            /<\/head>/i,
            `${jsonLdHtml}\n</head>`
        );


    /* =================================================
       GÖRSEL
    ================================================= */

    const imageHtml =
        image
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


    /* =================================================
       HABER İÇERİĞİ
    ================================================= */

    const articleHtml = `
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

            ${
                spot
                    ? `
            <div class="article-spot">
                <p>
                    ${escapeHtml(spot)}
                </p>
            </div>
            `
                    : ""
            }

            <div class="article-meta">

                <span>
                    📅 ${escapeHtml(date)}
                </span>

                ${
                    time
                        ? `
                <span>
                    🕒 ${escapeHtml(time)}
                </span>
                `
                        : ""
                }

                <span>
                    👁️ ${escapeHtml(
                        views
                    )}
                </span>

                <span>
                    📰 ${escapeHtml(
                        source
                    )}
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
                güvenilir şekilde
                takip edin.
            </p>

        </div>

    </aside>

</div>
`;


    /* =================================================
       DİNAMİK CONTAINER'I DEĞİŞTİR
    ================================================= */

    const loadingBlock =
        `
<div id="articleContainer">
    <div class="not-found">
        <h1>Haber yükleniyor...</h1>
        <p>
            Lütfen bekleyin.
        </p>
    </div>
</div>
`;


    const staticContainer =
        `
<div id="articleContainer">
    ${articleHtml}
</div>
`;


    if (
        html.includes(
            loadingBlock
        )
    ) {

        html =
            html.replace(
                loadingBlock,
                staticContainer
            );

    } else {

        /*
         * Mevcut haber.html biçimi
         * değişmişse articleContainer
         * arasını güvenli şekilde değiştir.
         */

        html =
            html.replace(
                /<div id="articleContainer">[\s\S]*?<\/div>\s*<\/main>/i,

                `${staticContainer}
</main>`
            );

    }


    /* =================================================
       JAVASCRIPT'TEKİ HABER ARAMA
       STATIC SAYFADA GEREKSİZ.
       
       Fakat mevcut paylaşım/sesli okuma
       fonksiyonlarını korumak istiyoruz.
       
       Sayfa zaten HTML içerdiği için
       findNews/renderArticle çağrısını
       etkisiz hale getiriyoruz.
    ================================================= */

    html =
        html.replace(
            /<script src="\/js\/haberler\.js"><\/script>\s*/i,
            ""
        );


    /*
     * Statik sayfada haber arama yapan
     * eski init çağrısını bulup engelle.
     *
     * Genel bir regex yerine yalnızca
     * "renderArticle" çağrısını etkisizleştiren
     * küçük override ekliyoruz.
     */

    const staticOverride = `
<script>
/*
 * HABERİSTA STATIC ARTICLE
 * Haber içeriği build sırasında HTML'e
 * gömülmüştür.
 */
window.__HABERISTA_STATIC_ARTICLE__ = true;
</script>
`;


    html =
        html.replace(
            /<\/body>/i,
            `${staticOverride}
</body>`
        );


    return html;
}


/* =====================================================
   ÇIKIŞ KLASÖRÜ
===================================================== */

fs.mkdirSync(
    OUTPUT_DIR,
    {
        recursive: true
    }
);


/* =====================================================
   HABERLERİ OLUŞTUR
===================================================== */

let generated = 0;

const usedSlugs =
    new Set();


for (
    const haber of haberler
) {

    if (!haber) {
        continue;
    }


    const title =
        haber.baslik ||
        haber.title;


    if (!title) {

        console.warn(
            "⚠️ Başlığı olmayan haber atlandı."
        );

        continue;
    }


    let slug =
        haber.slug ||
        slugOlustur(title);


    /*
     * Aynı slug iki kere oluşursa
     * ID ile ayır.
     */

    if (
        usedSlugs.has(slug)
    ) {

        const id =
            haber.id != null
                ? String(haber.id)
                : String(
                    generated + 1
                );

        slug =
            `${slug}-${id}`;

    }


    usedSlugs.add(slug);


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


    const finalHtml =
        createStaticHtml(haber);


    fs.writeFileSync(
        path.join(
            articleDir,
            "index.html"
        ),
        finalHtml,
        "utf8"
    );


    generated++;


    console.log(
        `✓ /haber/${slug}`
    );
}


/* =====================================================
   SONUÇ
===================================================== */

console.log("");
console.log(
    "=========================================="
);
console.log(
    " HABERİSTA BUILD TAMAMLANDI"
);
console.log(
    "=========================================="
);
console.log(
    `Toplam haber: ${haberler.length}`
);
console.log(
    `Oluşturulan sayfa: ${generated}`
);
console.log(
    `Çıkış klasörü: ${OUTPUT_DIR}`
);
console.log(
    "=========================================="
);
