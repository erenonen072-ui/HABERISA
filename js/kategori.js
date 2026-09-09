"use strict";

/* =========================================================
   HABERİSTA - KATEGORİ HABERLERİ
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("kategori-listesi");

    if (!container) {
        console.error("kategori-listesi bulunamadı.");
        return;
    }

    if (!Array.isArray(window.haberler)) {
        console.error("haberler.js yüklenmemiş.");
        container.innerHTML = `
            <div class="kategori-bos">
                <h2>Haberler yüklenemedi</h2>
                <p>haberler.js dosyasını kontrol edin.</p>
            </div>
        `;
        return;
    }

    /* =====================================================
       BODY'DEN KATEGORİYİ AL
    ===================================================== */

    const aktifKategori = document.body.dataset.kategori;

    if (!aktifKategori) {
        console.error("body üzerinde data-kategori yok.");
        return;
    }

    console.log("Aktif kategori:", aktifKategori);

    /* =====================================================
       TÜRKÇE KARŞILAŞTIRMA
    ===================================================== */

    function normalize(metin) {
        return String(metin || "")
            .trim()
            .toLocaleLowerCase("tr-TR");
    }

    /* =====================================================
       SADECE BU KATEGORİNİN HABERLERİNİ AL
    ===================================================== */

    const filtrelenmisHaberler = window.haberler.filter(function (haber) {

        if (!haber) return false;

        return normalize(haber.kategori) === normalize(aktifKategori);

    });

    console.log(
        aktifKategori +
        " kategorisindeki haber sayısı:",
        filtrelenmisHaberler.length
    );

    /* =====================================================
       BAŞLIK
    ===================================================== */

    const baslik = document.querySelector("[data-kategori-baslik]");

    if (baslik) {
        baslik.textContent = aktifKategori;
    }

    const aciklama = document.querySelector("[data-kategori-aciklama]");

    if (aciklama) {

        const aciklamalar = {

            "Gündem":
                "Türkiye gündeminden son gelişmeler ve önemli haberler.",

            "Türkiye":
                "Türkiye'nin dört bir yanından güncel gelişmeler.",

            "Dünya":
                "Dünyadan son dakika gelişmeleri ve uluslararası haberler.",

            "Ekonomi":
                "Ekonomi, finans, piyasalar ve para gündeminden gelişmeler.",

            "Spor":
                "Futbol ve spor dünyasından son dakika gelişmeleri.",

            "Eğitim":
                "Eğitim, okullar, sınavlar ve öğrencilerden güncel haberler.",

            "Magazin":
                "Magazin dünyasından son gelişmeler ve gündem.",

            "Teknoloji":
                "Teknoloji, yapay zeka, telefon ve dijital dünyadan haberler.",

            "Kültür Sanat":
                "Kültür, sanat, sinema, müzik ve etkinlik haberleri.",

            "Sağlık":
                "Sağlık dünyasından güncel ve bilgilendirici haberler."

        };

        aciklama.textContent =
            aciklamalar[aktifKategori] ||
            `${aktifKategori} kategorisinden güncel haberler.`;
    }

    /* =====================================================
       HABER SAYISI
    ===================================================== */

    const sayac =
        document.querySelector("[data-haber-sayisi]");

    if (sayac) {
        sayac.textContent =
            `${filtrelenmisHaberler.length} Haber`;
    }

    /* =====================================================
       HABER YOKSA
    ===================================================== */

    if (filtrelenmisHaberler.length === 0) {

        container.innerHTML = `
            <div class="kategori-bos">

                <div class="bos-ikon">📰</div>

                <h2>${aktifKategori}</h2>

                <p>
                    Bu kategoride henüz haber bulunmuyor.
                </p>

                <a href="index.html" class="bos-btn">
                    Ana Sayfaya Dön
                </a>

            </div>
        `;

        return;
    }

    /* =====================================================
       HTML GÜVENLİĞİ
    ===================================================== */

    function escapeHTML(text) {

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* =====================================================
       HABER KARTI
    ===================================================== */

    function haberKarti(haber, buyuk) {

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
            escapeHTML(haber.tarih || "");

        const saat =
            escapeHTML(haber.saat || "");

        if (buyuk) {

            return `
                <article class="kategori-one-cikan">

                    <a href="haber.html?id=${id}">
                        <img
                            src="${gorsel}"
                            alt="${baslik}"
                            loading="eager"
                        >
                    </a>

                    <div class="one-cikan-icerik">

                        <span class="haber-kategori">
                            ${escapeHTML(aktifKategori)}
                        </span>

                        <h2>
                            <a href="haber.html?id=${id}">
                                ${baslik}
                            </a>
                        </h2>

                        <p>
                            ${spot}
                        </p>

                        <div class="haber-meta">
                            ${tarih}
                            ${saat ? " • " + saat : ""}
                        </div>

                        <a
                            href="haber.html?id=${id}"
                            class="haberi-oku"
                        >
                            Haberin tamamını oku →
                        </a>

                    </div>

                </article>
            `;
        }

        return `
            <article class="kategori-haber-card">

                <a
                    href="haber.html?id=${id}"
                    class="kategori-haber-gorsel"
                >
                    <img
                        src="${gorsel}"
                        alt="${baslik}"
                        loading="lazy"
                    >
                </a>

                <div class="kategori-haber-icerik">

                    <span class="haber-kategori">
                        ${escapeHTML(aktifKategori)}
                    </span>

                    <h3>
                        <a href="haber.html?id=${id}">
                            ${baslik}
                        </a>
                    </h3>

                    <p>
                        ${spot}
                    </p>

                    <div class="haber-meta">
                        ${tarih}
                        ${saat ? " • " + saat : ""}
                    </div>

                </div>

            </article>
        `;
    }

    /* =====================================================
       HABERLERİ EKRANA BAS
    ===================================================== */

    let html = "";

    filtrelenmisHaberler.forEach(function (haber, index) {

        html += haberKarti(
            haber,
            index === 0
        );

    });

    container.innerHTML = html;

});
