"use strict";

/* =========================================================
   HABERİSTA APP.JS
   Temiz ana sayfa sistemi
========================================================= */

(function () {

    const haberler = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    if (!haberler.length) {
        console.warn("Haberİsta: haber verisi bulunamadı.");
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
        if (!gorsel) return "/images/gundem.jpeg";

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

        if (haber.url) return haber.url;

        if (haber.slug) {
            return "/haber/" + haber.slug;
        }

        if (typeof window.slugOlustur === "function") {
            return "/haber/" + window.slugOlustur(haber.baslik);
        }

        return "#";
    }

    function tarihGetir(haber) {
        if (!haber) return "";

        if (haber.tarih && haber.saat) {
            return `${haber.tarih} • ${haber.saat}`;
        }

        return haber.tarih || haber.saat || "";
    }

    function siraliHaberler() {
        return [...haberler].sort(function (a, b) {

            const aTime = a.publishedAt
                ? new Date(a.publishedAt).getTime()
                : Number(a.id || 0);

            const bTime = b.publishedAt
                ? new Date(b.publishedAt).getTime()
                : Number(b.id || 0);

            return bTime - aTime;
        });
    }

    /* =====================================================
       MANŞET
    ===================================================== */

    let mansetIndex = 0;
    let mansetTimer = null;

    function renderHero() {

        const heroMain =
            document.getElementById("heroMain");

        if (!heroMain) return;

        const liste =
            siraliHaberler().slice(0, 10);

        if (!liste.length) return;

        /* Sayı alanını mutlaka heroMain DIŞINA çıkar */
        let numbersBox =
            document.getElementById("heroNumbers");

        if (!numbersBox) {

            numbersBox =
                document.createElement("div");

            numbersBox.id = "heroNumbers";

            heroMain.parentNode.insertBefore(
                numbersBox,
                heroMain.nextSibling
            );
        }

        function goster(index) {

            mansetIndex =
                (index + liste.length) % liste.length;

            const haber =
                liste[mansetIndex];

            /*
             * ÖNEMLİ:
             * Burada yalnızca BİR sol ve BİR sağ ok oluşturuluyor.
             */

            heroMain.innerHTML = `
                <article class="hero-slide">

                    <a
                        href="${escapeHtml(haberUrl(haber))}"
                        class="hero-slide-link"
                    >

                        <img
                            src="${escapeHtml(gorselYolu(haber.gorsel))}"
                            alt="${escapeHtml(haber.baslik)}"
                            class="hero-image"
                            loading="${mansetIndex === 0 ? "eager" : "lazy"}"
                        >

                        <div class="hero-overlay">

                            <span class="hero-category">
                                ${escapeHtml(haber.kategori || "Gündem")}
                            </span>

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
                                ${escapeHtml(tarihGetir(haber))}
                            </div>

                        </div>

                    </a>

                    <button
                        class="hero-arrow hero-prev"
                        type="button"
                        aria-label="Önceki haber"
                    >‹</button>

                    <button
                        class="hero-arrow hero-next"
                        type="button"
                        aria-label="Sonraki haber"
                    >›</button>

                </article>
            `;

            /* =================================================
               NUMARALAR
            ================================================= */

            numbersBox.innerHTML = `
                <div class="hero-numbers">
                    ${liste.map(function (_, i) {

                        return `
                            <button
                                type="button"
                                class="hero-number ${
                                    i === mansetIndex
                                        ? "active"
                                        : ""
                                }"
                                data-index="${i}"
                            >
                                ${i + 1}
                            </button>
                        `;

                    }).join("")}
                </div>
            `;

            /* =================================================
               OKLAR
            ================================================= */

            const prev =
                heroMain.querySelector(".hero-prev");

            const next =
                heroMain.querySelector(".hero-next");

            if (prev) {

                prev.onclick = function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(mansetIndex - 1);
                    timerYenile();

                };

            }

            if (next) {

                next.onclick = function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(mansetIndex + 1);
                    timerYenile();

                };

            }

            /* =================================================
               NUMARALAR
            ================================================= */

            numbersBox
                .querySelectorAll(".hero-number")
                .forEach(function (button) {

                    button.onclick = function () {

                        goster(
                            Number(
                                button.dataset.index
                            )
                        );

                        timerYenile();

                    };

                });

        }

        function timerYenile() {

            if (mansetTimer) {
                clearInterval(mansetTimer);
            }

            mansetTimer =
                setInterval(function () {

                    goster(
                        mansetIndex + 1
                    );

                }, 6500);

        }

        goster(0);
        timerYenile();
    }


    /* =====================================================
       SON HABERLER
    ===================================================== */

    function renderNews() {

        const grid =
            document.getElementById("newsGrid");

        if (!grid) return;

        const liste =
            siraliHaberler().slice(0, 20);

        grid.innerHTML =
            liste.map(function (haber) {

                return `
                    <article class="news-card">

                        <a
                            href="${escapeHtml(haberUrl(haber))}"
                            class="news-card-link"
                        >

                            <div class="news-image-wrap">

                                <img
                                    src="${escapeHtml(gorselYolu(haber.gorsel))}"
                                    alt="${escapeHtml(haber.baslik)}"
                                    class="news-image"
                                    loading="lazy"
                                >

                                <span class="news-category">
                                    ${escapeHtml(
                                        haber.kategori || "Gündem"
                                    )}
                                </span>

                            </div>

                            <div class="news-content">

                                <div class="news-date">
                                    ${escapeHtml(
                                        tarihGetir(haber)
                                    )}
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
                                    <b>→</b>
                                </span>

                            </div>

                        </a>

                    </article>
                `;

            }).join("");

    }


    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function renderBreaking() {

        const box =
            document.getElementById("breakingNews");

        if (!box) return;

        const liste =
            siraliHaberler().slice(0, 10);

        box.innerHTML = `
            <div class="breaking-inner">

                <div class="breaking-label">
                    <span class="breaking-dot"></span>
                    SON DAKİKA
                </div>

                <div class="breaking-track">

                    ${liste.map(function (haber) {

                        return `
                            <a
                                href="${escapeHtml(
                                    haberUrl(haber)
                                )}"
                                class="breaking-item"
                            >
                                ${escapeHtml(haber.baslik)}
                            </a>
                        `;

                    }).join("")}

                </div>

            </div>
        `;

    }


    /* =====================================================
       ARAMA
    ===================================================== */

    function haberAra(metin) {

        const arama =
            String(metin || "")
                .toLocaleLowerCase("tr-TR")
                .trim();

        if (!arama) return [];

        return siraliHaberler().filter(
            function (haber) {

                const metinler = [
                    haber.baslik,
                    haber.spot,
                    haber.kategori,
                    haber.icerik
                ];

                return metinler
                    .filter(Boolean)
                    .join(" ")
                    .toLocaleLowerCase("tr-TR")
                    .includes(arama);

            }
        );

    }

    window.haberIstaArama = haberAra;


    /* =====================================================
       ARAMA BUTONU
    ===================================================== */

    function aramaKur() {

        const button =
            document.getElementById("searchBtn");

        if (!button) return;

        button.onclick = function () {

            const mevcut =
                document.getElementById(
                    "siteSearch"
                );

            if (mevcut) {

                mevcut.focus();
                return;

            }

            const input =
                document.createElement("input");

            input.id = "siteSearch";
            input.type = "search";
            input.placeholder = "Haber ara...";
            input.autocomplete = "off";

            const area =
                document.querySelector(
                    ".search-area"
                );

            if (area) {
                area.appendChild(input);
            }

            input.focus();

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key !== "Enter"
                    ) {
                        return;
                    }

                    const sonuc =
                        haberAra(input.value);

                    const grid =
                        document.getElementById(
                            "newsGrid"
                        );

                    if (!grid) return;

                    if (!sonuc.length) {

                        grid.innerHTML = `
                            <div class="search-empty">
                                <h3>Haber bulunamadı</h3>
                                <p>
                                    Aradığınız kelimeyle eşleşen
                                    bir haber bulunamadı.
                                </p>
                            </div>
                        `;

                        return;
                    }

                    grid.innerHTML =
                        sonuc.map(function (haber) {

                            return `
                                <article class="news-card">

                                    <a
                                        href="${escapeHtml(
                                            haberUrl(haber)
                                        )}"
                                        class="news-card-link"
                                    >

                                        <div class="news-image-wrap">

                                            <img
                                                src="${escapeHtml(
                                                    gorselYolu(
                                                        haber.gorsel
                                                    )
                                                )}"
                                                alt="${escapeHtml(
                                                    haber.baslik
                                                )}"
                                                class="news-image"
                                                loading="lazy"
                                            >

                                            <span class="news-category">
                                                ${escapeHtml(
                                                    haber.kategori ||
                                                    "Gündem"
                                                )}
                                            </span>

                                        </div>

                                        <div class="news-content">

                                            <div class="news-date">
                                                ${escapeHtml(
                                                    tarihGetir(haber)
                                                )}
                                            </div>

                                            <h2 class="news-title">
                                                ${escapeHtml(
                                                    haber.baslik
                                                )}
                                            </h2>

                                            <p class="news-spot">
                                                ${escapeHtml(
                                                    haber.spot || ""
                                                )}
                                            </p>

                                            <span class="news-read-more">
                                                Haberin devamı →
                                            </span>

                                        </div>

                                    </a>

                                </article>
                            `;

                        }).join("");

                }
            );

        };

    }


    /* =====================================================
       BİLDİRİMLER
    ===================================================== */

    function bildirimKur() {

        const button =
            document.getElementById(
                "notificationBtn"
            );

        if (!button) return;

        button.onclick = async function () {

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
                            "Bildirimleriniz zaten açık."
                    }
                );

                return;
            }

            if (
                Notification.permission ===
                "denied"
            ) {

                alert(
                    "Bildirimler tarayıcı ayarlarından engellenmiş."
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
                                "Son dakika haberlerini takip edebilirsiniz."
                        }
                    );

                }

            } catch (error) {

                console.warn(
                    "Bildirim hatası:",
                    error
                );

            }

        };

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

            button.id =
                "mobileMenuBtn";

            button.type = "button";

            button.className =
                "mobile-menu-btn";

            button.setAttribute(
                "aria-label",
                "Menüyü aç"
            );

            button.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            const header =
                document.querySelector(
                    ".header-inner"
                );

            if (header) {
                header.appendChild(button);
            }

        }

        button.onclick = function () {

            nav.classList.toggle(
                "mobile-open"
            );

            button.classList.toggle(
                "active"
            );

        };

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

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 20
                ) {

                    header.classList.add(
                        "header-scrolled"
                    );

                } else {

                    header.classList.remove(
                        "header-scrolled"
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       KATEGORİLER
    ===================================================== */

    function kategoriKur() {

        document
            .querySelectorAll(
                ".category-nav a"
            )
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        const kategori =
                            link.dataset.kategori;

                        if (!kategori) return;

                        const grid =
                            document.getElementById(
                                "newsGrid"
                            );

                        if (!grid) return;

                        const sonuc =
                            siraliHaberler()
                                .filter(function (haber) {

                                    return (
                                        haber.kategori ===
                                        kategori
                                    );

                                });

                        if (!sonuc.length) return;

                        grid.innerHTML =
                            sonuc.map(function (haber) {

                                return `
                                    <article class="news-card">

                                        <a
                                            href="${escapeHtml(
                                                haberUrl(haber)
                                            )}"
                                            class="news-card-link"
                                        >

                                            <div class="news-image-wrap">

                                                <img
                                                    src="${escapeHtml(
                                                        gorselYolu(
                                                            haber.gorsel
                                                        )
                                                    )}"
                                                    alt="${escapeHtml(
                                                        haber.baslik
                                                    )}"
                                                    class="news-image"
                                                    loading="lazy"
                                                >

                                                <span class="news-category">
                                                    ${escapeHtml(
                                                        haber.kategori
                                                    )}
                                                </span>

                                            </div>

                                            <div class="news-content">

                                                <div class="news-date">
                                                    ${escapeHtml(
                                                        tarihGetir(
                                                            haber
                                                        )
                                                    )}
                                                </div>

                                                <h2 class="news-title">
                                                    ${escapeHtml(
                                                        haber.baslik
                                                    )}
                                                </h2>

                                                <p class="news-spot">
                                                    ${escapeHtml(
                                                        haber.spot || ""
                                                    )}
                                                </p>

                                                <span class="news-read-more">
                                                    Haberin devamı →
                                                </span>

                                            </div>

                                        </a>

                                    </article>
                                `;

                            }).join("");

                    }
                );

            });

    }


    /* =====================================================
       KLAVYE
    ===================================================== */

    function klavyeKur() {

        document.addEventListener(
            "keydown",
            function (event) {

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

                if (
                    event.key === "ArrowLeft"
                ) {

                    const button =
                        document.querySelector(
                            ".hero-prev"
                        );

                    if (button) {
                        button.click();
                    }

                }

                if (
                    event.key === "ArrowRight"
                ) {

                    const button =
                        document.querySelector(
                            ".hero-next"
                        );

                    if (button) {
                        button.click();
                    }

                }

            }
        );

    }


    /* =====================================================
       BAŞLAT
    ===================================================== */

    function baslat() {

        console.log(
            "Haberİsta: %d haber başarıyla yüklendi.",
            haberler.length
        );

        renderHero();
        renderNews();
        renderBreaking();

        aramaKur();
        bildirimKur();
        mobilMenuKur();
        headerKur();
        kategoriKur();
        klavyeKur();

    }


    /* =====================================================
       DOM
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
