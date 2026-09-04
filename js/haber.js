document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(params.get("id"));


    const haber =
        haberler.find(
            item => item.id === id
        );


    const article =
        document.getElementById("article");


    const relatedNews =
        document.getElementById("relatedNews");


    if (!haber) {

        article.innerHTML = `

            <div class="not-found">

                <div class="not-found-icon">
                    📰
                </div>

                <h1>
                    Haber bulunamadı
                </h1>

                <p>
                    Aradığınız haber mevcut değil.
                </p>

                <a href="index.html">
                    Ana Sayfaya Dön
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
                ${escapeHtml(haber.kategori)}
            </div>


            <h1 class="article-title">
                ${escapeHtml(haber.baslik)}
            </h1>


            <p class="article-spot">
                ${escapeHtml(haber.spot)}
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
                alt="${escapeHtml(haber.baslik)}"
            >


            <div class="article-content">

                ${haber.icerik
                    .trim()
                    .split(/\n\s*\n/)
                    .map(paragraph => `
                        <p>
                            ${escapeHtml(
                                paragraph.trim()
                            )}
                        </p>
                    `)
                    .join("")
                }

            </div>


            <div class="article-source">

                <strong>
                    Haberİsta
                </strong>

                <span>
                    Haber tarihi:
                    ${haber.tarih}
                    ${haber.saat}
                </span>

                <span>
                    Kaynak:
                    ${escapeHtml(haber.kaynak)}
                </span>

            </div>

        </article>

    `;


    const related =
        haberler
            .filter(item =>
                item.id !== haber.id &&
                item.kategori === haber.kategori
            )
            .slice(0, 4);


    if (!related.length) {

        const alternative =
            haberler
                .filter(item =>
                    item.id !== haber.id
                )
                .slice(0, 4);

        renderRelated(
            alternative
        );

    } else {

        renderRelated(
            related
        );

    }


    const breaking =
        document.getElementById(
            "breakingNews"
        );


    if (breaking) {

        breaking.innerHTML =
            haberler
                .slice(0, 6)
                .map(item => `

                    <span
                        onclick="openNews(${item.id})"
                    >
                        ${escapeHtml(item.baslik)}
                    </span>

                `)
                .join("");

    }


    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    function search() {

        const value =
            searchInput
                ?.value
                .trim()
                .toLocaleLowerCase("tr-TR");


        if (!value) {
            return;
        }


        const result =
            haberler.find(item => {

                const text =
                    (
                        item.baslik +
                        " " +
                        item.spot
                    ).toLocaleLowerCase(
                        "tr-TR"
                    );

                return text.includes(value);

            });


        if (result) {

            openNews(result.id);

        } else {

            alert(
                "Aradığınız haber bulunamadı."
            );

        }

    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            search
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    search();
                }

            }
        );

    }

});


function renderRelated(list) {

    const relatedNews =
        document.getElementById(
            "relatedNews"
        );


    relatedNews.innerHTML =
        list
            .map(haber => `

                <article
                    class="news-card"
                    onclick="openNews(${haber.id})"
                >

                    <div class="news-image">

                        <img
                            src="${haber.resim}"
                            alt="${escapeHtml(haber.baslik)}"
                            loading="lazy"
                        >

                        <span class="category-tag">
                            ${escapeHtml(haber.kategori)}
                        </span>

                    </div>

                    <div class="news-card-content">

                        <h3>
                            ${escapeHtml(haber.baslik)}
                        </h3>

                        <p>
                            ${escapeHtml(haber.spot)}
                        </p>

                    </div>

                </article>

            `)
            .join("");

}


function openNews(id) {

    window.location.href =
        `haber.html?id=${id}`;

}


function shareNews() {

    if (
        navigator.share
    ) {

        navigator.share({

            title:
                document.title,

            url:
                window.location.href

        });

    } else {

        copyNewsLink();

    }

}


function copyNewsLink() {

    navigator.clipboard
        ?.writeText(
            window.location.href
        )
        .then(() => {

            alert(
                "Haber bağlantısı kopyalandı."
            );

        });

}


function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}
