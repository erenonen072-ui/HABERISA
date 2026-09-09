/* =========================================================
   HABERİSTA APP.JS
   TÜM HABERLER: haberler.js
   ========================================================= */

(function () {
    "use strict";

    /* =====================================================
       HABER KAYNAĞI
    ===================================================== */

    const haberListesi =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];

    const HERO_LIMIT = 20;
    const BREAKING_LIMIT = 5;

    const manşetler =
        haberListesi.slice(0, HERO_LIMIT);

    let aktifManşet = 0;

    /* =====================================================
       DOM
    ===================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const searchBtn =
        document.getElementById("searchBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    const searchResultInfo =
        document.getElementById("searchResultInfo");

    const breakingNews =
        document.getElementById("breakingNews");

    const heroPrev =
        document.getElementById("heroPrev");

    const heroMain =
        document.getElementById("heroMain");

    const heroNext =
        document.getElementById("heroNext");

    const heroNumbers =
        document.getElementById("heroNumbers");

    const newsGrid =
        document.getElementById("newsGrid");

    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");

    /* =====================================================
       GÜVENLİ HTML
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
       HABER URL
    ===================================================== */

    function haberURL(haber) {

        if (!haber) {
            return "#";
        }

        if (haber.url) {
            return haber.url;
        }

        if (haber.slug) {
            return "/haber/" +
                encodeURIComponent(haber.slug);
        }

        if (
            typeof window.slugOlustur ===
            "function"
        ) {
            try {

                const slug =
                    window.slugOlustur(haber);

                if (slug) {
                    return "/haber/" +
                        encodeURIComponent(slug);
                }

            } catch (error) {

                console.warn(
                    "Slug oluşturulamadı:",
                    error
                );

            }
        }

        if (
            haber.id !== undefined &&
            haber.id !== null
        ) {
            return "/haber/" +
                encodeURIComponent(
                    String(haber.id)
                );
        }

        return "#";
    }

    /* =====================================================
       GÖRSEL
    ===================================================== */

    function haberGorseli(haber) {

        return (
            haber?.gorsel ||
            haber?.gorselUrl ||
            haber?.image ||
            haber?.imageUrl ||
            "images/logo.jpeg"
        );
    }

    /* =====================================================
       TARİH
    ===================================================== */

    function haberTarihi(haber) {

        const tarih =
            haber?.tarih ||
            haber?.date ||
            "";

        const saat =
            haber?.saat ||
            haber?.time ||
            "";

        if (tarih && saat) {
            return `${tarih} ${saat}`;
        }

        return tarih || saat || "";
    }

    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function sonDakikaOlustur() {

        if (!breakingNews) {
            return;
        }

        const liste =
            haberListesi.slice(
                0,
                BREAKING_LIMIT
            );

        if (!liste.length) {

            breakingNews.innerHTML =
                `<span>Henüz haber bulunmuyor.</span>`;

            return;
        }

        const html =
            liste.map(function (haber) {

                return `
                    <a
                        class="breaking-item"
                        href="${escapeHTML(
                            haberURL(haber)
                        )}"
                    >
                        ${escapeHTML(
                            haber.baslik
                        )}
                    </a>
                `;

            }).join("");

        breakingNews.innerHTML = `
            <div class="breaking-track">

                <div class="breaking-group">
                    ${html}
                </div>

                <div
                    class="breaking-group"
                    aria-hidden="true"
                >
                    ${html}
                </div>

            </div>
        `;
    }

    /* =====================================================
       MANŞET
    ===================================================== */

    function manşetGoster(index) {

        if (!heroMain) {
            return;
        }

        if (!manşetler.length) {

            heroMain.innerHTML = `
                <div class="hero-empty">
                    Henüz manşet haberi bulunmuyor.
                </div>
            `;

            return;
        }

        if (index < 0) {
            index =
                manşetler.length - 1;
        }

        if (
            index >= manşetler.length
        ) {
            index = 0;
        }

        aktifManşet = index;

        const haber =
            manşetler[aktifManşet];

        const baslik =
            haber.baslik ||
            "Başlıksız haber";

        const spot =
            haber.spot || "";

        const kategori =
            haber.kategori ||
            "Haber";

        const gorsel =
            haberGorseli(haber);

        const tarih =
            haberTarihi(haber);

        const url =
            haberURL(haber);

        heroMain.innerHTML = `

            <a
                class="hero-slide-link"
                href="${escapeHTML(url)}"
            >

                <img
                    class="hero-image"
                    src="${escapeHTML(gorsel)}"
                    alt="${escapeHTML(baslik)}"
                    loading="eager"
                    decoding="async"
                    onerror="
                        this.onerror=null;
                        this.src='images/logo.jpeg';
                    "
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(kategori)}
                    </span>

                    <h2>
                        ${escapeHTML(baslik)}
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

                    ${
                        tarih
                            ? `
                                <div class="hero-meta">
                                    ${escapeHTML(tarih)}
                                </div>
                            `
                            : ""
                    }

                </div>

            </a>
        `;

        manşetNumaralariniGuncelle();
    }

    /* =====================================================
       MANŞET NUMARALARI
    ===================================================== */

    function manşetNumaralariniOlustur() {

        if (!heroNumbers) {
            return;
        }

        heroNumbers.innerHTML =
            manşetler.map(
                function (haber, index) {

                    return `
                        <button
                            type="button"
                            class="hero-number ${
                                index === aktifManşet
                                    ? "active"
                                    : ""
                            }"
                            data-hero-index="${index}"
                            aria-label="${
                                index + 1
                            }. manşet"
                            aria-current="${
                                index === aktifManşet
                                    ? "true"
                                    : "false"
                            }"
                        >
                            ${index + 1}
                        </button>
                    `;

                }
            ).join("");

        heroNumbers
            .querySelectorAll(
                "[data-hero-index]"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.getAttribute(
                                    "data-hero-index"
                                )
                            );

                        manşetGoster(index);

                    }
                );

            });
    }

    function manşetNumaralariniGuncelle() {

        if (!heroNumbers) {
            return;
        }

        heroNumbers
            .querySelectorAll(
                "[data-hero-index]"
            )
            .forEach(function (button) {

                const index =
                    Number(
                        button.getAttribute(
                            "data-hero-index"
                        )
                    );

                const aktif =
                    index === aktifManşet;

                button.classList.toggle(
                    "active",
                    aktif
                );

                button.setAttribute(
                    "aria-current",
                    aktif
                        ? "true"
                        : "false"
                );

            });
    }

    /* =====================================================
       MANŞET OKLARI
    ===================================================== */

    function oncekiManşet() {

        if (!manşetler.length) {
            return;
        }

        manşetGoster(
            aktifManşet - 1
        );
    }

    function sonrakiManşet() {

        if (!manşetler.length) {
            return;
        }

        manşetGoster(
            aktifManşet + 1
        );
    }

    heroPrev?.addEventListener(
        "click",
        oncekiManşet
    );

    heroNext?.addEventListener(
        "click",
        sonrakiManşet
    );

    /* =====================================================
       SON HABERLER
       SADECE GÖRSEL + KATEGORİ + BAŞLIK
    ===================================================== */

    function sonHaberleriOlustur(liste) {

        if (!newsGrid) {
            return;
        }

        if (!liste.length) {

            newsGrid.innerHTML = `
                <div class="news-empty">
                    Haber bulunamadı.
                </div>
            `;

            return;
        }

        newsGrid.innerHTML =
            liste.map(function (haber) {

                const baslik =
                    haber.baslik ||
                    "Başlıksız haber";

                const kategori =
                    haber.kategori ||
                    "Haber";

                const gorsel =
                    haberGorseli(haber);

                const url =
                    haberURL(haber);

                return `

                    <article
                        class="news-card"
                    >

                        <a
                            class="news-card-link"
                            href="${escapeHTML(url)}"
                            aria-label="${escapeHTML(
                                baslik
                            )}"
                        >

                            <div
                                class="news-image-wrap"
                            >

                                <img
                                    class="news-image"
                                    src="${escapeHTML(
                                        gorsel
                                    )}"
                                    alt="${escapeHTML(
                                        baslik
                                    )}"
                                    loading="lazy"
                                    decoding="async"
                                    onerror="
                                        this.onerror=null;
                                        this.src='images/logo.jpeg';
                                    "
                                >

                            </div>

                            <div
                                class="news-card-content"
                            >

                                <span
                                    class="news-category"
                                >
                                    ${escapeHTML(
                                        kategori
                                    )}
                                </span>

                                <h3>
                                    ${escapeHTML(
                                        baslik
                                    )}
                                </h3>

                            </div>

                        </a>

                    </article>

                `;

            }).join("");
    }

    /* =====================================================
       ARAMA
    ===================================================== */

    function haberAra(metin) {

        const arama =
            String(metin || "")
                .trim()
                .toLocaleLowerCase(
                    "tr-TR"
                );

        if (!arama) {

            if (searchResultInfo) {
                searchResultInfo.textContent =
                    "";
            }

            sonHaberleriOlustur(
                haberListesi
            );

            return;
        }

        const sonuc =
            haberListesi.filter(
                function (haber) {

                    const alanlar = [

                        haber.baslik,
                        haber.spot,
                        haber.kategori,
                        haber.yazar,
                        haber.kaynak,
                        haber.seo

                    ];

                    return alanlar.some(
                        function (alan) {

                            return String(
                                alan || ""
                            )
                                .toLocaleLowerCase(
                                    "tr-TR"
                                )
                                .includes(arama);

                        }
                    );

                }
            );

        if (searchResultInfo) {

            searchResultInfo.textContent =
                `${sonuc.length} haber bulundu.`;

        }

        sonHaberleriOlustur(
            sonuc
        );
    }

    /* =====================================================
       ARAMA BUTONU
    ===================================================== */

    searchBtn?.addEventListener(
        "click",
        function () {

            if (!searchBox) {
                return;
            }

            searchBox.classList.toggle(
                "active"
            );

            if (
                searchBox.classList.contains(
                    "active"
                )
            ) {

                setTimeout(
                    function () {
                        searchInput?.focus();
                    },
                    80
                );

            }

        }
    );

    searchInput?.addEventListener(
        "input",
        function () {

            haberAra(
                searchInput.value
            );

        }
    );

    searchInput?.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                searchInput.value =
                    "";

                haberAra("");

                searchBox?.classList.remove(
                    "active"
                );

            }

        }
    );

    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    menuBtn?.addEventListener(
        "click",
        function () {

            const acik =
                document.body.classList.toggle(
                    "menu-open"
                );

            menuBtn.setAttribute(
                "aria-expanded",
                acik
                    ? "true"
                    : "false"
            );

        }
    );

    document
        .querySelectorAll(
            ".category-nav a"
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

    /* =====================================================
       ÇEREZ
    ===================================================== */

    function cookieKontrol() {

        if (!cookieBox) {
            return;
        }

        const kabul =
            localStorage.getItem(
                "haberista_cookie"
            );

        if (
            kabul ===
            "accepted"
        ) {

            cookieBox.style.display =
                "none";

        } else {

            /*
             * Siteye ilk girişte göster.
             */

            cookieBox.style.display =
                "flex";
        }
    }

    cookieAccept?.addEventListener(
        "click",
        function () {

            localStorage.setItem(
                "haberista_cookie",
                "accepted"
            );

            if (cookieBox) {

                cookieBox.style.opacity =
                    "0";

                cookieBox.style.transform =
                    "translateY(15px)";

                setTimeout(
                    function () {

                        cookieBox.style.display =
                            "none";

                    },
                    220
                );

            }

        }
    );

    /* =====================================================
       ONESIGNAL
    ===================================================== */

    function bildirimIzniniIste() {

        if (
            !window.OneSignalDeferred ||
            !Array.isArray(
                window.OneSignalDeferred
            )
        ) {
            return;
        }

        window.OneSignalDeferred.push(
            async function (OneSignal) {

                try {

                    /*
                     * Kullanıcı daha önce izin verdiyse
                     * tekrar istemiyoruz.
                     */

                    const izin =
                        await OneSignal
                            .Notifications
                            .permissionNative();

                    if (izin === true) {
                        return;
                    }

                    /*
                     * OneSignal bildirim istemi.
                     */

                    await OneSignal
                        .Slidedown
                        .promptPush();

                } catch (error) {

                    console.warn(
                        "OneSignal bildirim istemi açılamadı:",
                        error
                    );

                }

            }
        );
    }

    /* =====================================================
       BİLDİRİM BUTONU
    ===================================================== */

    notificationBtn?.addEventListener(
        "click",
        function () {

            bildirimIzniniIste();

        }
    );

    /* =====================================================
       SWIPE
    ===================================================== */

    let touchStartX = 0;

    heroMain?.addEventListener(
        "touchstart",
        function (event) {

            if (
                event.touches.length
            ) {

                touchStartX =
                    event.touches[0]
                        .clientX;

            }

        },
        {
            passive: true
        }
    );

    heroMain?.addEventListener(
        "touchend",
        function (event) {

            if (
                !event.changedTouches.length
            ) {
                return;
            }

            const touchEndX =
                event.changedTouches[0]
                    .clientX;

            const fark =
                touchStartX -
                touchEndX;

            if (
                Math.abs(fark) < 50
            ) {
                return;
            }

            if (fark > 0) {
                sonrakiManşet();
            } else {
                oncekiManşet();
            }

        },
        {
            passive: true
        }
    );

    /* =====================================================
       KLAVYE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            const aktif =
                document.activeElement;

            if (
                aktif &&
                (
                    aktif.tagName ===
                        "INPUT" ||
                    aktif.tagName ===
                        "TEXTAREA"
                )
            ) {
                return;
            }

            if (
                event.key ===
                "ArrowLeft"
            ) {
                oncekiManşet();
            }

            if (
                event.key ===
                "ArrowRight"
            ) {
                sonrakiManşet();
            }

        }
    );

    /* =====================================================
       BAŞLANGIÇ
    ===================================================== */

    function baslat() {

        console.log(
            "Haberİsta:",
            haberListesi.length,
            "haber yüklendi."
        );

        /*
         * SON DAKİKA
         */

        sonDakikaOlustur();

        /*
         * MANŞET 1-20
         */

        manşetNumaralariniOlustur();

        manşetGoster(0);

        /*
         * SON HABERLER
         */

        sonHaberleriOlustur(
            haberListesi
        );

        /*
         * ÇEREZ
         */

        cookieKontrol();

        /*
         * BİLDİRİM
         *
         * OneSignal'ın yüklenmesi için
         * kısa süre bekliyoruz.
         */

        setTimeout(
            function () {
                bildirimIzniniIste();
            },
            1000
        );

        /*
         * URL ?q=arama
         */

        try {

            const params =
                new URLSearchParams(
                    window.location.search
                );

            const q =
                params.get("q");

            if (
                q &&
                searchInput
            ) {

                searchInput.value =
                    q;

                haberAra(q);

            }

        } catch (error) {

            console.warn(
                "URL parametresi okunamadı:",
                error
            );

        }
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
            baslat
        );

    } else {

        baslat();

    }

})();
