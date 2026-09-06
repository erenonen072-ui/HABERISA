"use strict";

/* =========================================================
   HABERİSTA APP.JS
   ANA SAYFA UYGULAMASI
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       YARDIMCI
    ===================================================== */

    const $ = (selector) => document.querySelector(selector);

    const $$ = (selector) =>
        Array.from(document.querySelectorAll(selector));


    /* =====================================================
       HABER VERİLERİ
    ===================================================== */

    const haberListesi =
        Array.isArray(window.haberler)
            ? window.haberler
            : [];


    /* =====================================================
       DOM
    ===================================================== */

    const menuBtn = $("#menuBtn");

    const searchBtn = $("#searchBtn");

    const searchBox = $("#searchBox");

    const searchInput = $("#searchInput");

    const breakingNews = $("#breakingNews");

    const heroMain = $("#heroMain");

    const heroPrev = $("#heroPrev");

    const heroNext = $("#heroNext");

    const heroNumbers = $("#heroNumbers");

    const newsGrid = $("#newsGrid");

    const searchResultInfo = $("#searchResultInfo");

    const cookieBox = $("#cookieBox");

    const cookieAccept = $("#cookieAccept");


    /* =====================================================
       GÖRSEL YOLU
       
       image / resim / gorsel / foto vb.
       hepsini destekler.
    ===================================================== */

    function getImagePath(haber) {

        if (!haber) {
            return "";
        }

        const image =
            haber.image ||
            haber.resim ||
            haber.gorsel ||
            haber.görsel ||
            haber.foto ||
            haber.fotograf ||
            haber.photo ||
            haber.thumbnail ||
            haber.img ||
            "";

        return String(image).trim();
    }


    /* =====================================================
       HTML GÜVENLİĞİ
    ===================================================== */

    function escapeHTML(text) {

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       SLUG
    ===================================================== */

    function getSlug(haber) {

        if (haber && haber.slug) {
            return haber.slug;
        }

        if (
            typeof window.slugOlustur === "function"
        ) {
            return window.slugOlustur(
                haber ? haber.baslik : ""
            );
        }

        return String(
            haber ? haber.baslik : ""
        )
            .toLocaleLowerCase("tr-TR")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/â/g, "a")
            .replace(/î/g, "i")
            .replace(/û/g, "u")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "");
    }


    /* =====================================================
       HABER URL
    ===================================================== */

    function getNewsUrl(haber) {

        return "/haber/" + getSlug(haber);
    }


    /* =====================================================
       ARAMA
    ===================================================== */

    function openSearch() {

        if (!searchBox) {
            return;
        }

        searchBox.classList.add("active");

        if (searchInput) {

            setTimeout(function () {

                searchInput.focus();

            }, 100);
        }
    }


    function closeSearch() {

        if (!searchBox) {
            return;
        }

        searchBox.classList.remove("active");
    }


    function toggleSearch() {

        if (!searchBox) {
            return;
        }

        if (
            searchBox.classList.contains("active")
        ) {

            closeSearch();

        } else {

            openSearch();
        }
    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                toggleSearch();
            }
        );
    }


    if (searchBox) {

        searchBox.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();
            }
        );
    }


    document.addEventListener(
        "click",
        function (event) {

            if (
                !searchBox ||
                !searchBtn
            ) {
                return;
            }

            if (
                !searchBox.contains(event.target) &&
                !searchBtn.contains(event.target)
            ) {

                closeSearch();
            }
        }
    );


    /* =====================================================
       ARAMA
    ===================================================== */

    function searchNews(query) {

        query = String(query || "")
            .trim()
            .toLocaleLowerCase("tr-TR");


        if (!query) {

            if (searchResultInfo) {

                searchResultInfo.innerHTML = "";
            }

            renderNews(haberListesi);

            return;
        }


        const results =
            haberListesi.filter(
                function (haber) {

                    const title =
                        String(
                            haber.baslik || ""
                        )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    const spot =
                        String(
                            haber.spot || ""
                        )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    const category =
                        String(
                            haber.kategori || ""
                        )
                            .toLocaleLowerCase(
                                "tr-TR"
                            );


                    return (
                        title.includes(query) ||
                        spot.includes(query) ||
                        category.includes(query)
                    );
                }
            );


        renderNews(results);


        if (searchResultInfo) {

            searchResultInfo.innerHTML =
                `<strong>${results.length}</strong> haber bulundu.`;
        }
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                searchNews(this.value);
            }
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    this.value = "";

                    searchNews("");

                    closeSearch();
                }
            }
        );
    }


    /* =====================================================
       SON DAKİKA BANDI
       
       EN YENİ 5 HABER
    ===================================================== */

    function renderBreakingNews() {

        if (!breakingNews) {
            return;
        }


        const breaking =
            haberListesi.slice(0, 5);


        if (
            !Array.isArray(breaking) ||
            breaking.length === 0
        ) {

            breakingNews.innerHTML = `
                <div class="breaking-track">
                    <span class="breaking-link">
                        Haberİsta'dan son gelişmeler...
                    </span>
                </div>
            `;

            return;
        }


        const firstSet =
            breaking
                .map(function (haber) {

                    return `
                        <a
                            href="${getNewsUrl(haber)}"
                            class="breaking-link"
                        >
                            ${escapeHTML(haber.baslik)}
                        </a>
                    `;
                })
                .join("");


        const secondSet =
            breaking
                .map(function (haber) {

                    return `
                        <a
                            href="${getNewsUrl(haber)}"
                            class="breaking-link"
                        >
                            ${escapeHTML(haber.baslik)}
                        </a>
                    `;
                })
                .join("");


        breakingNews.innerHTML = `

            <div class="breaking-track">

                ${firstSet}

                ${secondSet}

            </div>

        `;
    }


    /* =====================================================
       MANŞET HABERLERİ
    ===================================================== */

    let heroIndex = 0;

    const heroNews =
        haberListesi.slice(0, 5);


    /* =====================================================
       MANŞET OLUŞTUR
    ===================================================== */

    function renderHero() {

        if (!heroMain) {
            return;
        }


        if (
            !Array.isArray(heroNews) ||
            heroNews.length === 0
        ) {

            heroMain.innerHTML = `

                <div class="hero-empty">

                    Henüz haber bulunmuyor.

                </div>

            `;

            return;
        }


        if (
            heroIndex >= heroNews.length
        ) {

            heroIndex = 0;
        }


        if (
            heroIndex < 0
        ) {

            heroIndex =
                heroNews.length - 1;
        }


        const haber =
            heroNews[heroIndex];


        /* FOTOĞRAF */

        const image =
            getImagePath(haber);


        heroMain.innerHTML = `

            <a
                href="${getNewsUrl(haber)}"
                class="hero-slide-link"
            >

                ${
                    image
                        ? `

                            <img
                                src="${escapeHTML(image)}"
                                alt="${escapeHTML(haber.baslik || "Haberİsta")}"
                                class="hero-image"
                                loading="eager"
                                onerror="this.style.display='none';"
                            >

                          `
                        : `

                            <div class="hero-image hero-image-empty">

                                Haberİsta

                            </div>

                          `
                }


                <div class="hero-overlay"></div>


                <div class="hero-content">

                    <span class="hero-category">

                        ${escapeHTML(
                            haber.kategori || ""
                        )}

                    </span>


                    <h1>

                        ${escapeHTML(
                            haber.baslik || ""
                        )}

                    </h1>


                    <p>

                        ${escapeHTML(
                            haber.spot || ""
                        )}

                    </p>


                    <div class="hero-meta">

                        ${escapeHTML(
                            haber.date || ""
                        )}

                        ${
                            haber.time
                                ? `

                                    <span>•</span>

                                    ${escapeHTML(
                                        haber.time
                                    )}

                                  `
                                : ""
                        }

                    </div>

                </div>

            </a>

        `;


        renderHeroNumbers();
    }


    /* =====================================================
       MANŞET NUMARALARI
    ===================================================== */

    function renderHeroNumbers() {

        if (!heroNumbers) {
            return;
        }


        heroNumbers.innerHTML =
            heroNews
                .map(
                    function (haber, index) {

                        return `

                            <button
                                type="button"
                                class="hero-number ${
                                    index === heroIndex
                                        ? "active"
                                        : ""
                                }"
                                data-index="${index}"
                                aria-label="${index + 1}. haber"
                            >

                                ${index + 1}

                            </button>

                        `;
                    }
                )
                .join("");


        const buttons =
            heroNumbers.querySelectorAll(
                ".hero-number"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        heroIndex =
                            Number(
                                this.dataset.index
                            );

                        renderHero();
                    }
                );
            }
        );
    }


    /* =====================================================
       MANŞET ÖNCEKİ
    ===================================================== */

    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            function () {

                if (
                    heroNews.length === 0
                ) {
                    return;
                }


                heroIndex--;


                if (
                    heroIndex < 0
                ) {

                    heroIndex =
                        heroNews.length - 1;
                }


                renderHero();
            }
        );
    }


    /* =====================================================
       MANŞET SONRAKİ
    ===================================================== */

    if (heroNext) {

        heroNext.addEventListener(
            "click",
            function () {

                if (
                    heroNews.length === 0
                ) {
                    return;
                }


                heroIndex++;


                if (
                    heroIndex >=
                    heroNews.length
                ) {

                    heroIndex = 0;
                }


                renderHero();
            }
        );
    }


    /* =====================================================
       OTOMATİK MANŞET
    ===================================================== */

    if (
        heroNews.length > 1
    ) {

        setInterval(
            function () {

                heroIndex++;


                if (
                    heroIndex >=
                    heroNews.length
                ) {

                    heroIndex = 0;
                }


                renderHero();

            },
            7000
        );
    }


    /* =====================================================
       HABER KARTLARI
    ===================================================== */

    function renderNews(list) {

        if (!newsGrid) {
            return;
        }


        if (
            !Array.isArray(list) ||
            list.length === 0
        ) {

            newsGrid.innerHTML = `

                <div class="no-news">

                    <div class="no-news-icon">

                        📰

                    </div>


                    <h3>

                        Haber bulunamadı

                    </h3>


                    <p>

                        Aradığınız kriterlere uygun haber bulunamadı.

                    </p>

                </div>

            `;

            return;
        }


        newsGrid.innerHTML =
            list
                .map(
                    function (haber) {


                        /* =========================
                           FOTOĞRAF
                        ========================= */

                        const image =
                            getImagePath(haber);


                        return `

                            <article
                                class="news-card"
                                data-id="${escapeHTML(
                                    haber.id
                                )}"
                            >

                                <a
                                    href="${getNewsUrl(haber)}"
                                    class="news-card-link"
                                >


                                    <!-- FOTOĞRAF -->

                                    <div class="news-card-image">

                                        ${
                                            image
                                                ? `

                                                    <img
                                                        src="${escapeHTML(image)}"
                                                        alt="${escapeHTML(
                                                            haber.baslik || "Haberİsta"
                                                        )}"
                                                        loading="lazy"
                                                        onerror="this.style.display='none';"
                                                    >

                                                  `
                                                : `

                                                    <div class="image-placeholder">

                                                        Haberİsta

                                                    </div>

                                                  `
                                        }


                                        <span class="news-category">

                                            ${escapeHTML(
                                                haber.kategori || ""
                                            )}

                                        </span>

                                    </div>


                                    <!-- İÇERİK -->

                                    <div class="news-card-content">


                                        <div class="news-card-meta">

                                            <span>

                                                ${escapeHTML(
                                                    haber.date || ""
                                                )}

                                            </span>


                                            ${
                                                haber.time
                                                    ? `

                                                        <span>•</span>

                                                        <span>

                                                            ${escapeHTML(
                                                                haber.time
                                                            )}

                                                        </span>

                                                      `
                                                    : ""
                                            }

                                        </div>


                                        <h3>

                                            ${escapeHTML(
                                                haber.baslik || ""
                                            )}

                                        </h3>


                                        <p>

                                            ${escapeHTML(
                                                haber.spot || ""
                                            )}

                                        </p>


                                        <div class="news-card-bottom">


                                            <span class="read-more">

                                                Haberi Oku →

                                            </span>


                                            ${
                                                haber.views
                                                    ? `

                                                        <span class="views">

                                                            👁

                                                            ${Number(
                                                                haber.views
                                                            ).toLocaleString(
                                                                "tr-TR"
                                                            )}

                                                        </span>

                                                      `
                                                    : ""
                                            }

                                        </div>


                                    </div>

                                </a>

                            </article>

                        `;
                    }
                )
                .join("");
    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "menu-open"
                );


                const nav =
                    document.querySelector(
                        ".category-nav"
                    );


                if (nav) {

                    nav.classList.toggle(
                        "mobile-open"
                    );
                }
            }
        );
    }


    /* =====================================================
       MENÜ LİNKLERİ
    ===================================================== */

    $$(".category-nav a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        document.body.classList.remove(
                            "menu-open"
                        );


                        const nav =
                            document.querySelector(
                                ".category-nav"
                            );


                        if (nav) {

                            nav.classList.remove(
                                "mobile-open"
                            );
                        }
                    }
                );
            }
        );


    /* =====================================================
       ÇEREZ
    ===================================================== */

    function showCookieBox() {

        if (!cookieBox) {
            return;
        }


        const accepted =
            localStorage.getItem(
                "haberista_cookie"
            );


        if (
            accepted === "true"
        ) {

            cookieBox.style.display =
                "none";

        } else {

            cookieBox.style.display =
                "flex";
        }
    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "haberista_cookie",
                    "true"
                );


                if (cookieBox) {

                    cookieBox.style.display =
                        "none";
                }
            }
        );
    }


    /* =====================================================
       CANLI SAAT
    ===================================================== */

    function updateTime() {

        const now =
            new Date();


        const timeText =
            now.toLocaleTimeString(
                "tr-TR",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const dateText =
            now.toLocaleDateString(
                "tr-TR",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            );


        const clock =
            document.querySelector(
                ".live-clock"
            );


        if (clock) {

            clock.textContent =
                `${dateText} • ${timeText}`;
        }
    }


    /* =====================================================
       BAŞLAT
    ===================================================== */

    renderBreakingNews();

    renderHero();

    renderNews(
        haberListesi
    );

    showCookieBox();

    updateTime();


    setInterval(
        updateTime,
        30000
    );


    /* =====================================================
       KONSOL
    ===================================================== */

    console.log(
        "Haberİsta App başlatıldı."
    );


    console.log(
        "Yüklenen haber sayısı:",
        haberListesi.length
    );


    console.log(
        "Son dakika için kullanılan haberler:",
        haberListesi.slice(0, 5)
    );


    /* =====================================================
       FOTOĞRAF KONTROLÜ
    ===================================================== */

    console.log(
        "Haber fotoğrafları:",
        haberListesi.map(function (haber) {

            return {
                id: haber.id,
                baslik: haber.baslik,
                image: getImagePath(haber)
            };

        })
    );

});


/* =========================================================
   HABERİSTA CANLI PİYASA
========================================================= */

async function piyasaVerileriniGetir() {

    const marketItems =
        document.getElementById(
            "marketItems"
        );


    const marketUpdated =
        document.getElementById(
            "marketUpdated"
        );


    if (!marketItems) {
        return;
    }


    try {

        const response =
            await fetch(
                "/api/market",
                {
                    cache: "no-store"
                }
            );


        const result =
            await response.json();


        if (!result.success) {

            throw new Error(
                result.error ||
                "Piyasa verisi alınamadı."
            );
        }


        const data =
            result.data;


        const piyasalar = [

            {
                key: "USD/TRY",
                label: "Dolar",
                suffix: "₺",
                decimals: 2
            },

            {
                key: "EUR/TRY",
                label: "Euro",
                suffix: "₺",
                decimals: 2
            },

            {
                key: "XAU/TRY",
                label: "Altın",
                suffix: "₺",
                decimals: 2
            },

            {
                key: "BTC/USD",
                label: "Bitcoin",
                suffix: "$",
                decimals: 2
            },

            {
                key: "BIST100",
                label: "BIST 100",
                suffix: "",
                decimals: 2
            }

        ];


        marketItems.innerHTML =

            piyasalar
                .map(function (market) {


                    const item =
                        data[market.key];


                    if (
                        !item ||
                        item.price === null ||
                        item.price === undefined
                    ) {

                        return `

                            <div class="market-item">

                                <span class="market-name">

                                    ${market.label}

                                </span>


                                <strong class="market-price">

                                    --

                                </strong>


                                <span class="market-change neutral">

                                    EOD

                                </span>

                            </div>

                        `;
                    }


                    const price =
                        Number(
                            item.price
                        ).toLocaleString(
                            "tr-TR",
                            {
                                minimumFractionDigits:
                                    market.decimals,

                                maximumFractionDigits:
                                    market.decimals
                            }
                        );


                    const percent =
                        Number(
                            item.percent || 0
                        );


                    const direction =

                        percent > 0
                            ? "▲"
                            : percent < 0
                                ? "▼"
                                : "•";


                    const className =

                        percent > 0
                            ? "up"
                            : percent < 0
                                ? "down"
                                : "neutral";


                    return `

                        <div class="market-item">

                            <span class="market-name">

                                ${market.label}

                            </span>


                            <strong class="market-price">

                                ${price}${market.suffix}

                            </strong>


                            <span class="market-change ${className}">

                                ${direction}

                                ${Math.abs(
                                    percent
                                ).toFixed(2)}%

                            </span>

                        </div>

                    `;

                })
                .join("");


        const now =
            new Date();


        if (marketUpdated) {

            marketUpdated.textContent =

                "Son güncelleme " +

                now.toLocaleTimeString(
                    "tr-TR",
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );
        }


    } catch (error) {

        console.error(
            "Piyasa:",
            error
        );


        marketItems.innerHTML = `

            <div class="market-error">

                Piyasa verileri şu anda alınamıyor.

            </div>

        `;


        if (marketUpdated) {

            marketUpdated.textContent =
                "Bağlantı bekleniyor";
        }
    }
}


/* =========================================================
   PİYASA FİYAT FORMAT
========================================================= */

function formatMarketPrice(value) {

    return Number(
        value
    ).toLocaleString(
        "tr-TR",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
}


/* =========================================================
   PİYASA BAŞLAT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        piyasaVerileriniGetir();


        setInterval(
            piyasaVerileriniGetir,
            30000
        );

    }
);
/* =========================================================
   HABERİSTA - ONESIGNAL PROFESYONEL BİLDİRİM BUTONU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const notificationBtn =
        document.getElementById("notificationBtn");

    if (!notificationBtn) return;


    function butonAktif() {

        notificationBtn.classList.add("enabled");

        notificationBtn.querySelector(".notification-icon").textContent = "✓";

        notificationBtn.querySelector(".notification-text").textContent =
            "Bildirimler Açık";
    }


    function butonNormal() {

        notificationBtn.classList.remove("enabled");

        notificationBtn.querySelector(".notification-icon").textContent = "🔔";

        notificationBtn.querySelector(".notification-text").textContent =
            "Bildirimleri Aç";
    }


    async function durumKontrol() {

        try {

            await new Promise(function(resolve) {
                setTimeout(resolve, 1000);
            });

            if (!window.OneSignal) return;

            const optedIn =
                OneSignal.User.PushSubscription.optedIn;

            if (optedIn) {

                butonAktif();

            } else {

                butonNormal();

            }

        } catch (error) {

            console.log(
                "OneSignal durum kontrolü:",
                error
            );

        }
    }


    notificationBtn.addEventListener("click", async function () {

        try {

            if (!window.OneSignal) {

                alert(
                    "Bildirim sistemi henüz yüklenmedi. Lütfen birkaç saniye sonra tekrar deneyin."
                );

                return;
            }


            const optedIn =
                OneSignal.User.PushSubscription.optedIn;


            if (optedIn) {

                butonAktif();

                return;
            }


            await OneSignal.Notifications.requestPermission();


            await OneSignal.User.PushSubscription.optIn();


            butonAktif();


        } catch (error) {

            console.error(
                "Bildirim aboneliği başarısız:",
                error
            );

            alert(
                "Bildirim izni verilemedi. Tarayıcı bildirim izinlerinizi kontrol edin."
            );

        }

    });


    durumKontrol();

});
