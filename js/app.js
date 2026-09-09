"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // =========================================================
    // TEK VERİ KAYNAĞI: js/haberler.js
    // =========================================================
    const haberler = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    if (!haberler.length) {
        console.error("haberler.js yüklenemedi veya haber bulunamadı.");
        return;
    }

    // =========================================================
    // YARDIMCI FONKSİYONLAR
    // =========================================================
    function haberBaslik(haber) {
        return haber.baslik || haber.title || "Başlıksız haber";
    }

    function haberSpot(haber) {
        return haber.spot || haber.aciklama || haber.description || "";
    }

    function haberGorsel(haber) {
        return (
            haber.gorsel ||
            haber.görsel ||
            haber.image ||
            haber.resim ||
            haber.foto ||
            "images/logo.jpeg"
        );
    }

    function haberKategori(haber) {
        return haber.kategori || haber.category || "Gündem";
    }

    function haberTarih(haber) {
        return haber.tarih || haber.date || "";
    }

    function haberSaat(haber) {
        return haber.saat || haber.time || "";
    }

    function haberURL(haber) {
        // haberler.js içindeki mevcut slug sistemi
        if (haber.slug) {
            return `/haber/${haber.slug}/`;
        }

        if (typeof window.slugOlustur === "function") {
            return `/haber/${window.slugOlustur(haberBaslik(haber))}/`;
        }

        if (haber.id !== undefined) {
            return `/haber/${haber.id}/`;
        }

        return "#";
    }

    function guvenliHTML(text) {
        return String(text ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // =========================================================
    // SON DAKİKA
    // haberler.js'deki ilk 5 haber
    // =========================================================
    function sonDakikaOlustur() {
        const alan = document.getElementById("breakingNews");

        if (!alan) return;

        const sonBes = haberler.slice(0, 5);

        alan.innerHTML = sonBes.map((haber) => `
            <a href="${haberURL(haber)}" class="breaking-item">
                <span class="breaking-dot"></span>
                <span>${guvenliHTML(haberBaslik(haber))}</span>
            </a>
        `).join("");
    }

    // =========================================================
    // MANŞET
    // İlk 20 gerçek haber
    // =========================================================
    let aktifManşet = 0;

    const manşetler = haberler.slice(0, 20);

    function mansetGoster(index) {
        const haber = manşetler[index];

        if (!haber) return;

        aktifManşet = index;

        const image = document.getElementById("heroImage");
        const category = document.getElementById("heroCategory");
        const date = document.getElementById("heroDate");
        const title = document.getElementById("heroTitle");
        const description = document.getElementById("heroDescription");
        const link = document.getElementById("heroLink");
        const currentNumber = document.getElementById("heroCurrentNumber");
        const totalNumber = document.getElementById("heroTotalNumber");

        if (image) {
            image.src = haberGorsel(haber);
            image.alt = haberBaslik(haber);
        }

        if (category) {
            category.textContent = haberKategori(haber);
        }

        if (date) {
            date.textContent =
                `${haberTarih(haber)}${haberSaat(haber) ? " • " + haberSaat(haber) : ""}`;
        }

        if (title) {
            title.textContent = haberBaslik(haber);
        }

        if (description) {
            description.textContent = haberSpot(haber);
        }

        if (link) {
            link.href = haberURL(haber);
        }

        if (currentNumber) {
            currentNumber.textContent = index + 1;
        }

        if (totalNumber) {
            totalNumber.textContent = manşetler.length;
        }

        document.querySelectorAll(".hero-number").forEach((button, i) => {
            button.classList.toggle("active", i === index);
        });
    }

    function mansetNumaralariOlustur() {
        const alan = document.getElementById("heroNumbers");

        if (!alan) return;

        alan.innerHTML = manşetler.map((_, index) => `
            <button
                type="button"
                class="hero-number ${index === 0 ? "active" : ""}"
                data-index="${index}">
                ${index + 1}
            </button>
        `).join("");

        alan.querySelectorAll(".hero-number").forEach((button) => {
            button.addEventListener("click", () => {
                mansetGoster(Number(button.dataset.index));
            });
        });
    }

    // =========================================================
    // SON HABERLER
    // TAMAMEN haberler.js
    // =========================================================
    function sonHaberleriOlustur() {
        const alan = document.getElementById("newsGrid");

        if (!alan) return;

        alan.innerHTML = haberler.map((haber) => `
            <article class="news-card">
                <a href="${haberURL(haber)}" class="news-card-link">

                    <div class="news-card-image">
                        <img
                            src="${haberGorsel(haber)}"
                            alt="${guvenliHTML(haberBaslik(haber))}"
                            loading="lazy"
                        >
                    </div>

                    <div class="news-card-content">

                        <span class="news-card-category">
                            ${guvenliHTML(haberKategori(haber))}
                        </span>

                        <h3>
                            ${guvenliHTML(haberBaslik(haber))}
                        </h3>

                        <p>
                            ${guvenliHTML(haberSpot(haber))}
                        </p>

                        <div class="news-card-meta">
                            <span>${guvenliHTML(haberTarih(haber))}</span>
                            <span>${guvenliHTML(haberSaat(haber))}</span>
                        </div>

                    </div>

                </a>
            </article>
        `).join("");
    }

    // =========================================================
    // KATEGORİLER
    // Gerçek haberler filtrelenir
    // =========================================================
    function kategoriOlustur(kategori, elementID) {
        const alan = document.getElementById(elementID);

        if (!alan) return;

        const liste = haberler.filter(
            haber => haberKategori(haber).toLocaleLowerCase("tr-TR")
                === kategori.toLocaleLowerCase("tr-TR")
        );

        alan.innerHTML = liste.map((haber) => `
            <article class="category-news-card">
                <a href="${haberURL(haber)}">

                    <img
                        src="${haberGorsel(haber)}"
                        alt="${guvenliHTML(haberBaslik(haber))}"
                        loading="lazy"
                    >

                    <div>
                        <span>${guvenliHTML(haberKategori(haber))}</span>

                        <h3>
                            ${guvenliHTML(haberBaslik(haber))}
                        </h3>

                        <small>
                            ${guvenliHTML(haberTarih(haber))}
                            ${haberSaat(haber)
                                ? " • " + guvenliHTML(haberSaat(haber))
                                : ""}
                        </small>
                    </div>

                </a>
            </article>
        `).join("");
    }

    // =========================================================
    // BAŞLAT
    // =========================================================
    sonDakikaOlustur();

    mansetNumaralariOlustur();

    mansetGoster(0);

    sonHaberleriOlustur();

    kategoriOlustur("Gündem", "gundemNews");
    kategoriOlustur("Ekonomi", "ekonomiNews");
    kategoriOlustur("Spor", "sporNews");
    kategoriOlustur("Dünya", "dunyaNews");
    kategoriOlustur("Teknoloji", "teknolojiNews");
    kategoriOlustur("Magazin", "magazinNews");

    console.log(
        `Haberİsta: ${haberler.length} haber haberler.js üzerinden yüklendi.`
    );
});
