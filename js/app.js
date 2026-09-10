"use strict";

/* =========================================================
   HABERİSTA - APP.JS
   PROFESYONEL ANA SAYFA + KATEGORİ SİSTEMİ
   20 MANŞET + ARAMA + SON DAKİKA + ÇOK OKUNAN
   MOBİL MENÜ + BİLDİRİM + YUKARI ÇIK
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       TEMEL VERİ
       ========================================================= */

    const haberler = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    const aktifKategori =
        document.body.getAttribute("data-kategori");


    /* =========================================================
       HTML GÜVENLİĞİ
       ========================================================= */

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =========================================================
       TÜRKÇE NORMALİZASYON
       ========================================================= */

    function normalizeCategory(value) {
        return String(value || "")
            .trim()
            .toLocaleLowerCase("tr-TR");
    }


    /* =========================================================
       ELEMENTLER
       ========================================================= */

    const heroSlider =
        document.querySelector(".hero-slider");

    const heroMain =
        document.getElementById("heroMain");

    const heroNumbers =
        document.getElementById("heroNumbers");

    const heroPrev =
        document.getElementById("heroPrev");

    const heroNext =
        document.getElementById("heroNext");

    const newsGrid =
        document.getElementById("newsGrid");

    const popularNews =
        document.getElementById("popularNews");

    const breakingNews =
        document.getElementById("breakingNews");

    const searchBtn =
        document.getElementById("searchBtn");

    const closeSearch =
        document.getElementById("closeSearch");

    const searchPanel =
        document.getElementById("searchPanel");

    const searchInput =
        document.getElementById("searchInput");

    const searchResultInfo =
        document.getElementById("searchResultInfo");

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const notificationBtn =
        document.getElementById("notificationBtn");


    /* =========================================================
       MANŞET NUMARALARINI MANŞETTEN AYIR
       ========================================================= */

    function separateHeroNumbers() {

        if (!heroNumbers || !heroSlider) {
            return;
        }

        /*
         * Eğer #heroNumbers yanlışlıkla .hero-slider'ın
         * içinde bulunuyorsa dışarı çıkarıyoruz.
         *
         * Böylece:
         *
         * MANŞET
         * ↓
         * MANŞET NUMARALARI
         * ↓
         * HABER KARTLARI
         *
         * şeklinde ayrı alanlar olur.
         */

        if (heroSlider.contains(heroNumbers)) {

            const parent =
                heroSlider.parentNode;

            if (parent) {

                parent.insertBefore(
                    heroNumbers,
                    heroSlider.nextSibling
                );

            }

        }

    }

    separateHeroNumbers();


    /* =========================================================
       HABER YARDIMCILARI
       ========================================================= */

    function getSlug(haber) {

        if (haber.slug) {
            return haber.slug;
        }

        if (typeof window.slugOlustur === "function") {

            return window.slugOlustur(
                haber.baslik
            );

        }

        return String(haber.baslik || "")
            .toLocaleLowerCase("tr-TR")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/â/g, "a")
            .replace(/î/g, "i")
            .replace(/û/g, "u")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "");

    }


    function getUrl(haber) {

        if (haber.url) {
            return haber.url;
        }

        if (haber.id !== undefined) {

            return "haber.html?id=" +
                encodeURIComponent(haber.id);

        }

        /*
         * Slug sistemi varsa onu da destekle.
         */

        const slug =
            getSlug(haber);

        if (slug) {
            return "haber.html?slug=" +
                encodeURIComponent(slug);
        }

        return "haber.html";

    }


    function getImage(haber) {

        return haber.gorsel ||
            haber.image ||
            haber.resim ||
            "/images/logo.jpeg";

    }


    function getCategory(haber) {

        return haber.kategori ||
            haber.category ||
            "Gündem";

    }


    function getTitle(haber) {

        return haber.baslik ||
            haber.title ||
            "Haberİsta";

    }


    function getSpot(haber) {

        return haber.spot ||
            haber.aciklama ||
            haber.description ||
            "";

    }


    /* =========================================================
       TARİH
       ========================================================= */

    function formatDate(haber) {

        if (
            haber.tarih &&
            haber.saat
        ) {

            return `${haber.tarih} • ${haber.saat}`;

        }

        if (haber.tarih) {
            return haber.tarih;
        }

        if (haber.publishedAt) {

            const date =
                new Date(
                    haber.publishedAt
                );

            if (
                !Number.isNaN(
                    date.getTime()
                )
            ) {

                return date.toLocaleDateString(
                    "tr-TR",
                    {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    }
                );

            }

        }

        return "";

    }


    /* =========================================================
       TARİH SIRALAMA
       ========================================================= */

    function parseTurkishDate(
        tarih,
        saat
    ) {

        if (!tarih) {
            return 0;
        }

        const aylar = {

            "ocak": 0,
            "şubat": 1,
            "mart": 2,
            "nisan": 3,
            "mayıs": 4,
            "haziran": 5,
            "temmuz": 6,
            "ağustos": 7,
            "eylül": 8,
            "ekim": 9,
            "kasım": 10,
            "aralık": 11

        };

        const parcalar =
            String(tarih)
                .trim()
                .toLocaleLowerCase("tr-TR")
                .split(/\s+/);

        if (parcalar.length >= 3) {

            const gun =
                Number(parcalar[0]);

            const ay =
                aylar[parcalar[1]];

            const yil =
                Number(parcalar[2]);

            if (
                !Number.isNaN(gun) &&
                ay !== undefined &&
                !Number.isNaN(yil)
            ) {

                const saatParcalari =
                    String(
                        saat || "00:00"
                    ).split(":");

                const saatNum =
                    Number(
                        saatParcalari[0]
                    ) || 0;

                const dakikaNum =
                    Number(
                        saatParcalari[1]
                    ) || 0;

                return new Date(
                    yil,
                    ay,
                    gun,
                    saatNum,
                    dakikaNum
                ).getTime();

            }

        }

        const normalDate =
            new Date(
                `${tarih} ${saat || ""}`
            );

        if (
            !Number.isNaN(
                normalDate.getTime()
            )
        ) {

            return normalDate.getTime();

        }

        return 0;

    }


    function getNewsTime(haber) {

        if (haber.publishedAt) {

            const timestamp =
                new Date(
                    haber.publishedAt
                ).getTime();

            if (
                !Number.isNaN(timestamp)
            ) {

                return timestamp;

            }

        }

        return parseTurkishDate(
            haber.tarih,
            haber.saat
        );

    }


    function sortNews(list) {

        return [...list].sort(
            function (a, b) {

                const dateA =
                    getNewsTime(a);

                const dateB =
                    getNewsTime(b);

                if (
                    dateA !== dateB
                ) {

                    return dateB - dateA;

                }

                return Number(
                    b.id || 0
                ) -
                Number(
                    a.id || 0
                );

            }
        );

    }


    /* =========================================================
       KATEGORİ FİLTRESİ
       ========================================================= */

    let filteredNews = haberler;

    if (aktifKategori) {

        filteredNews =
            haberler.filter(
                function (haber) {

                    return normalizeCategory(
                        haber.kategori
                    ) === normalizeCategory(
                        aktifKategori
                    );

                }
            );

    }


    const sortedNews =
        sortNews(filteredNews);


    const pageNews =
        aktifKategori
            ? sortedNews
            : sortNews(haberler);


    /* =========================================================
       KATEGORİ BAŞLIK BİLGİLERİ
       ========================================================= */

    if (aktifKategori) {

        const kategoriBaslik =
            document.getElementById(
                "kategoriBaslik"
            );

        const kategoriAciklama =
            document.getElementById(
                "kategoriAciklama"
            );

        const sectionTitle =
            document.querySelector(
                ".section-title h2"
            );

        const aciklamalar = {

            "Gündem":
                "Türkiye gündeminden son gelişmeler, önemli açıklamalar ve sıcak haberler.",

            "Dünya":
                "Dünyadan son dakika gelişmeleri, uluslararası gelişmeler ve önemli haberler.",

            "Ekonomi":
                "Ekonomi, finans, piyasalar, döviz ve gündemin öne çıkan ekonomik gelişmeleri.",

            "Spor":
                "Spor dünyasından son dakika gelişmeleri, maçlar, transferler ve önemli haberler.",

            "Magazin":
                "Magazin dünyasından son gelişmeler ve gündem olan haberler.",

            "Teknoloji":
                "Teknoloji, yapay zeka, dijital dünya ve yeni teknolojilerden güncel haberler.",

            "Kültür Sanat":
                "Kültür, sanat, sinema, müzik ve sanat dünyasından güncel gelişmeler.",

            "Sağlık":
                "Sağlık alanından güncel gelişmeler ve sağlık gündeminden haberler.",

            "Türkiye":
                "Türkiye'nin farklı bölgelerinden güncel gelişmeler ve önemli haberler.",

            "Eğitim":
                "Eğitim gündeminden son gelişmeler, sınavlar ve öğrencileri ilgilendiren haberler."

        };


        if (kategoriBaslik) {

            kategoriBaslik.textContent =
                aktifKategori;

        }


        if (kategoriAciklama) {

            kategoriAciklama.textContent =
                aciklamalar[aktifKategori] ||
                `${aktifKategori} kategorisinden en güncel haberler.`;

        }


        if (sectionTitle) {

            sectionTitle.textContent =
                `${aktifKategori} Haberleri`;

        }


        document.title =
            `${aktifKategori} Haberleri - Haberİsta`;

    }


    /* =========================================================
       HERO - 20 MANŞET
       ========================================================= */

    let currentHero = 0;

    const heroSource =
        pageNews;

    const heroNews =
        heroSource.slice(
            0,
            Math.min(
                20,
                heroSource.length
            )
        );


    /* =========================================================
       HERO GÖSTER
       ========================================================= */

    function renderHero() {

        if (
            !heroMain ||
            !heroNews.length
        ) {

            if (heroNumbers) {
                heroNumbers.innerHTML = "";
            }

            return;

        }


        if (
            currentHero >=
            heroNews.length
        ) {

            currentHero = 0;

        }


        if (
            currentHero < 0
        ) {

            currentHero =
                heroNews.length - 1;

        }


        const haber =
            heroNews[currentHero];


        heroMain.innerHTML = `

            <a
                class="hero-link"
                href="${escapeHTML(
                    getUrl(haber)
                )}"
                aria-label="${escapeHTML(
                    getTitle(haber)
                )}"
            >

                <img
                    class="hero-image"
                    src="${escapeHTML(
                        getImage(haber)
                    )}"
                    alt="${escapeHTML(
                        getTitle(haber)
                    )}"
                    loading="${
                        currentHero === 0
                            ? "eager"
                            : "lazy"
                    }"
                    onerror="
                        this.onerror=null;
                        this.src='/images/logo.jpeg';
                    "
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(
                            getCategory(haber)
                        )}
                    </span>

                    <h2 class="hero-title">
                        ${escapeHTML(
                            getTitle(haber)
                        )}
                    </h2>

                    ${
                        getSpot(haber)
                            ? `
                                <p class="hero-spot">
                                    ${escapeHTML(
                                        getSpot(haber)
                                    )}
                                </p>
                            `
                            : ""
                    }

                    <div class="hero-meta">
                        ${escapeHTML(
                            formatDate(haber)
                        )}
                    </div>

                </div>

            </a>

        `;


        renderHeroNumbers();

    }


    /* =========================================================
       HERO NUMARALARI
       ========================================================= */

    function renderHeroNumbers() {

        if (!heroNumbers) {
            return;
        }


        if (!heroNews.length) {

            heroNumbers.innerHTML = "";

            return;

        }


        heroNumbers.innerHTML =
            heroNews
                .map(
                    function (
                        haber,
                        index
                    ) {

                        return `

                            <button
                                type="button"
                                class="hero-number ${
                                    index ===
                                    currentHero
                                        ? "active"
                                        : ""
                                }"
                                data-hero-index="${index}"
                                aria-label="${
                                    index + 1
                                }. manşet: ${
                                    escapeHTML(
                                        getTitle(haber)
                                    )
                                }"
                                title="${escapeHTML(
                                    getTitle(haber)
                                )}"
                            >
                                ${index + 1}
                            </button>

                        `;

                    }
                )
                .join("");


        heroNumbers
            .querySelectorAll(
                ".hero-number"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            currentHero =
                                Number(
                                    button.dataset
                                        .heroIndex
                                );

                            renderHero();

                            startHeroTimer();

                        }
                    );

                }
            );

    }


    /* =========================================================
       HERO ÖNCEKİ
       ========================================================= */

    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            function () {

                if (!heroNews.length) {
                    return;
                }

                currentHero--;

                if (
                    currentHero < 0
                ) {

                    currentHero =
                        heroNews.length - 1;

                }

                renderHero();

                startHeroTimer();

            }
        );

    }


    /* =========================================================
       HERO SONRAKİ
       ========================================================= */

    if (heroNext) {

        heroNext.addEventListener(
            "click",
            function () {

                if (!heroNews.length) {
                    return;
                }

                currentHero++;

                if (
                    currentHero >=
                    heroNews.length
                ) {

                    currentHero = 0;

                }

                renderHero();

                startHeroTimer();

            }
        );

    }


    renderHero();


    /* =========================================================
       HERO OTOMATİK GEÇİŞ
       ========================================================= */

    let heroTimer = null;


    function stopHeroTimer() {

        if (heroTimer) {

            clearInterval(
                heroTimer
            );

            heroTimer = null;

        }

    }


    function startHeroTimer() {

        stopHeroTimer();


        if (
            heroNews.length <= 1
        ) {

            return;

        }


        heroTimer =
            setInterval(
                function () {

                    currentHero++;

                    if (
                        currentHero >=
                        heroNews.length
                    ) {

                        currentHero = 0;

                    }

                    renderHero();

                },
                6500
            );

    }


    startHeroTimer();


    /* =========================================================
       MANŞET ÜZERİNDE DURDUR
       ========================================================= */

    if (heroMain) {

        heroMain.addEventListener(
            "mouseenter",
            stopHeroTimer
        );

        heroMain.addEventListener(
            "mouseleave",
            startHeroTimer
        );

    }


    /* =========================================================
       SON DAKİKA
       ========================================================= */

    function renderBreakingNews() {

        if (!breakingNews) {
            return;
        }


        const latest =
            pageNews.slice(
                0,
                Math.min(
                    8,
                    pageNews.length
                )
            );


        if (!latest.length) {

            breakingNews.innerHTML = "";

            return;

        }


        const items =
            latest
                .map(
                    function (haber) {

                        return `

                            <a
                                class="breaking-item"
                                href="${escapeHTML(
                                    getUrl(haber)
                                )}"
                            >

                                <span class="breaking-label">
                                    SON DAKİKA
                                </span>

                                <span class="breaking-title">
                                    ${escapeHTML(
                                        getTitle(haber)
                                    )}
                                </span>

                            </a>

                        `;

                    }
                )
                .join("");


        /*
         * Ticker'ın kesintisiz dönmesi için
         * listeyi iki kez oluşturuyoruz.
         */

        breakingNews.innerHTML = `

            <div class="breaking-inner">

                <div class="breaking-heading">

                    <span class="breaking-pulse"></span>

                    <strong>
                        SON DAKİKA
                    </strong>

                </div>

                <div class="breaking-track">

                    <div class="breaking-list">

                        ${items}
                        ${items}

                    </div>

                </div>

            </div>

        `;

    }


    renderBreakingNews();


    /* =========================================================
       HABER KARTI
       ========================================================= */

    function createNewsCard(haber) {

        return `

            <article
                class="news-card"
                data-id="${escapeHTML(
                    haber.id
                )}"
            >

                <a
                    class="news-card-link"
                    href="${escapeHTML(
                        getUrl(haber)
                    )}"
                >

                    <div class="news-card-image">

                        <img
                            src="${escapeHTML(
                                getImage(haber)
                            )}"
                            alt="${escapeHTML(
                                getTitle(haber)
                            )}"
                            loading="lazy"
                            onerror="
                                this.onerror=null;
                                this.src='/images/logo.jpeg';
                            "
                        >

                    </div>


                    <div class="news-card-content">

                        <span class="news-card-category">
                            ${escapeHTML(
                                getCategory(haber)
                            )}
                        </span>

                        <h3>
                            ${escapeHTML(
                                getTitle(haber)
                            )}
                        </h3>

                        ${
                            getSpot(haber)
                                ? `
                                    <p class="news-card-spot">
                                        ${escapeHTML(
                                            getSpot(haber)
                                        )}
                                    </p>
                                `
                                : ""
                        }

                        <div class="news-card-meta">
                            ${escapeHTML(
                                formatDate(haber)
                            )}
                        </div>

                    </div>

                </a>

            </article>

        `;

    }


    /* =========================================================
       HABERLERİ GÖSTER
       ========================================================= */

    function renderNews(list) {

        if (!newsGrid) {
            return;
        }


        if (!list.length) {

            newsGrid.innerHTML = `

                <div class="no-results">

                    <div class="no-results-icon">
                        📰
                    </div>

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Bu kategoride henüz
                        yayınlanmış haber bulunmuyor.
                    </p>

                </div>

            `;

            return;

        }


        newsGrid.innerHTML =
            list
                .map(
                    createNewsCard
                )
                .join("");


        /*
         * Kartların içerik yüksekliğini eşitle.
         * CSS yapısını bozmadan yalnızca JS tarafında
         * kartları aynı yükseklikte tutar.
         */

        requestAnimationFrame(function () {

            const cards =
                newsGrid.querySelectorAll(
                    ".news-card"
                );

            if (!cards.length) {
                return;
            }

            cards.forEach(function (card) {
                card.style.height = "auto";
            });

            let maxHeight = 0;

            cards.forEach(function (card) {

                maxHeight =
                    Math.max(
                        maxHeight,
                        card.offsetHeight
                    );

            });

            cards.forEach(function (card) {

                card.style.height =
                    maxHeight + "px";

            });

        });

    }


    /* =========================================================
       ANA HABERLER
       ========================================================= */

    renderNews(pageNews);


    /* =========================================================
       ÇOK OKUNAN HABERLER
       ========================================================= */

    function getPopularNews() {

        /*
         * Görüntülenme varsa ona göre,
         * yoksa haber sırasına göre göster.
         */

        return [...pageNews]
            .sort(
                function (a, b) {

                    const goruntulenmeA =
                        Number(
                            a.goruntulenme ||
                            a.views ||
                            a.goruntulenmeSayisi ||
                            0
                        );

                    const goruntulenmeB =
                        Number(
                            b.goruntulenme ||
                            b.views ||
                            b.goruntulenmeSayisi ||
                            0
                        );

                    if (
                        goruntulenmeA !==
                        goruntulenmeB
                    ) {

                        return (
                            goruntulenmeB -
                            goruntulenmeA
                        );

                    }

                    return getNewsTime(b) -
                           getNewsTime(a);

                }
            )
            .slice(
                0,
                5
            );

    }


    function renderPopularNews() {

        if (!popularNews) {
            return;
        }


        const popular =
            getPopularNews();


        if (!popular.length) {

            popularNews.innerHTML = "";

            return;

        }


        popularNews.innerHTML =
            popular
                .map(
                    function (
                        haber,
                        index
                    ) {

                        return `

                            <a
                                class="popular-item"
                                href="${escapeHTML(
                                    getUrl(haber)
                                )}"
                            >

                                <span class="popular-number">
                                    ${index + 1}
                                </span>


                                <div class="popular-image">

                                    <img
                                        src="${escapeHTML(
                                            getImage(haber)
                                        )}"
                                        alt="${escapeHTML(
                                            getTitle(haber)
                                        )}"
                                        loading="lazy"
                                        onerror="
                                            this.onerror=null;
                                            this.src='/images/logo.jpeg';
                                        "
                                    >

                                </div>


                                <div class="popular-content">

                                    <span class="popular-category">
                                        ${escapeHTML(
                                            getCategory(haber)
                                        )}
                                    </span>

                                    <h3>
                                        ${escapeHTML(
                                            getTitle(haber)
                                        )}
                                    </h3>

                                    <span class="popular-date">
                                        ${escapeHTML(
                                            formatDate(haber)
                                        )}
                                    </span>

                                </div>

                            </a>

                        `;

                    }
                )
                .join("");


        /*
         * Çok okunan kartlarını da eşitle.
         */

        requestAnimationFrame(function () {

            const cards =
                popularNews.querySelectorAll(
                    ".popular-item"
                );

            if (!cards.length) {
                return;
            }

            cards.forEach(function (card) {
                card.style.height = "auto";
            });

            let maxHeight = 0;

            cards.forEach(function (card) {

                maxHeight =
                    Math.max(
                        maxHeight,
                        card.offsetHeight
                    );

            });

            cards.forEach(function (card) {

                card.style.height =
                    maxHeight + "px";

            });

        });

    }


    renderPopularNews();


    /* =========================================================
       ARAMA AÇ
       ========================================================= */

    function openSearch() {

        if (!searchPanel) {
            return;
        }


        searchPanel.classList.add(
            "active"
        );


        setTimeout(
            function () {

                if (searchInput) {
                    searchInput.focus();
                }

            },
            100
        );

    }


    /* =========================================================
       ARAMA KAPAT
       ========================================================= */

    function closeSearchPanel() {

        if (!searchPanel) {
            return;
        }


        searchPanel.classList.remove(
            "active"
        );


        if (searchInput) {
            searchInput.value = "";
        }


        if (searchResultInfo) {

            searchResultInfo.innerHTML =
                "";

        }


        renderNews(pageNews);

    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                if (
                    searchPanel &&
                    searchPanel.classList.contains(
                        "active"
                    )
                ) {

                    closeSearchPanel();

                } else {

                    openSearch();

                }

            }
        );

    }


    if (closeSearch) {

        closeSearch.addEventListener(
            "click",
            closeSearchPanel
        );

    }


    /* =========================================================
       ARAMA
       ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value
                        .trim()
                        .toLocaleLowerCase(
                            "tr-TR"
                        );


                if (!query) {

                    if (searchResultInfo) {

                        searchResultInfo.innerHTML =
                            "";

                    }

                    renderNews(pageNews);

                    return;

                }


                const results =
                    pageNews.filter(
                        function (haber) {

                            const title =
                                String(
                                    haber.baslik ||
                                    haber.title ||
                                    ""
                                ).toLocaleLowerCase(
                                    "tr-TR"
                                );


                            const spot =
                                String(
                                    haber.spot ||
                                    haber.aciklama ||
                                    haber.description ||
                                    ""
                                ).toLocaleLowerCase(
                                    "tr-TR"
                                );


                            const category =
                                String(
                                    haber.kategori ||
                                    haber.category ||
                                    ""
                                ).toLocaleLowerCase(
                                    "tr-TR"
                                );


                            const content =
                                String(
                                    haber.icerik ||
                                    haber.content ||
                                    ""
                                ).toLocaleLowerCase(
                                    "tr-TR"
                                );


                            return (

                                title.includes(
                                    query
                                ) ||

                                spot.includes(
                                    query
                                ) ||

                                category.includes(
                                    query
                                ) ||

                                content.includes(
                                    query
                                )

                            );

                        }
                    );


                if (searchResultInfo) {

                    searchResultInfo.innerHTML = `

                        <strong>
                            ${results.length}
                        </strong>

                        haber bulundu.

                        <span>
                            “${escapeHTML(
                                query
                            )}”
                        </span>

                    `;

                }


                renderNews(results);

            }
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeSearchPanel();

                }


                if (
                    event.key === "Enter"
                ) {

                    const query =
                        searchInput.value.trim();


                    if (query) {

                        const latestSection =
                            document.querySelector(
                                ".latest-section"
                            );


                        window.scrollTo({

                            top:
                                latestSection
                                    ? latestSection
                                        .offsetTop - 80
                                    : 0,

                            behavior:
                                "smooth"

                        });

                    }

                }

            }
        );

    }


    /* =========================================================
       MOBİL MENÜ
       ========================================================= */

    function openMobileMenu() {

        if (!mobileMenu) {
            return;
        }


        mobileMenu.classList.add(
            "active"
        );


        if (menuBtn) {

            menuBtn.classList.add(
                "active"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        document.body.classList.add(
            "menu-open"
        );

    }


    function closeMobileMenu() {

        if (!mobileMenu) {
            return;
        }


        mobileMenu.classList.remove(
            "active"
        );


        if (menuBtn) {

            menuBtn.classList.remove(
                "active"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        document.body.classList.remove(
            "menu-open"
        );

    }


    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );


        menuBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                if (
                    mobileMenu &&
                    mobileMenu.classList.contains(
                        "active"
                    )
                ) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );

    }


    /* =========================================================
       KATEGORİ AKTİF NAV
       ========================================================= */

    function normalizePath(path) {

        if (!path) {
            return "/";
        }


        let result =
            String(path)
                .split("?")[0]
                .split("#")[0];


        if (
            !result.startsWith("/")
        ) {

            result =
                "/" + result;

        }


        result =
            result.replace(
                /\/+/g,
                "/"
            );


        result =
            result.replace(
                /\/+$/,
                ""
            );


        return result || "/";

    }


    function setActiveCategory() {

        const currentPath =
            normalizePath(
                window.location.pathname
            );


        const categoryLinks =
            document.querySelectorAll(
                ".category-nav a, .mobile-menu a, nav a"
            );


        categoryLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (!href) {
                    return;
                }


                if (
                    href === "#" ||
                    href.startsWith("http://") ||
                    href.startsWith("https://") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("javascript:")
                ) {

                    return;

                }


                const linkPath =
                    normalizePath(
                        href
                    );


                link.classList.remove(
                    "active"
                );


                if (
                    linkPath ===
                    currentPath
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    setActiveCategory();


    /* =========================================================
       MOBİL MENÜ LİNKLERİ
       ========================================================= */

    if (mobileMenu) {

        mobileMenu
            .querySelectorAll("a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            closeMobileMenu();

                        }
                    );

                }
            );

    }


    /* =========================================================
       DIŞARI TIKLAYINCA MENÜ KAPAT
       ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mobileMenu ||
                !menuBtn
            ) {

                return;

            }


            if (
                mobileMenu.classList.contains(
                    "active"
                ) &&
                !mobileMenu.contains(
                    event.target
                ) &&
                !menuBtn.contains(
                    event.target
                )
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =========================================================
       ESC
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Escape"
            ) {

                return;

            }


            closeSearchPanel();

            closeMobileMenu();

        }
    );


    /* =========================================================
       BİLDİRİMLER
       ========================================================= */

    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            async function () {

                if (
                    !(
                        "Notification"
                        in window
                    )
                ) {

                    alert(
                        "Tarayıcınız bildirim özelliğini desteklemiyor."
                    );

                    return;

                }


                try {

                    const permission =
                        await Notification
                            .requestPermission();


                    if (
                        permission ===
                        "granted"
                    ) {

                        notificationBtn
                            .classList
                            .add(
                                "enabled"
                            );


                        notificationBtn.innerHTML =
                            "🔔 Bildirimler Açık";


                        new Notification(
                            "Haberİsta",
                            {
                                body:
                                    "Son dakika haberlerinden anında haberdar olabilirsiniz."
                            }
                        );

                    } else {

                        notificationBtn.innerHTML =
                            "🔕 Bildirimleri Aç";

                    }

                } catch (error) {

                    console.warn(
                        "Bildirim izni alınamadı:",
                        error
                    );

                }

            }
        );

    }


    /* =========================================================
       BİLDİRİM DURUMUNU KONTROL ET
       ========================================================= */

    if (
        notificationBtn &&
        "Notification" in window
    ) {

        if (
            Notification.permission ===
            "granted"
        ) {

            notificationBtn
                .classList
                .add("enabled");

            notificationBtn.innerHTML =
                "🔔 Bildirimler Açık";

        }

    }


    /* =========================================================
       YUKARI ÇIK
       ========================================================= */

    let backTop =
        document.getElementById(
            "backToTop"
        );


    if (!backTop) {

        backTop =
            document.createElement(
                "button"
            );


        backTop.id =
            "backToTop";


        backTop.className =
            "back-to-top";


        backTop.type =
            "button";


        backTop.setAttribute(
            "aria-label",
            "Yukarı çık"
        );


        backTop.innerHTML =
            "↑";


        document.body.appendChild(
            backTop
        );

    }


    function updateBackTop() {

        if (
            window.scrollY >
            500
        ) {

            backTop.classList.add(
                "visible"
            );

        } else {

            backTop.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop,
        {
            passive: true
        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );


    updateBackTop();


    /* =========================================================
       GÖRSEL HATA KONTROLÜ
       ========================================================= */

    document.addEventListener(
        "error",
        function (event) {

            const element =
                event.target;


            if (
                element &&
                element.tagName === "IMG" &&
                !element.dataset.fallback
            ) {

                element.dataset.fallback =
                    "true";


                element.src =
                    "/images/logo.jpeg";

            }

        },
        true
    );


    /* =========================================================
       EŞİT KART YÜKSEKLİĞİ
       ========================================================= */

    function equalizeCards() {

        /*
         * Ana haber kartları
         */

        if (newsGrid) {

            const cards =
                newsGrid.querySelectorAll(
                    ".news-card"
                );

            if (cards.length) {

                cards.forEach(
                    function (card) {
                        card.style.height =
                            "auto";
                    }
                );

                let maxHeight = 0;

                cards.forEach(
                    function (card) {

                        maxHeight =
                            Math.max(
                                maxHeight,
                                card.offsetHeight
                            );

                    }
                );

                cards.forEach(
                    function (card) {

                        card.style.height =
                            `${maxHeight}px`;

                    }
                );

            }

        }


        /*
         * Çok okunan kartları
         */

        if (popularNews) {

            const popularCards =
                popularNews.querySelectorAll(
                    ".popular-item"
                );

            if (popularCards.length) {

                popularCards.forEach(
                    function (card) {
                        card.style.height =
                            "auto";
                    }
                );

                let maxPopularHeight = 0;

                popularCards.forEach(
                    function (card) {

                        maxPopularHeight =
                            Math.max(
                                maxPopularHeight,
                                card.offsetHeight
                            );

                    }
                );

                popularCards.forEach(
                    function (card) {

                        card.style.height =
                            `${maxPopularHeight}px`;

                    }
                );

            }

        }

    }


    /*
     * İlk yükleme sonrası
     */

    requestAnimationFrame(
        equalizeCards
    );


    /*
     * Ekran boyutu değişince
     * tekrar eşitle.
     */

    let resizeTimer = null;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    equalizeCards,
                    150
                );

        }
    );


    /* =========================================================
       GÖRSEL YÜKLENDİKTEN SONRA KARTLARI EŞİTLE
       ========================================================= */

    document.addEventListener(
        "load",
        function (event) {

            if (
                event.target &&
                event.target.tagName === "IMG"
            ) {

                equalizeCards();

            }

        },
        true
    );


    /* =========================================================
       UYGULAMA HAZIR
       ========================================================= */

    document.body.classList.add(
        "app-ready"
    );


    console.log(
        "Haberİsta başlatıldı."
    );


    console.log(
        "Toplam haber:",
        haberler.length
    );


    console.log(
        "Manşet haber sayısı:",
        heroNews.length
    );


    if (aktifKategori) {

        console.log(
            "Aktif kategori:",
            aktifKategori
        );


        console.log(
            "Kategori haber sayısı:",
            pageNews.length
        );

    } else {

        console.log(
            "Ana sayfa - tüm haberler gösteriliyor."
        );

    }

});
