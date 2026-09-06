"use strict";

const shorts = [

    {
        id: 1,
        video: "videos/sel-uyarisi.mp4",
        kategori: "Gündem",
        baslik: "4 il için sel ve heyelan uyarısı",
        haberLink: "haber.html?id=11"
    },

    {
        id: 2,
        video: "videos/istanbul-yagmur.mp4",
        kategori: "Gündem",
        baslik: "İstanbul'da yağış etkili oluyor",
        haberLink: "haber.html?id=12"
    }

];


const container = document.getElementById("shortsContainer");


shorts.forEach(short => {

    const card = document.createElement("article");

    card.className = "short-card";

    card.innerHTML = `

        <video
            controls
            playsinline
            preload="metadata"
        >

            <source
                src="${short.video}"
                type="video/mp4"
            >

            Tarayıcınız videoyu desteklemiyor.

        </video>


        <div class="short-info">

            <span class="short-category">
                ${short.kategori}
            </span>

            <h2>
                ${short.baslik}
            </h2>

            <a
                href="${short.haberLink}"
                class="read-btn"
            >
                📰 Haberi Oku
            </a>

        </div>

    `;

    container.appendChild(card);

});
