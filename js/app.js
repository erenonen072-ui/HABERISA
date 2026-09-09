/* =========================================================
   HABERİSTA — ANA SAYFA GELİŞMİŞ HABER MOTORU
   ========================================================= */

(function () {
    "use strict";

    if (
        typeof window === "undefined" ||
        typeof window.haberler === "undefined"
    ) {
        console.warn("Haberİsta: haberler.js bulunamadı.");
        return;
    }

    const haberler = window.haberler;

    /* =====================================================
       HTML GÜVENLİK
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
       ÖNEMLİ:
       images/foto.jpg -> /images/foto.jpg
       /images/foto.jpg -> /images/foto.jpg
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
       20 HABER
       ===================================================== */

    function anaSayfaHaberleri() {
        return haberler
            .slice()
            .sort(function (a, b) {
                return Number(b.id || 0) - Number(a.id || 0);
            })
            .slice(0, 20);
    }

    /* =====================================================
       HABER KARTI
       ===================================================== */

    function haberKarti(haber) {
        const baslik = escapeHtml(haber.baslik || "Haberİsta");
        const image = gorselYolu(haber.gorsel);

        return `
            <article class="news-card" data-id="${haber.id || ""}">
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
       HABERLERİ GÖSTER
       ===================================================== */

    window.renderNews = function () {
        const container = document.getElementById("newsGrid");

        if (!container) {
            return;
        }

        const liste = anaSayfaHaberleri();

        container.innerHTML = liste
            .map(haberKarti)
            .join("");

        console.log(
            "Haberİsta: Ana sayfada " +
            liste.length +
            " haber gösteriliyor."
        );
    };

    /* =====================================================
       SON DAKİKA
       TEK SATIR + SÜREKLİ KAYAN BANT
       ===================================================== */

    window.renderBreaking = function () {
        const container = document.getElementById("breakingNews");

        if (!container) {
            return;
        }

        const liste = haberler
            .slice()
            .sort(function (a, b) {
                return Number(b.id || 0) - Number(a.id || 0);
            })
            .slice(0, 10);

        function itemOlustur(haber) {
            return `
                <a
                    class="breaking-item"
                    href="${haberUrl(haber)}"
                    title="${escapeHtml(haber.baslik || "")}"
                >
                    ${escapeHtml(haber.baslik || "")}
                </a>
            `;
        }

        const items = liste
            .map(itemOlustur)
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
                const baslik = String(haber.baslik || "")
                    .toLocaleLowerCase("tr-TR");

                const spot = String(haber.spot || "")
                    .toLocaleLowerCase("tr-TR");

                const kategori = String(haber.kategori || "")
                    .toLocaleLowerCase("tr-TR");

                const icerik = String(haber.icerik || "")
                    .toLocaleLowerCase("tr-TR");

                return (
                    baslik.includes(query) ||
                    spot.includes(query) ||
                    kategori.includes(query) ||
                    icerik.includes(query)
                );
            })
            .sort(function (a, b) {
                return Number(b.id || 0) - Number(a.id || 0);
            });
    };

    /* =====================================================
       GELİŞMİŞ ARAMA PANELİ
       ===================================================== */

    function gelismisAramaKur() {
        const input =
            document.querySelector(".search-box input") ||
            document.querySelector("#searchInput") ||
            document.querySelector("#search");

        if (!input) {
            console.warn("Haberİsta: Arama inputu bulunamadı.");
            return;
        }

        let panel =
            document.getElementById("haberAramaSonuclari");

        const box =
            input.closest(".search-box") ||
            input.parentElement;

        if (!panel) {
            panel = document.createElement("div");
            panel.id = "haberAramaSonuclari";

            panel.innerHTML = "";

            if (box) {
                box.style.position = "relative";
                box.appendChild(panel);
            } else if (input.parentElement) {
                input.parentElement.style.position = "relative";
                input.parentElement.appendChild(panel);
            }
        }

        function aramayiGoster() {
            const value = input.value.trim();

            if (!value) {
                panel.style.display = "none";
                panel.innerHTML = "";
                return;
            }

            const sonuclar =
                window.haberIstaArama(value).slice(0, 8);

            if (!sonuclar.length) {
                panel.innerHTML = `
                    <div class="search-no-result">
                        Aradığınız haber bulunamadı.
                    </div>
                `;

                panel.style.display = "block";
                return;
            }

            panel.innerHTML = sonuclar
                .map(function (haber) {
                    const baslik =
                        escapeHtml(haber.baslik || "");

                    const kategori =
                        escapeHtml(haber.kategori || "Haber");

                    const image =
                        gorselYolu(haber.gorsel);

                    return `
                        <a
                            class="search-result-item"
                            href="${haberUrl(haber)}"
                        >
                            <img
                                src="${image}"
                                alt=""
                                loading="lazy"
                                onerror="this.onerror=null;this.src='/images/logo.jpeg';"
                            >

                            <div class="search-result-text">
                                <span>${kategori}</span>
                                <strong>${baslik}</strong>
                            </div>
                        </a>
                    `;
                })
                .join("");

            panel.style.display = "block";
        }

        input.addEventListener("input", aramayiGoster);

        input.addEventListener("focus", function () {
            if (input.value.trim()) {
                aramayiGoster();
            }
        });

        input.addEventListener("keydown", function (event) {
            if (event.key !== "Enter") {
                return;
            }

            const value = input.value.trim();

            if (!value) {
                return;
            }

            const sonuclar =
                window.haberIstaArama(value);

            if (sonuclar.length) {
                window.location.href =
                    haberUrl(sonuclar[0]);
            }
        });

        document.addEventListener("click", function (event) {
            if (
                !event.target.closest(".search-box") &&
                !event.target.closest("#haberAramaSonuclari")
            ) {
                panel.style.display = "none";
            }
        });
    }

    /* =====================================================
       ARAMA BUTONU
       ===================================================== */

    function aramaButonuKur() {
        const button =
            document.getElementById("searchBtn");

        const panel =
            document.getElementById("searchPanel");

        const close =
            document.getElementById("closeSearch");

        if (button && panel) {
            button.addEventListener("click", function () {
                panel.classList.toggle("active");

                const input =
                    panel.querySelector("input") ||
                    document.querySelector(".search-box input");

                if (
                    panel.classList.contains("active") &&
                    input
                ) {
                    setTimeout(function () {
                        input.focus();
                    }, 100);
                }
            });
        }

        if (close && panel) {
            close.addEventListener("click", function () {
                panel.classList.remove("active");
            });
        }
    }

    /* =====================================================
       BİLDİRİM BUTONU
       ===================================================== */

    function bildirimButonuKur() {
        const button =
            document.getElementById("notificationBtn");

        if (!button) {
            console.warn(
                "Haberİsta: notificationBtn bulunamadı."
            );
            return;
        }

        button.addEventListener("click", function () {

            /* OneSignal varsa */
            if (window.OneSignalDeferred) {

                window.OneSignalDeferred.push(
                    async function (OneSignal) {
                        try {
                            await OneSignal.Notifications
                                .requestPermission();

                            button.classList.add(
                                "notification-active"
                            );

                            const text =
                                button.querySelector("span");

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

            /* OneSignal henüz yüklenmediyse */
            if ("Notification" in window) {
                Notification.requestPermission()
                    .then(function (permission) {

                        if (permission === "granted") {
                            button.classList.add(
                                "notification-active"
                            );

                            const text =
                                button.querySelector("span");

                            if (text) {
                                text.textContent =
                                    "Bildirimler Açık";
                            }
                        }
                    })
                    .catch(function (error) {
                        console.warn(
                            "Bildirim hatası:",
                            error
                        );
                    });
            }
        });
    }

    /* =====================================================
       MOBİL MENÜ
       ===================================================== */

    function mobilMenuKur() {
        const button =
            document.getElementById("menuBtn");

        const menu =
            document.getElementById("mobileMenu");

        if (!button || !menu) {
            return;
        }

        button.addEventListener("click", function () {
            menu.classList.toggle("active");
            button.classList.toggle("active");
        });
    }

    /* =====================================================
       HEADER SCROLL
       ===================================================== */

    function headerKur() {
        const header =
            document.querySelector(".site-header");

        if (!header) {
            return;
        }

        window.addEventListener(
            "scroll",
            function () {
                if (window.scrollY > 20) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            },
            { passive: true }
        );
    }

    /* =====================================================
       LOGO
       ===================================================== */

    function logoKur() {
        const logos =
            document.querySelectorAll(
                ".logo img, .site-logo img, .brand img"
            );

        logos.forEach(function (logo) {
            logo.style.borderRadius = "50%";
            logo.style.objectFit = "cover";
        });
    }

    /* =====================================================
       BAŞLAT
       ===================================================== */

    function baslat() {

        window.renderNews();
        window.renderBreaking();

        gelismisAramaKur();
        aramaButonuKur();
        bildirimButonuKur();
        mobilMenuKur();
        headerKur();
        logoKur();

        console.log(
            "Haberİsta: Ana sayfa motoru aktif."
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            baslat
        );
    } else {
        baslat();
    }

})();
