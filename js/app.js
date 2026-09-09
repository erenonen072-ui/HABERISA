"use strict";

/* =========================================================
   HABERİSTA
   ANA SAYFA UYGULAMASI

   VERİ KAYNAĞI:
   js/haberler.js

   haberler.js içindeki TÜM haberler kullanılır.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       YARDIMCI FONKSİYONLAR
    ===================================================== */

    const $ = (selector) =>
        document.querySelector(selector);

    const $$ = (selector) =>
        Array.from(
            document.querySelectorAll(selector)
        );


    /* =====================================================
       HABER VERİLERİ
    ===================================================== */

    const haberListesi =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];


    console.log(
        `Haberİsta: ${haberListesi.length} haber yüklendi.`
    );


    /* =====================================================
       DOM
    ===================================================== */

    const menuButton =
        $("#menuButton");

    const mobileNavigation =
        $("#mobileNavigation");

    const searchButton =
        $("#searchButton");

    const searchPanel =
        $("#searchPanel");

    const searchInput =
        $("#searchInput");

    const searchSubmit =
        $("#searchSubmit");

    const breakingNews =
        $("#breakingNews");

    const breakingNext =
        $("#breakingNext");

    const heroMain =
        $("#heroMain");

    const heroNumbers =
        $("#heroNumbers");

    const heroCurrentNumber =
        $("#heroCurrentNumber");

    const heroTotalNumber =
        $("#heroTotalNumber");

    const newsGrid =
        $("#newsGrid");

    const searchResultsSection =
        $("#searchResultsSection");

    const searchResults =
        $("#searchResults");

    const searchResultInfo =
        $("#searchResultInfo");


    /* =====================================================
       HATA KONTROLÜ
    ===================================================== */

    if (!haberListesi.length) {

        console.error(
            "Haberİsta: haberler.js yüklenemedi veya haber bulunamadı."
        );

        if (newsGrid) {

            newsGrid.innerHTML = `
                <div class="no-news">
                    <h3>Haberler yüklenemedi</h3>
                    <p>
                        Haber verileri şu anda kullanılamıyor.
                    </p>
                </div>
            `;

        }

        return;
    }


    /* =====================================================
       GÖRSEL
    ===================================================== */

    function getImage(haber) {

        if (!haber) {
            return "";
        }

        return String(
            haber.gorsel ||
            haber.görsel ||
            haber.resim ||
            haber.image ||
            haber.foto ||
            haber.thumbnail ||
            ""
        ).trim();

    }


    /* =====================================================
       HTML GÜVENLİĞİ
    ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       HABER SLUG
    ===================================================== */

    function getSlug(haber) {

        if (
            haber &&
            haber.slug
        ) {

            return haber.slug;

        }


        if (
            typeof window.slugOlustur ===
            "function"
        ) {

            return window.slugOlustur(
                haber?.baslik || ""
            );

        }


        return String(
            haber?.baslik || ""
        )
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

        if (
            haber &&
            haber.url
        ) {

            return haber.url;

        }

        return `/haber/${getSlug(haber)}`;

    }


    /* =====================================================
       HABER TARİHİ
    ===================================================== */

    function getDate(haber) {

        return String(
            haber?.tarih ||
            haber?.date ||
            ""
        ).trim();

    }


    /* =====================================================
       HABER SAATİ
    ===================================================== */

    function getTime(haber) {

        return String(
            haber?.saat ||
            haber?.time ||
            ""
        ).trim();

    }


    /* =====================================================
       HABER SPOTU
    ===================================================== */

    function getSpot(haber) {

        return String(
            haber?.spot ||
            haber?.aciklama ||
            ""
        ).trim();

    }


    /* =====================================================
       HABER KATEGORİSİ
    ===================================================== */

    function getCategory(haber) {

        return String(
            haber?.kategori ||
            "Genel"
        ).trim();

    }


    /* =====================================================
       HABER SIRALAMASI
       
       haberler.js'deki sıra korunur.
       
       Dosyada yeni eklenen haber üstteyse:
       otomatik olarak en yeni haber olarak kullanılır.
    ===================================================== */

    const tumHaberler =
        [...haberListesi];


    /* =====================================================
       SON DAKİKA
       
       EN YENİ 5 HABER
    ===================================================== */

    const sonBesHaber =
        tumHaberler.slice(0, 5);


    let breakingIndex = 0;


    function renderBreakingNews() {

        if (!breakingNews) {
            return;
        }


        if (!sonBesHaber.length) {

            breakingNews.innerHTML = `
                <a href="#">
                    Haberİsta'dan son gelişmeler...
                </a>
            `;

            return;
        }


        const haber =
            sonBesHaber[breakingIndex];


        breakingNews.innerHTML = `

            <a
                href="${escapeHTML(
                    getNewsUrl(haber)
                )}"
                title="${escapeHTML(
                    haber.baslik
                )}"
            >
                ${escapeHTML(
                    haber.baslik
                )}
            </a>

        `;

    }


    if (breakingNext) {

        breakingNext.addEventListener(
            "click",
            function () {

                if (
                    !sonBesHaber.length
                ) {
                    return;
                }


                breakingIndex++;

                if (
                    breakingIndex >=
                    sonBesHaber.length
                ) {

                    breakingIndex = 0;

                }


                renderBreakingNews();

            }
        );

    }


    renderBreakingNews();


    /* =====================================================
       SON DAKİKA OTOMATİK DÖNGÜ
    ===================================================== */

    if (
        sonBesHaber.length > 1
    ) {

        setInterval(
            function () {

                breakingIndex++;

                if (
                    breakingIndex >=
                    sonBesHaber.length
                ) {

                    breakingIndex = 0;

                }

                renderBreakingNews();

            },
            5000
        );

    }


    /* =====================================================
       MANŞET
       
       İLK 20 HABER
    ===================================================== */

    const heroNews =
        tumHaberler.slice(0, 20);


    let heroIndex = 0;


    function renderHero() {

        if (!heroMain) {
            return;
        }


        if (!heroNews.length) {

            heroMain.innerHTML = `
                <div class="hero-empty">
                    Henüz manşet haberi bulunmuyor.
                </div>
            `;

            return;
        }


        const haber =
            heroNews[heroIndex];


        const image =
            getImage(haber);

        const category =
            getCategory(haber);

        const title =
            haber.baslik || "";

        const spot =
            getSpot(haber);

        const date =
            getDate(haber);

        const time =
            getTime(haber);

        const url =
            getNewsUrl(haber);


        heroMain.innerHTML = `

            <a
                href="${escapeHTML(url)}"
                class="hero-slide-link"
                aria-label="${escapeHTML(title)}"
            >

                <div class="hero-image-wrapper">

                    ${
                        image

                        ? `

                            <img
                                id="heroImage"
                                src="${escapeHTML(image)}"
                                alt="${escapeHTML(title)}"
                                class="hero-image"
                                loading="eager"
                                onerror="
                                    this.onerror=null;
                                    this.style.display='none';
                                "
                            >

                          `

                        : `

                            <div class="
                                hero-image
                                hero-image-empty
                            ">
                                Haberİsta
                            </div>

                          `
                    }


                    <span class="hero-category">
                        ${escapeHTML(category)}
                    </span>

                </div>


                <div class="hero-content">

                    <div class="hero-date">

                        ${escapeHTML(date)}

                        ${
                            time
                            ? `
                                <span> • </span>
                                ${escapeHTML(time)}
                              `
                            : ""
                        }

                    </div>


                    <h2>
                        ${escapeHTML(title)}
                    </h2>


                    ${
                        spot
                        ? `
                            <p>
                                ${escapeHTML(spot)}
                            </p>
                          `
                        : ""
                    }


                    <span class="hero-read-more">

                        Haberin Detayına Git

                        <span>→</span>

                    </span>

                </div>

            </a>

        `;


        updateHeroNumbers();

        updateHeroCounter();

    }


    /* =====================================================
       MANŞET NUMARALARI
       
       1 - 20
    ===================================================== */

    function renderHeroNumbers() {

        if (!heroNumbers) {
            return;
        }


        heroNumbers.innerHTML =
            heroNews
                .map(
                    function (haber, index) {

                        return `

                            <button
                                type="button"
                                class="hero-number ${
                                    index === heroIndex
                                        ? "active"
                                        : ""
                                }"
                                data-index="${index}"
                                aria-label="${
                                    index + 1
                                }. manşet"
                                aria-current="${
                                    index === heroIndex
                                        ? "true"
                                        : "false"
                                }"
                            >
                                ${index + 1}
                            </button>

                        `;

                    }
                )
                .join("");


        $$("#heroNumbers .hero-number")
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            heroIndex =
                                Number(
                                    this.dataset.index
                                );


                            renderHero();

                        }
                    );

                }
            );

    }


    function updateHeroNumbers() {

        $$("#heroNumbers .hero-number")
            .forEach(
                function (button) {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    const active =
                        index === heroIndex;


                    button.classList.toggle(
                        "active",
                        active
                    );


                    button.setAttribute(
                        "aria-current",
                        active
                            ? "true"
                            : "false"
                    );

                }
            );

    }


    function updateHeroCounter() {

        if (heroCurrentNumber) {

            heroCurrentNumber.textContent =
                String(
                    heroIndex + 1
                ).padStart(2, "0");

        }


        if (heroTotalNumber) {

            heroTotalNumber.textContent =
                String(
                    heroNews.length
                ).padStart(2, "0");

        }

    }


    renderHeroNumbers();
    renderHero();


    /* =====================================================
       OTOMATİK MANŞET
       
       7 SANİYE
    ===================================================== */

    if (
        heroNews.length > 1
    ) {

        setInterval(
            function () {

                heroIndex++;

                if (
                    heroIndex >=
                    heroNews.length
                ) {

                    heroIndex = 0;

                }

                renderHero();

            },
            7000
        );

    }


    /* =====================================================
       SON HABERLER
       
       TÜM HABERLER
    ===================================================== */

    function renderNews(list, target) {

        if (!target) {
            return;
        }


        if (
            !Array.isArray(list) ||
            !list.length
        ) {

            target.innerHTML = `
                <div class="no-news">
                    <h3>Haber bulunamadı</h3>
                    <p>
                        Gösterilecek haber bulunmuyor.
                    </p>
                </div>
            `;

            return;
        }


        target.innerHTML =
            list
                .map(
                    function (haber) {

                        const image =
                            getImage(haber);

                        const title =
                            haber.baslik || "";

                        const category =
                            getCategory(haber);

                        const spot =
                            getSpot(haber);

                        const date =
                            getDate(haber);

                        const time =
                            getTime(haber);

                        const url =
                            getNewsUrl(haber);


                        return `

                            <article
                                class="news-card"
                                data-id="${escapeHTML(
                                    haber.id
                                )}"
                            >

                                <a
                                    href="${escapeHTML(url)}"
                                    class="news-card-link"
                                    aria-label="${escapeHTML(title)}"
                                >

                                    <div
                                        class="news-card-image"
                                    >

                                        ${
                                            image

                                            ? `

                                                <img
                                                    src="${escapeHTML(image)}"
                                                    alt="${escapeHTML(title)}"
                                                    loading="lazy"
                                                    onerror="
                                                        this.onerror=null;
                                                        this.style.display='none';
                                                    "
                                                >

                                              `

                                            : `

                                                <div class="
                                                    image-placeholder
                                                ">
                                                    Haberİsta
                                                </div>

                                              `
                                        }


                                        <span
                                            class="news-category"
                                        >
                                            ${escapeHTML(
                                                category
                                            )}
                                        </span>

                                    </div>


                                    <div
                                        class="news-card-content"
                                    >

                                        <div
                                            class="news-card-meta"
                                        >

                                            <span>
                                                ${escapeHTML(
                                                    date
                                                )}
                                            </span>

                                            ${
                                                time
                                                ? `
                                                    <span>•</span>

                                                    <span>
                                                        ${escapeHTML(
                                                            time
                                                        )}
                                                    </span>
                                                  `
                                                : ""
                                            }

                                        </div>


                                        <h3>
                                            ${escapeHTML(title)}
                                        </h3>


                                        ${
                                            spot
                                            ? `
                                                <p>
                                                    ${escapeHTML(
                                                        spot
                                                    )}
                                                </p>
                                              `
                                            : ""
                                        }


                                        <div
                                            class="news-card-bottom"
                                        >

                                            <span
                                                class="read-more"
                                            >
                                                Haberi Oku →
                                            </span>

                                        </div>

                                    </div>

                                </a>

                            </article>

                        `;

                    }
                )
                .join("");

    }


    renderNews(
        tumHaberler,
        newsGrid
    );


    /* =====================================================
       KATEGORİLER
    ===================================================== */

    function renderCategory(
        category,
        elementId
    ) {

        const container =
            document.getElementById(
                elementId
            );

        if (!container) {
            return;
        }


        const categoryNews =
            tumHaberler.filter(
                function (haber) {

                    return (
                        getCategory(haber)
                            .toLocaleLowerCase(
                                "tr-TR"
                            ) ===
                        category
                            .toLocaleLowerCase(
                                "tr-TR"
                            )
                    );

                }
            );


        /*
         * Kategori yoksa bölümü gizle
         */

        const section =
            container.closest(
                ".category-block"
            );


        if (
            !categoryNews.length
        ) {

            if (section) {
                section.style.display =
                    "none";
            }

            return;
        }


        if (section) {
            section.style.display =
                "";
        }


        /*
         * Her kategori için
         * en fazla 4 haber göster.
         */

        renderNews(
            categoryNews.slice(0, 4),
            container
        );

    }


    renderCategory(
        "Gündem",
        "gundemNews"
    );

    renderCategory(
        "Ekonomi",
        "ekonomiNews"
    );

    renderCategory(
        "Spor",
        "sporNews"
    );

    renderCategory(
        "Dünya",
        "dunyaNews"
    );

    renderCategory(
        "Teknoloji",
        "teknolojiNews"
    );

    renderCategory(
        "Magazin",
        "magazinNews"
    );


    /* =====================================================
       ARAMA
       
       TÜM HABERLERDE ARAR
    ===================================================== */

    function searchNews(query) {

        query =
            String(query || "")
                .trim()
                .toLocaleLowerCase("tr-TR");


        if (!searchResultsSection) {
            return;
        }


        if (!query) {

            searchResultsSection.hidden =
                true;

            if (searchResults) {
                searchResults.innerHTML =
                    "";
            }

            return;
        }


        const results =
            tumHaberler.filter(
                function (haber) {

                    const title =
                        String(
                            haber.baslik || ""
                        )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    const spot =
                        String(
                            haber.spot || ""
                        )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    const category =
                        getCategory(haber)
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    return (
                        title.includes(query) ||
                        spot.includes(query) ||
                        category.includes(query)
                    );

                }
            );


        searchResultsSection.hidden =
            false;


        if (searchResultInfo) {

            searchResultInfo.innerHTML = `
                <strong>
                    ${results.length}
                </strong>
                haber bulundu.
            `;

        }


        renderNews(
            results,
            searchResults
        );


        searchResultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                searchNews(
                    this.value
                );

            }
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    searchNews(
                        this.value
                    );

                }


                if (
                    event.key === "Escape"
                ) {

                    this.value = "";

                    searchNews("");

                    closeSearch();

                }

            }
        );

    }


    if (searchSubmit) {

        searchSubmit.addEventListener(
            "click",
            function () {

                searchNews(
                    searchInput?.value || ""
                );

            }
        );

    }


    /* =====================================================
       ARAMA PANELİ
    ===================================================== */

    function openSearch() {

        if (!searchPanel) {
            return;
        }

        searchPanel.classList.add(
            "open"
        );


        if (searchInput) {

            setTimeout(
                function () {

                    searchInput.focus();

                },
                100
            );

        }

    }


    function closeSearch() {

        if (!searchPanel) {
            return;
        }

        searchPanel.classList.remove(
            "open"
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (
                    searchPanel?.classList
                        .contains("open")
                ) {

                    closeSearch();

                } else {

                    openSearch();

                }

            }
        );

    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    if (
        menuButton &&
        mobileNavigation
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                const open =
                    mobileNavigation
                        .classList
                        .toggle("open");


                menuButton.setAttribute(
                    "aria-expanded",
                    open
                        ? "true"
                        : "false"
                );

            }
        );


        $$("#mobileNavigation a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            mobileNavigation
                                .classList
                                .remove("open");

                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );

    }


    /* =====================================================
       BİLDİRİM BUTONU
    ===================================================== */

    const notificationButton =
        $("#headerNotificationButton");


    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function () {

                const overlay =
                    $("#consentOverlay");

                const notificationBox =
                    $("#notificationBox");

                if (!overlay) {
                    return;
                }


                if (notificationBox) {

                    notificationBox.style.display =
                        "block";

                }


                overlay.classList.add(
                    "visible"
                );

                overlay.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }
        );

    }


    /* =====================================================
       PİYASALAR
       
       Şimdilik veri kaynağı yoksa
       alanlar boş kalır.
    ===================================================== */

    function initializeMarkets() {

        const values = {

            usdValue: "—",
            usdChange: "—",

            eurValue: "—",
            eurChange: "—",

            goldValue: "—",
            goldChange: "—",

            bistValue: "—",
            bistChange: "—"

        };


        Object.keys(values)
            .forEach(
                function (id) {

                    const element =
                        document.getElementById(id);

                    if (
                        element &&
                        element.textContent === "—"
                    ) {

                        element.textContent =
                            values[id];

                    }

                }
            );

    }


    initializeMarkets();


    /* =====================================================
       GLOBAL API
       
       İleride admin paneli veya canlı veri
       sistemi eklenirse kullanılabilir.
    ===================================================== */

    window.HaberIstaApp = {

        haberler: tumHaberler,

        heroNews: heroNews,

        sonBesHaber: sonBesHaber,

        search: searchNews,

        renderNews: function (
            list
        ) {

            renderNews(
                list,
                newsGrid
            );

        },

        goToHero: function (
            index
        ) {

            if (
                index >= 0 &&
                index < heroNews.length
            ) {

                heroIndex = index;

                renderHero();

            }

        }

    };


    /* =====================================================
       SON KONTROL
    ===================================================== */

    console.log(
        "Haberİsta ana sayfa hazır."
    );

    console.log(
        "Toplam haber:",
        tumHaberler.length
    );

    console.log(
        "Manşet:",
        heroNews.length
    );

    console.log(
        "Son dakika:",
        sonBesHaber.length
    );

});
