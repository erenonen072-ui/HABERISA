"use strict";

/* =========================================================
   HABERİSTA
   KATEGORİLER SİSTEMİ
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("kategori-listesi");

    const countBox =
        document.getElementById("kategori-count");


    /* =====================================================
       HABERLERİ AL
       ===================================================== */

    const haberData =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];


    /* =====================================================
       KATEGORİLER
       ===================================================== */

    const kategoriler = [

        {
            ad: "Gündem",
            slug: "gundem",
            ikon: "📰",
            aciklama: "Türkiye gündeminden son gelişmeler",
            sayfa: "gundem.html"
        },

        {
            ad: "Türkiye",
            slug: "turkiye",
            ikon: "🇹🇷",
            aciklama: "Türkiye'nin dört bir yanından haberler",
            sayfa: "index.html?kategori=Türkiye"
        },

        {
            ad: "Dünya",
            slug: "dunya",
            ikon: "🌍",
            aciklama: "Dünyadan son dakika gelişmeleri",
            sayfa: "dunya.html"
        },

        {
            ad: "Ekonomi",
            slug: "ekonomi",
            ikon: "📈",
            aciklama: "Piyasalar, ekonomi ve finans",
            sayfa: "ekonomi.html"
        },

        {
            ad: "Spor",
            slug: "spor",
            ikon: "⚽",
            aciklama: "Futbol ve spor dünyasından haberler",
            sayfa: "spor.html"
        },

        {
            ad: "Eğitim",
            slug: "egitim",
            ikon: "🎓",
            aciklama: "Eğitim, sınav ve öğrenci gündemi",
            sayfa: "index.html?kategori=Eğitim"
        },

        {
            ad: "Magazin",
            slug: "magazin",
            ikon: "✨",
            aciklama: "Magazin ve ünlüler dünyasından gelişmeler",
            sayfa: "magazin.html"
        },

        {
            ad: "Teknoloji",
            slug: "teknoloji",
            ikon: "💻",
            aciklama: "Teknoloji dünyasından yeni gelişmeler",
            sayfa: "teknoloji.html"
        },

        {
            ad: "Kültür Sanat",
            slug: "kultur-sanat",
            ikon: "🎨",
            aciklama: "Kültür, sanat, sinema ve yaşam",
            sayfa: "kultur-sanat.html"
        },

        {
            ad: "Sağlık",
            slug: "saglik",
            ikon: "❤️",
            aciklama: "Sağlık dünyasından güncel bilgiler",
            sayfa: "saglik.html"
        }

    ];


    /* =====================================================
       CONTAINER KONTROL
       ===================================================== */

    if (!container) {
        console.error(
            "HABERİSTA: kategori-listesi bulunamadı."
        );

        return;
    }


    /* =====================================================
       KARTLARI OLUŞTUR
       ===================================================== */

    kategoriler.forEach(function (kategori) {


        /* -------------------------------------------------
           KATEGORİ HABERLERİ
           ------------------------------------------------- */

        const kategoriHaberleri =
            haberData.filter(function (haber) {

                return String(
                    haber.kategori || ""
                )
                .trim()
                .toLocaleLowerCase("tr-TR")
                ===
                kategori.ad
                    .trim()
                    .toLocaleLowerCase("tr-TR");

            });


        /* -------------------------------------------------
           SON HABERİ BUL
           ------------------------------------------------- */

        const sonHaber =
            kategoriHaberleri.length > 0
                ? kategoriHaberleri
                    .slice()
                    .sort(function (a, b) {

                        const tarihA =
                            `${a.tarih || ""} ${a.saat || ""}`;

                        const tarihB =
                            `${b.tarih || ""} ${b.saat || ""}`;

                        return (
                            String(tarihB)
                                .localeCompare(
                                    String(tarihA),
                                    "tr"
                                )
                        );

                    })[0]
                : null;


        /* -------------------------------------------------
           GÖRSEL
           ------------------------------------------------- */

        let gorsel =
            "images/default.jpg";


        if (
            sonHaber &&
            sonHaber.gorsel
        ) {

            gorsel =
                sonHaber.gorsel;

        }


        /* -------------------------------------------------
           KART
           ------------------------------------------------- */

        const card =
            document.createElement("a");


        card.className =
            "kategori-card " +
            kategori.slug;


        card.href =
            kategori.sayfa;


        /* -------------------------------------------------
           HABER SAYISI
           ------------------------------------------------- */

        const haberSayisi =
            kategoriHaberleri.length;


        const haberMetni =
            haberSayisi === 1
                ? "1 haber"
                : `${haberSayisi} haber`;


        /* -------------------------------------------------
           HTML
           ------------------------------------------------- */

        card.innerHTML = `

            <div class="kategori-card-image">

                <img
                    src="${escapeHtml(gorsel)}"
                    alt="${escapeHtml(kategori.ad)}"
                    loading="lazy"
                    onerror="this.style.opacity='0'"
                >

            </div>


            <div class="kategori-info">

                <div class="kategori-icon">
                    ${kategori.ikon}
                </div>

                <h3>
                    ${escapeHtml(kategori.ad)}
                </h3>

                <p>
                    ${escapeHtml(kategori.aciklama)}
                    •
                    ${haberMetni}
                </p>

            </div>

        `;


        /* -------------------------------------------------
           SAYFAYA EKLE
           ------------------------------------------------- */

        container.appendChild(card);

    });


    /* =====================================================
       SAYI
       ===================================================== */

    if (countBox) {

        countBox.textContent =
            `${kategoriler.length} kategori • ${haberData.length} haber`;

    }


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

});
