document.addEventListener("DOMContentLoaded", () => {

    const heroMain =
        document.getElementById("heroMain");

    const heroSide =
        document.getElementById("heroSide");

    const newsGrid =
        document.getElementById("newsGrid");

    const popularNews =
        document.getElementById("popularNews");

    const sidebarHeadlines =
        document.getElementById("sidebarHeadlines");

    const breakingNews =
        document.getElementById("breakingNews");

    const sectionTitle =
        document.getElementById("sectionTitle");

    const searchInput =
        document.getElementById("searchInput");

    const searchBtn =
        document.getElementById("searchBtn");

    const searchResultInfo =
        document.getElementById("searchResultInfo");


    function createCard(haber) {

        return `
            <article
                class="news-card"
                onclick="openNews(${haber.id})"
            >

                <div class="news-image">

                    <img
                        src="${haber.resim}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                    >

                    <span class="category-tag">
                        ${escapeHtml(haber.kategori)}
                    </span>

                </div>

                <div class="news-card-content">

                    <h3>
                        ${escapeHtml(haber.baslik)}
                    </h3>

                    <p>
                        ${escapeHtml(haber.spot)}
                    </p>

                    <div class="news-meta">

                        ${haber.tarih}
                        •
                        ${haber.saat}

                    </div>

                </div>

            </article>
        `;

    }


    function renderHero() {

        if (!heroMain || !heroSide) {
            return;
        }

        const main =
            haberler[0];

        heroMain.innerHTML = `

            <article
                class="hero-card"
                onclick="openNews(${main.id})"
            >

                <img
                    src="${main.resim}"
                    alt="${escapeHtml(main.baslik)}"
                >

                <div class="hero-overlay">

                    <span>
                        ${escapeHtml(main.kategori)}
                    </span>

                    <h1>
                        ${escapeHtml(main.baslik)}
                    </h1>

                    <p>
                        ${escapeHtml(main.spot)}
                    </p>

                    <small>
                        ${main.tarih}
                        •
                        ${main.saat}
                    </small>

                </div>

            </article>

        `;


        heroSide.innerHTML =
            haberler
                .slice(1, 4)
                .map(haber => `

                    <article
                        class="side-news"
                        onclick="openNews(${haber.id})"
                    >

                        <img
                            src="${haber.resim}"
                            alt="${escapeHtml(haber.baslik)}"
                            loading="lazy"
                        >

                        <div>

                            <span>
                                ${escapeHtml(haber.kategori)}
                            </span>

                            <h3>
                                ${escapeHtml(haber.baslik)}
                            </h3>

                            <small>
                                ${haber.saat}
                            </small>

                        </div>

                    </article>

                `)
                .join("");

    }


    function renderBreaking() {

        if (!breakingNews) {
            return;
        }

        breakingNews.innerHTML =
            haberler
                .slice(0, 6)
                .map(haber => `

                    <span
                        onclick="openNews(${haber.id})"
                    >
                        ${escapeHtml(haber.baslik)}
                    </span>

                `)
                .join("");

    }


    function renderPopular() {

        if (!popularNews) {
            return;
        }

        const popular =
            [...haberler]
                .sort((a, b) =>
                    b.okunma - a.okunma
                )
                .slice(0, 5);


        popularNews.innerHTML =
            popular
                .map((haber, index) => `

                    <article
                        class="popular-item"
                        onclick="openNews(${haber.id})"
                    >

                        <strong>
                            ${String(index + 1).padStart(2, "0")}
                        </strong>

                        <div>

                            <h4>
                                ${escapeHtml(haber.baslik)}
                            </h4>

                            <small>
                                ${haber.okunma.toLocaleString("tr-TR")}
                                okunma
                            </small>

                        </div>

                    </article>

                `)
                .join("");

    }


    function renderSidebarHeadlines() {

        if (!sidebarHeadlines) {
            return;
        }

        sidebarHeadlines.innerHTML =
            haberler
                .slice(0, 6)
                .map(haber => `

                    <div
                        class="sidebar-headline"
                        onclick="openNews(${haber.id})"
                    >

                        <span>
                            ${haber.saat}
                        </span>

                        <p>
                            ${escapeHtml(haber.baslik)}
                        </p>

                    </div>

                `)
                .join("");

    }


    function renderNews(list, title = "Son Haberler") {

        if (!newsGrid) {
            return;
        }

        if (sectionTitle) {
            sectionTitle.textContent = title;
        }


        if (!list.length) {

            newsGrid.innerHTML = `

                <div class="empty-state">

                    <div>
                        🔎
                    </div>

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Aramanızla eşleşen bir haber bulunamadı.
                    </p>

                </div>

            `;

            return;
        }


        newsGrid.innerHTML =
            list
                .map(createCard)
                .join("");

    }


    function renderCategory(
        elementId,
        category
    ) {

        const element =
            document.getElementById(elementId);

        if (!element) {
            return;
        }

        const filtered =
            haberler
                .filter(haber =>
                    haber.kategori === category
                )
                .slice(0, 4);


        element.innerHTML =
            filtered
                .map(createCard)
                .join("");

    }


    function searchNews() {

        const value =
            searchInput
                ?.value
                .trim()
                .toLocaleLowerCase("tr-TR");


        if (!value) {

            searchResultInfo.innerHTML = "";

            renderNews(
                haberler,
                "Son Haberler"
            );

            return;
        }


        const results =
            haberler.filter(haber => {

                const text = (

                    haber.baslik +
                    " " +
                    haber.spot +
                    " " +
                    haber.icerik +
                    " " +
                    haber.kategori

                ).toLocaleLowerCase("tr-TR");

                return text.includes(value);

            });


        if (searchResultInfo) {

            searchResultInfo.innerHTML = `

                <strong>
                    ${results.length}
                </strong>
                haber bulundu:
                <b>
                    "${escapeHtml(value)}"
                </b>

            `;

        }


        renderNews(
            results,
            "Arama Sonuçları"
        );


        window.scrollTo({
            top: 250,
            behavior: "smooth"
        });

    }


    function activateCategory(category) {

        document
            .querySelectorAll("[data-category]")
            .forEach(link => {

                link.classList.remove("active");

                if (
                    link.dataset.category === category
                ) {
                    link.classList.add("active");
                }

            });


        if (searchInput) {
            searchInput.value = "";
        }


        if (searchResultInfo) {
            searchResultInfo.innerHTML = "";
        }


        if (category === "Tümü") {

            renderHero();

            renderNews(
                haberler,
                "Son Haberler"
            );

            return;

        }


        const filtered =
            haberler.filter(
                haber =>
                    haber.kategori === category
            );


        renderNews(
            filtered,
            category
        );


        window.scrollTo({
            top: 150,
            behavior: "smooth"
        });

    }


    document
        .querySelectorAll("[data-category]")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const category =
                        link.dataset.category;

                    activateCategory(category);

                }
            );

        });


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchNews
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    searchNews();
                }

            }
        );

    }


    const menuBtn =
        document.getElementById("menuBtn");

    const nav =
        document.querySelector(".nav-inner");


    if (menuBtn && nav) {

        menuBtn.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "mobile-open"
                );

            }
        );

    }


    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");


    if (
        cookieBox &&
        !localStorage.getItem(
            "cookiesAccepted"
        )
    ) {

        setTimeout(() => {

            cookieBox.classList.add("show");

        }, 700);

    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    "cookiesAccepted",
                    "true"
                );

                cookieBox.classList.remove(
                    "show"
                );

            }
        );

    }


    renderHero();

    renderBreaking();

    renderPopular();

    renderSidebarHeadlines();

    renderNews(
        haberler,
        "Son Haberler"
    );


    renderCategory(
        "gundemNews",
        "Gündem"
    );

    renderCategory(
        "ekonomiNews",
        "Ekonomi"
    );

    renderCategory(
        "sporNews",
        "Spor"
    );

    renderCategory(
        "teknolojiNews",
        "Teknoloji"
    );

});


function openNews(id) {

    window.location.href =
        `haber.html?id=${id}`;

}


function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}
