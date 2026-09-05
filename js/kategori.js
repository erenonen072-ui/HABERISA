document.addEventListener("DOMContentLoaded", () => {

    const haberler = window.haberler || [];

    const path = window.location.pathname
        .toLowerCase()
        .replace(/\/+$/, "");

    const kategoriMap = {
        "/son-dakika.html": "Son Dakika",
        "/gundem.html": "Gündem",
        "/ekonomi.html": "Ekonomi",
        "/spor.html": "Spor",
        "/magazin.html": "Magazin",
        "/dunya.html": "Dünya",
        "/teknoloji.html": "Teknoloji",
        "/saglik.html": "Sağlık",
        "/kultur-sanat.html": "Kültür Sanat"
    };

    const kategori = kategoriMap[path];

    if (!kategori) {
        console.warn("Kategori bulunamadı:", path);
        return;
    }

    const kategoriHaberleri = haberler.filter(haber =>
        String(haber.kategori || "").trim().toLowerCase() ===
        kategori.toLowerCase()
    );

    const title = document.getElementById("categoryTitle");
    const count = document.getElementById("categoryCount");
    const grid = document.getElementById("categoryNews");
    const empty = document.getElementById("categoryEmpty");

    if (title) {
        title.textContent = kategori;
    }

    if (count) {
        count.textContent =
            `${kategoriHaberleri.length} haber`;
    }

    if (!grid) return;

    grid.innerHTML = "";

    if (kategoriHaberleri.length === 0) {

        if (empty) {
            empty.style.display = "block";
            empty.innerHTML = `
                <div class="empty-icon">📰</div>
                <h3>Bu kategoride henüz haber yok</h3>
                <p>
                    ${kategori} kategorisine yeni haberler eklendiğinde
                    burada otomatik olarak görüntülenecek.
                </p>
            `;
        }

        return;
    }

    if (empty) {
        empty.style.display = "none";
    }

    kategoriHaberleri.forEach(haber => {

        const slug =
            haber.slug ||
            window.slugOlustur(haber.baslik);

        const url =
            haber.url ||
            `/haber/${slug}`;

        const image =
            haber.resim ||
            haber.image ||
            "/images/default-news.jpg";

        const date =
            haber.tarih ||
            haber.date ||
            "";

        const time =
            haber.saat ||
            haber.time ||
            "";

        const spot =
            haber.spot ||
            haber.ozet ||
            haber.description ||
            "";

        const article = document.createElement("article");

        article.className = "category-news-card";

        article.innerHTML = `
            <a href="${url}" class="category-image-link">
                <img
                    src="/${image.replace(/^\/+/, "")}"
                    alt="${escapeHtml(haber.baslik)}"
                    loading="lazy"
                    onerror="this.src='/images/default-news.jpg'"
                >
            </a>

            <div class="category-news-content">

                <a
                    href="${url}"
                    class="category-badge"
                >
                    ${escapeHtml(haber.kategori)}
                </a>

                <h2>
                    <a href="${url}">
                        ${escapeHtml(haber.baslik)}
                    </a>
                </h2>

                <p>
                    ${escapeHtml(spot)}
                </p>

                <div class="category-news-meta">
                    <span>
                        ${escapeHtml(date)}
                    </span>

                    ${
                        time
                        ? `<span>•</span><span>${escapeHtml(time)}</span>`
                        : ""
                    }

                    <a href="${url}">
                        Haberi Oku →
                    </a>
                </div>

            </div>
        `;

        grid.appendChild(article);
    });
});


function escapeHtml(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
