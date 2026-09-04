document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(window.location.search);

    const id =
        Number(params.get("id"));

    const haber =
        haberler.find(h => h.id === id);


    const article =
        document.getElementById("article");


    if (!haber) {

        article.innerHTML = `

            <div class="not-found">

                <h1>Haber bulunamadı</h1>

                <p>
                    Aradığınız haber mevcut değil veya kaldırılmış olabilir.
                </p>

                <a href="index.html">
                    Ana sayfaya dön
                </a>

            </div>

        `;

        return;

    }


    document.title =
        `${haber.baslik} - Haberİsta`;


    article.innerHTML = `

        <article class="full-article">

            <div class="article-category">
                ${haber.kategori}
            </div>


            <h1 class="article-title">
                ${haber.baslik}
            </h1>


            <p class="article-spot">
                ${haber.spot}
            </p>


            <div class="article-meta">

                <span>
                    📅 ${haber.tarih}
                </span>

                <span>
                    🕐 ${haber.saat}
                </span>

                <span>
                    👁 ${haber.okunma.toLocaleString("tr-TR")}
                </span>

            </div>


            <img
                class="article-image"
                src="${haber.resim}"
                alt="${haber.baslik}"
                onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80'"
            >


            <div class="article-content">

                ${haber.icerik
                    .split("\n")
                    .filter(x => x.trim())
                    .map(x => `<p>${x.trim()}</p>`)
                    .join("")
                }

            </div>


            <div class="article-source">

                <strong>Haberİsta</strong>

                <span>
                    Bu haber Haberİsta haber merkezi tarafından hazırlanmıştır.
                </span>

            </div>

        </article>

    `;


    // BENZER HABERLER

    const related =
        document.getElementById("relatedNews");


    const similar =
        haberler
            .filter(h =>
                h.id !== haber.id &&
                h.kategori === haber.kategori
            )
            .slice(0, 4);


    related.innerHTML =
        similar
            .map(h => `

                <article
                    class="news-card"
                    onclick="openNews(${h.id})"
                >

                    <div class="news-image">

                        <img
                            src="${h.resim}"
                            alt="${h.baslik}"
                        >

                    </div>

                    <div class="news-card-content">

                        <h3>
                            ${h.baslik}
                        </h3>

                        <p>
                            ${h.spot}
                        </p>

                    </div>

                </article>

            `)
            .join("");


    // SON DAKİKA

    const breaking =
        document.getElementById("breakingNews");


    if (breaking) {

        breaking.innerHTML =
            haberler
                .slice(0, 4)
                .map(h => `

                    <span onclick="openNews(${h.id})">
                        ${h.baslik}
                    </span>

                `)
                .join(" • ");

    }

});


function openNews(id) {

    window.location.href =
        `haber.html?id=${id}`;

}
