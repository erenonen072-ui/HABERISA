<!DOCTYPE html>
<html lang="tr">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Haber | Haberİsta</title>

    <meta
        id="metaDescription"
        name="description"
        content="Haberİsta haber detay sayfası."
    >

    <meta
        name="robots"
        content="index, follow"
    >

    <meta
        property="og:type"
        content="article"
    >

    <meta
        id="ogTitle"
        property="og:title"
        content="Haber | Haberİsta"
    >

    <meta
        id="ogDescription"
        property="og:description"
        content="Haberİsta haber detay sayfası."
    >

    <meta
        id="ogImage"
        property="og:image"
        content=""
    >

    <meta
        property="og:site_name"
        content="Haberİsta"
    >

    <meta
        name="twitter:card"
        content="summary_large_image"
    >

    <meta
        id="twitterTitle"
        name="twitter:title"
        content="Haber | Haberİsta"
    >

    <meta
        id="twitterDescription"
        name="twitter:description"
        content="Haberİsta haber detay sayfası."
    >

    <link
        rel="stylesheet"
        href="css/style.css"
    >

    <link
        rel="stylesheet"
        href="css/haber.css"
    >

</head>


<body>


<!-- =====================================================
     HEADER
===================================================== -->

<header class="site-header">

    <div class="main-header">

        <div class="container header-inner">

            <button
                class="menu-btn"
                id="menuBtn"
                type="button"
                aria-label="Menüyü aç"
                aria-expanded="false"
            >
                ☰
            </button>


            <a
                href="index.html"
                class="logo"
            >
                <span>Haber</span>İsta
            </a>


            <div class="search-box">

                <input
                    type="search"
                    id="searchInput"
                    placeholder="Haber ara..."
                    autocomplete="off"
                >

                <button
                    id="searchBtn"
                    type="button"
                    aria-label="Ara"
                >
                    🔍
                </button>

            </div>

        </div>

    </div>


    <!-- =================================================
         NAV
    ================================================= -->

    <nav class="category-nav">

        <div class="container nav-inner">

            <a href="index.html">
                Ana Sayfa
            </a>

            <a href="son-dakika.html">
                Son Dakika
            </a>

            <a href="gundem.html">
                Gündem
            </a>

            <a href="ekonomi.html">
                Ekonomi
            </a>

            <a href="spor.html">
                Spor
            </a>

            <a href="magazin.html">
                Magazin
            </a>

            <a href="dunya.html">
                Dünya
            </a>

            <a href="teknoloji.html">
                Teknoloji
            </a>

            <a href="saglik.html">
                Sağlık
            </a>

            <a href="kultur-sanat.html">
                Kültür Sanat
            </a>

        </div>

    </nav>

</header>


<!-- =====================================================
     SON DAKİKA
===================================================== -->

<div class="breaking-bar">

    <div class="container breaking-inner">

        <div class="breaking-title">

            <span class="breaking-dot"></span>

            SON DAKİKA

        </div>

        <div
            id="breakingNews"
            class="breaking-news"
        ></div>

    </div>

</div>


<!-- =====================================================
     HABER DETAY
===================================================== -->

<main class="article-page">

    <div class="container">


        <!-- BREADCRUMB -->

        <nav
            class="article-breadcrumb"
            aria-label="Sayfa yolu"
        >

            <a href="index.html">
                Ana Sayfa
            </a>

            <span>›</span>

            <span id="breadcrumbCategory">
                Haber
            </span>

            <span>›</span>

            <strong>
                Haber Detayı
            </strong>

        </nav>


        <!-- ANA LAYOUT -->

        <div class="article-layout">


            <!-- =================================================
                 ANA HABER
            ================================================= -->

            <article
                id="article"
                class="article"
            >


                <!-- KATEGORİ -->

                <div
                    id="articleCategory"
                    class="article-category"
                >
                    HABER
                </div>


                <!-- BAŞLIK -->

                <h1
                    id="articleTitle"
                    class="article-title"
                >
                    Haber yükleniyor...
                </h1>


                <!-- SPOT -->

                <p
                    id="articleSpot"
                    class="article-spot"
                >
                    Haber bilgileri hazırlanıyor...
                </p>


                <!-- META -->

                <div class="article-meta">

                    <div class="article-author">

                        <div class="author-avatar">
                            H
                        </div>

                        <div>

                            <strong>
                                Haberİsta Haber Merkezi
                            </strong>

                            <span id="articleSource">
                                Haberİsta
                            </span>

                        </div>

                    </div>


                    <div class="article-date">

                        <span id="articleDate">
                            —
                        </span>

                        <span class="meta-separator">
                            •
                        </span>

                        <span id="articleViews">
                            👁 0
                        </span>

                    </div>

                </div>


                <!-- GÖRSEL -->

                <figure class="article-image-wrapper">

                    <img
                        id="articleImage"
                        class="article-image"
                        src=""
                        alt="Haber görseli"
                    >

                    <figcaption
                        id="articleImageCaption"
                        class="article-image-caption"
                    ></figcaption>

                </figure>


                <!-- PAYLAŞ -->

                <div class="article-share">

                    <span>
                        Paylaş
                    </span>

                    <button
                        id="shareButton"
                        type="button"
                        class="share-button share-main"
                    >
                        ↗
                        Paylaş
                    </button>

                    <button
                        id="copyButton"
                        type="button"
                        class="share-button"
                    >
                        🔗
                        Linki Kopyala
                    </button>

                </div>


                <!-- İÇERİK -->

                <div
                    id="articleContent"
                    class="article-content"
                ></div>


                <!-- ETİKETLER -->

                <div
                    id="articleTags"
                    class="article-tags"
                ></div>


                <!-- ALT PAYLAŞ -->

                <div class="article-bottom-share">

                    <strong>
                        Bu haberi paylaş
                    </strong>

                    <button
                        id="shareButtonBottom"
                        type="button"
                        class="share-button share-main"
                    >
                        ↗ Paylaş
                    </button>

                </div>


                <!-- HABER BİLGİSİ -->

                <div class="article-info-box">

                    <div class="info-icon">
                        ℹ
                    </div>

                    <div>

                        <strong>
                            Haber hakkında
                        </strong>

                        <p>
                            Bu içerik Haberİsta Haber Merkezi
                            tarafından hazırlanmıştır. Haber
                            içerisinde yer alan bilgi ve
                            açıklamalar ilgili kaynaklara
                            dayanmaktadır.
                        </p>

                    </div>

                </div>

            </article>


            <!-- =================================================
                 SIDEBAR
            ================================================= -->

            <aside class="article-sidebar">


                <!-- ÇOK OKUNANLAR -->

                <div class="article-sidebar-box">

                    <div class="article-sidebar-title">

                        <span></span>

                        <h2>
                            Çok Okunanlar
                        </h2>

                    </div>

                    <div
                        id="articlePopular"
                        class="article-popular"
                    ></div>

                </div>


                <!-- İLGİLİ HABERLER -->

                <div class="article-sidebar-box">

                    <div class="article-sidebar-title">

                        <span></span>

                        <h2>
                            İlgili Haberler
                        </h2>

                    </div>

                    <div
                        id="relatedNews"
                        class="related-news"
                    ></div>

                </div>

            </aside>

        </div>

    </div>

</main>


<!-- =====================================================
     FOOTER
===================================================== -->

<footer class="site-footer">

    <div class="container footer-grid">


        <div class="footer-about">

            <div class="footer-logo">

                <span>Haber</span>İsta

            </div>

            <p>
                Türkiye ve dünyadan güncel gelişmeleri
                takip edebileceğiniz bağımsız haber portalı.
            </p>

        </div>


        <div>

            <h4>
                Kategoriler
            </h4>

            <a href="gundem.html">
                Gündem
            </a>

            <a href="ekonomi.html">
                Ekonomi
            </a>

            <a href="spor.html">
                Spor
            </a>

            <a href="dunya.html">
                Dünya
            </a>

        </div>


        <div>

            <h4>
                Haberİsta
            </h4>

            <a href="hakkimizda.html">
                Hakkımızda
            </a>

            <a href="iletisim.html">
                İletişim
            </a>

            <a href="gizlilik.html">
                Gizlilik Politikası
            </a>

            <a href="cerez-politikasi.html">
                Çerez Politikası
            </a>

        </div>


        <div>

            <h4>
                Sosyal Medya
            </h4>

            <div class="socials">

                <a href="#" aria-label="X">
                    𝕏
                </a>

                <a href="#" aria-label="Facebook">
                    f
                </a>

                <a href="#" aria-label="Instagram">
                    ◎
                </a>

                <a href="#" aria-label="YouTube">
                    ▶
                </a>

            </div>

        </div>

    </div>


    <div class="footer-bottom">

        <div class="container">

            © 2026 Haberİsta.
            Tüm hakları saklıdır.

        </div>

    </div>

</footer>


<!-- =====================================================
     ÇEREZ
===================================================== -->

<div
    id="cookieBox"
    class="cookie-box"
>

    <div>

        <strong>
            Çerez Kullanımı
        </strong>

        <p>
            Site deneyimini geliştirmek için gerekli
            çerezleri kullanıyoruz.
        </p>

    </div>

    <button
        id="cookieAccept"
        type="button"
    >
        Kabul Et
    </button>

</div>


<!-- =====================================================
     JAVASCRIPT
===================================================== -->

<script src="js/haberler.js"></script>


<script>

"use strict";


/* =========================================================
   HABER DETAY SİSTEMİ
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initArticle();

        initArticleMenu();

        initArticleCookie();

    }
);


/* =========================================================
   HABERİ BAŞLAT
========================================================= */

function initArticle() {

    if (
        typeof window.haberler === "undefined" ||
        !Array.isArray(window.haberler)
    ) {

        showArticleError();

        return;

    }


    const haber =
        findCurrentArticle();


    if (!haber) {

        showArticleError();

        return;

    }


    renderArticle(
        haber
    );

    renderArticlePopular(
        haber
    );

    renderRelatedNews(
        haber
    );

    initShareButtons(
        haber
    );

    initBreakingNews();

}


/* =========================================================
   URL'DEN HABERİ BUL
========================================================= */

function findCurrentArticle() {

    const pathname =
        decodeURIComponent(
            window.location.pathname
        );


    /*
       ÖNCELİK:
       /haber/slug
    */

    const parts =
        pathname
            .split("/")
            .filter(Boolean);


    let slug = "";


    const haberIndex =
        parts.indexOf("haber");


    if (
        haberIndex !== -1 &&
        parts[haberIndex + 1]
    ) {

        slug =
            parts[
                haberIndex + 1
            ];

    }


    /*
       VERCEL REWRITE SONRASI
       pathname bazen /haber.html olabilir.
    */

    if (!slug) {

        const params =
            new URLSearchParams(
                window.location.search
            );

        slug =
            params.get("slug") ||
            "";

    }


    /*
       ID GERİYE DÖNÜK DESTEK
    */

    if (!slug) {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const id =
            params.get("id");


        if (id) {

            return window.haberler.find(
                haber =>
                    Number(haber.id) ===
                    Number(id)
            );

        }

    }


    if (!slug) {
        return null;
    }


    /*
       Önce slug ile ara
    */

    let haber =
        window.haberler.find(
            item =>
                item.slug === slug
        );


    /*
       Eğer slug henüz oluşturulmamışsa
    */

    if (!haber) {

        haber =
            window.haberler.find(
                item => {

                    const generated =
                        createSlug(
                            item.baslik
                        );

                    return (
                        generated ===
                        slug
                    );

                }
            );

    }


    return haber || null;
}


/* =========================================================
   HABERİ GÖSTER
========================================================= */

function renderArticle(
    haber
) {

    const title =
        haber.baslik ||
        "Haber";

    const category =
        haber.kategori ||
        "Haber";

    const spot =
        cleanText(
            haber.spot ||
            ""
        );

    const image =
        haber.gorsel ||
        haber.resim ||
        getFallbackImage();

    const date =
        haber.tarih || "";

    const time =
        haber.saat || "";

    const views =
        Number(
            haber.okunma || 0
        );


    /* =====================================================
       BAŞLIK
    ===================================================== */

    document.title =
        `${title} | Haberİsta`;


    setText(
        "articleTitle",
        title
    );


    setText(
        "articleCategory",
        category
    );


    setText(
        "breadcrumbCategory",
        category
    );


    setText(
        "articleSpot",
        spot
    );


    setText(
        "articleSource",
        haber.kaynak ||
        "Haberİsta Haber Merkezi"
    );


    setText(
        "articleDate",
        formatDate(
            date,
            time
        )
    );


    setText(
        "articleViews",
        `👁 ${formatNumber(views)}`
    );


    /* =====================================================
       GÖRSEL
    ===================================================== */

    const articleImage =
        document.getElementById(
            "articleImage"
        );


    if (articleImage) {

        articleImage.src =
            image;

        articleImage.alt =
            title;

        articleImage.onerror =
            function () {

                this.onerror = null;

                this.src =
                    getFallbackImage();

            };

    }


    setText(
        "articleImageCaption",
        `${title} - Haberİsta`
    );


    /* =====================================================
       İÇERİK
    ===================================================== */

    const content =
        document.getElementById(
            "articleContent"
        );


    if (content) {

        content.innerHTML =
            formatArticleContent(
                haber.icerik ||
                spot ||
                ""
            );

    }


    /* =====================================================
       ETİKETLER
    ===================================================== */

    renderTags(
        haber
    );


    /* =====================================================
       SEO
    ===================================================== */

    updateSEO(
        haber
    );


    /*
       JSON-LD
    */

    addArticleSchema(
        haber
    );


    /*
       URL kanonik hale getir
    */

    if (haber.slug) {

        const correctPath =
            `/haber/${haber.slug}`;

        if (
            window.location.pathname !==
            correctPath
        ) {

            history.replaceState(
                {},
                "",
                correctPath
            );

        }

    }

}


/* =========================================================
   İÇERİK FORMAT
========================================================= */

function formatArticleContent(
    content
) {

    if (!content) {
        return "";
    }


    /*
       Eğer içerik zaten HTML ise
       güvenli izin verilen etiketleri
       koruyoruz.
    */

    const text =
        String(content)
            .replace(
                /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
                ""
            )
            .replace(
                /<style[\s\S]*?>[\s\S]*?<\/style>/gi,
                ""
            )
            .trim();


    /*
       HTML içerik
    */

    if (
        /<p[\s>]/i.test(text) ||
        /<h2[\s>]/i.test(text) ||
        /<h3[\s>]/i.test(text)
    ) {

        return sanitizeArticleHtml(
            text
        );

    }


    /*
       Düz metin
    */

    return text
        .split(/\n+/)
        .map(
            paragraph =>
                paragraph.trim()
                    ? `<p>${escapeHtml(
                        paragraph.trim()
                    )}</p>`
                    : ""
        )
        .join("");

}


/* =========================================================
   BASİT HTML TEMİZLEME
========================================================= */

function sanitizeArticleHtml(
    html
) {

    const allowed =
        html
            .replace(
                /<(?!\/?(p|h2|h3|strong|b|em|i|ul|ol|li|blockquote|br)\b)[^>]*>/gi,
                ""
            );


    return allowed;

}


/* =========================================================
   ETİKETLER
========================================================= */

function renderTags(
    haber
) {

    const container =
        document.getElementById(
            "articleTags"
        );


    if (!container) {
        return;
    }


    const tags = [];


    if (haber.kategori) {
        tags.push(
            haber.kategori
        );
    }


    tags.push(
        "Haberİsta"
    );


    tags.push(
        "Gündem"
    );


    container.innerHTML =
        tags
            .filter(
                (tag, index, array) =>
                    array.indexOf(tag) ===
                    index
            )
            .map(
                tag =>
                    `
                    <span>
                        #${escapeHtml(tag)}
                    </span>
                    `
            )
            .join("");

}


/* =========================================================
   POPÜLER HABERLER
========================================================= */

function renderArticlePopular(
    current
) {

    const container =
        document.getElementById(
            "articlePopular"
        );


    if (!container) {
        return;
    }


    const popular =
        [...window.haberler]
            .filter(
                haber =>
                    haber.id !==
                    current.id
            )
            .sort(
                (a, b) =>
                    Number(
                        b.okunma || 0
                    ) -
                    Number(
                        a.okunma || 0
                    )
            )
            .slice(
                0,
                5
            );


    container.innerHTML =
        popular
            .map(
                (haber, index) => {

                    return `
                        <article
                            class="article-popular-item"
                            data-id="${escapeHtml(
                                haber.id
                            )}"
                        >

                            <span class="article-popular-number">
                                ${String(
                                    index + 1
                                ).padStart(2, "0")}
                            </span>

                            <div>

                                <small>
                                    ${escapeHtml(
                                        haber.kategori ||
                                        "Haber"
                                    )}
                                </small>

                                <h3>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </h3>

                                <span>
                                    👁 ${
                                        formatNumber(
                                            haber.okunma ||
                                            0
                                        )
                                    }
                                </span>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");


    container
        .querySelectorAll(
            ".article-popular-item"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        const id =
                            item.dataset.id;

                        openArticle(
                            id
                        );

                    }
                );

            }
        );

}


/* =========================================================
   İLGİLİ HABERLER
========================================================= */

function renderRelatedNews(
    current
) {

    const container =
        document.getElementById(
            "relatedNews"
        );


    if (!container) {
        return;
    }


    let related =
        window.haberler
            .filter(
                haber =>
                    haber.id !==
                    current.id &&
                    normalize(
                        haber.kategori
                    ) ===
                    normalize(
                        current.kategori
                    )
            )
            .slice(
                0,
                4
            );


    if (
        related.length < 4
    ) {

        const additional =
            window.haberler
                .filter(
                    haber =>
                        haber.id !==
                        current.id &&
                        !related.some(
                            item =>
                                item.id ===
                                haber.id
                        )
                )
                .slice(
                    0,
                    4 - related.length
                );


        related =
            related.concat(
                additional
            );

    }


    container.innerHTML =
        related
            .map(
                haber => {

                    const image =
                        haber.gorsel ||
                        haber.resim ||
                        getFallbackImage();


                    return `
                        <article
                            class="related-item"
                            data-id="${escapeHtml(
                                haber.id
                            )}"
                        >

                            <div class="related-image">

                                <img
                                    src="${escapeHtml(
                                        image
                                    )}"
                                    alt="${escapeHtml(
                                        haber.baslik
                                    )}"
                                    loading="lazy"
                                    onerror="this.onerror=null;this.src='${escapeJs(
                                        getFallbackImage()
                                    )}';"
                                >

                            </div>

                            <div>

                                <span>
                                    ${escapeHtml(
                                        haber.kategori ||
                                        "Haber"
                                    )}
                                </span>

                                <h3>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </h3>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");


    container
        .querySelectorAll(
            ".related-item"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        openArticle(
                            item.dataset.id
                        );

                    }
                );

            }
        );

}


/* =========================================================
   HABER AÇ
========================================================= */

function openArticle(
    id
) {

    const haber =
        window.haberler.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!haber) {
        return;
    }


    const slug =
        haber.slug ||
        createSlug(
            haber.baslik
        );


    window.location.href =
        `/haber/${slug}`;

}


/* =========================================================
   PAYLAŞ
========================================================= */

function initShareButtons(
    haber
) {

    const shareButton =
        document.getElementById(
            "shareButton"
        );

    const bottomButton =
        document.getElementById(
            "shareButtonBottom"
        );

    const copyButton =
        document.getElementById(
            "copyButton"
        );


    if (
        shareButton
    ) {

        shareButton.addEventListener(
            "click",
            () => {

                shareArticle(
                    haber
                );

            }
        );

    }


    if (
        bottomButton
    ) {

        bottomButton.addEventListener(
            "click",
            () => {

                shareArticle(
                    haber
                );

            }
        );

    }


    if (
        copyButton
    ) {

        copyButton.addEventListener(
            "click",
            async () => {

                try {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );

                    showToast(
                        "Haber bağlantısı kopyalandı."
                    );

                } catch {

                    showToast(
                        "Bağlantı kopyalanamadı."
                    );

                }

            }
        );

    }

}


/* =========================================================
   PAYLAŞ
========================================================= */

async function shareArticle(
    haber
) {

    const shareData = {

        title:
            haber.baslik,

        text:
            haber.spot ||
            haber.baslik,

        url:
            window.location.href

    };


    if (
        navigator.share
    ) {

        try {

            await navigator.share(
                shareData
            );

        } catch {

            /*
               Kullanıcı paylaşımı kapattı.
            */

        }

        return;
    }


    try {

        await navigator.clipboard.writeText(
            window.location.href
        );

        showToast(
            "Haber bağlantısı kopyalandı."
        );

    } catch {

        showToast(
            "Paylaşım desteklenmiyor."
        );

    }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    let toast =
        document.getElementById(
            "articleToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "articleToast";

        toast.className =
            "article-toast";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toast._timer
    );


    toast._timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   SON DAKİKA
========================================================= */

function initBreakingNews() {

    const container =
        document.getElementById(
            "breakingNews"
        );


    if (!container) {
        return;
    }


    const latest =
        window.haberler.slice(
            0,
            6
        );


    container.innerHTML =
        latest
            .map(
                (haber, index) =>
                    `
                    <span
                        class="article-breaking-item ${
                            index === 0
                                ? "active"
                                : ""
                        }"
                        data-id="${escapeHtml(
                            haber.id
                        )}"
                    >
                        ${escapeHtml(
                            haber.baslik
                        )}
                    </span>
                    `
            )
            .join("");


    const items =
        container.querySelectorAll(
            ".article-breaking-item"
        );


    let current = 0;


    if (items.length > 1) {

        setInterval(
            () => {

                items.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                current =
                    (
                        current + 1
                    ) %
                    items.length;


                items[current]
                    .classList.add(
                        "active"
                    );

            },
            4500
        );

    }


    items.forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    openArticle(
                        item.dataset.id
                    );

                }
            );

        }
    );

}


/* =========================================================
   MOBİL MENÜ
========================================================= */

function initArticleMenu() {

    const button =
        document.getElementById(
            "menuBtn"
        );

    const nav =
        document.querySelector(
            ".category-nav"
        );


    if (!button || !nav) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const opened =
                nav.classList.toggle(
                    "mobile-open"
                );


            button.setAttribute(
                "aria-expanded",
                String(opened)
            );

        }
    );

}


/* =========================================================
   ÇEREZ
========================================================= */

function initArticleCookie() {

    const box =
        document.getElementById(
            "cookieBox"
        );

    const button =
        document.getElementById(
            "cookieAccept"
        );


    if (!box) {
        return;
    }


    let accepted = false;


    try {

        accepted =
            localStorage.getItem(
                "cookiesAccepted"
            ) === "true";

    } catch {

        accepted = false;

    }


    if (accepted) {

        box.style.display =
            "none";

    }


    if (button) {

        button.addEventListener(
            "click",
            () => {

                try {

                    localStorage.setItem(
                        "cookiesAccepted",
                        "true"
                    );

                } catch {}


                box.style.display =
                    "none";

            }
        );

    }

}


/* =========================================================
   SEO
========================================================= */

function updateSEO(
    haber
) {

    const description =
        cleanText(
            haber.spot ||
            haber.icerik ||
            ""
        ).substring(
            0,
            160
        );


    setAttribute(
        "metaDescription",
        "content",
        description
    );


    setAttribute(
        "ogTitle",
        "content",
        haber.baslik
    );


    setAttribute(
        "ogDescription",
        "content",
        description
    );


    setAttribute(
        "ogImage",
        "content",
        haber.gorsel ||
        haber.resim ||
        getFallbackImage()
    );


    setAttribute(
        "twitterTitle",
        "content",
        haber.baslik
    );


    setAttribute(
        "twitterDescription",
        "content",
        description
    );

}


/* =========================================================
   STRUCTURED DATA
========================================================= */

function addArticleSchema(
    haber
) {

    const old =
        document.getElementById(
            "articleSchema"
        );


    if (old) {
        old.remove();
    }


    const image =
        haber.gorsel ||
        haber.resim ||
        getFallbackImage();


    const schema = {

        "@context":
            "https://schema.org",

        "@type":
            "NewsArticle",

        headline:
            haber.baslik,

        description:
            cleanText(
                haber.spot ||
                ""
            ),

        image: [
            image
        ],

        datePublished:
            createISODate(
                haber.tarih,
                haber.saat
            ),

        dateModified:
            createISODate(
                haber.tarih,
                haber.saat
            ),

        author: {

            "@type":
                "Organization",

            name:
                "Haberİsta"

        },

        publisher: {

            "@type":
                "Organization",

            name:
                "Haberİsta"

        },

        mainEntityOfPage: {

            "@type":
                "WebPage",

            "@id":
                window.location.href

        }

    };


    const script =
        document.createElement(
            "script"
        );


    script.id =
        "articleSchema";

    script.type =
        "application/ld+json";

    script.textContent =
        JSON.stringify(
            schema
        );


    document.head.appendChild(
        script
    );

}


/* =========================================================
   HATA
========================================================= */

function showArticleError() {

    const article =
        document.getElementById(
            "article"
        );


    if (!article) {
        return;
    }


    article.innerHTML = `

        <div class="article-error">

            <div>
                📰
            </div>

            <h1>
                Haber bulunamadı
            </h1>

            <p>
                Aradığınız haber mevcut değil,
                kaldırılmış veya bağlantı hatalı olabilir.
            </p>

            <a href="index.html">
                ← Ana Sayfaya Dön
            </a>

        </div>

    `;

}


/* =========================================================
   YARDIMCI FONKSİYONLAR
========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.textContent =
            value || "";

    }

}


function setAttribute(
    id,
    attribute,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.setAttribute(
            attribute,
            value || ""
        );

    }

}


function cleanText(
    text
) {

    if (!text) {
        return "";
    }


    return String(text)
        .replace(
            /<[^>]*>/g,
            " "
        )
        .replace(
            /&nbsp;/gi,
            " "
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();

}


function normalize(
    text
) {

    return String(
        text || ""
    )
        .toLocaleLowerCase(
            "tr-TR"
        )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /ı/g,
            "i"
        )
        .trim();

}


function formatNumber(
    number
) {

    return new Intl.NumberFormat(
        "tr-TR"
    ).format(
        Number(number || 0)
    );

}


function formatDate(
    date,
    time
) {

    if (!date) {
        return "";
    }


    return time
        ? `${date} • ${time}`
        : date;

}


function createISODate(
    date,
    time
) {

    if (!date) {
        return new Date().toISOString();
    }


    const parsed =
        new Date(
            `${date} ${time || "00:00"}`
        );


    if (
        Number.isNaN(
            parsed.getTime()
        )
    ) {

        return new Date().toISOString();

    }


    return parsed.toISOString();

}


function createSlug(
    text
) {

    return String(
        text || ""
    )
        .toLocaleLowerCase(
            "tr-TR"
        )
        .replace(
            /ğ/g,
            "g"
        )
        .replace(
            /ü/g,
            "u"
        )
        .replace(
            /ş/g,
            "s"
        )
        .replace(
            /ı/g,
            "i"
        )
        .replace(
            /ö/g,
            "o"
        )
        .replace(
            /ç/g,
            "c"
        )
        .replace(
            /[^a-z0-9\s-]/g,
            ""
        )
        .trim()
        .replace(
            /\s+/g,
            "-"
        )
        .replace(
            /-+/g,
            "-"
        );

}


function escapeHtml(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeJs(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        )
        .replace(
            /\n/g,
            "\\n"
        )
        .replace(
            /\r/g,
            "\\r"
        );

}


function getFallbackImage() {

    return (
        "https://images.unsplash.com/" +
        "photo-1504711434969-e33886168f5c" +
        "?auto=format&fit=crop&w=1200&q=80"
    );

}

</script>

</body>

</html>
