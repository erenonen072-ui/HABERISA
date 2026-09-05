/* =========================================================
   HABERİSTA
   ANA SAYFA JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   GENEL DEĞİŞKENLER
   ========================================================= */

let currentHeroIndex = 0;
let heroTimer = null;

const HERO_COUNT = 25;
const HERO_INTERVAL = 6000;


/* =========================================================
   DOM HAZIR
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initSite();

});


/* =========================================================
   SİTEYİ BAŞLAT
   ========================================================= */

function initSite() {

    if (typeof haberler === "undefined" || !Array.isArray(haberler)) {
        console.error("haberler.js bulunamadı veya haberler dizisi mevcut değil.");
        return;
    }

    renderHero();
    renderBreakingNews();
    renderPopularNews();
    renderSidebarHeadlines();
    renderMainNews();
    renderCategorySections();

    setupSearch();
    setupCategoryLinks();
    setupMobileMenu();
    setupCookieBanner();

}


/* =========================================================
   HERO / MANŞET SLIDER
   ========================================================= */

function renderHero() {

    const heroMain = document.getElementById("heroMain");
    const heroNumbers = document.getElementById("heroNumbers");

    if (!heroMain || !heroNumbers) {
        return;
    }

    const heroHaberler = haberler.slice(
        0,
        Math.min(HERO_COUNT, haberler.length)
    );

    if (heroHaberler.length === 0) {

        heroMain.innerHTML = `
            <div class="empty-category">
                <div class="empty-icon">📰</div>
                <h2>Henüz haber bulunmuyor</h2>
                <p>Manşet haberleri burada görüntülenecek.</p>
            </div>
        `;

        return;
    }


    /* -----------------------------------------
       HABERİ GÖSTER
    ----------------------------------------- */

    function showHero(index) {

        if (index < 0) {
            index = heroHaberler.length - 1;
        }

        if (index >= heroHaberler.length) {
            index = 0;
        }

        currentHeroIndex = index;

        const haber = heroHaberler[index];

        const image =
            haber.gorsel ||
            haber.resim ||
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80";

        const category =
            haber.kategori ||
            "Haber";

        const title =
            haber.baslik ||
            "Haber başlığı";

        const spot =
            haber.spot ||
            haber.icerik ||
            "";

        const date =
            haber.tarih ||
            "";


        heroMain.innerHTML = `

            <img
                src="${escapeHtml(image)}"
                alt="${escapeHtml(title)}"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80';"
            >

            <div class="hero-content">

                <div class="hero-category">
                    ${escapeHtml(category)}
                </div>

                <h1>
                    ${escapeHtml(title)}
                </h1>

                ${
                    spot
                    ? `
                    <p>
                        ${escapeHtml(shortenText(spot, 180))}
                    </p>
                    `
                    : ""
                }

                ${
                    date
                    ? `
                    <div class="hero-date">
                        ${escapeHtml(date)}
                    </div>
                    `
                    : ""
                }

            </div>

        `;


        /* Animasyon */

        heroMain.classList.remove("hero-slide-animation");

        void heroMain.offsetWidth;

        heroMain.classList.add("hero-slide-animation");


        /* Habere tıklama */

        heroMain.onclick = () => {

            openNews(haber.id);

        };


        /* Aktif numara */

        document
            .querySelectorAll(".hero-number")
            .forEach((button, i) => {

                button.classList.toggle(
                    "active",
                    i === index
                );

            });

    }


    /* -----------------------------------------
       1 - 25 NUMARALARI
    ----------------------------------------- */

    heroNumbers.innerHTML = heroHaberler
        .map((haber, index) => {

            return `
                <button
                    type="button"
                    class="hero-number ${index === 0 ? "active" : ""}"
                    data-index="${index}"
                    aria-label="${index + 1}. haber"
                >
                    ${index + 1}
                </button>
            `;

        })
        .join("");


    /* -----------------------------------------
       NUMARA TIKLAMALARI
    ----------------------------------------- */

    document
        .querySelectorAll(".hero-number")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const index =
                    Number(button.dataset.index);

                showHero(index);

                restartHeroTimer();

            });

        });


    /* -----------------------------------------
       ÖNCEKİ BUTONU
    ----------------------------------------- */

    const previousButton =
        document.getElementById("heroPrev");

    if (previousButton) {

        previousButton.onclick = event => {

            event.stopPropagation();

            showHero(currentHeroIndex - 1);

            restartHeroTimer();

        };

    }


    /* -----------------------------------------
       SONRAKİ BUTONU
    ----------------------------------------- */

    const nextButton =
        document.getElementById("heroNext");

    if (nextButton) {

        nextButton.onclick = event => {

            event.stopPropagation();

            showHero(currentHeroIndex + 1);

            restartHeroTimer();

        };

    }


    /* -----------------------------------------
       İLK HABER
    ----------------------------------------- */

    showHero(0);


    /* -----------------------------------------
       OTOMATİK GEÇİŞ
    ----------------------------------------- */

    restartHeroTimer();


    /* -----------------------------------------
       MOUSE ÜZERİNE GELİNCE DURDUR
    ----------------------------------------- */

    const slider =
        document.getElementById("heroSlider");

    if (slider) {

        slider.addEventListener(
            "mouseenter",
            () => {

                clearInterval(heroTimer);

            }
        );


        slider.addEventListener(
            "mouseleave",
            () => {

                restartHeroTimer();

            }
        );

    }

}


/* =========================================================
   HERO TIMER
   ========================================================= */

function restartHeroTimer() {

    clearInterval(heroTimer);

    heroTimer = setInterval(() => {

        const total =
            Math.min(HERO_COUNT, haberler.length);

        if (total <= 1) {
            return;
        }

        const nextIndex =
            (currentHeroIndex + 1) % total;

        changeHeroWithoutTimer(nextIndex);

    }, HERO_INTERVAL);

}


/* =========================================================
   TIMER İÇİN HERO DEĞİŞTİR
   ========================================================= */

function changeHeroWithoutTimer(index) {

    const buttons =
        document.querySelectorAll(".hero-number");

    if (!buttons.length) {
        return;
    }

    const button = buttons[index];

    if (button) {

        button.click();

    }

}


/* =========================================================
   SON DAKİKA
   ========================================================= */

function renderBreakingNews() {

    const container =
        document.getElementById("breakingNews");

    if (!container) {
        return;
    }

    const latest =
        haberler.slice(0, 8);

    if (!latest.length) {
        container.innerHTML =
            "<span>Yeni haberler hazırlanıyor...</span>";

        return;
    }


    container.innerHTML = latest
        .map(haber => {

            return `
                <span
                    class="breaking-item"
                    onclick="openNews('${escapeJs(haber.id)}')"
                >
                    ${escapeHtml(haber.baslik)}
                </span>
            `;

        })
        .join("");


    /* Basit otomatik kayan başlık */

    let breakingIndex = 0;

    const items =
        container.querySelectorAll(".breaking-item");

    if (items.length > 1) {

        items.forEach((item, index) => {

            item.style.display =
                index === 0
                    ? "inline"
                    : "none";

        });


        setInterval(() => {

            items.forEach(item => {
                item.style.display = "none";
            });

            breakingIndex =
                (breakingIndex + 1) % items.length;

            items[breakingIndex].style.display =
                "inline";

        }, 4000);

    }

}


/* =========================================================
   ÇOK OKUNANLAR
   ========================================================= */

function renderPopularNews() {

    const container =
        document.getElementById("popularNews");

    if (!container) {
        return;
    }


    const popular =
        [...haberler]
            .sort((a, b) => {

                const aViews =
                    Number(a.okunma || a.goruntulenme || 0);

                const bViews =
                    Number(b.okunma || b.goruntulenme || 0);

                return bViews - aViews;

            })
            .slice(0, 5);


    if (!popular.length) {

        container.innerHTML =
            "<p>Henüz popüler haber bulunmuyor.</p>";

        return;

    }


    container.innerHTML = popular
        .map((haber, index) => {

            return `

                <div
                    class="popular-item"
                    onclick="openNews('${escapeJs(haber.id)}')"
                >

                    <div class="popular-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div>

                        <div class="popular-category">
                            ${escapeHtml(haber.kategori || "Haber")}
                        </div>

                        <h4>
                            ${escapeHtml(haber.baslik)}
                        </h4>

                    </div>

                </div>

            `;

        })
        .join("");

}


/* =========================================================
   GÜNÜN BAŞLIKLARI
   ========================================================= */

function renderSidebarHeadlines() {

    const container =
        document.getElementById("sidebarHeadlines");

    if (!container) {
        return;
    }


    const headlines =
        haberler.slice(0, 7);


    container.innerHTML = headlines
        .map((haber, index) => {

            return `

                <div
                    class="sidebar-headline"
                    onclick="openNews('${escapeJs(haber.id)}')"
                >

                    <span class="sidebar-headline-number">
                        ${index + 1}
                    </span>

                    <span class="sidebar-headline-title">
                        ${escapeHtml(haber.baslik)}
                    </span>

                </div>

            `;

        })
        .join("");

}


/* =========================================================
   ANA HABERLER
   ========================================================= */

function renderMainNews(list = haberler) {

    const container =
        document.getElementById("newsGrid");

    if (!container) {
        return;
    }


    const sectionTitle =
        document.getElementById("sectionTitle");


    if (sectionTitle) {

        sectionTitle.textContent =
            "Son Haberler";

    }


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-category">

                <div class="empty-icon">
                    🔎
                </div>

                <h2>
                    Haber bulunamadı
                </h2>

                <p>
                    Aradığınız kriterlere uygun haber bulunamadı.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        list.map(createNewsCard).join("");

}


/* =========================================================
   KATEGORİ BÖLÜMLERİ
   ========================================================= */

function renderCategorySections() {

    const categories = [
        {
            name: "Gündem",
            id: "gundemNews"
        },
        {
            name: "Ekonomi",
            id: "ekonomiNews"
        },
        {
            name: "Spor",
            id: "sporNews"
        },
        {
            name: "Teknoloji",
            id: "teknolojiNews"
        }
    ];


    categories.forEach(category => {

        const container =
            document.getElementById(category.id);

        if (!container) {
            return;
        }


        const filtered =
            haberler
                .filter(haber =>
                    normalizeText(haber.kategori) ===
                    normalizeText(category.name)
                )
                .slice(0, 4);


        container.innerHTML =
            filtered.length
                ? filtered.map(createCategoryCard).join("")
                : `
                    <div class="empty-category">
                        <div class="empty-icon">📰</div>
                        <h2>${escapeHtml(category.name)}</h2>
                        <p>Bu kategoride henüz haber bulunmuyor.</p>
                    </div>
                `;

    });

}


/* =========================================================
   HABER KARTI
   ========================================================= */

function createNewsCard(haber) {

    const image =
        haber.gorsel ||
        haber.resim ||
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80";


    return `

        <article
            class="news-card"
            onclick="openNews('${escapeJs(haber.id)}')"
        >

            <div class="news-image">

                <img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(haber.baslik || "Haber")}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80';"
                >

                <span class="category-badge">
                    ${escapeHtml(haber.kategori || "Haber")}
                </span>

            </div>

            <div class="news-content">

                <span class="news-time">
                    ${escapeHtml(haber.tarih || "")}
                </span>

                <h3>
                    ${escapeHtml(haber.baslik || "")}
                </h3>

                <p>
                    ${escapeHtml(
                        shortenText(
                            haber.spot || haber.icerik || "",
                            130
                        )
                    )}
                </p>

            </div>

        </article>

    `;

}


/* =========================================================
   KATEGORİ KARTI
   ========================================================= */

function createCategoryCard(haber) {

    const image =
        haber.gorsel ||
        haber.resim ||
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80";


    return `

        <article
            class="news-card"
            onclick="openNews('${escapeJs(haber.id)}')"
        >

            <div class="news-image">

                <img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(haber.baslik || "Haber")}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80';"
                >

                <span class="category-badge">
                    ${escapeHtml(haber.kategori || "Haber")}
                </span>

            </div>

            <div class="news-content">

                <h3>
                    ${escapeHtml(haber.baslik || "")}
                </h3>

                <p>
                    ${escapeHtml(
                        shortenText(
                            haber.spot || haber.icerik || "",
                            120
                        )
                    )}
                </p>

            </div>

        </article>

    `;

}


/* =========================================================
   ARAMA SİSTEMİ
   ========================================================= */

function setupSearch() {

    const input =
        document.getElementById("searchInput");

    const button =
        document.getElementById("searchBtn");

    if (!input) {
        return;
    }


    function performSearch() {

        const query =
            input.value.trim();


        if (!query) {

            renderMainNews(haberler);

            const info =
                document.getElementById("searchResultInfo");

            if (info) {
                info.innerHTML = "";
            }

            return;
        }


        const normalizedQuery =
            normalizeText(query);


        const results =
            haberler.filter(haber => {

                const text = [

                    haber.baslik,
                    haber.spot,
                    haber.icerik,
                    haber.kategori

                ]
                    .filter(Boolean)
                    .join(" ");


                return normalizeText(text)
                    .includes(normalizedQuery);

            });


        const info =
            document.getElementById("searchResultInfo");


        if (info) {

            info.innerHTML = `

                <div class="search-result-box">

                    <strong>
                        "${escapeHtml(query)}"
                    </strong>

                    için
                    <b>${results.length}</b>
                    haber bulundu.

                </div>

            `;

        }


        renderMainNews(results);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (button) {

        button.addEventListener(
            "click",
            performSearch
        );

    }


    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch();

            }

        }
    );

}


/* =========================================================
   KATEGORİ LİNKLERİ
   ========================================================= */

function setupCategoryLinks() {

    const links =
        document.querySelectorAll(
            ".category-nav a[data-category], footer a[data-category]"
        );


    links.forEach(link => {

        link.addEventListener("click", event => {

            const category =
                link.dataset.category;


            if (!category) {
                return;
            }


            /*
             * Kategori sayfaları kullanılıyor.
             * Ana Sayfa haricindeki bağlantıları
             * ilgili HTML dosyasına gönderiyoruz.
             */

            const categoryPages = {

                "Tümü": "index.html",

                "Son Dakika":
                    "son-dakika.html",

                "Gündem":
                    "gundem.html",

                "Ekonomi":
                    "ekonomi.html",

                "Spor":
                    "spor.html",

                "Magazin":
                    "magazin.html",

                "Dünya":
                    "dunya.html",

                "Teknoloji":
                    "teknoloji.html",

                "Sağlık":
                    "saglik.html",

                "Kültür Sanat":
                    "kultur-sanat.html"

            };


            const target =
                categoryPages[category];


            if (target) {

                event.preventDefault();

                window.location.href =
                    target;

            }

        });

    });

}


/* =========================================================
   MOBİL MENÜ
   ========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.getElementById("menuBtn");

    const nav =
        document.querySelector(".category-nav");


    if (!menuButton || !nav) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "mobile-open"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

}


/* =========================================================
   ÇEREZ BANNERI
   ========================================================= */

function setupCookieBanner() {

    const cookieBox =
        document.getElementById("cookieBox");

    const acceptButton =
        document.getElementById("cookieAccept");


    if (!cookieBox) {
        return;
    }


    let accepted = false;


    try {

        accepted =
            localStorage.getItem(
                "cookiesAccepted"
            ) === "true";

    } catch (error) {

        accepted = false;

    }


    if (accepted) {

        cookieBox.style.display =
            "none";

    } else {

        cookieBox.style.display =
            "flex";

    }


    if (acceptButton) {

        acceptButton.addEventListener(
            "click",
            () => {

                try {

                    localStorage.setItem(
                        "cookiesAccepted",
                        "true"
                    );

                } catch (error) {

                    console.warn(
                        "Çerez tercihi kaydedilemedi."
                    );

                }


                cookieBox.style.display =
                    "none";

            }
        );

    }

}


/* =========================================================
   HABER AÇ
   ========================================================= */

function openNews(id) {

    if (
        id === undefined ||
        id === null ||
        id === ""
    ) {
        return;
    }


    window.location.href =
        "haber.html?id=" +
        encodeURIComponent(id);

}


/* =========================================================
   METİN KISALT
   ========================================================= */

function shortenText(text, maxLength = 150) {

    if (!text) {
        return "";
    }


    text = String(text)
        .replace(/\s+/g, " ")
        .trim();


    if (text.length <= maxLength) {
        return text;
    }


    return text
        .substring(0, maxLength)
        .trim() + "...";

}


/* =========================================================
   TÜRKÇE KARAKTERLERİ NORMALLEŞTİR
   ========================================================= */

function normalizeText(text) {

    if (!text) {
        return "";
    }


    return String(text)
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ı/g, "i")
        .trim();

}


/* =========================================================
   HTML GÜVENLİĞİ
   ========================================================= */

function escapeHtml(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   JAVASCRIPT STRING GÜVENLİĞİ
   ========================================================= */

function escapeJs(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }


    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");

}


/* =========================================================
   GLOBAL
   ========================================================= */

window.openNews = openNews;
window.renderHero = renderHero;
window.renderMainNews = renderMainNews;
window.renderPopularNews = renderPopularNews;
window.renderBreakingNews = renderBreakingNews;
