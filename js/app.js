document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const haberListesi = Array.isArray(window.haberler)
        ? window.haberler
        : [];

    /* =====================================================
       HABER YARDIMCILARI
       ===================================================== */

    function baslik(haber) {
        return haber.baslik || haber.title || "Haber";
    }

    function gorsel(haber) {
        return haber.gorsel || haber.image || "images/logo.jpeg";
    }

    function kategori(haber) {
        return haber.kategori || haber.category || "Gündem";
    }

    function temizSlug(metin) {

        return String(metin || "")
            .toLocaleLowerCase("tr-TR")
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

    function haberUrl(haber) {

        let slug = "";

        if (typeof window.slugOlustur === "function") {

            try {
                slug = window.slugOlustur(haber);
            } catch (error) {
                slug = "";
            }
        }

        /*
         * [object Object] ve object-object
         * kesinlikle URL'ye girmesin.
         */

        if (
            !slug ||
            slug === "[object Object]" ||
            slug === "object-object"
        ) {
            slug = temizSlug(
                haber.slug ||
                haber.baslik ||
                haber.id
            );
        }

        return "haber.html?slug=" +
            encodeURIComponent(slug);
    }


    /* =====================================================
       SON DAKİKA
       ===================================================== */

    const breakingNews =
        document.getElementById("breakingNews");

    if (breakingNews) {

        const sonBes =
            haberListesi.slice(0, 5);

        const html =
            sonBes.map(haber => `
                <a
                    href="${haberUrl(haber)}"
                    title="${baslik(haber)}"
                >
                    ${baslik(haber)}
                </a>
            `).join("");

        breakingNews.innerHTML = `
            <div class="breaking-news-track">
                ${html}
                ${html}
            </div>
        `;
    }


    /* =====================================================
       MANŞET 1-20
       ===================================================== */

    const heroMain =
        document.getElementById("heroMain");

    const heroPrev =
        document.getElementById("heroPrev");

    const heroNext =
        document.getElementById("heroNext");

    const heroNumbers =
        document.getElementById("heroNumbers");

    const mansetler =
        haberListesi.slice(0, 20);

    let aktifManset = 0;


    function mansetGoster(index) {

        if (!heroMain || !mansetler.length) {
            return;
        }

        if (index < 0) {
            index = mansetler.length - 1;
        }

        if (index >= mansetler.length) {
            index = 0;
        }

        aktifManset = index;

        const haber =
            mansetler[index];

        heroMain.innerHTML = `
            <a
                class="hero-main-link"
                href="${haberUrl(haber)}"
            >

                <img
                    src="${gorsel(haber)}"
                    alt="${baslik(haber)}"
                    loading="${index === 0 ? "eager" : "lazy"}"
                >

                <div class="hero-main-content">

                    <span class="hero-category">
                        ${kategori(haber)}
                    </span>

                    <h1 class="hero-title">
                        ${baslik(haber)}
                    </h1>

                    ${
                        haber.spot
                        ? `
                            <p class="hero-description">
                                ${haber.spot}
                            </p>
                        `
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
                        i === index
                    );

                });
        }
    }


    if (heroNumbers) {

        heroNumbers.innerHTML = "";

        mansetler.forEach((haber, index) => {

            const button =
                document.createElement("button");

            button.type = "button";
            button.textContent =
                String(index + 1);

            button.setAttribute(
                "aria-label",
                `${index + 1}. manşet`
            );

            button.addEventListener(
                "click",
                () => mansetGoster(index)
            );

            heroNumbers.appendChild(button);
        });
    }


    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            () => mansetGoster(
                aktifManset - 1
            )
        );
    }


    if (heroNext) {

        heroNext.addEventListener(
            "click",
            () => mansetGoster(
                aktifManset + 1
            )
        );
    }


    mansetGoster(0);


    /* =====================================================
       PİYASA BANDI
       ===================================================== */

    const marketItems =
        document.getElementById("marketItems");

    if (marketItems) {

        marketItems.innerHTML = `

            <div class="market-item">
                <span class="market-name">
                    BIST 100
                </span>
                <span class="market-value">
                    —
                </span>
                <span class="market-change">
                    Bekleniyor
                </span>
            </div>

            <div class="market-item">
                <span class="market-name">
                    DOLAR
                </span>
                <span class="market-value">
                    —
                </span>
                <span class="market-change">
                    Bekleniyor
                </span>
            </div>

            <div class="market-item">
                <span class="market-name">
                    EURO
                </span>
                <span class="market-value">
                    —
                </span>
                <span class="market-change">
                    Bekleniyor
                </span>
            </div>

            <div class="market-item">
                <span class="market-name">
                    ALTIN
                </span>
                <span class="market-value">
                    —
                </span>
                <span class="market-change">
                    Bekleniyor
                </span>
            </div>

            <div class="market-item">
                <span class="market-name">
                    BITCOIN
                </span>
                <span class="market-value">
                    —
                </span>
                <span class="market-change">
                    Bekleniyor
                </span>
            </div>

        `;
    }


    /* =====================================================
       ÇEREZ
       ===================================================== */

    const cookieBox =
        document.getElementById("cookieBox");

    const cookieAccept =
        document.getElementById("cookieAccept");

    let cookieAccepted = false;

    try {
        cookieAccepted =
            localStorage.getItem(
                "haberista_cookie"
            ) === "accepted";
    } catch (error) {
        cookieAccepted = false;
    }

    if (cookieBox) {

        cookieBox.style.display =
            cookieAccepted
                ? "none"
                : "block";
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

                } catch (error) {}

                cookieBox.style.display =
                    "none";
            }
        );
    }


    /* =====================================================
       BİLDİRİM İZNİ
       ===================================================== */

    function bildirimKutusu() {

        if (
            document.getElementById(
                "notificationPermission"
            )
        ) {
            return;
        }

        const box =
            document.createElement("div");

        box.id =
            "notificationPermission";

        box.className =
            "notification-permission";

        box.innerHTML = `

            <h3>
                🔔 Haber bildirimlerini aç
            </h3>

            <p>
                Önemli gelişmeler ve son dakika
                haberlerinden anında haberdar ol.
            </p>

            <button
                id="enableNotifications"
                type="button"
            >
                Bildirimleri Aç
            </button>

            <button
                id="closeNotifications"
                class="notification-close"
                type="button"
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
                () => {

                    if (
                        window.OneSignalDeferred
                    ) {

                        window.OneSignalDeferred.push(
                            async function (OneSignal) {

                                try {

                                    await OneSignal.Slidedown
                                        .promptPush();

                                } catch (error) {

                                    console.log(
                                        "Bildirim izni:",
                                        error
                                    );
                                }
                            }
                        );
                    }

                    box.remove();
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


    setTimeout(
        bildirimKutusu,
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
        document.getElementById(
            "searchResultInfo"
        );


    if (searchBtn && searchBox) {

        searchBtn.addEventListener(
            "click",
            () => {

                searchBox.classList.toggle(
                    "active"
                );

                if (
                    searchBox.classList.contains(
                        "active"
                    ) &&
                    searchInput
                ) {
                    searchInput.focus();
                }
            }
        );
    }


    function ara() {

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
                    src="${gorsel(haber)}"
                    alt="${baslik(haber)}"
                    loading="lazy"
                >

                <span class="news-card-category">
                    ${kategori(haber)}
                </span>

                <h3>
                    ${baslik(haber)}
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
                    ara();
                }
            }
        );
    }


    /* =====================================================
       MANŞET KLAVYE KONTROLÜ
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                document.activeElement &&
                document.activeElement.tagName === "INPUT"
            ) {
                return;
            }

            if (event.key === "ArrowLeft") {
                mansetGoster(
                    aktifManset - 1
                );
            }

            if (event.key === "ArrowRight") {
                mansetGoster(
                    aktifManset + 1
                );
            }
        }
    );

});
