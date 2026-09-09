"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       HABERİSTA - ANA UYGULAMA
       Haber kaynağı: js/haberler.js
       ========================================================= */

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    /* ---------------------------------------------------------
       YARDIMCI FONKSİYONLAR
       --------------------------------------------------------- */

    function escapeHtml(value) {
        if (value === null || value === undefined) return "";

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function slugOlusturLocal(haber) {
        if (typeof window.slugOlustur === "function") {
            return window.slugOlustur(haber);
        }

        const text = String(haber?.baslik || "")
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        return text || `haber-${haber?.id || ""}`;
    }

    function haberUrl(haber) {
        if (!haber) return "#";

        const slug = slugOlusturLocal(haber);

        /*
         * Mevcut Haberİsta yapısındaki haber.html sistemiyle uyumlu.
         */
        return `haber.html?slug=${encodeURIComponent(slug)}`;
    }

    function formatTarih(haber) {
        if (!haber) return "";

        const tarih = haber.tarih || "";
        const saat = haber.saat || "";

        if (tarih && saat) {
            return `${tarih} ${saat}`;
        }

        return tarih || saat || "";
    }

    /* =========================================================
       MOBİL MENÜ
       ========================================================= */

    const menuBtn = document.getElementById("menuBtn");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            document.body.classList.toggle("menu-open");
            menuBtn.classList.toggle("active");

            const menu = document.querySelector(".main-nav");

            if (menu) {
                menu.classList.toggle("active");
            }
        });
    }

    document.querySelectorAll(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("menu-open");

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }

            const menu = document.querySelector(".main-nav");

            if (menu) {
                menu.classList.remove("active");
            }
        });
    });

    /* =========================================================
       ARAMA
       ========================================================= */

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");

    if (searchBtn && searchBox) {
        searchBtn.addEventListener("click", () => {
            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active") && searchInput) {
                setTimeout(() => {
                    searchInput.focus();
                }, 100);
            }
        });
    }

    function renderSearchResults(query) {
        const newsGrid = document.getElementById("newsGrid");
        const resultInfo = document.getElementById("searchResultInfo");

        if (!newsGrid) return;

        const temizQuery = query.trim().toLocaleLowerCase("tr-TR");

        if (!temizQuery) {
            renderLatestNews();
            if (resultInfo) resultInfo.textContent = "";
            return;
        }

        const sonuclar = haberListesi.filter((haber) => {
            const aranacakAlanlar = [
                haber.baslik,
                haber.spot,
                haber.kategori,
                haber.yazar,
                haber.kaynak,
                haber.seo
            ];

            return aranacakAlanlar.some((alan) =>
                String(alan || "")
                    .toLocaleLowerCase("tr-TR")
                    .includes(temizQuery)
            );
        });

        if (resultInfo) {
            resultInfo.textContent =
                `${sonuclar.length} haber bulundu`;
        }

        if (!sonuclar.length) {
            newsGrid.innerHTML = `
                <div class="empty-state">
                    <strong>Haber bulunamadı.</strong>
                    <span>Farklı bir kelime veya başlık deneyin.</span>
                </div>
            `;
            return;
        }

        newsGrid.innerHTML = sonuclar
            .map(createNewsCard)
            .join("");
    }

    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            renderSearchResults(event.target.value);
        });

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                searchInput.value = "";

                if (searchBox) {
                    searchBox.classList.remove("active");
                }

                renderLatestNews();
            }

            if (event.key === "Enter") {
                renderSearchResults(searchInput.value);
            }
        });
    }

    /* =========================================================
       HABER KARTI
       Sadece:
       - Görsel
       - Kategori
       - Başlık
       Tüm kart tıklanabilir.
       ========================================================= */

    function createNewsCard(haber) {
        const image =
            haber.gorsel ||
            "images/logo.jpeg";

        const category =
            haber.kategori ||
            "Haber";

        const title =
            haber.baslik ||
            "Başlıksız haber";

        return `
            <a
                class="news-card"
                href="${escapeHtml(haberUrl(haber))}"
                aria-label="${escapeHtml(title)}"
            >
                <div class="news-card-image">
                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(title)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='images/logo.jpeg';"
                    >
                </div>

                <div class="news-card-content">
                    <span class="news-card-category">
                        ${escapeHtml(category)}
                    </span>

                    <h3 class="news-card-title">
                        ${escapeHtml(title)}
                    </h3>
                </div>
            </a>
        `;
    }

    /* =========================================================
       SON HABERLER
       ========================================================= */

    function renderLatestNews() {
        const newsGrid = document.getElementById("newsGrid");

        if (!newsGrid) return;

        const latest = haberListesi.slice(0, 12);

        if (!latest.length) {
            newsGrid.innerHTML = `
                <div class="empty-state">
                    <strong>Henüz haber bulunmuyor.</strong>
                </div>
            `;
            return;
        }

        newsGrid.innerHTML = latest
            .map(createNewsCard)
            .join("");
    }

    /* =========================================================
       SON DAKİKA
       İlk 5 haber
       ========================================================= */

    function renderBreakingNews() {
        const breakingNews = document.getElementById("breakingNews");

        if (!breakingNews) return;

        const latestFive = haberListesi.slice(0, 5);

        breakingNews.innerHTML = latestFive
            .map((haber) => {
                return `
                    <a
                        href="${escapeHtml(haberUrl(haber))}"
                        class="breaking-item"
                    >
                        <span class="breaking-dot"></span>
                        <span>
                            ${escapeHtml(haber.baslik)}
                        </span>
                    </a>
                `;
            })
            .join("");
    }

    /* =========================================================
       MANŞET
       1-20 ARASI
       ========================================================= */

    const mansetler = haberListesi.slice(0, 20);
    let currentHeroIndex = 0;

    const heroMain = document.getElementById("heroMain");
    const heroPrev = document.getElementById("heroPrev");
    const heroNext = document.getElementById("heroNext");
    const heroNumbers = document.getElementById("heroNumbers");

    function renderHeroNumbers() {
        if (!heroNumbers) return;

        heroNumbers.innerHTML = mansetler
            .map((haber, index) => {
                return `
                    <button
                        type="button"
                        class="hero-number ${
                            index === currentHeroIndex ? "active" : ""
                        }"
                        data-index="${index}"
                        aria-label="${index + 1}. manşeti göster"
                    >
                        ${index + 1}
                    </button>
                `;
            })
            .join("");

        heroNumbers
            .querySelectorAll(".hero-number")
            .forEach((button) => {
                button.addEventListener("click", () => {
                    currentHeroIndex =
                        Number(button.dataset.index) || 0;

                    renderHero();
                });
            });
    }

    function renderHero() {
        if (!heroMain || !mansetler.length) return;

        const haber = mansetler[currentHeroIndex];

        if (!haber) return;

        const image =
            haber.gorsel ||
            "images/logo.jpeg";

        const category =
            haber.kategori ||
            "Haber";

        const title =
            haber.baslik ||
            "";

        const date =
            formatTarih(haber);

        const spot =
            haber.spot ||
            "";

        heroMain.innerHTML = `
            <a
                href="${escapeHtml(haberUrl(haber))}"
                class="hero-main-link"
                aria-label="${escapeHtml(title)}"
            >
                <div class="hero-image">
                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(title)}"
                        onerror="this.onerror=null;this.src='images/logo.jpeg';"
                    >
                </div>

                <div class="hero-overlay"></div>

                <div class="hero-content">
                    <div class="hero-meta">
                        <span class="hero-category">
                            ${escapeHtml(category)}
                        </span>

                        ${
                            date
                                ? `<span class="hero-date">${escapeHtml(date)}</span>`
                                : ""
                        }
                    </div>

                    <h1 class="hero-title">
                        ${escapeHtml(title)}
                    </h1>

                    ${
                        spot
                            ? `
                                <p class="hero-description">
                                    ${escapeHtml(spot)}
                                </p>
                            `
                            : ""
                    }
                </div>
            </a>
        `;

        renderHeroNumbers();
        renderHeroSideButtons();
    }

    function renderHeroSideButtons() {
        if (heroPrev) {
            heroPrev.disabled = mansetler.length <= 1;
        }

        if (heroNext) {
            heroNext.disabled = mansetler.length <= 1;
        }
    }

    function heroPrevious() {
        if (!mansetler.length) return;

        currentHeroIndex =
            currentHeroIndex <= 0
                ? mansetler.length - 1
                : currentHeroIndex - 1;

        renderHero();
    }

    function heroNextSlide() {
        if (!mansetler.length) return;

        currentHeroIndex =
            currentHeroIndex >= mansetler.length - 1
                ? 0
                : currentHeroIndex + 1;

        renderHero();
    }

    if (heroPrev) {
        heroPrev.addEventListener("click", heroPrevious);
    }

    if (heroNext) {
        heroNext.addEventListener("click", heroNextSlide);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            heroPrevious();
        }

        if (event.key === "ArrowRight") {
            heroNextSlide();
        }
    });

    /* =========================================================
       HERO MOBİL SWIPE
       ========================================================= */

    let touchStartX = 0;
    let touchEndX = 0;

    if (heroMain) {
        heroMain.addEventListener(
            "touchstart",
            (event) => {
                touchStartX =
                    event.changedTouches[0].screenX;
            },
            { passive: true }
        );

        heroMain.addEventListener(
            "touchend",
            (event) => {
                touchEndX =
                    event.changedTouches[0].screenX;

                const difference =
                    touchEndX - touchStartX;

                if (Math.abs(difference) < 50) return;

                if (difference > 0) {
                    heroPrevious();
                } else {
                    heroNextSlide();
                }
            },
            { passive: true }
        );
    }

    /* =========================================================
       KATEGORİ LİNKLERİ
       ========================================================= */

    document.querySelectorAll("[data-category]").forEach((element) => {
        element.addEventListener("click", () => {
            const category =
                element.dataset.category;

            if (!category) return;

            const filtered = haberListesi.filter(
                (haber) =>
                    String(haber.kategori || "")
                        .toLocaleLowerCase("tr-TR") ===
                    String(category)
                        .toLocaleLowerCase("tr-TR")
            );

            const newsGrid =
                document.getElementById("newsGrid");

            if (!newsGrid) return;

            newsGrid.innerHTML = filtered.length
                ? filtered.map(createNewsCard).join("")
                : `
                    <div class="empty-state">
                        <strong>
                            Bu kategoride haber bulunamadı.
                        </strong>
                    </div>
                `;
        });
    });

    /* =========================================================
       ÇEREZ BİLDİRİMİ
       SAYFA AÇILIR AÇILMAZ
       ========================================================= */

    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");

    function showCookieNoticeImmediately() {
        if (!cookieBox) return;

        const accepted =
            localStorage.getItem("haberista_cookie");

        if (accepted === "accepted") {
            cookieBox.classList.remove("show");
            cookieBox.setAttribute("aria-hidden", "true");
            return;
        }

        /*
         * Daha önce kabul edilmemişse doğrudan göster.
         */
        cookieBox.classList.add("show");
        cookieBox.setAttribute("aria-hidden", "false");
    }

    if (cookieAccept) {
        cookieAccept.addEventListener("click", () => {
            localStorage.setItem(
                "haberista_cookie",
                "accepted"
            );

            if (cookieBox) {
                cookieBox.classList.remove("show");
                cookieBox.setAttribute(
                    "aria-hidden",
                    "true"
                );
            }
        });
    }

    /*
     * DOM hazır olur olmaz çalıştır.
     */
    showCookieNoticeImmediately();

    /* =========================================================
       BİLDİRİM İZNİ
       SAYFA AÇILDIKTAN HEMEN SONRA
       ========================================================= */

    const notificationBtn =
        document.getElementById("notificationBtn");

    async function requestNotificationPermission() {
        /*
         * OneSignal yüklenmesini bekle.
         */
        if (!window.OneSignalDeferred) {
            return;
        }

        window.OneSignalDeferred.push(
            async function (OneSignal) {
                try {
                    /*
                     * Bildirim zaten verilmişse tekrar isteme.
                     */
                    if (
                        OneSignal.Notifications &&
                        typeof OneSignal.Notifications.permissionNative !==
                            "undefined"
                    ) {
                        if (
                            OneSignal.Notifications.permissionNative ===
                            true
                        ) {
                            return;
                        }
                    }

                    /*
                     * Slidedown ile izin penceresini aç.
                     */
                    if (
                        OneSignal.Slidedown &&
                        typeof OneSignal.Slidedown.promptPush ===
                            "function"
                    ) {
                        await OneSignal.Slidedown.promptPush();
                    }
                } catch (error) {
                    console.warn(
                        "OneSignal bildirim izni açılamadı:",
                        error
                    );
                }
            }
        );
    }

    /*
     * Ana sayfa açıldığında bildirimi tetikle.
     * Çok küçük bir gecikme tarayıcının DOM/OneSignal
     * başlangıcını tamamlamasına yardımcı olur.
     */
    setTimeout(() => {
        requestNotificationPermission();
    }, 300);

    /*
     * Header'daki bildirim butonu da çalışsın.
     */
    if (notificationBtn) {
        notificationBtn.addEventListener(
            "click",
            () => {
                requestNotificationPermission();
            }
        );
    }

    /* =========================================================
       MARKET / EKONOMİ ŞERİDİ
       HTML mevcutsa temel yapı korunur.
       ========================================================= */

    const marketItems =
        document.getElementById("marketItems");

    const marketUpdated =
        document.getElementById("marketUpdated");

    if (marketItems) {
        /*
         * Burada sahte canlı veri üretmiyoruz.
         * Mevcut market veri kaynağı varsa kullanılabilir.
         */
        if (!marketItems.innerHTML.trim()) {
            marketItems.innerHTML = `
                <div class="market-empty">
                    Piyasa verileri yükleniyor...
                </div>
            `;
        }
    }

    if (marketUpdated) {
        marketUpdated.textContent =
            "Güncelleniyor";
    }

    /* =========================================================
       SAYFA BAŞLANGICI
       ========================================================= */

    renderBreakingNews();
    renderHero();
    renderLatestNews();

    /* =========================================================
       GÖRSEL HATA KONTROLÜ
       ========================================================= */

    document.querySelectorAll("img").forEach((image) => {
        image.addEventListener("error", () => {
            if (
                image.src.includes("images/logo.jpeg")
            ) {
                return;
            }

            image.src = "images/logo.jpeg";
        });
    });

    console.log(
        `Haberİsta hazır. ${haberListesi.length} haber yüklendi.`
    );
});
