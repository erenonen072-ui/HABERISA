"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // HTML'den kategori bilgisini al
    const kategori = document.body.dataset.kategori;

    const newsGrid = document.getElementById("newsGrid");
    const kategoriBaslik = document.getElementById("kategoriBaslik");
    const kategoriAciklama = document.getElementById("kategoriAciklama");

    if (!newsGrid || !kategori) return;

    // Kategori başlığı
    if (kategoriBaslik) {
        kategoriBaslik.textContent = kategori;
    }

    if (kategoriAciklama) {
        kategoriAciklama.textContent =
            `${kategori} kategorisinden en güncel haberler`;
    }

    // haberler.js'deki haber verilerini bekle
    function haberleriYukle() {

        if (!Array.isArray(window.haberler)) {
            console.error("haberler dizisi bulunamadı.");
            newsGrid.innerHTML = `
                <div class="kategori-hata">
                    Haberler yüklenemedi.
                </div>
            `;
            return;
        }

        // SADECE BU KATEGORİ
        const kategoriHaberleri = window.haberler.filter(haber => {

            return String(haber.kategori || "")
                .trim()
                .toLocaleLowerCase("tr-TR") ===
                kategori.trim().toLocaleLowerCase("tr-TR");

        });

        console.log(
            `${kategori}: ${kategoriHaberleri.length} haber bulundu.`
        );

        if (kategoriHaberleri.length === 0) {

            newsGrid.innerHTML = `
                <div class="kategori-bos">
                    <div class="kategori-bos-icon">📰</div>
                    <h3>Henüz haber bulunamadı</h3>
                    <p>
                        Bu kategoride şu anda yayınlanmış haber bulunmuyor.
                    </p>
                </div>
            `;

            return;
        }

        newsGrid.innerHTML = kategoriHaberleri
            .map(haber => haberKartiOlustur(haber))
            .join("");
    }

    function haberKartiOlustur(haber) {

        const baslik = haber.baslik || "Başlıksız haber";

        const spot =
            haber.spot ||
            haber.aciklama ||
            "";

        const tarih =
            haber.tarih ||
            haber.date ||
            "";

        const resim =
            haber.resim ||
            haber.gorsel ||
            haber.image ||
            haber.foto ||
            "images/logo.jpeg";

        const url =
            haber.url ||
            haber.link ||
            `/haber/${slugOlustur(baslik)}`;

        return `
            <article class="kategori-haber-card">

                <a href="${url}" class="kategori-haber-image">

                    <img
                        src="${resim}"
                        alt="${baslik}"
                        loading="lazy"
                        onerror="this.src='images/logo.jpeg'"
                    >

                    <span class="kategori-etiket">
                        ${kategori}
                    </span>

                </a>

                <div class="kategori-haber-content">

                    ${
                        tarih
                            ? `<div class="kategori-haber-tarih">
                                ${tarih}
                               </div>`
                            : ""
                    }

                    <h3>
                        <a href="${url}">
                            ${baslik}
                        </a>
                    </h3>

                    ${
                        spot
                            ? `<p>${spot}</p>`
                            : ""
                    }

                    <a href="${url}" class="devamini-oku">
                        Haberin Devamı →
                    </a>

                </div>

            </article>
        `;
    }

    function slugOlustur(metin) {

        return String(metin || "")
            .toLocaleLowerCase("tr-TR")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }

    // haberler.js biraz geç yüklenirse bekle
    let deneme = 0;

    const interval = setInterval(function () {

        deneme++;

        if (Array.isArray(window.haberler)) {

            clearInterval(interval);
            haberleriYukle();

        }

        if (deneme >= 30) {

            clearInterval(interval);

            if (!Array.isArray(window.haberler)) {

                console.error(
                    "haberler.js 15 saniye içinde yüklenemedi."
                );

            }

        }

    }, 500);

});
