document.addEventListener("DOMContentLoaded", () => {

    const path = window.location.pathname.toLowerCase();

    let kategori = "";

    if (path.includes("son-dakika")) {
        kategori = "Son Dakika";
    }

    else if (path.includes("gundem")) {
        kategori = "Gündem";
    }

    else if (path.includes("ekonomi")) {
        kategori = "Ekonomi";
    }

    else if (path.includes("spor")) {
        kategori = "Spor";
    }

    else if (path.includes("magazin")) {
        kategori = "Magazin";
    }

    else if (path.includes("dunya")) {
        kategori = "Dünya";
    }

    else if (path.includes("teknoloji")) {
        kategori = "Teknoloji";
    }

    else if (path.includes("saglik")) {
        kategori = "Sağlık";
    }

    else if (path.includes("kultur-sanat")) {
        kategori = "Kültür Sanat";
    }

    renderCategoryPage(kategori);

    renderBreakingNews();
    renderPopularNews();

    setupSearch();
});


function renderCategoryPage(kategori) {

    const container = document.getElementById("categoryNews");

    if (!container) return;

    const haberlerKategori = haberler.filter(haber => {

        return haber.kategori.toLowerCase() === kategori.toLowerCase();

    });

    if (haberlerKategori.length === 0) {

        container.innerHTML = `
            <div class="empty-category">
                <div class="empty-icon">📰</div>
                <h2>Henüz haber bulunmuyor</h2>
                <p>
                    Bu kategoride henüz yayınlanmış bir haber bulunmuyor.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = haberlerKategori.map(haber => {

        return `
            <article class="news-card"
                     onclick="openNews('${haber.id}')">

                <div class="news-image">

                    <img
                        src="${escapeHtml(haber.resim)}"
                        alt="${escapeHtml(haber.baslik)}"
                        loading="lazy"
                    >

                    <span class="category-badge">
                        ${escapeHtml(haber.kategori)}
                    </span>

                </div>

                <div class="news-content">

                    <div class="news-time">
                        ${escapeHtml(haber.tarih)}
                        ${escapeHtml(haber.saat)}
                    </div>

                    <h2>
                        ${escapeHtml(haber.baslik)}
                    </h2>

                    <p>
                        ${escapeHtml(haber.spot)}
                    </p>

                </div>

            </article>
        `;

    }).join("");
}


function renderBreakingNews() {

    const container = document.getElementById("breakingNews");

    if (!container) return;

    const breaking = haberler
        .filter(haber => haber.kategori === "Son Dakika")
        .slice(0, 8);

    if (!breaking.length) {

        container.innerHTML = "Haberİsta son dakika gelişmeleri";

        return;
    }

    container.innerHTML = breaking.map(haber => {

        return `
            <span
                onclick="openNews('${haber.id}')"
                class="breaking-item">

                ${escapeHtml(haber.baslik)}

            </span>
        `;

    }).join(" • ");
}


function renderPopularNews() {

    const container = document.getElementById("popularNews");

    if (!container) return;

    const popular = [...haberler]
        .sort((a, b) => Number(b.okunma) - Number(a.okunma))
        .slice(0, 6);

    container.innerHTML = popular.map((haber, index) => {

        return `
            <div
                class="popular-item"
                onclick="openNews('${haber.id}')">

                <div class="popular-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div>

                    <span class="popular-category">
                        ${escapeHtml(haber.kategori)}
                    </span>

                    <h4>
                        ${escapeHtml(haber.baslik)}
                    </h4>

                </div>

            </div>
        `;

    }).join("");
}


function setupSearch() {

    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchBtn");

    if (!input) return;

    function search() {

        const value = input.value.trim().toLowerCase();

        if (!value) return;

        const sonuc = haberler.find(haber =>

            haber.baslik.toLowerCase().includes(value) ||
            haber.spot.toLowerCase().includes(value) ||
            haber.kategori.toLowerCase().includes(value)

        );

        if (sonuc) {

            openNews(sonuc.id);

        } else {

            alert("Aradığınız haber bulunamadı.");

        }

    }

    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            search();
        }

    });

    if (button) {
        button.addEventListener("click", search);
    }
}


function openNews(id) {

    window.location.href =
        `haber.html?id=${encodeURIComponent(id)}`;

}


function escapeHtml(text) {

    if (text === undefined || text === null) {
        return "";
    }

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
