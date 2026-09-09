/* =========================================================
   HABERİSTA — ANA SAYFA GELİŞMİŞ HABER MOTORU
   ========================================================= */

(function () {

    "use strict";

    if (
        typeof window === "undefined" ||
        typeof window.haberler === "undefined"
    ) {
        console.warn(
            "Haberİsta: haberler.js bulunamadı."
        );

        return;
    }

    const haberler = window.haberler;

    /* =====================================================
       GÖRSEL YOLU
       ===================================================== */

    function gorselYolu(gorsel) {

        if (!gorsel) {
            return "";
        }

        if (
            gorsel.startsWith("/") ||
            gorsel.startsWith("http://") ||
            gorsel.startsWith("https://")
        ) {
            return gorsel;
        }

        return "/images/" + gorsel;
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

                return Number(b.id || 0)
                    - Number(a.id || 0);

            })
            .slice(0, 20);
    }

    /* =====================================================
       HABER KARTI
       SADECE FOTOĞRAF + BAŞLIK
       ===================================================== */

    function haberKarti(haber) {

        return `
            <article class="news-card">

                <a
                    class="news-card-link"
                    href="${haberUrl(haber)}"
                    aria-label="${haber.baslik || ""}"
                >

                    <div class="news-card-image">

                        <img
                            src="${gorselYolu(haber.gorsel)}"
                            alt="${haber.baslik || "Haberİsta haberi"}"
                            loading="lazy"
                        >

                    </div>

                    <div class="news-card-content">

                        <h3>
                            ${haber.baslik || ""}
                        </h3>

                    </div>

                </a>

            </article>
        `;
    }

    /* =====================================================
       20 HABERİ RENDER ET
       ===================================================== */

    window.renderNews = function () {

        const container =
            document.getElementById("newsGrid");

        if (!container) {
            return;
        }

        const liste =
            anaSayfaHaberleri();

        container.innerHTML =
            liste
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
       ===================================================== */

    window.renderBreaking = function () {

        const container =
            document.getElementById(
                "breakingNews"
            );

        if (!container) {
            return;
        }

        const liste =
            haberler
                .slice()
                .sort(function (a, b) {
                    return Number(b.id || 0)
                        - Number(a.id || 0);
                })
                .slice(0, 10);

        /*
         * Aynı listeyi iki kere oluşturuyoruz.
         * Böylece CSS animasyonu kesintisiz
         * kayan bant gibi çalışıyor.
         */

        const items =
            liste
                .map(function (haber) {

                    return `
                        <a
                            href="${haberUrl(haber)}"
                        >
                            ${haber.baslik || ""}
                        </a>
                    `;

                })
                .join("");

        container.innerHTML = `
            <div class="breaking-inner">

                <div class="breaking-title">
                    SON DAKİKA
                </div>

                <div class="breaking-news">

                    <div class="breaking-track">

                        ${items}
                        ${items}

                    </div>

                </div>

            </div>
        `;
    };

    /* =====================================================
       GELİŞMİŞ ARAMA
       ===================================================== */

    window.haberIstaArama = function (kelime) {

        const query =
            String(kelime || "")
                .trim()
                .toLocaleLowerCase("tr-TR");

        if (!query) {
            return [];
        }

        return haberler
            .filter(function (haber) {

                const baslik =
                    String(
                        haber.baslik || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                const spot =
                    String(
                        haber.spot || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                const kategori =
                    String(
                        haber.kategori || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                const icerik =
                    String(
                        haber.icerik || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                return (
                    baslik.includes(query) ||
                    spot.includes(query) ||
                    kategori.includes(query) ||
                    icerik.includes(query)
                );

            })
            .sort(function (a, b) {

                const aBaslik =
                    String(
                        a.baslik || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                const bBaslik =
                    String(
                        b.baslik || ""
                    )
                    .toLocaleLowerCase("tr-TR");

                const aTam =
                    aBaslik === query;

                const bTam =
                    bBaslik === query;

                if (aTam && !bTam) {
                    return -1;
                }

                if (!aTam && bTam) {
                    return 1;
                }

                return Number(b.id || 0)
                    - Number(a.id || 0);

            });
    };

    /* =====================================================
       ARAMA PANELİNİ PROFESYONEL HALE GETİR
       ===================================================== */

    function gelismisAramaKur() {

        const input =
            document.querySelector(
                ".search-box input"
            );

        if (!input) {
            return;
        }

        let panel =
            document.getElementById(
                "haberAramaSonuclari"
            );

        if (!panel) {

            panel =
                document.createElement("div");

            panel.id =
                "haberAramaSonuclari";

            panel.style.cssText = `
                position: absolute;
                top: calc(100% + 8px);
                left: 0;
                right: 0;
                z-index: 3000;
                display: none;
                max-height: 430px;
                overflow-y: auto;
                background: #fff;
                border: 1px solid #e4e6e9;
                border-radius: 12px;
                box-shadow: 0 15px 40px rgba(0,0,0,.15);
            `;

            const box =
                input.closest(".search-box");

            if (
                box &&
                box.parentElement
            ) {

                box.parentElement.style.position =
                    "relative";

                box.parentElement.appendChild(
                    panel
                );
            }
        }

        input.addEventListener(
            "input",
            function () {

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
                    )
                    .slice(0, 8);

                if (!sonuclar.length) {

                    panel.innerHTML = `
                        <div style="
                            padding:22px;
                            text-align:center;
                            color:#777;
                            font-size:13px;
                        ">
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
                                    href="${haberUrl(haber)}"
                                    style="
                                        display:flex;
                                        gap:12px;
                                        padding:11px;
                                        border-bottom:1px solid #eee;
                                        align-items:center;
                                    "
                                >

                                    <img
                                        src="${gorselYolu(haber.gorsel)}"
                                        alt=""
                                        style="
                                            width:72px;
                                            height:48px;
                                            object-fit:cover;
                                            border-radius:7px;
                                            flex-shrink:0;
                                        "
                                    >

                                    <div style="
                                        min-width:0;
                                    ">

                                        <div style="
                                            color:#777;
                                            font-size:9px;
                                            font-weight:800;
                                            margin-bottom:3px;
                                            text-transform:uppercase;
                                        ">
                                            ${haber.kategori || "Haber"}
                                        </div>

                                        <div style="
                                            color:#17191d;
                                            font-size:12px;
                                            line-height:1.35;
                                            font-weight:800;
                                        ">
                                            ${haber.baslik || ""}
                                        </div>

                                    </div>

                                </a>
                            `;

                        })
                        .join("");

                panel.style.display =
                    "block";
            }
        );

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !event.target.closest(
                        ".search-area"
                    )
                ) {

                    panel.style.display =
                        "none";
                }
            }
        );

        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    const value =
                        input.value.trim();

                    if (!value) {
                        return;
                    }

                    const sonuclar =
                        window.haberIstaArama(
                            value
                        );

                    if (
                        sonuclar.length &&
                        sonuclar[0].url
                    ) {

                        window.location.href =
                            sonuclar[0].url;
                    }
                }
            }
        );
    }

    /* =====================================================
       BAŞLAT
       ===================================================== */

    function baslat() {

        window.renderNews();

        window.renderBreaking();

        gelismisAramaKur();

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
