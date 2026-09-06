// ============================================================
// HABERİSTA - HABER DETAY JAVASCRIPT
// js/haber.js
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const articleTitle =
        document.getElementById("articleTitle");

    const articleCategory =
        document.getElementById("articleCategory");

    const articleSpot =
        document.getElementById("articleSpot");

    const articleDate =
        document.getElementById("articleDate");

    const articleViews =
        document.getElementById("articleViews");

    const articleSource =
        document.getElementById("articleSource");

    const articleImage =
        document.getElementById("articleImage");

    const articleBody =
        document.getElementById("articleBody");

    const relatedNews =
        document.getElementById("relatedNews");

    const notFound =
        document.getElementById("articleNotFound");


    // ========================================================
    // URL'DEN HABER SLUG'INI AL
    // ========================================================

    function getArticleSlug() {

        const path =
            window.location.pathname;


        // /haber/haber-basligi

        const match =
            path.match(/\/haber\/([^/]+)/i);


        if (match && match[1]) {

            return decodeURIComponent(
                match[1]
            );
        }


        // Eski sistem:
        // haber.html?id=1
        // haber.html?slug=...

        const params =
            new URLSearchParams(
                window.location.search
            );


        const slug =
            params.get("slug");

        if (slug) {
            return slug;
        }


        const haber =
            params.get("haber");

        if (haber) {
            return haber;
        }


        const id =
            params.get("id");

        if (id) {
            return id;
        }


        return null;
    }


    // ========================================================
    // HABERİ BUL
    // ========================================================

    function findArticle() {

        const slug =
            getArticleSlug();


        if (
            !slug ||
            !Array.isArray(window.haberler)
        ) {

            return null;
        }


        // Önce slug ile ara

        let haber =
            window.haberler.find(
                item =>
                    String(item.slug || "") ===
                    String(slug)
            );


        // Slug bulunamazsa ID ile ara

        if (
            !haber &&
            !isNaN(slug)
        ) {

            haber =
                window.haberler.find(
                    item =>
                        String(item.id) ===
                        String(slug)
                );
        }


        return haber || null;
    }


    // ========================================================
    // HTML GÜVENLİK
    // ========================================================

    function escapeHtml(text) {

        if (
            text === null ||
            text === undefined
        ) {

            return "";
        }


        return String(text)

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


    // ========================================================
    // HABER İÇERİĞİNİ OLUŞTUR
    // ========================================================

    function renderArticleContent(haber) {

        if (!articleBody) {
            return;
        }


        const content =
            haber.icerik ||
            haber.content ||
            haber.spot ||
            "";


        const lines =
            String(content)

                .split(/\n+/)

                .map(
                    line =>
                        line.trim()
                )

                .filter(Boolean);


        if (!lines.length) {

            articleBody.innerHTML = `

                <p>
                    ${escapeHtml(
                        haber.spot || ""
                    )}
                </p>

            `;

            return;
        }


        let html = "";


        lines.forEach(line => {

            const upper =
                line.toLocaleUpperCase(
                    "tr-TR"
                );


            /*
             * Tamamen büyük harfle yazılmış
             * ve noktalama ile bitmeyen
             * satırları bölüm başlığı yap.
             */

            const isHeading =
                line.length > 5 &&
                line === upper &&
                !/[.!?]$/.test(line);


            if (isHeading) {

                html += `

                    <h2>
                        ${escapeHtml(line)}
                    </h2>

                `;

            } else {

                html += `

                    <p>
                        ${escapeHtml(line)}
                    </p>

                `;
            }

        });


        articleBody.innerHTML =
            html;
    }


    // ========================================================
    // HABER BİLGİLERİ
    // ========================================================

    function renderArticle(haber) {

        // Sayfa başlığı

        document.title =
            `${haber.baslik} | Haberİsta`;


        // Meta description

        let metaDescription =
            document.querySelector(
                'meta[name="description"]'
            );


        if (!metaDescription) {

            metaDescription =
                document.createElement(
                    "meta"
                );

            metaDescription.name =
                "description";

            document.head.appendChild(
                metaDescription
            );
        }


        metaDescription.content =
            haber.spot ||
            haber.baslik ||
            "";


        // Başlık

        if (articleTitle) {

            articleTitle.textContent =
                haber.baslik || "";
        }


        // Kategori

        if (articleCategory) {

            articleCategory.textContent =
                haber.kategori ||
                "Haber";
        }


        // Spot

        if (articleSpot) {

            articleSpot.textContent =
                haber.spot || "";
        }


        // Tarih

        if (articleDate) {

            articleDate.textContent =

                `${haber.tarih || ""}` +

                (
                    haber.saat
                        ? ` • ${haber.saat}`
                        : ""
                );
        }


        // Okunma

        if (articleViews) {

            articleViews.textContent =

                `${Number(
                    haber.okunma || 0
                ).toLocaleString(
                    "tr-TR"
                )} okunma`;
        }


        // Kaynak

        if (articleSource) {

            articleSource.textContent =
                haber.kaynak ||
                "Haberİsta Haber Merkezi";
        }


        // Görsel

        if (articleImage) {

            articleImage.src =
                haber.resim ||
                haber.image ||
                "images/default-news.jpg";


            articleImage.alt =
                haber.baslik || "Haber";


            articleImage.onerror =
                function () {

                    this.onerror =
                        null;

                    this.src =
                        "images/default-news.jpg";
                };
        }


        // İçerik

        renderArticleContent(
            haber
        );


        // İlgili haberler

        renderRelatedNews(
            haber
        );
    }


    // ========================================================
    // İLGİLİ HABERLER
    // ========================================================

    function renderRelatedNews(
        currentArticle
    ) {

        if (
            !relatedNews ||
            !Array.isArray(
                window.haberler
            )
        ) {

            return;
        }


        let related =
            window.haberler.filter(
                haber =>

                    haber.id !==
                    currentArticle.id &&

                    haber.kategori ===
                    currentArticle.kategori
            );


        // Aynı kategoride yeterli
        // haber yoksa diğer haberlerden tamamla

        if (related.length < 3) {

            const others =
                window.haberler.filter(
                    haber =>

                        haber.id !==
                        currentArticle.id &&

                        !related.some(
                            r =>
                                r.id ===
                                haber.id
                        )
                );


            related = [
                ...related,
                ...others
            ];
        }


        related =
            related.slice(0, 3);


        relatedNews.innerHTML =
            related.map(
                haber => {

                    const url =
                        haber.url ||
                        `/haber/${
                            haber.slug
                            ||
                            createSlug(
                                haber.baslik
                            )
                        }`;


                    return `

                        <article
                            class="related-card"
                            onclick="
                                window.location.href='${url}'
                            "
                        >

                            <div
                                class="related-image"
                            >

                                <img
                                    src="${escapeHtml(
                                        haber.resim ||
                                        haber.image ||
                                        "images/default-news.jpg"
                                    )}"

                                    alt="${escapeHtml(
                                        haber.baslik
                                    )}"

                                    loading="lazy"

                                    onerror="
                                        this.onerror=null;
                                        this.src='images/default-news.jpg';
                                    "
                                >

                            </div>


                            <div
                                class="related-info"
                            >

                                <span
                                    class="related-category"
                                >
                                    ${escapeHtml(
                                        haber.kategori ||
                                        "Haber"
                                    )}
                                </span>


                                <h3>
                                    ${escapeHtml(
                                        haber.baslik
                                    )}
                                </h3>


                                <div
                                    class="related-meta"
                                >
                                    ${escapeHtml(
                                        haber.tarih ||
                                        ""
                                    )}
                                </div>

                            </div>

                        </article>

                    `;
                }
            )
            .join("");
    }


    // ========================================================
    // SLUG OLUŞTUR
    // ========================================================

    function createSlug(text) {

        return String(text || "")

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
                /[^a-z0-9]+/g,
                "-"
            )

            .replace(
                /^-+|-+$/g,
                "");
    }


    // ========================================================
    // HABER BULUNAMADI
    // ========================================================

    function showNotFound() {

        if (notFound) {

            notFound.style.display =
                "block";
        }


        const articleElements =
            document.querySelectorAll(
                ".article-shell, .article-page-content"
            );


        articleElements.forEach(
            element => {

                element.style.display =
                    "none";
            }
        );


        document.title =
            "Haber Bulunamadı | Haberİsta";
    }


    // ========================================================
    // PAYLAŞ
    // ========================================================

    function shareArticle() {

        const haber =
            findArticle();


        if (!haber) {
            return;
        }


        const shareData = {

            title:
                haber.baslik,

            text:
                haber.spot ||
                haber.baslik,

            url:
                window.location.href
        };


        // Telefon / destekleyen tarayıcılar

        if (
            navigator.share &&
            typeof navigator.share ===
                "function"
        ) {

            navigator
                .share(shareData)
                .catch(() => {});


            return;
        }


        // Desteklenmiyorsa URL kopyala

        copyArticleUrl();
    }


    // ========================================================
    // URL KOPYALA
    // ========================================================

    function copyArticleUrl() {

        const url =
            window.location.href;


        if (
            navigator.clipboard
        ) {

            navigator.clipboard

                .writeText(url)

                .then(() => {

                    showShareMessage(
                        "Haber bağlantısı kopyalandı."
                    );

                })

                .catch(() => {

                    fallbackCopy(url);
                });

        } else {

            fallbackCopy(url);
        }
    }


    // ========================================================
    // FALLBACK KOPYALAMA
    // ========================================================

    function fallbackCopy(text) {

        const textarea =
            document.createElement(
                "textarea"
            );


        textarea.value =
            text;


        textarea.style.position =
            "fixed";


        textarea.style.left =
            "-9999px";


        document.body.appendChild(
            textarea
        );


        textarea.select();


        try {

            document.execCommand(
                "copy"
            );


            showShareMessage(
                "Haber bağlantısı kopyalandı."
            );

        } catch (error) {

            alert(
                "Bağlantı: " +
                text
            );
        }


        document.body.removeChild(
            textarea
        );
    }


    // ========================================================
    // PAYLAŞIM MESAJI
    // ========================================================

    function showShareMessage(
        message
    ) {

        let box =
            document.getElementById(
                "shareMessage"
            );


        if (!box) {

            box =
                document.createElement(
                    "div"
                );


            box.id =
                "shareMessage";


            box.className =
                "share-message";


            document.body.appendChild(
                box
            );
        }


        box.textContent =
            message;


        box.classList.add(
            "show"
        );


        setTimeout(
            () => {

                box.classList.remove(
                    "show"
                );

            },
            2200
        );
    }


    // ========================================================
    // GERİ DÖN
    // ========================================================

    const backButton =
        document.getElementById(
            "articleBack"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                if (
                    document.referrer
                ) {

                    history.back();

                } else {

                    window.location.href =
                        "/";
                }
            }
        );
    }


    // ========================================================
    // PAYLAŞ BUTONU
    // ========================================================

    const shareButton =
        document.getElementById(
            "shareArticle"
        );


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            shareArticle
        );
    }


    // ========================================================
    // KOPYALA BUTONU
    // ========================================================

    const copyButton =
        document.getElementById(
            "copyArticleUrl"
        );


    if (copyButton) {

        copyButton.addEventListener(
            "click",
            copyArticleUrl
        );
    }


    // ========================================================
    // OKUMA İLERLEME ÇUBUĞU
    // ========================================================

    function updateReadingProgress() {

        const progress =
            document.getElementById(
                "readingProgress"
            );


        if (!progress) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        if (
            documentHeight <= 0
        ) {

            progress.style.width =
                "0%";

            return;
        }


        const percentage =
            (
                scrollTop /
                documentHeight
            ) * 100;


        progress.style.width =

            Math.min(
                100,
                Math.max(
                    0,
                    percentage
                )
            ) + "%";
    }


    window.addEventListener(
        "scroll",
        updateReadingProgress,
        {
            passive: true
        }
    );


    // ========================================================
    // 🔊 MİNİ SESLİ OKUMA SİSTEMİ
    // ========================================================

    let speechUtterance =
        null;


    let voiceSpeed =
        1;


    // --------------------------------------------------------
    // SESLENDİRİLECEK METNİ AL
    // --------------------------------------------------------

    function getArticleVoiceText() {

        const title =
            articleTitle?.innerText ||
            "";


        const spot =
            articleSpot?.innerText ||
            "";


        const body =
            articleBody?.innerText ||
            "";


        /*
         * Paylaş / kopyala gibi
         * buton yazılarını temizle.
         */

        const cleanBody =
            body

                .replace(
                    /📤\s*Paylaş/g,
                    ""
                )

                .replace(
                    /🔗\s*Linki Kopyala/g,
                    ""
                )

                .trim();


        return [

            title,

            spot,

            cleanBody

        ]

            .filter(
                text =>
                    text.trim()
            )

            .join(". ");
    }


    // --------------------------------------------------------
    // TÜRKÇE SES BUL
    // --------------------------------------------------------

    function getTurkishVoice() {

        if (
            !("speechSynthesis" in window)
        ) {

            return null;
        }


        const voices =
            speechSynthesis
                .getVoices();


        return (

            voices.find(
                voice =>
                    voice.lang
                        .toLowerCase()
                        .startsWith("tr")
            )

            ||

            null
        );
    }


    // --------------------------------------------------------
    // SESLİ OKUMAYI BAŞLAT
    // --------------------------------------------------------

    function startVoiceReader() {

        if (
            !(
                "speechSynthesis"
                in window
            )
        ) {

            alert(
                "Tarayıcınız sesli okumayı desteklemiyor."
            );

            return;
        }


        const text =
            getArticleVoiceText();


        if (
            !text ||
            !text.trim()
        ) {

            return;
        }


        // Önce mevcut konuşmayı kapat

        speechSynthesis.cancel();


        speechUtterance =
            new SpeechSynthesisUtterance(
                text
            );


        speechUtterance.lang =
            "tr-TR";


        speechUtterance.rate =
            voiceSpeed;


        speechUtterance.pitch =
            1;


        speechUtterance.volume =
            1;


        const turkishVoice =
            getTurkishVoice();


        if (turkishVoice) {

            speechUtterance.voice =
                turkishVoice;
        }


        // ----------------------------------------------------
        // BAŞLADI
        // ----------------------------------------------------

        speechUtterance.onstart =
            () => {

                const button =
                    document.getElementById(
                        "voiceStart"
                    );


                const status =
                    document.getElementById(
                        "voiceStatus"
                    );


                if (button) {

                    button.textContent =
                        "🔊 Okunuyor";
                }


                if (status) {

                    status.textContent =
                        "Dinleniyor";
                }
            };


        // ----------------------------------------------------
        // BİTTİ
        // ----------------------------------------------------

        speechUtterance.onend =
            () => {

                const button =
                    document.getElementById(
                        "voiceStart"
                    );


                const status =
                    document.getElementById(
                        "voiceStatus"
                    );


                if (button) {

                    button.textContent =
                        "🔊 Oku";
                }


                if (status) {

                    status.textContent =
                        "Tamamlandı";
                }


                speechUtterance =
                    null;
            };


        // ----------------------------------------------------
        // HATA
        // ----------------------------------------------------

        speechUtterance.onerror =
            () => {

                const button =
                    document.getElementById(
                        "voiceStart"
                    );


                const status =
                    document.getElementById(
                        "voiceStatus"
                    );


                if (button) {

                    button.textContent =
                        "🔊 Oku";
                }


                if (status) {

                    status.textContent =
                        "Kullanılamıyor";
                }


                speechUtterance =
                    null;
            };


        speechSynthesis.speak(
            speechUtterance
        );
    }


    // --------------------------------------------------------
    // DURAKLAT
    // --------------------------------------------------------

    function pauseVoiceReader() {

        if (
            !(
                "speechSynthesis"
                in window
            )
        ) {

            return;
        }


        if (
            speechSynthesis.speaking &&
            !speechSynthesis.paused
        ) {

            speechSynthesis.pause();


            const status =
                document.getElementById(
                    "voiceStatus"
                );


            if (status) {

                status.textContent =
                    "Duraklatıldı";
            }
        }
    }


    // --------------------------------------------------------
    // DEVAM ET
    // --------------------------------------------------------

    function resumeVoiceReader() {

        if (
            !(
                "speechSynthesis"
                in window
            )
        ) {

            return;
        }


        if (
            speechSynthesis.paused
        ) {

            speechSynthesis.resume();


            const status =
                document.getElementById(
                    "voiceStatus"
                );


            if (status) {

                status.textContent =
                    "Devam ediyor";
            }
        }
    }


    // --------------------------------------------------------
    // DURDUR
    // --------------------------------------------------------

    function stopVoiceReader() {

        if (
            !(
                "speechSynthesis"
                in window
            )
        ) {

            return;
        }


        speechSynthesis.cancel();


        speechUtterance =
            null;


        const button =
            document.getElementById(
                "voiceStart"
            );


        const status =
            document.getElementById(
                "voiceStatus"
            );


        if (button) {

            button.textContent =
                "🔊 Oku";
        }


        if (status) {

            status.textContent =
                "Haberi dinle";
        }
    }


    // --------------------------------------------------------
    // TARAYICI SESLERİ YÜKLENDİĞİNDE
    // --------------------------------------------------------

    if (
        "speechSynthesis" in window
    ) {

        speechSynthesis.addEventListener(
            "voiceschanged",
            () => {

                getTurkishVoice();
            }
        );
    }


    // ========================================================
    // SAYFADAN ÇIKARKEN SESİ DURDUR
    // ========================================================

    window.addEventListener(
        "beforeunload",
        () => {

            if (
                "speechSynthesis" in window
            ) {

                speechSynthesis.cancel();
            }
        }
    );


    // ========================================================
    // BAŞLAT
    // ========================================================

    const haber =
        findArticle();


    if (!haber) {

        showNotFound();

    } else {

        renderArticle(
            haber
        );

        updateReadingProgress();
    }


    // ========================================================
    // GLOBAL FONKSİYONLAR
    // ========================================================

    window.shareArticle =
        shareArticle;


    window.copyArticleUrl =
        copyArticleUrl;


    window.startVoiceReader =
        startVoiceReader;


    window.pauseVoiceReader =
        pauseVoiceReader;


    window.resumeVoiceReader =
        resumeVoiceReader;


    window.stopVoiceReader =
        stopVoiceReader;

});
