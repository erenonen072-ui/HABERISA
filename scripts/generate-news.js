"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const NEWS_FILE = path.join(PUBLIC, "js", "haberler.js");

/* =========================================================
   SLUG
========================================================= */

function slugOlustur(metin) {
    return String(metin || "")
        .toLocaleLowerCase("tr-TR")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   HABERLER.JS OKU
========================================================= */

const haberlerSource = fs.readFileSync(
    NEWS_FILE,
    "utf8"
);

const context = {
    console: {
        log() {},
        error() {}
    }
};

vm.createContext(context);

vm.runInContext(
    haberlerSource +
    "\nthis.__haberler = haberler;",
    context
);

const haberler = context.__haberler || [];

if (!Array.isArray(haberler)) {
    throw new Error(
        "haberler.js içinde haberler dizisi bulunamadı."
    );
}

console.log(
    `${haberler.length} haber bulundu.`
);

/* =========================================================
   İÇERİK
========================================================= */

function renderContent(content) {
    if (!content) {
        return `
            <p>
                Bu haberin detayları yakında
                güncellenecektir.
            </p>
        `;
    }

    const text = String(content);

    /*
     * HTML içerik zaten varsa koru.
     */
    if (/<[a-z][\s\S]*>/i.test(text)) {
        return text;
    }

    /*
     * Düz metni paragraflara ayır.
     */
    return text
        .split(/\n+/)
        .map(x => x.trim())
        .filter(Boolean)
        .map(
            x => `<p>${escapeHtml(x)}</p>`
        )
        .join("\n");
}

/* =========================================================
   GÖRSEL
========================================================= */

function getImagePath(haber) {
    const image =
        haber.resim ||
        haber.image ||
        haber.gorsel ||
        haber.foto ||
        haber.imageUrl ||
        "";

    if (!image) {
        return "";
    }

    if (
        image.startsWith("http://") ||
        image.startsWith("https://") ||
        image.startsWith("data:") ||
        image.startsWith("/")
    ) {
        return image;
    }

    return "/" + image;
}

/* =========================================================
   HABER HTML
========================================================= */

function createArticleHtml(haber) {
    const title =
        haber.baslik ||
        haber.title ||
        "Haber";

    const spot =
        haber.spot ||
        haber.ozet ||
        haber.description ||
        "";

    const content =
        haber.icerik ||
        haber.content ||
        haber.metin ||
        "";

    const category =
        haber.kategori ||
        haber.category ||
        "Haber";

    const date =
        haber.tarih ||
        haber.date ||
        haber.yayinTarihi ||
        "";

    const time =
        haber.saat ||
        haber.time ||
        "";

    const source =
        haber.kaynak ||
        haber.source ||
        "HABERİSTA";

    const views =
        haber.goruntulenme ||
        haber.views ||
        0;

    const image =
        getImagePath(haber);

    const slug =
        haber.slug ||
        slugOlustur(title);

    const url =
        `https://haberisa.vercel.app/haber/${slug}`;

    const description =
        String(spot || content || title)
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160);

    const imageHtml = image
        ? `
            <div class="article-image-wrap">
                <img
                    class="article-image"
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(title)}"
                    loading="eager"
                >
            </div>
        `
        : "";

    const timeHtml = time
        ? `
            <span>
                🕒 ${escapeHtml(time)}
            </span>
        `
        : "";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "description": description,
        "datePublished": date,
        "dateModified": date,
        "author": {
            "@type": "Organization",
            "name": "HABERİSTA"
        },
        "publisher": {
            "@type": "Organization",
            "name": "HABERİSTA"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    if (image) {
        jsonLd.image = [
            image.startsWith("http")
                ? image
                : `https://haberisa.vercel.app${image}`
        ];
    }

    return `<!DOCTYPE html>
<html lang="tr">
<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    ${escapeHtml(title)} | HABERİSTA
</title>

<meta
    name="description"
    content="${escapeHtml(description)}"
>

<meta
    name="robots"
    content="index, follow"
>

<link
    rel="canonical"
    href="${url}"
>

<link
    rel="stylesheet"
    href="/css/style.css"
>

<link
    rel="stylesheet"
    href="/css/haber.css"
>

<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>

<style>
${getArticleStyles()}
</style>

</head>

<body>

<header id="siteHeader"></header>

<main class="article-page">

    <button
        class="back-button"
        onclick="goBack()"
    >
        ← Geri Dön
    </button>

    <div id="articleContainer">

        <div class="article-layout">

            <article class="article-main">

                <header class="article-header">

                    <div class="article-category">
                        ${escapeHtml(category)}
                    </div>

                    <div class="article-title">
                        <h1>
                            ${escapeHtml(title)}
                        </h1>
                    </div>

                    ${
                        spot
                        ? `
                            <div class="article-spot">
                                <p>
                                    ${escapeHtml(spot)}
                                </p>
                            </div>
                        `
                        : ""
                    }

                    <div class="article-meta">

                        <span>
                            📅 ${escapeHtml(date)}
                        </span>

                        ${timeHtml}

                        <span>
                            👁️ ${escapeHtml(views)}
                        </span>

                        <span>
                            📰 ${escapeHtml(source)}
                        </span>

                    </div>

                </header>

                <div class="mini-voice-reader">

                    <button
                        id="voiceStart"
                        class="mini-voice-btn"
                        onclick="startVoiceReader()"
                    >
                        🔊 Oku
                    </button>

                    <button
                        id="voicePause"
                        class="mini-control"
                        onclick="pauseVoiceReader()"
                    >
                        ⏸
                    </button>

                    <button
                        id="voiceResume"
                        class="mini-control"
                        onclick="resumeVoiceReader()"
                    >
                        ▶
                    </button>

                    <button
                        id="voiceStop"
                        class="mini-control"
                        onclick="stopVoiceReader()"
                    >
                        ⏹
                    </button>

                    <span id="voiceStatus">
                        Haberi dinle
                    </span>

                </div>

                ${imageHtml}

                <div
                    id="articleContent"
                    class="article-content"
                >

                    ${renderContent(content)}

                    <div class="article-share">

                        <button
                            class="share-button"
                            onclick="shareArticle()"
                        >
                            📤 Paylaş
                        </button>

                        <button
                            class="share-button"
                            onclick="copyArticleLink()"
                        >
                            🔗 Linki Kopyala
                        </button>

                    </div>

                </div>

            </article>

            <aside class="article-sidebar">

                <div class="sidebar-box">

                    <h3>
                        Haber Bilgileri
                    </h3>

                    <div class="sidebar-info">
                        <strong>Kategori</strong>
                        <span>
                            ${escapeHtml(category)}
                        </span>
                    </div>

                    <div class="sidebar-info">
                        <strong>Tarih</strong>
                        <span>
                            ${escapeHtml(date)}
                        </span>
                    </div>

                    ${
                        time
                        ? `
                            <div class="sidebar-info">
                                <strong>Saat</strong>
                                <span>
                                    ${escapeHtml(time)}
                                </span>
                            </div>
                        `
                        : ""
                    }

                    <div class="sidebar-info">
                        <strong>Görüntülenme</strong>
                        <span>
                            ${escapeHtml(views)}
                        </span>
                    </div>

                    <div class="sidebar-info">
                        <strong>Kaynak</strong>
                        <span>
                            ${escapeHtml(source)}
                        </span>
                    </div>

                </div>

                <div class="sidebar-box">

                    <h3>
                        HABERİSTA
                    </h3>

                    <p
                        style="
                            margin:0;
                            color:#555;
                            font-size:14px;
                            line-height:1.7;
                        "
                    >
                        Türkiye ve dünyadan
                        güncel haberleri
                        hızlı, anlaşılır ve
                        güvenilir şekilde takip edin.
                    </p>

                </div>

            </aside>

        </div>

    </div>

</main>

<footer id="siteFooter"></footer>

<script src="/app.js"></script>

<script>

"use strict";

/* =====================================================
   GERİ
===================================================== */

function goBack() {

    if (
        document.referrer &&
        document.referrer.includes(
            window.location.host
        )
    ) {

        history.back();

    } else {

        window.location.href = "/";

    }

}

/* =====================================================
   PAYLAŞ
===================================================== */

async function shareArticle() {

    const url =
        window.location.href;

    const title =
        document.querySelector(
            ".article-title h1"
        )?.innerText ||
        "HABERİSTA";

    if (navigator.share) {

        try {

            await navigator.share({
                title: title,
                text: title,
                url: url
            });

        } catch (error) {}

        return;
    }

    await copyArticleLink();

    alert(
        "Haber bağlantısı kopyalandı."
    );
}

/* =====================================================
   KOPYALA
===================================================== */

async function copyArticleLink() {

    const url =
        window.location.href;

    try {

        await navigator.clipboard
            .writeText(url);

    } catch (error) {

        const textarea =
            document.createElement(
                "textarea"
            );

        textarea.value = url;

        document.body.appendChild(
            textarea
        );

        textarea.select();

        document.execCommand(
            "copy"
        );

        textarea.remove();

    }

}

/* =====================================================
   SESLİ OKUMA
===================================================== */

let speechUtterance = null;
let voiceSpeed = 1;

function getArticleVoiceText() {

    const title =
        document.querySelector(
            ".article-title h1"
        )?.innerText || "";

    const spot =
        document.querySelector(
            ".article-spot p"
        )?.innerText || "";

    const content =
        document.querySelector(
            "#articleContent"
        )?.innerText || "";

    const cleanContent =
        content
            .replace("📤 Paylaş", "")
            .replace("🔗 Linki Kopyala", "");

    return [
        title,
        spot,
        cleanContent
    ]
    .filter(Boolean)
    .join(". ");

}

function getTurkishVoice() {

    const voices =
        speechSynthesis.getVoices();

    return (
        voices.find(
            voice =>
                voice.lang
                    .toLowerCase()
                    .startsWith("tr")
        ) || null
    );

}

function startVoiceReader() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Tarayıcınız sesli okumayı desteklemiyor."
        );

        return;
    }

    const text =
        getArticleVoiceText();

    if (!text.trim()) {
        return;
    }

    speechSynthesis.cancel();

    speechUtterance =
        new SpeechSynthesisUtterance(
            text
        );

    speechUtterance.lang = "tr-TR";
    speechUtterance.rate = voiceSpeed;
    speechUtterance.pitch = 1;
    speechUtterance.volume = 1;

    const voice =
        getTurkishVoice();

    if (voice) {
        speechUtterance.voice = voice;
    }

    speechUtterance.onstart =
        function () {

            const button =
                document.getElementById(
                    "voiceStart"
                );

            const status =
                document.getElementById(
                    "voiceStatus"
                );

            if (button) {
                button.innerHTML =
                    "🔊 Okunuyor";
            }

            if (status) {
                status.textContent =
                    "Sesli okuma devam ediyor";
            }

        };

    speechUtterance.onend =
        function () {

            const button =
                document.getElementById(
                    "voiceStart"
                );

            const status =
                document.getElementById(
                    "voiceStatus"
                );

            if (button) {
                button.innerHTML =
                    "🔊 Oku";
            }

            if (status) {
                status.textContent =
                    "Okuma tamamlandı";
            }

        };

    speechUtterance.onerror =
        function () {

            const button =
                document.getElementById(
                    "voiceStart"
                );

            const status =
                document.getElementById(
                    "voiceStatus"
                );

            if (button) {
                button.innerHTML =
                    "🔊 Oku";
            }

            if (status) {
                status.textContent =
                    "Okuma kullanılamıyor";
            }

        };

    speechSynthesis.speak(
        speechUtterance
    );

}

function pauseVoiceReader() {

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

function resumeVoiceReader() {

    if (speechSynthesis.paused) {

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

function stopVoiceReader() {

    speechSynthesis.cancel();

    const button =
        document.getElementById(
            "voiceStart"
        );

    const status =
        document.getElementById(
            "voiceStatus"
        );

    if (button) {
        button.innerHTML =
            "🔊 Oku";
    }

    if (status) {
        status.textContent =
            "Haberi dinle";
    }

}

if (
    "speechSynthesis" in window
) {

    speechSynthesis.addEventListener(
        "voiceschanged",
        function () {
            getTurkishVoice();
        }
    );

    window.addEventListener(
        "beforeunload",
        function () {
            speechSynthesis.cancel();
        }
    );

}

</script>

</body>
</html>`;
}

/* =========================================================
   CSS
   MEVCUT HABER TASARIMIN
   ========================================================= */

function getArticleStyles() {

    return `
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #f5f5f5;
    color: #111;
    font-family: Arial, Helvetica, sans-serif;
}

.article-page {
    max-width: 1250px;
    margin: 35px auto 70px;
    padding: 0 20px;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 22px;
    padding: 9px 14px;
    background: #111;
    color: #fff;
    border: 0;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
}

.back-button:hover {
    background: #e11d48;
}

.article-layout {
    display: grid;
    grid-template-columns:
        minmax(0, 1fr) 300px;
    gap: 30px;
}

.article-main {
    min-width: 0;
    background: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 12px;
    overflow: hidden;
    box-shadow:
        0 8px 30px rgba(0,0,0,.05);
}

.article-header {
    padding: 35px 50px 10px;
}

.article-category {
    display: inline-flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 7px 12px;
    background: #e11d48;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .5px;
}

.article-title h1 {
    margin: 0;
    color: #050505;
    font-size: clamp(34px,5vw,58px);
    line-height: 1.04;
    font-weight: 950;
    letter-spacing: -2.3px;
}

.article-spot {
    margin-top: 22px;
}

.article-spot p {
    margin: 0;
    color: #222;
    font-size: 20px;
    line-height: 1.55;
    font-weight: 650;
}

.article-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 22px;
    padding-top: 17px;
    border-top: 1px solid #e5e5e5;
    color: #666;
    font-size: 13px;
    font-weight: 600;
}

.article-meta span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.mini-voice-reader {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 50px 22px;
    padding: 7px 9px;
    width: fit-content;
    background: #f7f7f7;
    border: 1px solid #dedede;
    border-radius: 8px;
}

.mini-voice-btn,
.mini-control {
    height: 32px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
}

.mini-voice-btn {
    padding: 0 11px;
    background: #111;
    color: #fff;
}

.mini-voice-btn:hover {
    background: #e11d48;
}

.mini-control {
    width: 32px;
    background: #fff;
    color: #222;
    border: 1px solid #ddd;
}

.mini-control:hover {
    background: #111;
    color: #fff;
    border-color: #111;
}

#voiceStatus {
    margin-left: 3px;
    padding-right: 5px;
    color: #666;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
}

.article-image-wrap {
    width: 100%;
    padding: 0 50px;
}

.article-image {
    display: block;
    width: 100%;
    max-height: 620px;
    object-fit: cover;
    border-radius: 10px;
    background: #eee;
}

.article-content {
    padding: 35px 50px 50px;
    color: #111;
    font-size: 18px;
    line-height: 1.92;
    font-weight: 500;
}

.article-content p {
    margin: 0 0 24px;
}

.article-content p:first-child {
    color: #090909;
    font-size: 20px;
    line-height: 1.8;
    font-weight: 650;
}

.article-content h2 {
    margin: 38px 0 18px;
    padding-left: 13px;
    border-left: 5px solid #e11d48;
    color: #050505;
    font-size: 29px;
    line-height: 1.2;
    font-weight: 950;
}

.article-content h3 {
    margin: 30px 0 14px;
    color: #050505;
    font-size: 23px;
    font-weight: 900;
}

.article-content strong {
    color: #000;
    font-weight: 900;
}

.article-content a {
    color: #e11d48;
    font-weight: 800;
}

.article-content ul,
.article-content ol {
    margin: 20px 0 25px;
    padding-left: 28px;
}

.article-content li {
    margin-bottom: 10px;
}

.article-share {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 35px;
    padding-top: 25px;
    border-top: 1px solid #ddd;
}

.share-button {
    padding: 9px 13px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
    color: #111;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
}

.article-sidebar {
    align-self: start;
    position: sticky;
    top: 20px;
}

.sidebar-box {
    background: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 7px 25px rgba(0,0,0,.04);
}

.sidebar-box h3 {
    margin: 0 0 15px;
    padding-bottom: 12px;
    border-bottom: 2px solid #111;
    color: #050505;
    font-size: 18px;
    font-weight: 950;
}

.sidebar-info {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 9px 0;
    border-bottom: 1px solid #eee;
    font-size: 13px;
}

.sidebar-info:last-child {
    border-bottom: 0;
}

.sidebar-info strong {
    color: #111;
    font-weight: 900;
}

.sidebar-info span {
    color: #666;
    text-align: right;
}

@media (max-width: 900px) {

    .article-layout {
        grid-template-columns: 1fr;
    }

    .article-sidebar {
        position: static;
    }

}

@media (max-width: 700px) {

    .article-page {
        margin-top: 20px;
        padding: 0 10px;
    }

    .article-header {
        padding: 25px 18px 5px;
    }

    .article-title h1 {
        font-size: 32px;
        letter-spacing: -1.2px;
    }

    .article-spot p {
        font-size: 17px;
    }

    .article-meta {
        font-size: 11px;
        gap: 10px;
    }

    .mini-voice-reader {
        margin: 8px 18px 18px;
        padding: 6px 7px;
    }

    .article-image-wrap {
        padding: 0 18px;
    }

    .article-image {
        max-height: 400px;
        border-radius: 8px;
    }

    .article-content {
        padding: 28px 18px 35px;
        font-size: 17px;
        line-height: 1.82;
    }

    .article-content p:first-child {
        font-size: 18px;
    }

    .article-content h2 {
        font-size: 24px;
    }

    .article-content h3 {
        font-size: 20px;
    }

}
`;
}

/* =========================================================
   HER HABER İÇİN STATİK HTML ÜRET
========================================================= */

for (const haber of haberler) {

    const title =
        haber.baslik ||
        haber.title ||
        "Haber";

    const slug =
        haber.slug ||
        slugOlustur(title);

    const articleDir =
        path.join(
            PUBLIC,
            "haber",
            slug
        );

    fs.mkdirSync(
        articleDir,
        { recursive: true }
    );

    const html =
        createArticleHtml(haber);

    fs.writeFileSync(
        path.join(
            articleDir,
            "index.html"
        ),
        html,
        "utf8"
    );

    console.log(
        `✓ /haber/${slug}`
    );
}

console.log(
    `\n${haberler.length} haber için statik SEO sayfası oluşturuldu.`
);
