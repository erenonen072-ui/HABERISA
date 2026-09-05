document.addEventListener("DOMContentLoaded", () => {
    const haberler = window.haberler || [];

    const path = window.location.pathname.toLowerCase();

    const kategoriMap = {
        "son-dakika.html": "Son Dakika",
        "gundem.html": "Gündem",
        "ekonomi.html": "Ekonomi",
        "spor.html": "Spor",
        "magazin.html": "Magazin",
        "dunya.html": "Dünya",
        "teknoloji.html": "Teknoloji",
        "saglik.html": "Sağlık",
        "kultur-sanat.html": "Kültür Sanat"
    };

    const dosyaAdi = path.split("/").pop();

    const kategori = kategoriMap[dosyaAdi];

    if (!kategori) return;

    const grid = document.getElementById("categoryNews");

    if (!grid) return;

    const kategoriHaberleri = haberler.filter(haber =>
        String(haber.kategori || "").toLowerCase() ===
        kategori.toLowerCase()
    );

    grid.innerHTML = "";

    if (kategoriHaberleri.length === 0) {
        grid.innerHTML = `
            <div class="category-empty">
                <div class="empty-icon">📰</div>
                <h3>Henüz haber bulunmuyor</h3>
                <p>
                    Bu kategoride yeni haberler yayınlandığında
                    burada görüntülenecek.
                </p>
            </div>
        `;
        return;
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

        const tarih =
            haber.tarih ||
            haber.date ||
            "";

        const saat =
            haber.saat ||
            haber.time ||
            "";

        const spot =
            haber.spot ||
            haber.ozet ||
            haber.description ||
            "";

        const okunma =
            haber.okunma ??
            haber.views ??
            0;

        const card = document.createElement("article");

        card.className = "category-card";

        card.innerHTML = `
            <a href="${url}" class="category-card-image">
                <img
                    src="/${image.replace(/^\/+/, "")}"
                    alt="${escapeHtml(haber.baslik)}"
                    loading="lazy"
                    onerror="this.src='/images/default-news.jpg'"
                >
            </a>

            <div class="category-card-body">

                <a
                    href="${url}"
                    class="category-card-category"
                >
                    ${escapeHtml(haber.kategori)}
                </a>

                <h2 class="category-card-title">
                    <a href="${url}">
                        ${escapeHtml(haber.baslik)}
                    </a>
                </h2>

                <p class="category-card-spot">
                    ${escapeHtml(spot)}
                </p>

                <div class="category-card-footer">

                    <span>
                        ${escapeHtml(tarih)}
                        ${saat ? ` • ${escapeHtml(saat)}` : ""}
                    </span>

                    <span>
                        ${Number(okunma).toLocaleString("tr-TR")} okunma
                    </span>

                </div>

            </div>
        `;

        grid.appendChild(card);
    });

    // Çok okunanlar
    const popular = document.getElementById("popularNews");

    if (popular) {

        const populerHaberler = [...haberler]
            .sort((a, b) =>
                Number(b.okunma ?? b.views ?? 0) -
                Number(a.okunma ?? a.views ?? 0)
            )
            .slice(0, 5);

        popular.innerHTML = populerHaberler.map((haber, index) => {

            const slug =
                haber.slug ||
                window.slugOlustur(haber.baslik);

            const url =
                haber.url ||
                `/haber/${slug}`;

            const okunma =
                haber.okunma ??
                haber.views ??
                0;

            return `
                <a
                    href="${url}"
                    class="popular-item"
                >
                    <span class="popular-number">
                        ${index + 1}
                    </span>

                    <div>
                        <strong>
                            ${escapeHtml(haber.baslik)}
                        </strong>

                        <small>
                            ${Number(okunma).toLocaleString("tr-TR")} okunma
                        </small>
                    </div>
                </a>
            `;

        }).join("");
    }
});


function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
