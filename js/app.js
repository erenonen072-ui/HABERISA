"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /*
     * ÖNEMLİ:
     * Haber verileri doğrudan haberler.js'den alınır.
     * haberler.js değiştirilmez.
     */

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];


    /* =========================
       YARDIMCI FONKSİYONLAR
    ========================= */

    function escapeHtml(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function haberUrl(haber) {

        /*
         * Mevcut haberler.js içindeki slug fonksiyonunu kullan.
         */

        if (
            typeof window.slugOlustur === "function"
        ) {

            const slug =
                window.slugOlustur(haber);

            return "haber.html?slug=" +
                encodeURIComponent(slug);

        }


        /*
         * Fallback.
         */

        let slug =
            String(haber.baslik || "")
                .toLocaleLowerCase("tr-TR")
                .replace(/ğ/g, "g")
                .replace(/ü/g, "u")
                .replace(/ş/g, "s")
                .replace(/ı/g, "i")
                .replace(/ö/g, "o")
                .replace(/ç/g, "c")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

        return "haber.html?slug=" +
            encodeURIComponent(slug);

    }


    /* =========================
       MOBİL MENÜ
    ========================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuBtn && mainNav) {

        menuBtn.addEventListener(
            "click",
            function () {

                mainNav.classList.toggle("active");

            }
        );

    }


    /* =========================
       ARAMA
    ========================= */

    const searchBtn =
        document.getElementById("searchBtn");

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");


    if (searchBtn && searchBox) {

        searchBtn.addEventListener(
            "click",
            function () {

                searchBox.classList.toggle("active");

                if (
                    searchBox.classList.contains("active") &&
                    searchInput
                ) {

                    setTimeout(
                        function () {
                            searchInput.focus();
                        },
                        100
                    );

                }

            }
        );

    }


    /* =========================
       HABER URL
    ========================= */

    function createNewsCard(haber) {

        return `
            <a
                class="news-card"
                href="${escapeHtml(haberUrl(haber))}"
            >

                <div class="news-card-image">

                    <img
                        src="${escapeHtml(
                            haber.gorsel ||
                            "images/logo.jpeg"
                        )}"
                        alt="${escapeHtml(
                            haber.baslik || "Haber"
                        )}"
                        loading="lazy"
                        onerror="
                            this.onerror=null;
                            this.src='images/logo.jpeg';
                        "
                    >

                </div>

                <div class="news-card-content">

                    <span class="news-card-category">
                        ${escapeHtml(
                            haber.kategori ||
                            "Haber"
                        )}
                    </span>

                    <h3 class="news-card-title">
                        ${escapeHtml(
                            haber.baslik || ""
                        )}
                    </h3>

                </div>

            </a>
        `;

    }


    /* =========================
       HABERLERİ GÖSTER
    ========================= */

    function renderNews(liste) {

        const grid =
            document.getElementById("newsGrid");

        if (!grid) return;


        if (!liste.length) {

            grid.innerHTML = `
                <div class="empty-state">
                    Aradığınız kriterlere uygun haber bulunamadı.
                </div>
            `;

            return;

        }


        grid.innerHTML =
            liste
                .slice(0, 12)
                .map(createNewsCard)
                .join("");

    }


    /* =========================
       ARAMA SONUÇLARI
    ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value
                        .trim()
                        .toLocaleLowerCase("tr-TR");


                const info =
                    document.getElementById(
                        "searchResultInfo"
                    );


                if (!query) {

                    renderNews(haberListesi);

                    if (info) {
                        info.textContent = "";
                    }

                    return;

                }


                const sonuçlar =
                    haberListesi.filter(
                        function (haber) {

                            const aranacakMetin = [

                                haber.baslik,
                                haber.spot,
                                haber.kategori,
                                haber.yazar,
                                haber.kaynak,
                                haber.seo

                            ]
                                .join(" ")
                                .toLocaleLowerCase(
                                    "tr-TR"
                                );


                            return aranacakMetin
                                .includes(query);

                        }
                    );


                renderNews(sonuçlar);


                if (info) {

                    info.textContent =
                        `${sonuçlar.length} haber bulundu`;

                }

            }
        );

    }


    /* =========================
       SON DAKİKA
    ========================= */

    const breakingNews =
        document.getElementById(
            "breakingNews"
        );


    if (breakingNews) {

        const sonBes =
            haberListesi.slice(0, 5);


        breakingNews.innerHTML =
            sonBes
                .map(
                    function (haber) {

                        return `
                            <a
                                class="breaking-item"
                                href="${escapeHtml(
                                    haberUrl(haber)
                                )}"
                            >

                                <span class="breaking-dot"></span>

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


    /* =========================
       20 MANŞET
    ========================= */

    const manşetler =
        haberListesi.slice(0, 20);


    let aktifManşet = 0;


    const heroMain =
        document.getElementById(
            "heroMain"
        );

    const heroNumbers =
        document.getElementById(
            "heroNumbers"
        );


    function renderHeroNumbers() {

        if (!heroNumbers) return;


        heroNumbers.innerHTML =
            manşetler
                .map(
                    function (haber, index) {

                        return `
                            <button
                                type="button"
                                class="hero-number ${
                                    index === aktifManşet
                                        ? "active"
                                        : ""
                                }"
                                data-index="${index}"
                                aria-label="${
                                    index + 1
                                }. manşet"
                            >
                                ${index + 1}
                            </button>
                        `;

                    }
                )
                .join("");


        heroNumbers
            .querySelectorAll(".hero-number")
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            aktifManşet =
                                Number(
                                    button.dataset.index
                                );

                            renderHero();

                        }
                    );

                }
            );

    }


    function renderHero() {

        if (
            !heroMain ||
            !manşetler.length
        ) {
            return;
        }


        const haber =
            manşetler[aktifManşet];


        heroMain.innerHTML = `

            <a
                class="hero-main-link"
                href="${escapeHtml(
                    haberUrl(haber)
                )}"
            >

                <div class="hero-image">

                    <img
                        src="${escapeHtml(
                            haber.gorsel ||
                            "images/logo.jpeg"
                        )}"
                        alt="${escapeHtml(
                            haber.baslik ||
                            "Manşet haberi"
                        )}"
                        onerror="
                            this.onerror=null;
                            this.src='images/logo.jpeg';
                        "
                    >

                </div>


                <div class="hero-overlay"></div>


                <div class="hero-content">

                    <div class="hero-meta">

                        <span class="hero-category">
                            ${escapeHtml(
                                haber.kategori ||
                                "Haber"
                            )}
                        </span>

                        ${
                            haber.tarih
                                ? `
                                    <span class="hero-date">
                                        ${escapeHtml(
                                            haber.tarih
                                        )}
                                    </span>
                                `
                                : ""
                        }

                    </div>


                    <h1 class="hero-title">
                        ${escapeHtml(
                            haber.baslik || ""
                        )}
                    </h1>


                    ${
                        haber.spot
                            ? `
                                <p class="hero-description">
                                    ${escapeHtml(
                                        haber.spot
                                    )}
                                </p>
                            `
                            : ""
                    }

                </div>

            </a>

        `;


        renderHeroNumbers();

    }


    /* =========================
       HERO BUTONLARI
    ========================= */

    const heroPrev =
        document.getElementById("heroPrev");

    const heroNext =
        document.getElementById("heroNext");


    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            function () {

                if (!manşetler.length) return;

                aktifManşet--;

                if (aktifManşet < 0) {
                    aktifManşet =
                        manşetler.length - 1;
                }

                renderHero();

            }
        );

    }


    if (heroNext) {

        heroNext.addEventListener(
            "click",
            function () {

                if (!manşetler.length) return;

                aktifManşet++;

                if (
                    aktifManşet >=
                    manşetler.length
                ) {
                    aktifManşet = 0;
                }

                renderHero();

            }
        );

    }


    /* =========================
       KLAVYE
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "ArrowLeft" &&
                heroPrev
            ) {
                heroPrev.click();
            }


            if (
                event.key === "ArrowRight" &&
                heroNext
            ) {
                heroNext.click();
            }

        }
    );


    /* =========================
       HERO TOUCH / SWIPE
    ========================= */

    let touchStartX = 0;


    if (heroMain) {

        heroMain.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        heroMain.addEventListener(
            "touchend",
            function (event) {

                const touchEndX =
                    event.changedTouches[0].screenX;

                const fark =
                    touchEndX - touchStartX;


                if (Math.abs(fark) < 50) {
                    return;
                }


                if (fark > 0) {

                    if (heroPrev) {
                        heroPrev.click();
                    }

                } else {

                    if (heroNext) {
                        heroNext.click();
                    }

                }

            },
            { passive: true }
        );

    }


    /* =========================
       ÇEREZ
    ========================= */

    const cookieBox =
        document.getElementById(
            "cookieBox"
        );

    const cookieAccept =
        document.getElementById(
            "cookieAccept"
        );


    if (cookieBox) {

        const kabul =
            localStorage.getItem(
                "haberista_cookie"
            );


        if (kabul !== "accepted") {

            cookieBox.classList.add("show");

            cookieBox.setAttribute(
                "aria-hidden",
                "false"
            );

        }

    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "haberista_cookie",
                    "accepted"
                );


                if (cookieBox) {

                    cookieBox.classList.remove(
                        "show"
                    );

                    cookieBox.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }

            }
        );

    }


    /* =========================
       BİLDİRİMLER
    ========================= */

    async function bildirimAc() {

        if (
            !window.OneSignalDeferred
        ) {
            return;
        }


        window.OneSignalDeferred.push(
            async function (OneSignal) {

                try {

                    if (
                        OneSignal.Slidedown &&
                        typeof
                        OneSignal.Slidedown.promptPush ===
                        "function"
                    ) {

                        await OneSignal
                            .Slidedown
                            .promptPush();

                    }

                } catch (error) {

                    console.warn(
                        "OneSignal:",
                        error
                    );

                }

            }
        );

    }


    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );


    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            bildirimAc
        );

    }


    /* =========================
       MARKET
    ========================= */

    const marketItems =
        document.getElementById(
            "marketItems"
        );


    if (marketItems) {

        /*
         * Sahte canlı veri kullanmıyoruz.
         * Mevcut market sistemi varsa onun
         * içine müdahale edilmez.
         */

        marketItems.innerHTML = "";

    }


    /* =========================
       BAŞLAT
    ========================= */

    renderHero();

    renderNews(
        haberListesi
    );

});
