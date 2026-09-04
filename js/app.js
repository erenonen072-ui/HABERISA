/* =========================================================
   HABERİSTA
   ANA UYGULAMA JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DEĞİŞKENLER
       ===================================================== */

    let aktifKategori = "Tümü";
    let aramaMetni = "";

    const haberlerContainer =
        document.getElementById("haberler") ||
        document.getElementById("newsContainer") ||
        document.querySelector(".haberler") ||
        document.querySelector(".news-grid");

    const kategoriContainer =
        document.getElementById("kategoriler") ||
        document.querySelector(".kategoriler") ||
        document.querySelector(".category-list");

    const aramaInput =
        document.getElementById("arama") ||
        document.getElementById("searchInput") ||
        document.querySelector('input[type="search"]');

    const saatElement =
        document.getElementById("saat") ||
        document.getElementById("clock");

    const temaButton =
        document.getElementById("temaBtn") ||
        document.getElementById("darkMode") ||
        document.getElementById("themeToggle");

    const mobilMenuButton =
        document.getElementById("menuBtn") ||
        document.getElementById("mobileMenuBtn") ||
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector("nav") ||
        document.querySelector(".nav-menu") ||
        document.querySelector(".mobile-menu");


    /* =====================================================
       GÜVENLİK
       ===================================================== */

    if (typeof HABERLER === "undefined") {
        console.error("HABERLER dizisi bulunamadı.");
        return;
    }


    /* =====================================================
       YARDIMCI FONKSİYON
       ===================================================== */

    function escapeHTML(text) {

        if (text === undefined || text === null) {
            return "";
        }

        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       KATEGORİLERİ OLUŞTUR
       ===================================================== */

    function kategorileriOlustur() {

        if (!kategoriContainer) {
            return;
        }

        const kategoriler = [
            "Tümü",
            ...new Set(
                HABERLER
                    .map(haber => haber.kategori)
                    .filter(Boolean)
            )
        ];

        kategoriContainer.innerHTML = "";

        kategoriler.forEach(kategori => {

            const button = document.createElement("button");

            button.type = "button";
            button.className =
                "kategori-btn" +
                (kategori === aktifKategori ? " active" : "");

            button.dataset.kategori = kategori;
            button.textContent = kategori;

            button.addEventListener("click", () => {

                aktifKategori = kategori;

                document
                    .querySelectorAll(".kategori-btn")
                    .forEach(btn => {
                        btn.classList.remove("active");
                    });

                button.classList.add("active");

                haberleriGoster();
            });

            kategoriContainer.appendChild(button);
        });
    }


    /* =====================================================
       HABERLERİ FİLTRELE
       ===================================================== */

    function filtrelenmisHaberler() {

        return HABERLER.filter(haber => {

            const kategoriUygun =
                aktifKategori === "Tümü" ||
                haber.kategori === aktifKategori;

            const aramaUygun =
                aramaMetni === "" ||
                haber.baslik
                    .toLocaleLowerCase("tr-TR")
                    .includes(
                        aramaMetni.toLocaleLowerCase("tr-TR")
                    ) ||
                haber.ozet
                    .toLocaleLowerCase("tr-TR")
                    .includes(
                        aramaMetni.toLocaleLowerCase("tr-TR")
                    ) ||
                haber.kategori
                    .toLocaleLowerCase("tr-TR")
                    .includes(
                        aramaMetni.toLocaleLowerCase("tr-TR")
                    );

            return kategoriUygun && aramaUygun;
        });
    }


    /* =====================================================
       HABER KARTI
       ===================================================== */

    function haberKartiOlustur(haber) {

        const article = document.createElement("article");

        article.className = "haber-karti";

        article.dataset.id = haber.id;

        article.innerHTML = `

            <div class="haber-resim">

                <img
                    src="${escapeHTML(haber.resim)}"
                    alt="${escapeHTML(haber.baslik)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <span class="haber-kategori">
                    ${escapeHTML(haber.kategori)}
                </span>

            </div>

            <div class="haber-icerik">

                <div class="haber-meta">
                    <span>${escapeHTML(haber.kategori)}</span>
                    <span>${escapeHTML(haber.saat)}</span>
                </div>

                <h2>
                    ${escapeHTML(haber.baslik)}
                </h2>

                <p>
                    ${escapeHTML(haber.ozet)}
                </p>

                <button
                    class="haberi-oku"
                    type="button"
                    data-id="${haber.id}"
                >
                    Haberi Oku →
                </button>

            </div>
        `;

        article.addEventListener("click", event => {

            if (
                event.target.closest(".haberi-oku") ||
                !event.target.closest("button")
            ) {
                haberDetayAc(haber.id);
            }
        });

        return article;
    }


    /* =====================================================
       HABERLERİ ANA SAYFAYA BAS
       ===================================================== */

    function haberleriGoster() {

        if (!haberlerContainer) {
            console.warn(
                "Haberler container bulunamadı."
            );
            return;
        }

        const haberler =
            filtrelenmisHaberler();

        haberlerContainer.innerHTML = "";

        if (haberler.length === 0) {

            haberlerContainer.innerHTML = `

                <div class="haber-yok">

                    <div class="haber-yok-icon">
                        🔎
                    </div>

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Aramanı veya kategori seçimini değiştirmeyi deneyin.
                    </p>

                    <button
                        type="button"
                        id="filtreSifirla"
                    >
                        Filtreleri Temizle
                    </button>

                </div>

            `;

            const reset =
                document.getElementById("filtreSifirla");

            if (reset) {

                reset.addEventListener("click", () => {

                    aktifKategori = "Tümü";
                    aramaMetni = "";

                    if (aramaInput) {
                        aramaInput.value = "";
                    }

                    kategorileriOlustur();
                    haberleriGoster();
                });
            }

            return;
        }

        haberler.forEach(haber => {

            haberlerContainer.appendChild(
                haberKartiOlustur(haber)
            );

        });
    }


    /* =====================================================
       HABER DETAYI
       ===================================================== */

    function haberDetayAc(id) {

        const haber =
            HABERLER.find(
                item => Number(item.id) === Number(id)
            );

        if (!haber) {
            console.error(
                "Haber bulunamadı:",
                id
            );
            return;
        }

        let modal =
            document.getElementById("haberModal");

        if (!modal) {

            modal =
                document.createElement("div");

            modal.id = "haberModal";
            modal.className = "haber-modal";

            document.body.appendChild(modal);
        }

        modal.innerHTML = `

            <div class="haber-modal-overlay"></div>

            <div class="haber-modal-content">

                <button
                    class="haber-modal-kapat"
                    type="button"
                    aria-label="Kapat"
                >
                    ×
                </button>

                <img
                    class="haber-modal-resim"
                    src="${escapeHTML(haber.resim)}"
                    alt="${escapeHTML(haber.baslik)}"
                >

                <div class="haber-modal-body">

                    <div class="haber-modal-meta">

                        <span>
                            ${escapeHTML(haber.kategori)}
                        </span>

                        <span>
                            ${escapeHTML(haber.saat)}
                        </span>

                    </div>

                    <h1>
                        ${escapeHTML(haber.baslik)}
                    </h1>

                    <p class="haber-modal-ozet">
                        ${escapeHTML(haber.ozet)}
                    </p>

                    <div class="haber-modal-line"></div>

                    <p class="haber-modal-metin">
                        HABERİSTA olarak Türkiye ve dünyadan
                        gelişmeleri takip ediyor, günün öne çıkan
                        başlıklarını sizlere aktarıyoruz.
                    </p>

                    <p class="haber-modal-metin">
                        Bu haber HABERİSTA haber akışı içerisinde
                        yer alan bilgilere göre hazırlanmıştır.
                        Yeni gelişmeler oldukça haber güncellenecektir.
                    </p>

                    <div class="haber-modal-footer">

                        <strong>
                            HABERİSTA
                        </strong>

                        <span>
                            Güncel haberin adresi
                        </span>

                    </div>

                </div>

            </div>
        `;

        modal.classList.add("active");

        document.body.classList.add("modal-acik");

        const kapatButton =
            modal.querySelector(
                ".haber-modal-kapat"
            );

        const overlay =
            modal.querySelector(
                ".haber-modal-overlay"
            );

        kapatButton.addEventListener(
            "click",
            haberDetayKapat
        );

        overlay.addEventListener(
            "click",
            haberDetayKapat
        );

        document.addEventListener(
            "keydown",
            modalEscapeHandler
        );
    }


    /* =====================================================
       HABER DETAY KAPAT
       ===================================================== */

    function haberDetayKapat() {

        const modal =
            document.getElementById("haberModal");

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        document.body.classList.remove(
            "modal-acik"
        );

        document.removeEventListener(
            "keydown",
            modalEscapeHandler
        );

        setTimeout(() => {

            if (!modal.classList.contains("active")) {
                modal.remove();
            }

        }, 250);
    }


    /* =====================================================
       ESC TUŞU
       ===================================================== */

    function modalEscapeHandler(event) {

        if (event.key === "Escape") {
            haberDetayKapat();
        }
    }


    /* =====================================================
       ARAMA
       ===================================================== */

    if (aramaInput) {

        aramaInput.addEventListener(
            "input",
            event => {

                aramaMetni =
                    event.target.value.trim();

                haberleriGoster();

            }
        );
    }


    /* =====================================================
       SAAT
       ===================================================== */

    function saatiGuncelle() {

        if (!saatElement) {
            return;
        }

        const simdi = new Date();

        const saat =
            String(simdi.getHours())
                .padStart(2, "0");

        const dakika =
            String(simdi.getMinutes())
                .padStart(2, "0");

        const saniye =
            String(simdi.getSeconds())
                .padStart(2, "0");

        saatElement.textContent =
            `${saat}:${dakika}:${saniye}`;
    }

    saatiGuncelle();

    setInterval(
        saatiGuncelle,
        1000
    );


    /* =====================================================
       KARANLIK MOD
       ===================================================== */

    function karanlikModuUygula() {

        const aktif =
            localStorage.getItem(
                "haberista_dark"
            ) === "1";

        document.body.classList.toggle(
            "dark",
            aktif
        );

        document.documentElement.classList.toggle(
            "dark",
            aktif
        );

        if (temaButton) {

            temaButton.setAttribute(
                "aria-label",
                aktif
                    ? "Aydınlık moda geç"
                    : "Karanlık moda geç"
            );

            temaButton.innerHTML =
                aktif ? "☀️" : "🌙";
        }
    }

    karanlikModuUygula();


    if (temaButton) {

        temaButton.addEventListener(
            "click",
            () => {

                const aktif =
                    localStorage.getItem(
                        "haberista_dark"
                    ) === "1";

                localStorage.setItem(
                    "haberista_dark",
                    aktif ? "0" : "1"
                );

                karanlikModuUygula();

            }
        );
    }


    /* =====================================================
       MOBİL MENÜ
       ===================================================== */

    if (mobilMenuButton && nav) {

        mobilMenuButton.addEventListener(
            "click",
            () => {

                mobilMenuButton.classList.toggle(
                    "active"
                );

                nav.classList.toggle(
                    "active"
                );

                document.body.classList.toggle(
                    "menu-acik"
                );
            }
        );

    }


    /* =====================================================
       NAV LİNKLERİ
       ===================================================== */

    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (nav) {
                        nav.classList.remove(
                            "active"
                        );
                    }

                    if (mobilMenuButton) {
                        mobilMenuButton.classList.remove(
                            "active"
                        );
                    }

                    document.body.classList.remove(
                        "menu-acik"
                    );
                }
            );

        });


    /* =====================================================
       SON DAKİKA HABERİ
       ===================================================== */

    function sonDakikaOlustur() {

        const sonDakika =
            document.getElementById(
                "sonDakika"
            ) ||
            document.querySelector(
                ".son-dakika"
            );

        if (!sonDakika) {
            return;
        }

        const enYeni =
            HABERLER[0];

        if (!enYeni) {
            return;
        }

        sonDakika.innerHTML = `

            <span class="son-dakika-label">
                SON DAKİKA
            </span>

            <span class="son-dakika-haber">
                ${escapeHTML(enYeni.baslik)}
            </span>

        `;

        sonDakika.addEventListener(
            "click",
            () => {
                haberDetayAc(enYeni.id);
            }
        );
    }


    /* =====================================================
       TARİH
       ===================================================== */

    function tarihiGuncelle() {

        const tarihElement =
            document.getElementById(
                "tarih"
            );

        if (!tarihElement) {
            return;
        }

        const simdi =
            new Date();

        const tarih =
            simdi.toLocaleDateString(
                "tr-TR",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

        tarihElement.textContent =
            tarih;
    }


    /* =====================================================
       YIL
       ===================================================== */

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });


    /* =====================================================
       BAŞLANGIÇ
       ===================================================== */

    kategorileriOlustur();

    haberleriGoster();

    sonDakikaOlustur();

    tarihiGuncelle();


    /* =====================================================
       GLOBAL FONKSİYONLAR
       ===================================================== */

    window.HABERISTA = {

        haberler: HABERLER,

        haberleriGoster,

        haberDetayAc,

        haberDetayKapat,

        kategorileriOlustur

    };


    console.log(
        "HABERİSTA uygulaması başlatıldı.",
        HABERLER.length,
        "haber yüklendi."
    );

});
