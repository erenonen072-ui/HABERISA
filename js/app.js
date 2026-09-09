/* =========================================================
   HABERİSTA — PREMIUM APP.JS
   Ana sayfa uygulama motoru
========================================================= */

(() => {
    "use strict";

    /* =====================================================
       GLOBAL CONFIG
    ===================================================== */

    const CONFIG = {
        heroCount: 5,
        latestCount: 12,
        popularCount: 6,
        categoryCount: 3,
        miniCategoryCount: 4,
        heroInterval: 7000,
        marketEndpoint: "/api/market"
    };


    /* =====================================================
       STATE
    ===================================================== */

    const state = {
        heroIndex: 0,
        heroTimer: null,
        heroPaused: false,
        searchQuery: "",
        menuOpen: false
    };


    /* =====================================================
       NEWS DATA
    ===================================================== */

    const news = Array.isArray(window.haberler)
        ? window.haberler
        : [];


    /* =====================================================
       DOM HELPERS
    ===================================================== */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);


    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    const byId = id =>
        document.getElementById(id);


    /* =====================================================
       SECURITY
    ===================================================== */

    function escapeHTML(value) {

        if (
            value === null ||
            value === undefined
        ) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       STRING HELPERS
    ===================================================== */

    function cleanText(value) {

        return String(value || "")
            .replace(/\s+/g, " ")
            .trim();
    }


    function normalize(value) {

        return cleanText(value)
            .toLocaleLowerCase("tr-TR");
    }


    /* =====================================================
       DATE
    ===================================================== */

    function getNewsDate(haber) {

        const date = cleanText(haber?.tarih);
        const time = cleanText(haber?.saat);

        if (date && time) {
            return `${date} • ${time}`;
        }

        return date || time || "";
    }


    function getTimestamp(haber) {

        const date = cleanText(haber?.tarih);
        const time = cleanText(haber?.saat);

        const timestamp =
            Date.parse(
                `${date} ${time}`
            );

        return Number.isNaN(timestamp)
            ? 0
            : timestamp;
    }


    function sortNews(list = news) {

        return [...list].sort(
            (a, b) =>
                getTimestamp(b) -
                getTimestamp(a)
        );

    }


    /* =====================================================
       SLUG / URL
    ===================================================== */

    function getSlug(haber) {

        if (
            typeof window.slugOlustur ===
            "function"
        ) {
            return window.slugOlustur(
                haber.baslik
            );
        }


        return cleanText(haber.baslik)
            .toLocaleLowerCase("tr-TR")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");

    }


    function getNewsUrl(haber) {

        return `/haber/${encodeURIComponent(
            getSlug(haber)
        )}`;

    }


    /* =====================================================
       IMAGE
    ===================================================== */

    function getImage(haber) {

        return cleanText(
            haber?.gorsel
        );

    }


    /* =====================================================
       BREAKING NEWS
    ===================================================== */

    function renderBreakingNews() {

        const element =
            byId("breakingNews");

        if (!element) {
            return;
        }


        const latest =
            sortNews()[0];


        if (!latest) {

            element.textContent =
                "Haberler hazırlanıyor...";

            return;
        }


        element.innerHTML = `
            <a
                href="${escapeHTML(
                    getNewsUrl(latest)
                )}"
            >
                ${escapeHTML(
                    latest.baslik
                )}
            </a>
        `;

    }


    /* =====================================================
       HERO
    ===================================================== */

    function renderHero() {

        const container =
            byId("heroMain");

        const numbers =
            byId("heroNumbers");


        if (!container) {
            return;
        }


        const items =
            sortNews().slice(
                0,
                CONFIG.heroCount
            );


        if (!items.length) {

            container.innerHTML = `
                <div class="hero-loading">
                    Henüz haber bulunamadı.
                </div>
            `;

            return;
        }


        container.innerHTML =
            items.map(
                (haber, index) => {

                    const image =
                        getImage(haber);

                    return `
                        <a
                            class="
                                hero-slide
                                ${index === 0
                                    ? "active"
                                    : ""}
                            "
                            href="${escapeHTML(
                                getNewsUrl(haber)
                            )}"
                            data-index="${index}"
                        >

                            <img
                                src="${escapeHTML(image)}"
                                alt="${escapeHTML(
                                    haber.baslik
                                )}"
                                ${index === 0
                                    ? 'fetchpriority="high"'
                                    : 'loading="lazy"'}
                            >

                            <div class="hero-info">

                                <span class="hero-category">
                                    ${escapeHTML(
                                        haber.kategori ||
                                        "Haber"
                                    )}
                                </span>

                                <h2 class="hero-title">
                                    ${escapeHTML(
                                        haber.baslik || ""
                                    )}
                                </h2>

                                <p class="hero-description">
                                    ${escapeHTML(
                                        haber.spot || ""
                                    )}
                                </p>

                                <div class="hero-meta">
                                    ${escapeHTML(
                                        getDate(haber)
                                    )}
                                </div>

                            </div>

                        </a>
                    `;

                }
            ).join("");


        if (numbers) {

            numbers.innerHTML =
                items.map(
                    (_, index) => `
                        <button
                            type="button"
                            class="
                                hero-number
                                ${index === 0
                                    ? "active"
                                    : ""}
                            "
                            data-hero="${index}"
                            aria-label="${
                                index + 1
                            }. manşet"
                        >
                            ${index + 1}
                        </button>
                    `
                ).join("");

        }


        state.heroIndex = 0;

        bindHeroControls();

        startHero();

        setupHeroHover();

    }


    function showHero(index) {

        const slides =
            $$(".hero-slide");

        const dots =
            $$(".hero-number");


        if (!slides.length) {
            return;
        }


        if (index < 0) {
            index =
                slides.length - 1;
        }


        if (index >= slides.length) {
            index = 0;
        }


        state.heroIndex = index;


        slides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        dots.forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

    }


    function nextHero() {

        showHero(
            state.heroIndex + 1
        );

    }


    function previousHero() {

        showHero(
            state.heroIndex - 1
        );

    }


    function startHero() {

        stopHero();


        if (state.heroPaused) {
            return;
        }


        state.heroTimer =
            setInterval(
                nextHero,
                CONFIG.heroInterval
            );

    }


    function stopHero() {

        if (state.heroTimer) {

            clearInterval(
                state.heroTimer
            );

            state.heroTimer = null;
        }

    }


    function bindHeroControls() {

        const next =
            byId("heroNext");

        const previous =
            byId("heroPrev");


        if (next) {

            next.onclick = () => {

                nextHero();

                startHero();

            };

        }


        if (previous) {

            previous.onclick = () => {

                previousHero();

                startHero();

            };

        }


        $$(".hero-number")
            .forEach(dot => {

                dot.onclick = () => {

                    showHero(
                        Number(
                            dot.dataset.hero
                        )
                    );

                    startHero();

                };

            });

    }


    function setupHeroHover() {

        const hero =
            $(".hero");

        if (!hero) {
            return;
        }


        hero.addEventListener(
            "mouseenter",
            () => {

                state.heroPaused = true;

                stopHero();

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                state.heroPaused = false;

                startHero();

            }
        );

    }


    /* =====================================================
       NEWS CARD
    ===================================================== */

    function createNewsCard(
        haber
    ) {

        return `
            <article
                class="news-card"
                data-category="${escapeHTML(
                    haber.kategori || ""
                )}"
            >

                <a
                    href="${escapeHTML(
                        getNewsUrl(haber)
                    )}"
                    aria-label="${escapeHTML(
                        haber.baslik
                    )}"
                >

                    <div class="news-card-image">

                        <img
                            src="${escapeHTML(
                                getImage(haber)
                            )}"
                            alt="${escapeHTML(
                                haber.baslik
                            )}"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                    <div class="news-card-body">

                        <span class="news-card-category">
                            ${escapeHTML(
                                haber.kategori ||
                                "Haber"
                            )}
                        </span>

                        <h2 class="news-card-title">
                            ${escapeHTML(
                                haber.baslik || ""
                            )}
                        </h2>

                        ${
                            haber.spot
                                ? `
                                    <p class="news-card-spot">
                                        ${escapeHTML(
                                            haber.spot
                                        )}
                                    </p>
                                `
                                : ""
                        }

                        <div class="news-card-meta">
                            ${escapeHTML(
                                getDate(haber)
                            )}
                        </div>

                    </div>

                </a>

            </article>
        `;

    }


    /* =====================================================
       LATEST NEWS
    ===================================================== */

    function renderLatestNews(
        items = sortNews()
    ) {

        const grid =
            byId("newsGrid");

        if (!grid) {
            return;
        }


        const latest =
            items.slice(
                0,
                CONFIG.latestCount
            );


        if (!latest.length) {

            grid.innerHTML = `
                <div class="empty-news">
                    Gösterilecek haber bulunamadı.
                </div>
            `;

            return;
        }


        grid.innerHTML =
            latest
                .map(createNewsCard)
                .join("");

    }


    /* =====================================================
       POPULAR NEWS
    ===================================================== */

    function renderPopularNews() {

        const element =
            byId("popularNews");

        if (!element) {
            return;
        }


        const items =
            sortNews().slice(
                0,
                CONFIG.popularCount
            );


        if (!items.length) {

            element.innerHTML = `
                <div class="empty-news">
                    Henüz haber yok.
                </div>
            `;

            return;
        }


        element.innerHTML =
            items.map(
                (haber, index) => `
                    <a
                        href="${escapeHTML(
                            getNewsUrl(haber)
                        )}"
                        class="popular-item"
                    >

                        <span class="popular-number">
                            ${String(
                                index + 1
                            ).padStart(2, "0")}
                        </span>

                        <div class="popular-image">

                            <img
                                src="${escapeHTML(
                                    getImage(haber)
                                )}"
                                alt=""
                                loading="lazy"
                                decoding="async"
                            >

                        </div>

                        <h3 class="popular-title">
                            ${escapeHTML(
                                haber.baslik
                            )}
                        </h3>

                    </a>
                `
            ).join("");

    }


    /* =====================================================
       CATEGORY CARD
    ===================================================== */

    function createCategoryCard(
        haber
    ) {

        return `
            <article class="category-card">

                <a
                    href="${escapeHTML(
                        getNewsUrl(haber)
                    )}"
                    class="category-card-image"
                >

                    <img
                        src="${escapeHTML(
                            getImage(haber)
                        )}"
                        alt="${escapeHTML(
                            haber.baslik
                        )}"
                        loading="lazy"
                        decoding="async"
                    >

                </a>

                <div class="category-card-body">

                    <span class="category-card-category">
                        ${escapeHTML(
                            haber.kategori ||
                            "Haber"
                        )}
                    </span>

                    <a
                        href="${escapeHTML(
                            getNewsUrl(haber)
                        )}"
                    >

                        <h3 class="category-card-title">
                            ${escapeHTML(
                                haber.baslik
                            )}
                        </h3>

                    </a>

                </div>

            </article>
        `;

    }


    /* =====================================================
       CATEGORY
    ===================================================== */

    function getCategoryNews(
        category
    ) {

        return sortNews(
            news.filter(
                haber =>
                    normalize(
                        haber.kategori
                    ) ===
                    normalize(category)
            )
        );

    }


    function renderCategory(
        category,
        elementId
    ) {

        const element =
            byId(elementId);

        if (!element) {
            return;
        }


        const items =
            getCategoryNews(
                category
            ).slice(
                0,
                CONFIG.categoryCount
            );


        if (!items.length) {

            element.innerHTML = `
                <div class="empty-news">
                    Bu kategoride henüz haber bulunmuyor.
                </div>
            `;

            return;
        }


        element.innerHTML =
            items
                .map(createCategoryCard)
                .join("");

    }


    /* =====================================================
       MINI CARD
    ===================================================== */

    function createMiniCard(
        haber
    ) {

        return `
            <article class="mini-card">

                <a
                    href="${escapeHTML(
                        getNewsUrl(haber)
                    )}"
                    class="mini-card-image"
                >

                    <img
                        src="${escapeHTML(
                            getImage(haber)
                        )}"
                        alt="${escapeHTML(
                            haber.baslik
                        )}"
                        loading="lazy"
                        decoding="async"
                    >

                </a>

                <div>

                    <span class="mini-card-category">
                        ${escapeHTML(
                            haber.kategori ||
                            ""
                        )}
                    </span>

                    <a
                        href="${escapeHTML(
                            getNewsUrl(haber)
                        )}"
                    >

                        <h3 class="mini-card-title">
                            ${escapeHTML(
                                haber.baslik
                            )}
                        </h3>

                    </a>

                </div>

            </article>
        `;

    }


    function renderMiniCategory(
        category,
        elementId
    ) {

        const element =
            byId(elementId);

        if (!element) {
            return;
        }


        const items =
            getCategoryNews(
                category
            ).slice(
                0,
                CONFIG.miniCategoryCount
            );


        if (!items.length) {

            element.innerHTML = `
                <div class="empty-news">
                    Haber bulunamadı.
                </div>
            `;

            return;
        }


        element.innerHTML =
            items
                .map(createMiniCard)
                .join("");

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    function setupSearch() {

        const button =
            byId("searchBtn");

        const box =
            byId("searchBox");

        const input =
            byId("searchInput");


        if (!button || !box || !input) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                const active =
                    box.classList.toggle(
                        "active"
                    );


                if (active) {

                    setTimeout(
                        () => input.focus(),
                        50
                    );

                } else {

                    clearSearch();

                }

            }
        );


        input.addEventListener(
            "input",
            () => {

                state.searchQuery =
                    normalize(
                        input.value
                    );

                performSearch();

            }
        );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    input.value = "";

                    clearSearch();

                    box.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    function performSearch() {

        const grid =
            byId("newsGrid");

        const info =
            byId("searchResultInfo");


        if (!grid) {
            return;
        }


        const query =
            state.searchQuery;


        if (!query) {

            if (info) {

                info.classList.remove(
                    "active"
                );

                info.textContent = "";

            }

            renderLatestNews();

            return;
        }


        const results =
            news.filter(
                haber => {

                    const searchable =
                        [
                            haber.baslik,
                            haber.spot,
                            haber.kategori,
                            haber.yazar,
                            haber.kaynak,
                            haber.icerik
                        ]
                        .map(cleanText)
                        .join(" ")
                        .toLocaleLowerCase(
                            "tr-TR"
                        );

                    return searchable.includes(
                        query
                    );

                }
            );


        if (info) {

            info.classList.add(
                "active"
            );

            info.textContent =
                `"${state.searchQuery}" için ${results.length} haber bulundu.`;

        }


        grid.innerHTML =
            results.length
                ? results
                    .slice(
                        0,
                        CONFIG.latestCount
                    )
                    .map(createNewsCard)
                    .join("")
                : `
                    <div class="empty-news">
                        <strong>Haber bulunamadı.</strong>
                        <br>
                        Farklı bir kelime deneyin.
                    </div>
                `;

    }


    function clearSearch() {

        state.searchQuery = "";

        const input =
            byId("searchInput");

        const info =
            byId("searchResultInfo");


        if (input) {
            input.value = "";
        }


        if (info) {

            info.classList.remove(
                "active"
            );

            info.textContent = "";

        }


        renderLatestNews();

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function setupMobileMenu() {

        const button =
            byId("menuBtn");

        const menu =
            byId("mobileNav");


        if (!button || !menu) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                state.menuOpen =
                    !state.menuOpen;


                menu.classList.toggle(
                    "active",
                    state.menuOpen
                );


                button.setAttribute(
                    "aria-expanded",
                    String(
                        state.menuOpen
                    )
                );

            }
        );


        $$("#mobileNav a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        state.menuOpen = false;

                        menu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       COOKIE
    ===================================================== */

    function setupCookie() {

        const box =
            byId("cookieBox");

        const button =
            byId("cookieAccept");


        if (!box || !button) {
            return;
        }


        let accepted = false;


        try {

            accepted =
                localStorage.getItem(
                    "haberista_cookie"
                ) === "1";

        } catch (_) {}


        if (accepted) {

            box.style.display = "none";

            return;
        }


        button.addEventListener(
            "click",
            () => {

                try {

                    localStorage.setItem(
                        "haberista_cookie",
                        "1"
                    );

                } catch (_) {}


                box.style.opacity = "0";

                box.style.transform =
                    "translateY(15px)";

                box.style.transition =
                    "opacity .25s ease, transform .25s ease";


                setTimeout(
                    () => {

                        box.style.display =
                            "none";

                    },
                    250
                );

            }
        );

    }


    /* =====================================================
       MARKET
    ===================================================== */

    async function loadMarket() {

        const element =
            byId("marketItems");

        if (!element) {
            return;
        }


        try {

            const response =
                await fetch(
                    CONFIG.marketEndpoint,
                    {
                        cache: "no-store"
                    }
                );


            if (!response.ok) {
                throw new Error(
                    "Market request failed"
                );
            }


            const data =
                await response.json();


            const items = [];


            if (
                data.usd !== undefined &&
                data.usd !== null
            ) {

                items.push(
                    `USD ${data.usd}`
                );

            }


            if (
                data.eur !== undefined &&
                data.eur !== null
            ) {

                items.push(
                    `EUR ${data.eur}`
                );

            }


            if (
                data.gold !== undefined &&
                data.gold !== null
            ) {

                items.push(
                    `ALTIN ${data.gold}`
                );

            }


            if (
                data.bist !== undefined &&
                data.bist !== null
            ) {

                items.push(
                    `BIST ${data.bist}`
                );

            }


            element.textContent =
                items.length
                    ? items.join("   •   ")
                    : "Piyasa verisi hazır değil.";


            const updated =
                byId("marketUpdated");


            if (updated) {

                updated.textContent =
                    "Güncel";

            }

        } catch (error) {

            element.textContent =
                "Piyasa verileri şu anda alınamıyor.";

        }

    }


    /* =====================================================
       NOTIFICATION
    ===================================================== */

    function setupNotification() {

        const button =
            byId("notificationBtn");


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                if (
                    window.OneSignal &&
                    typeof window.OneSignal
                        .showSlidedownPrompt ===
                        "function"
                ) {

                    window.OneSignal
                        .showSlidedownPrompt();

                    return;
                }


                if (
                    "Notification" in
                    window
                ) {

                    Notification.requestPermission()
                        .catch(() => {});

                }

            }
        );

    }


    /* =====================================================
       KEYBOARD HERO
    ===================================================== */

    function setupKeyboardNavigation() {

        document.addEventListener(
            "keydown",
            event => {

                const tag =
                    document.activeElement?.tagName;


                if (
                    tag === "INPUT" ||
                    tag === "TEXTAREA"
                ) {
                    return;
                }


                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    nextHero();

                    startHero();

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previousHero();

                    startHero();

                }

            }
        );

    }


    /* =====================================================
       VISIBILITY
    ===================================================== */

    function setupVisibility() {

        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.hidden
                ) {

                    stopHero();

                } else if (
                    !state.heroPaused
                ) {

                    startHero();

                }

            }
        );

    }


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    function setupImageFallback() {

        document.addEventListener(
            "error",
            event => {

                const image =
                    event.target;


                if (
                    image &&
                    image.tagName ===
                    "IMG"
                ) {

                    image.style.objectFit =
                        "cover";

                    image.style.background =
                        "#e5e7eb";

                }

            },
            true
        );

    }


    /* =====================================================
       PAGE INIT
    ===================================================== */

    function init() {

        renderBreakingNews();

        renderHero();

        renderLatestNews();

        renderPopularNews();


        renderCategory(
            "Gündem",
            "gundemGrid"
        );


        renderCategory(
            "Ekonomi",
            "ekonomiGrid"
        );


        renderCategory(
            "Spor",
            "sporGrid"
        );


        renderCategory(
            "Magazin",
            "magazinGrid"
        );


        renderMiniCategory(
            "Dünya",
            "dunyaGrid"
        );


        renderMiniCategory(
            "Teknoloji",
            "teknolojiGrid"
        );


        setupSearch();

        setupMobileMenu();

        setupCookie();

        setupNotification();

        setupKeyboardNavigation();

        setupVisibility();

        setupImageFallback();

        loadMarket();

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init,
            {
                once: true
            }
        );

    } else {

        init();

    }

})();
