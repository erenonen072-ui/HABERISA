/* =========================================================
   HABERİSTA
   ANA UYGULAMA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    let aktifKategori = "Tümü";
    let arama = "";

    const container =
        document.getElementById("haberler") ||
        document.getElementById("newsContainer") ||
        document.querySelector(".haberler") ||
        document.querySelector(".news-grid");

    const kategoriContainer =
        document.getElementById("kategoriler") ||
        document.querySelector(".kategoriler");

    const search =
        document.getElementById("arama") ||
        document.getElementById("searchInput");

    const clock =
        document.getElementById("saat") ||
        document.getElementById("clock");


    /* =====================================================
       HTML GÜVENLİĞİ
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
       KATEGORİLER
       ===================================================== */

    function kategorileriOlustur() {

        if (!kategoriContainer) return;

        kategoriContainer.innerHTML = "";

        HABER_KATEGORILERI.forEach(kategori => {

            const button =
                document.createElement("button");

            button.className =
                "kategori-btn" +
                (
                    aktifKategori === kategori
                        ? " active"
                        : ""
                );

            button.textContent = kategori;

            button.addEventListener(
                "click",
                () => {

                    aktifKategori = kategori;

                    kategorileriOlustur();

                    haberleriGoster();

                }
            );

            kategoriContainer.appendChild(button);

        });

    }


    /* =====================================================
       FİLTRE
       ===================================================== */

    function filtrele() {

        return HABERLER.filter(haber => {

            const kategoriOK =
                aktifKategori === "Tümü" ||
                haber.kategori === aktifKategori;

            const aranacak =
                (
                    haber.baslik +
                    " " +
                    haber.ozet +
                    " " +
                    haber.kategori
                )
                .toLocaleLowerCase("tr-TR");

            const aramaOK =
                !arama ||
                aranacak.includes(
                    arama.toLocaleLowerCase("tr-TR")
                );

            return kategoriOK && aramaOK;

        });

    }


    /* =====================================================
       HABER KARTI
       ===================================================== */

    function kartOlustur(haber) {

        const article =
            document.createElement("article");

        article.className = "haber-karti";

        article.innerHTML = `

            <div class="haber-karti-resim">

                <img
                    src="${escapeHTML(haber.resim)}"
                    alt="${escapeHTML(haber.baslik)}"
                    loading="lazy"
                >

                <span class="haber-kategori">
                    ${escapeHTML(haber.kategori)}
                </span>

            </div>


            <div class="haber-karti-icerik">

                <div class="haber-karti-meta">

                    <span>
                        ${escapeHTML(haber.kaynak)}
                    </span>

                    <span>
                        ${escapeHTML(haber.saat)}
                    </span>

                </div>


                <h2>
                    ${escapeHTML(haber.baslik)}
                </h2>


                <p>
                    ${escapeHTML(haber.ozet)}
                </p>


                <div class="haber-karti-alt">

                    <span>
                        ${escapeHTML(haber.tarih)}
                    </span>

                    <button
                        type="button"
                        class="oku-btn"
                    >
                        Haberi Oku
                        <span>→</span>
                    </button>

                </div>

            </div>

        `;


        article.addEventListener(
            "click",
            () => haberAc(haber.id)
        );


        return article;

    }


    /* =====================================================
       HABERLERİ GÖSTER
       ===================================================== */

    function haberleriGoster() {

        if (!container) {

            console.error(
                "HABERİSTA: #haberler alanı bulunamadı."
            );

            return;

        }


        const liste =
            filtrele();


        container.innerHTML = "";


        if (!liste.length) {

            container.innerHTML = `

                <div class="haber-yok">

                    <div>🔎</div>

                    <h3>
                        Haber bulunamadı
                    </h3>

                    <p>
                        Arama veya kategori seçimini değiştirin.
                    </p>

                </div>

            `;

            return;

        }


        liste.forEach(
            haber => {

                container.appendChild(
                    kartOlustur(haber)
                );

            }
        );

    }


    /* =====================================================
       HABER DETAYI
       ===================================================== */

    function haberAc(id) {

        const haber =
            haberBul(id);

        if (!haber) return;


        let modal =
            document.getElementById(
                "haberModal"
            );


        if (!modal) {

            modal =
                document.createElement("div");

            modal.id = "haberModal";

            modal.className =
                "haber-modal";

            document.body.appendChild(
                modal
            );

        }


        modal.innerHTML = `

            <div class="haber-modal-overlay"></div>


            <div class="haber-detay">

                <button
                    class="haber-kapat"
                    type="button"
                    aria-label="Kapat"
                >
                    ×
                </button>


                <div class="haber-detay-resim">

                    <img
                        src="${escapeHTML(haber.resim)}"
                        alt="${escapeHTML(haber.baslik)}"
                    >

                </div>


                <div class="haber-detay-icerik">


                    <div class="haber-detay-ust">

                        <span class="detay-kategori">
                            ${escapeHTML(haber.kategori)}
                        </span>

                        <span>
                            ${escapeHTML(haber.tarih)}
                            ·
                            ${escapeHTML(haber.saat)}
                        </span>

                    </div>


                    <h1>
                        ${escapeHTML(haber.baslik)}
                    </h1>


                    <p class="detay-ozet">
                        ${escapeHTML(haber.ozet)}
                    </p>


                    <div class="detay-cizgi"></div>


                    <div class="detay-metin">

                        ${haber.detay
                            .trim()
                            .split(/\n+/)
                            .filter(Boolean)
                            .map(
                                paragraf =>
                                    `<p>${escapeHTML(
                                        paragraf.trim()
                                    )}</p>`
                            )
                            .join("")
                        }

                    </div>


                    <div class="detay-kaynak">

                        <div>

                            <small>
                                HABER KAYNAĞI
                            </small>

                            <strong>
                                ${escapeHTML(
                                    haber.kaynak
                                )}
                            </strong>

                        </div>


                        <a
                            href="${escapeHTML(
                                haber.kaynakUrl
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kaynağa Git →
                        </a>

                    </div>


                    <div class="detay-imza">

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


        requestAnimationFrame(
            () => {
                modal.classList.add(
                    "active"
                );
            }
        );


        document.body.classList.add(
            "modal-acik"
        );


        modal
            .querySelector(".haber-kapat")
            .addEventListener(
                "click",
                haberKapat
            );


        modal
            .querySelector(
                ".haber-modal-overlay"
            )
            .addEventListener(
                "click",
                haberKapat
            );


        document.addEventListener(
            "keydown",
            escKapat
        );

    }


    /* =====================================================
       HABER KAPAT
       ===================================================== */

    function haberKapat() {

        const modal =
            document.getElementById(
                "haberModal"
            );

        if (!modal) return;

        modal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "modal-acik"
        );

        document.removeEventListener(
            "keydown",
            escKapat
        );

        setTimeout(
            () => modal.remove(),
            250
        );

    }


    function escKapat(event) {

        if (event.key === "Escape") {
            haberKapat();
        }

    }


    /* =====================================================
       ARAMA
       ===================================================== */

    if (search) {

        search.addEventListener(
            "input",
            event => {

                arama =
                    event.target.value.trim();

                haberleriGoster();

            }
        );

    }


    /* =====================================================
       SAAT
       ===================================================== */

    function saatiGuncelle() {

        if (!clock) return;

        const now =
            new Date();

        const saat =
            String(
                now.getHours()
            ).padStart(2, "0");

        const dakika =
            String(
                now.getMinutes()
            ).padStart(2, "0");

        const saniye =
            String(
                now.getSeconds()
            ).padStart(2, "0");


        clock.textContent =
            `${saat}:${dakika}:${saniye}`;

    }


    saatiGuncelle();

    setInterval(
        saatiGuncelle,
        1000
    );


    /* =====================================================
       DARK MODE
       ===================================================== */

    const tema =
        document.getElementById(
            "temaBtn"
        ) ||
        document.getElementById(
            "themeToggle"
        );


    function temaUygula() {

        const dark =
            localStorage.getItem(
                "haberista_dark"
            ) === "1";


        document.body.classList.toggle(
            "dark",
            dark
        );


        if (tema) {

            tema.textContent =
                dark
                    ? "☀️"
                    : "🌙";

        }

    }


    temaUygula();


    if (tema) {

        tema.addEventListener(
            "click",
            () => {

                const dark =
                    localStorage.getItem(
                        "haberista_dark"
                    ) === "1";


                localStorage.setItem(
                    "haberista_dark",
                    dark ? "0" : "1"
                );


                temaUygula();

            }
        );

    }


    /* =====================================================
       SON DAKİKA
       ===================================================== */

    const sonDakika =
        document.getElementById(
            "sonDakika"
        );


    if (sonDakika && HABERLER.length) {

        const haber =
            HABERLER[0];


        sonDakika.innerHTML = `

            <span class="son-label">
                SON DAKİKA
            </span>

            <span class="son-text">
                ${escapeHTML(
                    haber.baslik
                )}
            </span>

        `;


        sonDakika.addEventListener(
            "click",
            () => haberAc(haber.id)
        );

    }


    /* =====================================================
       BAŞLAT
       ===================================================== */

    kategorileriOlustur();

    haberleriGoster();


    /* =====================================================
       GLOBAL
       ===================================================== */

    window.HABERISTA = {

        haberAc,
        haberKapat,
        haberleriGoster

    };


    console.log(
        `HABERİSTA hazır: ${HABERLER.length} haber`
    );

});
