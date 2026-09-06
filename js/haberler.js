"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
========================================================= */


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
========================================================= */

const haberler = [

    /* =====================================================
       YENİ HABER 1 - GÜNDEM
    ===================================================== */
    {
        id: 1,
        kategori: "Gündem",
        baslik:
            "Balıkesir'de yangın: 5 iş yeri zarar gördü",
        spot:
            "Balıkesir'in Edremit ilçesinde bir polyester atölyesinde çıkan yangın kısa sürede büyüyerek çevredeki 4 iş yerine daha sıçradı. Yangında toplam 5 iş yerinde hasar oluştu.",
        content: `
            <p>
                Balıkesir'in Edremit ilçesinde bir organize sanayi
                sitesinde yangın çıktı. Yangın, bölgede bulunan
                iş yerlerinde hasara neden oldu.
            </p>

            <h2>Yangın polyester atölyesinde başladı</h2>

            <p>
                Yolören Mahallesi'ndeki organize sanayi sitesinde
                bulunan bir polyester atölyesinde henüz belirlenemeyen
                nedenle yangın çıktı.
            </p>

            <p>
                Kısa sürede büyüyen alevler, rüzgarın da etkisiyle
                bitişikte bulunan 4 iş yerine daha sıçradı.
            </p>

            <h2>İtfaiye ekipleri müdahale etti</h2>

            <p>
                İhbar üzerine bölgeye çok sayıda itfaiye ve polis ekibi
                sevk edildi. Ekiplerin müdahalesiyle yangının daha
                fazla büyümesinin önüne geçildi.
            </p>

            <h2>5 iş yerinde hasar oluştu</h2>

            <p>
                Yangın sonucunda başlangıç noktasındaki iş yeriyle
                birlikte çevrede bulunan 4 iş yerinde de hasar meydana
                geldi.
            </p>

            <p>
                Yangının çıkış nedeninin belirlenmesine yönelik
                çalışmaların sürdüğü bildirildi.
            </p>

            <h2>Soruşturma başlatıldı</h2>

            <p>
                Yangının kesin çıkış nedeninin yapılacak incelemelerin
                ardından netleşmesi bekleniyor.
            </p>
        `,
        image:
            "images/BALIKESIR-YANGIN.jpeg",
        date: "6 Eylül 2026",
        time: "12:00",
        views: 4217,
        source:
            "TRT Haber"
    },

    /* =====================================================
       YENİ HABER 2 - SPOR
    ===================================================== */
    {
        id: 2,
        kategori: "Spor",
        baslik:
            "Filenin Sultanları Avrupa şampiyonluğu için sahaya çıkıyor",
        spot:
            "A Milli Kadın Voleybol Takımı, 2026 CEV Kadınlar Avrupa Voleybol Şampiyonası finalinde İtalya ile karşılaşacak. Türkiye-İtalya finali bugün saat 19.00'da Sinan Erdem Spor Salonu'nda oynanacak.",
        content: `
            <p>
                A Milli Kadın Voleybol Takımı, 2026 CEV Kadınlar
                Avrupa Voleybol Şampiyonası'nda şampiyonluk için
                sahaya çıkıyor.
            </p>

            <h2>Finalde rakip İtalya</h2>

            <p>
                Filenin Sultanları, yarı finalde Sırbistan'ı 3-0
                mağlup ederek finale yükseldi.
            </p>

            <p>
                Finalde millilerin rakibi İtalya olacak. İtalya ise
                yarı finalde Polonya'yı 3-1 yenerek final biletini aldı.
            </p>

            <h2>Final saat 19.00'da</h2>

            <p>
                Türkiye ile İtalya arasındaki final karşılaşması
                6 Eylül 2026 Pazar günü saat 19.00'da başlayacak.
            </p>

            <p>
                Karşılaşma İstanbul'daki Sinan Erdem Spor Salonu'nda
                oynanacak ve TRT 1'den canlı yayınlanacak.
            </p>

            <h2>Hedef üst üste ikinci şampiyonluk</h2>

            <p>
                Turnuvanın son şampiyonu olan Filenin Sultanları,
                İtalya karşısında kazanarak Avrupa'da üst üste
                ikinci şampiyonluğunu elde etmeyi hedefliyor.
            </p>

            <h2>Milliler formda</h2>

            <p>
                A Milli Kadın Voleybol Takımı bu sezon FIVB
                Milletler Ligi'ni de şampiyon tamamlamıştı.
            </p>

            <p>
                Milli takım, Avrupa Şampiyonası finalinde de aynı
                başarıyı sürdürerek kupayı Türkiye'ye getirmek istiyor.
            </p>
        `,
        image:
            "images/AVRUPA.jpeg",
        date: "6 Eylül 2026",
        time: "07:00",
        views: 68421,
        source:
            "TRT Spor / Türkiye Voleybol Federasyonu"
    },

    /* =====================================================
       YENİ HABER 3 - EKONOMİ
    ===================================================== */
    {
        id: 3,
        kategori: "Ekonomi",
        baslik:
            "Türkiye ekonomisinin 2027-2029 yol haritası bugün açıklanıyor",
        spot:
            "Türkiye ekonomisinin 2027-2029 dönemine ilişkin Orta Vadeli Programı bugün kamuoyuyla paylaşılacak. Programda büyüme, enflasyon, istihdam ve finans başlıklarına ilişkin hedeflerin yer alması bekleniyor.",
        content: `
            <p>
                Türkiye ekonomisinin önümüzdeki üç yıllık dönemine
                ilişkin yol haritası bugün açıklanıyor.
            </p>

            <h2>Yeni OVP bugün açıklanacak</h2>

            <p>
                2027-2029 dönemini kapsayan Orta Vadeli Program'ın
                detaylarının 6 Eylül Pazar günü kamuoyuyla paylaşılması
                planlanıyor.
            </p>

            <p>
                Programın ekonomi politikaları açısından önümüzdeki
                dönemin temel hedeflerini ortaya koyması bekleniyor.
            </p>

            <h2>Enflasyon ve büyüme hedefleri</h2>

            <p>
                Yeni programda enflasyon, büyüme, istihdam ve kamu
                maliyesine ilişkin hedeflerin öne çıkması bekleniyor.
            </p>

            <p>
                Cumhurbaşkanı Yardımcısı Cevdet Yılmaz, 2026 yılı
                sonunda enflasyonun yüzde 28,4 seviyesinde olmasının
                beklendiğini açıkladı.
            </p>

            <h2>Yatırımcılar da takip ediyor</h2>

            <p>
                Açıklanacak program, piyasalar ve yatırımcılar
                tarafından da yakından takip edilecek.
            </p>

            <p>
                Yeni dönemde uygulanacak ekonomi politikalarının
                ayrıntıları, piyasalardaki beklentiler açısından
                önem taşıyor.
            </p>

            <h2>Üç yıllık yol haritası</h2>

            <p>
                2027-2029 dönemini kapsayacak programla birlikte
                Türkiye ekonomisinin önümüzdeki üç yıllık dönemde
                izleyeceği temel politikalar daha net şekilde
                ortaya konulacak.
            </p>
        `,
        image:
            "images/EKONOMI.jpeg",
        date: "6 Eylül 2026",
        time: "12:34",
        views: 32784,
        source:
            "Anadolu Ajansı / TRT Haber"
    },

    /* =====================================================
       YENİ HABER 4 - DÜNYA
    ===================================================== */
    {
        id: 4,
        kategori: "Dünya",
        baslik:
            "Putin, Trump'ın temsilcileriyle Ukrayna krizini görüştü",
        spot:
            "Rusya Devlet Başkanı Vladimir Putin'in, ABD Başkanı Donald Trump'ın özel temsilcileri Steve Witkoff ve Jared Kushner ile görüşmesinde Ukrayna krizi ve Rusya-ABD ilişkileri ele alındı.",
        content: `
            <p>
                Rusya Devlet Başkanı Vladimir Putin, ABD Başkanı
                Donald Trump'ın özel temsilcileri Steve Witkoff ve
                Jared Kushner ile görüştü.
            </p>

            <h2>Ukrayna krizi masada</h2>

            <p>
                Kremlin Dış Politika Danışmanı Yuriy Uşakov,
                görüşmede Ukrayna krizinin ele alındığını açıkladı.
            </p>

            <p>
                Görüşmede ayrıca Rusya ile ABD arasındaki ikili
                ilişkilerin de değerlendirildiği bildirildi.
            </p>

            <h2>Rusya-ABD ilişkileri</h2>

            <p>
                Görüşme, Moskova ile Washington arasındaki temasların
                devam ettiği bir dönemde gerçekleşti.
            </p>

            <p>
                Ukrayna savaşı ve iki ülke arasındaki ilişkilerin
                geleceğine yönelik diplomatik temaslar uluslararası
                kamuoyunun gündeminde bulunuyor.
            </p>

            <h2>Kremlin'den açıklama</h2>

            <p>
                Kremlin tarafından yapılan açıklamada görüşmenin
                içeriğinde Ukrayna krizi ve ikili ilişkilerin
                önemli yer tuttuğu belirtildi.
            </p>
        `,
        image:
            "images/DUNYA.jpeg",
        date: "6 Eylül 2026",
        time: "12:00",
        views: 29651,
        source:
            "TRT Haber"
    },

    /* =====================================================
       YENİ HABER 5 - EĞİTİM
    ===================================================== */
    {
        id: 5,
        kategori: "Eğitim",
        baslik:
            "KPSS maratonu başladı: Adaylar Genel Yetenek ve Genel Kültür sınavında",
        spot:
            "2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu bugün gerçekleştiriliyor. Sınav Türkiye genelinde 81 il ve Lefkoşa'da toplam 145 sınav merkezinde yapılıyor.",
        content: `
            <p>
                Kamu Personeli Seçme Sınavı'nın 2026 yılı lisans
                süreci bugün gerçekleştirilen Genel Yetenek-Genel
                Kültür oturumuyla başladı.
            </p>

            <h2>Sınav 81 ilde yapılıyor</h2>

            <p>
                ÖSYM tarafından gerçekleştirilen sınav, Türkiye'nin
                81 ilinin yanı sıra Kuzey Kıbrıs Türk Cumhuriyeti'nin
                başkenti Lefkoşa'da da düzenleniyor.
            </p>

            <p>
                Toplam 145 sınav merkezinde adaylar sınava giriyor.
            </p>

            <h2>120 soru soruluyor</h2>

            <p>
                Genel Yetenek-Genel Kültür oturumunda adaylara
                toplam 120 soru yöneltiliyor.
            </p>

            <p>
                Adayların soruları cevaplaması için 130 dakika
                süre veriliyor.
            </p>

            <h2>Adaylar sınav heyecanı yaşıyor</h2>

            <p>
                Sabah saatlerinden itibaren sınav merkezlerine gelen
                adaylar, sınav başlamadan önce yoğunluk oluşturdu.
            </p>

            <p>
                KPSS sonuçları, kamu kurumlarında görev almak isteyen
                adaylar açısından önemli bir süreç oluşturuyor.
            </p>

            <h2>KPSS süreci devam edecek</h2>

            <p>
                Genel Yetenek-Genel Kültür oturumunun ardından
                KPSS'nin diğer oturumları da ÖSYM'nin belirlediği
                takvim doğrultusunda gerçekleştirilecek.
            </p>
        `,
        image:
            "images/KPSS.jpeg",
        date: "6 Eylül 2026",
        time: "10:15",
        views: 41582,
        source:
            "ÖSYM / TRT Haber"
    },

    /* =====================================================
       ESKİ HABERLER
       ID'LER 6'DAN DEVAM EDİYOR
    ===================================================== */

    {
        id: 6,
        kategori: "Son Dakika",
        baslik:
            "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",
        spot:
            "5 Eylül 2026 tarihli Resmî Gazete'de ekonomi, kamu yönetimi, eğitim ve ulaştırma alanlarını ilgilendiren çok sayıda karar ve düzenleme yayımlandı.",
        content: `
            <p>
                5 Eylül 2026 tarihli Resmî Gazete yayımlandı.
                Yeni sayıda kamu yönetiminden ekonomiye,
                eğitimden ulaştırmaya kadar birçok alanı
                ilgilendiren karar ve düzenleme yer aldı.
            </p>
            <h2>Yeni kararlar yayımlandı</h2>
            <p>
                Resmî Gazete'nin yayımlanan sayısında kamu kurumlarının
                çalışmalarını ilgilendiren çeşitli düzenlemeler
                kamuoyuna duyuruldu.
            </p>
            <h2>Kamu kurumlarında yeni atamalar</h2>
            <p>
                Sayıştay Başsavcılığı görevine Recep Çevik'in
                atanmasına ilişkin karar da yayımlanan düzenlemeler
                arasında yer aldı.
            </p>
            <h2>Eğitim ve üniversiteler</h2>
            <p>
                Eğitim alanındaki bazı düzenlemeler ve yükseköğretim
                kurumlarını ilgilendiren kararlar da yeni sayıda
                yer aldı.
            </p>
            <h2>Ulaştırma alanındaki düzenlemeler</h2>
            <p>
                Ulaştırma ve raylı sistemlerle ilgili düzenlemeler
                de Resmî Gazete'de yayımlanan kararlar arasında
                bulunuyor.
            </p>
            <h2>Ekonomiye ilişkin kararlar</h2>
            <p>
                Ekonomi ve kamu hizmetlerini ilgilendiren bazı
                kararlar da yeni düzenlemeler kapsamında yayımlandı.
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
        id: 7,
        kategori: "Spor",
        baslik:
            "Filenin Sultanları Avrupa şampiyonluğu için sahada! Türkiye-İtalya finali bugün oynanacak",
        spot:
            "A Milli Kadın Voleybol Takımı, 2026 CEV Kadınlar Avrupa Voleybol Şampiyonası'nda finale yükseldi.",
        content: `
            <p>
                A Milli Kadın Voleybol Takımı Avrupa Şampiyonası'nda
                finale yükseldi.
            </p>
            <h2>Finalde rakip İtalya</h2>
            <p>
                Türkiye, yarı finalde Sırbistan'ı 3-0 mağlup ederek
                finale yükseldi.
            </p>
            <p>
                Final karşılaşmasında Türkiye ile İtalya karşı karşıya
                gelecek.
            </p>
        `,
        image:
            "images/AVRUPA.jpeg",
        date: "6 Eylül 2026",
        time: "01:30",
        views: 58421,
        source:
            "Türkiye Voleybol Federasyonu / Anadolu Ajansı"
    },

    {
        id: 8,
        kategori: "Ekonomi",
        baslik:
            "Para piyasası fonlarında yeni dönem: Stopaj oranı yüzde 10'a çıkarıldı",
        spot:
            "Para piyasası fonlarından elde edilen kazançlara uygulanan tevkifat oranı yüzde 10'a çıkarıldı.",
        content: `
            <p>
                Para piyasası fonlarından elde edilen kazançlara
                uygulanan tevkifat oranında değişikliğe gidildi.
            </p>
            <h2>Stopaj oranı değişti</h2>
            <p>
                Düzenlemeyle birlikte söz konusu kazançlara uygulanan
                tevkifat oranı yüzde 10 oldu.
            </p>
            <h2>Yatırımcılar için ne anlama geliyor?</h2>
            <p>
                Değişiklik, yatırımcıların fonlardan elde edeceği
                net getiriyi etkileyebilecek.
            </p>
        `,
        image:
            "images/EKENOMİ.jpeg",
        date: "5 Eylül 2026",
        time: "18:10",
        views: 26341,
        source:
            "Anadolu Ajansı / Haberİsta Ekonomi Servisi"
    },

    {
        id: 9,
        kategori: "Gündem",
        baslik:
            "Eylül ayı yaşlı ve engelli aylıkları hesaplara yatırılmaya başlandı",
        spot:
            "Eylül ayına ilişkin yaşlı ve engelli aylıklarının hesaplara yatırılmaya başlandığı bildirildi.",
        content: `
            <p>
                Eylül ayının başlamasıyla birlikte sosyal yardım
                ödemeleri vatandaşların gündemindeki başlıklardan
                biri oldu.
            </p>
            <h2>Ödemeler başladı</h2>
            <p>
                Yaşlı ve engelli aylıklarının hak sahiplerinin
                hesaplarına yatırılmaya başlandığı bildirildi.
            </p>
            <h2>Vatandaşlar ödemeleri takip ediyor</h2>
            <p>
                Hak sahipleri ödeme durumlarını ilgili resmi
                kanallardan takip edebiliyor.
            </p>
        `,
        image:
            "images/GÜNDEM.jpeg",
        date: "5 Eylül 2026",
        time: "10:27",
        views: 22418,
        source:
            "TRT Haber / Haberİsta Gündem Servisi"
    },

    {
        id: 10,
        kategori: "Eğitim",
        baslik:
            "PISA 2025 sonuçları için geri sayım: Sonuçlar 8 Eylül'de açıklanacak",
        spot:
            "PISA 2025 sonuçları 8 Eylül 2026'da açıklanacak. Türkiye'nin matematik, fen ve okuma alanlarındaki performansı da sonuçlarla birlikte ortaya çıkacak.",
        content: `
            <p>
                Eğitim dünyasının yakından takip ettiği PISA 2025
                sonuçları için geri sayım başladı.
            </p>
            <h2>PISA nedir?</h2>
            <p>
                PISA, öğrencilerin matematik, fen ve okuma becerilerini
                uluslararası ölçekte değerlendiren araştırmalardan biridir.
            </p>
            <h2>Türkiye'nin sonuçları merak ediliyor</h2>
            <p>
                Sonuçların açıklanmasıyla Türkiye'nin uluslararası
                performansı da ortaya çıkacak.
            </p>
            <h2>Sonuçlar ne zaman açıklanacak?</h2>
            <p>
                PISA 2025 sonuçlarının 8 Eylül 2026 tarihinde
                açıklanması bekleniyor.
            </p>
        `,
        image:
            "images/PISA.jpeg",
        date: "6 Eylül 2026",
        time: "09:42",
        views: 18976,
        source:
            "TRT Haber / Haberİsta Eğitim Servisi"
    }
];




/* =========================================================
   HER HABERE OTOMATİK SLUG VE URL
========================================================= */

haberler.forEach(function (haber) {

    haber.slug =
        slugOlustur(haber.baslik);

    haber.url =
        "/haber/" + haber.slug;

});


/* =========================================================
   SLUG İLE HABER BUL
========================================================= */

function haberSlugIleBul(slug) {

    const temizSlug =
        slugOlustur(
            decodeURIComponent(
                String(slug || "")
            )
        );

    return haberler.find(function (haber) {

        return haber.slug === temizSlug;

    }) || null;
}


/* =========================================================
   ID İLE HABER BUL
========================================================= */

function haberIdIleBul(id) {

    return haberler.find(function (haber) {

        return String(haber.id)
            === String(id);

    }) || null;
}


/* =========================================================
   GLOBAL DEĞİŞKENLER
========================================================= */

window.haberler =
    haberler;

window.slugOlustur =
    slugOlustur;

window.haberSlugIleBul =
    haberSlugIleBul;

window.haberIdIleBul =
    haberIdIleBul;


/* =========================================================
   KONTROL
========================================================= */

console.log(
    "Haberİsta:",
    haberler.length,
    "haber başarıyla yüklendi."
);

console.log(
    "Haber URL'leri:"
);

haberler.forEach(function (haber) {

    console.log(
        haber.id,
        "→",
        haber.url
    );

});
