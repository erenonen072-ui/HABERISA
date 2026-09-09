"use strict";

/* =========================================================
   HABERİSTA
   KATEGORİ SAYFASI SİSTEMİ
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("HABERİSTA kategori sistemi başlatıldı.");

    /* =====================================================
       HABERLER KONTROL
    ===================================================== */

    if (!window.haberler || !Array.isArray(window.haberler)) {

        console.error("haberler.js yüklenemedi.");

        return;
    }

    /* =====================================================
       AKTİF KATEGORİ
    ===================================================== */

    const aktifKategori =
        document.body.getAttribute("data-kategori");

    if (!aktifKategori) {

        console.error(
            "data-kategori bulunamadı."
        );

        return;
    }

    console.log(
        "Aktif kategori:",
        aktifKategori
    );

    /* =====================================================
       TÜRKÇE KARŞILAŞTIRMA
    ===================================================== */

    function normalize(metin) {

        return String(metin || "")
            .trim()
            .toLocaleLowerCase("tr-TR");

    }

    /* =====================================================
       KATEGORİ HABERLERİNİ FİLTRELE
    ===================================================== */

    const kategoriHaberleri =
        window.haberler.filter(function (haber) {

            return normalize(haber.kategori) ===
                   normalize(aktifKategori);

        });

    console.log(
        aktifKategori +
        " haberleri:",
        kategoriHaberleri
    );

    /* =====================================================
       BAŞLIK
    ===================================================== */

    const baslik =
        document.getElementById("kategoriBaslik");

    if (baslik) {

        baslik.textContent =
            aktifKategori;

    }

    /* =====================================================
       AÇIKLAMA
    ===================================================== */

    const aciklama =
        document.getElementById("kategoriAciklama");

    if (aciklama) {

        const aciklamalar = {

            "Gündem":
                "Türkiye gündeminden en güncel gelişmeler.",

            "Dünya":
                "Dünyadan son dakika gelişmeleri ve önemli haberler.",

            "Ekonomi":
                "Ekonomi ve finans dünyasından güncel gelişmeler.",

            "Spor":
                "Spor dünyasından son dakika haberleri.",

            "Magazin":
                "Magazin dünyasından güncel gelişmeler.",

            "Teknoloji":
                "Teknoloji dünyasından en yeni gelişmeler.",

            "Sağlık":
                "Sağlık dünyasından güncel haberler.",

            "Kültür Sanat":
                "Kültür, sanat, sinema ve müzik dünyasından gelişmeler.",

            "Türkiye":
                "Türkiye'nin dört bir yanından güncel haberler.",

            "Eğitim":
                "Eğitim dünyasından güncel gelişmeler."

        };

        aciklama.textContent =
            aciklamalar[aktifKategori] ||
            `${aktifKategori} kategorisinden en güncel haberler.`;

    }

    /* =====================================================
       SAYFA BAŞLIĞINI DEĞİŞTİR
    ===================================================== */

    document.title =
        `${aktifKategori} Haberleri - Haberİsta`;

    /* =====================================================
       SECTION BAŞLIĞI
    ===================================================== */

    const sectionBaslik =
        document.querySelector(".section-title h2");

    if (sectionBaslik) {

        sectionBaslik.textContent =
            `${aktifKategori} Haberleri`;

    }

    /* =====================================================
       AKTİF MENÜ
    ===================================================== */

    const menuLinkleri =
        document.querySelectorAll(".category-nav a");

    menuLinkleri.forEach(function (link) {

        link.classList.remove("active");

        const yazi =
            link.textContent.trim();

        if (
            normalize(yazi) ===
            normalize(aktifKategori)
        ) {

            link.classList.add("active");

        }

    });

    /* =====================================================
       HABER ALANI
    ===================================================== */

    const newsGrid =
        document.getElementById("newsGrid");

    if (!newsGrid) {

        console.error(
            "newsGrid bulunamadı."
        );

        return;
    }

    /* =====================================================
       HABER YOKSA
    ===================================================== */

    if (kategoriHaberleri.length === 0) {

        newsGrid.innerHTML = `

            <div class="kategori-bos">

                <div class="bos-ikon">
                    📰
                </div>

                <h2>
                    ${aktifKategori}
                </h2>

                <p>
                    Bu kategoride henüz haber bulunmuyor.
                </p>

                <a
                    href="index.html"
                    class="bos-btn"
                >
                    Ana Sayfaya Dön
                </a>

            </div>

        `;

        return;
    }

    /* =====================================================
       HTML GÜVENLİĞİ
    ===================================================== */

    function escapeHTML(metin) {

        return String(metin || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

    /* =====================================================
       HABER KARTLARI
    ===================================================== */

    let html = "";

    kategoriHaberleri.forEach(function (haber) {

        const id =
            encodeURIComponent(haber.id);

        const baslik =
            escapeHTML(haber.baslik);

        const spot =
            escapeHTML(haber.spot);

        const gorsel =
            escapeHTML(
                haber.gorsel ||
                "images/haber-default.jpg"
            );

        const tarih =
            escapeHTML(
                haber.tarih || ""
            );

        const saat =
            escapeHTML(
                haber.saat || ""
            );

        html += `

            <article class="news-card">

                <a
                    href="haber.html?id=${id}"
                    class="news-card-image"
                >

                    <img
                        src="${gorsel}"
                        alt="${baslik}"
                        loading="lazy"
                    >

                </a>

                <div class="news-card-content">

                    <span class="news-card-category">
                        ${escapeHTML(haber.kategori)}
                    </span>

                    <h3>

                        <a href="haber.html?id=${id}">
                            ${baslik}
                        </a>

                    </h3>

                    <p>
                        ${spot}
                    </p>

                    <div class="news-card-meta">

                        ${tarih}

                        ${
                            saat
                                ? ` • ${saat}`
                                : ""
                        }

                    </div>

                </div>

            </article>

        `;

    });

    /* =====================================================
       EKRANA BAS
    ===================================================== */

    newsGrid.innerHTML = html;

    console.log(
        `${kategoriHaberleri.length} adet ${aktifKategori} haberi gösterildi.`
    );

});
