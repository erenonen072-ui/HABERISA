"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;

const INDEX_HTML = path.join(ROOT, "index.html");
const HABER_HTML = path.join(ROOT, "haber.html");
const HABERLER_JS = path.join(ROOT, "js", "haberler.js");

const OUTPUT_DIR = path.join(ROOT, "haber");

const SITE_URL = "https://haberisa.vercel.app";
const SITE_NAME = "HABERİSTA";

/* =========================================================
   YARDIMCI FONKSİYONLAR
========================================================= */

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
        .replace(/â/g, "a")
        .replace(/î/g, "i")
        .replace(/û/g, "u")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/* =========================================================
   HABER ALANLARI
========================================================= */

function getTitle(haber) {
    return haber.baslik || haber.title || "Haber";
}

function getCategory(haber) {
    return haber.kategori || haber.category || "Haber";
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
        haber.görsel ||
        haber.resim ||
        haber.image ||
        haber.foto ||
        haber.fotograf ||
        haber.photo ||
        haber.thumbnail ||
        haber.img ||
        ""
    );
}

function getDate(haber) {
    return (
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        ""
    );
}

function getTime(haber) {
    return haber.saat || haber.time || "";
}

function getSource(haber) {
    return haber.kaynak || haber.source || "HABERİSTA";
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
        haber.goruntulenme ??
        haber.views ??
        0
    );
}

function getSlug(haber) {
    return (
        haber.slug ||
        slugOlustur(getTitle(haber))
    );
}

function getNewsURL(haber) {
    return `${SITE_URL}/haber/${getSlug(haber)}`;
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

/* =========================================================
   TARİH
========================================================= */

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

    let saat = getTime(haber) || "00:00";

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

    return `${yil}-${ay}-${gun}T${saatISO}+03:00`;
}

/* =========================================================
   SEO AÇIKLAMASI
========================================================= */

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
            description.substring(0, 157).trim() + "...";
    }

    return description;
}

/* =========================================================
   HABER İÇERİĞİ
========================================================= */

function renderContent(content) {
    if (!content) {
        return `
            <p>
                Bu haberin detayları yakında güncellenecektir.
            </p>
        `;
    }

    const value = String(content).trim();

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

/* =========================================================
   HABERLER.JS OKU
========================================================= */

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

    const haberler = context.window.haberler;

    if (!Array.isArray(haberler)) {
        throw new Error(
            "window.haberler bulunamadı."
        );
    }

    return haberler;
}

/* =========================================================
   BREAKING NEWS
========================================================= */

function createStaticBreakingNews(haberler) {
    const breaking = haberler.slice(0, 5);

    if (!breaking.length) {
        return `
            <div class="breaking-track">
                <span class="breaking-link">
                    Haberİsta'dan son gelişmeler...
                </span>
            </div>
        `;
    }

    const links = breaking
        .map(haber => `
            <a
                href="/haber/${escapeHTML(getSlug(haber))}"
                class="breaking-link"
            >
                ${escapeHTML(getTitle(haber))}
            </a>
        `)
        .join("");

    return `
        <div class="breaking-track">
            ${links}
            ${links}
        </div>
    `;
}

/* =========================================================
   MANŞET
========================================================= */

function createStaticHero(haberler) {
    const haber = haberler[0];

    if (!haber) {
        return `
            <div class="hero-empty">
                Henüz haber bulunmuyor.
            </div>
        `;
    }

    const image = getImage(haber);
    const slug = getSlug(haber);

    return `
        <a
            href="/haber/${escapeHTML(slug)}"
            class="hero-slide-link"
        >
            ${
                image
                    ? `
                        <img
                            src="${escapeHTML(image)}"
                            alt="${escapeHTML(getTitle(haber))}"
                            class="hero-image"
                            loading="eager"
                            decoding="async"
                        >
                    `
                    : `
                        <div class="hero-image hero-image-empty">
                            Haberİsta
                        </div>
                    `
            }

            <div class="hero-overlay"></div>

            <div class="hero-content">
                <span class="hero-category">
                    ${escapeHTML(getCategory(haber))}
                </span>

                <h1>
                    ${escapeHTML(getTitle(haber))}
                </h1>

                <p>
                    ${escapeHTML(getSpot(haber))}
                </p>

                <div class="hero-meta">
                    ${escapeHTML(getDate(haber))}

                    ${
                        getTime(haber)
                            ? `
                                <span>•</span>
                                ${escapeHTML(getTime(haber))}
                              `
                            : ""
                    }
                </div>
            </div>
        </a>
    `;
}

/* =========================================================
   MANŞET NUMARALARI
========================================================= */

function createStaticHeroNumbers(haberler) {
    return haberler
        .slice(0, 5)
        .map((_, index) => `
            <button
                type="button"
                class="hero-number ${
                    index === 0 ? "active" : ""
                }"
                data-index="${index}"
                aria-label="${index + 1}. haber"
            >
                ${index + 1}
            </button>
        `)
        .join("");
}

/* =========================================================
   HABER KARTLARI
========================================================= */

function createStaticNewsGrid(haberler) {
    if (!haberler.length) {
        return `
            <div class="no-news">
                <div class="no-news-icon">
                    📰
                </div>

                <h3>
                    Haber bulunamadı
                </h3>

                <p>
                    Henüz yayınlanmış haber bulunmuyor.
                </p>
            </div>
        `;
    }

    return haberler
        .map(haber => {
            const image = getImage(haber);
            const slug = getSlug(haber);
            const title = getTitle(haber);

            return `
                <article
                    class="news-card"
                    data-id="${escapeHTML(haber.id)}"
                >
                    <a
                        href="/haber/${escapeHTML(slug)}"
                        class="news-card-link"
                    >
                        <div class="news-card-image">

                            ${
                                image
                                    ? `
                                        <img
                                            src="${escapeHTML(image)}"
                                            alt="${escapeHTML(title)}"
                                            loading="lazy"
                                            decoding="async"
                                        >
                                      `
                                    : `
                                        <div class="image-placeholder">
                                            Haberİsta
                                        </div>
                                      `
                            }

                            <span class="news-category">
                                ${escapeHTML(
                                    getCategory(haber)
                                )}
                            </span>
                        </div>

                        <div class="news-card-content">

                            <div class="news-card-meta">
                                <span>
                                    ${escapeHTML(
                                        getDate(haber)
                                    )}
                                </span>

                                ${
                                    getTime(haber)
                                        ? `
                                            <span>•</span>
                                            <span>
                                                ${escapeHTML(
                                                    getTime(haber)
                                                )}
                                            </span>
                                          `
                                        : ""
                                }
                            </div>

                            <h3>
                                ${escapeHTML(title)}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    getSpot(haber)
                                )}
                            </p>

                            <div class="news-card-bottom">

                                <span class="read-more">
                                    Haberi Oku →
                                </span>

                                ${
                                    getViews(haber)
                                        ? `
                                            <span class="views">
                                                👁
                                                ${Number(
                                                    getViews(haber)
                                                ).toLocaleString(
                                                    "tr-TR"
                                                )}
                                            </span>
                                          `
                                        : ""
                                }

                            </div>
                        </div>
                    </a>
                </article>
            `;
        })
        .join("\n");
}

/* =========================================================
   HTML BLOĞU DEĞİŞTİRME
========================================================= */

function replaceElementById(
    html,
    id,
    newElement
) {
    const startRegex = new RegExp(
        `<([a-zA-Z0-9]+)[^>]*\\bid=["']${id}["'][^>]*>`,
        "i"
    );

    const match = html.match(startRegex);

    if (!match) {
        throw new Error(
            `${id} elementi bulunamadı.`
        );
    }

    const startIndex = match.index;
    const tagName = match[1];

    let position =
        startIndex + match[0].length;

    let depth = 1;

    const tagRegex =
        new RegExp(
            `<\\/?${tagName}\\b[^>]*>`,
            "gi"
        );

    tagRegex.lastIndex = position;

    let tagMatch;

    while (
        (tagMatch = tagRegex.exec(html))
    ) {
        const tag = tagMatch[0];

        if (/^<\//.test(tag)) {
            depth--;
        } else if (!/\/>$/.test(tag)) {
            depth++;
        }

        if (depth === 0) {
            const endIndex =
                tagRegex.lastIndex;

            return (
                html.slice(0, startIndex) +
                newElement +
                html.slice(endIndex)
            );
        }
    }

    throw new Error(
        `${id} elementi düzgün kapanmıyor.`
    );
}

/* =========================================================
   ANA SAYFA
========================================================= */

function buildHomepage(
    template,
    haberler
) {
    let html = template;

    const hero = createStaticHero(haberler);
    const heroNumbers =
        createStaticHeroNumbers(haberler);

    const breaking =
        createStaticBreakingNews(haberler);

    const newsGrid =
        createStaticNewsGrid(haberler);

    html = replaceElementById(
        html,
        "breakingNews",
        `
        <div id="breakingNews" class="breaking-news">
            ${breaking}
        </div>
        `
    );

    html = replaceElementById(
        html,
        "heroMain",
        `
        <div id="heroMain" class="hero-main">
            ${hero}
        </div>
        `
    );

    html = replaceElementById(
        html,
        "heroNumbers",
        `
        <div id="heroNumbers" class="hero-numbers">
            ${heroNumbers}
        </div>
        `
    );

    html = replaceElementById(
        html,
        "newsGrid",
        `
        <div id="newsGrid" class="news-grid">
            ${newsGrid}
        </div>
        `
    );

    const itemList = haberler.map(
        (haber, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": getNewsURL(haber),
            "name": getTitle(haber)
        })
    );

    const homepageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Haberİsta - Son Dakika Haberleri",
        "url": `${SITE_URL}/`,
        "inLanguage": "tr-TR",
        "isPartOf": {
            "@type": "WebSite",
            "name": SITE_NAME,
            "url": SITE_URL
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": itemList
        }
    };

    const schemaTag = `
<script id="homepageSchema" type="application/ld+json">
${JSON.stringify(homepageSchema, null, 4)}
</script>
`;

    html = html.replace(
        /<\/head>/i,
        `${schemaTag}</head>`
    );

    html = html.replace(
        /<body\b([^>]*)>/i,
        '<body$1 data-static-news="true">'
    );

    return html;
}

/* =========================================================
   HABER HTML
========================================================= */

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
                                ${escapeHTML(
                                    stripHTML(spot)
                                )}
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
                            src="${escapeHTML(image)}"
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

/* =========================================================
   NEWSARTICLE SCHEMA
========================================================= */

function createArticleSchema(
    haber,
    canonical
) {
    const title = getTitle(haber);
    const description = getDescription(haber);
    const image = getImageURL(getImage(haber));
    const category = getCategory(haber);
    const author = getAuthor(haber);
    const isoDate = getISODate(haber);

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

/* =========================================================
   HABER SAYFASI
========================================================= */

function buildArticlePage(
    template,
    haber
) {
    const title = getTitle(haber);
    const category = getCategory(haber);
    const description = getDescription(haber);

    const image = getImage(haber);
    const imageURL = getImageURL(image);

    const slug = getSlug(haber);

    const canonical =
        `${SITE_URL}/haber/${slug}`;

    const isoDate = getISODate(haber);

    let html = template;

    html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHTML(title)} | ${SITE_NAME}</title>`
    );

    html = html.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    html = html.replace(
        /(<meta\s+name="author"\s+content=")[^"]*(")/i,
        `$1${escapeHTML(getAuthor(haber))}$2`
    );

    html = html.replace(
        /(<link\s+id="canonicalLink"\s+rel="canonical"\s+href=")[^"]*(")/i,
        `$1${canonical}$2`
    );

    html = html.replace(
        /(<meta\s+id="ogTitle"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(title)} | ${SITE_NAME}$2`
    );

    html = html.replace(
        /(<meta\s+id="ogDescription"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    html = html.replace(
        /(<meta\s+id="ogUrl"[\s\S]*?content=")[^"]*(")/i,
        `$1${canonical}$2`
    );

    if (imageURL) {
        html = html.replace(
            /(<meta\s+id="ogImage"[\s\S]*?content=")[^"]*(")/i,
            `$1${escapeHTML(imageURL)}$2`
        );
    }

    html = html.replace(
        /(<meta\s+id="twitterTitle"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(title)} | ${SITE_NAME}$2`
    );

    html = html.replace(
        /(<meta\s+id="twitterDescription"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(description)}$2`
    );

    if (imageURL) {
        html = html.replace(
            /(<meta\s+id="twitterImage"[\s\S]*?content=")[^"]*(")/i,
            `$1${escapeHTML(imageURL)}$2`
        );
    }

    html = html.replace(
        /(<meta\s+id="articlePublishedTime"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(isoDate)}$2`
    );

    html = html.replace(
        /(<meta\s+id="articleModifiedTime"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(
            haber.guncellendi ||
            haber.updatedAt ||
            haber.dateModified ||
            isoDate
        )}$2`
    );

    html = html.replace(
        /(<meta\s+id="articleSection"[\s\S]*?content=")[^"]*(")/i,
        `$1${escapeHTML(category)}$2`
    );

    const articleHTML =
        createArticleHTML(haber);

    html = replaceElementById(
        html,
        "articleContainer",
        `
        <div id="articleContainer">
            ${articleHTML}
        </div>
        `
    );

    html = html.replace(
        /<body\b([^>]*)>/i,
        '<body$1 data-static-article="true">'
    );

    const schema =
        createArticleSchema(
            haber,
            canonical
        );

    const schemaTag = `
<script
    id="newsArticleSchema"
    type="application/ld+json"
>
${schema}
</script>
`;

    html = html.replace(
        /<\/head>/i,
        `${schemaTag}</head>`
    );

    return html;
}

/* =========================================================
   HABER KLASÖRÜNÜ TEMİZLE
========================================================= */

function cleanOutputDirectory() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(
            OUTPUT_DIR,
            {
                recursive: true
            }
        );

        return;
    }

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

        fs.rmSync(
            fullPath,
            {
                recursive: true,
                force: true
            }
        );
    }
}

/* =========================================================
   SITEMAP
========================================================= */

function buildSitemap(haberler) {
    const urls = [
        `${SITE_URL}/`,
        `${SITE_URL}/son-dakika.html`,
        `${SITE_URL}/gundem.html`,
        `${SITE_URL}/ekonomi.html`,
        `${SITE_URL}/spor.html`,
        `${SITE_URL}/magazin.html`,
        `${SITE_URL}/dunya.html`,
        `${SITE_URL}/teknoloji.html`,
        `${SITE_URL}/saglik.html`,
        `${SITE_URL}/kultur-sanat.html`,
        `${SITE_URL}/hakkimizda.html`,
        `${SITE_URL}/iletisim.html`,
        `${SITE_URL}/gizlilik.html`,
        `${SITE_URL}/cerez-politikasi.html`
    ];

    for (const haber of haberler) {
        urls.push(getNewsURL(haber));
    }

    const uniqueUrls = [
        ...new Set(urls)
    ];

    const items = uniqueUrls
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

/* =========================================================
   ROBOTS
========================================================= */

function buildRobots() {
    return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

/* =========================================================
   BUILD
========================================================= */

function main() {
    console.log("");
    console.log("========================================");
    console.log(" HABERİSTA - STATIC SEO BUILD");
    console.log("========================================");
    console.log("");

    if (!fs.existsSync(INDEX_HTML)) {
        throw new Error(
            "index.html bulunamadı."
        );
    }

    if (!fs.existsSync(HABER_HTML)) {
        throw new Error(
            "haber.html bulunamadı."
        );
    }

    const indexTemplate =
        fs.readFileSync(
            INDEX_HTML,
            "utf8"
        );

    const articleTemplate =
        fs.readFileSync(
            HABER_HTML,
            "utf8"
        );

    const haberler =
        loadNews();

    console.log(
        `Toplam haber: ${haberler.length}`
    );

    /* -----------------------------------------
       DUPLICATE ID
    ----------------------------------------- */

    const ids = new Map();

    for (const haber of haberler) {
        if (ids.has(haber.id)) {
            console.warn("");
            console.warn("⚠️ DUPLICATE ID");
            console.warn(`ID: ${haber.id}`);
            console.warn(
                `Eski: ${ids.get(haber.id)}`
            );
            console.warn(
                `Yeni: ${getTitle(haber)}`
            );
        } else {
            ids.set(
                haber.id,
                getTitle(haber)
            );
        }
    }

    /* -----------------------------------------
       DUPLICATE SLUG
    ----------------------------------------- */

    const slugs = new Map();

    for (const haber of haberler) {
        const slug = getSlug(haber);

        if (slugs.has(slug)) {
            console.warn("");
            console.warn("⚠️ DUPLICATE SLUG");
            console.warn(`Slug: ${slug}`);
            console.warn(
                `Eski: ${slugs.get(slug)}`
            );
            console.warn(
                `Yeni: ${getTitle(haber)}`
            );
        } else {
            slugs.set(
                slug,
                getTitle(haber)
            );
        }
    }

    /* -----------------------------------------
       ANA SAYFA
    ----------------------------------------- */

    const homepage =
        buildHomepage(
            indexTemplate,
            haberler
        );

    fs.writeFileSync(
        INDEX_HTML,
        homepage,
        "utf8"
    );

    console.log(
        "✓ index.html statik haberlerle oluşturuldu."
    );

    /* -----------------------------------------
       HABER SAYFALARI
    ----------------------------------------- */

    cleanOutputDirectory();

    let generated = 0;

    const generatedSlugs =
        new Set();

    for (const haber of haberler) {
        const title =
            getTitle(haber);

        const slug =
            getSlug(haber);

        if (!slug) {
            console.warn(
                `⚠️ Slug oluşturulamadı: ${title}`
            );

            continue;
        }

        if (
            generatedSlugs.has(slug)
        ) {
            console.warn(
                `⚠️ Haber atlandı, duplicate slug: ${slug}`
            );

            continue;
        }

        generatedSlugs.add(slug);

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

        const articlePage =
            buildArticlePage(
                articleTemplate,
                haber
            );

        fs.writeFileSync(
            path.join(
                articleDir,
                "index.html"
            ),
            articlePage,
            "utf8"
        );

        generated++;

        console.log(
            `✓ ${generated}. ${title}`
        );
    }

    /* -----------------------------------------
       SITEMAP
    ----------------------------------------- */

    fs.writeFileSync(
        path.join(
            ROOT,
            "sitemap.xml"
        ),
        buildSitemap(haberler),
        "utf8"
    );

    console.log(
        "✓ sitemap.xml oluşturuldu."
    );

    /* -----------------------------------------
       ROBOTS
    ----------------------------------------- */

    fs.writeFileSync(
        path.join(
            ROOT,
            "robots.txt"
        ),
        buildRobots(),
        "utf8"
    );

    console.log(
        "✓ robots.txt oluşturuldu."
    );

    console.log("");
    console.log("========================================");
    console.log(
        `✓ ${generated} statik haber sayfası hazır.`
    );
    console.log(
        "✓ Ana sayfa statik içerik hazır."
    );
    console.log(
        "✓ Google taraması için HTML içerik hazır."
    );
    console.log("========================================");
    console.log("");
}

/* =========================================================
   ÇALIŞTIR
========================================================= */

try {
    main();
} catch (error) {
    console.error("");
    console.error("❌ BUILD HATASI");
    console.error(
        error.stack ||
        error.message
    );
    console.error("");

    process.exit(1);
}
