"use strict";

/* =========================================================
   HABERİSTA - KATEGORİ SAYFASI
   Her kategori kendi haberlerini gösterir
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Haberler yoksa çık
    if (!Array.isArray(window.haberler)) {
        console.error("haberler.js bulunamadı veya haberler dizisi yok.");
        return;
    }

    const container = document.getElementById("kategori-listesi");

    if (!container) {
        console.error("kategori-listesi bulunamadı.");
        return;
    }

    /* =====================================================
       KATEGORİ AYARLARI
       ===================================================== */

    const kategoriler = {
        "Gündem": {
            dosya: "gundem.html",
            ikon: "📰",
            aciklama: "Türkiye'den son dakika ve önemli gelişmeler.",
            sinif: "gundem"
        },

        "Türkiye": {
            dosya: "turkiye.html",
            ikon: "🇹🇷",
            aciklama: "Türkiye'nin dört bir yanından güncel gelişmeler.",
            sinif: "turkiye"
        },

        "Dünya": {
            dosya: "dunya.html",
            ikon: "🌍",
            aciklama: "Dünyadan son dakika gelişmeleri ve önemli haberler.",
            sinif: "dunya"
        },

        "Ekonomi": {
            dosya: "ekonomi.html",
            ikon: "💰",
            aciklama: "Ekonomi, finans, piyasalar ve para gündemi.",
            sinif: "ekonomi"
        },

        "Spor": {
            dosya: "spor.html",
            ikon: "⚽",
            aciklama: "Futbol ve spor dünyasından son gelişmeler.",
            sinif: "spor"
        },

        "Eğitim": {
            dosya: "egitim.html",
            ikon: "🎓",
            aciklama: "Eğitim, sınavlar, okullar ve öğrencilerden haberler.",
            sinif: "egitim"
        },

        "Magazin": {
            dosya: "magazin.html",
            ikon: "⭐",
            aciklama: "Magazin dünyasından en yeni gelişmeler.",
            sinif: "magazin"
        },

        "Teknoloji": {
            dosya: "teknoloji.html",
            ikon: "💻",
            aciklama: "Teknoloji, yapay zeka, telefonlar ve dijital dünya.",
            sinif: "teknoloji"
        },

        "Kültür Sanat": {
            dosya: "kultur-sanat.html",
            ikon: "🎨",
            aciklama: "Kültür, sanat, sinema, müzik ve etkinlik haberleri.",
            sinif: "kultur-sanat"
        },

        "Sağlık": {
            dosya: "saglik.html",
            ikon: "🩺",
            aciklama: "Sağlık dünyasından bilgilendirici ve güncel haberler.",
            sinif: "saglik"
        }
    };

    /* =====================================================
       KATEGORİYİ BUL
       ===================================================== */

    const urlParams = new URLSearchParams(window.location.search);

    let aktifKategori = urlParams.get("kategori");

    /*
       Eğer kategori parametresi yoksa,
       sayfanın dosya adına göre bul.
    */

    if (!aktifKategori) {

        const dosya = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        const dosyaEslesme = {
            "gundem.html": "Gündem",
            "turkiye.html": "Türkiye",
            "dunya.html": "Dünya",
            "ekonomi.html": "Ekonomi",
            "spor.html": "Spor",
            "egitim.html": "Eğitim",
            "magazin.html": "Magazin",
            "teknoloji.html": "Teknoloji",
            "kultur-sanat.html": "Kültür Sanat",
            "saglik.html": "Sağlık"
        };

        aktifKategori = dosyaEslesme[dosya] || "Gündem";
    }

    /* =====================================================
       KATEGORİYİ NORMALLEŞTİR
       ===================================================== */

    function normalize(text) {
        return String(text || "")
            .trim()
            .toLocaleLowerCase("tr-TR")
            .replace(/ı/g, "i")
            .replace(/İ/g, "i");
    }

    const hedefKategori = normalize(aktifKategori);

    /* =====================================================
       SADECE AKTİF KATEGORİNİN HABERLERİ
       ===================================================== */

    let kategoriHaberleri = window.haberler.filter(haber => {

        if (!haber || !haber.kategori) {
            return false;
        }

        return normalize(haber.kategori) === hedefKategori;
    });

    /* =====================================================
       KATEGORİ YAZIMINI DÜZELT
       ===================================================== */

    const gercekKategori =
        Object.keys(kategoriler).find(
            kategori => normalize(kategori) === hedefKategori
        ) || aktifKategori;

    const ayar = kategoriler[gercekKategori] || {
        ikon: "📰",
        aciklama: "Güncel haberler.",
        sinif: "genel"
    };

    /* =====================================================
       SAYFA BAŞLIĞINI GÜNCELLE
       ===================================================== */

    document.title = `${gercekKategori} Haberleri | HABERİSTA`;

    const kategoriBaslik =
        document.querySelector("[data-kategori-baslik]");

    if (kategoriBaslik) {
        kategoriBaslik.textContent = gercekKategori;
    }

    const kategoriAciklama =
        document.querySelector("[data-kategori-aciklama]");

    if (kategoriAciklama) {
        kategoriAciklama.textContent = ayar.aciklama;
    }

    /* =====================================================
       KATEGORİ SINIFINI BODY'YE EKLE
       ===================================================== */

    document.body.classList.add(
        "kategori-" + ayar.sinif
    );

    /* =====================================================
       HABER YOKSA
       ===================================================== */

    if (kategoriHaberleri.length === 0) {

        container.innerHTML = `
            <div class="kategori-bos">
                <div class="bos-ikon">${ayar.ikon}</div>

                <h2>${gercekKategori}</h2>

                <p>
                    Bu kategoride henüz yayınlanmış haber bulunmuyor.
                </p>

                <a href="index.html" class="bos-btn">
                    Ana Sayfaya Dön
                </a>
            </div>
        `;

        return;
    }

    /* =====================================================
       HABER SAYISINI GÖSTER
       ===================================================== */

    const haberSayisi =
        document.querySelector("[data-haber-sayisi]");

    if (haberSayisi) {
        haberSayisi.textContent =
            `${kategoriHaberleri.length} haber`;
    }

    /* =====================================================
       HABER TARİHİ
       ===================================================== */

    function haberTarihi(haber) {

        if (haber.tarih && haber.saat) {
            return `${haber.tarih} • ${haber.saat}`;
        }

        if (haber.tarih) {
            return haber.tarih;
        }

        return "Güncel";
    }

    /* =====================================================
       HTML GÜVENLİK
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
       HABERLERİ OLUŞTUR
       ===================================================== */

    container.innerHTML = kategoriHaberleri
        .map((haber, index) => {

            const gorsel =
                haber.gorsel ||
                "images/haber-default.jpg";

            const baslik =
                escapeHTML(haber.baslik);

            const spot =
                escapeHTML(
                    haber.spot ||
                    haber.aciklama ||
                    "Haberin ayrıntıları için tıklayın."
                );

            const kategori =
                escapeHTML(haber.kategori);

            const tarih =
                escapeHTML(haberTarihi(haber));

            const id =
                encodeURIComponent(haber.id);

            /*
              İlk haber büyük,
              diğerleri normal kart.
            */

            if (index === 0) {

                return `
                    <article class="kategori-one-cikan">
                        
                        <a href="haber.html?id=${id}">
                            <img
                                src="${escapeHTML(gorsel)}"
                                alt="${baslik}"
                                loading="eager"
                            >
                        </a>

                        <div class="one-cikan-icerik">

                            <span class="haber-kategori">
                                ${ayar.ikon} ${kategori}
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
                            src="${escapeHTML(gorsel)}"
                            alt="${baslik}"
                            loading="lazy"
                        >
                    </a>

                    <div class="kategori-haber-icerik">

                        <span class="haber-kategori">
                            ${ayar.ikon} ${kategori}
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
                        </div>

                    </div>

                </article>
            `;
        })
        .join("");

});
