document.addEventListener("DOMContentLoaded", () => {

    const heroMain = document.getElementById("heroMain");
    const heroSide = document.getElementById("heroSide");
    const newsGrid = document.getElementById("newsGrid");
    const popularNews = document.getElementById("popularNews");

    const gundemNews = document.getElementById("gundemNews");
    const sporNews = document.getElementById("sporNews");
    const ekonomiNews = document.getElementById("ekonomiNews");

    const breakingNews = document.getElementById("breakingNews");


    // TARİH

    const currentDate = document.getElementById("currentDate");

    if (currentDate) {

        currentDate.textContent =
            new Date().toLocaleDateString("tr-TR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });

    }


    // HABER KARTI

    function createCard(haber) {

        return `
            <article
                class="news-card"
                onclick="openNews(${haber.id})"
            >

                <div class="news-image">

                    <img
                        src="${haber.resim}"
                        alt="${haber.baslik}"
                        onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80'"
                    >

                    <span class="category-tag">
                        ${haber.kategori}
                    </span>

                </div>

                <div class="news-card-content">

                    <h3>${haber.baslik}</h3>

                    <p>${haber.spot}</p>

                    <div class="news-meta">
                        ${haber.tarih} • ${haber.saat}
                    </div>

                </div>

            </article>
        `;

    }


    // MANŞET

    const main = haberler[0];

    if (heroMain) {

        heroMain.innerHTML = `

            <article
                class="hero-card"
                onclick="openNews(${main.id})"
            >

                <img
                    src="${main.resim}"
                    alt="${main.baslik}"
                    onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80'"
                >

                <div class="hero-overlay">

                    <span>${main.kategori}</span>

                    <h1>
                        ${main.baslik}
                    </h1>

                    <p>
                        ${main.spot}
                    </p>

                    <small>
                        ${main.tarih} • ${main.saat}
                    </small>

                </div>

            </article>

        `;

    }


    // YAN MANŞETLER

    if (heroSide) {

        heroSide.innerHTML = haberler
            .slice(1, 4)
            .map(haber => `

                <article
                    class="side-news"
                    onclick="openNews(${haber.id})"
                >

                    <img
                        src="${haber.resim}"
                        alt="${haber.baslik}"
                        onerror="this.src='https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=700&q=80'"
                    >

                    <div>

                        <span>
                            ${haber.kategori}
                        </span>

                        <h3>
                            ${haber.baslik}
                        </h3>

                        <small>
                            ${haber.saat}
                        </small>

                    </div>

                </article>

            `)
            .join("");

    }


    // SON HABERLER

    if (newsGrid) {

        newsGrid.innerHTML = haberler
            .slice(1)
            .map(createCard)
            .join("");

    }


    // ÇOK OKUNANLAR

    if (popularNews) {

        const popular = [...haberler]
            .sort((a, b) => b.okunma - a.okunma)
            .slice(0, 5);

        popularNews.innerHTML = popular
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
                            ${haber.baslik}
                        </h4>

                        <small>
                            ${haber.okunma.toLocaleString("tr-TR")} okunma
                        </small>

                    </div>

                </article>

            `)
            .join("");

    }


    // KATEGORİLER

    function renderCategory(element, category) {

        if (!element) return;

        const filtered = haberler
            .filter(haber => haber.kategori === category)
            .slice(0, 4);

        element.innerHTML = filtered
            .map(createCard)
            .join("");

    }

    renderCategory(gundemNews, "Gündem");
    renderCategory(sporNews, "Spor");
    renderCategory(ekonomiNews, "Ekonomi");


    // SON DAKİKA

    if (breakingNews) {

        breakingNews.innerHTML = haberler
            .slice(0, 4)
            .map(haber => `
                <span
                    onclick="openNews(${haber.id})"
                >
                    ${haber.baslik}
                </span>
            `)
            .join(" • ");

    }


    // ARAMA

    const searchInput =
        document.getElementById("searchInput");

    const searchBtn =
        document.getElementById("searchBtn");


    function search() {

        const value =
            searchInput?.value.trim().toLowerCase();

        if (!value) return;

        const result =
            haberler.find(haber =>
                haber.baslik
                    .toLowerCase()
                    .includes(value)
            );

        if (result) {

            openNews(result.id);

        } else {

            alert("Haber bulunamadı.");

        }

    }


    if (searchBtn) {

        searchBtn.addEventListener("click", search);

    }


    if (searchInput) {

        searchInput.addEventListener("keydown", e => {

            if (e.key === "Enter") {
                search();
            }

        });

    }


    // ÇEREZ

    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");


    if (
        cookieBox &&
        !localStorage.getItem("cookiesAccepted")
    ) {

        cookieBox.classList.add("show");

    }


    if (cookieAccept) {

        cookieAccept.addEventListener("click", () => {

            localStorage.setItem(
                "cookiesAccepted",
                "true"
            );

            cookieBox.classList.remove("show");

        });

    }


    // MOBİL MENÜ

    const menuBtn =
        document.getElementById("menuBtn");

    const nav =
        document.querySelector(".nav-inner");


    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

        });

    }

});


function openNews(id) {

    window.location.href =
        `haber.html?id=${id}`;

}
