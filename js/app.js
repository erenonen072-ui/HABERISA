"use strict";

/* =========================================================
   HABERİSTA - APP.JS
   Ana sayfa uygulama dosyası
========================================================= */

(function () {

    /* =====================================================
       TEMEL KONTROLLER
    ===================================================== */

    const haberler =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];

    if (!haberler.length) {
        console.warn("Haberİsta: Haber verisi bulunamadı.");
        return;
    }

    /* =====================================================
       YARDIMCI FONKSİYONLAR
    ===================================================== */

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function gorselYolu(gorsel) {
        if (!gorsel) {
            return "/images/gundem.jpeg";
        }

        const yol = String(gorsel).trim();

        if (
            yol.startsWith("http://") ||
            yol.startsWith("https://") ||
            yol.startsWith("/")
        ) {
            return yol;
        }

        return "/" + yol.replace(/^\/+/, "");
    }

    function haberUrl(haber) {
        if (!haber) return "#";

        if (haber.url) {
            return haber.url;
        }

        if (haber.slug) {
            return "/haber/" + haber.slug;
        }

        if (typeof window.slugOlustur === "function") {
            return "/haber/" + window.slugOlustur(haber.baslik);
        }

        return "#";
    }

    function haberTarihi(haber) {
        if (!haber) return "";

        if (haber.tarih && haber.saat) {
            return `${haber.tarih} • ${haber.saat}`;
        }

        return haber.tarih || haber.saat || "";
    }

    function siraliHaberler() {
        return [...haberler].sort(function (a, b) {

            const tarihA = new Date(
                a.publishedAt ||
                `${a.tarih || ""} ${a.saat || ""}`
            ).getTime();

            const tarihB = new Date(
                b.publishedAt ||
                `${b.tarih || ""} ${b.saat || ""}`
            ).getTime();

            if (!Number.isNaN(tarihA) && !Number.isNaN(tarihB)) {
                return tarihB - tarihA;
            }

            return Number(b.id || 0) - Number(a.id || 0);
        });
    }

    function mansetHaberleri() {
        return siraliHaberler().slice(0, 10);
    }

    /* =====================================================
       MANŞET
    ===================================================== */

    let aktifManset = 0;
    let heroTimer = null;

    window.renderHero = function () {

        const heroMain = document.getElementById("heroMain");

        if (!heroMain) {
            console.warn("Haberİsta: #heroMain bulunamadı.");
            return;
        }

        const liste = mansetHaberleri();

        if (!liste.length) {
            heroMain.innerHTML = "";
            return;
        }

        /*
         * Sayı alanı ayrı tutuluyor.
         * Böylece sayılar görselin üzerinde/havada kalmıyor.
         */

        let heroNumbers = document.getElementById("heroNumbers");

        if (!heroNumbers) {
            heroNumbers = document.createElement("div");
            heroNumbers.id = "heroNumbers";

            if (heroMain.parentNode) {
                heroMain.parentNode.insertBefore(
                    heroNumbers,
                    heroMain.nextSibling
                );
            }
        }

        function goster(index) {

            aktifManset =
                (index + liste.length) % liste.length;

            const haber = liste[aktifManset];

            heroMain.innerHTML = `
                <article class="hero-slide">

                    <a
                        class="hero-slide-link"
                        href="${escapeHtml(haberUrl(haber))}"
                        aria-label="${escapeHtml(haber.baslik)}"
                    >

                        <img
                            class="hero-image"
                            src="${escapeHtml(gorselYolu(haber.gorsel))}"
                            alt="${escapeHtml(haber.baslik)}"
                            ${aktifManset === 0 ? 'loading="eager"' : 'loading="lazy"'}
                        >

                        <div class="hero-overlay">

                            <div class="hero-category">
                                ${escapeHtml(haber.kategori || "Gündem")}
                            </div>

                            <h2>
                                ${escapeHtml(haber.baslik)}
                            </h2>

                            ${
                                haber.spot
                                    ? `
                                        <p class="hero-spot">
                                            ${escapeHtml(haber.spot)}
                                        </p>
                                      `
                                    : ""
                            }

                            <div class="hero-meta">
                                ${escapeHtml(haberTarihi(haber))}
                            </div>

                        </div>

                    </a>

                    <button
                        type="button"
                        class="hero-arrow hero-prev"
                        aria-label="Önceki haber"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        class="hero-arrow hero-next"
                        aria-label="Sonraki haber"
                    >
                        ›
                    </button>

                </article>
            `;

            /* ---------------------------------------------
               NUMARALAR
            --------------------------------------------- */

            heroNumbers.innerHTML = `
                <div class="hero-numbers">

                    ${liste.map(function (_, i) {

                        return `
                            <button
                                type="button"
                                class="hero-number ${
                                    i === aktifManset ? "active" : ""
                                }"
                                data-manset="${i}"
                                aria-label="${i + 1}. manşet"
                            >
                                ${i + 1}
                            </button>
                        `;

                    }).join("")}

                </div>
            `;

            /* ---------------------------------------------
               ÖNCEKİ / SONRAKİ OKLAR
            --------------------------------------------- */

            const prev =
                heroMain.querySelector(".hero-prev");

            const next =
                heroMain.querySelector(".hero-next");

            if (prev) {

                prev.addEventListener("click", function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(aktifManset - 1);
                    zamanlayiciyiYenile();

                });

            }

            if (next) {

                next.addEventListener("click", function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(aktifManset + 1);
                    zamanlayiciyiYenile();

                });

            }

            /* ---------------------------------------------
               NUMARA TIKLAMALARI
            --------------------------------------------- */

            heroNumbers
                .querySelectorAll(".hero-number")
                .forEach(function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const index =
                                Number(
                                    button.dataset.manset
                                );

                            goster(index);
                            zamanlayiciyiYenile();

                        }
                    );

                });

        }

        function zamanlayiciyiYenile() {

            if (heroTimer) {
                clearInterval(heroTimer);
            }

            heroTimer = setInterval(function () {
                goster(aktifManset + 1);
            }, 6500);

        }

        goster(aktifManset);
        zamanlayiciyiYenile();

    };


    /* =====================================================
       SON HABERLER
    ===================================================== */

    window.renderNews = function () {

        const newsGrid =
            document.getElementById("newsGrid");

        if (!newsGrid) {
            console.warn("Haberİsta: #newsGrid bulunamadı.");
            return;
        }

        const liste =
            siraliHaberler().slice(0, 20);

        newsGrid.innerHTML = liste.map(function (haber) {

            return `
                <article class="news-card">

                    <a
                        href="${escapeHtml(haberUrl(haber))}"
                        class="news-card-link"
                    >

                        <div class="news-image-wrap">

                            <img
                                class="news-image"
                                src="${escapeHtml(gorselYolu(haber.gorsel))}"
                                alt="${escapeHtml(haber.baslik)}"
                                loading="lazy"
                            >

                            <span class="news-category">
                                ${escapeHtml(haber.kategori || "Gündem")}
                            </span>

                        </div>

                        <div class="news-content">

                            <div class="news-date">
                                ${escapeHtml(haberTarihi(haber))}
                            </div>

                            <h2 class="news-title">
                                ${escapeHtml(haber.baslik)}
                            </h2>

                            ${
                                haber.spot
                                    ? `
                                        <p class="news-spot">
                                            ${escapeHtml(haber.spot)}
                                        </p>
                                      `
                                    : ""
                            }

                            <span class="news-read-more">
                                Haberin devamı
                                <span>→</span>
                            </span>

                        </div>

                    </a>

                </article>
            `;

        }).join("");

    };


    /* =====================================================
       SON DAKİKA ŞERİDİ
    ===================================================== */

    window.renderBreaking = function () {

        const breaking =
            document.getElementById("breakingNews");

        if (!breaking) return;

        const liste =
            siraliHaberler().slice(0, 10);

        breaking.innerHTML = `
            <div class="breaking-inner">

                <div class="breaking-label">
                    <span class="breaking-dot"></span>
                    SON DAKİKA
                </div>

                <div class="breaking-track">

                    ${liste.map(function (haber) {

                        return `
                            <a
                                href="${escapeHtml(haberUrl(haber))}"
                                class="breaking-item"
                            >
                                ${escapeHtml(haber.baslik)}
                            </a>
                        `;

                    }).join("")}

                </div>

            </div>
        `;

    };


    /* =====================================================
       ARAMA
    ===================================================== */

    function haberAra(metin) {

        const arama =
            String(metin || "")
                .toLocaleLowerCase("tr-TR")
                .trim();

        if (!arama) {
            return [];
        }

        return siraliHaberler().filter(function (haber) {

            const alan =
                [
                    haber.baslik,
                    haber.spot,
                    haber.kategori,
                    haber.icerik
                ]
                .filter(Boolean)
                .join(" ")
                .toLocaleLowerCase("tr-TR");

            return alan.includes(arama);

        });

    }

    window.haberIstaArama = haberAra;


    /* =====================================================
       ARAMA KUTUSU
    ===================================================== */

    function aramaButonuKur() {

        const searchBtn =
            document.getElementById("searchBtn");

        const searchArea =
            document.querySelector(".search-area");

        if (!searchBtn || !searchArea) return;

        let input =
            document.getElementById("siteSearch");

        if (!input) {

            input = document.createElement("input");

            input.id = "siteSearch";
            input.type = "search";
            input.placeholder = "Haber ara...";
            input.autocomplete = "off";
            input.setAttribute(
                "aria-label",
                "Haber ara"
            );

            searchArea.appendChild(input);

        }

        function ara() {

            const metin = input.value.trim();

            if (!metin) {
                return;
            }

            const sonuclar =
                haberAra(metin);

            if (!sonuclar.length) {

                alert(
                    `"${metin}" için haber bulunamadı.`
                );

                return;
            }

            /*
             * Arama sonuçlarını haber kartlarına yansıt.
             */

            const newsGrid =
                document.getElementById("newsGrid");

            if (!newsGrid) return;

            newsGrid.innerHTML =
                sonuclar.slice(0, 20).map(function (haber) {

                    return `
                        <article class="news-card">

                            <a
                                href="${escapeHtml(haberUrl(haber))}"
                                class="news-card-link"
                            >

                                <div class="news-image-wrap">

                                    <img
                                        class="news-image"
                                        src="${escapeHtml(gorselYolu(haber.gorsel))}"
                                        alt="${escapeHtml(haber.baslik)}"
                                        loading="lazy"
                                    >

                                    <span class="news-category">
                                        ${escapeHtml(haber.kategori || "Gündem")}
                                    </span>

                                </div>

                                <div class="news-content">

                                    <div class="news-date">
                                        ${escapeHtml(haberTarihi(haber))}
                                    </div>

                                    <h2 class="news-title">
                                        ${escapeHtml(haber.baslik)}
                                    </h2>

                                    ${
                                        haber.spot
                                            ? `
                                                <p class="news-spot">
                                                    ${escapeHtml(haber.spot)}
                                                </p>
                                              `
                                            : ""
                                    }

                                    <span class="news-read-more">
                                        Haberin devamı →
                                    </span>

                                </div>

                            </a>

                        </article>
                    `;

                }).join("");

            newsGrid.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        searchBtn.addEventListener(
            "click",
            ara
        );

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    ara();
                }

            }
        );

    }


    /* =====================================================
       GELİŞMİŞ ARAMA
    ===================================================== */

    function gelismisAramaKur() {

        const input =
            document.getElementById("siteSearch");

        if (!input) return;

        let timeout = null;

        input.addEventListener(
            "input",
            function () {

                clearTimeout(timeout);

                const metin =
                    input.value.trim();

                if (metin.length < 2) {
                    return;
                }

                timeout = setTimeout(
                    function () {

                        const sonuc =
                            haberAra(metin);

                        console.log(
                            "Haberİsta arama:",
                            sonuc.length,
                            "sonuç"
                        );

                    },
                    250
                );

            }
        );

    }


    /* =====================================================
       BİLDİRİM BUTONU
    ===================================================== */

    function bildirimButonuKur() {

        const button =
            document.getElementById(
                "notificationBtn"
            );

        if (!button) return;

        button.addEventListener(
            "click",
            async function () {

                if (
                    !("Notification" in window)
                ) {

                    alert(
                        "Tarayıcınız bildirimleri desteklemiyor."
                    );

                    return;
                }

                if (
                    Notification.permission ===
                    "granted"
                ) {

                    new Notification(
                        "Haberİsta",
                        {
                            body:
                                "Bildirimler zaten açık."
                        }
                    );

                    return;
                }

                if (
                    Notification.permission ===
                    "denied"
                ) {

                    alert(
                        "Bildirimler tarayıcı tarafından engellenmiş. Tarayıcı ayarlarından izin verebilirsiniz."
                    );

                    return;
                }

                try {

                    const izin =
                        await Notification.requestPermission();

                    if (izin === "granted") {

                        new Notification(
                            "Haberİsta",
                            {
                                body:
                                    "Son dakika haberlerinden haberdar olacaksınız."
                            }
                        );

                        button.classList.add(
                            "notification-active"
                        );

                    }

                } catch (error) {

                    console.warn(
                        "Bildirim izni alınamadı:",
                        error
                    );

                }

            }
        );

    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    function mobilMenuKur() {

        const nav =
            document.querySelector(
                ".category-nav"
            );

        if (!nav) return;

        let button =
            document.getElementById(
                "mobileMenuBtn"
            );

        if (!button) {

            button =
                document.createElement("button");

            button.id = "mobileMenuBtn";
            button.type = "button";
            button.className = "mobile-menu-btn";
            button.setAttribute(
                "aria-label",
                "Menüyü aç"
            );
            button.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            const headerInner =
                document.querySelector(
                    ".header-inner"
                );

            if (headerInner) {
                headerInner.appendChild(button);
            }

        }

        button.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "mobile-open"
                );

                button.classList.toggle(
                    "active"
                );

            }
        );

        nav.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove(
                            "mobile-open"
                        );

                        button.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       HEADER
    ===================================================== */

    function headerKur() {

        const header =
            document.querySelector(
                ".site-header"
            );

        if (!header) return;

        let sonScroll = 0;

        window.addEventListener(
            "scroll",
            function () {

                const scroll =
                    window.scrollY || 0;

                if (scroll > 20) {
                    header.classList.add(
                        "header-scrolled"
                    );
                } else {
                    header.classList.remove(
                        "header-scrolled"
                    );
                }

                sonScroll = scroll;

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       KATEGORİ MENÜLERİ
    ===================================================== */

    function kategoriLinkleriniKur() {

        const links =
            document.querySelectorAll(
                ".category-nav a"
            );

        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const kategori =
                        link.dataset.kategori;

                    if (!kategori) {
                        return;
                    }

                    /*
                     * Eğer link gerçek bir sayfaya
                     * gidiyorsa normal davranışı koru.
                     */

                    if (
                        link.getAttribute("href") &&
                        link.getAttribute("href") !== "#"
                    ) {
                        return;
                    }

                    event.preventDefault();

                    const liste =
                        siraliHaberler()
                            .filter(function (haber) {
                                return (
                                    haber.kategori ===
                                    kategori
                                );
                            });

                    const newsGrid =
                        document.getElementById(
                            "newsGrid"
                        );

                    if (!newsGrid) return;

                    newsGrid.innerHTML =
                        liste.map(function (haber) {

                            return `
                                <article class="news-card">

                                    <a
                                        href="${escapeHtml(haberUrl(haber))}"
                                        class="news-card-link"
                                    >

                                        <div class="news-image-wrap">

                                            <img
                                                class="news-image"
                                                src="${escapeHtml(gorselYolu(haber.gorsel))}"
                                                alt="${escapeHtml(haber.baslik)}"
                                                loading="lazy"
                                            >

                                            <span class="news-category">
                                                ${escapeHtml(haber.kategori)}
                                            </span>

                                        </div>

                                        <div class="news-content">

                                            <div class="news-date">
                                                ${escapeHtml(haberTarihi(haber))}
                                            </div>

                                            <h2 class="news-title">
                                                ${escapeHtml(haber.baslik)}
                                            </h2>

                                            ${
                                                haber.spot
                                                    ? `
                                                        <p class="news-spot">
                                                            ${escapeHtml(haber.spot)}
                                                        </p>
                                                      `
                                                    : ""
                                            }

                                            <span class="news-read-more">
                                                Haberin devamı →
                                            </span>

                                        </div>

                                    </a>

                                </article>
                            `;

                        }).join("");

                    newsGrid.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

    }


    /* =====================================================
       KLAVYE KONTROLLERİ
    ===================================================== */

    function klavyeKontrolleri() {

        document.addEventListener(
            "keydown",
            function (event) {

                /*
                 * Arama kutusunda yazıyorsa
                 * klavye kısayollarını çalıştırma.
                 */

                const aktif =
                    document.activeElement;

                if (
                    aktif &&
                    (
                        aktif.tagName === "INPUT" ||
                        aktif.tagName === "TEXTAREA"
                    )
                ) {
                    return;
                }

                if (event.key === "ArrowLeft") {

                    const prev =
                        document.querySelector(
                            ".hero-prev"
                        );

                    if (prev) {
                        prev.click();
                    }

                }

                if (event.key === "ArrowRight") {

                    const next =
                        document.querySelector(
                            ".hero-next"
                        );

                    if (next) {
                        next.click();
                    }

                }

            }
        );

    }


    /* =====================================================
       SAYFA BAŞLAT
    ===================================================== */

    function baslat() {

        console.log(
            "Haberİsta: %s haber başarıyla yüklendi.",
            haberler.length
        );

        renderHero();
        renderNews();
        renderBreaking();

        aramaButonuKur();
        gelismisAramaKur();
        bildirimButonuKur();
        mobilMenuKur();
        headerKur();
        kategoriLinkleriniKur();
        klavyeKontrolleri();

    }


    /* =====================================================
       DOM HAZIR
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
