"use strict";

/*
========================================================
 HABERİSTA - APP.JS
 Profesyonel kullanıcı deneyimi ve site etkileşimleri
========================================================
*/

(() => {

    /* ==================================================
       AYARLAR
    ================================================== */

    const CONFIG = {
        animationDuration: 450,
        searchDelay: 250,
        scrollOffset: 85,
        storageTheme: "haberista-theme",
        storageMenu: "haberista-menu"
    };


    /* ==================================================
       DOM
    ================================================== */

    const $ = selector => document.querySelector(selector);

    const $$ = selector =>
        [...document.querySelectorAll(selector)];

    const body = document.body;

    const elements = {
        header: $(".header"),
        menuBtn: $("#menuBtn"),
        mobileMenu: $("#mobileMenu"),

        searchBtn: $("#searchBtn"),
        searchPanel: $("#searchPanel"),
        searchInput: $("#searchInput"),
        closeSearch: $("#closeSearch"),

        themeBtn: $("#themeBtn"),

        heroMain: $("#heroMain"),
        heroSide: $("#heroSide"),
        newsGrid: $("#newsGrid"),
        popularNews: $("#popularNews"),
        breakingContent: $("#breakingContent"),
        categoryButtons: $("#categoryButtons"),
        resultCount: $("#resultCount"),

        detailOverlay: $("#detailOverlay"),
        detailContent: $("#detailContent"),
        detailClose: $("#detailClose")
    };


    /* ==================================================
       GÜVENLİ HTML
    ================================================== */

    function escapeHTML(value) {

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


    /* ==================================================
       TARİH / SAAT
    ================================================== */

    function getCurrentDate() {

        return new Intl.DateTimeFormat(
            "tr-TR",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(new Date());

    }


    function addLiveClock() {

        const clock =
            document.querySelector(".site-clock");

        if (!clock) {
            return;
        }

        const update = () => {

            clock.textContent =
                new Intl.DateTimeFormat(
                    "tr-TR",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                    }
                ).format(new Date());

        };

        update();

        setInterval(
            update,
            1000
        );

    }


    /* ==================================================
       HEADER SCROLL
    ================================================== */

    function initHeaderScroll() {

        if (!elements.header) {
            return;
        }

        let lastScroll = 0;

        window.addEventListener(
            "scroll",
            () => {

                const current =
                    window.scrollY;

                if (current > 20) {

                    elements.header.classList.add(
                        "scrolled"
                    );

                } else {

                    elements.header.classList.remove(
                        "scrolled"
                    );

                }


                if (
                    current > lastScroll &&
                    current > 180
                ) {

                    elements.header.classList.add(
                        "header-hidden"
                    );

                } else {

                    elements.header.classList.remove(
                        "header-hidden"
                    );

                }


                lastScroll = current;

            },
            {
                passive: true
            }
        );

    }


    /* ==================================================
       MOBİL MENÜ
    ================================================== */

    function initMobileMenu() {

        if (
            !elements.menuBtn ||
            !elements.mobileMenu
        ) {
            return;
        }


        elements.menuBtn.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const opened =
                    elements.mobileMenu.classList.toggle(
                        "open"
                    );

                elements.menuBtn.classList.toggle(
                    "active",
                    opened
                );

                elements.menuBtn.setAttribute(
                    "aria-expanded",
                    String(opened)
                );

                body.classList.toggle(
                    "menu-open",
                    opened
                );

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    !elements.mobileMenu.contains(
                        event.target
                    ) &&
                    !elements.menuBtn.contains(
                        event.target
                    )
                ) {

                    elements.mobileMenu.classList.remove(
                        "open"
                    );

                    elements.menuBtn.classList.remove(
                        "active"
                    );

                    body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 900
                ) {

                    elements.mobileMenu.classList.remove(
                        "open"
                    );

                    elements.menuBtn.classList.remove(
                        "active"
                    );

                    body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    }


    /* ==================================================
       ARAMA
    ================================================== */

    function initSearch() {

        if (
            !elements.searchBtn ||
            !elements.searchPanel
        ) {
            return;
        }


        elements.searchBtn.addEventListener(
            "click",
            () => {

                const opened =
                    elements.searchPanel.classList.toggle(
                        "open"
                    );

                if (opened) {

                    setTimeout(
                        () => {

                            elements.searchInput?.focus();

                        },
                        100
                    );

                }

            }
        );


        elements.closeSearch?.addEventListener(
            "click",
            () => {

                closeSearch();

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    (event.ctrlKey ||
                        event.metaKey) &&
                    event.key.toLowerCase() === "k"
                ) {

                    event.preventDefault();

                    elements.searchPanel.classList.add(
                        "open"
                    );

                    setTimeout(
                        () => {

                            elements.searchInput?.focus();

                        },
                        100
                    );

                }


                if (
                    event.key === "Escape"
                ) {

                    closeSearch();

                }

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    elements.searchPanel.classList.contains(
                        "open"
                    ) &&
                    !elements.searchPanel.contains(
                        event.target
                    ) &&
                    !elements.searchBtn.contains(
                        event.target
                    )
                ) {

                    closeSearch();

                }

            }
        );

    }


    function closeSearch() {

        if (!elements.searchPanel) {
            return;
        }

        elements.searchPanel.classList.remove(
            "open"
        );

    }


    /* ==================================================
       GELİŞMİŞ ARAMA
    ================================================== */

    function initAdvancedSearch() {

        if (
            !elements.searchInput ||
            typeof haberler === "undefined"
        ) {
            return;
        }

        let timer = null;


        elements.searchInput.addEventListener(
            "input",
            () => {

                clearTimeout(timer);

                timer = setTimeout(
                    () => {

                        const query =
                            elements.searchInput.value
                                .trim()
                                .toLocaleLowerCase(
                                    "tr-TR"
                                );


                        if (!query) {

                            if (
                                typeof renderNews ===
                                "function"
                            ) {

                                renderNews(
                                    haberler
                                );

                            }

                            return;

                        }


                        const results =
                            haberler.filter(
                                haber => {

                                    const content =
                                        `${haber.baslik || ""} ${haber.spot || ""} ${haber.kategori || ""} ${haber.icerik || ""}`
                                            .toLocaleLowerCase(
                                                "tr-TR"
                                            );

                                    return content.includes(
                                        query
                                    );

                                }
                            );


                        if (
                            typeof renderNews ===
                            "function"
                        ) {

                            renderNews(
                                results
                            );

                        }

                    },
                    CONFIG.searchDelay
                );

            }
        );

    }


    /* ==================================================
       TEMA
    ================================================== */

    function initTheme() {

        try {

            const saved =
                localStorage.getItem(
                    CONFIG.storageTheme
                );

            if (
                saved === "dark"
            ) {

                body.classList.add(
                    "dark"
                );

            }

        } catch (error) {

            console.warn(
                "Tema ayarı okunamadı:",
                error
            );

        }


        elements.themeBtn?.addEventListener(
            "click",
            () => {

                const dark =
                    body.classList.toggle(
                        "dark"
                    );


                try {

                    localStorage.setItem(
                        CONFIG.storageTheme,
                        dark
                            ? "dark"
                            : "light"
                    );

                } catch (error) {

                    console.warn(
                        "Tema kaydedilemedi:",
                        error
                    );

                }


                animateThemeButton();

            }
        );

    }


    function animateThemeButton() {

        if (
            !elements.themeBtn
        ) {
            return;
        }


        elements.themeBtn.animate(
            [
                {
                    transform:
                        "rotate(0deg) scale(1)"
                },
                {
                    transform:
                        "rotate(180deg) scale(.8)"
                },
                {
                    transform:
                        "rotate(360deg) scale(1)"
                }
            ],
            {
                duration: 450,
                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

    }


    /* ==================================================
       KATEGORİ
    ================================================== */

    function initCategories() {

        $$(
            "[data-category]"
        ).forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        const category =
                            button.dataset.category;

                        if (!category) {
                            return;
                        }

                        event.preventDefault();


                        if (
                            typeof filterCategory ===
                            "function"
                        ) {

                            filterCategory(
                                category
                            );

                        }


                        updateActiveCategory(
                            category
                        );

                    }
                );

            }
        );

    }


    function updateActiveCategory(
        category
    ) {

        $$(
            "[data-category]"
        ).forEach(
            item => {

                item.classList.toggle(
                    "active",
                    item.dataset.category ===
                        category
                );

            }
        );

    }


    /* ==================================================
       HABER KARTLARI
    ================================================== */

    function initNewsCards() {

        document.addEventListener(
            "click",
            event => {

                const card =
                    event.target.closest(
                        "[data-id]"
                    );

                if (!card) {
                    return;
                }


                const id =
                    Number(
                        card.dataset.id
                    );

                if (!id) {
                    return;
                }


                if (
                    card.classList.contains(
                        "news-card"
                    ) ||
                    card.classList.contains(
                        "side-story"
                    ) ||
                    card.classList.contains(
                        "popular-item"
                    )
                ) {

                    if (
                        typeof openDetail ===
                        "function"
                    ) {

                        openDetail(id);

                    }

                }

            }
        );

    }


    /* ==================================================
       HABER DETAY
    ================================================== */

    function initDetail() {

        if (
            !elements.detailOverlay
        ) {
            return;
        }


        elements.detailClose?.addEventListener(
            "click",
            closeDetail
        );


        elements.detailOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    elements.detailOverlay
                ) {

                    closeDetail();

                }

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    elements.detailOverlay.classList.contains(
                        "open"
                    )
                ) {

                    closeDetail();

                }

            }
        );

    }


    function closeDetail() {

        if (
            !elements.detailOverlay
        ) {
            return;
        }


        elements.detailOverlay.classList.remove(
            "open"
        );

        body.classList.remove(
            "detail-open"
        );

        body.style.overflow = "";

    }


    /* ==================================================
       DETAYDA OKUMA İLERLEMESİ
    ================================================== */

    function initReadingProgress() {

        /*
           Aynı element ikinci kez eklenmesin.
        */

        let progress =
            document.querySelector(
                ".reading-progress"
            );


        if (!progress) {

            progress =
                document.createElement(
                    "div"
                );

            progress.className =
                "reading-progress";

            document.body.appendChild(
                progress
            );

        }


        const updateProgress = () => {

            const scrollTop =
                window.scrollY;

            const height =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            const percentage =
                height > 0
                    ? (
                        scrollTop /
                        height
                    ) * 100
                    : 0;

            progress.style.width =
                `${Math.min(
                    100,
                    Math.max(
                        0,
                        percentage
                    )
                )}%`;

        };


        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive: true
            }
        );


        updateProgress();

    }


    /* ==================================================
       SCROLL REVEAL
       HATA DÜZELTİLDİ
    ================================================== */

    function initScrollReveal() {

        if (
            !(
                "IntersectionObserver" in
                window
            )
        ) {
            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -40px"
                }
            );


        /*
           ÖNEMLİ:
           Burada $() DEĞİL $$() kullanıyoruz.
           Çünkü birden fazla element olabilir.
        */

        const observe = () => {

            const elementsToObserve =
                $$(
                    ".news-card, .sidebar-card, .section-heading"
                );


            /*
               Sayfada bu elementlerden hiçbiri
               yoksa hata verme.
            */

            if (
                !elementsToObserve.length
            ) {
                return;
            }


            elementsToObserve.forEach(
                element => {

                    if (
                        !element.classList.contains(
                            "reveal-ready"
                        )
                    ) {

                        element.classList.add(
                            "reveal-ready"
                        );

                        observer.observe(
                            element
                        );

                    }

                }
            );

        };


        /*
           İlk tarama
        */

        observe();


        /*
           Haberler sonradan oluşturulursa
           yeni kartları da yakala.
        */

        if (
            "MutationObserver" in
            window
        ) {

            const mutation =
                new MutationObserver(
                    () => {

                        observe();

                    }
                );


            if (document.body) {

                mutation.observe(
                    document.body,
                    {
                        childList: true,
                        subtree: true
                    }
                );

            }

        }

    }


    /* ==================================================
       IMAGE LAZY LOAD
    ================================================== */

    function initImageOptimization() {

        const images =
            $$("img");


        if (!images.length) {
            return;
        }


        images.forEach(
            img => {

                if (
                    !img.hasAttribute(
                        "loading"
                    )
                ) {

                    img.setAttribute(
                        "loading",
                        "lazy"
                    );

                }


                img.setAttribute(
                    "decoding",
                    "async"
                );


                if (
                    !img.dataset.errorHandler
                ) {

                    img.dataset.errorHandler =
                        "true";


                    img.addEventListener(
                        "error",
                        () => {

                            img.classList.add(
                                "image-error"
                            );

                        },
                        {
                            once: true
                        }
                    );

                }

            }
        );

    }


    /* ==================================================
       RESİM PLACEHOLDER
    ================================================== */

    function initImagePlaceholders() {

        document.addEventListener(
            "load",
            event => {

                if (
                    !event.target ||
                    event.target.tagName !==
                        "IMG"
                ) {
                    return;
                }


                event.target.classList.add(
                    "loaded"
                );

            },
            true
        );

    }


    /* ==================================================
       PAYLAŞIM
    ================================================== */

    function initShareSupport() {

        document.addEventListener(
            "click",
            async event => {

                const button =
                    event.target.closest(
                        "[data-share]"
                    );

                if (!button) {
                    return;
                }


                const title =
                    button.dataset.shareTitle ||
                    document.title;


                const url =
                    button.dataset.shareUrl ||
                    window.location.href;


                if (
                    navigator.share &&
                    window.isSecureContext
                ) {

                    try {

                        await navigator.share({
                            title,
                            url
                        });

                    } catch (error) {

                        if (
                            error.name !==
                            "AbortError"
                        ) {

                            console.warn(
                                "Paylaşım başarısız:",
                                error
                            );

                        }

                    }

                    return;

                }


                try {

                    await navigator.clipboard.writeText(
                        url
                    );

                    showToast(
                        "Haber bağlantısı kopyalandı."
                    );

                } catch {

                    showToast(
                        "Bağlantı kopyalanamadı."
                    );

                }

            }
        );

    }


    /* ==================================================
       TOAST
    ================================================== */

    function showToast(
        message
    ) {

        let toast =
            document.querySelector(
                ".toast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );

            toast.className =
                "toast";

            document.body.appendChild(
                toast
            );

        }


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toast._timer
        );


        toast._timer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }


    /* ==================================================
       SAYFA BAŞINA DÖN
    ================================================== */

    function initBackToTop() {

        let button =
            document.querySelector(
                ".back-to-top"
            );


        /*
           Aynı buton tekrar oluşturulmasın.
        */

        if (!button) {

            button =
                document.createElement(
                    "button"
                );

            button.className =
                "back-to-top";

            button.setAttribute(
                "aria-label",
                "Yukarı çık"
            );

            button.type =
                "button";

            button.innerHTML =
                "↑";

            document.body.appendChild(
                button
            );

        }


        const update =
            () => {

                button.classList.toggle(
                    "show",
                    window.scrollY > 600
                );

            };


        window.addEventListener(
            "scroll",
            update,
            {
                passive: true
            }
        );


        update();


        button.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* ==================================================
       KLAVYE KISAYOLLARI
    ================================================== */

    function initKeyboardShortcuts() {

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.target &&
                    typeof event.target.matches ===
                        "function" &&
                    event.target.matches(
                        "input, textarea, select"
                    )
                ) {
                    return;
                }


                switch (
                    event.key.toLowerCase()
                ) {

                    case "/":

                        event.preventDefault();

                        elements.searchPanel?.classList.add(
                            "open"
                        );


                        setTimeout(
                            () => {

                                elements.searchInput?.focus();

                            },
                            50
                        );

                        break;


                    case "home":

                        if (
                            event.ctrlKey
                        ) {

                            event.preventDefault();

                            window.scrollTo({
                                top: 0,
                                behavior:
                                    "smooth"
                            });

                        }

                        break;

                }

            }
        );

    }


    /* ==================================================
       DIŞARIDAN GELEN HABERLER
    ================================================== */

    function refreshUI() {

        if (
            typeof haberler ===
            "undefined"
        ) {
            return;
        }


        if (
            typeof renderHero ===
            "function"
        ) {

            renderHero();

        }


        if (
            typeof renderNews ===
            "function"
        ) {

            renderNews(
                haberler
            );

        }


        if (
            typeof renderPopular ===
            "function"
        ) {

            renderPopular();

        }


        if (
            typeof renderBreaking ===
            "function"
        ) {

            renderBreaking();

        }


        initImageOptimization();

    }


    /* ==================================================
       PERFORMANS
    ================================================== */

    function initPerformance() {

        if (
            "connection" in navigator &&
            navigator.connection &&
            navigator.connection.saveData
        ) {

            document.documentElement.classList.add(
                "save-data"
            );

        }


        window.addEventListener(
            "pageshow",
            () => {

                document.documentElement.classList.add(
                    "page-ready"
                );

            },
            {
                once: true
            }
        );

    }


    /* ==================================================
       HATA YÖNETİMİ
    ================================================== */

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "Haberİsta:",
                event.message
            );

        }
    );


    /* ==================================================
       PROMISE HATA YÖNETİMİ
    ================================================== */

    window.addEventListener(
        "unhandledrejection",
        event => {

            console.warn(
                "Haberİsta:",
                "Beklenmeyen Promise hatası",
                event.reason
            );

        }
    );


    /* ==================================================
       BAŞLAT
    ================================================== */

    function init() {

        try {
            initHeaderScroll();
        } catch (error) {
            console.warn(
                "Header başlatılamadı:",
                error
            );
        }


        try {
            initMobileMenu();
        } catch (error) {
            console.warn(
                "Mobil menü başlatılamadı:",
                error
            );
        }


        try {
            initSearch();
        } catch (error) {
            console.warn(
                "Arama başlatılamadı:",
                error
            );
        }


        try {
            initAdvancedSearch();
        } catch (error) {
            console.warn(
                "Gelişmiş arama başlatılamadı:",
                error
            );
        }


        try {
            initTheme();
        } catch (error) {
            console.warn(
                "Tema başlatılamadı:",
                error
            );
        }


        try {
            initCategories();
        } catch (error) {
            console.warn(
                "Kategoriler başlatılamadı:",
                error
            );
        }


        try {
            initNewsCards();
        } catch (error) {
            console.warn(
                "Haber kartları başlatılamadı:",
                error
            );
        }


        try {
            initDetail();
        } catch (error) {
            console.warn(
                "Haber detay sistemi başlatılamadı:",
                error
            );
        }


        try {
            initReadingProgress();
        } catch (error) {
            console.warn(
                "Okuma ilerlemesi başlatılamadı:",
                error
            );
        }


        try {
            initScrollReveal();
        } catch (error) {
            console.warn(
                "Scroll reveal başlatılamadı:",
                error
            );
        }


        try {
            initImageOptimization();
        } catch (error) {
            console.warn(
                "Resim optimizasyonu başlatılamadı:",
                error
            );
        }


        try {
            initImagePlaceholders();
        } catch (error) {
            console.warn(
                "Resim placeholder sistemi başlatılamadı:",
                error
            );
        }


        try {
            initShareSupport();
        } catch (error) {
            console.warn(
                "Paylaşım sistemi başlatılamadı:",
                error
            );
        }


        try {
            initBackToTop();
        } catch (error) {
            console.warn(
                "Yukarı çık sistemi başlatılamadı:",
                error
            );
        }


        try {
            initKeyboardShortcuts();
        } catch (error) {
            console.warn(
                "Klavye kısayolları başlatılamadı:",
                error
            );
        }


        try {
            initPerformance();
        } catch (error) {
            console.warn(
                "Performans sistemi başlatılamadı:",
                error
            );
        }


        try {
            addLiveClock();
        } catch (error) {
            console.warn(
                "Saat sistemi başlatılamadı:",
                error
            );
        }


        document.documentElement.classList.add(
            "app-loaded"
        );

    }


    /* ==================================================
       GLOBAL API
    ================================================== */

    window.HaberIsta = {

        refresh: refreshUI,

        closeSearch,

        closeDetail,

        showToast,

        getDate: getCurrentDate

    };


    /* ==================================================
       DOM READY
    ================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init,
            {
                once: true
            }
        );

    } else {

        init();

    }

})();
