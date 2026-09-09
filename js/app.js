/* =========================================================
   HABERİSTA - APP.JS
   index.html ile uyumlu temiz sürüm
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       TEMEL VERİ
    ===================================================== */

    const haberlerData =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];

    let heroIndex = 0;
    let heroTimer = null;

    /* =====================================================
       YARDIMCI FONKSİYONLAR
    ===================================================== */

    function escapeHTML(value) {
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

    function imageUrl(gorsel) {
        if (!gorsel) {
            return "images/default.jpg";
        }

        return gorsel;
    }

    function haberSlug(haber) {
        if (
            typeof window.haberSlugIleBul === "function" &&
            haber.slug
        ) {
            return haber.slug;
        }

        if (typeof window.slugOlustur === "function") {
            return window.slugOlustur(haber.baslik);
        }

        return String(haber.baslik || "")
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function haberUrl(haber) {
        return "/haber/" + haberSlug(haber);
    }

    function tarihGoster(haber) {
        if (haber.tarih && haber.saat) {
            return `${haber.tarih} • ${haber.saat}`;
        }

        if (haber.tarih) {
            return haber.tarih;
        }

        return "";
    }

    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function renderBreakingNews() {
        const container =
            document.getElementById("breakingNews");

        if (!container) return;

        const breaking = haberlerData.slice(0, 10);

        if (!breaking.length) {
            container.innerHTML = "";
            return;
        }

        const items = breaking
            .concat(breaking)
            .map(function (haber) {
                return `
                    <a
                        class="breaking-link"
                        href="${haberUrl(haber)}"
                    >
                        ${escapeHTML(haber.baslik)}
                    </a>
                `;
            })
            .join("");

        container.innerHTML = items;
    }

    /* =====================================================
       MANŞET VERİLERİ
    ===================================================== */

    function getHeroNews() {
        return haberlerData.slice(0, 5);
    }

    /* =====================================================
       MANŞET
    ===================================================== */

    function renderHero(index) {
        const heroMain =
            document.getElementById("heroMain");

        if (!heroMain) return;

        const heroNews = getHeroNews();

        if (!heroNews.length) {
            heroMain.innerHTML = `
                <div class="hero-loading">
                    Haber bulunamadı.
                </div>
            `;
            return;
        }

        if (index < 0) {
            index = heroNews.length - 1;
        }

        if (index >= heroNews.length) {
            index = 0;
        }

        heroIndex = index;

        const haber = heroNews[heroIndex];

        heroMain.innerHTML = `
            <a
                class="hero-slide-link"
                href="${haberUrl(haber)}"
                aria-label="${escapeHTML(haber.baslik)}"
            >
                <img
                    class="hero-image"
                    src="${escapeHTML(imageUrl(haber.gorsel))}"
                    alt="${escapeHTML(haber.baslik)}"
                    loading="eager"
                >

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(haber.kategori || "Haber")}
                    </span>

                    <h1>
                        ${escapeHTML(haber.baslik)}
                    </h1>

                    ${
                        haber.spot
                            ? `
                                <p>
                                    ${escapeHTML(haber.spot)}
                                </p>
                              `
                            : ""
                    }

                    <div class="hero-meta">
                        ${escapeHTML(tarihGoster(haber))}
                        ${
                            haber.yazar
                                ? ` • ${escapeHTML(haber.yazar)}`
                                : ""
                        }
                    </div>

                </div>
            </a>
        `;

        updateHeroNumbers(heroNews.length);
    }

    /* =====================================================
       MANŞET NUMARALARI
    ===================================================== */

    function updateHeroNumbers(total) {
        const numbers =
            document.getElementById("heroNumbers");

        if (!numbers) return;

        numbers.innerHTML = "";

        for (let i = 0; i < total; i++) {
            const button =
                document.createElement("button");

            button.type = "button";
            button.className =
                "hero-number" +
                (i === heroIndex ? " active" : "");

            button.textContent = i + 1;
            button.setAttribute(
                "aria-label",
                `${i + 1}. manşet`
            );

            button.addEventListener(
                "click",
                function () {
                    renderHero(i);
                    restartHeroTimer();
                }
            );

            numbers.appendChild(button);
        }
    }

    /* =====================================================
       MANŞET OKLARI
    ===================================================== */

    function nextHero() {
        const total = getHeroNews().length;

        if (!total) return;

        renderHero((heroIndex + 1) % total);
    }

    function prevHero() {
        const total = getHeroNews().length;

        if (!total) return;

        renderHero(
            (heroIndex - 1 + total) % total
        );
    }

    function startHeroTimer() {
        stopHeroTimer();

        heroTimer = setInterval(function () {
            nextHero();
        }, 7000);
    }

    function stopHeroTimer() {
        if (heroTimer) {
            clearInterval(heroTimer);
            heroTimer = null;
        }
    }

    function restartHeroTimer() {
        startHeroTimer();
    }

    /* =====================================================
       SON HABERLER
    ===================================================== */

    function renderNews(news) {
        const grid =
            document.getElementById("newsGrid");

        if (!grid) return;

        if (!news.length) {
            grid.innerHTML = `
                <div class="search-empty">
                    Haber bulunamadı.
                </div>
            `;
            return;
        }

        grid.innerHTML = news
            .map(function (haber) {
                return `
                    <article class="news-card">

                        <a
                            href="${haberUrl(haber)}"
                            aria-label="${escapeHTML(haber.baslik)}"
                        >
                            <img
                                class="news-card-image"
                                src="${escapeHTML(imageUrl(haber.gorsel))}"
                                alt="${escapeHTML(haber.baslik)}"
                                loading="lazy"
                            >
                        </a>

                        <div class="news-card-content">

                            <a
                                href="${haberUrl(haber)}"
                                class="news-card-category"
                            >
                                ${escapeHTML(haber.kategori || "Haber")}
                            </a>

                            <h3>
                                <a href="${haberUrl(haber)}">
                                    ${escapeHTML(haber.baslik)}
                                </a>
                            </h3>

                            <div class="news-card-meta">
                                ${escapeHTML(tarihGoster(haber))}
                            </div>

                        </div>

                    </article>
                `;
            })
            .join("");
    }

    /* =====================================================
       ARAMA
    ===================================================== */

    function searchNews(term) {
        const info =
            document.getElementById("searchResultInfo");

        const value =
            String(term || "")
                .trim()
                .toLocaleLowerCase("tr-TR");

        if (!value) {
            if (info) {
                info.textContent = "";
            }

            renderNews(haberlerData.slice(0, 12));
            return;
        }

        const results =
            haberlerData.filter(function (haber) {
                const text = [
                    haber.baslik,
                    haber.spot,
                    haber.kategori,
                    haber.icerik
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLocaleLowerCase("tr-TR");

                return text.includes(value);
            });

        if (info) {
            info.textContent =
                `"${term}" için ${results.length} haber bulundu.`;
        }

        renderNews(results);
    }

    /* =====================================================
       ARAMA BUTONU
    ===================================================== */

    function setupSearch() {
        const button =
            document.getElementById("searchBtn");

        const box =
            document.getElementById("searchBox");

        const input =
            document.getElementById("searchInput");

        if (!button || !box || !input) return;

        button.addEventListener("click", function () {
            box.classList.toggle("active");

            if (box.classList.contains("active")) {
                input.focus();
            } else {
                input.value = "";
                searchNews("");
            }
        });

        input.addEventListener(
            "input",
            function () {
                searchNews(input.value);
            }
        );

        input.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Escape") {
                    box.classList.remove("active");
                    input.value = "";
                    searchNews("");
                }
            }
        );
    }

    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    function setupMobileMenu() {
        const button =
            document.getElementById("menuBtn");

        const nav =
            document.getElementById("mobileNav");

        if (!button || !nav) return;

        button.addEventListener("click", function () {
            nav.classList.toggle("active");

            const active =
                nav.classList.contains("active");

            button.setAttribute(
                "aria-expanded",
                active ? "true" : "false"
            );
        });

        nav.querySelectorAll("a")
            .forEach(function (link) {
                link.addEventListener(
                    "click",
                    function () {
                        nav.classList.remove("active");
                    }
                );
            });
    }

    /* =====================================================
       MANŞET KONTROLLERİ
    ===================================================== */

    function setupHeroControls() {
        const prev =
            document.getElementById("heroPrev");

        const next =
            document.getElementById("heroNext");

        if (prev) {
            prev.addEventListener(
                "click",
                function () {
                    prevHero();
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

        const hero =
            document.getElementById("heroMain");

        if (hero) {
            hero.addEventListener(
                "mouseenter",
                stopHeroTimer
            );

            hero.addEventListener(
                "mouseleave",
                startHeroTimer
            );
        }
    }

    /* =====================================================
       PİYASA
    ===================================================== */

    async function loadMarket() {
        const container =
            document.getElementById("marketItems");

        const updated =
            document.getElementById("marketUpdated");

        if (!container) return;

        try {
            const response =
                await fetch("/api/market", {
                    cache: "no-store"
                });

            if (!response.ok) {
                throw new Error("Market API hatası");
            }

            const data =
                await response.json();

            const items =
                Array.isArray(data)
                    ? data
                    : Array.isArray(data.items)
                        ? data.items
                        : [];

            if (!items.length) {
                container.innerHTML =
                    `<div class="market-loading">
                        Piyasa verisi bulunamadı.
                    </div>`;
                return;
            }

            container.innerHTML =
                items.map(function (item) {

                    const change =
                        item.change ??
                        item.degisim ??
                        "";

                    const changeText =
                        change !== ""
                            ? String(change)
                            : "";

                    let changeClass =
                        "market-neutral";

                    if (
                        String(changeText)
                            .includes("+")
                    ) {
                        changeClass =
                            "market-up";
                    }

                    if (
                        String(changeText)
                            .includes("-")
                    ) {
                        changeClass =
                            "market-down";
                    }

                    return `
                        <div class="market-item">

                            <span class="market-name">
                                ${escapeHTML(
                                    item.name ??
                                    item.ad ??
                                    ""
                                )}
                            </span>

                            <span class="market-price">
                                ${escapeHTML(
                                    item.price ??
                                    item.fiyat ??
                                    ""
                                )}
                            </span>

                            <span class="market-change ${changeClass}">
                                ${escapeHTML(changeText)}
                            </span>

                        </div>
                    `;
                }).join("");

            if (updated) {
                updated.textContent =
                    "Güncellendi";
            }

        } catch (error) {

            console.error(
                "Piyasa verisi yüklenemedi:",
                error
            );

            container.innerHTML =
                `<div class="market-loading">
                    Piyasa verisi şu anda alınamıyor.
                </div>`;
        }
    }

    /* =====================================================
       BİLDİRİM
    ===================================================== */

    function setupNotifications() {
        const button =
            document.getElementById(
                "notificationBtn"
            );

        if (!button) return;

        button.addEventListener(
            "click",
            async function () {

                try {

                    if (
                        window.OneSignal &&
                        typeof OneSignal.Slidedown?.promptPush
                            === "function"
                    ) {
                        await OneSignal.Slidedown.promptPush();
                        return;
                    }

                    if (
                        "Notification" in window &&
                        Notification.permission ===
                            "default"
                    ) {
                        await Notification.requestPermission();
                    }

                } catch (error) {
                    console.error(
                        "Bildirim isteği:",
                        error
                    );
                }
            }
        );
    }

    /* =====================================================
       ÇEREZ
    ===================================================== */

    function setupCookie() {
        const box =
            document.getElementById("cookieBox");

        const button =
            document.getElementById(
                "cookieAccept"
            );

        if (!box || !button) return;

        const accepted =
            localStorage.getItem(
                "haberista_cookie"
            );

        if (accepted === "1") {
            box.style.display = "none";
        }

        button.addEventListener(
            "click",
            function () {
                localStorage.setItem(
                    "haberista_cookie",
                    "1"
                );

                box.style.display = "none";
            }
        );
    }

    /* =====================================================
       BAŞLAT
    ===================================================== */

    function init() {

        renderBreakingNews();

        renderHero(0);

        renderNews(
            haberlerData.slice(0, 12)
        );

        setupHeroControls();

        setupSearch();

        setupMobileMenu();

        setupNotifications();

        setupCookie();

        loadMarket();

        startHeroTimer();
    }

    /* =====================================================
       DOM READY
    ===================================================== */

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
