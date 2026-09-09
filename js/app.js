/* =====================================================
   MANŞET — 20 HABER + NUMARA
   ===================================================== */

window.renderHero = function () {

    const heroMain =
        document.getElementById("heroMain");

    const heroNumbers =
        document.getElementById("heroNumbers");

    if (!heroMain) {
        console.warn(
            "Haberİsta: heroMain bulunamadı."
        );
        return;
    }

    const liste = haberler
        .slice()
        .sort(function (a, b) {
            return Number(b.id || 0) -
                   Number(a.id || 0);
        })
        .slice(0, 20);

    if (!liste.length) {
        heroMain.innerHTML = "";
        if (heroNumbers) {
            heroNumbers.innerHTML = "";
        }
        return;
    }

    let aktif = 0;

    function goster(index) {

        aktif = index;

        const haber = liste[index];

        if (!haber) {
            return;
        }

        const baslik =
            escapeHtml(
                haber.baslik || "Haberİsta"
            );

        const kategori =
            escapeHtml(
                haber.kategori || "Haber"
            );

        const image =
            gorselYolu(haber.gorsel);

        heroMain.innerHTML = `
            <article class="hero-slide">

                <a
                    class="hero-slide-link"
                    href="${haberUrl(haber)}"
                    aria-label="${baslik}"
                >

                    <img
                        class="hero-image"
                        src="${image}"
                        alt="${baslik}"
                        loading="${
                            index === 0
                                ? "eager"
                                : "lazy"
                        }"
                        decoding="async"
                        onerror="
                            this.onerror=null;
                            this.src='/images/logo.jpeg';
                        "
                    >

                    <!-- MANŞET NUMARASI -->
                    <div
                        class="hero-news-number"
                        aria-label="${
                            index + 1
                        }. manşet"
                    >
                        ${index + 1}
                    </div>

                    <div class="hero-overlay">

                        <div class="hero-category">
                            ${kategori}
                        </div>

                        <h2>
                            ${baslik}
                        </h2>

                    </div>

                </a>

                <button
                    class="hero-arrow hero-prev"
                    type="button"
                    aria-label="Önceki manşet"
                >
                    ‹
                </button>

                <button
                    class="hero-arrow hero-next"
                    type="button"
                    aria-label="Sonraki manşet"
                >
                    ›
                </button>

            </article>
        `;

        /* ÖNCEKİ */

        const prev =
            heroMain.querySelector(
                ".hero-prev"
            );

        if (prev) {
            prev.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(
                        (aktif - 1 + liste.length) %
                        liste.length
                    );
                }
            );
        }

        /* SONRAKİ */

        const next =
            heroMain.querySelector(
                ".hero-next"
            );

        if (next) {
            next.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goster(
                        (aktif + 1) %
                        liste.length
                    );
                }
            );
        }

        /* 1 - 20 NUMARALAR */

        if (heroNumbers) {

            heroNumbers.innerHTML =
                liste.map(
                    function (haber, i) {

                        return `
                            <button
                                type="button"
                                class="${
                                    i === aktif
                                        ? "active"
                                        : ""
                                }"
                                data-hero-index="${i}"
                                aria-label="${
                                    i + 1
                                }. manşet"
                            >
                                ${i + 1}
                            </button>
                        `;
                    }
                ).join("");

            heroNumbers
                .querySelectorAll(
                    "[data-hero-index]"
                )
                .forEach(
                    function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                const index =
                                    Number(
                                        button.dataset
                                            .heroIndex
                                    );

                                goster(index);
                            }
                        );
                    }
                );
        }
    }

    goster(aktif);

    console.log(
        "Haberİsta: 20 manşet hazır."
    );
};
