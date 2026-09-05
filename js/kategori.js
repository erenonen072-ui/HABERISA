(function () {

    "use strict";


    const newsGrid =
        document.getElementById("categoryNews");

    const categoryTitle =
        document.getElementById("categoryTitle");

    const categoryDescription =
        document.getElementById("categoryDescription");

    const newsCount =
        document.getElementById("newsCount");

    const emptyState =
        document.getElementById("emptyState");


    /*
     * Hangi kategori sayfasındayız?
     */

    const fileName =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const categories = {

        "son-dakika.html": {
            name: "Son Dakika",
            description:
                "Türkiye ve dünyadan son dakika gelişmeleri."
        },

        "gundem.html": {
            name: "Gündem",
            description:
                "Türkiye gündeminden en güncel haberler."
        },

        "ekonomi.html": {
            name: "Ekonomi",
            description:
                "Ekonomi, piyasalar ve finans dünyasından gelişmeler."
        },

        "spor.html": {
            name: "Spor",
            description:
                "Spor dünyasından son gelişmeler ve haberler."
        },

        "magazin.html": {
            name: "Magazin",
            description:
                "Magazin dünyasından güncel haberler."
        },

        "dunya.html": {
            name: "Dünya",
            description:
                "Dünyadan önemli gelişmeler ve son dakika haberleri."
        },

        "teknoloji.html": {
            name: "Teknoloji",
            description:
                "Teknoloji dünyasından en yeni gelişmeler."
        },

        "saglik.html": {
            name: "Sağlık",
            description:
                "Sağlık dünyasından güncel bilgiler ve gelişmeler."
        },

        "kultur-sanat.html": {
            name: "Kültür Sanat",
            description:
                "Kültür, sanat, sinema, müzik ve edebiyat haberleri."
        }

    };


    const currentCategory =
        categories[fileName];


    /*
     * Kategori bulunamadıysa
     */

    if (!currentCategory) {

        categoryTitle.textContent =
            "Haberler";

        categoryDescription.textContent =
            "Güncel haberler.";

    } else {

        categoryTitle.textContent =
            currentCategory.name;

        categoryDescription.textContent =
            currentCategory.description;

        document.title =
            currentCategory.name +
            " Haberleri | Haberİsta";

    }


    /*
     * Haberler.js kontrolü
     */

    const allNews =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];


    console.log(
        "Haberİsta kategori:",
        currentCategory
    );

    console.log(
        "Toplam haber:",
        allNews.length
    );


    /*
     * Haberleri filtrele
     */

    let filteredNews = [];


    if (currentCategory) {

        filteredNews =
            allNews.filter(function (haber) {

                return String(
                    haber.kategori || ""
                ).trim().toLowerCase()

                ===

                currentCategory.name
                    .trim()
                    .toLowerCase();

            });

    } else {

        filteredNews = allNews;

    }


    /*
     * Son dakika için ayrıca
     * kategori adı kontrolü
     */

    if (
        currentCategory &&
        currentCategory.name === "Son Dakika"
    ) {

        filteredNews =
            allNews.filter(function (haber) {

                return String(
                    haber.kategori || ""
                ).toLowerCase()
                === "son dakika";

            });

    }


    /*
     * Sayı
     */

    newsCount.textContent =
        filteredNews.length;


    /*
     * Haber yoksa
     */

    if (filteredNews.length === 0) {

        newsGrid.innerHTML = "";

        emptyState.style.display =
            "block";

        return;

    }


    emptyState.style.display =
        "none";


    /*
     * Haberleri ekrana bas
     */

    newsGrid.innerHTML =
        filteredNews
            .map(createNewsCard)
            .join("");


    /*
     * HABER KARTI
     */

    function createNewsCard(haber) {

        const title =
            haber.baslik ||
            "Başlıksız Haber";


        const category =
            haber.kategori ||
            "Haber";


        const date =
            haber.date ||
            haber.tarih ||
            "";


        const time =
            haber.time ||
            haber.saat ||
            "";


        const views =
            haber.views ??
            haber.okunma ??
            "";


        const image =
            getImage(
                haber.image ||
                haber.resim ||
                haber.gorsel
            );


        /*
         * Slug
         */

        let slug =
            haber.slug;


        if (
            !slug &&
            typeof window.slugOlustur ===
            "function"
        ) {

            slug =
                window.slugOlustur(title);

        }


        const url =
            "/haber/" +
            encodeURIComponent(slug);


        return `

            <article
                class="category-news-card"
                onclick="window.location.href='${url}'"
            >

                <div class="card-image">

                    <img
                        src="${escapeAttribute(image)}"
                        alt="${escapeAttribute(title)}"
                        loading="lazy"
                        onerror="
                            this.onerror=null;
                            this.src='/images/default-news.jpg';
                        "
                    >

                    <span class="card-category">
                        ${escapeHtml(category)}
                    </span>

                </div>


                <div class="card-content">

                    <h2>
                        ${escapeHtml(title)}
                    </h2>


                    <div class="card-meta">

                        ${
                            date
                            ? `<span>${escapeHtml(date)}</span>`
                            : ""
                        }

                        ${
                            time
                            ? `<span>${escapeHtml(time)}</span>`
                            : ""
                        }

                        ${
                            views !== ""
                            ? `<span>👁 ${escapeHtml(String(views))}</span>`
                            : ""
                        }

                    </div>

                </div>

            </article>

        `;

    }


    /*
     * FOTOĞRAF YOLU
     */

    function getImage(src) {

        if (!src) {

            return "/images/default-news.jpg";

        }


        src =
            String(src).trim();


        if (
            src.startsWith("http://") ||
            src.startsWith("https://") ||
            src.startsWith("data:")
        ) {

            return src;

        }


        return "/" +
            src.replace(/^\/+/, "");

    }


    /*
     * HTML güvenliği
     */

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function escapeAttribute(value) {

        return escapeHtml(value);

    }


})();
