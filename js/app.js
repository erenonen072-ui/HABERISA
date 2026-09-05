document.addEventListener("DOMContentLoaded", () => {

    const haberler = window.haberler || [];

    console.log(`Haberİsta: ${haberler.length} haber başarıyla yüklendi.`);

    /* =====================================================
       YARDIMCI FONKSİYONLAR
       ===================================================== */

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getNewsUrl(haber) {

        if (haber.url) {
            return haber.url;
        }

        const slug =
            haber.slug ||
            (window.slugOlustur
                ? window.slugOlustur(haber.baslik)
                : "");

        if (slug) {
            return `/haber/${slug}`;
        }

        if (haber.id) {
            return `/haber.html?id=${haber.id}`;
        }

        return "#";
    }

    function getImagePath(haber) {

        const image =
            haber.resim ||
            haber.image ||
            "/images/default-news.jpg";

        if (/^https?:\/\//i.test(image)) {
            return image;
        }

        return "/" + String(image).replace(/^\/+/, "");
    }


    /* =====================================================
       ANA SAYFA HABER KARTI
       SADECE FOTOĞRAF + BAŞLIK
       ===================================================== */

    function createNewsCard(haber) {

        const card = document.createElement("a");

        card.className = "home-news-card";

        card.href = getNewsUrl(haber);

        const image = getImagePath(haber);

        card.innerHTML = `

            <div class="home-news-card-image">

                <img
                    src="${image}"
                    alt="${escapeHtml(haber.baslik)}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='/images/default-news.jpg';"
                >

            </div>

            <div class="home-news-card-title">

                ${escapeHtml(haber.baslik)}

            </div>

        `;

        return card;
    }


    /* =====================================================
       ANA HABERLER
       ===================================================== */

    function renderNewsGrid() {

        const grid = document.getElementById("newsGrid");

        if (!grid) {
            return;
        }

        grid.innerHTML = "";

        haberler.forEach(haber => {

            const card = createNewsCard(haber);

            grid.appendChild(card);

        });
    }


    /* =====================================================
       KATEGORİ BÖLÜMLERİ
       ===================================================== */

    function renderCategory(category, elementId) {

        const container = document.getElementById(elementId);

        if (!container) {
            return;
        }

        const categoryNews = haberler.filter(haber =>

            String(haber.kategori || "")
                .trim()
                .toLowerCase() ===
            category.toLowerCase()

        );

        container.innerHTML = "";

        categoryNews.forEach(haber => {

            const card = createNewsCard(haber);

            container.appendChild(card);

        });

    }


    /* =====================================================
       ÇOK OKUNANLAR
       ===================================================== */

    function renderPopularNews() {

        const container =
            document.getElementById("popularNews");

        if (!container) {
            return;
        }

        const popularNews = [...haberler]
            .sort((a, b) => {

                const aViews =
                    Number(a.okunma ?? a.views ?? 0);

                const bViews =
                    Number(b.okunma ?? b.views ?? 0);

                return bViews - aViews;

            })
            .slice(0, 5);


        container.innerHTML = "";


        popularNews.forEach((haber, index) => {

            const url = getNewsUrl(haber);

            const views =
                Number(
                    haber.okunma ??
                    haber.views ??
                    0
                ).toLocaleString("tr-TR");


            const item =
                document.createElement("a");

            item.href = url;

            item.className = "popular-item";


            item.innerHTML = `

                <span class="popular-number">
                    ${index + 1}
                </span>

                <div class="popular-content">

                    <strong>
                        ${escapeHtml(haber.baslik)}
                    </strong>

                    <small>
                        ${views} okunma
                    </small>

                </div>

            `;


            container.appendChild(item);

        });

    }


    /* =====================================================
       GÜNÜN BAŞLIKLARI
       ===================================================== */

    function renderSidebarHeadlines() {

        const container =
            document.getElementById("sidebarHeadlines");

        if (!container) {
            return;
        }

        container.innerHTML = "";


        haberler
            .slice(0, 5)
            .forEach(haber => {

                const item =
                    document.createElement("a");

                item.href = getNewsUrl(haber);

                item.className =
                    "sidebar-headline";


                item.textContent =
                    haber.baslik;


                container.appendChild(item);

            });

    }


    /* =====================================================
       SON DAKİKA ŞERİDİ
       ===================================================== */

    function renderBreakingNews() {

        const container =
            document.getElementById("breakingNews");

        if (!container) {
            return;
        }

        container.innerHTML = "";


        const breakingNews =
            haberler
                .slice(0, 5);


        breakingNews.forEach((haber, index) => {

            const item =
                document.createElement("a");

            item.href = getNewsUrl(haber);

            item.className =
                "breaking-item";


            item.textContent =
                haber.baslik;


            container.appendChild(item);


            if (index < breakingNews.length - 1) {

                const separator =
                    document.createElement("span");

                separator.className =
                    "breaking-separator";

                separator.textContent =
                    " • ";

                container.appendChild(separator);

            }

        });

    }


    /* =====================================================
       HERO SLIDER
       ===================================================== */

    let heroIndex = 0;


    function renderHero() {

        const hero =
            document.getElementById("heroMain");

        if (!hero || haberler.length === 0) {
            return;
        }


        const haber =
            haberler[heroIndex];


        const url =
            getNewsUrl(haber);


        const image =
            getImagePath(haber);


        hero.innerHTML = `

            <a
                href="${url}"
                class="hero-link"
            >

                <img
                    src="${image}"
                    alt="${escapeHtml(haber.baslik)}"
                    onerror="this.onerror=null; this.src='/images/default-news.jpg';"
                >

                <div class="hero-overlay">

                    <span class="hero-category">
                        ${escapeHtml(haber.kategori)}
                    </span>

                    <h1>
                        ${escapeHtml(haber.baslik)}
                    </h1>

                    ${
                        haber.spot ||
                        haber.ozet ||
                        haber.description
                            ? `
                                <p>
                                    ${escapeHtml(
                                        haber.spot ||
                                        haber.ozet ||
                                        haber.description
                                    )}
                                </p>
                            `
                            : ""
                    }

                </div>

            </a>

        `;


        renderHeroNumbers();

    }


    function renderHeroNumbers() {

        const container =
            document.getElementById("heroNumbers");

        if (!container) {
            return;
        }

        container.innerHTML = "";


        haberler.forEach((haber, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                index === heroIndex
                    ? "active"
                    : "";


            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    heroIndex = index;

                    renderHero();

                }
            );


            container.appendChild(button);

        });

    }


    function setupHeroButtons() {

        const previous =
            document.getElementById("heroPrev");

        const next =
            document.getElementById("heroNext");


        if (previous) {

            previous.addEventListener(
                "click",
                () => {

                    if (haberler.length === 0) {
                        return;
                    }

                    heroIndex--;

                    if (heroIndex < 0) {
                        heroIndex =
                            haberler.length - 1;
                    }

                    renderHero();

                }
            );

        }


        if (next) {

            next.addEventListener(
                "click",
                () => {

                    if (haberler.length === 0) {
                        return;
                    }

                    heroIndex++;

                    if (
                        heroIndex >=
                        haberler.length
                    ) {
                        heroIndex = 0;
                    }

                    renderHero();

                }
            );

        }

    }


    /* =====================================================
       ARAMA
       ===================================================== */

    function setupSearch() {

        const input =
            document.getElementById("searchInput");

        const button =
            document.getElementById("searchBtn");


        if (!input) {
            return;
        }


        function search() {

            const query =
                input.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                renderNewsGrid();

                const info =
                    document.getElementById(
                        "searchResultInfo"
                    );

                if (info) {
                    info.textContent = "";
                }

                return;
            }


            const results =
                haberler.filter(haber => {

                    const title =
                        String(
                            haber.baslik || ""
                        ).toLowerCase();

                    const spot =
                        String(
                            haber.spot ||
                            haber.ozet ||
                            haber.description ||
                            ""
                        ).toLowerCase();

                    const category =
                        String(
                            haber.kategori || ""
                        ).toLowerCase();


                    return (
                        title.includes(query) ||
                        spot.includes(query) ||
                        category.includes(query)
                    );

                });


            const grid =
                document.getElementById("newsGrid");


            if (!grid) {
                return;
            }


            grid.innerHTML = "";


            results.forEach(haber => {

                grid.appendChild(
                    createNewsCard(haber)
                );

            });


            const info =
                document.getElementById(
                    "searchResultInfo"
                );


            if (info) {

                info.textContent =
                    `"${input.value}" için ${results.length} haber bulundu.`;

            }

        }


        if (button) {

            button.addEventListener(
                "click",
                search
            );

        }


        input.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    search();
                }

            }
        );

    }


    /* =====================================================
       MOBİL MENÜ
       ===================================================== */

    function setupMobileMenu() {

        const button =
            document.getElementById(
                "mobileMenuBtn"
            );

        const nav =
            document.getElementById(
                "mainNav"
            );


        if (!button || !nav) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "open"
                );

            }
        );

    }


    /* =====================================================
       ÇEREZ KUTUSU
       ===================================================== */

    function setupCookieBox() {

        const cookieBox =
            document.getElementById(
                "cookieBox"
            );


        if (!cookieBox) {
            return;
        }


        const accepted =
            localStorage.getItem(
                "haberista_cookie"
            );


        if (accepted === "accepted") {

            cookieBox.style.display =
                "none";

            return;

        }


        const acceptButton =
            cookieBox.querySelector(
                "[data-cookie-accept]"
            );


        if (acceptButton) {

            acceptButton.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        "haberista_cookie",
                        "accepted"
                    );

                    cookieBox.style.display =
                        "none";

                }
            );

        }

    }


    /* =====================================================
       ÇALIŞTIR
       ===================================================== */

    renderNewsGrid();

    renderCategory(
        "Gündem",
        "gundemNews"
    );

    renderCategory(
        "Ekonomi",
        "ekonomiNews"
    );

    renderCategory(
        "Spor",
        "sporNews"
    );

    renderCategory(
        "Teknoloji",
        "teknolojiNews"
    );

    renderPopularNews();

    renderSidebarHeadlines();

    renderBreakingNews();

    renderHero();

    setupHeroButtons();

    setupSearch();

    setupMobileMenu();

    setupCookieBox();


    console.log(
        "Haberİsta hazır."
    );

});
