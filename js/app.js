"use strict";

/* =========================================================
HABERİSTA - PROFESYONEL ANA SAYFA MOTORU
GELİŞTİRİLMİŞ SÜRÜM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

/* =========================================================
   TEMEL VERİ
========================================================= */

const haberler = Array.isArray(window.haberler)
    ? window.haberler
    : [];

const aktifKategori =
    document.body.getAttribute("data-kategori");


/* =========================================================
   HTML GÜVENLİĞİ
========================================================= */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   TÜRKÇE NORMALİZASYON
========================================================= */

function normalizeCategory(value) {
    return String(value || "")
        .trim()
        .toLocaleLowerCase("tr-TR");
}


/* =========================================================
   ELEMENTLER
========================================================= */

const heroMain =
    document.getElementById("heroMain");

const heroNumbers =
    document.getElementById("heroNumbers");

const heroPrev =
    document.getElementById("heroPrev");

const heroNext =
    document.getElementById("heroNext");

const newsGrid =
    document.getElementById("newsGrid");

const popularNews =
    document.getElementById("popularNews");

const breakingNews =
    document.getElementById("breakingNews");

const searchBtn =
    document.getElementById("searchBtn");

const closeSearch =
    document.getElementById("closeSearch");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");

const searchResultInfo =
    document.getElementById("searchResultInfo");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const notificationBtn =
    document.getElementById("notificationBtn");


/* =========================================================
   PROFESYONEL ANA SAYFA CSS
   ========================================================= */

const premiumStyle = document.createElement("style");

premiumStyle.textContent = `

    /* =====================================================
       HABERİSTA PREMIUM APP STYLES
    ===================================================== */

    .hi-hero-layout {
        display:grid;
        grid-template-columns:minmax(0, 1.65fr) minmax(280px, .75fr);
        gap:14px;
        min-height:470px;
    }

    .hi-hero-main {
        position:relative;
        min-height:470px;
        overflow:hidden;
        border-radius:20px;
        background:#111827;
        box-shadow:0 14px 40px rgba(15,23,42,.12);
    }

    .hi-hero-main img {
        width:100%;
        height:100%;
        min-height:470px;
        object-fit:cover;
        display:block;
        transition:transform .7s ease;
    }

    .hi-hero-main:hover img {
        transform:scale(1.035);
    }

    .hi-hero-overlay {
        position:absolute;
        inset:0;
        background:
            linear-gradient(
                180deg,
                rgba(0,0,0,.03) 20%,
                rgba(0,0,0,.18) 45%,
                rgba(0,0,0,.9) 100%
            );
    }

    .hi-hero-content {
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        padding:34px;
        color:#fff;
    }

    .hi-category {
        display:inline-flex;
        align-items:center;
        gap:6px;
        padding:7px 11px;
        border-radius:8px;
        background:#e11d48;
        color:#fff;
        font-size:11px;
        font-weight:900;
        letter-spacing:.04em;
        text-transform:uppercase;
        margin-bottom:13px;
    }

    .hi-hero-title {
        margin:0;
        max-width:850px;
        font-size:clamp(25px,3.2vw,42px);
        line-height:1.08;
        letter-spacing:-.035em;
        font-weight:900;
        text-shadow:0 2px 12px rgba(0,0,0,.3);
    }

    .hi-hero-spot {
        margin:13px 0 0;
        max-width:760px;
        font-size:14px;
        line-height:1.55;
        color:rgba(255,255,255,.88);
    }

    .hi-hero-meta {
        display:flex;
        align-items:center;
        gap:12px;
        margin-top:16px;
        color:rgba(255,255,255,.82);
        font-size:12px;
        font-weight:700;
    }

    .hi-hero-meta::before {
        content:"";
        width:7px;
        height:7px;
        border-radius:50%;
        background:#fb7185;
        box-shadow:0 0 0 5px rgba(225,29,72,.16);
    }

    .hi-side-news {
        display:grid;
        grid-template-rows:1fr 1fr;
        gap:14px;
    }

    .hi-side-card {
        position:relative;
        overflow:hidden;
        min-height:0;
        border-radius:18px;
        background:#111827;
        box-shadow:0 10px 30px rgba(15,23,42,.09);
    }

    .hi-side-card img {
        width:100%;
        height:100%;
        min-height:225px;
        object-fit:cover;
        display:block;
        transition:transform .5s ease;
    }

    .hi-side-card:hover img {
        transform:scale(1.045);
    }

    .hi-side-overlay {
        position:absolute;
        inset:0;
        background:
            linear-gradient(
                180deg,
                transparent 20%,
                rgba(0,0,0,.82) 100%
            );
    }

    .hi-side-content {
        position:absolute;
        left:18px;
        right:18px;
        bottom:17px;
        color:#fff;
    }

    .hi-side-category {
        display:inline-block;
        margin-bottom:8px;
        font-size:10px;
        font-weight:900;
        color:#fb7185;
        text-transform:uppercase;
    }

    .hi-side-title {
        margin:0;
        font-size:17px;
        line-height:1.25;
        font-weight:850;
    }

    .hi-side-meta {
        margin-top:8px;
        font-size:10px;
        color:rgba(255,255,255,.7);
    }

    .hi-hero-empty {
        display:flex;
        align-items:center;
        justify-content:center;
        min-height:470px;
        color:#94a3b8;
    }


    /* =====================================================
       GELİŞMİŞ HABER GRID
    ===================================================== */

    .hi-news-card {
        overflow:hidden;
        background:#fff;
        border:1px solid rgba(15,23,42,.07);
        border-radius:17px;
        box-shadow:0 7px 25px rgba(15,23,42,.055);
        transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
    }

    .hi-news-card:hover {
        transform:translateY(-6px);
        box-shadow:0 18px 40px rgba(15,23,42,.12);
        border-color:rgba(225,29,72,.16);
    }

    .hi-news-link {
        display:block;
        color:inherit;
        text-decoration:none;
    }

    .hi-news-image {
        position:relative;
        overflow:hidden;
        aspect-ratio:16/9;
        background:#e5e7eb;
    }

    .hi-news-image img {
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
        transition:transform .5s ease;
    }

    .hi-news-card:hover .hi-news-image img {
        transform:scale(1.055);
    }

    .hi-news-badge {
        position:absolute;
        left:12px;
        top:12px;
        padding:6px 9px;
        border-radius:7px;
        background:rgba(225,29,72,.96);
        color:#fff;
        font-size:10px;
        font-weight:900;
        text-transform:uppercase;
        box-shadow:0 5px 15px rgba(0,0,0,.12);
    }

    .hi-news-body {
        padding:17px;
    }

    .hi-news-title {
        margin:8px 0 0;
        color:#111827;
        font-size:18px;
        line-height:1.3;
        letter-spacing:-.018em;
        font-weight:850;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
    }

    .hi-news-spot {
        margin:9px 0 0;
        color:#64748b;
        font-size:13px;
        line-height:1.5;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
    }

    .hi-news-bottom {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        margin-top:15px;
        padding-top:12px;
        border-top:1px solid #eef0f3;
    }

    .hi-news-date {
        color:#94a3b8;
        font-size:11px;
        font-weight:700;
    }

    .hi-news-views {
        color:#64748b;
        font-size:11px;
        font-weight:800;
    }


    /* =====================================================
       ÇOK OKUNANLAR
    ===================================================== */

    .hi-popular-grid {
        display:grid;
        grid-template-columns:repeat(5,minmax(0,1fr));
        gap:14px;
    }

    .hi-popular-item {
        position:relative;
        overflow:hidden;
        min-height:225px;
        border-radius:16px;
        background:#111827;
        color:#fff;
        text-decoration:none;
        box-shadow:0 8px 25px rgba(15,23,42,.08);
        transition:
            transform .25s ease,
            box-shadow .25s ease;
    }

    .hi-popular-item:hover {
        transform:translateY(-5px);
        box-shadow:0 18px 35px rgba(15,23,42,.13);
    }

    .hi-popular-image {
        position:absolute;
        inset:0;
    }

    .hi-popular-image img {
        width:100%;
        height:100%;
        object-fit:cover;
        transition:transform .5s ease;
    }

    .hi-popular-item:hover img {
        transform:scale(1.05);
    }

    .hi-popular-overlay {
        position:absolute;
        inset:0;
        background:
            linear-gradient(
                180deg,
                rgba(0,0,0,.04),
                rgba(0,0,0,.88)
            );
    }

    .hi-popular-number {
        position:absolute;
        top:12px;
        left:12px;
        z-index:2;
        width:36px;
        height:36px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        background:rgba(255,255,255,.95);
        color:#e11d48;
        font-size:14px;
        font-weight:950;
    }

    .hi-popular-content {
        position:absolute;
        left:15px;
        right:15px;
        bottom:15px;
        z-index:2;
    }

    .hi-popular-category {
        color:#fb7185;
        font-size:9px;
        font-weight:900;
        text-transform:uppercase;
    }

    .hi-popular-title {
        margin:6px 0 0;
        font-size:14px;
        line-height:1.3;
        font-weight:850;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
    }


    /* =====================================================
       KATEGORİ BLOKLARI
    ===================================================== */

    .hi-category-section {
        margin-top:44px;
    }

    .hi-category-header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        margin-bottom:16px;
    }

    .hi-category-heading {
        display:flex;
        align-items:center;
        gap:10px;
        margin:0;
        font-size:25px;
        font-weight:900;
        letter-spacing:-.025em;
    }

    .hi-category-heading::before {
        content:"";
        width:5px;
        height:24px;
        border-radius:5px;
        background:#e11d48;
    }

    .hi-category-more {
        color:#e11d48;
        text-decoration:none;
        font-size:13px;
        font-weight:850;
    }

    .hi-category-more:hover {
        text-decoration:underline;
    }

    .hi-category-grid {
        display:grid;
        grid-template-columns:1.35fr 1fr 1fr;
        gap:16px;
    }

    .hi-category-feature,
    .hi-category-small {
        overflow:hidden;
        border-radius:16px;
        background:#fff;
        border:1px solid rgba(15,23,42,.06);
        box-shadow:0 7px 24px rgba(15,23,42,.05);
    }

    .hi-category-feature {
        grid-row:span 2;
    }

    .hi-category-feature-image,
    .hi-category-small-image {
        overflow:hidden;
        background:#e5e7eb;
    }

    .hi-category-feature-image {
        aspect-ratio:16/10;
    }

    .hi-category-small-image {
        aspect-ratio:16/9;
    }

    .hi-category-feature-image img,
    .hi-category-small-image img {
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        transition:transform .45s ease;
    }

    .hi-category-feature:hover img,
    .hi-category-small:hover img {
        transform:scale(1.045);
    }

    .hi-category-feature-body,
    .hi-category-small-body {
        padding:14px;
    }

    .hi-category-feature-title {
        margin:7px 0 0;
        font-size:20px;
        line-height:1.3;
        font-weight:900;
    }

    .hi-category-small-title {
        margin:6px 0 0;
        font-size:14px;
        line-height:1.35;
        font-weight:850;
    }

    .hi-category-meta {
        margin-top:9px;
        color:#94a3b8;
        font-size:10px;
        font-weight:700;
    }


    /* =====================================================
       ARAMA SONUCU
    ===================================================== */

    .hi-search-result {
        padding:12px 14px;
        margin-bottom:15px;
        border-radius:12px;
        background:#fff;
        border:1px solid #e5e7eb;
        color:#64748b;
        font-size:13px;
    }

    .hi-search-result strong {
        color:#e11d48;
    }


    /* =====================================================
       BOŞ SONUÇ
    ===================================================== */

    .hi-no-results {
        grid-column:1/-1;
        padding:55px 20px;
        text-align:center;
        border:1px dashed #cbd5e1;
        border-radius:17px;
        background:#fff;
    }

    .hi-no-results-icon {
        font-size:42px;
        margin-bottom:10px;
    }

    .hi-no-results h3 {
        margin:0;
        font-size:20px;
    }

    .hi-no-results p {
        margin:7px 0 0;
        color:#64748b;
    }


    /* =====================================================
       GERİ YUKARI
    ===================================================== */

    .hi-back-top {
        position:fixed;
        right:22px;
        bottom:22px;
        z-index:900;
        width:46px;
        height:46px;
        border:0;
        border-radius:50%;
        background:#e11d48;
        color:#fff;
        font-size:21px;
        font-weight:900;
        cursor:pointer;
        box-shadow:0 10px 25px rgba(225,29,72,.3);
        opacity:0;
        visibility:hidden;
        transform:translateY(10px);
        transition:.25s ease;
    }

    .hi-back-top.visible {
        opacity:1;
        visibility:visible;
        transform:translateY(0);
    }

    .hi-back-top:hover {
        background:#be123c;
        transform:translateY(-3px);
    }


    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media(max-width:1050px) {

        .hi-hero-layout {
            grid-template-columns:1fr;
        }

        .hi-side-news {
            grid-template-columns:1fr 1fr;
            grid-template-rows:1fr;
        }

        .hi-side-card {
            min-height:230px;
        }

        .hi-popular-grid {
            grid-template-columns:repeat(3,1fr);
        }

        .hi-category-grid {
            grid-template-columns:1fr 1fr;
        }

        .hi-category-feature {
            grid-row:auto;
            grid-column:1/-1;
        }
    }


    @media(max-width:720px) {

        .hi-hero-main {
            min-height:350px;
        }

        .hi-hero-main img {
            min-height:350px;
        }

        .hi-hero-content {
            padding:21px;
        }

        .hi-hero-title {
            font-size:26px;
        }

        .hi-hero-spot {
            font-size:12px;
            -webkit-line-clamp:2;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            overflow:hidden;
        }

        .hi-side-news {
            gap:10px;
        }

        .hi-side-card {
            min-height:190px;
        }

        .hi-side-title {
            font-size:14px;
        }

        .hi-news-title {
            font-size:17px;
        }

        .hi-popular-grid {
            grid-template-columns:1fr 1fr;
        }

        .hi-category-grid {
            grid-template-columns:1fr;
        }

        .hi-category-feature {
            grid-column:auto;
        }
    }


    @media(max-width:480px) {

        .hi-hero-main {
            min-height:310px;
            border-radius:15px;
        }

        .hi-hero-main img {
            min-height:310px;
        }

        .hi-hero-content {
            padding:17px;
        }

        .hi-hero-title {
            font-size:22px;
        }

        .hi-hero-spot {
            display:none;
        }

        .hi-side-news {
            display:grid;
        }

        .hi-side-card {
            min-height:165px;
            border-radius:14px;
        }

        .hi-side-content {
            left:12px;
            right:12px;
            bottom:12px;
        }

        .hi-side-title {
            font-size:13px;
        }

        .hi-popular-grid {
            grid-template-columns:1fr;
        }

        .hi-popular-item {
            min-height:190px;
        }

        .hi-category-feature-title {
            font-size:18px;
        }

        .hi-category-small-title {
            font-size:14px;
        }

        .hi-back-top {
            right:14px;
            bottom:14px;
            width:42px;
            height:42px;
        }
    }

`;

document.head.appendChild(premiumStyle);


/* =========================================================
   HABER YARDIMCILARI
========================================================= */

function getSlug(haber) {

    if (haber.slug) {
        return haber.slug;
    }

    if (typeof window.slugOlustur === "function") {
        return window.slugOlustur(haber.baslik);
    }

    return String(haber.baslik || "")
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


function getUrl(haber) {

    if (haber.url) {
        return haber.url;
    }

    if (haber.id !== undefined) {
        return "haber.html?id=" +
            encodeURIComponent(haber.id);
    }

    const slug = getSlug(haber);

    return slug
        ? `haber.html?slug=${encodeURIComponent(slug)}`
        : "haber.html";
}


function getImage(haber) {

    return haber.gorsel ||
        haber.image ||
        haber.resim ||
        "/images/logo.jpeg";
}


function getCategory(haber) {

    return haber.kategori ||
        haber.category ||
        "Gündem";
}


function getTitle(haber) {

    return haber.baslik ||
        haber.title ||
        "Haberİsta";
}


function getSpot(haber) {

    return haber.spot ||
        haber.ozet ||
        haber.summary ||
        "";
}


function getViews(haber) {

    const views =
        Number(
            haber.goruntulenme ??
            haber.goruntuleme ??
            haber.views ??
            0
        );

    return views;
}


function formatViews(number) {

    if (!number) {
        return "";
    }

    if (number >= 1000000) {
        return (
            (number / 1000000)
                .toFixed(1)
                .replace(".0", "")
        ) + " Mn";
    }

    if (number >= 1000) {
        return (
            (number / 1000)
                .toFixed(1)
                .replace(".0", "")
        ) + " B";
    }

    return String(number);
}


/* =========================================================
   TARİH
========================================================= */

function formatDate(haber) {

    if (haber.tarih && haber.saat) {
        return `${haber.tarih} • ${haber.saat}`;
    }

    if (haber.tarih) {
        return haber.tarih;
    }

    if (haber.publishedAt) {

        const date =
            new Date(haber.publishedAt);

        if (!Number.isNaN(date.getTime())) {

            return date.toLocaleDateString(
                "tr-TR",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            );
        }
    }

    return "";
}


/* =========================================================
   TARİH PARSE
========================================================= */

function parseTurkishDate(tarih, saat) {

    if (!tarih) {
        return 0;
    }

    const aylar = {
        "ocak": 0,
        "şubat": 1,
        "mart": 2,
        "nisan": 3,
        "mayıs": 4,
        "haziran": 5,
        "temmuz": 6,
        "ağustos": 7,
        "eylül": 8,
        "ekim": 9,
        "kasım": 10,
        "aralık": 11
    };

    const parcalar =
        String(tarih)
            .trim()
            .toLocaleLowerCase("tr-TR")
            .split(/\s+/);

    if (parcalar.length >= 3) {

        const gun =
            Number(parcalar[0]);

        const ay =
            aylar[parcalar[1]];

        const yil =
            Number(parcalar[2]);

        if (
            !Number.isNaN(gun) &&
            ay !== undefined &&
            !Number.isNaN(yil)
        ) {

            const saatParcalari =
                String(saat || "00:00")
                    .split(":");

            const saatNum =
                Number(saatParcalari[0]) || 0;

            const dakikaNum =
                Number(saatParcalari[1]) || 0;

            return new Date(
                yil,
                ay,
                gun,
                saatNum,
                dakikaNum
            ).getTime();
        }
    }

    const normalDate =
        new Date(
            `${tarih} ${saat || ""}`
        );

    if (!Number.isNaN(normalDate.getTime())) {
        return normalDate.getTime();
    }

    return 0;
}


function getNewsTime(haber) {

    if (haber.publishedAt) {

        const timestamp =
            new Date(
                haber.publishedAt
            ).getTime();

        if (!Number.isNaN(timestamp)) {
            return timestamp;
        }
    }

    return parseTurkishDate(
        haber.tarih,
        haber.saat
    );
}


function sortNews(list) {

    return [...list].sort(function (a, b) {

        const dateA =
            getNewsTime(a);

        const dateB =
            getNewsTime(b);

        if (dateA !== dateB) {
            return dateB - dateA;
        }

        return Number(b.id || 0) -
            Number(a.id || 0);
    });
}


/* =========================================================
   KATEGORİ FİLTRESİ
========================================================= */

let filteredNews = haberler;

if (aktifKategori) {

    filteredNews =
        haberler.filter(function (haber) {

            return normalizeCategory(
                haber.kategori
            ) === normalizeCategory(
                aktifKategori
            );
        });
}

const sortedNews =
    sortNews(filteredNews);

const pageNews =
    aktifKategori
        ? sortedNews
        : sortNews(haberler);


/* =========================================================
   KATEGORİ SAYFASI
========================================================= */

if (aktifKategori) {

    const kategoriBaslik =
        document.getElementById(
            "kategoriBaslik"
        );

    const kategoriAciklama =
        document.getElementById(
            "kategoriAciklama"
        );

    const sectionTitle =
        document.querySelector(
            ".section-title h2"
        );

    const aciklamalar = {

        "Gündem":
            "Türkiye gündeminden son gelişmeler, önemli açıklamalar ve sıcak haberler.",

        "Dünya":
            "Dünyadan son dakika gelişmeleri, uluslararası gelişmeler ve önemli haberler.",

        "Ekonomi":
            "Ekonomi, finans, piyasalar, döviz ve gündemin öne çıkan ekonomik gelişmeleri.",

        "Spor":
            "Spor dünyasından son dakika gelişmeleri, maçlar, transferler ve önemli haberler.",

        "Magazin":
            "Magazin dünyasından son gelişmeler ve gündem olan haberler.",

        "Teknoloji":
            "Teknoloji, yapay zeka, dijital dünya ve yeni teknolojilerden güncel haberler.",

        "Kültür Sanat":
            "Kültür, sanat, sinema, müzik ve sanat dünyasından güncel gelişmeler.",

        "Sağlık":
            "Sağlık alanından güncel gelişmeler ve sağlık gündeminden haberler.",

        "Türkiye":
            "Türkiye'nin farklı bölgelerinden güncel gelişmeler ve önemli haberler.",

        "Eğitim":
            "Eğitim gündeminden son gelişmeler, sınavlar ve öğrencileri ilgilendiren haberler."
    };

    if (kategoriBaslik) {
        kategoriBaslik.textContent =
            aktifKategori;
    }

    if (kategoriAciklama) {
        kategoriAciklama.textContent =
            aciklamalar[aktifKategori] ||
            `${aktifKategori} kategorisinden en güncel haberler.`;
    }

    if (sectionTitle) {
        sectionTitle.textContent =
            `${aktifKategori} Haberleri`;
    }

    document.title =
        `${aktifKategori} Haberleri - Haberİsta`;
}


/* =========================================================
   HERO
========================================================= */

let currentHero = 0;

const heroNews =
    pageNews.slice(
        0,
        Math.min(20, pageNews.length)
    );


function renderHero() {

    if (!heroMain) {
        return;
    }

    if (!heroNews.length) {

        heroMain.innerHTML = `
            <div class="hi-hero-empty">
                Haber bulunamadı.
            </div>
        `;

        if (heroNumbers) {
            heroNumbers.innerHTML = "";
        }

        return;
    }

    if (currentHero >= heroNews.length) {
        currentHero = 0;
    }

    if (currentHero < 0) {
        currentHero = heroNews.length - 1;
    }

    const main =
        heroNews[currentHero];

    const sideOne =
        heroNews[
            (currentHero + 1) %
            heroNews.length
        ];

    const sideTwo =
        heroNews[
            (currentHero + 2) %
            heroNews.length
        ];

    function sideCard(haber) {

        return `
            <a
                class="hi-side-card"
                href="${escapeHTML(getUrl(haber))}"
                aria-label="${escapeHTML(getTitle(haber))}"
            >

                <img
                    src="${escapeHTML(getImage(haber))}"
                    alt="${escapeHTML(getTitle(haber))}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                >

                <div class="hi-side-overlay"></div>

                <div class="hi-side-content">

                    <span class="hi-side-category">
                        ${escapeHTML(getCategory(haber))}
                    </span>

                    <h3 class="hi-side-title">
                        ${escapeHTML(getTitle(haber))}
                    </h3>

                    <div class="hi-side-meta">
                        ${escapeHTML(formatDate(haber))}
                    </div>

                </div>

            </a>
        `;
    }

    heroMain.innerHTML = `

        <div class="hi-hero-layout">

            <a
                class="hi-hero-main"
                href="${escapeHTML(getUrl(main))}"
                aria-label="${escapeHTML(getTitle(main))}"
            >

                <img
                    src="${escapeHTML(getImage(main))}"
                    alt="${escapeHTML(getTitle(main))}"
                    loading="eager"
                    fetchpriority="high"
                    onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                >

                <div class="hi-hero-overlay"></div>

                <div class="hi-hero-content">

                    <span class="hi-category">
                        ${escapeHTML(getCategory(main))}
                    </span>

                    <h2 class="hi-hero-title">
                        ${escapeHTML(getTitle(main))}
                    </h2>

                    ${
                        getSpot(main)
                            ? `
                                <p class="hi-hero-spot">
                                    ${escapeHTML(getSpot(main))}
                                </p>
                            `
                            : ""
                    }

                    <div class="hi-hero-meta">
                        ${escapeHTML(formatDate(main))}
                        ${
                            getViews(main)
                                ? ` • ${formatViews(getViews(main))} okunma`
                                : ""
                        }
                    </div>

                </div>

            </a>

            <div class="hi-side-news">

                ${sideCard(sideOne)}
                ${sideCard(sideTwo)}

            </div>

        </div>
    `;

    renderHeroNumbers();
}


/* =========================================================
   HERO NUMARALARI
========================================================= */

function renderHeroNumbers() {

    if (!heroNumbers) {
        return;
    }

    heroNumbers.innerHTML =
        heroNews.map(function (haber, index) {

            return `
                <button
                    type="button"
                    class="hero-number ${
                        index === currentHero
                            ? "active"
                            : ""
                    }"
                    data-hero-index="${index}"
                    aria-label="${
                        index + 1
                    }. manşet"
                    title="${escapeHTML(
                        getTitle(haber)
                    )}"
                >
                    ${String(index + 1).padStart(2, "0")}
                </button>
            `;

        }).join("");

    heroNumbers
        .querySelectorAll(".hero-number")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    currentHero =
                        Number(
                            button.dataset.heroIndex
                        );

                    renderHero();
                    startHeroTimer();

                }
            );
        });
}


/* =========================================================
   HERO BUTONLARI
========================================================= */

if (heroPrev) {

    heroPrev.addEventListener(
        "click",
        function () {

            if (!heroNews.length) {
                return;
            }

            currentHero--;

            if (currentHero < 0) {
                currentHero =
                    heroNews.length - 1;
            }

            renderHero();
            startHeroTimer();
        }
    );
}


if (heroNext) {

    heroNext.addEventListener(
        "click",
        function () {

            if (!heroNews.length) {
                return;
            }

            currentHero++;

            if (
                currentHero >=
                heroNews.length
            ) {
                currentHero = 0;
            }

            renderHero();
            startHeroTimer();
        }
    );
}


/* =========================================================
   HERO TIMER
========================================================= */

let heroTimer = null;

function stopHeroTimer() {

    if (heroTimer) {
        clearInterval(heroTimer);
        heroTimer = null;
    }
}


function startHeroTimer() {

    stopHeroTimer();

    if (heroNews.length <= 1) {
        return;
    }

    heroTimer =
        setInterval(function () {

            currentHero++;

            if (
                currentHero >=
                heroNews.length
            ) {
                currentHero = 0;
            }

            renderHero();

        }, 6500);
}


renderHero();
startHeroTimer();


if (heroMain) {

    heroMain.addEventListener(
        "mouseenter",
        stopHeroTimer
    );

    heroMain.addEventListener(
        "mouseleave",
        startHeroTimer
    );
}


/* =========================================================
   SON DAKİKA
========================================================= */

function renderBreakingNews() {

    if (!breakingNews) {
        return;
    }

    const latest =
        pageNews.slice(
            0,
            Math.min(10, pageNews.length)
        );

    if (!latest.length) {
        breakingNews.innerHTML = "";
        return;
    }

    breakingNews.innerHTML = `

        <div class="breaking-inner">

            <div class="breaking-heading">

                <span class="breaking-pulse"></span>

                <strong>SON DAKİKA</strong>

            </div>

            <div class="breaking-track">

                <div class="breaking-list">

                    ${
                        latest.map(function (haber) {

                            return `
                                <a
                                    class="breaking-item"
                                    href="${escapeHTML(getUrl(haber))}"
                                >

                                    <span class="breaking-label">
                                        SON DAKİKA
                                    </span>

                                    <span class="breaking-title">
                                        ${escapeHTML(getTitle(haber))}
                                    </span>

                                </a>
                            `;

                        }).join("")
                    }

                </div>

            </div>

        </div>
    `;
}


renderBreakingNews();


/* =========================================================
   HABER KARTI
========================================================= */

function createNewsCard(haber) {

    const views =
        getViews(haber);

    return `

        <article
            class="hi-news-card news-card"
            data-id="${escapeHTML(haber.id)}"
        >

            <a
                class="hi-news-link news-card-link"
                href="${escapeHTML(getUrl(haber))}"
            >

                <div class="hi-news-image news-card-image">

                    <img
                        src="${escapeHTML(getImage(haber))}"
                        alt="${escapeHTML(getTitle(haber))}"
                        loading="lazy"
                        decoding="async"
                        onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                    >

                    <span class="hi-news-badge news-card-category">
                        ${escapeHTML(getCategory(haber))}
                    </span>

                </div>

                <div class="hi-news-body news-card-content">

                    <h3 class="hi-news-title">
                        ${escapeHTML(getTitle(haber))}
                    </h3>

                    ${
                        getSpot(haber)
                            ? `
                                <p class="hi-news-spot">
                                    ${escapeHTML(getSpot(haber))}
                                </p>
                            `
                            : ""
                    }

                    <div class="hi-news-bottom">

                        <span class="hi-news-date">
                            ${escapeHTML(formatDate(haber))}
                        </span>

                        ${
                            views
                                ? `
                                    <span class="hi-news-views">
                                        👁 ${formatViews(views)}
                                    </span>
                                `
                                : ""
                        }

                    </div>

                </div>

            </a>

        </article>
    `;
}


/* =========================================================
   HABERLERİ GÖSTER
========================================================= */

function renderNews(list) {

    if (!newsGrid) {
        return;
    }

    if (!list.length) {

        newsGrid.innerHTML = `

            <div class="hi-no-results no-results">

                <div class="hi-no-results-icon">
                    📰
                </div>

                <h3>
                    Haber bulunamadı
                </h3>

                <p>
                    Bu kategoride henüz yayınlanmış haber bulunmuyor.
                </p>

            </div>
        `;

        return;
    }

    newsGrid.innerHTML =
        list
            .map(createNewsCard)
            .join("");
}


renderNews(pageNews);


/* =========================================================
   ÇOK OKUNANLAR
========================================================= */

function getPopularNews() {

    return [...pageNews]
        .sort(function (a, b) {

            return Number(
                b.goruntulenme ??
                b.goruntuleme ??
                b.views ??
                0
            ) -
            Number(
                a.goruntulenme ??
                a.goruntuleme ??
                a.views ??
                0
            );

        })
        .slice(0, 5);
}


function renderPopularNews() {

    if (!popularNews) {
        return;
    }

    const popular =
        getPopularNews();

    if (!popular.length) {
        popularNews.innerHTML = "";
        return;
    }

    popularNews.innerHTML = `

        <div class="hi-popular-grid">

            ${
                popular.map(function (haber, index) {

                    return `

                        <a
                            class="hi-popular-item popular-item"
                            href="${escapeHTML(getUrl(haber))}"
                        >

                            <div class="hi-popular-image">

                                <img
                                    src="${escapeHTML(getImage(haber))}"
                                    alt="${escapeHTML(getTitle(haber))}"
                                    loading="lazy"
                                    onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                                >

                            </div>

                            <div class="hi-popular-overlay"></div>

                            <span class="hi-popular-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <div class="hi-popular-content">

                                <span class="hi-popular-category">
                                    ${escapeHTML(getCategory(haber))}
                                </span>

                                <h3 class="hi-popular-title">
                                    ${escapeHTML(getTitle(haber))}
                                </h3>

                            </div>

                        </a>
                    `;

                }).join("")
            }

        </div>
    `;
}


renderPopularNews();


/* =========================================================
   ANA SAYFA KATEGORİ BLOKLARI
========================================================= */

function createCategorySections() {

    if (aktifKategori) {
        return;
    }

    if (pageNews.length < 4) {
        return;
    }

    const main =
        document.querySelector("main.container");

    if (!main) {
        return;
    }

    /*
     * Daha önce oluşturulduysa tekrar oluşturma.
     */

    if (
        document.getElementById(
            "hiCategorySections"
        )
    ) {
        return;
    }

    const categories = [
        "Gündem",
        "Spor",
        "Ekonomi",
        "Dünya",
        "Teknoloji",
        "Sağlık"
    ];

    const wrapper =
        document.createElement("div");

    wrapper.id =
        "hiCategorySections";

    const availableCategories =
        categories.filter(function (category) {

            return haberler.some(function (haber) {

                return normalizeCategory(
                    haber.kategori
                ) === normalizeCategory(
                    category
                );

            });

        });

    availableCategories.forEach(
        function (category) {

            const categoryNews =
                sortNews(
                    haberler.filter(
                        function (haber) {

                            return normalizeCategory(
                                haber.kategori
                            ) === normalizeCategory(
                                category
                            );

                        }
                    )
                ).slice(0, 3);

            if (!categoryNews.length) {
                return;
            }

            const section =
                document.createElement("section");

            section.className =
                "hi-category-section";

            section.setAttribute(
                "aria-label",
                `${category} haberleri`
            );

            const feature =
                categoryNews[0];

            const smallNews =
                categoryNews.slice(1, 3);

            section.innerHTML = `

                <div class="hi-category-header">

                    <h2 class="hi-category-heading">
                        ${escapeHTML(category)}
                    </h2>

                    <a
                        class="hi-category-more"
                        href="${getCategoryUrl(category)}"
                    >
                        Tümünü Gör →
                    </a>

                </div>

                <div class="hi-category-grid">

                    <a
                        class="hi-category-feature"
                        href="${escapeHTML(getUrl(feature))}"
                    >

                        <div class="hi-category-feature-image">

                            <img
                                src="${escapeHTML(getImage(feature))}"
                                alt="${escapeHTML(getTitle(feature))}"
                                loading="lazy"
                                onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                            >

                        </div>

                        <div class="hi-category-feature-body">

                            <span class="hi-category-meta">
                                ${escapeHTML(formatDate(feature))}
                            </span>

                            <h3 class="hi-category-feature-title">
                                ${escapeHTML(getTitle(feature))}
                            </h3>

                        </div>

                    </a>

                    ${
                        smallNews.map(function (haber) {

                            return `

                                <a
                                    class="hi-category-small"
                                    href="${escapeHTML(getUrl(haber))}"
                                >

                                    <div class="hi-category-small-image">

                                        <img
                                            src="${escapeHTML(getImage(haber))}"
                                            alt="${escapeHTML(getTitle(haber))}"
                                            loading="lazy"
                                            onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                                        >

                                    </div>

                                    <div class="hi-category-small-body">

                                        <span class="hi-category-meta">
                                            ${escapeHTML(formatDate(haber))}
                                        </span>

                                        <h3 class="hi-category-small-title">
                                            ${escapeHTML(getTitle(haber))}
                                        </h3>

                                    </div>

                                </a>

                            `;

                        }).join("")
                    }

                </div>
            `;

            wrapper.appendChild(section);
        }
    );

    const popularSection =
        document.querySelector(
            ".popular-section"
        );

    if (popularSection) {
        popularSection.after(wrapper);
    } else {
        main.appendChild(wrapper);
    }
}


function getCategoryUrl(category) {

    const urls = {

        "Gündem": "/gundem.html",
        "Ekonomi": "/ekonomi.html",
        "Spor": "/spor.html",
        "Magazin": "/magazin.html",
        "Dünya": "/dunya.html",
        "Teknoloji": "/teknoloji.html",
        "Sağlık": "/saglik.html",
        "Kültür Sanat": "/kultur-sanat.html"

    };

    return urls[category] || "#";
}


createCategorySections();


/* =========================================================
   ARAMA
========================================================= */

function openSearch() {

    if (!searchPanel) {
        return;
    }

    searchPanel.classList.add("active");

    setTimeout(function () {

        if (searchInput) {
            searchInput.focus();
        }

    }, 100);
}


function closeSearchPanel() {

    if (!searchPanel) {
        return;
    }

    searchPanel.classList.remove("active");

    if (searchInput) {
        searchInput.value = "";
    }

    if (searchResultInfo) {
        searchResultInfo.innerHTML = "";
        searchResultInfo.classList.remove(
            "hi-search-result"
        );
    }

    renderNews(pageNews);
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        openSearch
    );
}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        closeSearchPanel
    );
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .trim()
                    .toLocaleLowerCase(
                        "tr-TR"
                    );

            if (!query) {

                if (searchResultInfo) {

                    searchResultInfo.innerHTML =
                        "";

                    searchResultInfo.classList.remove(
                        "hi-search-result"
                    );
                }

                renderNews(pageNews);

                return;
            }

            const results =
                pageNews.filter(
                    function (haber) {

                        const title =
                            String(
                                haber.baslik ||
                                haber.title ||
                                ""
                            )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );

                        const spot =
                            String(
                                haber.spot ||
                                haber.ozet ||
                                ""
                            )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );

                        const category =
                            String(
                                haber.kategori ||
                                ""
                            )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );

                        const content =
                            String(
                                haber.icerik ||
                                haber.content ||
                                ""
                            )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );

                        return (
                            title.includes(query) ||
                            spot.includes(query) ||
                            category.includes(query) ||
                            content.includes(query)
                        );
                    }
                );

            if (searchResultInfo) {

                searchResultInfo.classList.add(
                    "hi-search-result"
                );

                searchResultInfo.innerHTML = `
                    <strong>${results.length}</strong>
                    haber bulundu.
                    <span>“${escapeHTML(query)}”</span>
                `;
            }

            renderNews(results);
        }
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeSearchPanel();
            }

            if (event.key === "Enter") {

                const query =
                    searchInput.value.trim();

                if (!query) {
                    return;
                }

                const latestSection =
                    document.querySelector(
                        ".latest-section"
                    );

                window.scrollTo({

                    top:
                        latestSection
                            ? latestSection.offsetTop - 80
                            : 0,

                    behavior:
                        "smooth"
                });
            }
        }
    );
}


/* =========================================================
   MOBİL MENÜ
========================================================= */

function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.add("active");

    if (menuBtn) {

        menuBtn.classList.add("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    document.body.classList.add(
        "menu-open"
    );
}


function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("active");

    if (menuBtn) {

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    document.body.classList.remove(
        "menu-open"
    );
}


if (menuBtn) {

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    menuBtn.addEventListener(
        "click",
        function () {

            if (
                mobileMenu &&
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }
        }
    );
}


/* =========================================================
   AKTİF KATEGORİ
========================================================= */

function normalizePath(path) {

    if (!path) {
        return "/";
    }

    let result =
        String(path)
            .split("?")[0]
            .split("#")[0];

    if (!result.startsWith("/")) {
        result = "/" + result;
    }

    result =
        result.replace(
            /\/+/g,
            "/"
        );

    result =
        result.replace(
            /\/+$/,
            ""
        );

    return result || "/";
}


function setActiveCategory() {

    const currentPath =
        normalizePath(
            window.location.pathname
        );

    const categoryLinks =
        document.querySelectorAll(
            ".category-nav a, .mobile-menu a, nav a"
        );

    categoryLinks.forEach(
        function (link) {

            const href =
                link.getAttribute(
                    "href"
                );

            if (!href) {
                return;
            }

            if (
                href === "#" ||
                href.startsWith("http://") ||
                href.startsWith("https://") ||
                href.startsWith("mailto:") ||
                href.startsWith("javascript:")
            ) {
                return;
            }

            const linkPath =
                normalizePath(href);

            link.classList.remove(
                "active"
            );

            if (
                linkPath ===
                currentPath
            ) {

                link.classList.add(
                    "active"
                );
            }
        }
    );
}


setActiveCategory();


/* =========================================================
   MOBİL MENÜ LİNKLERİ
========================================================= */

if (mobileMenu) {

    mobileMenu
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            }
        );
}


/* =========================================================
   DIŞARI TIKLAMA
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!mobileMenu || !menuBtn) {
            return;
        }

        if (
            mobileMenu.classList.contains(
                "active"
            ) &&
            !mobileMenu.contains(
                event.target
            ) &&
            !menuBtn.contains(
                event.target
            )
        ) {

            closeMobileMenu();
        }
    }
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }

        closeSearchPanel();
        closeMobileMenu();
    }
);


/* =========================================================
   BİLDİRİMLER
========================================================= */

if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        async function () {

            if (!("Notification" in window)) {

                alert(
                    "Tarayıcınız bildirim özelliğini desteklemiyor."
                );

                return;
            }

            try {

                const permission =
                    await Notification.requestPermission();

                if (
                    permission ===
                    "granted"
                ) {

                    notificationBtn
                        .classList
                        .add("enabled");

                    notificationBtn.innerHTML =
                        "🔔 Bildirimler Açık";

                    try {

                        new Notification(
                            "Haberİsta",
                            {
                                body:
                                    "Son dakika haberlerinden anında haberdar olabilirsiniz."
                            }
                        );

                    } catch (notificationError) {

                        console.warn(
                            notificationError
                        );
                    }

                } else {

                    notificationBtn.innerHTML =
                        "🔕 Bildirimleri Aç";
                }

            } catch (error) {

                console.warn(
                    "Bildirim izni alınamadı:",
                    error
                );
            }
        }
    );
}


/* =========================================================
   YUKARI ÇIK
========================================================= */

let backTop =
    document.getElementById(
        "backToTop"
    );

if (!backTop) {

    backTop =
        document.createElement(
            "button"
        );

    backTop.id =
        "backToTop";

    backTop.className =
        "hi-back-top";

    backTop.type =
        "button";

    backTop.setAttribute(
        "aria-label",
        "Yukarı çık"
    );

    backTop.innerHTML =
        "↑";

    document.body.appendChild(
        backTop
    );
}


function updateBackTop() {

    if (
        window.scrollY >
        500
    ) {

        backTop.classList.add(
            "visible"
        );

    } else {

        backTop.classList.remove(
            "visible"
        );
    }
}


window.addEventListener(
    "scroll",
    updateBackTop,
    {
        passive:true
    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);


updateBackTop();


/* =========================================================
   GÖRSEL FALLBACK
========================================================= */

document.addEventListener(
    "error",
    function (event) {

        const element =
            event.target;

        if (
            element &&
            element.tagName === "IMG" &&
            !element.dataset.fallback
        ) {

            element.dataset.fallback =
                "true";

            element.src =
                "/images/logo.jpeg";
        }

    },
    true
);


/* =========================================================
   TOUCH SWIPE - HERO
========================================================= */

let touchStartX = 0;
let touchEndX = 0;

if (heroMain) {

    heroMain.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive:true
        }
    );


    heroMain.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchStartX -
                touchEndX;

            if (Math.abs(difference) < 45) {
                return;
            }

            if (difference > 0) {

                if (heroNext) {
                    heroNext.click();
                }

            } else {

                if (heroPrev) {
                    heroPrev.click();
                }

            }

        },
        {
            passive:true
        }
    );
}


/* =========================================================
   RESİMLERDE LAZY LOAD GÜVENLİĞİ
========================================================= */

document
    .querySelectorAll("img")
    .forEach(function (img) {

        if (
            !img.hasAttribute("decoding")
        ) {
            img.setAttribute(
                "decoding",
                "async"
            );
        }

    });


/* =========================================================
   UYGULAMA HAZIR
========================================================= */

document.body.classList.add(
    "app-ready"
);


console.log(
    "Haberİsta başlatıldı."
);

console.log(
    "Toplam haber:",
    haberler.length
);

console.log(
    "Manşet haber sayısı:",
    heroNews.length
);

if (aktifKategori) {

    console.log(
        "Aktif kategori:",
        aktifKategori
    );

    console.log(
        "Kategori haber sayısı:",
        pageNews.length
    );

} else {

    console.log(
        "Ana sayfa - tüm haberler gösteriliyor."
    );
}


});
