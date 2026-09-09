"use strict";

/* =========================================================
   HABERİSTA - APP.JS
   Ana sayfa uygulama motoru
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------------------
       TEMEL KONTROLLER
    --------------------------------------------------------- */

    const haberler = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    if (!haberler.length) {
        console.warn("Haberİsta: Haber verisi bulunamadı.");
        return;
    }

    /* ---------------------------------------------------------
       ELEMENTLER
    --------------------------------------------------------- */

    const heroMain = document.getElementById("heroMain");
    const heroNumbers = document.getElementById("heroNumbers");
    const heroPrev = document.getElementById("heroPrev");
    const heroNext = document.getElementById("heroNext");

    const newsGrid = document.getElementById("newsGrid");
    const popularNews = document.getElementById("popularNews");

    const breakingNews = document.getElementById("breakingNews");

    const searchBtn = document.getElementById("searchBtn");
    const closeSearch = document.getElementById("closeSearch");
    const searchPanel = document.getElementById("searchPanel");
    const searchInput = document.getElementById("searchInput");
    const searchResultInfo = document.getElementById("searchResultInfo");

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    const notificationBtn =
        document.getElementById("notificationBtn");

    /* ---------------------------------------------------------
       YARDIMCI FONKSİYONLAR
    --------------------------------------------------------- */

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

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
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }

    function getUrl(haber) {
        return haber.url || "/haber/" + getSlug(haber) + "/";
    }

    function getImage(haber) {
        return haber.gorsel || "/images/logo.jpeg";
    }

    function getCategory(haber) {
        return haber.kategori || "Gündem";
    }

    function getTitle(haber) {
        return haber.baslik || "Haberİsta";
    }

    function getSpot(haber) {
        return haber.spot || "";
    }

    function formatDate(haber) {
        if (haber.tarih && haber.saat) {
            return `${haber.tarih} • ${haber.saat}`;
        }

        if (haber.tarih) {
            return haber.tarih;
        }

        if (haber.publishedAt) {
            const date = new Date(haber.publishedAt);

            if (!Number.isNaN(date.getTime())) {
                return date.toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                });
            }
        }

        return "";
    }

    function sortNews(list) {
        return [...list].sort(function (a, b) {

            const dateA = new Date(
                a.publishedAt ||
                `${a.tarih || ""} ${a.saat || ""}`
            ).getTime();

            const dateB = new Date(
                b.publishedAt ||
                `${b.tarih || ""} ${b.saat || ""}`
            ).getTime();

            if (!Number.isNaN(dateA) && !Number.isNaN(dateB)) {
                return dateB - dateA;
            }

            return Number(b.id || 0) - Number(a.id || 0);
        });
    }

    const sortedNews = sortNews(haberler);

    /* ---------------------------------------------------------
       HERO HABERLER
    --------------------------------------------------------- */

    let currentHero = 0;

    const heroNews = sortedNews.slice(0, Math.min(5, sortedNews.length));

    function renderHero() {

        if (!heroMain || !heroNews.length) {
            return;
        }

        if (currentHero >= heroNews.length) {
            currentHero = 0;
        }

        if (currentHero < 0) {
            currentHero = heroNews.length - 1;
        }

        const haber = heroNews[currentHero];

        heroMain.innerHTML = `
            <a
                class="hero-link"
                href="${escapeHTML(getUrl(haber))}"
                aria-label="${escapeHTML(getTitle(haber))}"
            >
                <img
                    class="hero-image"
                    src="${escapeHTML(getImage(haber))}"
                    alt="${escapeHTML(getTitle(haber))}"
                    loading="${currentHero === 0 ? "eager" : "lazy"}"
                    onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(getCategory(haber))}
                    </span>

                    <h2 class="hero-title">
                        ${escapeHTML(getTitle(haber))}
                    </h2>

                    ${
                        getSpot(haber)
                            ? `
                                <p class="hero-spot">
                                    ${escapeHTML(getSpot(haber))}
                                </p>
                            `
                            : ""
                    }

                    <div class="hero-meta">
                        ${escapeHTML(formatDate(haber))}
                    </div>

                </div>
            </a>
        `;

        renderHeroNumbers();
    }

    function renderHeroNumbers() {

        if (!heroNumbers || !heroNews.length) {
            return;
        }

        heroNumbers.innerHTML = heroNews
            .map(function (haber, index) {

                return `
                    <button
                        type="button"
                        class="hero-number ${
                            index === currentHero ? "active" : ""
                        }"
                        data-hero-index="${index}"
                        aria-label="${index + 1}. manşet"
                    >
                        ${index + 1}
                    </button>
                `;
            })
            .join("");

        heroNumbers
            .querySelectorAll(".hero-number")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    currentHero = Number(
                        button.dataset.heroIndex
                    );

                    renderHero();
                });
            });
    }

    if (heroPrev) {
        heroPrev.addEventListener("click", function () {
            currentHero--;
            renderHero();
        });
    }

    if (heroNext) {
        heroNext.addEventListener("click", function () {
            currentHero++;
            renderHero();
        });
    }

    renderHero();

    /* ---------------------------------------------------------
       HERO OTOMATİK GEÇİŞ
    --------------------------------------------------------- */

    let heroTimer = null;

    function startHeroTimer() {

        stopHeroTimer();

        if (heroNews.length <= 1) {
            return;
        }

        heroTimer = setInterval(function () {

            currentHero++;

            if (currentHero >= heroNews.length) {
                currentHero = 0;
            }

            renderHero();

        }, 6500);
    }

    function stopHeroTimer() {

        if (heroTimer) {
            clearInterval(heroTimer);
            heroTimer = null;
        }
    }

    startHeroTimer();

    if (heroMain) {

        heroMain.addEventListener("mouseenter", stopHeroTimer);

        heroMain.addEventListener("mouseleave", startHeroTimer);
    }

    /* ---------------------------------------------------------
       SON DAKİKA
    --------------------------------------------------------- */

    function renderBreakingNews() {

        if (!breakingNews) {
            return;
        }

        const latest = sortedNews.slice(
            0,
            Math.min(8, sortedNews.length)
        );

        if (!latest.length) {
            breakingNews.innerHTML = "";
            return;
        }

        const items = latest.map(function (haber) {

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
        }).join("");

        breakingNews.innerHTML = `
            <div class="breaking-inner">

                <div class="breaking-heading">
                    <span class="breaking-pulse"></span>
                    <strong>SON DAKİKA</strong>
                </div>

                <div class="breaking-track">
                    <div class="breaking-list">
                        ${items}
                    </div>
                </div>

            </div>
        `;
    }

    renderBreakingNews();

    /* ---------------------------------------------------------
       HABER KARTLARI
       MEVCUT NEWS-CARD TASARIMINA DOKUNULMUYOR
    --------------------------------------------------------- */

    function createNewsCard(haber) {

        return `
            <article
                class="news-card"
                data-id="${escapeHTML(haber.id)}"
            >
                <a
                    class="news-card-link"
                    href="${escapeHTML(getUrl(haber))}"
                >

                    <div class="news-card-image">

                        <img
                            src="${escapeHTML(getImage(haber))}"
                            alt="${escapeHTML(getTitle(haber))}"
                            loading="lazy"
                            onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                        >

                    </div>

                    <div class="news-card-content">

                        <span class="news-card-category">
                            ${escapeHTML(getCategory(haber))}
                        </span>

                        <h3>
                            ${escapeHTML(getTitle(haber))}
                        </h3>

                        ${
                            getSpot(haber)
                                ? `
                                    <p class="news-card-spot">
                                        ${escapeHTML(getSpot(haber))}
                                    </p>
                                `
                                : ""
                        }

                        <div class="news-card-meta">
                            ${escapeHTML(formatDate(haber))}
                        </div>

                    </div>

                </a>
            </article>
        `;
    }

    function renderNews(list) {

        if (!newsGrid) {
            return;
        }

        if (!list.length) {

            newsGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔎</div>

                    <h3>Haber bulunamadı</h3>

                    <p>
                        Aradığınız kriterlere uygun haber bulunamadı.
                    </p>
                </div>
            `;

            return;
        }

        newsGrid.innerHTML = list
            .map(createNewsCard)
            .join("");
    }

    renderNews(sortedNews);

    /* ---------------------------------------------------------
       ÇOK OKUNAN HABERLER
    --------------------------------------------------------- */

    function getPopularNews() {

        return [...sortedNews]
            .sort(function (a, b) {

                return Number(b.goruntulenme || 0) -
                    Number(a.goruntulenme || 0);

            })
            .slice(0, 5);
    }

    function renderPopularNews() {

        if (!popularNews) {
            return;
        }

        const popular = getPopularNews();

        if (!popular.length) {
            popularNews.innerHTML = "";
            return;
        }

        popularNews.innerHTML = popular
            .map(function (haber, index) {

                return `
                    <a
                        class="popular-item"
                        href="${escapeHTML(getUrl(haber))}"
                    >

                        <span class="popular-number">
                            ${index + 1}
                        </span>

                        <div class="popular-image">

                            <img
                                src="${escapeHTML(getImage(haber))}"
                                alt="${escapeHTML(getTitle(haber))}"
                                loading="lazy"
                                onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                            >

                        </div>

                        <div class="popular-content">

                            <span class="popular-category">
                                ${escapeHTML(getCategory(haber))}
                            </span>

                            <h3>
                                ${escapeHTML(getTitle(haber))}
                            </h3>

                            <span class="popular-date">
                                ${escapeHTML(formatDate(haber))}
                            </span>

                        </div>

                    </a>
                `;
            })
            .join("");
    }

    renderPopularNews();

    /* ---------------------------------------------------------
       ARAMA SİSTEMİ
    --------------------------------------------------------- */

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
        }

        renderNews(sortedNews);
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            openSearch();
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener("click", function () {
            closeSearchPanel();
        });
    }

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const query = searchInput.value
                .trim()
                .toLocaleLowerCase("tr-TR");

            if (!query) {

                if (searchResultInfo) {
                    searchResultInfo.innerHTML = "";
                }

                renderNews(sortedNews);

                return;
            }

            const results = sortedNews.filter(function (haber) {

                const title = String(haber.baslik || "")
                    .toLocaleLowerCase("tr-TR");

                const spot = String(haber.spot || "")
                    .toLocaleLowerCase("tr-TR");

                const category = String(haber.kategori || "")
                    .toLocaleLowerCase("tr-TR");

                const content = String(haber.icerik || "")
                    .toLocaleLowerCase("tr-TR");

                return (
                    title.includes(query) ||
                    spot.includes(query) ||
                    category.includes(query) ||
                    content.includes(query)
                );
            });

            if (searchResultInfo) {

                searchResultInfo.innerHTML = `
                    <strong>${results.length}</strong>
                    haber bulundu.
                    <span>“${escapeHTML(query)}”</span>
                `;
            }

            renderNews(results);
        });

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeSearchPanel();
            }

            if (event.key === "Enter") {

                const query = searchInput.value.trim();

                if (query) {
                    window.scrollTo({
                        top: document.querySelector(".latest-section")
                            ? document.querySelector(".latest-section").offsetTop - 80
                            : 0,
                        behavior: "smooth"
                    });
                }
            }
        });
    }

    /* ---------------------------------------------------------
       MOBİL MENÜ
    --------------------------------------------------------- */

    function openMobileMenu() {

        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.add("active");

        if (menuBtn) {
            menuBtn.classList.add("active");
            menuBtn.setAttribute("aria-expanded", "true");
        }

        document.body.classList.add("menu-open");
    }

    function closeMobileMenu() {

        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.remove("active");

        if (menuBtn) {
            menuBtn.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        }

        document.body.classList.remove("menu-open");
    }

    if (menuBtn) {

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.addEventListener("click", function () {

            if (mobileMenu &&
                mobileMenu.classList.contains("active")) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }
        });
    }

    if (mobileMenu) {

        mobileMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {
                    closeMobileMenu();
                });

            });
    }

    document.addEventListener("click", function (event) {

        if (!mobileMenu || !menuBtn) {
            return;
        }

        if (
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            closeMobileMenu();
        }

    });

    /* ---------------------------------------------------------
       ESC TUŞU
    --------------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        closeSearchPanel();
        closeMobileMenu();

    });

    /* ---------------------------------------------------------
       BİLDİRİMLER
    --------------------------------------------------------- */

    if (notificationBtn) {

        notificationBtn.addEventListener("click", async function () {

            if (!("Notification" in window)) {

                alert(
                    "Tarayıcınız bildirim özelliğini desteklemiyor."
                );

                return;
            }

            try {

                const permission =
                    await Notification.requestPermission();

                if (permission === "granted") {

                    notificationBtn.classList.add("enabled");

                    notificationBtn.innerHTML =
                        "🔔 Bildirimler Açık";

                    new Notification("Haberİsta", {
                        body:
                            "Son dakika haberlerinden anında haberdar olabilirsiniz."
                    });

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

        });
    }

    /* ---------------------------------------------------------
       KATEGORİ AKTİF DURUMU
    --------------------------------------------------------- */

    function setActiveCategory() {

        const currentPath =
            window.location.pathname
                .replace(/\/+$/, "") || "/";

        document
            .querySelectorAll(
                ".category-nav a, .mobile-menu a"
            )
            .forEach(function (link) {

                const href =
                    link.getAttribute("href") || "";

                const cleanHref =
                    href.replace(/\/+$/, "") || "/";

                if (cleanHref === currentPath) {
                    link.classList.add("active");
                }

            });
    }

    setActiveCategory();

    /* ---------------------------------------------------------
       SAYFA YUKARI ÇIK
    --------------------------------------------------------- */

    let backTop = document.getElementById("backToTop");

    if (!backTop) {

        backTop = document.createElement("button");

        backTop.id = "backToTop";
        backTop.className = "back-to-top";
        backTop.type = "button";
        backTop.setAttribute(
            "aria-label",
            "Yukarı çık"
        );

        backTop.innerHTML = "↑";

        document.body.appendChild(backTop);
    }

    function updateBackTop() {

        if (window.scrollY > 500) {
            backTop.classList.add("visible");
        } else {
            backTop.classList.remove("visible");
        }
    }

    window.addEventListener(
        "scroll",
        updateBackTop,
        { passive: true }
    );

    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    updateBackTop();

    /* ---------------------------------------------------------
       GÖRSELLERDE HATA KONTROLÜ
    --------------------------------------------------------- */

    document.addEventListener(
        "error",
        function (event) {

            const element = event.target;

            if (
                element &&
                element.tagName === "IMG" &&
                !element.dataset.fallback
            ) {

                element.dataset.fallback = "true";
                element.src = "/images/logo.jpeg";
            }

        },
        true
    );

    /* ---------------------------------------------------------
       SAYFA GÖRSEL OLARAK HAZIR
    --------------------------------------------------------- */

    document.body.classList.add("app-ready");

    console.log(
        `Haberİsta: ${haberler.length} haber başarıyla yüklendi.`
    );

});
