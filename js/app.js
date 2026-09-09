document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================================
       HABER VERİSİ
       ===================================================== */

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    const slugOlustur = window.slugOlustur;

    function haberUrl(haber) {
        let slug = "";

        if (typeof slugOlustur === "function") {
            try {
                slug = slugOlustur(haber);
            } catch (e) {
                slug = "";
            }
        }

        /*
         * object-object hatasını engelle
         */
        if (!slug || slug === "[object Object]" || slug === "object-object") {
            slug = String(haber.baslik || haber.title || haber.id || "")
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/ı/g, "i")
                .replace(/ğ/g, "g")
                .replace(/ü/g, "u")
                .replace(/ş/g, "s")
                .replace(/ö/g, "o")
                .replace(/ç/g, "c")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");
        }

        return `haber.html?slug=${encodeURIComponent(slug)}`;
    }

    function haberBaslik(haber) {
        return haber.baslik || haber.title || "Haber";
    }

    function haberGorsel(haber) {
        return haber.gorsel || haber.image || "images/logo.jpeg";
    }

    function haberKategori(haber) {
        return haber.kategori || haber.category || "Gündem";
    }


    /* =====================================================
       SON DAKİKA
       ===================================================== */

    const breakingContainer =
        document.getElementById("breakingNews");

    if (breakingContainer) {

        breakingContainer.innerHTML = "";

        haberListesi
            .slice(0, 5)
            .forEach(haber => {

                const link = document.createElement("a");

                link.href = haberUrl(haber);
                link.textContent = haberBaslik(haber);
                link.title = haberBaslik(haber);

                breakingContainer.appendChild(link);
            });
    }


    /* =====================================================
       MANŞET - İLK 20 HABER
       ===================================================== */

    const heroMain =
        document.getElementById("heroMain");

    const heroPrev =
        document.getElementById("heroPrev");

    const heroNext =
        document.getElementById("heroNext");

    const heroNumbers =
        document.getElementById("heroNumbers");

    const manşetler =
        haberListesi.slice(0, 20);

    let aktifManşet = 0;


    function manşetGöster(index) {

        if (!heroMain || !manşetler.length) {
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

        heroMain.innerHTML = `
            <a
                href="${haberUrl(haber)}"
                class="hero-main-link"
                aria-label="${haberBaslik(haber)}"
            >
                <img
                    src="${haberGorsel(haber)}"
                    alt="${haberBaslik(haber)}"
                    loading="${aktifManşet === 0 ? "eager" : "lazy"}"
                >

                <div class="hero-main-content">

                    <span class="hero-category">
                        ${haberKategori(haber)}
                    </span>

                    <h1 class="hero-title">
                        ${haberBaslik(haber)}
                    </h1>

                    ${
                        haber.spot
                            ? `<p class="hero-description">${haber.spot}</p>`
                            : ""
                    }

                </div>
            </a>
        `;

        if (heroNumbers) {

            heroNumbers
                .querySelectorAll("button")
                .forEach((button, i) => {

                    button.classList.toggle(
                        "active",
                        i === aktifManşet
                    );
                });
        }
    }


    /* 1-20 numaraları */

    if (heroNumbers) {

        heroNumbers.innerHTML = "";

        manşetler.forEach((haber, index) => {

            const button =
                document.createElement("button");

            button.type = "button";
            button.textContent = index + 1;
            button.setAttribute(
                "aria-label",
                `${index + 1}. manşet`
            );

            button.addEventListener(
                "click",
                () => manşetGöster(index)
            );

            heroNumbers.appendChild(button);
        });
    }


    if (heroPrev) {
        heroPrev.addEventListener(
            "click",
            () => manşetGöster(aktifManşet - 1)
        );
    }

    if (heroNext) {
        heroNext.addEventListener(
            "click",
            () => manşetGöster(aktifManşet + 1)
        );
    }

    manşetGöster(0);


    /* =====================================================
       PİYASALAR
       ===================================================== */

    const marketItems =
        document.getElementById("marketItems");

    if (marketItems) {

        /*
         * Canlı veri kaynağın yoksa sahte fiyat göstermiyoruz.
         * Bunun yerine profesyonel ve temiz bir piyasa alanı
         * bırakıyoruz.
         *
         * Canlı API bağlandığında burası doldurulabilir.
         */

        marketItems.innerHTML = `
            <div class="market-item">
                <span class="market-name">BIST 100</span>
                <span class="market-value">—</span>
                <span class="market-change">Veri bekleniyor</span>
            </div>

            <div class="market-item">
                <span class="market-name">Dolar</span>
                <span class="market-value">—</span>
                <span class="market-change">Veri bekleniyor</span>
            </div>

            <div class="market-item">
                <span class="market-name">Euro</span>
                <span class="market-value">—</span>
                <span class="market-change">Veri bekleniyor</span>
            </div>

            <div class="market-item">
                <span class="market-name">Altın</span>
                <span class="market-value">—</span>
                <span class="market-change">Veri bekleniyor</span>
            </div>

            <div class="market-item">
                <span class="market-name">Bitcoin</span>
                <span class="market-value">—</span>
                <span class="market-change">Veri bekleniyor</span>
            </div>
        `;
    }

    const marketUpdated =
        document.getElementById("marketUpdated");

    if (marketUpdated) {
        marketUpdated.textContent =
            "Piyasa verileri";
    }


    /* =====================================================
       ÇEREZ İZNİ
       ===================================================== */

    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");

    let cookieAccepted = false;

    try {
        cookieAccepted =
            localStorage.getItem("haberista_cookie") === "accepted";
    } catch (e) {
        cookieAccepted = false;
    }

    if (cookieBox) {

        cookieBox.style.display =
            cookieAccepted ? "none" : "block";
    }

    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            () => {

                try {
                    localStorage.setItem(
                        "haberista_cookie",
                        "accepted"
                    );
                } catch (e) {}

                if (cookieBox) {
                    cookieBox.style.display = "none";
                }
            }
        );
    }


    /* =====================================================
       BİLDİRİM İZNİ
       ===================================================== */

    function bildirimKutusuOlustur() {

        if (
            document.getElementById(
                "notificationPermission"
            )
        ) {
            return;
        }

        const box =
            document.createElement("div");

        box.id = "notificationPermission";
        box.className =
            "notification-permission";

        box.innerHTML = `
            <h3>🔔 Son dakika haberlerini kaçırma</h3>

            <p>
                Haberİsta'dan önemli gelişmeler ve son dakika
                haberleri için bildirimleri açabilirsiniz.
            </p>

            <button
                type="button"
                id="enableNotifications"
            >
                Bildirimleri Aç
            </button>

            <button
                type="button"
                class="notification-close"
                id="closeNotifications"
            >
                Şimdi Değil
            </button>
        `;

        document.body.appendChild(box);

        const enable =
            document.getElementById(
                "enableNotifications"
            );

        const close =
            document.getElementById(
                "closeNotifications"
            );

        if (enable) {

            enable.addEventListener(
                "click",
                async () => {

                    try {

                        if (
                            window.OneSignalDeferred
                        ) {

                            window.OneSignalDeferred.push(
                                async function (OneSignal) {

                                    try {
                                        await OneSignal.Slidedown
                                            .promptPush();
                                    } catch (e) {
                                        console.log(
                                            "Bildirim izni açılamadı:",
                                            e
                                        );
                                    }

                                }
                            );
                        }

                    } finally {

                        box.remove();

                    }
                }
            );
        }

        if (close) {

            close.addEventListener(
                "click",
                () => box.remove()
            );
        }
    }


    /*
     * OneSignal hazır olduğunda bildirim kutusunu göster.
     */
    setTimeout(
        bildirimKutusuOlustur,
        700
    );


    /* =====================================================
       MOBİL MENÜ
       ===================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "active"
                );

            }
        );
    }


    /* =====================================================
       ARAMA
       ===================================================== */

    const searchBtn =
        document.getElementById("searchBtn");

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    const newsGrid =
        document.getElementById("newsGrid");

    const searchResultInfo =
        document.getElementById("searchResultInfo");


    if (searchBtn && searchBox) {

        searchBtn.addEventListener(
            "click",
            () => {

                searchBox.classList.toggle(
                    "active"
                );

                if (
                    searchBox.classList.contains("active") &&
                    searchInput
                ) {
                    searchInput.focus();
                }
            }
        );
    }


    function aramaYap() {

        if (!searchInput || !newsGrid) {
            return;
        }

        const kelime =
            searchInput.value
                .trim()
                .toLocaleLowerCase("tr-TR");

        if (!kelime) {
            return;
        }

        const sonuçlar =
            haberListesi.filter(haber => {

                const metin = [

                    haber.baslik,
                    haber.spot,
                    haber.kategori,
                    haber.yazar,
                    haber.kaynak,
                    haber.seo

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLocaleLowerCase("tr-TR");

                return metin.includes(kelime);
            });


        newsGrid.innerHTML = "";

        sonuçlar.forEach(haber => {

            const card =
                document.createElement("a");

            card.className =
                "news-card";

            card.href =
                haberUrl(haber);

            card.innerHTML = `
                <img
                    src="${haberGorsel(haber)}"
                    alt="${haberBaslik(haber)}"
                    loading="lazy"
                >

                <span class="news-card-category">
                    ${haberKategori(haber)}
                </span>

                <h3>
                    ${haberBaslik(haber)}
                </h3>
            `;

            newsGrid.appendChild(card);
        });


        if (searchResultInfo) {

            searchResultInfo.textContent =
                `${sonuçlar.length} haber bulundu.`;
        }
    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    aramaYap();
                }
            }
        );

        searchInput.addEventListener(
            "input",
            () => {

                if (
                    searchInput.value.trim() === ""
                ) {

                    if (searchResultInfo) {
                        searchResultInfo.textContent = "";
                    }
                }

            }
        );
    }


    /* =====================================================
       KLAVYEYLE MANŞET GEÇİŞİ
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowLeft" &&
                document.activeElement.tagName !== "INPUT"
            ) {
                manşetGöster(aktifManşet - 1);
            }

            if (
                event.key === "ArrowRight" &&
                document.activeElement.tagName !== "INPUT"
            ) {
                manşetGöster(aktifManşet + 1);
            }
        }
    );

});
