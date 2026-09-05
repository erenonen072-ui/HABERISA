"use strict";

/* =========================================================
   HABERİSTA APP.JS
   HTML + haberler.js ile uyumlu
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const $ = (selector) => document.querySelector(selector);

    /* =====================================================
       YARDIMCI
    ===================================================== */

    function escapeHTML(text) {
        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function haberURL(haber) {
        return haber.url || (
            "haber.html?slug=" +
            encodeURIComponent(haber.slug || "")
        );
    }

    function formatDate(haber) {
        return `${haber.date || ""} ${haber.time || ""}`.trim();
    }

    /* =====================================================
       ELEMENTLER
    ===================================================== */

    const heroMain = $("#heroMain");
    const heroNumbers = $("#heroNumbers");
    const heroPrev = $("#heroPrev");
    const heroNext = $("#heroNext");

    /* =====================================================
       MANŞET
    ===================================================== */

    const heroNews = haberler.slice(0, Math.min(haberler.length, 20));

    let heroIndex = 0;
    let heroTimer = null;

    function renderHero() {

        if (!heroMain || !heroNumbers) return;

        if (!heroNews.length) {
            heroMain.innerHTML = `
                <div class="hero-empty">
                    Haber bulunamadı.
                </div>
            `;

            heroNumbers.innerHTML = "";
            return;
        }

        const haber = heroNews[heroIndex];

        heroMain.innerHTML = `
            <a
                href="${haberURL(haber)}"
                class="hero-slide-link"
                aria-label="${escapeHTML(haber.baslik)}"
            >

                <img
                    src="${escapeHTML(haber.image)}"
                    alt="${escapeHTML(haber.baslik)}"
                    class="hero-image"
                    onerror="this.src='https://placehold.co/1200x600/111/fff?text=Haber%C4%B0sta'"
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(haber.kategori)}
                    </span>

                    <h1>
                        ${escapeHTML(haber.baslik)}
                    </h1>

                    <p>
                        ${escapeHTML(haber.spot)}
                    </p>

                    <div class="hero-meta">
                        ${escapeHTML(haber.date || "")}
                        ${haber.time ? " • " + escapeHTML(haber.time) : ""}
                    </div>

                </div>

            </a>
        `;

        heroNumbers.innerHTML = heroNews
            .map(function (haber, index) {
                return `
                    <button
                        type="button"
                        class="hero-number ${
                            index === heroIndex ? "active" : ""
                        }"
                        data-index="${index}"
                    >
                        ${index + 1}
                    </button>
                `;
            })
            .join("");
    }

    function nextHero() {

        if (!heroNews.length) return;

        heroIndex =
            (heroIndex + 1) % heroNews.length;

        renderHero();
    }

    function prevHero() {

        if (!heroNews.length) return;

        heroIndex =
            (heroIndex - 1 + heroNews.length) %
            heroNews.length;

        renderHero();
    }

    function startHeroTimer() {

        clearInterval(heroTimer);

        heroTimer = setInterval(function () {
            nextHero();
        }, 6000);
    }

    if (heroNext) {

        heroNext.addEventListener("click", function () {
            nextHero();
            startHeroTimer();
        });

    }

    if (heroPrev) {

        heroPrev.addEventListener("click", function () {
            prevHero();
            startHeroTimer();
        });

    }

    if (heroNumbers) {

        heroNumbers.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(".hero-number");

                if (!button) return;

                heroIndex =
                    Number(button.dataset.index);

                renderHero();
                startHeroTimer();
            }
        );

    }

    renderHero();
    startHeroTimer();


    /* =====================================================
       SON DAKİKA - KAYAN BANT
    ===================================================== */

    const breakingNews =
        haberler.filter(function (haber) {
            return haber.kategori === "Son Dakika";
        });

    const breakingContainer = $("#breakingNews");

    if (breakingContainer) {

        let tickerNews = breakingNews.length
            ? breakingNews
            : haberler.slice(0, 5);

        const createTicker = function () {

            return tickerNews.map(function (haber) {

                return `
                    <a
                        href="${haberURL(haber)}"
                        class="breaking-item"
                    >
                        <span class="breaking-mini-dot"></span>
                        ${escapeHTML(haber.baslik)}
                    </a>
                `;

            }).join("");
        };

        /*
          Aynı içerik iki kez yazılıyor.
          Böylece sonsuz kayma efekti oluşuyor.
        */

        breakingContainer.innerHTML = `
            <div class="breaking-marquee">

                <div class="breaking-track">

                    <div class="breaking-group">
                        ${createTicker()}
                    </div>

                    <div class="breaking-group" aria-hidden="true">
                        ${createTicker()}
                    </div>

                </div>

            </div>
        `;
    }


    /* =====================================================
       HABER KARTLARI
    ===================================================== */

    const newsGrid = $("#newsGrid");

    function haberKarti(haber) {

        return `
            <article class="news-card">

                <a
                    href="${haberURL(haber)}"
                    class="news-card-image"
                >

                    <img
                        src="${escapeHTML(haber.image)}"
                        alt="${escapeHTML(haber.baslik)}"
                        loading="lazy"
                        onerror="this.src='https://placehold.co/800x450/e9e9e9/333?text=Haber%C4%B0sta'"
                    >

                    <span class="card-category">
                        ${escapeHTML(haber.kategori)}
                    </span>

                </a>

                <div class="news-card-body">

                    <div class="news-card-meta">
                        ${escapeHTML(formatDate(haber))}
                    </div>

                    <h3>
                        <a href="${haberURL(haber)}">
                            ${escapeHTML(haber.baslik)}
                        </a>
                    </h3>

                    <p>
                        ${escapeHTML(haber.spot)}
                    </p>

                    <a
                        href="${haberURL(haber)}"
                        class="read-more"
                    >
                        Haberi oku →
                    </a>

                </div>

            </article>
        `;
    }

    if (newsGrid) {

        newsGrid.innerHTML = haberler
            .map(haberKarti)
            .join("");

    }


    /* =====================================================
       SIDEBAR - ÇOK OKUNANLAR
    ===================================================== */

    const popularNews = $("#popularNews");

    if (popularNews) {

        const popular =
            [...haberler]
                .sort(function (a, b) {
                    return Number(b.views || 0) -
                           Number(a.views || 0);
                })
                .slice(0, 5);

        popularNews.innerHTML =
            popular.map(function (haber, index) {

                return `
                    <a
                        href="${haberURL(haber)}"
                        class="popular-item"
                    >

                        <div class="popular-number">
                            ${String(index + 1).padStart(2, "0")}
                        </div>

                        <img
                            src="${escapeHTML(haber.image)}"
                            alt=""
                            loading="lazy"
                            onerror="this.src='https://placehold.co/150x100/e9e9e9/333'"
                        >

                        <div>
                            <h4>
                                ${escapeHTML(haber.baslik)}
                            </h4>

                            <small>
                                ${Number(haber.views || 0).toLocaleString("tr-TR")}
                                okunma
                            </small>
                        </div>

                    </a>
                `;

            }).join("");
    }


    /* =====================================================
       GÜNÜN BAŞLIKLARI
    ===================================================== */

    const sidebarHeadlines =
        $("#sidebarHeadlines");

    if (sidebarHeadlines) {

        sidebarHeadlines.innerHTML =
            haberler.slice(0, 7)
                .map(function (haber) {

                    return `
                        <a
                            href="${haberURL(haber)}"
                            class="sidebar-headline"
                        >
                            <span>›</span>
                            ${escapeHTML(haber.baslik)}
                        </a>
                    `;

                })
                .join("");
    }


    /* =====================================================
       KATEGORİLER
    ===================================================== */

    function kategoriRender(
        kategori,
        elementID
    ) {

        const container =
            document.getElementById(elementID);

        if (!container) return;

        const liste =
            haberler.filter(function (haber) {
                return haber.kategori
                    .toLocaleLowerCase("tr-TR") ===
                    kategori.toLocaleLowerCase("tr-TR");
            });

        container.innerHTML =
            liste.slice(0, 4)
                .map(haberKarti)
                .join("");

        if (!liste.length) {

            container.innerHTML = `
                <div class="empty-category">
                    Bu kategoride henüz haber bulunmuyor.
                </div>
            `;
        }
    }

    kategoriRender("Gündem", "gundemNews");
    kategoriRender("Ekonomi", "ekonomiNews");
    kategoriRender("Spor", "sporNews");
    kategoriRender("Teknoloji", "teknolojiNews");


    /* =====================================================
       ARAMA
    ===================================================== */

    const searchInput = $("#searchInput");
    const searchBtn = $("#searchBtn");
    const searchResultInfo =
        $("#searchResultInfo");

    function searchNews() {

        if (!searchInput) return;

        const query =
            searchInput.value
                .trim()
                .toLocaleLowerCase("tr-TR");

        if (!query) {

            if (searchResultInfo) {
                searchResultInfo.textContent = "";
            }

            if (newsGrid) {
                newsGrid.innerHTML =
                    haberler.map(haberKarti).join("");
            }

            return;
        }

        const results =
            haberler.filter(function (haber) {

                const text =
                    (
                        haber.baslik +
                        " " +
                        haber.spot +
                        " " +
                        haber.kategori
                    ).toLocaleLowerCase("tr-TR");

                return text.includes(query);
            });

        if (searchResultInfo) {

            searchResultInfo.innerHTML =
                `<strong>${results.length}</strong> haber bulundu.`;
        }

        if (newsGrid) {

            newsGrid.innerHTML =
                results.length
                    ? results.map(haberKarti).join("")
                    : `
                        <div class="empty-search">
                            <strong>Haber bulunamadı.</strong>
                            <p>Farklı bir kelime deneyin.</p>
                        </div>
                    `;
        }
    }

    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchNews
        );

    }

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    searchNews();
                }

            }
        );

        searchInput.addEventListener(
            "input",
            function () {

                if (!searchInput.value.trim()) {
                    searchNews();
                }

            }
        );
    }


    /* =====================================================
       ÇEREZ
    ===================================================== */

    const cookieBox = $("#cookieBox");
    const cookieAccept = $("#cookieAccept");

    if (
        cookieBox &&
        localStorage.getItem("haberista_cookie")
    ) {
        cookieBox.style.display = "none";
    }

    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "haberista_cookie",
                    "accepted"
                );

                if (cookieBox) {
                    cookieBox.style.display = "none";
                }

            }
        );
    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    const menuBtn = $("#menuBtn");
    const nav = document.querySelector(".category-nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "mobile-open"
                );

            }
        );
    }

});
