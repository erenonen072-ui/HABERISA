/* =========================================================
   HABERİSTA
   PROFESYONEL ANA SAYFA JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   GENEL AYARLAR
   ========================================================= */

let currentHeroIndex = 0;
let heroTimer = null;
let breakingTimer = null;

const HERO_COUNT = 25;
const HERO_INTERVAL = 6000;
const BREAKING_INTERVAL = 4500;


/* =========================================================
   DOM HAZIR
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initSite();
});


/* =========================================================
   SİTE BAŞLAT
   ========================================================= */

function initSite() {

    if (
        typeof window.haberler === "undefined" ||
        !Array.isArray(window.haberler)
    ) {
        console.error(
            "Haberİsta: haberler.js yüklenemedi."
        );

        showSystemError();
        return;
    }

    console.log(
        `Haberİsta: ${window.haberler.length} haber yüklendi.`
    );

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
    setupGlobalInteractions();
    setupKeyboardShortcuts();
}


/* =========================================================
   SİSTEM HATASI
   ========================================================= */

function showSystemError() {

    const grid = document.getElementById("newsGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = `
        <div class="empty-category">
            <div class="empty-icon">⚠️</div>

            <h2>Haberler yüklenemedi</h2>

            <p>
                Sayfayı yenileyerek tekrar deneyin.
            </p>
        </div>
    `;
}


/* =========================================================
   HERO / MANŞET
   ========================================================= */

function renderHero() {

    const heroMain =
        document.getElementById("heroMain");

    const heroNumbers =
        document.getElementById("heroNumbers");

    const heroSlider =
        document.getElementById("heroSlider");

    if (!heroMain || !heroNumbers) {
        return;
    }

    const heroHaberler =
        window.haberler.slice(
            0,
            Math.min(
                HERO_COUNT,
                window.haberler.length
            )
        );

    if (!heroHaberler.length) {

        heroMain.innerHTML = `
            <div class="empty-category">
                <div class="empty-icon">📰</div>

                <h2>Henüz haber bulunmuyor</h2>

                <p>
                    Manşet haberleri burada görüntülenecek.
                </p>
            </div>
        `;

        return;
    }


    /* =====================================================
       HERO GÖSTER
       ===================================================== */

    function showHero(index) {

        if (index < 0) {
            index = heroHaberler.length - 1;
        }

        if (index >= heroHaberler.length) {
            index = 0;
        }

        currentHeroIndex = index;

        const haber =
            heroHaberler[index];

        const image =
            getNewsImage(haber);

        const title =
            haber.baslik ||
            "Haber başlığı";

        const category =
            haber.kategori ||
            "Haber";

        const spot =
            haber.spot ||
            stripHtml(haber.icerik || "");

        const date =
            formatNewsDate(
                haber.tarih,
                haber.saat
            );


        heroMain.innerHTML = `
            <img
                class="hero-image"
                src="${escapeHtml(image)}"
                alt="${escapeHtml(title)}"
                loading="eager"
                decoding="async"
                onerror="this.onerror=null;this.src='${escapeJs(
                    getFallbackImage()
                )}';"
            >

            <div class="hero-overlay"></div>

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
                                ${escapeHtml(
                                    shortenText(
                                        spot,
                                        210
                                    )
                                )}
                            </p>
                        `
                        : ""
                }

                <div class="hero-meta">

                    ${
                        date
                            ? `
                                <span>
                                    🕒 ${escapeHtml(date)}
                                </span>
                            `
                            : ""
                    }

                    ${
                        haber.okunma
                            ? `
                                <span>
                                    👁 ${formatNumber(
                                        haber.okunma
                                    )}
                                </span>
                            `
                            : ""
                    }

                </div>

                <div class="hero-read-more">
                    Haberi Oku
                    <span>→</span>
                </div>

            </div>
        `;


        /* Animasyon */

        heroMain.classList.remove(
            "hero-slide-animation"
        );

        void heroMain.offsetWidth;

        heroMain.classList.add(
            "hero-slide-animation"
        );


        /* Tıklama */

        heroMain.onclick = () => {
            openNews(haber.id);
        };


        /* Numaralar */

        document
            .querySelectorAll(".hero-number")
            .forEach((button, i) => {

                button.classList.toggle(
                    "active",
                    i === index
                );

            });
    }


    /* =====================================================
       HERO NUMARALARI
       ===================================================== */

    heroNumbers.innerHTML =
        heroHaberler
            .map((haber, index) => {

                return `
                    <button
                        type="button"
                        class="hero-number ${
                            index === 0
                                ? "active"
                                : ""
                        }"
                        data-index="${index}"
                        aria-label="${
                            index + 1
                        }. haber"
                    >
                        ${index + 1}
                    </button>
                `;

            })
            .join("");


    /* =====================================================
       NUMARA TIKLAMALARI
       ===================================================== */

    document
        .querySelectorAll(".hero-number")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const index =
                        Number(
                            button.dataset.index
                        );

                    showHero(index);

                    restartHeroTimer();

                }
            );

        });


    /* =====================================================
       ÖNCEKİ
       ===================================================== */

    const previousButton =
        document.getElementById("heroPrev");

    if (previousButton) {

        previousButton.onclick =
            event => {

                event.stopPropagation();

                showHero(
                    currentHeroIndex - 1
                );

                restartHeroTimer();

            };
    }


    /* =====================================================
       SONRAKİ
       ===================================================== */

    const nextButton =
        document.getElementById("heroNext");

    if (nextButton) {

        nextButton.onclick =
            event => {

                event.stopPropagation();

                showHero(
                    currentHeroIndex + 1
                );

                restartHeroTimer();

            };
    }


    /* =====================================================
       BAŞLANGIÇ
       ===================================================== */

    showHero(0);

    restartHeroTimer();


    /* =====================================================
       MOUSE ÜZERİNDE DURDUR
       ===================================================== */

    if (heroSlider) {

        heroSlider.addEventListener(
            "mouseenter",
            () => {

                clearInterval(
                    heroTimer
                );

            }
        );

        heroSlider.addEventListener(
            "mouseleave",
            () => {

                restartHeroTimer();

            }
        );

    }


    /* =====================================================
       MOBİL SWIPE
       ===================================================== */

    setupHeroSwipe(
        heroSlider,
        showHero,
        restartHeroTimer,
        heroHaberler.length
    );
}


/* =========================================================
   HERO TIMER
   ========================================================= */

function restartHeroTimer() {

    clearInterval(heroTimer);

    const total =
        Math.min(
            HERO_COUNT,
            window.haberler.length
        );

    if (total <= 1) {
        return;
    }

    heroTimer =
        setInterval(() => {

            const nextIndex =
                (currentHeroIndex + 1) %
                total;

            changeHeroWithoutTimer(
                nextIndex
            );

        }, HERO_INTERVAL);
}


/* =========================================================
   HERO DEĞİŞTİR
   ========================================================= */

function changeHeroWithoutTimer(index) {

    const buttons =
        document.querySelectorAll(
            ".hero-number"
        );

    if (!buttons.length) {
        return;
    }

    const button =
        buttons[index];

    if (button) {
        button.click();
    }
}


/* =========================================================
   HERO SWIPE
   ========================================================= */

function setupHeroSwipe(
    slider,
    showHero,
    restartTimer,
    total
) {

    if (!slider) {
        return;
    }

    let startX = 0;
    let endX = 0;

    slider.addEventListener(
        "touchstart",
        event => {

            startX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );

    slider.addEventListener(
        "touchend",
        event => {

            endX =
                event.changedTouches[0].screenX;

            const difference =
                startX - endX;

            if (Math.abs(difference) < 50) {
                return;
            }

            if (difference > 0) {

                showHero(
                    (currentHeroIndex + 1) %
                    total
                );

            } else {

                showHero(
                    (currentHeroIndex - 1 + total) %
                    total
                );

            }

            restartTimer();

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   SON DAKİKA
   ========================================================= */

function renderBreakingNews() {

    const container =
        document.getElementById(
            "breakingNews"
        );

    if (!container) {
        return;
    }

    clearInterval(
        breakingTimer
    );

    const latest =
        window.haberler.slice(
            0,
            8
        );

    if (!latest.length) {

        container.innerHTML =
            `
                <span>
                    Yeni haberler hazırlanıyor...
                </span>
            `;

        return;
    }


    container.innerHTML =
        latest
            .map((haber, index) => {

                return `
                    <span
                        class="breaking-item ${
                            index === 0
                                ? "active"
                                : ""
                        }"
                        data-breaking-index="${index}"
                        role="button"
                        tabindex="0"
                    >
                        ${escapeHtml(
                            haber.baslik
                        )}
                    </span>
                `;

            })
            .join("");


    const items =
        container.querySelectorAll(
            ".breaking-item"
        );

    if (items.length <= 1) {
        return;
    }


    let current = 0;


    function showBreaking(index) {

        items.forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );

        items[index].classList.add(
            "active"
        );

        current = index;

    }


    items.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        item.dataset.breakingIndex
                    );

                const haber =
                    latest[index];

                if (haber) {
                    openNews(haber.id);
                }

            }
        );


        item.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    item.click();

                }

            }
        );

    });


    breakingTimer =
        setInterval(() => {

            current =
                (current + 1) %
                items.length;

            showBreaking(current);

        }, BREAKING_INTERVAL);
}


/* =========================================================
   ÇOK OKUNANLAR
   ========================================================= */

function renderPopularNews() {

    const container =
        document.getElementById(
            "popularNews"
        );

    if (!container) {
        return;
    }

    const popular =
        [...window.haberler]
            .sort(
                (a, b) => {

                    const aViews =
                        Number(
                            a.okunma ||
                            a.goruntulenme ||
                            0
                        );

                    const bViews =
                        Number(
                            b.okunma ||
                            b.goruntulenme ||
                            0
                        );

                    return bViews - aViews;

                }
            )
            .slice(0, 5);


    if (!popular.length) {

        container.innerHTML = `
            <p>
                Henüz popüler haber bulunmuyor.
            </p>
        `;

        return;
    }


    container.innerHTML =
        popular
            .map(
                (haber, index) => {

                    return `
                        <article
                            class="popular-item"
                            data-news-id="${escapeHtml(
                                haber.id
                            )}"
                            tabindex="0"
                            role="button"
                        >

                            <div class="popular-number">
                                ${String(
                                    index + 1
                                ).padStart(2, "0")}
                            </div>

                            <div class="popular-content">

                                <div class="popular-category">
                                    ${escapeHtml(
                                        haber.kategori ||
                                        "Haber"
                                    )}
                                </div>

                                <h4>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </h4>

                                <div class="popular-meta">
                                    👁 ${
                                        formatNumber(
                                            haber.okunma ||
                                            0
                                        )
                                    }
                                </div>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");


    container
        .querySelectorAll(
            ".popular-item"
        )
        .forEach(item => {

            const id =
                item.dataset.newsId;

            item.addEventListener(
                "click",
                () => {
                    openNews(id);
                }
            );

            item.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openNews(id);

                    }

                }
            );

        });
}


/* =========================================================
   GÜNÜN BAŞLIKLARI
   ========================================================= */

function renderSidebarHeadlines() {

    const container =
        document.getElementById(
            "sidebarHeadlines"
        );

    if (!container) {
        return;
    }

    const headlines =
        window.haberler.slice(
            0,
            7
        );


    if (!headlines.length) {

        container.innerHTML =
            `
                <p>
                    Başlık bulunmuyor.
                </p>
            `;

        return;
    }


    container.innerHTML =
        headlines
            .map(
                (haber, index) => {

                    return `
                        <div
                            class="sidebar-headline"
                            data-news-id="${escapeHtml(
                                haber.id
                            )}"
                            tabindex="0"
                            role="button"
                        >

                            <span
                                class="sidebar-headline-number"
                            >
                                ${String(
                                    index + 1
                                ).padStart(2, "0")}
                            </span>

                            <span
                                class="sidebar-headline-title"
                            >
                                ${escapeHtml(
                                    haber.baslik
                                )}
                            </span>

                        </div>
                    `;

                }
            )
            .join("");


    container
        .querySelectorAll(
            ".sidebar-headline"
        )
        .forEach(item => {

            const id =
                item.dataset.newsId;

            item.addEventListener(
                "click",
                () => {
                    openNews(id);
                }
            );

            item.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openNews(id);

                    }

                }
            );

        });
}


/* =========================================================
   ANA HABERLER
   ========================================================= */

function renderMainNews(
    list = window.haberler
) {

    const container =
        document.getElementById(
            "newsGrid"
        );

    if (!container) {
        return;
    }

    const sectionTitle =
        document.getElementById(
            "sectionTitle"
        );


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
        list
            .map(createNewsCard)
            .join("");


    addCardInteractions(
        container
    );
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


    categories.forEach(
        category => {

            const container =
                document.getElementById(
                    category.id
                );

            if (!container) {
                return;
            }


            const filtered =
                window.haberler
                    .filter(
                        haber =>
                            normalizeText(
                                haber.kategori
                            ) ===
                            normalizeText(
                                category.name
                            )
                    )
                    .slice(0, 4);


            if (!filtered.length) {

                container.innerHTML = `
                    <div class="empty-category">

                        <div class="empty-icon">
                            📰
                        </div>

                        <h2>
                            ${escapeHtml(
                                category.name
                            )}
                        </h2>

                        <p>
                            Bu kategoride henüz haber bulunmuyor.
                        </p>

                    </div>
                `;

                return;
            }


            container.innerHTML =
                filtered
                    .map(
                        createCategoryCard
                    )
                    .join("");


            addCardInteractions(
                container
            );

        }
    );
}


/* =========================================================
   HABER KARTI
   ========================================================= */

function createNewsCard(haber) {

    const image =
        getNewsImage(haber);

    const title =
        haber.baslik ||
        "Haber";

    const spot =
        stripHtml(
            haber.spot ||
            haber.icerik ||
            ""
        );


    return `
        <article
            class="news-card"
            data-news-id="${escapeHtml(
                haber.id
            )}"
            tabindex="0"
            role="article"
        >

            <div class="news-image">

                <img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(title)}"
                    loading="lazy"
                    decoding="async"
                    onerror="this.onerror=null;this.src='${escapeJs(
                        getFallbackImage()
                    )}';"
                >

                <span class="category-badge">
                    ${escapeHtml(
                        haber.kategori ||
                        "Haber"
                    )}
                </span>

                <div class="news-image-overlay">
                    Haberi Oku →
                </div>

            </div>

            <div class="news-content">

                <div class="news-meta">

                    <span class="news-time">
                        🕒 ${escapeHtml(
                            formatNewsDate(
                                haber.tarih,
                                haber.saat
                            )
                        )}
                    </span>

                    ${
                        haber.okunma
                            ? `
                                <span>
                                    👁 ${formatNumber(
                                        haber.okunma
                                    )}
                                </span>
                            `
                            : ""
                    }

                </div>

                <h3>
                    ${escapeHtml(title)}
                </h3>

                ${
                    spot
                        ? `
                            <p>
                                ${escapeHtml(
                                    shortenText(
                                        spot,
                                        145
                                    )
                                )}
                            </p>
                        `
                        : ""
                }

                <div class="news-read-more">
                    Devamını Oku
                    <span>→</span>
                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   KATEGORİ KARTI
   ========================================================= */

function createCategoryCard(haber) {

    const image =
        getNewsImage(haber);

    const title =
        haber.baslik ||
        "Haber";

    const spot =
        stripHtml(
            haber.spot ||
            haber.icerik ||
            ""
        );


    return `
        <article
            class="news-card category-news-card"
            data-news-id="${escapeHtml(
                haber.id
            )}"
            tabindex="0"
            role="article"
        >

            <div class="news-image">

                <img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(title)}"
                    loading="lazy"
                    decoding="async"
                    onerror="this.onerror=null;this.src='${escapeJs(
                        getFallbackImage()
                    )}';"
                >

                <span class="category-badge">
                    ${escapeHtml(
                        haber.kategori ||
                        "Haber"
                    )}
                </span>

            </div>

            <div class="news-content">

                <div class="news-meta">
                    <span>
                        ${escapeHtml(
                            formatNewsDate(
                                haber.tarih,
                                haber.saat
                            )
                        )}
                    </span>
                </div>

                <h3>
                    ${escapeHtml(title)}
                </h3>

                <p>
                    ${escapeHtml(
                        shortenText(
                            spot,
                            120
                        )
                    )}
                </p>

                <div class="news-read-more">
                    Haberi Oku →
                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   KART ETKİLEŞİMLERİ
   ========================================================= */

function addCardInteractions(
    container
) {

    container
        .querySelectorAll(
            ".news-card"
        )
        .forEach(card => {

            const id =
                card.dataset.newsId;

            card.addEventListener(
                "click",
                () => {

                    openNews(id);

                }
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openNews(id);

                    }

                }
            );

        });
}


/* =========================================================
   ARAMA
   ========================================================= */

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


    function performSearch() {

        const query =
            input.value.trim();


        if (!query) {

            renderMainNews(
                window.haberler
            );

            updateSearchInfo(
                ""
            );

            return;
        }


        const normalizedQuery =
            normalizeText(query);


        const results =
            window.haberler.filter(
                haber => {

                    const searchableText = [

                        haber.baslik,

                        haber.spot,

                        haber.icerik,

                        haber.kategori,

                        haber.kaynak

                    ]
                        .filter(Boolean)
                        .join(" ");


                    return normalizeText(
                        stripHtml(
                            searchableText
                        )
                    ).includes(
                        normalizedQuery
                    );

                }
            );


        updateSearchInfo(
            query,
            results.length
        );


        renderMainNews(
            results
        );


        const main =
            document.querySelector(
                "main"
            );

        if (main) {

            window.scrollTo({
                top:
                    Math.max(
                        0,
                        main.offsetTop - 20
                    ),
                behavior: "smooth"
            });

        }

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

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                performSearch();

            }

        }
    );


    input.addEventListener(
        "input",
        () => {

            if (
                input.value.trim() === ""
            ) {

                renderMainNews(
                    window.haberler
                );

                updateSearchInfo(
                    ""
                );

            }

        }
    );
}


/* =========================================================
   ARAMA BİLGİSİ
   ========================================================= */

function updateSearchInfo(
    query,
    count
) {

    const info =
        document.getElementById(
            "searchResultInfo"
        );

    if (!info) {
        return;
    }


    if (!query) {

        info.innerHTML = "";

        return;
    }


    info.innerHTML = `
        <div class="search-result-box">

            <span>
                🔎
            </span>

            <div>

                <strong>
                    "${escapeHtml(query)}"
                </strong>

                için

                <b>
                    ${Number(count || 0)}
                </b>

                haber bulundu.

            </div>

        </div>
    `;
}


/* =========================================================
   KATEGORİ LİNKLERİ
   ========================================================= */

function setupCategoryLinks() {

    const links =
        document.querySelectorAll(
            ".category-nav a"
        );


    const categoryPages = {

        "Ana Sayfa":
            "index.html",

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


    links.forEach(
        link => {

            const text =
                link.textContent.trim();

            const target =
                categoryPages[text];


            if (!target) {
                return;
            }


            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    window.location.href =
                        target;

                }
            );

        }
    );
}


/* =========================================================
   MOBİL MENÜ
   ========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.getElementById(
            "menuBtn"
        );

    const nav =
        document.querySelector(
            ".category-nav"
        );


    if (!menuButton || !nav) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle(
                    "mobile-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    nav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "mobile-open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });
}


/* =========================================================
   ÇEREZ
   ========================================================= */

function setupCookieBanner() {

    const cookieBox =
        document.getElementById(
            "cookieBox"
        );

    const acceptButton =
        document.getElementById(
            "cookieAccept"
        );


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


                cookieBox.style.opacity =
                    "0";


                cookieBox.style.transform =
                    "translateY(20px)";


                setTimeout(
                    () => {

                        cookieBox.style.display =
                            "none";

                    },
                    250
                );

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


    const haber =
        window.haberler.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!haber) {

        console.error(
            "Haber bulunamadı:",
            id
        );

        return;
    }


    /*
       SEO URL ÖNCELİKLİ
    */

    const slug =
        haber.slug ||
        (
            typeof window.slugOlustur ===
            "function"
                ? window.slugOlustur(
                    haber.baslik
                )
                : createFallbackSlug(
                    haber.baslik
                )
        );


    const seoUrl =
        haber.url ||
        `/haber/${slug}`;


    /*
       VERCEL / NORMAL HOSTING

       Eğer /haber/... route'u aktifse
       doğrudan SEO URL'sine gider.
    */

    window.location.href =
        seoUrl;
}


/* =========================================================
   HABER URL'SİNİ DIŞARIDAN KULLAN
   ========================================================= */

window.openNews = openNews;


/* =========================================================
   GÖRSEL AL
   ========================================================= */

function getNewsImage(haber) {

    if (!haber) {
        return getFallbackImage();
    }


    const image =
        haber.gorsel ||
        haber.resim ||
        haber.image ||
        haber.imageUrl;


    if (
        image &&
        String(image).trim()
    ) {

        return String(image).trim();

    }


    return getFallbackImage();
}


/* =========================================================
   FALLBACK GÖRSEL
   ========================================================= */

function getFallbackImage() {

    return (
        "https://images.unsplash.com/" +
        "photo-1504711434969-e33886168f5c" +
        "?auto=format&fit=crop&w=1200&q=80"
    );
}


/* =========================================================
   METİN KISALT
   ========================================================= */

function shortenText(
    text,
    maxLength = 150
) {

    if (!text) {
        return "";
    }


    const clean =
        stripHtml(
            String(text)
        )
            .replace(/\s+/g, " ")
            .trim();


    if (
        clean.length <= maxLength
    ) {

        return clean;

    }


    return (
        clean
            .substring(
                0,
                maxLength
            )
            .trim()
            .replace(/\s+\S*$/, "")
        + "..."
    );
}


/* =========================================================
   HTML TEMİZLE
   ========================================================= */

function stripHtml(text) {

    if (!text) {
        return "";
    }


    return String(text)
        .replace(
            /<[^>]*>/g,
            " "
        )
        .replace(
            /&nbsp;/gi,
            " "
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();
}


/* =========================================================
   TARİH FORMATLA
   ========================================================= */

function formatNewsDate(
    date,
    time
) {

    if (!date) {
        return "";
    }


    if (!time) {
        return String(date);
    }


    return `${date} • ${time}`;
}


/* =========================================================
   SAYI FORMATLA
   ========================================================= */

function formatNumber(value) {

    const number =
        Number(value || 0);


    if (!Number.isFinite(number)) {
        return "0";
    }


    return new Intl.NumberFormat(
        "tr-TR"
    ).format(number);
}


/* =========================================================
   TÜRKÇE NORMALLEŞTİR
   ========================================================= */

function normalizeText(text) {

    if (!text) {
        return "";
    }


    return String(text)
        .toLocaleLowerCase(
            "tr-TR"
        )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /ı/g,
            "i"
        )
        .replace(
            /ğ/g,
            "g"
        )
        .replace(
            /ü/g,
            "u"
        )
        .replace(
            /ş/g,
            "s"
        )
        .replace(
            /ö/g,
            "o"
        )
        .replace(
            /ç/g,
            "c"
        )
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
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   JAVASCRIPT GÜVENLİĞİ
   ========================================================= */

function escapeJs(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }


    return String(value)
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        )
        .replace(
            /"/g,
            '\\"'
        )
        .replace(
            /\r/g,
            "\\r"
        )
        .replace(
            /\n/g,
            "\\n"
        );
}


/* =========================================================
   FALLBACK SLUG
   ========================================================= */

function createFallbackSlug(text) {

    if (!text) {
        return "";
    }


    return String(text)
        .toLocaleLowerCase(
            "tr-TR"
        )
        .replace(
            /ğ/g,
            "g"
        )
        .replace(
            /ü/g,
            "u"
        )
        .replace(
            /ş/g,
            "s"
        )
        .replace(
            /ı/g,
            "i"
        )
        .replace(
            /ö/g,
            "o"
        )
        .replace(
            /ç/g,
            "c"
        )
        .replace(
            /[^a-z0-9\s-]/g,
            ""
        )
        .trim()
        .replace(
            /\s+/g,
            "-"
        )
        .replace(
            /-+/g,
            "-"
        );
}


/* =========================================================
   GLOBAL ETKİLEŞİMLER
   ========================================================= */

function setupGlobalInteractions() {

    /*
       Sayfa yukarı çıkma butonu yoksa
       otomatik oluştur.
    */

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

        backTop.type =
            "button";

        backTop.className =
            "back-to-top";

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


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        },
        {
            passive: true
        }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
}


/* =========================================================
   KLAVYE KISAYOLLARI
   ========================================================= */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            /*
               "/" = arama kutusuna odaklan
            */

            if (
                event.key === "/" &&
                document.activeElement.tagName !==
                    "INPUT" &&
                document.activeElement.tagName !==
                    "TEXTAREA"
            ) {

                event.preventDefault();

                const search =
                    document.getElementById(
                        "searchInput"
                    );

                if (search) {

                    search.focus();

                }

            }


            /*
               ESC = aramayı temizle
            */

            if (
                event.key === "Escape"
            ) {

                const search =
                    document.getElementById(
                        "searchInput"
                    );

                if (
                    search &&
                    document.activeElement === search
                ) {

                    search.value = "";

                    renderMainNews(
                        window.haberler
                    );

                    updateSearchInfo(
                        ""
                    );

                    search.blur();

                }

            }

        }
    );
}


/* =========================================================
   PERFORMANS / SAYFA GÖRÜNÜR DEĞİLSE SLIDER DURDUR
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            clearInterval(
                heroTimer
            );

        } else {

            restartHeroTimer();

        }

    }
);


/* =========================================================
   GLOBAL FONKSİYONLAR
   ========================================================= */

window.renderHero =
    renderHero;

window.renderMainNews =
    renderMainNews;

window.renderPopularNews =
    renderPopularNews;

window.renderBreakingNews =
    renderBreakingNews;

window.renderCategorySections =
    renderCategorySections;


/* =========================================================
   HABERİSTA HAZIR
   ========================================================= */

console.log(
    "%c Haberİsta ",
    "font-weight:bold;font-size:18px;"
);

console.log(
    "Profesyonel haber sistemi aktif."
);
