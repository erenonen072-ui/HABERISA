// ============================================================
// HABERİSTA - ANA SAYFA JAVASCRIPT
// index.html ile tam uyumlu sürüm
// ============================================================

(function () {
    "use strict";

    // ============================================================
    // AYARLAR
    // ============================================================

    const DEFAULT_IMAGE = "images/default-news.jpg";

    const HERO_COUNT = 5;
    const POPULAR_COUNT = 5;
    const SIDEBAR_COUNT = 7;
    const CATEGORY_COUNT = 4;
    const HERO_INTERVAL = 6000;

    let heroIndex = 0;
    let heroTimer = null;


    // ============================================================
    // GÜVENLİ HTML
    // ============================================================

    function escapeHtml(value) {
        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ============================================================
    // HABERLERİ AL
    // ============================================================

    function getNews() {
        if (
            window.haberler &&
            Array.isArray(window.haberler)
        ) {
            return window.haberler;
        }

        console.error(
            "Haberİsta: window.haberler bulunamadı."
        );

        return [];
    }


    // ============================================================
    // HABER URL
    // ============================================================

    function getNewsUrl(haber) {
        if (!haber) {
            return "#";
        }

        if (haber.url) {
            return haber.url;
        }

        if (haber.slug) {
            return "/haber/" + haber.slug;
        }

        if (haber.id !== undefined) {
            return "haber.html?id=" +
                encodeURIComponent(haber.id);
        }

        return "#";
    }


    // ============================================================
    // GÖRÜNTÜLENME
    // ============================================================

    function formatViews(number) {
        return Number(number || 0)
            .toLocaleString("tr-TR");
    }


    // ============================================================
    // TÜRKÇE METİN NORMALİZE
    // ============================================================

    function normalizeText(text) {
        return String(text || "")
            .toLocaleLowerCase("tr-TR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }


    // ============================================================
    // HABER KARTI
    // ============================================================

    function createNewsCard(haber) {

        const url = getNewsUrl(haber);

        const image =
            haber.resim ||
            DEFAULT_IMAGE;

        return `
            <article class="news-card">

                <a
                    class="news-card-image"
                    href="${escapeHtml(url)}"
                >

                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                    >

                    <span class="news-category">
                        ${escapeHtml(
                            haber.kategori || "Haber"
                        )}
                    </span>

                </a>


                <div class="news-card-content">

                    <div class="news-card-meta">

                        <span>
                            ${escapeHtml(
                                haber.tarih || ""
                            )}
                        </span>

                        ${
                            haber.saat
                                ? `
                                    <span>•</span>

                                    <span>
                                        ${escapeHtml(
                                            haber.saat
                                        )}
                                    </span>
                                `
                                : ""
                        }

                    </div>


                    <h3>

                        <a href="${escapeHtml(url)}">

                            ${escapeHtml(
                                haber.baslik
                            )}

                        </a>

                    </h3>


                    <p>

                        ${escapeHtml(
                            haber.spot || ""
                        )}

                    </p>


                    <div class="news-card-bottom">

                        <span>
                            👁 ${formatViews(
                                haber.okunma
                            )}
                        </span>

                        <a
                            class="read-more"
                            href="${escapeHtml(url)}"
                        >
                            Devamını Oku →
                        </a>

                    </div>

                </div>

            </article>
        `;
    }


    // ============================================================
    // KATEGORİ KARTI
    // ============================================================

    function createCategoryCard(haber) {

        const url = getNewsUrl(haber);

        const image =
            haber.resim ||
            DEFAULT_IMAGE;

        return `
            <article class="category-card">

                <a
                    class="category-card-image"
                    href="${escapeHtml(url)}"
                >

                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                    >

                </a>


                <div class="category-card-content">

                    <span class="category-card-tag">
                        ${escapeHtml(
                            haber.kategori || "Haber"
                        )}
                    </span>


                    <h3>

                        <a href="${escapeHtml(url)}">

                            ${escapeHtml(
                                haber.baslik
                            )}

                        </a>

                    </h3>


                    <div class="category-card-meta">

                        ${escapeHtml(
                            haber.tarih || ""
                        )}

                    </div>

                </div>

            </article>
        `;
    }


    // ============================================================
    // MANŞET
    // ============================================================

    function getHeroNews() {

        return getNews()
            .filter(function (haber) {

                return (
                    haber &&
                    haber.baslik
                );

            })
            .slice(0, HERO_COUNT);
    }


    function renderHero() {

        const heroMain =
            document.getElementById(
                "heroMain"
            );

        const heroNumbers =
            document.getElementById(
                "heroNumbers"
            );

        if (!heroMain) {
            return;
        }

        const news = getHeroNews();


        if (!news.length) {

            heroMain.innerHTML = `
                <div class="hero-empty">
                    Haber bulunamadı.
                </div>
            `;

            if (heroNumbers) {
                heroNumbers.innerHTML = "";
            }

            return;
        }


        if (heroIndex >= news.length) {
            heroIndex = 0;
        }


        if (heroIndex < 0) {
            heroIndex =
                news.length - 1;
        }


        const haber =
            news[heroIndex];

        const url =
            getNewsUrl(haber);

        const image =
            haber.resim ||
            DEFAULT_IMAGE;


        heroMain.innerHTML = `

            <a
                class="hero-link"
                href="${escapeHtml(url)}"
            >

                <img
                    class="hero-image"
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(haber.baslik)}"
                    onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                >

                <div class="hero-overlay"></div>


                <div class="hero-content">

                    <span class="hero-category">

                        ${escapeHtml(
                            haber.kategori || "Haber"
                        )}

                    </span>


                    <h1>

                        ${escapeHtml(
                            haber.baslik
                        )}

                    </h1>


                    <p>

                        ${escapeHtml(
                            haber.spot || ""
                        )}

                    </p>


                    <div class="hero-meta">

                        ${escapeHtml(
                            haber.tarih || ""
                        )}

                        ${
                            haber.saat
                                ? `
                                    • ${escapeHtml(
                                        haber.saat
                                    )}
                                `
                                : ""
                        }

                    </div>

                </div>

            </a>
        `;


        if (!heroNumbers) {
            return;
        }


        heroNumbers.innerHTML =
            news.map(function (haberItem, index) {

                return `
                    <button
                        type="button"
                        class="hero-number ${
                            index === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-hero="${index}"
                        aria-label="${
                            index + 1
                        }. haber"
                    >
                        ${index + 1}
                    </button>
                `;

            }).join("");


        heroNumbers
            .querySelectorAll(".hero-number")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        heroIndex =
                            Number(
                                this.dataset.hero
                            );

                        renderHero();

                        restartHeroTimer();

                    }
                );

            });
    }


    function nextHero() {

        const news =
            getHeroNews();

        if (!news.length) {
            return;
        }

        heroIndex++;

        if (heroIndex >= news.length) {
            heroIndex = 0;
        }

        renderHero();
    }


    function previousHero() {

        const news =
            getHeroNews();

        if (!news.length) {
            return;
        }

        heroIndex--;

        if (heroIndex < 0) {
            heroIndex =
                news.length - 1;
        }

        renderHero();
    }


    function restartHeroTimer() {

        if (heroTimer) {
            clearInterval(heroTimer);
        }

        heroTimer =
            setInterval(
                nextHero,
                HERO_INTERVAL
            );
    }


    // ============================================================
    // SON DAKİKA
    // ============================================================

    function renderBreakingNews() {

        const container =
            document.getElementById(
                "breakingNews"
            );

        if (!container) {
            return;
        }

        const news =
            getNews();

        let breaking =
            news.filter(function (haber) {

                return normalizeText(
                    haber.kategori
                ) === "son dakika";

            });


        if (!breaking.length) {
            breaking =
                news.slice(0, 5);
        }


        container.innerHTML =
            breaking
                .slice(0, 5)
                .map(function (haber) {

                    return `
                        <a
                            href="${escapeHtml(
                                getNewsUrl(haber)
                            )}"
                        >
                            ${escapeHtml(
                                haber.baslik
                            )}
                        </a>
                    `;

                })
                .join("");
    }


    // ============================================================
    // ÇOK OKUNANLAR
    // ============================================================

    function renderPopularNews() {

        const container =
            document.getElementById(
                "popularNews"
            );

        if (!container) {
            return;
        }


        const popular =
            [...getNews()]
                .sort(function (a, b) {

                    return (
                        Number(
                            b.okunma || 0
                        ) -
                        Number(
                            a.okunma || 0
                        )
                    );

                })
                .slice(
                    0,
                    POPULAR_COUNT
                );


        if (!popular.length) {

            container.innerHTML = `
                <div class="category-empty">
                    Henüz haber bulunmuyor.
                </div>
            `;

            return;
        }


        container.innerHTML =
            popular
                .map(function (haber, index) {

                    return `

                        <a
                            class="popular-item"
                            href="${escapeHtml(
                                getNewsUrl(haber)
                            )}"
                        >

                            <span class="popular-number">
                                ${index + 1}
                            </span>


                            <div class="popular-content">

                                <strong>

                                    ${escapeHtml(
                                        haber.baslik
                                    )}

                                </strong>


                                <small>

                                    👁 ${formatViews(
                                        haber.okunma
                                    )}

                                </small>

                            </div>

                        </a>

                    `;

                })
                .join("");
    }


    // ============================================================
    // GÜNÜN BAŞLIKLARI
    // ============================================================

    function renderSidebarHeadlines() {

        const container =
            document.getElementById(
                "sidebarHeadlines"
            );

        if (!container) {
            return;
        }


        const news =
            getNews()
                .slice(
                    0,
                    SIDEBAR_COUNT
                );


        if (!news.length) {

            container.innerHTML = `
                <div class="category-empty">
                    Haber bulunmuyor.
                </div>
            `;

            return;
        }


        container.innerHTML =
            news
                .map(function (haber) {

                    return `

                        <a
                            href="${escapeHtml(
                                getNewsUrl(haber)
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

                })
                .join("");
    }


    // ============================================================
    // ANA HABERLER
    // ============================================================

    function renderMainNews(news) {

        const container =
            document.getElementById(
                "newsGrid"
            );

        if (!container) {
            return;
        }


        const items =
            Array.isArray(news)
                ? news
                : getNews();


        if (!items.length) {

            container.innerHTML = `
                <div class="no-news">

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Gösterilecek haber bulunmuyor.
                    </p>

                </div>
            `;

            return;
        }


        container.innerHTML =
            items
                .map(createNewsCard)
                .join("");
    }


    // ============================================================
    // KATEGORİLER
    // ============================================================

    function renderCategorySections() {

        const news =
            getNews();


        const categories = {

            gundemNews:
                "Gündem",

            ekonomiNews:
                "Ekonomi",

            sporNews:
                "Spor",

            teknolojiNews:
                "Teknoloji"

        };


        Object.entries(categories)
            .forEach(function ([id, category]) {

                const container =
                    document.getElementById(id);

                if (!container) {
                    return;
                }


                const categoryNews =
                    news
                        .filter(function (haber) {

                            return (
                                normalizeText(
                                    haber.kategori
                                ) ===
                                normalizeText(
                                    category
                                )
                            );

                        })
                        .slice(
                            0,
                            CATEGORY_COUNT
                        );


                if (!categoryNews.length) {

                    container.innerHTML = `
                        <div class="category-empty">
                            Bu kategoride henüz haber yok.
                        </div>
                    `;

                    return;
                }


                container.innerHTML =
                    categoryNews
                        .map(
                            createCategoryCard
                        )
                        .join("");

            });
    }


    // ============================================================
    // ARAMA
    // ============================================================

    function searchNews() {

        const input =
            document.getElementById(
                "searchInput"
            );

        const resultInfo =
            document.getElementById(
                "searchResultInfo"
            );

        const title =
            document.getElementById(
                "sectionTitle"
            );


        if (!input) {
            return;
        }


        const originalQuery =
            input.value.trim();


        const query =
            normalizeText(
                originalQuery
            );


        if (!query) {

            if (resultInfo) {
                resultInfo.innerHTML = "";
            }

            if (title) {
                title.textContent =
                    "Son Haberler";
            }

            renderMainNews(
                getNews()
            );

            return;
        }


        const results =
            getNews()
                .filter(function (haber) {

                    const text =
                        normalizeText(
                            [
                                haber.baslik,
                                haber.spot,
                                haber.icerik,
                                haber.kategori,
                                haber.kaynak
                            ].join(" ")
                        );

                    return text.includes(
                        query
                    );

                });


        if (resultInfo) {

            resultInfo.innerHTML = `

                <strong>
                    "${escapeHtml(
                        originalQuery
                    )}"
                </strong>

                için ${results.length}
                haber bulundu.

            `;

        }


        if (title) {

            title.textContent =
                "Arama Sonuçları";

        }


        renderMainNews(
            results
        );


        const grid =
            document.getElementById(
                "newsGrid"
            );


        if (grid) {

            setTimeout(
                function () {

                    const top =
                        grid.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        100;

                    window.scrollTo({

                        top:
                            Math.max(
                                0,
                                top
                            ),

                        behavior:
                            "smooth"

                    });

                },
                50
            );

        }
    }


    // ============================================================
    // MENÜ
    // ============================================================

    function setupMenu() {

        const menuButton =
            document.getElementById(
                "menuBtn"
            );

        const nav =
            document.querySelector(
                ".category-nav"
            );


        if (!menuButton || !nav) {
            return;
        }


        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "mobile-open"
                );

                menuButton.classList.toggle(
                    "active"
                );

            }
        );


        nav.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove(
                            "mobile-open"
                        );

                        menuButton.classList.remove(
                            "active"
                        );

                    }
                );

            });
    }


    // ============================================================
    // ARAMA
    // ============================================================

    function setupSearch() {

        const input =
            document.getElementById(
                "searchInput"
            );

        const button =
            document.getElementById(
                "searchBtn"
            );


        if (button) {

            button.addEventListener(
                "click",
                searchNews
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

                        event.preventDefault();

                        searchNews();

                    }

                }
            );

        }
    }


    // ============================================================
    // MANŞET BUTONLARI
    // ============================================================

    function setupHeroButtons() {

        const next =
            document.getElementById(
                "heroNext"
            );

        const previous =
            document.getElementById(
                "heroPrev"
            );


        if (next) {

            next.addEventListener(
                "click",
                function () {

                    nextHero();

                    restartHeroTimer();

                }
            );

        }


        if (previous) {

            previous.addEventListener(
                "click",
                function () {

                    previousHero();

                    restartHeroTimer();

                }
            );

        }
    }


    // ============================================================
    // ÇEREZ
    // ============================================================

    function setupCookie() {

        const box =
            document.getElementById(
                "cookieBox"
            );

        const button =
            document.getElementById(
                "cookieAccept"
            );


        if (!box || !button) {
            return;
        }


        try {

            if (
                localStorage.getItem(
                    "haberista_cookie_accepted"
                ) === "1"
            ) {

                box.classList.add(
                    "hidden"
                );

                return;
            }

        } catch (error) {

            console.warn(
                "Haberİsta: localStorage kullanılamadı.",
                error
            );

        }


        button.addEventListener(
            "click",
            function () {

                try {

                    localStorage.setItem(
                        "haberista_cookie_accepted",
                        "1"
                    );

                } catch (error) {

                    console.warn(
                        "Haberİsta: çerez kaydedilemedi.",
                        error
                    );

                }


                box.classList.add(
                    "hidden"
                );

            }
        );
    }


    // ============================================================
    // BAŞLAT
    // ============================================================

    function init() {

        console.log(
            "Haberİsta başlatılıyor..."
        );


        const news =
            getNews();


        if (!news.length) {

            console.error(
                "Haberİsta: Haber verisi bulunamadı."
            );

        } else {

            console.log(
                "Haberİsta:",
                news.length,
                "haber yüklendi."
            );

        }


        // Haberleri ekrana bas

        renderHero();

        renderBreakingNews();

        renderPopularNews();

        renderSidebarHeadlines();

        renderMainNews(
            news
        );

        renderCategorySections();


        // Kullanıcı işlemleri

        setupMenu();

        setupSearch();

        setupHeroButtons();

        setupCookie();


        // Otomatik manşet

        restartHeroTimer();


        console.log(
            "Haberİsta hazır."
        );
    }


    // ============================================================
    // DOM HAZIR
    // ============================================================

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
