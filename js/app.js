document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HABER VERİLERİ
    ===================================================== */

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    if (!haberListesi.length) {
        console.error(
            "haberler.js bulunamadı veya haber verisi boş."
        );
        return;
    }


    /* =====================================================
       YARDIMCI FONKSİYONLAR
    ===================================================== */

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function imageUrl(haber) {
        if (!haber || !haber.gorsel) {
            return "images/logo.jpeg";
        }

        return haber.gorsel;
    }


    function haberUrl(haber) {
        if (!haber) {
            return "#";
        }

        let slug = "";

        if (
            haber.slug &&
            typeof haber.slug === "string"
        ) {
            slug = haber.slug;
        }

        if (
            !slug &&
            typeof window.slugOlustur === "function"
        ) {
            slug = window.slugOlustur(
                haber.baslik
            );
        }

        if (!slug) {
            slug = String(
                haber.baslik || ""
            )
                .toLowerCase()
                .normalize("NFD")
                .replace(
                    /[\u0300-\u036f]/g,
                    ""
                )
                .replace(
                    /[^a-z0-9]+/g,
                    "-"
                )
                .replace(
                    /^-|-$/g,
                    ""
                );
        }

        return (
            "/haber/" +
            encodeURIComponent(slug)
        );
    }


    /* =====================================================
       SON DAKİKA
    ===================================================== */

    const breaking =
        document.getElementById(
            "breakingNews"
        );

    if (breaking) {

        const sonBes =
            haberListesi.slice(0, 5);

        const liste = [
            ...sonBes,
            ...sonBes
        ];

        breaking.innerHTML =
            liste
                .map(
                    haber => `
                        <a
                            class="breaking-link"
                            href="${haberUrl(haber)}"
                        >
                            ${escapeHTML(
                                haber.baslik
                            )}
                        </a>
                    `
                )
                .join("");
    }


    /* =====================================================
       HERO / MANŞET
    ===================================================== */

    const heroMain =
        document.getElementById(
            "heroMain"
        );

    const heroNumbers =
        document.getElementById(
            "heroNumbers"
        );

    const heroPrev =
        document.getElementById(
            "heroPrev"
        );

    const heroNext =
        document.getElementById(
            "heroNext"
        );

    const heroNews =
        haberListesi.slice(0, 20);

    let heroIndex = 0;

    let heroTimer = null;


    /* =====================================================
       HERO RENDER
    ===================================================== */

    function renderHero() {

        const haber =
            heroNews[heroIndex];

        if (
            !haber ||
            !heroMain
        ) {
            return;
        }

        heroMain.innerHTML = `
            <a
                class="hero-slide-link"
                href="${haberUrl(haber)}"
            >

                <img
                    class="hero-image"
                    src="${escapeHTML(
                        imageUrl(haber)
                    )}"
                    alt="${escapeHTML(
                        haber.baslik
                    )}"
                    loading="${
                        heroIndex === 0
                            ? "eager"
                            : "lazy"
                    }"
                >

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(
                            haber.kategori
                        )}
                    </span>

                    <h1>
                        ${escapeHTML(
                            haber.baslik
                        )}
                    </h1>

                    <p>
                        ${escapeHTML(
                            haber.spot || ""
                        )}
                    </p>

                    <div class="hero-meta">
                        ${escapeHTML(
                            haber.tarih || ""
                        )}

                        ${
                            haber.saat
                                ? " · " +
                                  escapeHTML(
                                      haber.saat
                                  )
                                : ""
                        }
                    </div>

                </div>

            </a>
        `;

        renderHeroNumbers();
    }


    /* =====================================================
       HERO NUMARALARI
    ===================================================== */

    function renderHeroNumbers() {

        if (!heroNumbers) {
            return;
        }

        heroNumbers.innerHTML =
            heroNews
                .map(
                    (haber, index) => `
                        <button
                            type="button"
                            class="hero-number ${
                                index === heroIndex
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
                    `
                )
                .join("");

        heroNumbers
            .querySelectorAll(
                ".hero-number"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        heroIndex =
                            Number(
                                button.dataset
                                    .index
                            );

                        renderHero();

                        restartHeroTimer();
                    }
                );
            });
    }


    /* =====================================================
       SONRAKİ MANŞET
    ===================================================== */

    function nextHero() {

        heroIndex++;

        if (
            heroIndex >=
            heroNews.length
        ) {
            heroIndex = 0;
        }

        renderHero();
    }


    /* =====================================================
       ÖNCEKİ MANŞET
    ===================================================== */

    function previousHero() {

        heroIndex--;

        if (heroIndex < 0) {

            heroIndex =
                heroNews.length - 1;
        }

        renderHero();
    }


    /* =====================================================
       HERO TIMER
    ===================================================== */

    function restartHeroTimer() {

        if (heroTimer) {
            clearInterval(heroTimer);
        }

        heroTimer =
            setInterval(
                () => {
                    nextHero();
                },
                7000
            );
    }


    /* =====================================================
       HERO BUTONLARI
    ===================================================== */

    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            () => {

                previousHero();

                restartHeroTimer();
            }
        );
    }


    if (heroNext) {

        heroNext.addEventListener(
            "click",
            () => {

                nextHero();

                restartHeroTimer();
            }
        );
    }


    /* =====================================================
       HERO BAŞLAT
    ===================================================== */

    renderHero();

    restartHeroTimer();


    /* =====================================================
       HABER KARTLARI
    ===================================================== */

    const newsGrid =
        document.getElementById(
            "newsGrid"
        );


    function renderNews(
        list = haberListesi
    ) {

        if (!newsGrid) {
            return;
        }

        newsGrid.innerHTML =
            list
                .map(
                    haber => `
                        <article
                            class="news-card"
                        >

                            <a
                                href="${haberUrl(
                                    haber
                                )}"
                            >
                                <img
                                    class="news-card-image"
                                    src="${escapeHTML(
                                        imageUrl(
                                            haber
                                        )
                                    )}"
                                    alt="${escapeHTML(
                                        haber.baslik
                                    )}"
                                    loading="lazy"
                                >
                            </a>

                            <div
                                class="news-card-content"
                            >

                                <a
                                    class="news-card-category"
                                    href="kategori.html?kategori=${encodeURIComponent(
                                        haber.kategori ||
                                            ""
                                    )}"
                                >
                                    ${escapeHTML(
                                        haber.kategori ||
                                            "Haber"
                                    )}
                                </a>

                                <h3>
                                    <a
                                        href="${haberUrl(
                                            haber
                                        )}"
                                    >
                                        ${escapeHTML(
                                            haber.baslik
                                        )}
                                    </a>
                                </h3>

                                <div
                                    class="news-card-meta"
                                >
                                    ${escapeHTML(
                                        haber.tarih ||
                                            ""
                                    )}

                                    ${
                                        haber.saat
                                            ? " · " +
                                              escapeHTML(
                                                  haber.saat
                                              )
                                            : ""
                                    }
                                </div>

                            </div>

                        </article>
                    `
                )
                .join("");
    }


    renderNews();


    /* =====================================================
       ARAMA
    ===================================================== */

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchBox =
        document.getElementById(
            "searchBox"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchResultInfo =
        document.getElementById(
            "searchResultInfo"
        );


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            () => {

                searchBox?.classList.toggle(
                    "active"
                );

                if (
                    searchBox?.classList.contains(
                        "active"
                    )
                ) {
                    searchInput?.focus();
                }
            }
        );
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .trim()
                        .toLocaleLowerCase(
                            "tr-TR"
                        );


                if (!query) {

                    renderNews();

                    if (
                        searchResultInfo
                    ) {
                        searchResultInfo.textContent =
                            "";
                    }

                    return;
                }


                const results =
                    haberListesi.filter(
                        haber => {

                            const text = [
                                haber.baslik,
                                haber.spot,
                                haber.kategori,
                                haber.icerik
                            ]
                                .filter(Boolean)
                                .join(" ")
                                .toLocaleLowerCase(
                                    "tr-TR"
                                );

                            return text.includes(
                                query
                            );
                        }
                    );


                renderNews(results);


                if (
                    searchResultInfo
                ) {

                    searchResultInfo.textContent =
                        `"${query}" için ${results.length} haber bulundu.`;
                }
            }
        );
    }


    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    const mobileNav =
        document.getElementById(
            "mobileNav"
        );


    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            () => {

                mobileNav?.classList.toggle(
                    "active"
                );
            }
        );
    }


    /* =====================================================
       PİYASA
    ===================================================== */

    const marketItems =
        document.getElementById(
            "marketItems"
        );

    const marketUpdated =
        document.getElementById(
            "marketUpdated"
        );


    async function piyasaVerileriniGetir() {

        if (!marketItems) {
            return;
        }


        try {

            const response =
                await fetch(
                    "/api/market",
                    {
                        cache:
                            "no-store"
                    }
                );


            if (!response.ok) {
                throw new Error(
                    "Market API hatası"
                );
            }


            const data =
                await response.json();


            const marketList = [
                [
                    "USD/TRY",
                    "Dolar",
                    "₺"
                ],
                [
                    "EUR/TRY",
                    "Euro",
                    "₺"
                ],
                [
                    "XAU/TRY",
                    "Altın",
                    "₺"
                ],
                [
                    "BTC/USD",
                    "Bitcoin",
                    "$"
                ],
                [
                    "BIST100",
                    "BIST 100",
                    ""
                ]
            ];


            marketItems.innerHTML =
                marketList
                    .map(
                        ([
                            key,
                            name,
                            suffix
                        ]) => {

                            const item =
                                data[key];


                            if (!item) {
                                return "";
                            }


                            const price =
                                typeof item.price ===
                                "number"
                                    ? item.price.toLocaleString(
                                          "tr-TR",
                                          {
                                              minimumFractionDigits:
                                                  key ===
                                                  "BIST100"
                                                      ? 0
                                                      : 2,

                                              maximumFractionDigits:
                                                  key ===
                                                  "BIST100"
                                                      ? 0
                                                      : 2
                                          }
                                      )
                                    : "—";


                            const change =
                                typeof item.changePercent ===
                                "number"
                                    ? item.changePercent
                                    : null;


                            let changeHTML =
                                "";


                            if (
                                change !==
                                null
                            ) {

                                const cls =
                                    change >
                                    0
                                        ? "market-up"
                                        : change <
                                          0
                                            ? "market-down"
                                            : "market-neutral";


                                const symbol =
                                    change >
                                    0
                                        ? "▲"
                                        : change <
                                          0
                                            ? "▼"
                                            : "•";


                                changeHTML = `
                                    <span
                                        class="market-change ${cls}"
                                    >
                                        ${symbol}
                                        ${Math.abs(
                                            change
                                        ).toFixed(
                                            2
                                        )}%
                                    </span>
                                `;
                            }


                            return `
                                <div
                                    class="market-item"
                                >

                                    <span
                                        class="market-name"
                                    >
                                        ${name}
                                    </span>

                                    <span
                                        class="market-price"
                                    >
                                        ${price}${suffix}
                                    </span>

                                    ${changeHTML}

                                </div>
                            `;
                        }
                    )
                    .join("");


            if (marketUpdated) {

                const now =
                    new Date();

                marketUpdated.textContent =
                    now.toLocaleTimeString(
                        "tr-TR",
                        {
                            hour:
                                "2-digit",

                            minute:
                                "2-digit"
                        }
                    );
            }

        } catch (error) {

            console.warn(
                "Piyasa verileri alınamadı:",
                error
            );

            marketItems.innerHTML = `
                <div
                    class="market-loading"
                >
                    Piyasa verileri şu anda alınamıyor.
                </div>
            `;
        }
    }


    piyasaVerileriniGetir();


    /* =====================================================
       BİLDİRİMLER
    ===================================================== */

    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );


    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            async () => {

                try {

                    if (
                        window.OneSignal &&
                        OneSignal.Notifications
                    ) {

                        await OneSignal
                            .Notifications
                            .requestPermission();


                        if (
                            OneSignal.User &&
                            OneSignal
                                .User
                                .PushSubscription
                        ) {

                            await OneSignal
                                .User
                                .PushSubscription
                                .optIn();
                        }


                        notificationBtn.textContent =
                            "✓";

                    } else {

                        alert(
                            "Bildirim sistemi şu anda hazır değil."
                        );
                    }

                } catch (error) {

                    console.warn(
                        "Bildirim izni alınamadı:",
                        error
                    );
                }
            }
        );
    }


    /* =====================================================
       ÇEREZ
    ===================================================== */

    const cookieBox =
        document.getElementById(
            "cookieBox"
        );

    const cookieAccept =
        document.getElementById(
            "cookieAccept"
        );


    if (
        localStorage.getItem(
            "haberista_cookie"
        ) === "1"
    ) {

        if (cookieBox) {
            cookieBox.style.display =
                "none";
        }
    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    "haberista_cookie",
                    "1"
                );

                if (cookieBox) {
                    cookieBox.style.display =
                        "none";
                }
            }
        );
    }

});
