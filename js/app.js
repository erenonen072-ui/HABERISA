// ============================================================
// HABERİSTA - ANA SAYFA JAVASCRIPT
// Tam sürüm
// ============================================================

(function () {
    "use strict";

    // ========================================================
    // GLOBAL AYARLAR
    // ========================================================

    const DEFAULT_IMAGE = "images/default-news.jpg";
    const HERO_COUNT = 5;
    const POPULAR_COUNT = 5;
    const SIDEBAR_COUNT = 7;
    const CATEGORY_COUNT = 4;
    const HERO_INTERVAL = 6000;

    let heroIndex = 0;
    let heroTimer = null;

    // ========================================================
    // YARDIMCI FONKSİYONLAR
    // ========================================================

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

    function getNews() {
        if (Array.isArray(window.haberler)) {
            return window.haberler;
        }

        console.error("Haberİsta: window.haberler bulunamadı.");

        return [];
    }

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
            return "/haber.html?id=" + encodeURIComponent(haber.id);
        }

        return "#";
    }

    function formatViews(number) {
        return Number(number || 0).toLocaleString("tr-TR");
    }

    function normalizeText(text) {
        return String(text || "")
            .toLocaleLowerCase("tr-TR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function getCategorySlug(category) {
        return String(category || "")
            .toLocaleLowerCase("tr-TR")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }

    function getCategoryFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get("kategori") || "";
    }

    function setPageTitle(title) {
        if (title) {
            document.title = title + " - Haberİsta";
        } else {
            document.title = "Haberİsta - Son Dakika Haberleri";
        }
    }

    // ========================================================
    // HABER URL'Sİ
    // ========================================================

    function openNews(haber) {
        if (!haber) {
            return;
        }

        window.location.href = getNewsUrl(haber);
    }

    window.openNews = openNews;

    // ========================================================
    // HABER KARTI
    // ========================================================

    function createNewsCard(haber) {
        const url = getNewsUrl(haber);

        return `
            <article class="news-card" data-id="${escapeHtml(haber.id)}">

                <a
                    class="news-card-image"
                    href="${escapeHtml(url)}"
                    aria-label="${escapeHtml(haber.baslik)}"
                >
                    <img
                        src="${escapeHtml(haber.resim || DEFAULT_IMAGE)}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                    >

                    <span class="news-category">
                        ${escapeHtml(haber.kategori || "Haber")}
                    </span>
                </a>

                <div class="news-card-content">

                    <div class="news-card-meta">
                        <span>${escapeHtml(haber.tarih || "")}</span>

                        ${
                            haber.saat
                                ? `<span>•</span>
                                   <span>${escapeHtml(haber.saat)}</span>`
                                : ""
                        }
                    </div>

                    <h3>
                        <a href="${escapeHtml(url)}">
                            ${escapeHtml(haber.baslik)}
                        </a>
                    </h3>

                    <p>
                        ${escapeHtml(haber.spot || "")}
                    </p>

                    <div class="news-card-bottom">

                        <span>
                            👁 ${formatViews(haber.okunma)}
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

    // ========================================================
    // KATEGORİ KARTI
    // ========================================================

    function createCategoryCard(haber) {
        const url = getNewsUrl(haber);

        return `
            <article class="category-card">

                <a
                    class="category-card-image"
                    href="${escapeHtml(url)}"
                >
                    <img
                        src="${escapeHtml(haber.resim || DEFAULT_IMAGE)}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                    >
                </a>

                <div class="category-card-content">

                    <span class="category-card-tag">
                        ${escapeHtml(haber.kategori || "Haber")}
                    </span>

                    <h3>
                        <a href="${escapeHtml(url)}">
                            ${escapeHtml(haber.baslik)}
                        </a>
                    </h3>

                    <div class="category-card-meta">
                        ${escapeHtml(haber.tarih || "")}
                    </div>

                </div>

            </article>
        `;
    }

    // ========================================================
    // HERO HABERLER
    // ========================================================

    function getHeroNews() {
        return getNews()
            .filter(haber => {
                return haber &&
                    haber.baslik &&
                    haber.resim;
            })
            .slice(0, HERO_COUNT);
    }

    function renderHero() {
        const heroMain = document.getElementById("heroMain");
        const heroNumbers = document.getElementById("heroNumbers");

        if (!heroMain) {
            return;
        }

        const news = getHeroNews();

        if (!news.length) {
            heroMain.innerHTML = `
                <div class="hero-empty">
                    <strong>Haber bulunamadı.</strong>
                    <p>Haber verileri yüklenemedi.</p>
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
            heroIndex = news.length - 1;
        }

        const haber = news[heroIndex];
        const url = getNewsUrl(haber);

        heroMain.innerHTML = `
            <a
                class="hero-link"
                href="${escapeHtml(url)}"
            >

                <img
                    class="hero-image"
                    src="${escapeHtml(haber.resim || DEFAULT_IMAGE)}"
                    alt="${escapeHtml(haber.baslik)}"
                    onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHtml(haber.kategori || "Haber")}
                    </span>

                    <h1>
                        ${escapeHtml(haber.baslik)}
                    </h1>

                    <p>
                        ${escapeHtml(haber.spot || "")}
                    </p>

                    <div class="hero-meta">
                        ${escapeHtml(haber.tarih || "")}

                        ${
                            haber.saat
                                ? ` • ${escapeHtml(haber.saat)}`
                                : ""
                        }
                    </div>

                </div>

            </a>
        `;

        if (heroNumbers) {
            heroNumbers.innerHTML = news
                .map((haberItem, index) => {
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
                })
                .join("");

            heroNumbers
                .querySelectorAll(".hero-number")
                .forEach(button => {
                    button.addEventListener(
                        "click",
                        function () {
                            heroIndex = Number(
                                this.dataset.hero
                            );

                            renderHero();
                            restartHeroTimer();
                        }
                    );
                });
        }
    }

    function nextHero() {
        const news = getHeroNews();

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
        const news = getHeroNews();

        if (!news.length) {
            return;
        }

        heroIndex--;

        if (heroIndex < 0) {
            heroIndex = news.length - 1;
        }

        renderHero();
    }

    function restartHeroTimer() {
        clearInterval(heroTimer);

        heroTimer = setInterval(
            nextHero,
            HERO_INTERVAL
        );
    }

    // ========================================================
    // SON DAKİKA
    // ========================================================

    function renderBreakingNews() {
        const container =
            document.getElementById("breakingNews");

        if (!container) {
            return;
        }

        const news = getNews();

        let breaking = news.filter(haber => {
            return normalizeText(haber.kategori) ===
                "son dakika";
        });

        if (!breaking.length) {
            breaking = news.slice(0, 5);
        }

        container.innerHTML = breaking
            .slice(0, 5)
            .map(haber => {
                return `
                    <a
                        href="${escapeHtml(
                            getNewsUrl(haber)
                        )}"
                    >
                        ${escapeHtml(haber.baslik)}
                    </a>
                `;
            })
            .join("");
    }

    // ========================================================
    // ÇOK OKUNANLAR
    // ========================================================

    function renderPopularNews() {
        const container =
            document.getElementById("popularNews");

        if (!container) {
            return;
        }

        const popular = [...getNews()]
            .sort((a, b) => {
                return Number(b.okunma || 0) -
                    Number(a.okunma || 0);
            })
            .slice(0, POPULAR_COUNT);

        if (!popular.length) {
            container.innerHTML = `
                <div class="category-empty">
                    Henüz haber bulunmuyor.
                </div>
            `;

            return;
        }

        container.innerHTML = popular
            .map((haber, index) => {
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

    // ========================================================
    // GÜNÜN BAŞLIKLARI
    // ========================================================

    function renderSidebarHeadlines() {
        const container =
            document.getElementById(
                "sidebarHeadlines"
            );

        if (!container) {
            return;
        }

        const news = getNews().slice(
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

        container.innerHTML = news
            .map(haber => {
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

    // ========================================================
    // ANA HABERLER
    // ========================================================

    function renderMainNews(news) {
        const container =
            document.getElementById("newsGrid");

        if (!container) {
            return;
        }

        const items = Array.isArray(news)
            ? news
            : getNews();

        if (!items.length) {
            container.innerHTML = `
                <div class="no-news">

                    <h3>Haber bulunamadı</h3>

                    <p>
                        Gösterilecek haber bulunmuyor.
                    </p>

                </div>
            `;

            return;
        }

        container.innerHTML = items
            .map(createNewsCard)
            .join("");
    }

    // ========================================================
    // KATEGORİ BÖLÜMLERİ
    // ========================================================

    function renderCategorySections() {
        const news = getNews();

        const categories = {
            gundemNews: "Gündem",
            ekonomiNews: "Ekonomi",
            sporNews: "Spor",
            teknolojiNews: "Teknoloji"
        };

        Object.entries(categories)
            .forEach(([id, category]) => {

                const container =
                    document.getElementById(id);

                if (!container) {
                    return;
                }

                const categoryNews =
                    news
                        .filter(haber => {
                            return normalizeText(
                                haber.kategori
                            ) === normalizeText(
                                category
                            );
                        })
                        .slice(0, CATEGORY_COUNT);

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
                        .map(createCategoryCard)
                        .join("");
            });
    }

    // ========================================================
    // KATEGORİ SAYFASI
    // ========================================================

    function renderSelectedCategory(categorySlug) {
        if (!categorySlug) {
            return false;
        }

        const categoryNames = {
            "son-dakika": "Son Dakika",
            "gundem": "Gündem",
            "ekonomi": "Ekonomi",
            "spor": "Spor",
            "magazin": "Magazin",
            "dunya": "Dünya",
            "teknoloji": "Teknoloji",
            "saglik": "Sağlık",
            "kultur-sanat": "Kültür Sanat"
        };

        const category =
            categoryNames[categorySlug];

        if (!category) {
            return false;
        }

        const news = getNews().filter(haber => {
            return normalizeText(haber.kategori) ===
                normalizeText(category);
        });

        const title =
            document.getElementById("sectionTitle");

        if (title) {
            title.textContent = category;
        }

        const resultInfo =
            document.getElementById(
                "searchResultInfo"
            );

        if (resultInfo) {
            resultInfo.innerHTML = `
                <strong>${escapeHtml(category)}</strong>
                kategorisindeki ${news.length} haber
            `;
        }

        renderMainNews(news);

        return true;
    }

    // ========================================================
    // ARAMA
    // ========================================================

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
            normalizeText(originalQuery);

        if (!query) {

            if (resultInfo) {
                resultInfo.innerHTML = "";
            }

            if (title) {
                title.textContent = "Son Haberler";
            }

            renderMainNews(getNews());

            return;
        }

        const results =
            getNews().filter(haber => {

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

                return text.includes(query);
            });

        if (resultInfo) {
            resultInfo.innerHTML = `
                <strong>
                    "${escapeHtml(originalQuery)}"
                </strong>
                için ${results.length}
                haber bulundu.
            `;
        }

        if (title) {
            title.textContent =
                "Arama Sonuçları";
        }

        renderMainNews(results);

        const grid =
            document.getElementById(
                "newsGrid"
            );

        if (grid) {
            setTimeout(() => {

                const top =
                    grid.getBoundingClientRect().top +
                    window.scrollY -
                    100;

                window.scrollTo({
                    top: Math.max(0, top),
                    behavior: "smooth"
                });

            }, 50);
        }
    }

    // ========================================================
    // MENÜ
    // ========================================================

    function setupMenu() {
        const menuButton =
            document.getElementById(
                "menuBtn"
            );

        const nav =
            document.querySelector(
                ".category-nav"
            );

        if (menuButton && nav) {

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
                .forEach(link => {

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
    }

    // ========================================================
    // MENÜ LİNKLERİNİ KATEGORİ SİSTEMİNE ÇEVİR
    // ========================================================

    function setupCategoryLinks() {
        const nav =
            document.querySelector(
                ".category-nav"
            );

        if (!nav) {
            return;
        }

        nav.querySelectorAll("a")
            .forEach(link => {

                const text =
                    link.textContent.trim();

                const categorySlug =
                    getCategorySlug(text);

                const categoryMap = {
                    "ana-sayfa": "",
                    "son-dakika": "son-dakika",
                    "gundem": "gundem",
                    "ekonomi": "ekonomi",
                    "spor": "spor",
                    "magazin": "magazin",
                    "dunya": "dunya",
                    "teknoloji": "teknoloji",
                    "saglik": "saglik",
                    "kultur-sanat": "kultur-sanat"
                };

                if (
                    Object.prototype.hasOwnProperty.call(
                        categoryMap,
                        categorySlug
                    )
                ) {

                    const slug =
                        categoryMap[
                            categorySlug
                        ];

                    if (slug) {
                        link.href =
                            "/?kategori=" +
                            encodeURIComponent(slug);
                    } else {
                        link.href = "/";
                    }

                }

            });
    }

    // ========================================================
    // ARAMA EVENTLERİ
    // ========================================================

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

                    if (event.key === "Enter") {

                        event.preventDefault();

                        searchNews();

                    }

                }
            );

        }
    }

    // ========================================================
    // HERO BUTONLARI
    // ========================================================

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

    // ========================================================
    // ÇEREZ
    // ========================================================

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

                box.classList.add("hidden");

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

    // ========================================================
    // AKTİF MENÜ
    // ========================================================

    function setActiveCategory() {
        const category =
            getCategoryFromUrl();

        const nav =
            document.querySelector(
                ".category-nav"
            );

        if (!nav) {
            return;
        }

        nav.querySelectorAll("a")
            .forEach(link => {

                link.classList.remove(
                    "active"
                );

                const text =
                    getCategorySlug(
                        link.textContent
                    );

                const current =
                    category ||
                    "ana-sayfa";

                if (text === current) {
                    link.classList.add(
                        "active"
                    );
                }

            });
    }

    // ========================================================
    // SAYFA MODU
    // ========================================================

    function applyPageMode() {
        const category =
            getCategoryFromUrl();

        if (category) {

            const handled =
                renderSelectedCategory(
                    category
                );

            if (handled) {

                setPageTitle(
                    document
                        .getElementById(
                            "sectionTitle"
                        )
                        ?.textContent ||
                    "Kategori"
                );

            }

            return;
        }

        setPageTitle();

        const title =
            document.getElementById(
                "sectionTitle"
            );

        if (title) {
            title.textContent =
                "Son Haberler";
        }

        const resultInfo =
            document.getElementById(
                "searchResultInfo"
            );

        if (resultInfo) {
            resultInfo.innerHTML = "";
        }

        renderMainNews(getNews());
    }

    // ========================================================
    // HABER VERİSİ KONTROLÜ
    // ========================================================

    function checkNewsData() {
        const news = getNews();

        if (!news.length) {

            console.error(
                "Haberİsta: Haber listesi boş."
            );

            console.error(
                "Kontrol et: index.html içinde haberler.js, app.js'den önce yükleniyor mu?"
            );

            return false;
        }

        console.log(
            `Haberİsta: ${news.length} haber bulundu.`
        );

        return true;
    }

    // ========================================================
    // BAŞLAT
    // ========================================================

    function init() {

        console.log(
            "Haberİsta App başlatılıyor..."
        );

        checkNewsData();

        // Önce kategori URL sistemini hazırla.
        setupCategoryLinks();

        // Hero
        renderHero();

        // Son dakika
        renderBreakingNews();

        // Çok okunanlar
        renderPopularNews();

        // Günün başlıkları
        renderSidebarHeadlines();

        // Ana haberler / kategori
        applyPageMode();

        // Kategori kutuları
        renderCategorySections();

        // Menü
        setupMenu();

        // Arama
        setupSearch();

        // Hero butonları
        setupHeroButtons();

        // Çerez
        setupCookie();

        // Aktif kategori
        setActiveCategory();

        // Hero otomatik geçiş
        restartHeroTimer();

        console.log(
            "Haberİsta App başarıyla başlatıldı."
        );
    }

    // ========================================================
    // DOM HAZIR
    // ========================================================

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
