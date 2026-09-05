document.addEventListener("DOMContentLoaded", () => {

    const haberler = Array.isArray(window.haberler)
        ? window.haberler
        : [];

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

        if (haber.slug) {
            return `/haber/${haber.slug}`;
        }

        if (
            window.slugOlustur &&
            haber.baslik
        ) {
            return `/haber/${window.slugOlustur(haber.baslik)}`;
        }

        return haber.id
            ? `/haber.html?id=${haber.id}`
            : "#";
    }

    function getImagePath(haber) {

        const image =
            haber.resim ||
            haber.image ||
            "/images/default-news.jpg";

        if (
            typeof image === "string" &&
            /^https?:\/\//i.test(image)
        ) {
            return image;
        }

        return "/" +
            String(image)
                .replace(/^\/+/, "");
    }


    /* =====================================================
       MANŞET HABER
    ===================================================== */

    function createHeadlineCard(haber) {

        const card =
            document.createElement("a");

        card.href =
            getNewsUrl(haber);

        card.className =
            "headline-news-card";

        card.innerHTML = `

            <div class="headline-news-image">

                <img
                    src="${getImagePath(haber)}"
                    alt="${escapeHtml(haber.baslik)}"
                    loading="eager"
                    onerror="
                        this.onerror=null;
                        this.src='/images/default-news.jpg';
                    "
                >

            </div>

            <div class="headline-news-gradient"></div>

            <div class="headline-news-content">

                <span class="headline-news-category">
                    ${escapeHtml(
                        haber.kategori || "HABER"
                    )}
                </span>

                <h1>
                    ${escapeHtml(haber.baslik)}
                </h1>

            </div>

        `;

        return card;
    }


    /* =====================================================
       KÜÇÜK HABER KARTI
    ===================================================== */

    function createSmallNewsCard(haber) {

        const card =
            document.createElement("a");

        card.href =
            getNewsUrl(haber);

        card.className =
            "small-news-card";

        card.innerHTML = `

            <div class="small-news-image">

                <img
                    src="${getImagePath(haber)}"
                    alt="${escapeHtml(haber.baslik)}"
                    loading="lazy"
                    onerror="
                        this.onerror=null;
                        this.src='/images/default-news.jpg';
                    "
                >

            </div>

            <div class="small-news-content">

                <span class="small-news-category">
                    ${escapeHtml(
                        haber.kategori || "HABER"
                    )}
                </span>

                <h3>
                    ${escapeHtml(haber.baslik)}
                </h3>

            </div>

        `;

        return card;
    }


    /* =====================================================
       ANA SAYFA MANŞET + KÜÇÜK HABERLER
    ===================================================== */

    function renderMainNews() {

        const grid =
            document.getElementById("newsGrid");

        if (!grid) {
            return;
        }

        grid.innerHTML = "";

        if (haberler.length === 0) {

            grid.innerHTML = `
                <div class="no-news">
                    Henüz haber bulunmuyor.
                </div>
            `;

            return;
        }


        /*
            İlk haber = MANŞET

            Diğer haberler =
            küçük profesyonel kartlar
        */

        const headline =
            haberler[0];

        const headlineCard =
            createHeadlineCard(headline);

        grid.appendChild(
            headlineCard
        );


        const smallContainer =
            document.createElement("div");

        smallContainer.className =
            "small-news-grid";


        haberler
            .slice(1)
            .forEach(haber => {

                smallContainer.appendChild(
                    createSmallNewsCard(haber)
                );

            });


        grid.appendChild(
            smallContainer
        );
    }


    /* =====================================================
       KATEGORİ BÖLÜMLERİ
    ===================================================== */

    function renderCategory(
        category,
        elementId
    ) {

        const container =
            document.getElementById(elementId);

        if (!container) {
            return;
        }

        const news =
            haberler.filter(haber =>
                String(
                    haber.kategori || ""
                )
                    .trim()
                    .toLowerCase() ===
                category.toLowerCase()
            );

        container.innerHTML = "";


        if (news.length === 0) {

            container.innerHTML = `
                <div class="no-news">
                    Bu kategoride henüz haber bulunmuyor.
                </div>
            `;

            return;
        }


        news.forEach(haber => {

            container.appendChild(
                createSmallNewsCard(haber)
            );

        });
    }


    /* =====================================================
       ÇOK OKUNANLAR
    ===================================================== */

    function renderPopularNews() {

        const container =
            document.getElementById(
                "popularNews"
            );

        if (!container) {
            return;
        }


        const popular =
            [...haberler]
                .sort((a, b) => {

                    const aViews =
                        Number(
                            a.okunma ??
                            a.views ??
                            0
                        );

                    const bViews =
                        Number(
                            b.okunma ??
                            b.views ??
                            0
                        );

                    return bViews - aViews;

                })
                .slice(0, 5);


        container.innerHTML = "";


        popular.forEach(
            (haber, index) => {

                const item =
                    document.createElement("a");

                item.href =
                    getNewsUrl(haber);

                item.className =
                    "popular-news-item";


                item.innerHTML = `

                    <span class="popular-rank">
                        ${index + 1}
                    </span>

                    <div class="popular-news-text">

                        <strong>
                            ${escapeHtml(
                                haber.baslik
                            )}
                        </strong>

                    </div>

                `;


                container.appendChild(
                    item
                );

            }
        );
    }


    /* =====================================================
       GÜNÜN BAŞLIKLARI
    ===================================================== */

    function renderHeadlines() {

        const container =
            document.getElementById(
                "sidebarHeadlines"
            );

        if (!container) {
            return;
        }

        container.innerHTML = "";


        haberler
            .slice(0, 7)
            .forEach(
                (haber, index) => {

                    const item =
                        document.createElement("a");

                    item.href =
                        getNewsUrl(haber);

                    item.className =
                        "headline-item";


                    item.innerHTML = `

                        <span>
                            ${index + 1}
                        </span>

                        <strong>
                            ${escapeHtml(
                                haber.baslik
                            )}
                        </strong>

                    `;


                    container.appendChild(
                        item
                    );

                }
            );
    }


    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function renderBreakingNews() {

        const container =
            document.getElementById(
                "breakingNews"
            );

        if (!container) {
            return;
        }


        container.innerHTML = "";


        haberler
            .slice(0, 5)
            .forEach(
                (haber, index) => {

                    const link =
                        document.createElement("a");

                    link.href =
                        getNewsUrl(haber);

                    link.className =
                        "breaking-link";

                    link.textContent =
                        haber.baslik;


                    container.appendChild(
                        link
                    );


                    if (
                        index <
                        Math.min(
                            haberler.length,
                            5
                        ) - 1
                    ) {

                        const separator =
                            document.createElement("span");

                        separator.className =
                            "breaking-separator";

                        separator.textContent =
                            " • ";


                        container.appendChild(
                            separator
                        );
                    }

                }
            );
    }


    /* =====================================================
       HERO / MANŞET SLIDER
    ===================================================== */

    let heroIndex = 0;


    function renderHero() {

        const hero =
            document.getElementById(
                "heroMain"
            );

        if (
            !hero ||
            haberler.length === 0
        ) {
            return;
        }


        const haber =
            haberler[heroIndex];


        hero.innerHTML = `

            <a
                href="${getNewsUrl(haber)}"
                class="hero-news"
            >

                <div class="hero-news-image">

                    <img
                        src="${getImagePath(haber)}"
                        alt="${escapeHtml(haber.baslik)}"
                        onerror="
                            this.onerror=null;
                            this.src='/images/default-news.jpg';
                        "
                    >

                </div>


                <div class="hero-news-overlay">

                    <span>
                        ${escapeHtml(
                            haber.kategori ||
                            "HABER"
                        )}
                    </span>

                    <h1>
                        ${escapeHtml(
                            haber.baslik
                        )}
                    </h1>

                </div>

            </a>
        `;


        renderHeroNumbers();
    }


    function renderHeroNumbers() {

        const container =
            document.getElementById(
                "heroNumbers"
            );

        if (!container) {
            return;
        }


        container.innerHTML = "";


        haberler.forEach(
            (haber, index) => {

                const button =
                    document.createElement("button");

                button.type =
                    "button";

                button.className =
                    index === heroIndex
                        ? "active"
                        : "";

                button.textContent =
                    index + 1;


                button.addEventListener(
                    "click",
                    () => {

                        heroIndex =
                            index;

                        renderHero();

                    }
                );


                container.appendChild(
                    button
                );

            }
        );
    }


    function setupHeroButtons() {

        const prev =
            document.getElementById(
                "heroPrev"
            );

        const next =
            document.getElementById(
                "heroNext"
            );


        if (prev) {

            prev.addEventListener(
                "click",
                () => {

                    heroIndex--;

                    if (
                        heroIndex < 0
                    ) {
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
            document.getElementById(
                "searchInput"
            );

        const button =
            document.getElementById(
                "searchBtn"
            );


        if (!input) {
            return;
        }


        function searchNews() {

            const query =
                input.value
                    .trim()
                    .toLowerCase();


            const grid =
                document.getElementById(
                    "newsGrid"
                );


            if (!grid) {
                return;
            }


            if (!query) {

                renderMainNews();

                return;
            }


            const results =
                haberler.filter(
                    haber => {

                        const title =
                            String(
                                haber.baslik ||
                                ""
                            )
                                .toLowerCase();

                        const category =
                            String(
                                haber.kategori ||
                                ""
                            )
                                .toLowerCase();


                        return (
                            title.includes(
                                query
                            ) ||
                            category.includes(
                                query
                            )
                        );

                    }
                );


            grid.innerHTML = "";


            const resultGrid =
                document.createElement(
                    "div"
                );

            resultGrid.className =
                "small-news-grid search-results";


            results.forEach(haber => {

                resultGrid.appendChild(
                    createSmallNewsCard(
                        haber
                    )
                );

            });


            if (results.length === 0) {

                resultGrid.innerHTML = `
                    <div class="no-news">
                        "${escapeHtml(
                            input.value
                        )}" için haber bulunamadı.
                    </div>
                `;

            }


            grid.appendChild(
                resultGrid
            );


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
                searchNews
            );

        }


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {
                    searchNews();
                }

            }
        );
    }


    /* =====================================================
       ÇEREZ
    ===================================================== */

    function setupCookie() {

        const box =
            document.getElementById(
                "cookieBox"
            );


        if (!box) {
            return;
        }


        if (
            localStorage.getItem(
                "haberista_cookie"
            ) === "accepted"
        ) {

            box.style.display =
                "none";

            return;
        }


        const button =
            box.querySelector(
                "[data-cookie-accept]"
            );


        if (button) {

            button.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        "haberista_cookie",
                        "accepted"
                    );

                    box.style.display =
                        "none";

                }
            );
        }
    }


    /* =====================================================
       BAŞLAT
    ===================================================== */

    renderMainNews();

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

    renderHeadlines();

    renderBreakingNews();

    renderHero();

    setupHeroButtons();

    setupSearch();

    setupCookie();

});
