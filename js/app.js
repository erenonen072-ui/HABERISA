"use strict";

(function () {

    const DEFAULT_IMAGE =
        "/images/default-news.jpg";


    /* =====================================================
       HABERLER
    ===================================================== */

    function getNews() {

        if (
            Array.isArray(window.haberler)
        ) {
            return window.haberler;
        }

        return [];
    }


    /* =====================================================
       URL
    ===================================================== */

    function getNewsUrl(haber) {

        if (!haber) {
            return "#";
        }

        if (!haber.slug) {

            haber.slug =
                window.slugOlustur
                    ? window.slugOlustur(
                        haber.baslik
                    )
                    : String(
                        haber.baslik
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
                        );
        }

        return "/haber/" +
            haber.slug;
    }


    /* =====================================================
       HTML ESCAPE
    ===================================================== */

    function escapeHtml(value) {

        return String(value || "")
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


    /* =====================================================
       HABER KARTI
    ===================================================== */

    function createNewsCard(haber) {

        const url =
            getNewsUrl(haber);

        const image =
            haber.image ||
            DEFAULT_IMAGE;

        return `
            <article class="news-card">

                <a
                    href="${url}"
                    class="news-card-link"
                >

                    <div class="news-card-image">

                        <img
                            src="${image}"
                            alt="${escapeHtml(
                                haber.baslik
                            )}"
                            loading="lazy"
                            onerror="
                                this.onerror=null;
                                this.src='/images/default-news.jpg';
                            "
                        >

                    </div>

                    <div class="news-card-content">

                        <span class="news-category">
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

                        <p>
                            ${escapeHtml(
                                haber.spot ||
                                ""
                            )}
                        </p>

                        <div class="news-card-bottom">

                            <span>
                                ${escapeHtml(
                                    haber.date ||
                                    ""
                                )}
                            </span>

                            <strong>
                                Haberi Oku →
                            </strong>

                        </div>

                    </div>

                </a>

            </article>
        `;
    }


    /* =====================================================
       KATEGORİ KARTI
    ===================================================== */

    function createCategoryCard(haber) {

        const url =
            getNewsUrl(haber);

        const image =
            haber.image ||
            DEFAULT_IMAGE;

        return `
            <article class="category-card">

                <a
                    href="${url}"
                    class="category-card-link"
                >

                    <div class="category-card-image">

                        <img
                            src="${image}"
                            alt="${escapeHtml(
                                haber.baslik
                            )}"
                            loading="lazy"
                            onerror="
                                this.onerror=null;
                                this.src='/images/default-news.jpg';
                            "
                        >

                    </div>

                    <div class="category-card-content">

                        <span class="category-card-tag">
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

                        <div class="category-card-meta">
                            ${escapeHtml(
                                haber.date ||
                                ""
                            )}
                        </div>

                    </div>

                </a>

            </article>
        `;
    }


    /* =====================================================
       HERO
    ===================================================== */

    let heroIndex = 0;

    let heroTimer = null;


    function renderHero() {

        const news =
            getNews();

        const hero =
            document.getElementById(
                "heroMain"
            );

        const numbers =
            document.getElementById(
                "heroNumbers"
            );


        if (
            !hero ||
            !news.length
        ) {
            return;
        }


        if (
            heroIndex >= news.length
        ) {
            heroIndex = 0;
        }


        const haber =
            news[heroIndex];

        const url =
            getNewsUrl(haber);

        const image =
            haber.image ||
            DEFAULT_IMAGE;


        hero.innerHTML = `

            <a
                href="${url}"
                class="hero-link"
            >

                <img
                    class="hero-image"
                    src="${image}"
                    alt="${escapeHtml(
                        haber.baslik
                    )}"
                    onerror="
                        this.onerror=null;
                        this.src='/images/default-news.jpg';
                    "
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHtml(
                            haber.kategori ||
                            "Haber"
                        )}
                    </span>

                    <h1>
                        ${escapeHtml(
                            haber.baslik
                        )}
                    </h1>

                    <p>
                        ${escapeHtml(
                            haber.spot ||
                            ""
                        )}
                    </p>

                    <div class="hero-meta">

                        ${escapeHtml(
                            haber.date ||
                            ""
                        )}

                        ${haber.time
                            ? " • " +
                              escapeHtml(
                                  haber.time
                              )
                            : ""
                        }

                    </div>

                </div>

            </a>
        `;


        if (numbers) {

            numbers.innerHTML =
                news.map(
                    function (_, index) {

                        return `
                            <button
                                type="button"
                                class="
                                    hero-number
                                    ${
                                        index ===
                                        heroIndex
                                            ? "active"
                                            : ""
                                    }
                                "
                                data-hero="${index}"
                            >
                                ${index + 1}
                            </button>
                        `;

                    }
                ).join("");


            numbers
                .querySelectorAll(
                    ".hero-number"
                )
                .forEach(
                    function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                heroIndex =
                                    Number(
                                        button
                                            .dataset
                                            .hero
                                    );

                                renderHero();
                                restartHeroTimer();

                            }
                        );

                    }
                );
        }
    }


    function nextHero() {

        const news =
            getNews();

        if (!news.length) {
            return;
        }

        heroIndex =
            (
                heroIndex + 1
            ) % news.length;

        renderHero();
    }


    function previousHero() {

        const news =
            getNews();

        if (!news.length) {
            return;
        }

        heroIndex =
            (
                heroIndex -
                1 +
                news.length
            ) % news.length;

        renderHero();
    }


    function restartHeroTimer() {

        clearInterval(
            heroTimer
        );

        heroTimer =
            setInterval(
                nextHero,
                6000
            );
    }


    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function renderBreaking() {

        const container =
            document.getElementById(
                "breakingNews"
            );

        const news =
            getNews();

        if (
            !container ||
            !news.length
        ) {
            return;
        }


        const latest =
            news.slice(0, 5);


        container.innerHTML =
            latest.map(
                function (haber) {

                    return `
                        <a
                            href="${getNewsUrl(
                                haber
                            )}"
                        >
                            ${escapeHtml(
                                haber.baslik
                            )}
                        </a>
                    `;

                }
            ).join("");
    }


    /* =====================================================
       POPÜLER
    ===================================================== */

    function renderPopular() {

        const container =
            document.getElementById(
                "popularNews"
            );

        const news =
            getNews();

        if (!container) {
            return;
        }


        const popular =
            [...news]
                .sort(
                    function (a, b) {

                        return (
                            Number(
                                b.views || 0
                            ) -
                            Number(
                                a.views || 0
                            )
                        );

                    }
                )
                .slice(0, 5);


        container.innerHTML =
            popular.map(
                function (haber, index) {

                    return `
                        <a
                            href="${getNewsUrl(
                                haber
                            )}"
                            class="popular-item"
                        >

                            <span class="popular-number">
                                ${index + 1}
                            </span>

                            <span class="popular-content">

                                <strong>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </strong>

                                <small>
                                    ${Number(
                                        haber.views || 0
                                    ).toLocaleString(
                                        "tr-TR"
                                    )} okunma
                                </small>

                            </span>

                        </a>
                    `;

                }
            ).join("");
    }


    /* =====================================================
       SIDEBAR BAŞLIKLARI
    ===================================================== */

    function renderSidebarHeadlines() {

        const container =
            document.getElementById(
                "sidebarHeadlines"
            );

        const news =
            getNews();

        if (!container) {
            return;
        }


        container.innerHTML =
            news
                .slice(0, 5)
                .map(
                    function (haber) {

                        return `
                            <a
                                href="${getNewsUrl(
                                    haber
                                )}"
                            >

                                <span class="headline-dot"></span>

                                <span>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </span>

                            </a>
                        `;

                    }
                )
                .join("");
    }


    /* =====================================================
       ANA HABERLER
    ===================================================== */

    function renderMainNews() {

        const container =
            document.getElementById(
                "newsGrid"
            );

        const news =
            getNews();

        if (!container) {
            return;
        }


        container.innerHTML =
            news
                .map(
                    createNewsCard
                )
                .join("");
    }


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


        const news =
            getNews()
                .filter(
                    function (haber) {

                        return (
                            haber.kategori ===
                            category
                        );

                    }
                );


        container.innerHTML =
            news.length
                ? news
                    .map(
                        createCategoryCard
                    )
                    .join("")
                : `
                    <div class="category-empty">
                        Bu kategoride henüz haber bulunmuyor.
                    </div>
                `;
    }


    /* =====================================================
       ARAMA
    ===================================================== */

    function setupSearch() {

        const input =
            document.getElementById(
                "searchInput"
            );

        const button =
            document.getElementById(
                "searchBtn"
            );

        const resultInfo =
            document.getElementById(
                "searchResultInfo"
            );

        const newsGrid =
            document.getElementById(
                "newsGrid"
            );


        function search() {

            if (!input) {
                return;
            }


            const query =
                input.value
                    .trim()
                    .toLocaleLowerCase(
                        "tr-TR"
                    );


            if (!query) {

                if (resultInfo) {
                    resultInfo.textContent =
                        "";
                }

                renderMainNews();

                return;
            }


            const results =
                getNews().filter(
                    function (haber) {

                        return (
                            String(
                                haber.baslik
                            )
                                .toLocaleLowerCase(
                                    "tr-TR"
                                )
                                .includes(query) ||

                            String(
                                haber.spot || ""
                            )
                                .toLocaleLowerCase(
                                    "tr-TR"
                                )
                                .includes(query) ||

                            String(
                                haber.kategori || ""
                            )
                                .toLocaleLowerCase(
                                    "tr-TR"
                                )
                                .includes(query)
                        );

                    }
                );


            if (resultInfo) {

                resultInfo.textContent =
                    results.length +
                    " haber bulundu.";
            }


            if (newsGrid) {

                newsGrid.innerHTML =
                    results.length
                        ? results
                            .map(
                                createNewsCard
                            )
                            .join("")
                        : `
                            <div class="no-news">
                                Aramanızla eşleşen haber bulunamadı.
                            </div>
                        `;
            }

        }


        if (button) {

            button.addEventListener(
                "click",
                search
            );
        }


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {
                        search();
                    }

                }
            );
        }


        const params =
            new URLSearchParams(
                window.location.search
            );

        const q =
            params.get("q");


        if (
            q &&
            input
        ) {

            input.value = q;

            search();
        }
    }


    /* =====================================================
       MENÜ
    ===================================================== */

    function setupMenu() {

        const button =
            document.getElementById(
                "menuBtn"
            );

        const nav =
            document.querySelector(
                ".category-nav"
            );


        if (
            !button ||
            !nav
        ) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "mobile-open"
                );

            }
        );
    }


    /* =====================================================
       HERO BUTONLARI
    ===================================================== */

    function setupHeroButtons() {

        const prev =
            document.getElementById(
                "heroPrev"
            );

        const next =
            document.getElementById(
                "heroNext"
            );


        if (prev) {

            prev.addEventListener(
                "click",
                function () {

                    previousHero();
                    restartHeroTimer();

                }
            );
        }


        if (next) {

            next.addEventListener(
                "click",
                function () {

                    nextHero();
                    restartHeroTimer();

                }
            );
        }
    }


    /* =====================================================
       ÇEREZ
    ===================================================== */

    function setupCookie() {

        const box =
            document.getElementById(
                "cookieBox"
            );

        const accept =
            document.getElementById(
                "cookieAccept"
            );


        if (
            !box ||
            !accept
        ) {
            return;
        }


        if (
            localStorage.getItem(
                "haberista_cookie_accepted"
            ) === "1"
        ) {

            box.classList.add(
                "hidden"
            );
        }


        accept.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "haberista_cookie_accepted",
                    "1"
                );

                box.classList.add(
                    "hidden"
                );

            }
        );
    }


    /* =====================================================
       BAŞLAT
    ===================================================== */

    function init() {

        console.log(
            "Haberİsta başlatılıyor..."
        );


        const news =
            getNews();


        console.log(
            "Haberİsta:",
            news.length,
            "haber yüklendi."
        );


        renderHero();

        renderBreaking();

        renderPopular();

        renderSidebarHeadlines();

        renderMainNews();

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
            "Teknoloji",
            "teknolojiNews"
        );

        setupSearch();

        setupMenu();

        setupHeroButtons();

        setupCookie();

        restartHeroTimer();


        console.log(
            "Haberİsta hazır."
        );
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
