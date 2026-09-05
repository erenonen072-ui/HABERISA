"use strict";

/* =========================================================
   HABERİSTA APP.JS
   Ana sayfa uygulaması
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       YARDIMCI
    ===================================================== */

    const $ = (selector) => document.querySelector(selector);

    const $$ = (selector) => {
        return Array.from(document.querySelectorAll(selector));
    };


    /* =====================================================
       HABER VERİLERİ
    ===================================================== */

    const haberListesi =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];


    /* =====================================================
       DOM
    ===================================================== */

    const menuBtn = $("#menuBtn");

    const searchBtn = $("#searchBtn");
    const searchBox = $("#searchBox");
    const searchInput = $("#searchInput");

    const breakingNews = $("#breakingNews");

    const heroMain = $("#heroMain");
    const heroPrev = $("#heroPrev");
    const heroNext = $("#heroNext");
    const heroNumbers = $("#heroNumbers");

    const newsGrid = $("#newsGrid");
    const searchResultInfo = $("#searchResultInfo");

    const cookieBox = $("#cookieBox");
    const cookieAccept = $("#cookieAccept");


    /* =====================================================
       GÖRSEL YOLU
    ===================================================== */

    function getImagePath(image) {

        if (!image) {
            return "";
        }

        return String(image);
    }


    /* =====================================================
       HTML GÜVENLİĞİ
    ===================================================== */

    function escapeHTML(text) {

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       SLUG
    ===================================================== */

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


    /* =====================================================
       HABER URL
    ===================================================== */

    function getNewsUrl(haber) {

        return "/haber/" + getSlug(haber);
    }


    /* =====================================================
       ARAMA
    ===================================================== */

    function openSearch() {

        if (!searchBox) {
            return;
        }

        searchBox.classList.add("active");

        if (searchInput) {

            setTimeout(function () {
                searchInput.focus();
            }, 100);

        }
    }


    function closeSearch() {

        if (!searchBox) {
            return;
        }

        searchBox.classList.remove("active");
    }


    function toggleSearch() {

        if (!searchBox) {
            return;
        }

        if (searchBox.classList.contains("active")) {
            closeSearch();
        } else {
            openSearch();
        }
    }


    if (searchBtn) {

        searchBtn.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            toggleSearch();

        });

    }


    if (searchBox) {

        searchBox.addEventListener("click", function (event) {

            event.stopPropagation();

        });

    }


    document.addEventListener("click", function (event) {

        if (!searchBox || !searchBtn) {
            return;
        }

        if (
            !searchBox.contains(event.target) &&
            !searchBtn.contains(event.target)
        ) {
            closeSearch();
        }

    });


    /* =====================================================
       ARAMA
    ===================================================== */

    function searchNews(query) {

        query = String(query || "")
            .trim()
            .toLocaleLowerCase("tr-TR");


        if (!query) {

            if (searchResultInfo) {
                searchResultInfo.innerHTML = "";
            }

            renderNews(haberListesi);

            return;
        }


        const results =
            haberListesi.filter(function (haber) {

                const title =
                    String(haber.baslik || "")
                        .toLocaleLowerCase("tr-TR");

                const spot =
                    String(haber.spot || "")
                        .toLocaleLowerCase("tr-TR");

                const category =
                    String(haber.kategori || "")
                        .toLocaleLowerCase("tr-TR");


                return (
                    title.includes(query) ||
                    spot.includes(query) ||
                    category.includes(query)
                );

            });


        renderNews(results);


        if (searchResultInfo) {

            searchResultInfo.innerHTML =
                `<strong>${results.length}</strong> haber bulundu.`;

        }

    }


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            searchNews(this.value);

        });


        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                this.value = "";

                searchNews("");

                closeSearch();

            }

        });

    }


    /* =====================================================
       SON DAKİKA BANDI
       
       EN YENİ 5 HABERİ GÖSTERİR.
       
       haberler.js'de listenin en üstüne yeni haber
       eklendiğinde otomatik olarak banda girer.
    ===================================================== */

    let breakingIndex = 0;


    function renderBreakingNews() {

        if (!breakingNews) {
            return;
        }


        /*
         * listenin en üstündeki 5 haber
         *
         * Örnek:
         *
         * 6 → yeni haber
         * 5
         * 4
         * 3
         * 2
         *
         * 1 otomatik olarak banttan çıkar.
         */

        const breaking =
            haberListesi.slice(0, 5);


        if (breaking.length === 0) {

            breakingNews.innerHTML =
                `<span>Haberİsta'dan son gelişmeler...</span>`;

            return;
        }


        /*
         * Bant içeriği
         */

        breakingNews.innerHTML = `

            <div class="breaking-track">

                ${
                    breaking.map(function (haber) {

                        return `
                            <a
                                href="${getNewsUrl(haber)}"
                                class="breaking-link"
                            >
                                ${escapeHTML(haber.baslik)}
                            </a>
                        `;

                    }).join("")
                }

            </div>

        `;


        const links =
            breakingNews.querySelectorAll(".breaking-link");


        if (links.length === 0) {
            return;
        }


        /*
         * Başlangıçta ilk haber görünür.
         */

        links.forEach(function (link, index) {

            link.style.display =
                index === 0
                    ? "block"
                    : "none";

        });


        breakingIndex = 0;


        /*
         * Haberleri sırayla değiştir.
         */

        if (links.length > 1) {

            setInterval(function () {

                if (!links[breakingIndex]) {
                    return;
                }


                links[breakingIndex].classList.remove(
                    "breaking-current"
                );


                links[breakingIndex].style.display =
                    "none";


                breakingIndex =
                    (breakingIndex + 1) % links.length;


                links[breakingIndex].style.display =
                    "block";


                links[breakingIndex].classList.add(
                    "breaking-current"
                );


            }, 4000);

        }

    }


    /* =====================================================
       MANŞET
    ===================================================== */

    let heroIndex = 0;

    const heroNews =
        haberListesi.slice(0, 5);


    function renderHero() {

        if (!heroMain) {
            return;
        }


        if (heroNews.length === 0) {

            heroMain.innerHTML = `
                <div class="hero-empty">
                    Henüz haber bulunmuyor.
                </div>
            `;

            return;
        }


        if (heroIndex >= heroNews.length) {
            heroIndex = 0;
        }


        if (heroIndex < 0) {
            heroIndex = heroNews.length - 1;
        }


        const haber =
            heroNews[heroIndex];


        const image =
            getImagePath(haber.image);


        heroMain.innerHTML = `
            <a
                href="${getNewsUrl(haber)}"
                class="hero-link"
            >

                <div class="hero-image">

                    ${
                        image
                            ? `
                                <img
                                    src="${escapeHTML(image)}"
                                    alt="${escapeHTML(haber.baslik)}"
                                    loading="eager"
                                >
                              `
                            : ""
                    }

                </div>


                <div class="hero-overlay">

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

                        ${
                            haber.time
                                ? `
                                    •
                                    ${escapeHTML(haber.time)}
                                  `
                                : ""
                        }

                    </div>

                </div>

            </a>
        `;


        renderHeroNumbers();

    }


    /* =====================================================
       MANŞET NUMARALARI
    ===================================================== */

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
                            index === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-index="${index}"
                        aria-label="${index + 1}. haber"
                    >
                        ${index + 1}
                    </button>
                `;

            }).join("");


        const buttons =
            heroNumbers.querySelectorAll(".hero-number");


        buttons.forEach(function (button) {

            button.addEventListener("click", function () {

                heroIndex =
                    Number(this.dataset.index);

                renderHero();

            });

        });

    }


    /* =====================================================
       MANŞET ÖNCEKİ
    ===================================================== */

    if (heroPrev) {

        heroPrev.addEventListener("click", function () {

            if (heroNews.length === 0) {
                return;
            }


            heroIndex--;


            if (heroIndex < 0) {
                heroIndex =
                    heroNews.length - 1;
            }


            renderHero();

        });

    }


    /* =====================================================
       MANŞET SONRAKİ
    ===================================================== */

    if (heroNext) {

        heroNext.addEventListener("click", function () {

            if (heroNews.length === 0) {
                return;
            }


            heroIndex++;


            if (heroIndex >= heroNews.length) {
                heroIndex = 0;
            }


            renderHero();

        });

    }


    /* =====================================================
       OTOMATİK MANŞET
    ===================================================== */

    if (heroNews.length > 1) {

        setInterval(function () {

            heroIndex++;


            if (heroIndex >= heroNews.length) {
                heroIndex = 0;
            }


            renderHero();

        }, 7000);

    }


    /* =====================================================
       HABER KARTLARI
    ===================================================== */

    function renderNews(list) {

        if (!newsGrid) {
            return;
        }


        if (!Array.isArray(list) || list.length === 0) {

            newsGrid.innerHTML = `
                <div class="no-news">

                    <div class="no-news-icon">
                        📰
                    </div>

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Aradığınız kriterlere uygun haber bulunamadı.
                    </p>

                </div>
            `;

            return;
        }


        newsGrid.innerHTML =
            list.map(function (haber) {

                const image =
                    getImagePath(haber.image);


                return `
                    <article
                        class="news-card"
                        data-id="${escapeHTML(haber.id)}"
                    >

                        <a
                            href="${getNewsUrl(haber)}"
                            class="news-card-link"
                        >

                            <div class="news-card-image">

                                ${
                                    image
                                        ? `
                                            <img
                                                src="${escapeHTML(image)}"
                                                alt="${escapeHTML(haber.baslik)}"
                                                loading="lazy"
                                            >
                                          `
                                        : `
                                            <div class="image-placeholder">
                                                Haberİsta
                                            </div>
                                          `
                                }


                                <span class="news-category">
                                    ${escapeHTML(haber.kategori)}
                                </span>

                            </div>


                            <div class="news-card-content">

                                <div class="news-card-meta">

                                    <span>
                                        ${escapeHTML(haber.date || "")}
                                    </span>

                                    ${
                                        haber.time
                                            ? `
                                                <span>•</span>

                                                <span>
                                                    ${escapeHTML(haber.time)}
                                                </span>
                                              `
                                            : ""
                                    }

                                </div>


                                <h3>
                                    ${escapeHTML(haber.baslik)}
                                </h3>


                                <p>
                                    ${escapeHTML(haber.spot)}
                                </p>


                                <div class="news-card-bottom">

                                    <span class="read-more">
                                        Haberi Oku →
                                    </span>


                                    ${
                                        haber.views
                                            ? `
                                                <span class="views">
                                                    👁
                                                    ${Number(haber.views).toLocaleString("tr-TR")}
                                                </span>
                                              `
                                            : ""
                                    }

                                </div>

                            </div>

                        </a>

                    </article>
                `;

            }).join("");

    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            document.body.classList.toggle(
                "menu-open"
            );


            const nav =
                document.querySelector(
                    ".category-nav"
                );


            if (nav) {

                nav.classList.toggle(
                    "mobile-open"
                );

            }

        });

    }


    /* =====================================================
       MENÜ LİNKLERİ
    ===================================================== */

    $$(".category-nav a").forEach(function (link) {

        link.addEventListener("click", function () {

            document.body.classList.remove(
                "menu-open"
            );


            const nav =
                document.querySelector(
                    ".category-nav"
                );


            if (nav) {

                nav.classList.remove(
                    "mobile-open"
                );

            }

        });

    });


    /* =====================================================
       ÇEREZ
    ===================================================== */

    function showCookieBox() {

        if (!cookieBox) {
            return;
        }


        const accepted =
            localStorage.getItem(
                "haberista_cookie"
            );


        if (accepted === "true") {

            cookieBox.style.display =
                "none";

        } else {

            cookieBox.style.display =
                "flex";

        }

    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "haberista_cookie",
                    "true"
                );


                if (cookieBox) {

                    cookieBox.style.display =
                        "none";

                }

            }
        );

    }


    /* =====================================================
       CANLI SAAT
    ===================================================== */

    function updateTime() {

        const now =
            new Date();


        const timeText =
            now.toLocaleTimeString(
                "tr-TR",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const dateText =
            now.toLocaleDateString(
                "tr-TR",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            );


        const clock =
            document.querySelector(
                ".live-clock"
            );


        if (clock) {

            clock.textContent =
                `${dateText} • ${timeText}`;

        }

    }


    /* =====================================================
       BAŞLAT
    ===================================================== */

    renderBreakingNews();

    renderHero();

    renderNews(haberListesi);

    showCookieBox();

    updateTime();


    setInterval(
        updateTime,
        30000
    );


    /* =====================================================
       KONSOL
    ===================================================== */

    console.log(
        "Haberİsta App başlatıldı."
    );

    console.log(
        "Yüklenen haber sayısı:",
        haberListesi.length
    );

    console.log(
        "Son dakika bandı:",
        haberListesi.slice(0, 5)
    );

});
