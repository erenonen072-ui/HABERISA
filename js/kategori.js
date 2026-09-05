```javascript
"use strict";

/* =========================================================
   KATEGORİ AYARLARI
========================================================= */

const kategoriSayfalari = {

    "son-dakika": "Son Dakika",

    "gundem": "Gündem",

    "ekonomi": "Ekonomi",

    "spor": "Spor",

    "magazin": "Magazin",

    "dunya": "Dünya",

    "teknoloji": "Teknoloji",

    "saglik": "Sağlık",

    "kultur-sanat": "Kültür Sanat"

};


/* =========================================================
   AKTİF SAYFAYI BUL
========================================================= */

function aktifKategoriyiBul() {

    let sayfa =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "")
            .toLowerCase();

    return kategoriSayfalari[sayfa] || "Son Dakika";
}


/* =========================================================
   HTML GÜVENLİ HALE GETİR
========================================================= */

function htmlGuvenli(metin) {

    return String(metin || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   HABER KARTI
========================================================= */

function haberKartiOlustur(haber) {

    const slug =
        haber.slug ||
        slugOlustur(haber.baslik);

    const haberUrl =
        haber.url ||
        "/haber/" + slug;

    const sonDakika =
        haber.kategori === "Son Dakika";

    return `

        <a
            class="news-card"
            href="${haberUrl}"
        >

            <div class="news-card-image">

                <img
                    src="${haber.image}"
                    alt="${htmlGuvenli(haber.baslik)}"
                    loading="lazy"
                >

                ${
                    sonDakika
                    ?
                    `<span class="news-badge">
                        SON DAKİKA
                    </span>`
                    :
                    ""
                }

            </div>


            <div class="news-card-content">

                <div class="news-card-category">
                    ${htmlGuvenli(haber.kategori)}
                </div>

                <h2 class="news-card-title">
                    ${htmlGuvenli(haber.baslik)}
                </h2>

                <div class="news-card-meta">

                    <span>
                        ${htmlGuvenli(haber.date)}
                    </span>

                    <span class="news-card-time">
                        ${htmlGuvenli(haber.time)}
                    </span>

                </div>

            </div>

        </a>

    `;
}


/* =========================================================
   HABERLERİ GÖSTER
========================================================= */

function kategoriHaberleriniGoster() {

    const container =
        document.getElementById("categoryNews");

    const title =
        document.getElementById("categoryTitle");

    if (!container) return;

    const kategori =
        aktifKategoriyiBul();


    /* BAŞLIK */

    if (title) {

        title.textContent =
            kategori;

    }


    /* HABERLER */

    const liste =
        window.haberler.filter(function (haber) {

            return haber.kategori === kategori;

        });


    /* HABER YOK */

    if (!liste.length) {

        container.innerHTML = `

            <div class="no-news">
                Bu kategoride henüz haber bulunmuyor.
            </div>

        `;

        return;

    }


    /* YENİ HABER ÖNCE */

    liste.sort(function (a, b) {

        return Number(b.id) - Number(a.id);

    });


    /* KARTLAR */

    container.innerHTML =
        liste
            .map(haberKartiOlustur)
            .join("");

}


/* =========================================================
   AKTİF MENÜ
========================================================= */

function aktifMenuyuIsaretle() {

    const mevcut =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "")
            .toLowerCase();


    document
        .querySelectorAll(".nav-menu a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) return;


            const sayfa =
                href
                    .split("/")
                    .pop()
                    .replace(".html", "")
                    .toLowerCase();


            if (sayfa === mevcut) {

                link.classList.add("active");

            }

        });

}


/* =========================================================
   BAŞLAT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        kategoriHaberleriniGoster();

        aktifMenuyuIsaretle();

    }
);
```
