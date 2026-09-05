// ============================================================
// HABERİSTA - ANA SAYFA JAVASCRIPT
// ============================================================

(function () {
    "use strict";

    // --------------------------------------------------------
    // YARDIMCI FONKSİYONLAR
    // --------------------------------------------------------

    function escapeHtml(value) {
        if (value === null || value === undefined) return "";

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getNews() {
        return Array.isArray(window.haberler)
            ? window.haberler
            : [];
    }

    function getNewsUrl(haber) {
        if (haber.url) return haber.url;

        if (haber.slug) {
            return "/haber/" + haber.slug;
        }

        return "haber.html?id=" + encodeURIComponent(haber.id);
    }

    function formatViews(number) {
        return Number(number || 0).toLocaleString("tr-TR");
    }

    // --------------------------------------------------------
    // HABERE GİT
    // --------------------------------------------------------

    function openNews(haber) {
        if (!haber) return;

        window.location.href = getNewsUrl(haber);
    }

    window.openNews = openNews;

    // --------------------------------------------------------
    // HABER KARTI
    // --------------------------------------------------------

    function createNewsCard(haber) {
        return `
            <article class="news-card" data-id="${escapeHtml(haber.id)}">

                <a
                    class="news-card-image"
                    href="${escapeHtml(getNewsUrl(haber))}"
                    aria-label="${escapeHtml(haber.baslik)}"
                >
                    <img
                        src="${escapeHtml(haber.resim || "images/default-news.jpg")}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='images/default-news.jpg';"
                    >
                    <span class="news-category">
                        ${escapeHtml(haber.kategori || "Haber")}
                    </span>
                </a>

                <div class="news-card-content">

                    <div class="news-card-meta">
                        <span>${escapeHtml(haber.tarih || "")}</span>
                        <span>•</span>
                        <span>${escapeHtml(haber.saat || "")}</span>
                    </div>

                    <h3>
                        <a href="${escapeHtml(getNewsUrl(haber))}">
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
                            href="${escapeHtml(getNewsUrl(haber))}"
                        >
                            Devamını Oku →
                        </a>
                    </div>

                </div>
            </article>
        `;
    }

    // --------------------------------------------------------
    // KATEGORİ KARTI
    // --------------------------------------------------------

    function createCategoryCard(haber) {
        return `
            <article class="category-card">

                <a
                    class="category-card-image"
                    href="${escapeHtml(getNewsUrl(haber))}"
                >
                    <img
                        src="${escapeHtml(haber.resim || "images/default-news.jpg")}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='images/default-news.jpg';"
                    >
                </a>

                <div class="category-card-content">

                    <span class="category-card-tag">
                        ${escapeHtml(haber.kategori || "Haber")}
                    </span>

                    <h3>
                        <a href="${escapeHtml(getNewsUrl(haber))}">
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

    // --------------------------------------------------------
    // HERO
    // --------------------------------------------------------

    let heroIndex = 0;
    let heroTimer = null;

    function getHeroNews() {
        return getNews()
            .filter(haber => haber.baslik && haber.resim)
            .slice(0, 5);
    }

    function renderHero() {
        const heroMain = document.getElementById("heroMain");
        const heroNumbers = document.getElementById("heroNumbers");

        if (!heroMain) return;

        const news = getHeroNews();

        if (!news.length) {
            heroMain.innerHTML = `
                <div class="hero-empty">
                    Haber bulunamadı.
                </div>
            `;
            return;
        }

        if (heroIndex >= news.length) {
            heroIndex = 0;
        }

        const haber = news[heroIndex];

        heroMain.innerHTML = `
            <a
                class="hero-link"
                href="${escapeHtml(getNewsUrl(haber))}"
            >

                <img
                    class="hero-image"
                    src="${escapeHtml(haber.resim)}"
                    alt="${escapeHtml(haber.baslik)}"
                    onerror="this.onerror=null;this.src='images/default-news.jpg';"
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHtml(haber.kategori)}
                    </span>

                    <h1>
                        ${escapeHtml(haber.baslik)}
                    </h1>

                    <p>
                        ${escapeHtml(haber.spot || "")}
                    </p>

                    <div class="hero-meta">
                        ${escapeHtml(haber.tarih || "")}
                        ${haber.saat ? " • " + escapeHtml(haber.saat) : ""}
                    </div>

                </div>

            </a>
        `;

        if (heroNumbers) {
            heroNumbers.innerHTML = news.map((_, index) => `
                <button
                    type="button"
                    class="hero-number ${index === heroIndex ? "active" : ""}"
                    data-hero="${index}"
                    aria-label="${index + 1}. haber"
                >
                    ${index + 1}
                </button>
            `).join("");

            heroNumbers
                .querySelectorAll(".hero-number")
                .forEach(button => {
                    button.addEventListener("click", function () {
                        heroIndex = Number(this.dataset.hero);
                        renderHero();
                        restartHeroTimer();
                    });
                });
        }
    }

    function nextHero() {
        const news = getHeroNews();

        if (!news.length) return;

        heroIndex++;

        if (heroIndex >= news.length) {
            heroIndex = 0;
        }

        renderHero();
    }

    function previousHero() {
        const news = getHeroNews();

        if (!news.length) return;

        heroIndex--;

        if (heroIndex < 0) {
            heroIndex = news.length - 1;
        }

        renderHero();
    }

    function restartHeroTimer() {
        clearInterval(heroTimer);

        heroTimer = setInterval(() => {
            nextHero();
        }, 6000);
    }

    // --------------------------------------------------------
    // SON DAKİKA
    // --------------------------------------------------------

    function renderBreakingNews() {
        const container =
            document.getElementById("breakingNews");

        if (!container) return;

        const news = getNews();

        const breaking = news
            .filter(haber =>
                String(haber.kategori).toLocaleLowerCase("tr-TR") ===
                "son dakika"
            )
            .slice(0, 5);

        const list = breaking.length
            ? breaking
            : news.slice(0, 5);

        container.innerHTML = list.map(haber => `
            <a href="${escapeHtml(getNewsUrl(haber))}">
                ${escapeHtml(haber.baslik)}
            </a>
        `).join("");
    }

    // --------------------------------------------------------
    // POPÜLER HABERLER
    // --------------------------------------------------------

    function renderPopularNews() {
        const container =
            document.getElementById("popularNews");

        if (!container) return;

        const popular = [...getNews()]
            .sort((a, b) =>
                Number(b.okunma || 0) -
                Number(a.okunma || 0)
            )
            .slice(0, 5);

        container.innerHTML = popular.map((haber, index) => `
            <a
                class="popular-item"
                href="${escapeHtml(getNewsUrl(haber))}"
            >
                <span class="popular-number">
                    ${index + 1}
                </span>

                <div class="popular-content">
                    <strong>
                        ${escapeHtml(haber.baslik)}
                    </strong>

                    <small>
                        👁 ${formatViews(haber.okunma)}
                    </small>
                </div>
            </a>
        `).join("");
    }

    // --------------------------------------------------------
    // GÜNÜN BAŞLIKLARI
    // --------------------------------------------------------

    function renderSidebarHeadlines() {
        const container =
            document.getElementById("sidebarHeadlines");

        if (!container) return;

        container.innerHTML = getNews()
            .slice(0, 7)
            .map(haber => `
                <a href="${escapeHtml(getNewsUrl(haber))}">
                    <span class="headline-dot"></span>
                    <span>
                        ${escapeHtml(haber.baslik)}
                    </span>
                </a>
            `)
            .join("");
    }

    // --------------------------------------------------------
    // ANA HABERLER
    // --------------------------------------------------------

    function renderMainNews(news = getNews()) {
        const container =
            document.getElementById("newsGrid");

        if (!container) return;

        if (!news.length) {
            container.innerHTML = `
                <div class="no-news">
                    <h3>Haber bulunamadı</h3>
                    <p>Aramanızla eşleşen bir haber bulunamadı.</p>
                </div>
            `;
            return;
        }

        container.innerHTML =
            news.map(createNewsCard).join("");
    }

    // --------------------------------------------------------
    // KATEGORİLER
    // --------------------------------------------------------

    function renderCategorySections() {
        const news = getNews();

        const categories = {
            gundemNews: "Gündem",
            ekonomiNews: "Ekonomi",
            sporNews: "Spor",
            teknolojiNews: "Teknoloji"
        };

        Object.entries(categories).forEach(([id, category]) => {

            const container =
                document.getElementById(id);

            if (!container) return;

            const categoryNews = news
                .filter(haber =>
                    String(haber.kategori)
                        .toLocaleLowerCase("tr-TR") ===
                    category.toLocaleLowerCase("tr-TR")
                )
                .slice(0, 4);

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

    // --------------------------------------------------------
    // ARAMA
    // --------------------------------------------------------

    function normalizeText(text) {
        return String(text || "")
            .toLocaleLowerCase("tr-TR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function searchNews() {

        const input =
            document.getElementById("searchInput");

        const resultInfo =
            document.getElementById("searchResultInfo");

        if (!input) return;

        const query =
            normalizeText(input.value.trim());

        if (!query) {
            if (resultInfo) {
                resultInfo.innerHTML = "";
            }

            renderMainNews();
            return;
        }

        const results =
            getNews().filter(haber => {

                const text = normalizeText(
                    [
                        haber.baslik,
                        haber.spot,
                        haber.icerik,
                        haber.kategori
                    ].join(" ")
                );

                return text.includes(query);
            });

        if (resultInfo) {
            resultInfo.innerHTML = `
                <strong>"${escapeHtml(input.value.trim())}"</strong>
                için ${results.length} haber bulundu.
            `;
        }

        renderMainNews(results);

        const title =
            document.getElementById("sectionTitle");

        if (title) {
            title.textContent = "Arama Sonuçları";
        }

        window.scrollTo({
            top: document.getElementById("newsGrid")
                ?.getBoundingClientRect().top +
                window.scrollY -
                100 || 0,
            behavior: "smooth"
        });
    }

    // --------------------------------------------------------
    // MENÜ
    // --------------------------------------------------------

    function setupMenu() {

        const menuButton =
            document.getElementById("menuBtn");

        const nav =
            document.querySelector(".category-nav");

        if (!menuButton || !nav) return;

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("mobile-open");
            menuButton.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                nav.classList.remove("mobile-open");
                menuButton.classList.remove("active");
            });

        });
    }

    // --------------------------------------------------------
    // ARAMA EVENTLERİ
    // --------------------------------------------------------

    function setupSearch() {

        const input =
            document.getElementById("searchInput");

        const button =
            document.getElementById("searchBtn");

        if (button) {
            button.addEventListener(
                "click",
                searchNews
            );
        }

        if (input) {

            input.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {
                        event.preventDefault();
                        searchNews();
                    }

                }
            );
        }
    }

    // --------------------------------------------------------
    // HERO BUTONLARI
    // --------------------------------------------------------

    function setupHeroButtons() {

        const next =
            document.getElementById("heroNext");

        const previous =
            document.getElementById("heroPrev");

        if (next) {
            next.addEventListener(
                "click",
                () => {
                    nextHero();
                    restartHeroTimer();
                }
            );
        }

        if (previous) {
            previous.addEventListener(
                "click",
                () => {
                    previousHero();
                    restartHeroTimer();
                }
            );
        }
    }

    // --------------------------------------------------------
    // ÇEREZ
    // --------------------------------------------------------

    function setupCookie() {

        const box =
            document.getElementById("cookieBox");

        const button =
            document.getElementById("cookieAccept");

        if (!box || !button) return;

        if (
            localStorage.getItem(
                "haberista_cookie_accepted"
            ) === "1"
        ) {
            box.classList.add("hidden");
            return;
        }

        button.addEventListener("click", () => {

            localStorage.setItem(
                "haberista_cookie_accepted",
                "1"
            );

            box.classList.add("hidden");
        });
    }

    // --------------------------------------------------------
    // BAŞLAT
    // --------------------------------------------------------

    function init() {

        renderHero();
        renderBreakingNews();
        renderPopularNews();
        renderSidebarHeadlines();
        renderMainNews();
        renderCategorySections();

        setupMenu();
        setupSearch();
        setupHeroButtons();
        setupCookie();

        restartHeroTimer();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            init
        );
    } else {
        init();
    }

})();
