"use strict";

/* =========================================================
   SLUG OLUŞTUR
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

        .replace(/â/g, "a")
        .replace(/î/g, "i")
        .replace(/û/g, "u")

        .replace(/[^a-z0-9\s-]/g, "")

        .trim()

        .replace(/\s+/g, "-")

        .replace(/-+/g, "-")

        .replace(/^-+|-+$/g, "");
}


/* =========================================================
   HABERLER
   BURADAKİ HABERLERİNİ İSTEDİĞİN GİBİ ÇOĞALTABİLİRSİN
========================================================= */

const haberler = [

    {
        id: 1,

        kategori: "Son Dakika",

        baslik:
            "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",

        spot:
            "5 Eylül 2026 tarihli Resmî Gazete'de ekonomi, kamu yönetimi, eğitim ve ulaştırma alanlarını ilgilendiren çok sayıda karar ve düzenleme yayımlandı. Sayıştay Başsavcılığına Recep Çevik atanırken bazı kamu kurumlarında yeni atama ve görevden alma kararları da Resmî Gazete'de yer aldı.",

        content: `
            <p>
                5 Eylül 2026 tarihli Resmî Gazete yayımlandı.
                Yeni sayıda kamu yönetiminden ekonomiye,
                eğitimden ulaştırmaya kadar birçok alanı
                ilgilendiren karar ve düzenleme yer aldı.
            </p>

            <h2>Yeni kararlar yayımlandı</h2>

            <p>
                Resmî Gazete'nin yayımlanan sayısında
                kamu kurumlarının çalışmalarını ilgilendiren
                çeşitli düzenlemeler kamuoyuna duyuruldu.
                Kararların ilgili kurumlar tarafından
                uygulanması bekleniyor.
            </p>

            <h2>Kamu kurumlarında yeni atamalar</h2>

            <p>
                Sayıştay Başsavcılığı görevine Recep Çevik'in
                atanmasına ilişkin karar da Resmî Gazete'de
                yayımlanan düzenlemeler arasında yer aldı.
            </p>

            <p>
                Bazı kamu kurumlarında görev değişiklikleri,
                atamalar ve görevden alma kararları da
                yayımlanan kararlar arasında bulundu.
            </p>

            <h2>Eğitim ve üniversiteler</h2>

            <p>
                Eğitim alanındaki bazı düzenlemeler ve
                yükseköğretim kurumlarını ilgilendiren
                kararlar da yeni sayıda yer aldı.
            </p>

            <h2>Ulaştırma alanındaki düzenlemeler</h2>

            <p>
                Ulaştırma ve raylı sistemlerle ilgili
                düzenlemeler de Resmî Gazete'de yayımlanan
                kararlar arasında bulunuyor.
            </p>

            <h2>Ekonomiye ilişkin kararlar</h2>

            <p>
                Ekonomi ve kamu hizmetlerini ilgilendiren
                bazı kararların da yeni düzenlemeler
                kapsamında yayımlandığı görüldü.
            </p>

            <h2>Kararlar ne anlama geliyor?</h2>

            <p>
                Resmî Gazete'de yayımlanan kararlar,
                ilgili kurumların görev alanlarına göre
                farklı tarihlerde yürürlüğe girebiliyor.
                Düzenlemelerin uygulama süreçleri ilgili
                kurumların açıklamalarıyla netleşecek.
            </p>

            <h2>Sonuç</h2>

            <p>
                5 Eylül 2026 tarihli Resmî Gazete'de
                yayımlanan karar ve düzenlemeler,
                kamu yönetimi ve çeşitli sektörler açısından
                yeni gelişmeleri beraberinde getiriyor.
            </p>
        `,

        image:
            "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",

        date: "5 Eylül 2026",

        time: "15:20",

        views: 38742,

        source:
            "Resmî Gazete / Anadolu Ajansı"
    },


    {
        id: 2,

        kategori: "Gündem",

        baslik:
            "Türkiye'de gündem yoğun: Yeni haftada gözler kritik gelişmelerde",

        spot:
            "Türkiye'de yeni haftayla birlikte gündemin öne çıkan başlıkları ve kamuoyunun yakından takip ettiği gelişmeler yeniden gündemde.",

        content: `
            <p>
                Türkiye'de yeni haftanın başlamasıyla birlikte
                gündemin öne çıkan başlıkları yakından takip
                ediliyor.
            </p>

            <h2>Gündemin öne çıkan başlıkları</h2>

            <p>
                Önümüzdeki günlerde ekonomi, kamu yönetimi,
                eğitim ve günlük yaşamı ilgilendiren gelişmelerin
                gündemde olması bekleniyor.
            </p>

            <p>
                Yetkililer tarafından yapılacak açıklamalar
                gelişmelerin seyri açısından önem taşıyor.
            </p>
        `,

        image:
            "images/haber-2.jpg",

        date:
            "6 Eylül 2026",

        time:
            "09:15",

        views:
            24681,

        source:
            "Haberİsta Haber Merkezi"
    },


    {
        id: 3,

        kategori: "Ekonomi",

        baslik:
            "Piyasalarda yeni hafta öncesi hareketlilik: Gözler ekonomi gündeminde",

        spot:
            "Piyasalarda yeni hafta öncesinde yatırımcıların ve ekonomi çevrelerinin takip ettiği gelişmeler öne çıkıyor.",

        content: `
            <p>
                Piyasalarda yeni hafta öncesinde ekonomi
                gündemindeki gelişmeler yakından takip ediliyor.
            </p>

            <h2>Ekonomi gündemi</h2>

            <p>
                Piyasaların yönü üzerinde etkili olabilecek
                ekonomik gelişmeler ve açıklamalar yatırımcıların
                odağında bulunuyor.
            </p>

            <p>
                Yeni haftada açıklanacak ekonomik veriler ve
                resmi açıklamalar piyasaların seyri açısından
                önem taşıyor.
            </p>
        `,

        image:
            "images/haber-3.jpg",

        date:
            "6 Eylül 2026",

        time:
            "10:00",

        views:
            19852,

        source:
            "Haberİsta Haber Merkezi"
    },


    {
        id: 4,

        kategori: "Spor",

        baslik:
            "Transfer döneminin ardından futbolda gözler yeni haftaya çevrildi",

        spot:
            "Transfer döneminin ardından futbol dünyasında yeni haftanın maçları ve takımların hazırlıkları gündemin öne çıkan başlıkları arasında.",

        content: `
            <p>
                Transfer döneminin sona ermesinin ardından
                futbol dünyasında gözler yeni haftada oynanacak
                karşılaşmalara çevrildi.
            </p>

            <h2>Takımlar hazırlıklarını sürdürüyor</h2>

            <p>
                Kulüpler yeni hafta öncesinde antrenman programlarını
                sürdürürken teknik ekipler de maç planlamaları
                üzerinde çalışmalarını devam ettiriyor.
            </p>

            <p>
                Futbolseverler yeni haftanın karşılaşmalarını
                yakından takip edecek.
            </p>
        `,

        image:
            "images/haber-4.jpg",

        date:
            "6 Eylül 2026",

        time:
            "11:30",

        views:
            31247,

        source:
            "Haberİsta Spor Servisi"
    },


    {
        id: 5,

        kategori: "Dünya",

        baslik:
            "Dünyada kritik gelişmeler: Uluslararası gündem yakından takip ediliyor",

        spot:
            "Dünya genelinde yaşanan gelişmeler uluslararası kamuoyunun gündemindeki yerini koruyor.",

        content: `
            <p>
                Dünya genelinde yaşanan siyasi, ekonomik ve
                diplomatik gelişmeler uluslararası kamuoyu
                tarafından yakından takip ediliyor.
            </p>

            <h2>Uluslararası gündem</h2>

            <p>
                Ülkeler arasındaki diplomatik temaslar ve
                uluslararası kuruluşların açıklamaları gündemin
                önemli başlıkları arasında bulunuyor.
            </p>

            <p>
                Önümüzdeki günlerde yapılacak resmi açıklamalar
                gelişmelerin yönü açısından önem taşıyor.
            </p>
        `,

        image:
            "images/haber-5.jpg",

        date:
            "6 Eylül 2026",

        time:
            "12:10",

        views:
            17543,

        source:
            "Haberİsta Dünya Servisi"
    }

];


/* =========================================================
   HER HABERE OTOMATİK SLUG
========================================================= */

haberler.forEach(function (haber) {

    haber.slug =
        slugOlustur(haber.baslik);

    haber.url =
        "/haber/" +
        haber.slug;
});


/* =========================================================
   HABER BULMA
========================================================= */

function haberSlugIleBul(slug) {

    return haberler.find(function (haber) {

        return haber.slug === slug;

    });
}


function haberIdIleBul(id) {

    return haberler.find(function (haber) {

        return String(haber.id) ===
            String(id);

    });
}


/* =========================================================
   GLOBAL
========================================================= */

window.haberler =
    haberler;

window.slugOlustur =
    slugOlustur;

window.haberSlugIleBul =
    haberSlugIleBul;

window.haberIdIleBul =
    haberIdIleBul;


console.log(
    "Haberİsta:",
    haberler.length,
    "haber başarıyla yüklendi."
);
