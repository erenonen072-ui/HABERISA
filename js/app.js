/* =========================================================
   HABERİSTA — PROFESYONEL ANA SAYFA MOTORU
   ========================================================= */

(function () {
    "use strict";

    if (
        typeof window === "undefined" ||
        !Array.isArray(window.haberler)
    ) {
        console.warn("Haberİsta: haberler.js bulunamadı.");
        return;
    }

    const haberler = window.haberler;

    let aktifManşet = 0;
    let mansetTimer = null;

    /* =====================================================
       GÜVENLİ HTML
       ===================================================== */

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* =====================================================
       GÖRSEL YOLU
       ===================================================== */

    function gorselYolu(gorsel) {
        const raw = String(gorsel || "").trim();

        if (!raw) {
            return "/images/logo.jpeg";
        }

        if (/^https?:\/\//i.test(raw)) {
            return raw;
        }

        if (raw.startsWith("/images/")) {
            return encodeURI(raw);
        }

        if (raw.startsWith("images/")) {
            return encodeURI("/" + raw);
        }

        if (raw.startsWith("./images/")) {
            return encodeURI(raw.replace("./", "/"));
        }

        if (raw.startsWith("/")) {
            return encodeURI(raw);
        }

        return encodeURI("/images/" + raw);
    }

    /* =====================================================
       HABER URL
       ===================================================== */

    function haberUrl(haber) {
        if (haber.url) {
            return haber.url;
        }

        if (haber.slug) {
            return "/haber/" + haber.slug;
        }

        return "#";
    }

    /* =====================================================
       HABERLERİ SIRALA
       ===================================================== */

    function siraliHaberler() {
        return haberler
            .slice()
            .sort(function (a, b) {
                return Number(b.id || 0) - Number(a.id || 0);
            });
    }

    /* =====================================================
       MANŞET HABERLER
       ===================================================== */

    function mansetHaberleri() {
        return siraliHaberler().slice(0, 10);
    }

    /* =====================================================
       MANŞET OLUŞTUR
       ===================================================== */

    window.renderHero = function () {
        const heroMain = document.getElementById("heroMain");

        if (!heroMain) {
            return;
        }

        const liste = mansetHaberleri();

        if (!liste.length) {
            heroMain.innerHTML = "";
            return;
        }

        if (aktifManşet >= liste.length) {
            aktifManşet = 0;
        }

        const haber = liste[aktifManşet];

        const baslik = escapeHtml(
            haber.baslik || "Haberİsta"
        );

        const kategori = escapeHtml(
            haber.kategori || "Gündem"
        );

        const image = gorselYolu(haber.gorsel);

        heroMain.innerHTML = `
            <article class="hero-slide">

                <a
                    class="hero-slide-link"
                    href="${haberUrl(haber)}"
                    aria-label="${baslik}"
                >

                    <img
                        class="hero-image"
                        src="${image}"
                        alt="${baslik}"
                        loading="eager"
                        decoding="async"
                        onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                    >

                    <div class="hero-overlay">

                        <div class="hero-category">
                            ${kategori}
                        </div>

                        <h2>
                            ${baslik}
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

                    </div>

                </a>

                <button
                    class="hero-arrow hero-prev"
                    type="button"
                    aria-label="Önceki haber"
                >
                    ‹
                </button>

                <button
                    class="hero-arrow hero-next"
                    type="button"
                    aria-label="Sonraki haber"
                >
                    ›
                </button>

            </article>

            <div
                class="hero-numbers"
                aria-label="Manşet haberleri"
            >
                ${liste
                    .map(function (item, index) {
                        return `
                            <button
                                class="hero-number ${
                                    index === aktifManşet
                                        ? "active"
                                        : ""
                                }"
                                type="button"
                                data-manset="${index}"
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
                    })
                    .join("")}
            </div>
        `;

        const prev =
            heroMain.querySelector(".hero-prev");

        const next =
            heroMain.querySelector(".hero-next");

        if (prev) {
            prev.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    oncekiManset();
                }
            );
        }

        if (next) {
            next.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    sonrakiManset();
                }
            );
        }

        heroMain
            .querySelectorAll(".hero-number")
            .forEach(function (button) {
                button.addEventListener(
                    "click",
                    function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        const index = Number(
                            button.dataset.manset
                        );

                        if (
                            Number.isInteger(index) &&
                            index >= 0 &&
                            index < liste.length
                        ) {
                            aktifManşet = index;
                            renderHero();
                            mansetOtomatikBaslat();
                        }
                    }
                );
            });
    };

    /* =====================================================
       ÖNCEKİ MANŞET
       ===================================================== */

    function oncekiManset() {
        const liste = mansetHaberleri();

        if (!liste.length) {
            return;
        }

        aktifManşet--;

        if (aktifManşet < 0) {
            aktifManşet = liste.length - 1;
        }

        renderHero();
        mansetOtomatikBaslat();
    }

    /* =====================================================
       SONRAKİ MANŞET
       ===================================================== */

    function sonrakiManset() {
        const liste = mansetHaberleri();

        if (!liste.length) {
            return;
        }

        aktifManşet++;

        if (aktifManşet >= liste.length) {
            aktifManşet = 0;
        }

        renderHero();
        mansetOtomatikBaslat();
    }

    /* =====================================================
       OTOMATİK MANŞET
       ===================================================== */

    function mansetOtomatikBaslat() {
        clearInterval(mansetTimer);

        mansetTimer = setInterval(
            function () {
                sonrakiManset();
            },
            6500
        );
    }

    /* =====================================================
       HABER KARTI
       ===================================================== */

    function haberKarti(haber) {
        const baslik = escapeHtml(
            haber.baslik || "Haberİsta"
        );

        const image = gorselYolu(
            haber.gorsel
        );

        return `
            <article
                class="news-card"
                data-id="${haber.id || ""}"
            >
                <a
                    class="news-card-link"
                    href="${haberUrl(haber)}"
                    aria-label="${baslik}"
                >

                    <div class="news-card-image">
                        <img
                            src="${image}"
                            alt="${baslik}"
                            loading="lazy"
                            decoding="async"
                            onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                        >
                    </div>

                    <div class="news-card-content">
                        <h3>${baslik}</h3>
                    </div>

                </a>
            </article>
        `;
    }

    /* =====================================================
       SON HABERLER
       ===================================================== */

    window.renderNews = function () {
        const container =
            document.getElementById("newsGrid");

        if (!container) {
            return;
        }

        const liste =
            siraliHaberler().slice(0, 20);

        container.innerHTML =
            liste.map(haberKarti).join("");
    };

    /* =====================================================
       SON DAKİKA
       ===================================================== */

    window.renderBreaking = function () {
        const container =
            document.getElementById("breakingNews");

        if (!container) {
            return;
        }

        const liste =
            siraliHaberler().slice(0, 10);

        const items = liste
            .map(function (haber) {
                return `
                    <a
                        class="breaking-item"
                        href="${haberUrl(haber)}"
                        title="${escapeHtml(
                            haber.baslik || ""
                        )}"
                    >
                        ${escapeHtml(
                            haber.baslik || ""
                        )}
                    </a>
                `;
            })
            .join("");

        container.innerHTML = `
            <div class="breaking-inner">

                <div class="breaking-label">
                    <span></span>
                    SON DAKİKA
                </div>

                <div class="breaking-track">

                    <div class="breaking-track-inner">
                        ${items}
                        ${items}
                    </div>

                </div>

            </div>
        `;
    };

    /* =====================================================
       ARAMA
       ===================================================== */

    window.haberIstaArama = function (kelime) {
        const query = String(kelime || "")
            .trim()
            .toLocaleLowerCase("tr-TR");

        if (!query) {
            return [];
        }

        return haberler
            .filter(function (haber) {
                const baslik =
                    String(haber.baslik || "")
                        .toLocaleLowerCase("tr-TR");

                const spot =
                    String(haber.spot || "")
                        .toLocaleLowerCase("tr-TR");

                const kategori =
                    String(haber.kategori || "")
                        .toLocaleLowerCase("tr-TR");

                const icerik =
                    String(haber.icerik || "")
                        .toLocaleLowerCase("tr-TR");

                return (
                    baslik.includes(query) ||
                    spot.includes(query) ||
                    kategori.includes(query) ||
                    icerik.includes(query)
                );
            })
            .sort(function (a, b) {
                return Number(b.id || 0) -
                    Number(a.id || 0);
            });
    };

    /* =====================================================
       GELİŞMİŞ ARAMA
       ===================================================== */

    function gelismisAramaKur() {
        const input =
            document.querySelector(
                ".search-box input"
            ) ||
            document.querySelector(
                "#searchInput"
            ) ||
            document.querySelector(
                "#search"
            );

        if (!input) {
            return;
        }

        let panel =
            document.getElementById(
                "haberAramaSonuclari"
            );

        const box =
            input.closest(".search-box") ||
            input.parentElement;

        if (!panel) {
            panel =
                document.createElement("div");

            panel.id =
                "haberAramaSonuclari";

            if (box) {
                box.style.position =
                    "relative";

                box.appendChild(panel);
            }
        }

        function aramayiGoster() {
            const value =
                input.value.trim();

            if (!value) {
                panel.style.display =
                    "none";

                panel.innerHTML = "";

                return;
            }

            const sonuclar =
                window.haberIstaArama(
                    value
                ).slice(0, 8);

            if (!sonuclar.length) {
                panel.innerHTML = `
                    <div class="search-no-result">
                        Aradığınız haber bulunamadı.
                    </div>
                `;

                panel.style.display =
                    "block";

                return;
            }

            panel.innerHTML =
                sonuclar
                    .map(function (haber) {
                        return `
                            <a
                                class="search-result-item"
                                href="${haberUrl(haber)}"
                            >

                                <img
                                    src="${gorselYolu(
                                        haber.gorsel
                                    )}"
                                    alt=""
                                    loading="lazy"
                                >

                                <div class="search-result-text">

                                    <span>
                                        ${escapeHtml(
                                            haber.kategori ||
                                            "Haber"
                                        )}
                                    </span>

                                    <strong>
                                        ${escapeHtml(
                                            haber.baslik ||
                                            ""
                                        )}
                                    </strong>

                                </div>

                            </a>
                        `;
                    })
                    .join("");

            panel.style.display =
                "block";
        }

        input.addEventListener(
            "input",
            aramayiGoster
        );

        input.addEventListener(
            "focus",
            function () {
                if (input.value.trim()) {
                    aramayiGoster();
                }
            }
        );

        input.addEventListener(
            "keydown",
            function (event) {
                if (event.key !== "Enter") {
                    return;
                }

                const value =
                    input.value.trim();

                if (!value) {
                    return;
                }

                const sonuclar =
                    window.haberIstaArama(
                        value
                    );

                if (sonuclar.length) {
                    window.location.href =
                        haberUrl(
                            sonuclar[0]
                        );
                }
            }
        );

        document.addEventListener(
            "click",
            function (event) {
                if (
                    !event.target.closest(
                        ".search-box"
                    ) &&
                    !event.target.closest(
                        "#haberAramaSonuclari"
                    )
                ) {
                    panel.style.display =
                        "none";
                }
            }
        );
    }

    /* =====================================================
       ARAMA BUTONU
       ===================================================== */

    function aramaButonuKur() {
        const button =
            document.getElementById(
                "searchBtn"
            );

        const panel =
            document.getElementById(
                "searchPanel"
            );

        const close =
            document.getElementById(
                "closeSearch"
            );

        if (button && panel) {
            button.addEventListener(
                "click",
                function () {
                    panel.classList.toggle(
                        "active"
                    );

                    const input =
                        panel.querySelector(
                            "input"
                        ) ||
                        document.querySelector(
                            ".search-box input"
                        );

                    if (
                        panel.classList.contains(
                            "active"
                        ) &&
                        input
                    ) {
                        setTimeout(
                            function () {
                                input.focus();
                            },
                            100
                        );
                    }
                }
            );
        }

        if (close && panel) {
            close.addEventListener(
                "click",
                function () {
                    panel.classList.remove(
                        "active"
                    );
                }
            );
        }
    }

    /* =====================================================
       BİLDİRİM
       ===================================================== */

    function bildirimButonuKur() {
        const button =
            document.getElementById(
                "notificationBtn"
            );

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            function () {

                if (window.OneSignalDeferred) {
                    window.OneSignalDeferred.push(
                        async function (
                            OneSignal
                        ) {
                            try {
                                await OneSignal
                                    .Notifications
                                    .requestPermission();

                                button.classList.add(
                                    "notification-active"
                                );

                                const text =
                                    button.querySelector(
                                        "span"
                                    );

                                if (text) {
                                    text.textContent =
                                        "Bildirimler Açık";
                                }

                            } catch (error) {
                                console.warn(
                                    "Bildirim izni alınamadı:",
                                    error
                                );
                            }
                        }
                    );

                    return;
                }

                if ("Notification" in window) {
                    Notification
                        .requestPermission()
                        .then(function (
                            permission
                        ) {
                            if (
                                permission ===
                                "granted"
                            ) {
                                button.classList.add(
                                    "notification-active"
                                );

                                const text =
                                    button.querySelector(
                                        "span"
                                    );

                                if (text) {
                                    text.textContent =
                                        "Bildirimler Açık";
                                }
                            }
                        })
                        .catch(function (
                            error
                        ) {
                            console.warn(
                                "Bildirim hatası:",
                                error
                            );
                        });
                }
            }
        );
    }

    /* =====================================================
       MOBİL MENÜ
       ===================================================== */

    function mobilMenuKur() {
        const button =
            document.getElementById(
                "menuBtn"
            );

        const menu =
            document.getElementById(
                "mobileMenu"
            );

        if (!button || !menu) {
            return;
        }

        button.addEventListener(
            "click",
            function () {
                menu.classList.toggle(
                    "active"
                );

                button.classList.toggle(
                    "active"
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

        if (!header) {
            return;
        }

        window.addEventListener(
            "scroll",
            function () {
                if (
                    window.scrollY > 20
                ) {
                    header.classList.add(
                        "scrolled"
                    );
                } else {
                    header.classList.remove(
                        "scrolled"
                    );
                }
            },
            {
                passive: true
            }
        );
    }

    /* =====================================================
       BAŞLAT
       ===================================================== */

    function baslat() {
        window.renderHero();
        window.renderNews();
        window.renderBreaking();

        gelismisAramaKur();
        aramaButonuKur();
        bildirimButonuKur();
        mobilMenuKur();
        headerKur();

        mansetOtomatikBaslat();

        console.log(
            "Haberİsta: Profesyonel ana sayfa aktif."
        );
    }

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
