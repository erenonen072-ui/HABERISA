"use strict";

/* =========================================================
   HABERİSTA — PROFESYONEL KATEGORİ SİSTEMİ
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       HABER VERİSİNİ KONTROL ET
    ----------------------------------------------------- */

    if (!Array.isArray(window.haberler)) {
        console.error(
            "HABERİSTA: window.haberler bulunamadı. " +
            "haberler.js dosyasını kategori.js'den önce yükleyin."
        );
        return;
    }

    /* -----------------------------------------------------
       AKTİF KATEGORİ
    ----------------------------------------------------- */

    const aktifKategori =
        document.body.getAttribute("data-kategori");

    if (!aktifKategori) {
        console.error(
            "HABERİSTA: body üzerinde data-kategori bulunamadı."
        );
        return;
    }

    /* -----------------------------------------------------
       ELEMANLAR
    ----------------------------------------------------- */

    const newsGrid =
        document.getElementById("newsGrid");

    const kategoriBaslik =
        document.getElementById("kategoriBaslik");

    const kategoriAciklama =
        document.getElementById("kategoriAciklama");

    if (!newsGrid) {
        console.error(
            "HABERİSTA: #newsGrid bulunamadı."
        );
        return;
    }

    /* -----------------------------------------------------
       TÜRKÇE NORMALİZASYON
    ----------------------------------------------------- */

    function normalize(text) {
        return String(text || "")
            .trim()
            .toLocaleLowerCase("tr-TR");
    }

    /* -----------------------------------------------------
       KATEGORİ HABERLERİNİ FİLTRELE
    ----------------------------------------------------- */

    const kategoriHaberleri =
        window.haberler.filter(function (haber) {

            return normalize(haber.kategori) ===
                   normalize(aktifKategori);

        });

    /* -----------------------------------------------------
       SIRALAMA
       Önce tarih + saat bilgisi olanları göster
    ----------------------------------------------------- */

    function haberZamani(haber) {

        const tarih = String(haber.tarih || "");
        const saat = String(haber.saat || "00:00");

        const aylar = {
            "ocak": "01",
            "şubat": "02",
            "mart": "03",
            "nisan": "04",
            "mayıs": "05",
            "haziran": "06",
            "temmuz": "07",
            "ağustos": "08",
            "eylül": "09",
            "ekim": "10",
            "kasım": "11",
            "aralık": "12"
        };

        const parca = tarih.toLocaleLowerCase("tr-TR")
            .split(" ");

        if (parca.length >= 3) {

            const gun =
                String(parca[0]).padStart(2, "0");

            const ay =
                aylar[parca[1]] || "01";

            const yil =
                parca[2];

            return `${yil}-${ay}-${gun}T${saat}`;
        }

        return "1970-01-01T00:00";
    }

    kategoriHaberleri.sort(function (a, b) {

        return new Date(haberZamani(b)) -
               new Date(haberZamani(a));

    });

    /* -----------------------------------------------------
       SAYFA BAŞLIĞI
    ----------------------------------------------------- */

    document.title =
        `${aktifKategori} Haberleri - Haberİsta`;

    if (kategoriBaslik) {
        kategoriBaslik.textContent =
            aktifKategori;
    }

    /* -----------------------------------------------------
       KATEGORİ AÇIKLAMALARI
    ----------------------------------------------------- */

    const aciklamalar = {

        "Gündem":
            "Türkiye gündeminden son gelişmeler, önemli açıklamalar ve sıcak haberler.",

        "Dünya":
            "Dünyadan son dakika gelişmeleri, uluslararası haberler ve önemli gelişmeler.",

        "Ekonomi":
            "Ekonomi, piyasalar, finans, döviz ve gündemin öne çıkan ekonomik gelişmeleri.",

        "Spor":
            "Spor dünyasından son dakika gelişmeleri, maçlar, transferler ve önemli haberler.",

        "Magazin":
            "Magazin dünyasından son gelişmeler, ünlüler, etkinlikler ve gündem olan haberler.",

        "Teknoloji":
            "Teknoloji dünyasından yeni gelişmeler, yapay zeka, cihazlar ve dijital gündem.",

        "Kültür Sanat":
            "Kültür, sanat, sinema, müzik, kitap ve sanat dünyasından güncel haberler.",

        "Sağlık":
            "Sağlık alanından güncel gelişmeler, uzman görüşleri ve sağlık gündeminden haberler.",

        "Türkiye":
            "Türkiye'nin farklı bölgelerinden güncel gelişmeler ve önemli yerel haberler.",

        "Eğitim":
            "Eğitim gündeminden son gelişmeler, sınavlar, okullar ve öğrencileri ilgilendiren haberler."
    };

    if (kategoriAciklama) {

        kategoriAciklama.textContent =
            aciklamalar[aktifKategori] ||
            `${aktifKategori} kategorisinden en güncel haberler.`;

    }

    /* -----------------------------------------------------
       SECTION BAŞLIĞI
    ----------------------------------------------------- */

    const sectionTitle =
        document.querySelector(".section-title h2");

    if (sectionTitle) {

        sectionTitle.textContent =
            `${aktifKategori} Haberleri`;

    }

    /* -----------------------------------------------------
       HTML GÜVENLİĞİ
    ----------------------------------------------------- */

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

    /* -----------------------------------------------------
       TARİH FORMATLA
    ----------------------------------------------------- */

    function tarihGoster(haber) {

        if (haber.tarih && haber.saat) {

            return `
                <span class="news-card-date">
                    📅 ${escapeHTML(haber.tarih)}
                </span>

                <span class="news-card-time">
                    🕒 ${escapeHTML(haber.saat)}
                </span>
            `;

        }

        return `
            <span class="news-card-date">
                📰 Haberİsta
            </span>
        `;
    }

    /* -----------------------------------------------------
       GÖRSEL
    ----------------------------------------------------- */

    function gorselOlustur(haber) {

        const gorsel =
            escapeHTML(haber.gorsel || "");

        if (!gorsel) {

            return `
                <div class="news-card-image">
                    <div style="
                        width:100%;
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:38px;
                    ">
                        📰
                    </div>
                </div>
            `;

        }

        return `
            <div class="news-card-image">

                <img
                    src="${gorsel}"
                    alt="${escapeHTML(haber.baslik)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <span class="news-category">
                    ${escapeHTML(haber.kategori)}
                </span>

            </div>
        `;

    }

    /* -----------------------------------------------------
       HABER KARTI
    ----------------------------------------------------- */

    function haberKarti(haber) {

        const id =
            encodeURIComponent(haber.id);

        const baslik =
            escapeHTML(haber.baslik);

        const spot =
            escapeHTML(haber.spot);

        return `
            <article class="news-card">

                ${gorselOlustur(haber)}

                <div class="news-card-content">

                    <h3 class="news-card-title">

                        <a href="haber.html?id=${id}">
                            ${baslik}
                        </a>

                    </h3>

                    <p class="news-card-spot">
                        ${spot}
                    </p>

                    <div class="news-card-meta">

                        ${tarihGoster(haber)}

                    </div>

                </div>

            </article>
        `;

    }

    /* -----------------------------------------------------
       HABERLERİ GÖSTER
    ----------------------------------------------------- */

    if (!kategoriHaberleri.length) {

        newsGrid.innerHTML = `

            <div class="kategori-bos">

                <div class="kategori-bos-icon">
                    📰
                </div>

                <h3>
                    Bu kategoride henüz haber bulunmuyor
                </h3>

                <p>
                    Yeni haberler eklendiğinde burada
                    görüntülenecektir.
                </p>

            </div>

        `;

        return;
    }

    newsGrid.innerHTML =
        kategoriHaberleri
            .map(haberKarti)
            .join("");

    /* -----------------------------------------------------
       AKTİF NAV
    ----------------------------------------------------- */

    document
        .querySelectorAll(".category-nav a, nav a")
        .forEach(function (link) {

            const linkText =
                normalize(link.textContent);

            const kategori =
                normalize(aktifKategori);

            if (linkText === kategori) {

                link.classList.add("active");

            }

        });

    console.log(
        `HABERİSTA: ${aktifKategori} kategorisinde ` +
        `${kategoriHaberleri.length} haber gösteriliyor.`
    );

});
