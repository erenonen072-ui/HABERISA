<!DOCTYPE html>
<html lang="tr">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Haber Detayı | Haberİsta</title>

    <meta
        name="description"
        content="Haberİsta haber detay sayfası. Türkiye ve dünyadan güncel gelişmeler."
    >

    <meta
        name="robots"
        content="index, follow"
    >

    <meta
        name="author"
        content="Haberİsta Haber Merkezi"
    >

    <!-- CANONICAL -->
    <link
        id="canonicalLink"
        rel="canonical"
        href="https://haberisa.vercel.app/"
    >

    <!-- OPEN GRAPH -->

    <meta
        property="og:type"
        content="article"
    >

    <meta
        id="ogTitle"
        property="og:title"
        content="Haber Detayı | Haberİsta"
    >

    <meta
        id="ogDescription"
        property="og:description"
        content="Türkiye ve dünyadan güncel haberler."
    >

    <meta
        id="ogUrl"
        property="og:url"
        content="https://haberisa.vercel.app/"
    >

    <meta
        id="ogImage"
        property="og:image"
        content=""
    >

    <meta
        property="og:site_name"
        content="HABERİSTA"
    >

    <!-- TWITTER -->

    <meta
        name="twitter:card"
        content="summary_large_image"
    >

    <meta
        id="twitterTitle"
        name="twitter:title"
        content="Haber Detayı | Haberİsta"
    >

    <meta
        id="twitterDescription"
        name="twitter:description"
        content="Türkiye ve dünyadan güncel haberler."
    >

    <meta
        id="twitterImage"
        name="twitter:image"
        content=""
    >

    <!-- ARTICLE META -->

    <meta
        id="articlePublishedTime"
        property="article:published_time"
        content=""
    >

    <meta
        id="articleModifiedTime"
        property="article:modified_time"
        content=""
    >

    <meta
        id="articleSection"
        property="article:section"
        content=""
    >

    <link
        rel="stylesheet"
        href="/css/style.css"
    >

    <style>

        /* =====================================================
           HABERİSTA
           HABER DETAY SAYFASI
        ===================================================== */

        .haber-detail-page {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            padding: 28px 20px 70px;
        }

        /* =====================================================
           BREADCRUMB
        ===================================================== */

        .haber-breadcrumb {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 22px;
            color: #7b8491;
            font-size: 14px;
        }

        .haber-breadcrumb a {
            color: inherit;
            text-decoration: none;
            transition: .2s ease;
        }

        .haber-breadcrumb a:hover {
            color: #111827;
        }

        .haber-breadcrumb span {
            opacity: .55;
        }

        /* =====================================================
           ANA HABER
        ===================================================== */

        .haber-article {
            width: 100%;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, .06);
            border-radius: 22px;
            overflow: hidden;
            box-shadow:
                0 10px 35px rgba(15, 23, 42, .08);
        }

        /* =====================================================
           HABER BAŞLIK
        ===================================================== */

        .haber-header {
            padding: 36px 42px 30px;
        }

        .haber-category {
            display: inline-flex;
            align-items: center;
            padding: 7px 13px;
            margin-bottom: 17px;
            border-radius: 999px;
            background: #f1f5f9;
            color: #2563eb;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: .2px;
        }

        .haber-title {
            margin: 0;
            max-width: 1000px;
            color: #111827;
            font-size: clamp(30px, 4vw, 50px);
            line-height: 1.1;
            letter-spacing: -.9px;
            font-weight: 900;
        }

        .haber-spot {
            max-width: 900px;
            margin: 19px 0 0;
            color: #5b6472;
            font-size: 18px;
            line-height: 1.65;
            font-weight: 500;
        }

        /* =====================================================
           META
        ===================================================== */

        .haber-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid #edf0f3;
            color: #697386;
            font-size: 13px;
        }

        .haber-meta-item {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .haber-meta-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #cbd5e1;
        }

        .haber-author {
            color: #374151;
            font-weight: 800;
        }

        /* =====================================================
           GÖRSEL
        ===================================================== */

        .haber-image-wrapper {
            width: 100%;
            background: #f1f5f9;
        }

        .haber-image {
            display: block;
            width: 100%;
            max-height: 620px;
            object-fit: cover;
        }

        /* =====================================================
           İÇERİK
        ===================================================== */

        .haber-content-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding: 42px 42px 50px;
        }

        .haber-content {
            color: #293241;
            font-size: 18px;
            line-height: 1.9;
        }

        .haber-content p {
            margin: 0 0 24px;
        }

        .haber-content p:first-child {
            color: #374151;
            font-size: 20px;
            line-height: 1.8;
            font-weight: 500;
        }

        .haber-content h2 {
            margin: 38px 0 15px;
            color: #111827;
            font-size: 27px;
            line-height: 1.3;
            letter-spacing: -.3px;
            font-weight: 850;
        }

        .haber-content h3 {
            margin: 30px 0 12px;
            color: #111827;
            font-size: 22px;
            line-height: 1.4;
            font-weight: 800;
        }

        .haber-content strong {
            color: #111827;
            font-weight: 800;
        }

        .haber-content ul,
        .haber-content ol {
            margin: 20px 0 28px;
            padding-left: 28px;
        }

        .haber-content li {
            margin-bottom: 10px;
            padding-left: 5px;
        }

        .haber-content blockquote {
            margin: 30px 0;
            padding: 22px 25px;
            border-left: 4px solid #2563eb;
            border-radius: 0 12px 12px 0;
            background: #f8fafc;
            color: #4b5563;
            font-size: 18px;
            font-style: italic;
        }

        .haber-content a {
            color: #2563eb;
            font-weight: 700;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 3px;
        }

        .haber-content img {
            display: block;
            width: 100%;
            height: auto;
            margin: 30px 0;
            border-radius: 16px;
        }

        /* =====================================================
           KAYNAK
        ===================================================== */

        .haber-source-box {
            margin-top: 38px;
            padding: 20px 22px;
            border: 1px solid #e7ebf0;
            border-radius: 14px;
            background: #f8fafc;
            color: #64748b;
            font-size: 14px;
            line-height: 1.7;
        }

        .haber-source-box strong {
            color: #374151;
        }

        /* =====================================================
           PAYLAŞ
        ===================================================== */

        .haber-share {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 42px 35px;
        }

        .haber-share-title {
            margin-bottom: 12px;
            color: #374151;
            font-size: 14px;
            font-weight: 800;
        }

        .haber-share-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;
        }

        .haber-share-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 38px;
            padding: 0 15px;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            background: #fff;
            color: #374151;
            text-decoration: none;
            font-size: 13px;
            font-weight: 750;
            cursor: pointer;
            transition:
                transform .2s ease,
                box-shadow .2s ease;
        }

        .haber-share-button:hover {
            transform: translateY(-2px);
            box-shadow:
                0 7px 18px rgba(15, 23, 42, .08);
        }

        /* =====================================================
           HATA
        ===================================================== */

        .haber-error {
            max-width: 700px;
            margin: 80px auto;
            padding: 45px 25px;
            text-align: center;
            background: #fff;
            border-radius: 20px;
            box-shadow:
                0 10px 35px rgba(15, 23, 42, .08);
        }

        .haber-error h1 {
            margin: 0 0 10px;
            color: #111827;
        }

        .haber-error p {
            color: #64748b;
            line-height: 1.6;
        }

        /* =====================================================
           GERİ
        ===================================================== */

        .haber-back {
            margin-top: 22px;
        }

        .haber-back a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 11px 16px;
            border-radius: 11px;
            background: #111827;
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            transition: .2s ease;
        }

        .haber-back a:hover {
            transform: translateY(-2px);
        }

        /* =====================================================
           MOBİL
        ===================================================== */

        @media (max-width: 768px) {

            .haber-detail-page {
                padding: 18px 12px 45px;
            }

            .haber-article {
                border-radius: 15px;
            }

            .haber-header {
                padding: 25px 20px 22px;
            }

            .haber-title {
                font-size: 31px;
                letter-spacing: -.5px;
            }

            .haber-spot {
                font-size: 16px;
                line-height: 1.6;
            }

            .haber-meta {
                gap: 9px;
            }

            .haber-meta-dot {
                display: none;
            }

            .haber-image {
                max-height: 400px;
            }

            .haber-content-wrapper {
                padding: 28px 20px 35px;
            }

            .haber-content {
                font-size: 17px;
                line-height: 1.8;
            }

            .haber-content p:first-child {
                font-size: 18px;
            }

            .haber-content h2 {
                margin-top: 31px;
                font-size: 23px;
            }

            .haber-content h3 {
                font-size: 20px;
            }

            .haber-content blockquote {
                padding: 17px 18px;
                font-size: 16px;
            }

            .haber-share {
                padding: 0 20px 28px;
            }

            .haber-share-button {
                flex: 1 1 auto;
            }
        }

        @media (max-width: 430px) {

            .haber-title {
                font-size: 27px;
            }

            .haber-category {
                font-size: 12px;
            }

            .haber-content {
                font-size: 16px;
            }

            .haber-image {
                max-height: 300px;
            }
        }

    </style>

</head>

<body>

    <!-- =====================================================
         HEADER
    ====================================================== -->

    <header id="site-header"></header>

    <main class="haber-detail-page">

        <!-- =================================================
             BREADCRUMB
        ================================================== -->

        <nav
            class="haber-breadcrumb"
            aria-label="Breadcrumb"
        >

            <a href="/">
                Ana Sayfa
            </a>

            <span>
                ›
            </span>

            <span id="breadcrumb-category">
                Haber
            </span>

            <span>
                ›
            </span>

            <span>
                Haber Detayı
            </span>

        </nav>

        <!-- =================================================
             ÖNEMLİ

             build.js BU ID'Yİ ARIYOR.
             DEĞİŞTİRME.
        ================================================== -->

        <article
            id="articleContainer"
            class="haber-article"
        >

            <div class="haber-error">

                <h1>
                    Haber yükleniyor...
                </h1>

                <p>
                    Haber içeriği hazırlanıyor,
                    lütfen bekleyin.
                </p>

            </div>

        </article>

    </main>

    <!-- =====================================================
         HABER VERİLERİ
    ====================================================== -->

    <script src="/js/haberler.js"></script>

    <script>

        "use strict";

        /* =================================================
           STATİK HABER SAYFASI KONTROLÜ

           build.js haberleri HTML içine zaten koyuyor.

           Eğer sayfa:
           data-static-article="true"

           ise aşağıdaki dinamik haber arama sistemi
           ÇALIŞMAYACAK.

           Böylece "Haber bulunamadı" hatası oluşmaz.
        ================================================== */

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                const body =
                    document.body;

                const isStaticArticle =
                    body &&
                    body.getAttribute(
                        "data-static-article"
                    ) === "true";

                if (isStaticArticle) {

                    /*
                     * Haber zaten build.js tarafından
                     * HTML içine yerleştirildi.
                     *
                     * Sadece paylaşım butonlarını
                     * hazırlıyoruz.
                     */

                    prepareStaticShare();

                    return;
                }

                /*
                 * Normal haber.html?id=33 gibi
                 * dinamik kullanım için devam et.
                 */

                loadDynamicArticle();

            }
        );

        /* =================================================
           DİNAMİK HABER
        ================================================== */

        function loadDynamicArticle() {

            const container =
                document.getElementById(
                    "articleContainer"
                );

            if (!container) {

                console.error(
                    "Haberİsta: articleContainer bulunamadı."
                );

                return;
            }

            const params =
                new URLSearchParams(
                    window.location.search
                );

            const id =
                params.get("id");

            /*
             * ID yoksa hata göstermeden
             * statik sayfa ihtimalini kontrol et.
             */

            if (!id) {

                return;
            }

            let haberListesi = [];

            if (
                typeof haberler !== "undefined" &&
                Array.isArray(haberler)
            ) {

                haberListesi =
                    haberler;

            } else if (
                typeof window.haberler !== "undefined" &&
                Array.isArray(window.haberler)
            ) {

                haberListesi =
                    window.haberler;
            }

            const haber =
                haberListesi.find(
                    function (item) {

                        return String(item.id) ===
                            String(id);

                    }
                );

            if (!haber) {

                container.innerHTML = `

                    <div class="haber-error">

                        <h1>
                            Haber bulunamadı
                        </h1>

                        <p>
                            Aradığınız haber mevcut değil
                            veya kaldırılmış olabilir.
                        </p>

                        <div class="haber-back">

                            <a href="/">
                                ← Ana Sayfaya Dön
                            </a>

                        </div>

                    </div>

                `;

                return;
            }

            renderDynamicArticle(
                container,
                haber
            );
        }

        /* =================================================
           DİNAMİK HABER RENDER
        ================================================== */

        function renderDynamicArticle(
            container,
            haber
        ) {

            document.title =
                (haber.baslik || "Haber") +
                " | Haberİsta";

            const breadcrumbCategory =
                document.getElementById(
                    "breadcrumb-category"
                );

            if (breadcrumbCategory) {

                breadcrumbCategory.textContent =
                    haber.kategori ||
                    "Haber";
            }

            const description =
                haber.spot ||
                haber.baslik ||
                "Haberİsta güncel haberler.";

            const metaDescription =
                document.querySelector(
                    'meta[name="description"]'
                );

            if (metaDescription) {

                metaDescription.setAttribute(
                    "content",
                    description
                );
            }

            const image =
                haber.gorsel ||
                haber.görsel ||
                haber.resim ||
                haber.image ||
                "";

            const tarih =
                haber.tarih ||
                "";

            const saat =
                haber.saat ||
                "";

            const yazar =
                haber.yazar ||
                "Haberİsta Haber Merkezi";

            const kaynak =
                haber.kaynak ||
                "HABERİSTA";

            const icerik =
                haber.icerik ||
                haber.metin ||
                haber.content ||
                "<p>Bu haber için içerik bulunamadı.</p>";

            const imageHTML =
                image
                    ? `
                        <div class="haber-image-wrapper">

                            <img
                                class="haber-image"
                                src="${escapeHTML(image)}"
                                alt="${escapeHTML(
                                    haber.baslik ||
                                    "Haber görseli"
                                )}"
                                loading="eager"
                            >

                        </div>
                    `
                    : "";

            const saatHTML =
                saat
                    ? `

                        <span class="haber-meta-dot">
                        </span>

                        <div class="haber-meta-item">

                            <span>
                                🕐
                            </span>

                            <span>
                                ${escapeHTML(saat)}
                            </span>

                        </div>

                    `
                    : "";

            container.innerHTML = `

                <header class="haber-header">

                    <div class="haber-category">

                        ${escapeHTML(
                            haber.kategori ||
                            "HABER"
                        )}

                    </div>

                    <h1 class="haber-title">

                        ${escapeHTML(
                            haber.baslik ||
                            "Haber"
                        )}

                    </h1>

                    <p class="haber-spot">

                        ${escapeHTML(
                            haber.spot ||
                            ""
                        )}

                    </p>

                    <div class="haber-meta">

                        <div class="haber-meta-item">

                            <span>
                                ✍️
                            </span>

                            <span class="haber-author">

                                ${escapeHTML(
                                    yazar
                                )}

                            </span>

                        </div>

                        <span class="haber-meta-dot">
                        </span>

                        <div class="haber-meta-item">

                            <span>
                                📅
                            </span>

                            <span>
                                ${escapeHTML(
                                    tarih
                                )}
                            </span>

                        </div>

                        ${saatHTML}

                    </div>

                </header>

                ${imageHTML}

                <div class="haber-content-wrapper">

                    <div class="haber-content">

                        ${icerik}

                    </div>

                    <div class="haber-source-box">

                        <strong>
                            Kaynak:
                        </strong>

                        ${escapeHTML(
                            kaynak
                        )}

                        <br>

                        <strong>
                            Yayın:
                        </strong>

                        Haberİsta

                    </div>

                </div>

                <div class="haber-share">

                    <div class="haber-share-title">
                        Bu haberi paylaş
                    </div>

                    <div class="haber-share-buttons">

                        <button
                            class="haber-share-button"
                            onclick="copyHaberLink()"
                            type="button"
                        >
                            🔗 Bağlantıyı Kopyala
                        </button>

                        <a
                            class="haber-share-button"
                            id="whatsapp-share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>

                    </div>

                </div>

            `;

            prepareStaticShare();
        }

        /* =================================================
           STATİK SAYFADA PAYLAŞIM
        ================================================== */

        function prepareStaticShare() {

            const whatsapp =
                document.getElementById(
                    "whatsapp-share"
                );

            if (!whatsapp) {
                return;
            }

            const currentURL =
                window.location.href;

            const pageTitle =
                document.title
                    .replace(
                        " | Haberİsta",
                        ""
                    )
                    .trim();

            whatsapp.href =
                "https://wa.me/?text=" +
                encodeURIComponent(
                    pageTitle +
                    " - " +
                    currentURL
                );
        }

        /* =================================================
           HTML ESCAPE
        ================================================== */

        function escapeHTML(value) {

            return String(value ?? "")
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

        /* =================================================
           LINK KOPYALA
        ================================================== */

        function copyHaberLink() {

            const url =
                window.location.href;

            if (
                navigator.clipboard &&
                navigator.clipboard.writeText
            ) {

                navigator.clipboard
                    .writeText(url)
                    .then(
                        function () {

                            alert(
                                "Haber bağlantısı kopyalandı."
                            );

                        }
                    )
                    .catch(
                        function () {

                            fallbackCopy(url);

                        }
                    );

            } else {

                fallbackCopy(url);

            }
        }

        /* =================================================
           ESKİ TARAYICI KOPYALAMA
        ================================================== */

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

            textarea.style.top =
                "0";

            document.body.appendChild(
                textarea
            );

            textarea.focus();
            textarea.select();

            try {

                document.execCommand(
                    "copy"
                );

                alert(
                    "Haber bağlantısı kopyalandı."
                );

            } catch (error) {

                console.error(
                    "Kopyalama hatası:",
                    error
                );

                alert(
                    "Bağlantı kopyalanamadı."
                );
            }

            document.body.removeChild(
                textarea
            );
        }

    </script>

</body>
</html>
