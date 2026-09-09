
/* =========================================================
   HABERİSTA - APP.JS
   Haber kaynağı: js/haberler.js
   ========================================================= */

(function () {
    "use strict";

    /* =====================================================
       HABER VERİSİ
    ===================================================== */

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    /* =====================================================
       DOM
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const searchBtn = document.getElementById("searchBtn");
    const notificationBtn = document.getElementById("notificationBtn");

    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const searchResultInfo = document.getElementById("searchResultInfo");

    const breakingNews = document.getElementById("breakingNews");

    const heroPrev = document.getElementById("heroPrev");
    const heroMain = document.getElementById("heroMain");
    const heroNext = document.getElementById("heroNext");
    const heroNumbers = document.getElementById("heroNumbers");

    const newsGrid = document.getElementById("newsGrid");

    const cookieBox = document.getElementById("cookieBox");
    const cookieAccept = document.getElementById("cookieAccept");

    /* =====================================================
       AYARLAR
    ===================================================== */

    const HERO_LIMIT = 20;
    const BREAKING_LIMIT = 5;

    let aktifManşet = 0;
    let aramaMetni = "";

    const manşetler = haberListesi.slice(0, HERO_LIMIT);

    /* =====================================================
       GÜVENLİ HTML
    ===================================================== */

    function escapeHTML(value) {
        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* =====================================================
       HABER URL
    ===================================================== */

    function haberURL(haber) {
        if (!haber) {
            return "#";
        }

        if (haber.url) {
            return haber.url;
        }

        if (haber.slug) {
            return "/haber/" + encodeURIComponent(haber.slug);
        }

        if (typeof window.slugOlustur === "function") {
            try {
                return "/haber/" + window.slugOlustur(haber);
            } catch (error) {
                console.warn("Slug oluşturulamadı:", error);
            }
        }

        if (haber.id !== undefined && haber.id !== null) {
            return "/haber/" + encodeURIComponent(String(haber.id));
        }

        return "#";
    }

    /* =====================================================
       GÖRSEL
    ===================================================== */

    function haberGorseli(haber) {
        return (
            haber.gorsel ||
            haber.gorselUrl ||
            haber.image ||
            haber.imageUrl ||
            "images/logo.jpeg"
        );
    }

    /* =====================================================
       TARİH
    ===================================================== */

    function haberTarihi(haber) {
        const tarih = haber.tarih || haber.date || "";
        const saat = haber.saat || haber.time || "";

        if (tarih && saat) {
            return `${tarih} ${saat}`;
        }

        return tarih || saat || "";
    }

    /* =====================================================
       SON DAKİKA
    ===================================================== */

    function sonDakikaOlustur() {
        if (!breakingNews) {
            return;
        }

        const sonHaberler = haberListesi.slice(0, BREAKING_LIMIT);

        if (!sonHaberler.length) {
            breakingNews.innerHTML = `
                <span class="breaking-empty">
                    Henüz haber bulunmuyor.
                </span>
            `;
            return;
        }

        const html = sonHaberler
            .map(function (haber) {
                return `
                    <a
                        class="breaking-item"
                        href="${escapeHTML(haberURL(haber))}"
                        title="${escapeHTML(haber.baslik)}"
                    >
                        ${escapeHTML(haber.baslik)}
                    </a>
                `;
            })
            .join("");

        /*
         * Aynı listeyi tekrar ediyoruz.
         * CSS marquee kullanıyorsa kesintisiz görünür.
         */
        breakingNews.innerHTML = `
            <div class="breaking-track">
                <div class="breaking-group">
                    ${html}
                </div>

                <div
                    class="breaking-group"
                    aria-hidden="true"
                >
                    ${html}
                </div>
            </div>
        `;
    }

    /* =====================================================
       MANŞET
    ===================================================== */

    function manşetOlustur(index) {
        if (!heroMain) {
            return;
        }

        if (!manşetler.length) {
            heroMain.innerHTML = `
                <div class="hero-empty">
                    Henüz manşet haberi bulunmuyor.
                </div>
            `;

            return;
        }

        if (index < 0) {
            index = manşetler.length - 1;
        }

        if (index >= manşetler.length) {
            index = 0;
        }

        aktifManşet = index;

        const haber = manşetler[aktifManşet];

        const baslik = haber.baslik || "Başlıksız haber";
        const spot = haber.spot || "";
        const kategori = haber.kategori || "Haber";
        const tarih = haberTarihi(haber);
        const gorsel = haberGorseli(haber);
        const url = haberURL(haber);

        heroMain.innerHTML = `
            <a
                class="hero-slide-link"
                href="${escapeHTML(url)}"
                aria-label="${escapeHTML(baslik)}"
            >

                <img
                    class="hero-image"
                    src="${escapeHTML(gorsel)}"
                    alt="${escapeHTML(baslik)}"
                    loading="eager"
                    decoding="async"
                    onerror="this.onerror=null;this.src='images/logo.jpeg';"
                >

                <div class="hero-overlay"></div>

                <div class="hero-content">

                    <span class="hero-category">
                        ${escapeHTML(kategori)}
                    </span>

                    <h2>
                        ${escapeHTML(baslik)}
                    </h2>

                    ${
                        spot
                            ? `
                                <p>
                                    ${escapeHTML(spot)}
                                </p>
                            `
                            : ""
                    }

                    ${
                        tarih
                            ? `
                                <div class="hero-meta">
                                    ${escapeHTML(tarih)}
                                </div>
                            `
                            : ""
                    }

                </div>

            </a>
        `;

        manşetNumaralariniGuncelle();
    }

    /* =====================================================
       MANŞET NUMARALARI
    ===================================================== */

    function manşetNumaralariniOlustur() {
        if (!heroNumbers) {
            return;
        }

        if (!manşetler.length) {
            heroNumbers.innerHTML = "";
            return;
        }

        heroNumbers.innerHTML = manşetler
            .map(function (haber, index) {
                const aktif = index === aktifManşet;

                return `
                    <button
                        type="button"
                        class="hero-number ${aktif ? "active" : ""}"
                        data-hero-index="${index}"
                        aria-label="${index + 1}. manşet"
                        aria-current="${aktif ? "true" : "false"}"
                    >
                        ${index + 1}
                    </button>
                `;
            })
            .join("");

        heroNumbers
            .querySelectorAll("[data-hero-index]")
            .forEach(function (button) {
                button.addEventListener("click", function () {
                    const index = Number(
                        button.getAttribute("data-hero-index")
                    );

                    manşetOlustur(index);
                });
            });
    }

    function manşetNumaralariniGuncelle() {
        if (!heroNumbers) {
            return;
        }

        heroNumbers
            .querySelectorAll("[data-hero-index]")
            .forEach(function (button) {
                const index = Number(
                    button.getAttribute("data-hero-index")
                );

                const aktif = index === aktifManşet;

                button.classList.toggle("active", aktif);
                button.setAttribute(
                    "aria-current",
                    aktif ? "true" : "false"
                );
            });
    }

    /* =====================================================
       ÖNCEKİ / SONRAKİ MANŞET
    ===================================================== */

    function oncekiManşet() {
        if (!manşetler.length) {
            return;
        }

        let yeniIndex = aktifManşet - 1;

        if (yeniIndex < 0) {
            yeniIndex = manşetler.length - 1;
        }

        manşetOlustur(yeniIndex);
    }

    function sonrakiManşet() {
        if (!manşetler.length) {
            return;
        }

        let yeniIndex = aktifManşet + 1;

        if (yeniIndex >= manşetler.length) {
            yeniIndex = 0;
        }

        manşetOlustur(yeniIndex);
    }

    if (heroPrev) {
        heroPrev.addEventListener("click", oncekiManşet);
    }

    if (heroNext) {
        heroNext.addEventListener("click", sonrakiManşet);
    }

    /* =====================================================
       SON HABERLER
    ===================================================== */

    function sonHaberleriOlustur(liste) {
        if (!newsGrid) {
            return;
        }

        if (!liste.length) {
            newsGrid.innerHTML = `
                <div class="news-empty">
                    Aramanızla eşleşen haber bulunamadı.
                </div>
            `;

            return;
        }

        newsGrid.innerHTML = liste
            .map(function (haber) {
                const baslik =
                    haber.baslik || "Başlıksız haber";

                const spot = haber.spot || "";
                const kategori =
                    haber.kategori || "Haber";

                const tarih =
                    haberTarihi(haber);

                const gorsel =
                    haberGorseli(haber);

                const url =
                    haberURL(haber);

                return `
                    <article class="news-card">

                        <a
                            href="${escapeHTML(url)}"
                            class="news-card-link"
                            aria-label="${escapeHTML(baslik)}"
                        >

                            <div class="news-image-wrap">

                                <img
                                    class="news-image"
                                    src="${escapeHTML(gorsel)}"
                                    alt="${escapeHTML(baslik)}"
                                    loading="lazy"
                                    decoding="async"
                                    onerror="this.onerror=null;this.src='images/logo.jpeg';"
                                >

                            </div>

                            <div class="news-card-content">

                                <span class="news-category">
                                    ${escapeHTML(kategori)}
                                </span>

                                <h3>
                                    ${escapeHTML(baslik)}
                                </h3>

                                ${
                                    spot
                                        ? `
                                            <p>
                                                ${escapeHTML(spot)}
                                            </p>
                                        `
                                        : ""
                                }

                                ${
                                    tarih
                                        ? `
                                            <div class="news-meta">
                                                ${escapeHTML(tarih)}
                                            </div>
                                        `
                                        : ""
                                }

                            </div>

                        </a>

                    </article>
                `;
            })
            .join("");
    }

    /* =====================================================
       ARAMA
    ===================================================== */

    function haberAra(metin) {
        const arama = String(metin || "")
            .trim()
            .toLocaleLowerCase("tr-TR");

        if (!arama) {
            if (searchResultInfo) {
                searchResultInfo.textContent = "";
            }

            sonHaberleriOlustur(haberListesi);

            return;
        }

        const sonuc = haberListesi.filter(function (haber) {
            const alanlar = [
                haber.baslik,
                haber.spot,
                haber.kategori,
                haber.yazar,
                haber.kaynak,
                haber.seo
            ];

            return alanlar.some(function (alan) {
                return String(alan || "")
                    .toLocaleLowerCase("tr-TR")
                    .includes(arama);
            });
        });

        if (searchResultInfo) {
            searchResultInfo.textContent =
                `${sonuc.length} haber bulundu.`;
        }

        sonHaberleriOlustur(sonuc);
    }

    if (searchInput) {
        searchInput.addEventListener(
            "input",
            function (event) {
                aramaMetni = event.target.value;
                haberAra(aramaMetni);
            }
        );

        searchInput.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Escape") {
                    searchInput.value = "";
                    aramaMetni = "";

                    haberAra("");
                    searchBox?.classList.remove("active");
                }
            }
        );
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            if (!searchBox) {
                return;
            }

            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active")) {
                setTimeout(function () {
                    searchInput?.focus();
                }, 50);
            }
        });
    }

    /* =====================================================
       MOBİL MENÜ
    ===================================================== */

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            document.body.classList.toggle("menu-open");

            menuBtn.setAttribute(
                "aria-expanded",
                document.body.classList.contains("menu-open")
                    ? "true"
                    : "false"
            );
        });
    }

    document
        .querySelectorAll(".category-nav a")
        .forEach(function (link) {
            link.addEventListener("click", function () {
                document.body.classList.remove("menu-open");
            });
        });

    /* =====================================================
       BİLDİRİMLER
    ===================================================== */

    if (notificationBtn) {
        notificationBtn.addEventListener(
            "click",
            async function () {
                try {
                    if (
                        window.OneSignalDeferred &&
                        Array.isArray(window.OneSignalDeferred)
                    ) {
                        window.OneSignalDeferred.push(
                            async function (OneSignal) {
                                try {
                                    await OneSignal.Slidedown.promptPush();
                                } catch (error) {
                                    console.warn(
                                        "OneSignal bildirim penceresi açılamadı:",
                                        error
                                    );
                                }
                            }
                        );
                    } else {
                        console.warn(
                            "OneSignal henüz hazır değil."
                        );
                    }
                } catch (error) {
                    console.warn(
                        "Bildirim işlemi başarısız:",
                        error
                    );
                }
            }
        );
    }

    /* =====================================================
       ÇEREZ
    ===================================================== */

    function cookieKontrol() {
        if (!cookieBox) {
            return;
        }

        const kabul =
            localStorage.getItem("haberista_cookie");

        if (kabul === "accepted") {
            cookieBox.style.display = "none";
        } else {
            cookieBox.style.display = "flex";
        }
    }

    if (cookieAccept) {
        cookieAccept.addEventListener(
            "click",
            function () {
                localStorage.setItem(
                    "haberista_cookie",
                    "accepted"
                );

                if (cookieBox) {
                    cookieBox.style.display = "none";
                }
            }
        );
    }

    /* =====================================================
       PİYASA
       Mevcut HTML alanını bozmaz.
    ===================================================== */

    function piyasaBaslat() {
        const marketItems =
            document.getElementById("marketItems");

        const marketUpdated =
            document.getElementById("marketUpdated");

        if (!marketItems) {
            return;
        }

        /*
         * Burada sahte piyasa verisi göstermiyoruz.
         * Gerçek API bağlandığında bu alan kullanılabilir.
         */
        marketItems.innerHTML = `
            <div class="market-loading">
                Piyasa verileri için bağlantı bekleniyor...
            </div>
        `;

        if (marketUpdated) {
            marketUpdated.textContent = "--";
        }
    }

    /* =====================================================
       KLAVYE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {
            /*
             * Input alanında değilken ok tuşlarıyla
             * manşet değiştirme.
             */

            const aktifElement =
                document.activeElement;

            const inputtaMi =
                aktifElement &&
                (
                    aktifElement.tagName === "INPUT" ||
                    aktifElement.tagName === "TEXTAREA"
                );

            if (inputtaMi) {
                return;
            }

            if (event.key === "ArrowLeft") {
                oncekiManşet();
            }

            if (event.key === "ArrowRight") {
                sonrakiManşet();
            }
        }
    );

    /* =====================================================
       TOUCH / SWIPE
    ===================================================== */

    let touchStartX = 0;
    let touchEndX = 0;

    if (heroMain) {
        heroMain.addEventListener(
            "touchstart",
            function (event) {
                if (!event.touches.length) {
                    return;
                }

                touchStartX =
                    event.touches[0].clientX;
            },
            { passive: true }
        );

        heroMain.addEventListener(
            "touchend",
            function (event) {
                if (!event.changedTouches.length) {
                    return;
                }

                touchEndX =
                    event.changedTouches[0].clientX;

                const fark =
                    touchStartX - touchEndX;

                /*
                 * Minimum 50px kaydırma.
                 */

                if (Math.abs(fark) < 50) {
                    return;
                }

                if (fark > 0) {
                    sonrakiManşet();
                } else {
                    oncekiManşet();
                }
            },
            { passive: true }
        );
    }

    /* =====================================================
       BAŞLANGIÇ
    ===================================================== */

    function uygulamayiBaslat() {
        if (!haberListesi.length) {
            console.warn(
                "Haberİsta: haberler.js içerisinde haber bulunamadı."
            );
        }

        /*
         * 1. Son Dakika
         */
        sonDakikaOlustur();

        /*
         * 2. Manşet numaraları
         */
        manşetNumaralariniOlustur();

        /*
         * 3. İlk manşet
         */
        manşetOlustur(0);

        /*
         * 4. Son haberler
         */
        sonHaberleriOlustur(haberListesi);

        /*
         * 5. Çerez
         */
        cookieKontrol();

        /*
         * 6. Piyasa alanı
         */
        piyasaBaslat();

        /*
         * 7. Arama URL parametresi
         *
         * Örnek:
         * ?q=ekonomi
         */
        try {
            const params =
                new URLSearchParams(
                    window.location.search
                );

            const q =
                params.get("q");

            if (q && searchInput) {
                searchInput.value = q;
                aramaMetni = q;
                haberAra(q);
            }
        } catch (error) {
            console.warn(
                "URL arama parametresi okunamadı:",
                error
            );
        }

        console.log(
            `Haberİsta hazır: ${haberListesi.length} haber yüklendi.`
        );
    }

    /* =====================================================
       DOM READY
    ===================================================== */

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            uygulamayiBaslat
        );
    } else {
        uygulamayiBaslat();
    }

})();


Bu sürümde **`haberler.js` değiştirilmez**. `index.html` de gönderdiğin haliyle kalabilir.

Tek önemli nokta: HTML'nin en altında sıralama kesinlikle şu şekilde kalmalı:


<script src="js/haberler.js"></script>
<script src="js/app.js"></script>

Böylece `app.js`, `window.haberler` hazır olduktan sonra çalışır.
