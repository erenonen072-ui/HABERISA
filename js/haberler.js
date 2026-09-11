"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
   PROFESYONEL SÜRÜM
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
       33 - MERSİN BOZYAZI YANGINI
    ===================================================== */
    {
        id: 33,
        kategori: "Gündem",
        baslik: "Mersin'in Bozyazı ilçesindeki yangına havadan ve karadan müdahale ediliyor",
        spot: "Mersin'in Bozyazı ilçesinde ormanlık alanda çıkan yangına ekiplerin havadan ve karadan müdahalesi sürüyor.",
        tarih: "8 Eylül 2026",
        saat: "19:39",
        gorsel: "images/bozyazi-orman-yangini.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
MERSİN BOZYAZI'DA ORMAN YANGINI

Mersin'in Bozyazı ilçesinde ormanlık alanda yangın çıktı. Yangının fark edilmesinin ardından bölgeye ilgili ekipler yönlendirilirken, alevlerin kontrol altına alınması amacıyla müdahale çalışmaları başlatıldı.

Ormanlık alanda meydana gelen yangın nedeniyle ekipler, alevlerin mevcut durumunu ve ilerleme yönünü yakından takip ediyor. Yangının daha geniş bir alana yayılmasının önlenmesi için farklı noktalarda çalışmalar yürütülüyor.

HAVADAN VE KARADAN MÜDAHALE

Yangına hem kara ekipleriyle hem de hava araçlarıyla müdahale ediliyor. Kara ekipleri yangının çevresinde çalışmalarını sürdürürken, hava araçları ulaşılması daha zor bölgelere müdahale edilmesine katkı sağlıyor.

Havadan ve karadan yürütülen çalışmaların koordineli şekilde devam ettiği belirtiliyor. Ekiplerin temel hedefleri arasında yangının kontrol altına alınması, çevredeki riskli alanların korunması ve alevlerin ilerlemesinin önüne geçilmesi bulunuyor.

EKİPLER BÖLGEDE ÇALIŞIYOR

Yangın ihbarının ardından bölgeye sevk edilen ekipler, söndürme çalışmalarını sürdürüyor. Çalışmalar sırasında yangının bulunduğu alanın yanı sıra çevredeki riskli noktalar da kontrol altında tutuluyor.

Orman yangınlarında arazinin yapısı, bitki örtüsü ve hava koşulları müdahalenin seyrini etkileyebiliyor. Bu nedenle ekipler sahadaki gelişmeleri sürekli değerlendirerek çalışmalarını sürdürüyor.

RÜZGAR YANGININ SEYRİNİ ETKİLEYEBİLİYOR

Yangınlarla mücadelede rüzgarın yönü ve hızı önemli unsurlar arasında bulunuyor. Rüzgarın yön değiştirmesi, alevlerin farklı noktalara ilerlemesine neden olabileceğinden ekipler hava koşullarını da yakından takip ediyor.

Bozyazı'daki yangında da bölgedeki hava şartlarının müdahale çalışmalarının planlanması açısından önem taşıdığı değerlendiriliyor. Ekipler olası risklere karşı çalışmalarını sürdürüyor.

YANGININ YAYILMASINI ÖNLEMEK İÇİN ÇALIŞMA

Yangın söndürme çalışmalarında mevcut alevlere müdahale edilmesinin yanı sıra yangının çevredeki alanlara yayılmasının önlenmesi de büyük önem taşıyor.

Ekipler yangının ilerleyebileceği bölgeleri takip ederken, riskli alanlarda kontrol sağlamaya çalışıyor. Yangının seyriyle ilgili yeni gelişmeler sahadaki çalışmalar doğrultusunda belirleniyor.

SOĞUTMA ÇALIŞMALARI ÖNEM TAŞIYOR

Alevlerin kontrol altına alınmasının ardından soğutma çalışmalarının yürütülmesi de önem taşıyor. Yangının tamamen söndürülmesinin ardından bölgede yeniden alevlenme ihtimaline karşı alanın kontrol edilmesi gerekiyor.

Soğutma çalışmaları sırasında yangından etkilenen bölgeler yeniden incelenirken, sıcak noktaların kontrol altına alınması amaçlanıyor.

VATANDAŞLARA UYARI

Yetkililer, yangın bölgesine yakın alanlarda bulunan vatandaşların ekiplerin çalışmalarını aksatmaması gerektiğini belirtiyor.

Yangın söndürme araçlarının ve hava araçlarının güvenli şekilde faaliyet gösterebilmesi için vatandaşların güvenlik uyarılarına uyması önem taşıyor. Vatandaşların resmi kurumlardan yapılacak açıklamaları takip etmesi gerekiyor.

ORMAN YANGINLARINDA TEDBİRİN ÖNEMİ

Orman yangınlarında erken tespit ve hızlı müdahale, yangının daha geniş alanlara yayılmasının önlenmesi açısından önem taşıyor.

Özellikle sıcak ve kuru hava koşullarının yaşandığı dönemlerde ormanlık alanlarda yangın riski daha dikkatli takip ediliyor. Vatandaşların ormanlık bölgelerde yangına neden olabilecek davranışlardan kaçınması ve şüpheli durumlarda ilgili kurumlara bilgi vermesi önem taşıyor.

GELİŞMELER TAKİP EDİLİYOR

Mersin'in Bozyazı ilçesindeki yangına ilişkin gelişmeler, ekiplerin sahadaki çalışmaları ve yetkili kurumlardan gelecek açıklamalar doğrultusunda takip ediliyor.

Yangının kontrol altına alınıp alınmadığı ve müdahale çalışmalarının hangi aşamada olduğu konusunda yapılacak resmi açıklamalar kamuoyu tarafından yakından izleniyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       57 - BAYRAKTAROĞLU - ÜSTEL
    ===================================================== */
    {
        id: 57,
        kategori: "Gündem",
        baslik: "Orgeneral Bayraktaroğlu, KKTC Başbakanı Üstel ile görüştü",
        spot: "Orgeneral Bayraktaroğlu ile KKTC Başbakanı Ünal Üstel arasında gerçekleştirilen görüşmede bölgesel güvenlik ve iş birliği konuları ele alındı.",
        tarih: "8 Eylül 2026",
        saat: "17:50",
        gorsel: "images/bayraktaroglu-ustel-gorusmesi.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
ORGENERAL BAYRAKTAROĞLU KKTC'DE GÖRÜŞME GERÇEKLEŞTİRDİ

Orgeneral Bayraktaroğlu, Kuzey Kıbrıs Türk Cumhuriyeti'nde gerçekleştirdiği temaslar kapsamında KKTC Başbakanı Ünal Üstel ile bir araya geldi.

Gerçekleştirilen görüşme, Türkiye ile Kuzey Kıbrıs Türk Cumhuriyeti arasındaki temasların yanı sıra bölgesel güvenlik gündemi açısından da takip edilen gelişmeler arasında yer aldı.

GÜNDEMDE GÜVENLİK VE İŞ BİRLİĞİ

Görüşmede güvenlik başta olmak üzere bölgesel gelişmeler ve Türkiye ile KKTC arasındaki iş birliği konularının değerlendirildiği bildirildi.

Güvenlik alanındaki gelişmelerin yanı sıra iki taraf arasındaki koordinasyonun sürdürülmesine ilişkin konuların da görüşmede gündeme geldiği belirtildi.

DOĞU AKDENİZ GÜNDEMİ

Doğu Akdeniz'deki gelişmeler bölgesel güvenlik ve dış politika açısından önemini koruyor. Bölgedeki siyasi ve güvenlik gelişmeleri Türkiye ve KKTC tarafından yakından takip ediliyor.

Görüşmede bölgesel gelişmelerin değerlendirilmesi, yaşanan gelişmelerin güvenlik açısından ele alınması ve mevcut temasların sürdürülmesi açısından önem taşıyor.

TÜRKİYE-KKTC İLİŞKİLERİ

Türkiye ile KKTC arasındaki ilişkiler siyasi, ekonomik, sosyal ve güvenlik alanlarında gerçekleştirilen temaslarla devam ediyor.

İki taraf arasında düzenli olarak gerçekleştirilen görüşmelerde bölgesel gelişmelerin yanı sıra ortak çalışma alanları ve karşılıklı iş birliği konuları da değerlendiriliyor.

GÜVENLİK VE KOORDİNASYON

Bölgedeki güvenlik gelişmeleri, Türkiye ve KKTC arasındaki temasların önemli başlıklarından biri olarak öne çıkıyor.

Yetkililerin gerçekleştirdiği görüşmelerin, bölgesel gelişmeler hakkında karşılıklı değerlendirme yapılmasına ve koordinasyonun devam ettirilmesine katkı sağlaması bekleniyor.

BÖLGESEL GELİŞMELER TAKİP EDİLİYOR

Doğu Akdeniz'deki gelişmeler ve bölgedeki siyasi gündem uluslararası kamuoyu tarafından da yakından takip ediliyor.

Türkiye ve KKTC'nin bölgesel gelişmelere ilişkin değerlendirmeleri önümüzdeki dönemde yapılacak açıklamalarla daha net şekilde ortaya çıkacak.

GÖRÜŞMELERİN ÖNEMİ

Gerçekleştirilen temaslar, Türkiye ile KKTC arasındaki ilişkilerin farklı alanlarda sürdürülmesi açısından önem taşıyor.

Özellikle güvenlik ve bölgesel gelişmeler konusunda yapılan görüşmeler, tarafların gelişmelere ilişkin değerlendirmelerini paylaşmasına imkan sağlıyor.

ÖNÜMÜZDEKİ SÜREÇ

Görüşmenin ardından Türkiye-KKTC ilişkileri, bölgesel güvenlik gündemi ve Doğu Akdeniz'deki gelişmeler takip edilmeye devam edilecek.

Taraflardan gelecek yeni açıklamalar ve gerçekleştirilecek temasların bölgesel gündem açısından önemini koruması bekleniyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       31 - PUTİN TRUMP
    ===================================================== */
    {
        id: 31,
        kategori: "Dünya",
        baslik: "Putin ve Trump telefonda görüştü: Ukrayna savaşı ve barış süreci masada",
        spot: "Rusya Devlet Başkanı Vladimir Putin ile ABD Başkanı Donald Trump arasında gerçekleştirilen telefon görüşmesinde Ukrayna savaşı ve barış süreci ele alındı.",
        tarih: "8 Eylül 2026",
        saat: "17:30",
        gorsel: "images/putin-trump-telefon-gorusmesi.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
PUTİN VE TRUMP TELEFONDA GÖRÜŞTÜ

Rusya Devlet Başkanı Vladimir Putin ile ABD Başkanı Donald Trump arasında telefon görüşmesi gerçekleştirildi. Görüşmede Ukrayna savaşı ve bölgedeki gelişmelerin ele alındığı bildirildi.

ABD ile Rusya arasındaki diplomatik temaslar, Ukrayna savaşının geleceği ve olası barış görüşmeleri açısından uluslararası kamuoyu tarafından yakından takip ediliyor.

UKRAYNA SAVAŞI GÜNDEMDE

Rusya-Ukrayna savaşı, Avrupa güvenliği ve uluslararası diplomasinin önemli gündem başlıklarından biri olmayı sürdürüyor.

Görüşmede savaşın mevcut durumu, sahadaki gelişmeler ve tarafların önümüzdeki döneme ilişkin değerlendirmelerinin ele alındığı belirtildi.

BARIŞ SÜRECİ ELE ALINDI

Putin ve Trump arasındaki görüşmede olası barış süreci ve diplomatik girişimlerin de gündeme geldiği ifade edildi.

Savaşın sona erdirilmesine yönelik diplomatik temasların hangi yönde ilerleyeceği, tarafların açıklamaları ve gerçekleştirilecek yeni görüşmelerle daha fazla netlik kazanacak.

ABD-RUSYA TEMASLARI

Washington ile Moskova arasındaki temaslar, Ukrayna savaşının yanı sıra uluslararası güvenlik gündemi açısından da önem taşıyor.

İki ülke arasında gerçekleştirilen üst düzey temaslar, tarafların farklı konulardaki görüşlerini doğrudan paylaşmasına imkan sağlıyor.

AVRUPA GÜVENLİĞİ GÜNDEMDE

Ukrayna'daki savaşın etkileri Avrupa güvenliği açısından da yakından takip ediliyor.

Savaşın seyri, bölgedeki güvenlik politikaları ve uluslararası diplomatik girişimler Avrupa ülkelerinin gündeminde önemli yer tutuyor.

DİPLOMASİ TRAFİĞİ SÜRÜYOR

Ukrayna savaşı konusunda farklı ülkeler tarafından diplomatik girişimler yürütülürken, ABD ve Rusya arasındaki temaslar da sürecin önemli parçalarından biri olarak değerlendiriliyor.

Önümüzdeki dönemde yapılabilecek yeni görüşmeler ve tarafların açıklamaları, diplomatik sürecin yönü açısından önem taşıyacak.

SAHADAKİ GELİŞMELER YAKINDAN İZLENİYOR

Diplomatik temasların yanı sıra Ukrayna'daki sahadaki gelişmeler de uluslararası kamuoyu tarafından takip ediliyor.

Askeri gelişmeler ile diplomatik görüşmelerin birbirini nasıl etkileyeceği, savaşın geleceği açısından önemli başlıklar arasında bulunuyor.

ÖNÜMÜZDEKİ SÜREÇ

Putin ve Trump arasındaki telefon görüşmesinin ardından ABD-Rusya ilişkileri, Ukrayna savaşı ve olası barış görüşmeleri gündemde kalmaya devam edecek.

Taraflardan gelecek yeni açıklamalar ve diplomatik temaslar, uluslararası kamuoyunun yakın takibinde olacak.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       30 - GİRNE'DE GEMİ
    ===================================================== */
    {
        id: 30,
        kategori: "Gündem",
        baslik: "Girne açıklarında batan gemi için arama-kurtarma çalışmaları sürüyor",
        spot: "KKTC'nin Girne açıklarında batan gemiyle ilgili bölgede başlatılan arama-kurtarma çalışmaları devam ediyor.",
        tarih: "7 Eylül 2026",
        saat: "23:50",
        gorsel: "images/girne-gemi-arama-kurtarma.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
GİRNE AÇIKLARINDA GEMİDE ARAMA-KURTARMA

Kuzey Kıbrıs Türk Cumhuriyeti'nin Girne açıklarında batan geminin ardından bölgede arama-kurtarma çalışmaları başlatıldı.

Olayın ardından ilgili ekipler bölgeye yönlendirilirken, denizde yürütülen çalışmaların koordineli şekilde sürdürüldüğü bildirildi.

EKİPLER BÖLGEYE SEVK EDİLDİ

İhbarın ardından arama-kurtarma ekipleri olayın meydana geldiği bölgeye yönlendirildi.

Ekipler, denizde belirlenen alanlarda çalışma yürütürken olayın ayrıntılarının ortaya çıkarılması ve varsa ulaşılması gereken kişilere yönelik arama faaliyetlerinin sürdürülmesi için çalışmalarına devam ediyor.

DENİZDE ARAMA ÇALIŞMALARI

Arama-kurtarma ekipleri deniz üzerinde belirlenen alanlarda çalışmalarını sürdürüyor.

Çalışmalar sırasında bölgedeki gelişmeler ve deniz koşulları yakından takip ediliyor. Arama faaliyetlerinin güvenli şekilde gerçekleştirilebilmesi için ekipler koordineli hareket ediyor.

HAVA VE DENİZ KOŞULLARI İZLENİYOR

Deniz üzerinde yürütülen arama-kurtarma çalışmalarında hava ve deniz koşulları önemli bir faktör oluşturuyor.

Rüzgar, dalga yüksekliği ve görüş koşulları ekiplerin çalışma planlamasında dikkate alınması gereken unsurlar arasında bulunuyor.

YETKİLİLERDEN AÇIKLAMA BEKLENİYOR

Olayın meydana geliş şekli ve geminin batmasına ilişkin ayrıntıların resmi açıklamalarla netleşmesi bekleniyor.

Yetkili kurumlar tarafından paylaşılacak bilgiler, olayın kapsamının ve yürütülen çalışmaların daha ayrıntılı şekilde anlaşılması açısından önem taşıyor.

ARAMA-KURTARMA ÇALIŞMALARINDA KOORDİNASYON

Deniz kazalarında farklı kurum ve ekiplerin koordineli şekilde çalışması büyük önem taşıyor.

Arama alanının belirlenmesi, deniz koşullarının değerlendirilmesi ve elde edilen bilgilerin ekipler arasında paylaşılması çalışmaların etkin şekilde yürütülmesine katkı sağlıyor.

GELİŞMELER YAKINDAN TAKİP EDİLİYOR

Girne açıklarında meydana gelen olayla ilgili gelişmeler, bölgede yürütülen arama-kurtarma çalışmaları ve yetkili kurumlardan gelecek açıklamalar doğrultusunda takip ediliyor.

Çalışmaların sonucuna ilişkin yeni bilgilerin resmi açıklamalarla kamuoyuna aktarılması bekleniyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       29 - TÜRKİYE GÜNDEMİ
    ===================================================== */
    {
        id: 29,
        kategori: "Gündem",
        baslik: "Türkiye'de gündem yoğun: Ekonomi, teknoloji ve günlük yaşamda yeni gelişmeler takip ediliyor",
        spot: "Türkiye'de ekonomi, teknoloji, gündem ve günlük yaşama ilişkin gelişmeler vatandaşların gündeminde yer almaya devam ediyor.",
        tarih: "7 Eylül 2026",
        saat: "15:30",
        gorsel: "images/gundem.jpeg",
        kaynak: "HABERİSTA Haber Merkezi",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
TÜRKİYE'DE GÜNDEM YOĞUN

Türkiye'de ekonomi, teknoloji, eğitim ve günlük yaşama ilişkin gelişmeler kamuoyunun gündemindeki yerini koruyor.

Yeni haftayla birlikte farklı alanlarda açıklanan gelişmeler vatandaşlar tarafından yakından takip edilirken, resmi kurumların duyuruları da gündemin önemli kaynakları arasında bulunuyor.

EKONOMİ GÜNDEMİ

Piyasalardaki hareketlilik, ekonomik göstergeler ve vatandaşların günlük yaşamını etkileyebilecek gelişmeler yakından takip ediliyor.

Enflasyon, fiyatlar, döviz hareketleri ve ekonomik politikalar kamuoyunun gündeminde yer alırken, açıklanan ekonomik veriler piyasalardaki beklentiler açısından önem taşıyor.

TEKNOLOJİDE YENİ GELİŞMELER

Dijital teknolojiler ve yeni ürünler teknoloji gündeminin öne çıkan başlıkları arasında bulunuyor.

Yapay zeka, dijital hizmetler, mobil teknolojiler ve internet kullanımındaki gelişmeler günlük yaşamın farklı alanlarında etkisini artırıyor.

EĞİTİM GÜNDEMİ

Öğrenciler, veliler ve eğitimciler yeni eğitim dönemine ilişkin gelişmeleri takip ediyor.

Eğitim takvimleri, sınavlar, okul süreçleri ve resmi açıklamalar eğitim gündeminin önemli başlıkları arasında yer alıyor.

GÜNLÜK YAŞAMI İLGİLENDİREN GELİŞMELER

Vatandaşların ulaşım, ekonomi, eğitim ve sosyal yaşamla ilgili gelişmeleri yakından takip ettiği görülüyor.

Gün içerisinde açıklanan yeni kararlar veya düzenlemeler vatandaşların günlük yaşamını doğrudan ya da dolaylı olarak etkileyebiliyor.

RESMİ AÇIKLAMALAR ÖNEM TAŞIYOR

Gündemde yer alan gelişmelerle ilgili en doğru bilgilerin resmi kurumlar tarafından yapılan açıklamalardan takip edilmesi önem taşıyor.

Özellikle ekonomik veriler, kamu düzenlemeleri ve vatandaşları ilgilendiren uygulamalarda güncel bilgilerin kontrol edilmesi gerekiyor.

YENİ HAFTADA GÜNDEM

Yeni haftada Türkiye'nin iç gündeminde farklı başlıkların öne çıkması bekleniyor.

Ekonomi, eğitim, teknoloji, kamu hizmetleri ve günlük yaşamla ilgili gelişmelerin yanı sıra uluslararası gelişmelerin de Türkiye gündemindeki yansımaları takip edilecek.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       21 - KABİNE
    ===================================================== */
    {
        id: 21,
        kategori: "Gündem",
        baslik: "Kabine bugün toplanıyor: Gündemde ekonomi, güvenlik ve 'Terörsüz Türkiye' süreci var",
        spot: "Cumhurbaşkanlığı Kabinesi bugün Cumhurbaşkanı Erdoğan başkanlığında toplanıyor. Toplantıda ekonomi, güvenlik ve 'Terörsüz Türkiye' sürecinin yanı sıra güncel gelişmelerin ele alınması bekleniyor.",
        tarih: "7 Eylül 2026",
        saat: "16:10",
        gorsel: "images/WhatsApp Image 2026-09-07 at 16.15.05.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
KABİNE TOPLANTISI GERÇEKLEŞTİRİLİYOR

Cumhurbaşkanlığı Kabinesi, Cumhurbaşkanı Recep Tayyip Erdoğan başkanlığında gündemdeki başlıkları değerlendirmek üzere toplanıyor.

Toplantıda Türkiye'nin ekonomi, güvenlik, dış politika ve iç gündemine ilişkin çeşitli konuların ele alınması bekleniyor.

GÜNDEMDE EKONOMİ VAR

Toplantının önemli başlıkları arasında ekonomi gündeminin yer alması bekleniyor.

Ekonomik gelişmeler, fiyat istikrarı, kamu maliyesi ve önümüzdeki döneme ilişkin ekonomi politikalarının değerlendirilmesi gündemin önemli başlıkları arasında bulunuyor.

Ekonomiye ilişkin alınabilecek kararlar ve toplantı sonrasında yapılacak açıklamalar piyasalar ve vatandaşlar tarafından yakından takip edilecek.

GÜVENLİK KONULARI ELE ALINACAK

Türkiye'nin iç ve dış güvenliğine ilişkin gelişmelerin de Kabine toplantısında değerlendirilmesi bekleniyor.

Bölgesel güvenlik gelişmeleri, Türkiye'nin yakın çevresindeki gelişmeler ve güvenlik politikaları toplantının gündeminde yer alabilecek başlıklar arasında bulunuyor.

TERÖRSÜZ TÜRKİYE SÜRECİ

'Terörsüz Türkiye' sürecine ilişkin gelişmelerin toplantının gündem maddeleri arasında yer alması bekleniyor.

Sürece ilişkin atılabilecek adımlar, mevcut gelişmeler ve ilgili kurumların değerlendirmelerinin toplantıda ele alınması öne çıkan başlıklar arasında bulunuyor.

BÖLGESEL GELİŞMELER

Türkiye'nin yakın çevresinde yaşanan gelişmeler ve dış politika gündeminin de toplantıda değerlendirilebilecek konular arasında olduğu belirtiliyor.

Orta Doğu, Doğu Akdeniz ve Türkiye'nin dış politika gündemini ilgilendiren gelişmelerin toplantı kapsamında ele alınması bekleniyor.

TOPLANTI SONRASI AÇIKLAMA

Kabine toplantısının ardından alınan kararlar ve gündeme ilişkin değerlendirmelerin kamuoyuyla paylaşılması bekleniyor.

Toplantı sonrasında yapılacak açıklamalar, ekonomi ve güvenlik başta olmak üzere vatandaşları ilgilendiren konular açısından önem taşıyor.

VATANDAŞLARIN YAKINDAN TAKİP ETTİĞİ KONULAR

Ekonomi, güvenlik ve dış politika başlıklarının yanı sıra vatandaşların günlük yaşamını ilgilendiren konulara ilişkin yapılacak açıklamalar da yakından takip ediliyor.

Toplantıda ele alınan konular ve sonrasında açıklanacak kararların önümüzdeki dönemdeki politikaların şekillenmesine katkı sağlaması bekleniyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       20 - ABD İRAN
    ===================================================== */
    {
        id: 20,
        kategori: "Dünya",
        baslik: "ABD ile İran arasında tansiyon yeniden yükseldi: 3 İran tankeri hedef alındı",
        spot: "ABD ile İran arasındaki gerilim yeniden gündeme gelirken, üç İran tankerinin hedef alındığına ilişkin gelişmeler uluslararası kamuoyunda yankı uyandırdı.",
        tarih: "7 Eylül 2026",
        saat: "00:01",
        gorsel: "images/6.jpeg",
        kaynak: "Reuters / HABERİSTA",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
ABD İLE İRAN ARASINDA GERİLİM

ABD ile İran arasındaki gerilim, İran'a ait olduğu belirtilen üç tankerin hedef alındığına ilişkin gelişmelerin ardından yeniden uluslararası gündemin öne çıkan başlıklarından biri oldu.

İki ülke arasındaki ilişkilerde yaşanan gelişmeler, Orta Doğu'daki güvenlik dengeleri ve enerji piyasaları açısından da yakından takip ediliyor.

ÜÇ İRAN TANKERİ HEDEF ALINDI

Üç İran tankerinin hedef alındığına ilişkin gelişmeler bölgedeki tansiyonun yeniden yükselmesine neden oldu.

Olayın ayrıntıları, tankerlerin durumu ve gelişmenin bölgedeki güvenlik ortamına etkileri uluslararası kamuoyu tarafından takip ediliyor.

OLAYIN AYRINTILARI ARAŞTIRILIYOR

Tankerlerle ilgili gelişmelere ilişkin farklı açıklamalar gündeme gelirken, olayın ayrıntılarının netleşmesi için resmi açıklamalar ve güvenilir kaynaklardan gelecek bilgiler bekleniyor.

Olayın nasıl gerçekleştiği ve sonrasında hangi adımların atılacağı konusunda yapılacak açıklamalar sürecin anlaşılması açısından önem taşıyor.

ABD'DEN AÇIKLAMA

ABD tarafının olaya ilişkin açıklamaları uluslararası kamuoyu tarafından yakından takip ediliyor.

Washington yönetiminin açıklamaları, gelişmenin gerekçesi ve bölgedeki güvenlik politikası açısından önemli görülüyor.

İRAN'IN TEPKİSİ

İran yönetiminin gelişmeye ilişkin vereceği tepki ve yapacağı açıklamalar bölgedeki diplomatik sürecin seyri açısından önem taşıyor.

İran'ın atacağı olası diplomatik veya siyasi adımlar, ABD ile ilişkilerin geleceği açısından da takip edilecek.

BÖLGESEL GERİLİM

ABD ve İran arasındaki gerilim, Orta Doğu'daki güvenlik ve diplomasi gündemini doğrudan etkileyen başlıklar arasında bulunuyor.

Bölgede yaşanan her yeni gelişme, farklı ülkelerin güvenlik politikaları ve diplomatik ilişkileri açısından yakından değerlendiriliyor.

PETROL PİYASALARI TAKİPTE

Orta Doğu'daki gelişmeler enerji piyasaları tarafından da yakından izleniyor.

Petrol arzı, taşımacılık güzergahları ve bölgesel risklere ilişkin gelişmeler enerji piyasalarında beklentileri etkileyebiliyor.

DİPLOMATİK TEMASLAR ÖNEMLİ

Önümüzdeki süreçte ABD ve İran tarafından yapılacak açıklamalar ile diplomatik temaslar, gerilimin seyrine ilişkin önemli göstergeler arasında olacak.

Uluslararası aktörlerin bölgedeki gelişmelere ilişkin tutumları da diplomatik sürecin yönü açısından takip edilecek.

GELİŞMELER TAKİP EDİLİYOR

ABD ile İran arasındaki gerilime ilişkin yeni açıklamalar ve bölgedeki gelişmeler uluslararası kamuoyu tarafından yakından takip ediliyor.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       19 - İRAN TANKERLERİ
    ===================================================== */
    {
        id: 19,
        kategori: "Dünya",
        baslik: "ABD, 3 İran tankerini vurduğunu açıkladı",
        spot: "ABD yönetimi, İran'a ait üç tankerin vurulduğunu açıkladı. Gelişme bölgede artan gerilim nedeniyle uluslararası kamuoyunun gündemine taşındı.",
        tarih: "6 Eylül 2026",
        saat: "11:17",
        gorsel: "images/ChatGPT Image 6 Eyl 2026 19_44_18.png",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
ABD'DEN İRAN TANKERLERİNE İLİŞKİN AÇIKLAMA

ABD yönetimi, İran'a ait üç tankerin vurulduğunu açıkladı. Açıklamanın ardından gelişme uluslararası gündemin önemli başlıkları arasında yer aldı.

Tankerlerle ilgili gelişme, ABD ile İran arasındaki gerilimin yeniden gündeme gelmesine neden olurken, bölgedeki güvenlik durumu da yakından takip edilmeye başlandı.

GELİŞME DÜNYA GÜNDEMİNDE

Tankerlerle ilgili gelişme, ABD ile İran arasındaki ilişkilerde yeni bir gerilim başlığı oluşturdu.

Olayın ardından bölgedeki siyasi ve diplomatik gelişmelerin yanı sıra enerji piyasalarındaki olası etkiler de uluslararası kamuoyunun gündeminde bulunuyor.

ABD-İRAN GERİLİMİ

ABD ve İran arasındaki ilişkilerde yaşanan gerilim, Orta Doğu'daki güvenlik ve diplomasi gelişmelerinin yakından takip edilmesine neden oluyor.

İki ülke arasındaki açıklamalar ve karşılıklı mesajlar, bölgede tansiyonun nasıl ilerleyeceğine ilişkin önemli göstergeler arasında değerlendiriliyor.

BÖLGEDEKİ GELİŞMELER İZLENİYOR

Olayın ardından bölgedeki gelişmeler ve taraflardan gelecek yeni açıklamalar uluslararası kamuoyu tarafından takip ediliyor.

Bölgedeki güvenlik durumu, deniz taşımacılığı ve enerji akışına ilişkin gelişmeler de dikkatle izleniyor.

İRAN'IN TEPKİSİ BEKLENİYOR

İran yönetiminin gelişmeye ilişkin açıklaması ve vereceği tepkinin bölgedeki diplomatik sürecin seyri açısından önem taşıdığı değerlendiriliyor.

İran tarafından yapılacak açıklamaların ardından gelişmenin nasıl bir siyasi sonuç doğuracağı daha net şekilde ortaya çıkabilir.

ENERJİ GÜVENLİĞİ GÜNDEMDE

Orta Doğu'daki gelişmeler enerji güvenliği ve petrol taşımacılığı açısından da yakından izleniyor.

Deniz taşımacılığında yaşanabilecek güvenlik sorunları enerji arzı ve uluslararası ticaret açısından önem taşıyor.

DİPLOMATİK TEMASLAR

Bölgede tansiyonun düşürülmesine yönelik diplomatik girişimlerin önümüzdeki dönemde önem kazanması bekleniyor.

Uluslararası aktörlerin açıklamaları ve taraflar arasındaki temasların gerilimin geleceği açısından belirleyici olması bekleniyor.

GELİŞMELER TAKİP EDİLİYOR

Olayla ilgili yeni açıklamalar geldikçe gelişmeler uluslararası gündem doğrultusunda takip edilecek.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       18 - EKONOMİK YOL HARİTASI
    ===================================================== */
    {
        id: 18,
        kategori: "Ekonomi",
        baslik: "Ekonomide 3 yıllık yol haritası belli oluyor",
        spot: "Türkiye ekonomisinin önümüzdeki dönemde izleyeceği politikalara ilişkin 3 yıllık yol haritası gündemde. Yeni Orta Vadeli Program kapsamında büyüme, enflasyon, istihdam ve kamu maliyesine yönelik hedefler öne çıkıyor.",
        tarih: "6 Eylül 2026",
        saat: "11:01",
        gorsel: "images/ChatGPT Image 6 Eyl 2026 19_45_31.png",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Ekonomi Servisi",
        icerik: `
TÜRKİYE EKONOMİSİNDE YENİ DÖNEM

Türkiye ekonomisinin önümüzdeki üç yıllık dönemde izleyeceği politikalara ilişkin hedefler gündemde.

Yeni Orta Vadeli Program kapsamında ekonominin farklı alanlarına yönelik planlamaların ortaya konulması bekleniyor. Program kapsamında büyüme, enflasyon, istihdam ve kamu maliyesine ilişkin hedefler öne çıkıyor.

ENFLASYONLA MÜCADELE

Ekonomi politikalarının önemli başlıklarından biri enflasyonla mücadele olmaya devam ediyor.

Fiyat istikrarının sağlanmasına yönelik politikaların önümüzdeki dönemde de önemini koruması bekleniyor. Enflasyonun seyri, vatandaşların satın alma gücü ve işletmelerin maliyetleri açısından yakından takip ediliyor.

BÜYÜME VE İSTİHDAM

Ekonomik büyümenin sürdürülebilir şekilde devam ettirilmesi ve istihdamın desteklenmesi programın önemli başlıkları arasında değerlendiriliyor.

Üretim kapasitesinin korunması ve ekonomik faaliyetlerin devamlılığının sağlanması, büyüme politikalarının temel unsurları arasında bulunuyor.

KAMU MALİYESİ

Kamu harcamaları, bütçe dengesi ve mali disiplin ekonomik planlamanın önemli unsurları arasında bulunuyor.

Kamu maliyesindeki gelişmeler, ekonominin genel görünümü ve önümüzdeki dönemde uygulanacak politikalar açısından yakından takip ediliyor.

YATIRIM VE ÜRETİM

Üretim kapasitesinin artırılması, yatırımların desteklenmesi ve ekonomik faaliyetlerin güçlendirilmesine yönelik politikalar da gündemde.

Yatırım ortamının geliştirilmesi ve üretimin desteklenmesi, ekonomik büyümenin sürdürülebilirliği açısından önemli başlıklar arasında yer alıyor.

İHRACAT VE DIŞ TİCARET

Türkiye ekonomisinin dış ticaret performansı da ekonomik gündemin önemli unsurlarından biri olarak öne çıkıyor.

İhracatın artırılması, dış ticaret dengesinin geliştirilmesi ve küresel ekonomik gelişmelerin takip edilmesi önümüzdeki dönemin ekonomik gündeminde önem taşıyor.

PİYASALARIN TAKİBİ

Açıklanacak ekonomik hedeflerin ardından piyasaların göstereceği tepki ve ekonomik verilerin seyri yakından izlenecek.

Enflasyon, büyüme, istihdam ve kamu maliyesine ilişkin veriler, ekonominin genel görünümünü değerlendirmek açısından önem taşıyor.

ÖNÜMÜZDEKİ ÜÇ YIL

Yeni ekonomik yol haritasının önümüzdeki üç yıllık dönemde uygulanacak politikalar açısından önemli bir çerçeve oluşturması bekleniyor.

Programda yer alacak hedeflerin gerçekleşme durumu, açıklanacak ekonomik veriler ve uygulanan politikaların sonuçları üzerinden takip edilecek.

HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       17 - İRAN EKONOMİK SAVAŞ KARARGÂHI
    ===================================================== */
    {
        id: 17,
        kategori: "Dünya",
        baslik: "İran'da 'Ekonomik Savaş Karargâhı' kuruldu",
        spot: "İran'da ekonomik baskıların yönetilmesi amacıyla 'Ekonomik Savaş Karargâhı' kurulduğu açıklandı. Yeni yapılanmanın ekonomik faaliyetler ve kritik sektörler arasında koordinasyon sağlaması bekleniyor.",
        tarih: "6 Eylül 2026",
        saat: "10:23",
        gorsel: "images/ChatGPT Image 6 Eyl 2026 19_46_53.png",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
İRAN'DA YENİ EKONOMİK YAPILANMA

İran'da ekonomik baskılara karşı alınacak önlemlerin koordinasyonu amacıyla 'Ekonomik Savaş Karargâhı' adı verilen yeni bir yapılanmanın kurulduğu açıklandı.

Yeni yapılanmanın İran ekonomisindeki gelişmelerin daha yakından takip edilmesi ve ilgili kurumlar arasında koordinasyon sağlanması amacıyla oluşturulduğu belirtiliyor.

YAPILANMANIN AMACI

Yeni yapının ekonomik gelişmelerin daha yakından takip edilmesi, karar alma süreçlerinin koordinasyonunun sağlanması ve ekonomik baskılara karşı alınabilecek önlemlerin değerlendirilmesi amacıyla çalışması bekleniyor.

Ekonomik koşulların değiştiği dönemlerde kurumlar arasında koordinasyonun artırılması, alınabilecek önlemlerin daha hızlı değerlendirilmesine imkan sağlayabiliyor.

KRİTİK SEKTÖRLER TAKİP EDİLECEK

Enerji, ticaret ve finans gibi ekonominin kritik alanlarındaki gelişmelerin yeni yapılanma tarafından takip edilmesi bekleniyor.

Bu sektörlerde meydana gelebilecek gelişmelerin İran ekonomisi üzerindeki etkileri, ülkenin ekonomik gündemi açısından önem taşıyor.

DIŞ BASKILAR

İran ekonomisi üzerindeki dış baskılar ve yaptırımlar ülkenin ekonomik gündeminde önemli bir yer tutuyor.

Uluslararası yaptırımların ticaret, finans ve enerji sektörleri üzerindeki etkileri uzun süredir İran'ın ekonomik politikalarında dikkate alınan başlıklar arasında bulunuyor.

BÖLGESEL GELİŞMELER

İran'daki ekonomik gelişmeler, ülkenin bölgesel politikaları ve uluslararası ilişkileriyle birlikte değerlendiriliyor.

Orta Doğu'daki siyasi ve güvenlik gelişmeleri de İran ekonomisinin geleceği açısından yakından takip edilen konular arasında bulunuyor.

ENERJİ SEKTÖRÜNÜN ÖNEMİ

İran ekonomisinde enerji sektörü önemli bir yere sahip bulunuyor. Petrol ve enerji ticaretine ilişkin gelişmeler ülkenin ekonomik görünümü açısından yakından izleniyor.

Enerji piyasalarındaki küresel gelişmeler ve bölgesel güvenlik koşulları İran'ın ekonomik gündemini etkileyebilecek unsurlar arasında yer alıyor.

ÖNÜMÜZDEKİ SÜREÇ

Yeni yapılanmanın çalışmaları, alınacak kararlar ve İran ekonomisi üzerindeki olası etkileri önümüzdeki dönemde yakından takip edilecek.

İran yönetiminin ekonomik baskılara karşı uygulayacağı politikalar ve uluslararası gelişmeler sürecin önemli başlıkları arasında olacak.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       16 - BURSA ZİNCİRLEME KAZA
    ===================================================== */
    {
        id: 16,
        kategori: "Gündem",
        baslik: "Tırdan dökülen mazot 10 aracı birbirine kattı",
        spot: "Bursa'da bir tırdan yola dökülen mazot nedeniyle kayganlaşan yolda zincirleme kaza meydana geldi. Yaklaşık 10 aracın karıştığı olayın ardından ekipler bölgede çalışma başlattı.",
        tarih: "6 Eylül 2026",
        saat: "09:53",
        gorsel: "images/ChatGPT Image 6 Eyl 2026 19_48_08.png",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
BURSA'DA ZİNCİRLEME KAZA

Bursa'da yola dökülen mazot nedeniyle kayganlaşan zeminde zincirleme kaza meydana geldi.

Kazaya yaklaşık 10 aracın karıştığı bildirilirken, olayın ardından bölgeye ilgili ekipler sevk edildi. Ekipler hem yol güvenliğinin sağlanması hem de kaygan zeminin temizlenmesi için çalışma başlattı.

YOL KAYGANLAŞTI

Bir tırdan yola dökülen mazot, yol yüzeyinin kayganlaşmasına neden oldu.

Mazot gibi maddelerin yol yüzeyine dökülmesi, araçların yol tutuşunu olumsuz etkileyebiliyor. Özellikle sürücülerin ani fren veya manevra yapması gereken durumlarda kaygan zemin kaza riskini artırabiliyor.

10 ARAÇ KAZAYA KARIŞTI

Kayganlaşan yolda meydana gelen zincirleme kazada yaklaşık 10 aracın birbirine karıştığı bildirildi.

Olayın ardından trafik akışında aksama yaşanırken, ekipler bölgedeki güvenlik önlemlerini artırdı.

EKİPLER BÖLGEYE SEVK EDİLDİ

İhbar üzerine bölgeye ilgili ekipler yönlendirilirken, yol güvenliğinin sağlanması ve dökülen maddenin temizlenmesi için çalışma başlatıldı.

Kaza bölgesinde araçların güvenli şekilde kaldırılması ve yolun yeniden trafiğe uygun hale getirilmesi için çalışmalar yürütüldü.

SÜRÜCÜLERE UYARI

Yetkililer, yol yüzeyindeki kayganlık nedeniyle sürücülerin dikkatli olması gerektiğini hatırlatıyor.

Özellikle yağışlı hava veya yola dökülen yağ ve yakıt gibi maddelerin bulunduğu bölgelerde sürücülerin hızlarını azaltması ve takip mesafesini koruması önem taşıyor.

TRAFİK GÜVENLİĞİ

Karayollarında güvenli ulaşım için yol koşullarının takip edilmesi büyük önem taşıyor.

Yola dökülen yakıt veya benzeri maddelerin kısa sürede temizlenmesi, yeni kazaların meydana gelme riskinin azaltılması açısından önemli bir güvenlik adımı olarak değerlendiriliyor.

İNCELEME BAŞLATILDI

Kazanın meydana geliş şekli ve yola mazot dökülmesine ilişkin ayrıntıların belirlenmesi amacıyla inceleme başlatıldığı bildirildi.

Kazayla ilgili resmi kurumların yapacağı açıklamalar olayın ayrıntılarının netleşmesi açısından önem taşıyor.

YOL TRAFİĞE AÇILDIKTAN SONRA DA DİKKAT GEREKİYOR

Yolun temizlenmesi ve trafik akışının yeniden sağlanmasının ardından sürücülerin bölgede dikkatli olması gerekiyor.

Yetkililerin trafik işaretleri ve yönlendirmelerine uyulması, olası yeni kazaların önlenmesine katkı sağlayabilir.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       15 - SERHAT MUSTAFA KILIÇ
    ===================================================== */
    {
        id: 15,
        kategori: "Magazin",
        baslik: "Ünlü oyuncu Serhat Mustafa Kılıç hayatını kaybetti",
        spot: "Tiyatro, sinema ve televizyon dünyasının tanınan isimlerinden Serhat Mustafa Kılıç, 51 yaşında hayatını kaybetti. Oyuncunun İstanbul Kağıthane'deki evinde yaşamını yitirdiği öğrenildi.",
        tarih: "6 Eylül 2026",
        saat: "17:40",
        gorsel: "images/SERHAT.jpeg",
        kaynak: "HABERİSTA",
        yazar: "Haberİsta Magazin Servisi",
        icerik: `
SERHAT MUSTAFA KILIÇ HAYATINI KAYBETTİ

Tiyatro, sinema ve televizyon dünyasının tanınan isimlerinden Serhat Mustafa Kılıç'ın 51 yaşında hayatını kaybettiği öğrenildi.

Oyuncunun İstanbul Kağıthane'deki evinde yaşamını yitirdiği bilgisi gündeme gelirken, olayla ilgili ayrıntıların resmi açıklamalar doğrultusunda netleşmesi bekleniyor.

SANAT DÜNYASINDA ÜZÜNTÜ

Kılıç'ın vefat haberi sanat dünyasında üzüntüyle karşılandı.

Tiyatro, televizyon ve sinema alanlarında çalışmalar gerçekleştiren oyuncunun vefatının ardından sanat camiasından taziye mesajlarının paylaşılması bekleniyor.

TİYATRO KARİYERİ

Serhat Mustafa Kılıç, sanat hayatı boyunca tiyatro sahnesinde çeşitli çalışmalarda yer aldı.

Tiyatro oyunculuğu, sahne disiplini ve canlı performans gerektiren yapısıyla sanatçıların kariyerlerinde önemli bir yere sahip olurken, Kılıç da oyunculuk çalışmalarını farklı projelerle sürdürdü.

TELEVİZYON ÇALIŞMALARI

Oyuncunun televizyon projelerinde de yer aldığı ve geniş bir izleyici kitlesi tarafından tanındığı belirtildi.

Televizyon yapımları sayesinde farklı karakterleri canlandıran oyuncu, ekran çalışmalarını sanat kariyerinin önemli bölümlerinden biri olarak sürdürdü.

SİNEMA KARİYERİ

Kılıç, sinema alanında da çeşitli yapımlarda rol alarak oyunculuk kariyerini farklı mecralarda sürdürdü.

Sinema ve televizyon projelerinde yer almak, oyuncuların farklı anlatım biçimleri ve karakterlerle izleyici karşısına çıkmasını sağlıyor.

OYUNCULUK KARİYERİ

Sanat dünyasında uzun yıllar çalışan oyuncular, tiyatro sahnesinden televizyon ekranlarına ve sinemaya kadar farklı alanlarda izleyiciyle buluşabiliyor.

Serhat Mustafa Kılıç'ın da kariyerinde farklı sanat alanlarında çalışmalar yaptığı ve oyunculuk faaliyetlerini sürdürdüğü ifade edildi.

ÖLÜM NEDENİNE İLİŞKİN KESİN BİLGİ BEKLENİYOR

Vefatın nedenine ilişkin kesin ve doğrulanmış bilgilerin resmi açıklamalarla netleşmesi bekleniyor.

Haberİsta olarak doğrulanmamış iddiaların kesin bilgi gibi aktarılmaması gerektiğini, özellikle vefat haberlerinde resmi açıklamaların esas alınmasının önem taşıdığını belirtiyoruz.

CENAZE PROGRAMI

Cenaze töreninin tarih ve yeriyle ilgili yapılacak resmi açıklamaların takip edilmesi bekleniyor.

Cenaze programına ilişkin bilgiler kesinleştiğinde sanat dünyası ve sevenleri tarafından yakından takip edilecek.

SANAT DÜNYASINDAN TAZİYE

Kılıç'ın vefatının ardından meslektaşlarının, sanat dünyasından isimlerin ve sevenlerinin başsağlığı mesajları paylaşması bekleniyor.

Oyuncunun kariyerine ilişkin bilgiler ve geçmiş çalışmalarının da vefat haberinin ardından yeniden gündeme gelmesi bekleniyor.

ÖNEMLİ NOT

Haberİsta, doğrulanmamış iddialar yerine resmi açıklamalar ve güvenilir kaynaklardan elde edilen bilgileri esas almaktadır.

HABERİSTA Magazin Servisi
        `
    },

    /* =====================================================
       14 - SEL VE HEYELAN
    ===================================================== */
    {
        id: 14,
        kategori: "Gündem",
        baslik: "4 il için sel ve heyelan uyarısı",
        spot: "Meteoroloji tarafından 4 il için kuvvetli yağış, sel ve heyelan riskine karşı uyarı yapıldı. Vatandaşların dikkatli ve tedbirli olması istendi.",
        tarih: "6 Eylül 2026",
        saat: "12:10",
        gorsel: "images/meteroji.jpeg",
        kaynak: "HABERİSTA",
        yazar: "HaberİSTA Haber Merkezi",
        icerik: `
4 İL İÇİN SEL VE HEYELAN UYARISI

Meteoroloji tarafından dört il için kuvvetli yağış, sel ve heyelan riskine karşı uyarı yapıldı.

Kuvvetli yağış beklentisi nedeniyle vatandaşların hava durumunu yakından takip etmesi ve özellikle riskli bölgelerde dikkatli olması istendi.

SEL RİSKİNE DİKKAT

Kuvvetli yağışların bazı bölgelerde kısa sürede su baskınlarına yol açabileceği belirtiliyor.

Dere yatakları, su birikintilerinin oluşabileceği bölgeler ve altyapının yetersiz kalabileceği alanlarda vatandaşların daha dikkatli olması önem taşıyor.

HEYELAN TEHLİKESİ

Yağışların etkili olduğu eğimli ve toprak yapısının hassas olduğu bölgelerde heyelan riskinin artabileceği değerlendiriliyor.

Özellikle yamaç ve eğimli bölgelerde yaşayan vatandaşların meteorolojik uyarıları takip etmesi ve yetkililerin yönlendirmelerine uyması gerekiyor.

SÜRÜCÜLERE UYARI

Yağış sırasında görüş mesafesi azalabilir ve yollar kayganlaşabilir.

Sürücülerin hızlarını yol ve hava şartlarına göre ayarlaması, takip mesafesini koruması ve ani manevralardan kaçınması önem taşıyor.

HAVA DURUMU YAKINDAN TAKİP EDİLMELİ

Meteorolojik koşullar kısa süre içerisinde değişebildiği için vatandaşların güncel hava durumu bilgilerini takip etmesi gerekiyor.

Resmi meteoroloji uyarılarının düzenli şekilde kontrol edilmesi, olası risklere karşı zamanında tedbir alınmasına yardımcı olabilir.

VATANDAŞLAR TEDBİRLİ OLMALI

Vatandaşların meteorolojik uyarıları takip etmesi ve riskli bölgelerde gerekli tedbirleri alması isteniyor.

Özellikle kuvvetli yağış sırasında zorunlu olmadıkça riskli bölgelerde bulunulmaması ve güvenlik uyarılarına uyulması önem taşıyor.

ULAŞIMDA AKSAMALAR YAŞANABİLİR

Kuvvetli yağışların bazı bölgelerde ulaşım üzerinde de etkili olabileceği değerlendiriliyor.

Su birikintileri, taşkınlar veya heyelan nedeniyle bazı yolların geçici olarak etkilenmesi mümkün olduğundan sürücülerin yol ve hava durumunu kontrol ederek hareket etmesi gerekiyor.

RESMİ UYARILAR TAKİP EDİLMELİ

Yağışların seyri ve uyarıların güncellenip güncellenmediği resmi meteoroloji kaynaklarından takip edilmeli.

Yetkililer tarafından yapılabilecek yeni açıklamalar, vatandaşların alacağı tedbirler açısından önem taşıyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       13 - SON DEPREMLER
    ===================================================== */
    {
        id: 13,
        kategori: "Türkiye",
        baslik: "Son depremler: AFAD ve Kandilli verileri güncellendi",
        spot: "Türkiye'nin farklı bölgelerinde meydana gelen depremlere ilişkin AFAD ve Kandilli Rasathanesi tarafından paylaşılan veriler güncellenmeye devam ediyor.",
        tarih: "6 Eylül 2026",
        saat: "11:55",
        gorsel: "images/deprem.jpeg",
        kaynak: "AFAD / Kandilli Rasathanesi",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
SON DEPREMLER LİSTESİ GÜNCELLENİYOR

Türkiye'nin farklı bölgelerinde meydana gelen depremlere ilişkin veriler AFAD ve Kandilli Rasathanesi tarafından paylaşılmaya devam ediyor.

Deprem verileri arasında sarsıntının meydana geldiği bölge, büyüklüğü, derinliği ve zamanı gibi bilgiler yer alıyor.

DEPREM VERİLERİ TAKİP EDİLİYOR

Depremlerin büyüklüğü, derinliği ve merkez üssü gibi bilgiler resmi kurumların yayımladığı veriler üzerinden takip ediliyor.

Deprem ölçümlerinde farklı kurumların kullandığı yöntemler nedeniyle bazı değerlerde değişiklik görülebileceğinden, vatandaşların resmi kurumların güncel verilerini esas alması önem taşıyor.

AFAD VERİLERİ

AFAD tarafından paylaşılan son deprem verileri, meydana gelen sarsıntıların zaman ve konum bilgileriyle birlikte kamuoyuna sunuluyor.

AFAD'ın deprem bilgilendirme sistemi, Türkiye ve çevresinde meydana gelen sismik hareketlerin takip edilmesi açısından önemli kaynaklardan biri olarak kullanılıyor.

KANDİLLİ RASATHANESİ

Kandilli Rasathanesi de Türkiye ve çevresindeki sismik hareketlere ilişkin verileri düzenli olarak yayımlıyor.

Vatandaşlar meydana gelen depremlere ilişkin büyüklük, derinlik ve merkez üssü gibi bilgileri ilgili kurumların sistemlerinden takip edebiliyor.

DEPREM SONRASI NE YAPILMALI?

Deprem sırasında ve sonrasında resmi kurumların uyarılarının takip edilmesi önem taşıyor.

Vatandaşların güvenli alanlara geçmesi, hasarlı yapılardan uzak durması ve gerekli durumlarda acil yardım ekipleriyle iletişim kurması gerekiyor.

ARTÇI SARSINTILAR

Depremlerin ardından artçı sarsıntılar meydana gelebileceğinden vatandaşların resmi açıklamaları takip etmesi gerekiyor.

Özellikle hasar görmüş yapılara yeniden girilmemesi ve yetkili ekiplerin değerlendirmelerinin beklenmesi güvenlik açısından önem taşıyor.

DEPREM BİLİNCİ ÖNEMLİ

Deprem riski bulunan bölgelerde yaşayan vatandaşların deprem öncesinde, sırasında ve sonrasında yapılması gerekenler konusunda bilgi sahibi olması büyük önem taşıyor.

Acil durum planlarının bilinmesi ve resmi kurumların hazırladığı bilgilendirmelerin takip edilmesi afetlere hazırlık açısından fayda sağlayabilir.

RESMİ KAYNAKLAR TAKİP EDİLMELİ

Deprem büyüklüğü ve konumuna ilişkin en güncel bilgilerin AFAD ve Kandilli Rasathanesi gibi resmi ve güvenilir kaynaklardan kontrol edilmesi önem taşıyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       12 - KPSS
    ===================================================== */
    {
        id: 12,
        kategori: "Eğitim",
        baslik: "2026 KPSS Lisans Genel Yetenek-Genel Kültür sınavı yapıldı",
        spot: "2026 KPSS Lisans Genel Yetenek-Genel Kültür oturumu gerçekleştirildi. Adaylar sınavın ardından sonuç takvimini ve değerlendirme sürecini takip etmeye başladı.",
        tarih: "6 Eylül 2026",
        saat: "10:15",
        gorsel: "images/kpss.jpeg",
        kaynak: "ÖSYM",
        yazar: "Haberİsta Eğitim Servisi",
        icerik: `
2026 KPSS LİSANS SINAVI GERÇEKLEŞTİRİLDİ

2026 KPSS Lisans Genel Yetenek-Genel Kültür oturumu gerçekleştirildi.

Sınava katılan adaylar sınav sürecinin tamamlanmasının ardından sonuç takvimini ve ÖSYM tarafından yapılacak açıklamaları takip etmeye başladı.

ADAYLAR SINAVDA TER DÖKTÜ

Adaylar sınav merkezlerinde belirlenen saatlerde sınava katılırken, sınav süreci ÖSYM tarafından açıklanan kurallar doğrultusunda yürütüldü.

KPSS, kamu kurumlarında görev almak isteyen adaylar açısından önemli sınavlardan biri olarak öne çıkıyor.

SINAV SÜRECİ

Genel Yetenek ve Genel Kültür oturumunda adaylara ilgili testler uygulanırken, sınavın ardından cevap anahtarı ve değerlendirme sürecine ilişkin açıklamalar takip ediliyor.

Adayların sınav sonrasında sonuçların açıklanacağı tarihi ve ÖSYM'nin duyurularını takip etmesi gerekiyor.

SINAV SONUÇLARI BEKLENİYOR

Adaylar sınav sonuçlarının açıklanacağı tarihi ÖSYM'nin resmi sınav takvimi üzerinden takip edecek.

Sonuçların açıklanmasının ardından adaylar kendi puanlarını ve ilgili sınav sonuç bilgilerini ÖSYM sistemi üzerinden görüntüleyebilecek.

DEĞERLENDİRME SÜRECİ

Sınav sonuçlarının değerlendirilmesinin ardından adayların puanları ve başarı sıralamaları açıklanacak.

Değerlendirme işlemleri ÖSYM tarafından belirlenen kurallar ve sınav sistemi kapsamında gerçekleştirilecek.

PUANLARIN KULLANIMI

KPSS puanları, ilgili kurumların personel alım süreçlerinde ve mevzuatta belirtilen şartlar doğrultusunda kullanılabiliyor.

Adayların tercih veya başvuru yapmadan önce ilgili kurum tarafından açıklanan başvuru şartlarını dikkatli şekilde incelemesi önem taşıyor.

SONUÇLAR İÇİN RESMİ KAYNAK

Sınav sonuçları ve sınav takvimiyle ilgili en güncel bilgilerin ÖSYM'nin resmi duyurularından takip edilmesi gerekiyor.

Sosyal medya veya doğrulanmamış internet kaynaklarında yayılan bilgilerin yerine resmi açıklamaların esas alınması önem taşıyor.

ADAYLARA BAŞARILAR

Haberİsta olarak 2026 KPSS Lisans Genel Yetenek-Genel Kültür oturumuna katılan tüm adaylara sonuç sürecinde başarılar diliyoruz.

HABERİSTA Eğitim Servisi
        `
    },

    /* =====================================================
       11 - BEŞİKTAŞ FENERBAHÇE
    ===================================================== */
    {
        id: 11,
        kategori: "Spor",
        baslik: "Beşiktaş derbide Fenerbahçe'yi 2-1 mağlup etti",
        spot: "İstanbul derbisinde Beşiktaş, Fenerbahçe'yi 2-1 mağlup ederek önemli bir galibiyet aldı.",
        tarih: "6 Eylül 2026",
        saat: "00:20",
        gorsel: "images/bjkfb.jpeg",
        kaynak: "Spor Servisi",
        yazar: "Haberİsta Spor Servisi",
        icerik: `
DERBİDE KAZANAN BEŞİKTAŞ

İstanbul derbisinde Beşiktaş ile Fenerbahçe karşı karşıya geldi.

Mücadeleyi Beşiktaş 2-1'lik skorla kazanarak önemli bir galibiyet elde etti. Karşılaşmanın sonucu spor kamuoyunda geniş şekilde takip edildi.

MAÇTA BÜYÜK HEYECAN

İki takımın karşılaşması boyunca mücadele yüksek tempoda devam ederken, taraftarların ilgisi de dikkat çekti.

Derbi karşılaşmaları iki takımın lig hedefleri açısından olduğu kadar taraftarlar ve futbol kamuoyu açısından da büyük önem taşıyor.

BEŞİKTAŞ'TAN ÖNEMLİ GALİBİYET

Beşiktaş aldığı üç puanla lig yarışında önemli bir sonuç elde etti.

Siyah-beyazlı ekip karşılaşmanın ardından galibiyetin sevincini yaşarken, elde edilen sonuç takımın sezon hedefleri açısından da değerlendirildi.

FENERBAHÇE MÜCADELEYİ SÜRDÜRDÜ

Fenerbahçe sahadan mağlubiyetle ayrılırken sezon hedefleri doğrultusunda mücadelesine devam ediyor.

Sarı-lacivertli takımın önümüzdeki karşılaşmalarda alacağı sonuçlar lig yarışındaki konumu açısından önem taşıyacak.

TARAFTARLARDAN BÜYÜK İLGİ

Derbi öncesinde ve karşılaşma sırasında iki takım taraftarlarının ilgisi dikkat çekti.

İstanbul derbileri Türk futbolunun en fazla takip edilen karşılaşmaları arasında yer alırken, maç sonucu spor gündeminin önemli başlıklarından biri oldu.

LİG YARIŞI

Derbiden alınan üç puanın iki takımın sezon hedefleri açısından önemli olduğu değerlendiriliyor.

Lig yarışının uzun bir maraton olması nedeniyle takımların önümüzdeki haftalarda elde edeceği sonuçlar puan tablosunun şekillenmesinde belirleyici olacak.

ÖNÜMÜZDEKİ MAÇLAR

Her iki takım da sezonun kalan bölümünde lig ve diğer organizasyonlardaki mücadelelerine devam edecek.

Beşiktaş galibiyetin ardından formunu sürdürmek isterken, Fenerbahçe de önündeki karşılaşmalarda yeniden puan toplamayı hedefleyecek.

HABERİSTA Spor Servisi
        `
    },

    /* =====================================================
       10 - ALTIN FİYATLARI
    ===================================================== */
    {
        id: 10,
        kategori: "Ekonomi",
        baslik: "Altın fiyatlarında 6 Eylül hareketliliği",
        spot: "Altın piyasasında yeni haftaya ilişkin beklentiler yatırımcıların gündeminde. Gram altın, çeyrek altın ve ons altındaki hareketlilik yakından takip ediliyor.",
        tarih: "6 Eylül 2026",
        saat: "09:30",
        gorsel: "images/altın.jpeg",
        kaynak: "HABERİSTA Ekonomi",
        yazar: "Haberİsta Ekonomi Servisi",
        icerik: `
ALTIN FİYATLARINDA HAREKETLİLİK

Altın piyasasındaki fiyat hareketleri yatırımcıların ve vatandaşların gündemindeki yerini koruyor.

Küresel piyasalardaki gelişmeler ve iç piyasadaki hareketlilik altın fiyatlarının seyri açısından yakından izleniyor.

GRAM ALTIN TAKİP EDİLİYOR

Türkiye'de yatırımcıların yakından takip ettiği gram altın fiyatı, ons altındaki hareketler ve döviz kurundaki değişimlerden etkilenebiliyor.

Bu nedenle gram altın fiyatını takip eden vatandaşların yalnızca tek bir göstergeye değil, küresel ve yerel piyasalardaki gelişmelere birlikte bakması gerekiyor.

ÇEYREK ALTIN

Fiziki altın talebi nedeniyle çeyrek altın fiyatları da vatandaşlar tarafından yakından takip ediliyor.

Çeyrek altının fiyatı gün içerisinde piyasa koşullarına bağlı olarak değişebiliyor. Kuyumcu ve piyasa fiyatları arasında dönemsel farklılıklar görülebileceği için işlem öncesinde güncel fiyatın kontrol edilmesi önem taşıyor.

ONS ALTIN

Küresel piyasalarda ons altının seyri, Türkiye'deki altın fiyatlaması açısından önemli göstergeler arasında bulunuyor.

Ons altının hareketi, doların seyri ve küresel ekonomik beklentiler altın piyasasında yatırımcıların takip ettiği başlıca unsurlar arasında yer alıyor.

PİYASALARDA GÖZLER EKONOMİK VERİLERDE

ABD ekonomisine ilişkin açıklanacak veriler ve merkez bankalarının para politikaları altın piyasasının yönü açısından yakından takip ediliyor.

Faiz beklentileri, küresel ekonomik görünüm ve piyasalardaki risk algısı altına yönelik yatırımcı davranışlarını etkileyebiliyor.

ALTIN NEDEN TAKİP EDİLİYOR?

Altın, Türkiye'de hem yatırım amacıyla hem de fiziki birikim aracı olarak vatandaşlar tarafından uzun süredir takip ediliyor.

Gram altın, çeyrek altın ve diğer altın türlerinin fiyatları farklı piyasa koşullarına göre değişiklik gösterebiliyor.

YATIRIMCILAR TEMKİNLİ

Altın fiyatlarındaki kısa vadeli hareketlerin piyasa koşullarına göre değişebileceği belirtiliyor.

Yatırım kararlarının kişisel finansal koşullar ve risk durumu dikkate alınarak değerlendirilmesi önem taşıyor.

ÖNEMLİ NOT

Altın fiyatları gün içerisinde değişebildiği için işlem öncesinde güncel fiyatların yetkili piyasa ve finans kuruluşlarından kontrol edilmesi gerekiyor.

Bu içerik yatırım tavsiyesi niteliğinde değildir.

HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       9 - AKARYAKIT
    ===================================================== */
    {
        id: 9,
        kategori: "Ekonomi",
        baslik: "Akaryakıt fiyatları yeniden gündemde",
        spot: "Benzin, motorin ve LPG fiyatlarındaki değişimler sürücülerin gündemindeki yerini koruyor. Küresel petrol fiyatları ve döviz kuru yakından takip ediliyor.",
        tarih: "6 Eylül 2026",
        saat: "09:10",
        gorsel: "images/yakıt.jpeg",
        kaynak: "HABERİSTA Ekonomi",
        yazar: "Haberİsta Ekonomi Servisi",
        icerik: `
AKARYAKIT FİYATLARI GÜNDEMDE

Benzin, motorin ve LPG fiyatlarındaki değişimler araç sahipleri tarafından yakından takip ediliyor.

Akaryakıt fiyatlarındaki hareketlilik yalnızca bireysel araç kullanıcılarını değil, taşımacılık ve lojistik sektörünü de yakından ilgilendiriyor.

PETROL FİYATLARI ETKİLİ OLUYOR

Küresel petrol piyasalarında yaşanan hareketlilik, akaryakıt fiyatlarının oluşumunda önemli unsurlardan biri olarak öne çıkıyor.

Uluslararası petrol fiyatlarında meydana gelen değişiklikler, enerji piyasaları ve akaryakıt maliyetleri açısından takip edilen göstergeler arasında bulunuyor.

DÖVİZ KURU DA ÖNEMLİ

Türkiye'de akaryakıt fiyatlarının oluşumunda döviz kuru ve uluslararası petrol fiyatları önemli faktörler arasında bulunuyor.

Döviz kurundaki hareketlilik ile küresel enerji fiyatlarının birlikte değerlendirilmesi, akaryakıt piyasasındaki değişimlerin anlaşılması açısından önem taşıyor.

SÜRÜCÜLER GÜNCEL FİYATLARI TAKİP EDİYOR

Akaryakıt istasyonlarındaki fiyatlar şehir, dağıtıcı ve dönemsel değişikliklere göre farklılık gösterebiliyor.

Bu nedenle araç sahiplerinin yakıt alımı öncesinde güncel istasyon fiyatlarını kontrol etmesi önem taşıyor.

ULAŞIM MALİYETLERİ

Akaryakıt fiyatlarındaki değişimler bireysel araç kullanıcılarının yanı sıra taşımacılık ve lojistik sektörünü de etkileyebiliyor.

Yakıt maliyetlerinin artması veya azalması, ürün ve hizmetlerin taşınma maliyetleri üzerinde de etkili olabiliyor.

TOPLU TAŞIMA VE GÜNLÜK YAŞAM

Akaryakıt fiyatlarındaki değişimler ulaşım maliyetleri açısından vatandaşların günlük yaşamını da ilgilendiren konular arasında bulunuyor.

Özellikle şehirler arası ulaşım ve taşımacılık faaliyetlerinde yakıt maliyetleri önemli gider kalemlerinden biri olarak öne çıkıyor.

PİYASALAR İZLENİYOR

Önümüzdeki dönemde petrol fiyatları, döviz hareketleri ve küresel ekonomik gelişmelerin akaryakıt piyasasının seyri açısından belirleyici olması bekleniyor.

Vatandaşların güncel fiyatları güvenilir kaynaklardan takip etmesi önem taşıyor.

HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       8 - RUSYA'DA TARİHİ TANK
    ===================================================== */
    {
        id: 8,
        kategori: "Dünya",
        baslik: "Rusya'da üniversitenin altında Nazi tankı bulundu",
        spot: "Rusya'da yapılan çalışmalar sırasında bir üniversite yapısının altında İkinci Dünya Savaşı dönemine ait olduğu değerlendirilen bir tank bulundu.",
        tarih: "6 Eylül 2026",
        saat: "08:45",
        gorsel: "images/rusya ünüversite.jpeg",
        kaynak: "Dünya Servisi",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
RUSYA'DA TARİHİ BULUNTU

Rusya'da gerçekleştirilen çalışmalar sırasında bir üniversite yapısının altında İkinci Dünya Savaşı dönemine ait olduğu değerlendirilen bir tank bulundu.

Buluntunun ortaya çıkarılması, bölgenin geçmişine ve tankın bulunduğu alandaki tarihi gelişmelere ilişkin araştırmaların yeniden gündeme gelmesine neden oldu.

TANKIN TARİHİ ARAŞTIRILIYOR

Bulunan askeri aracın hangi dönemde ve hangi koşullarda bölgeye getirildiğine ilişkin araştırmalar yürütülüyor.

Tankın modelinin, üretim döneminin ve geçmişte hangi amaçla kullanıldığının belirlenmesi için yapılacak incelemelerin buluntunun tarihsel öneminin ortaya çıkarılmasına katkı sağlaması bekleniyor.

İKİNCİ DÜNYA SAVAŞI DÖNEMİ

Tankın İkinci Dünya Savaşı yıllarından kaldığının belirlenmesi halinde buluntu, dönemin askeri tarihi açısından dikkat çekici bir örnek oluşturacak.

İkinci Dünya Savaşı sırasında kullanılan askeri araçlar, savaş döneminin teknolojisi ve askeri hareketliliği hakkında önemli bilgiler sağlayabiliyor.

ÜNİVERSİTE ALTINDA BULUNDU

Tankın bir üniversite yapısının altında ortaya çıkarılması buluntunun en dikkat çekici ayrıntılarından biri oldu.

Bir yapının altında tarihi askeri aracın bulunması, aracın bölgeye nasıl getirildiği ve daha sonra neden bulunduğu yerde kaldığı konusunda araştırma yapılmasını gerektiriyor.

UZMANLAR İNCELİYOR

Tarihi askeri araç üzerinde yapılacak incelemelerle modelinin ve geçmişinin daha ayrıntılı şekilde belirlenmesi bekleniyor.

Uzmanların yapacağı araştırmalar, tankın üretim tarihi ve kullanım geçmişine ilişkin yeni bilgilerin ortaya çıkmasına yardımcı olabilir.

TARİHİ DEĞERİ ARAŞTIRILIYOR

Tarihi askeri araçların korunması, geçmiş dönemlere ilişkin bilgilerin gelecek nesillere aktarılması açısından önem taşıyor.

Buluntunun korunması ve tarihsel değerinin belirlenmesi için uzmanların değerlendirmesinin önemli olduğu belirtiliyor.

GELİŞMELER TAKİP EDİLİYOR

Tankın geçmişine ilişkin yeni bilgiler ortaya çıktıkça konuya ilişkin açıklamaların kamuoyuyla paylaşılması bekleniyor.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       7 - MXGP AFYON
    ===================================================== */
    {
        id: 7,
        kategori: "Spor",
        baslik: "MXGP şampiyonu Afyon'da belli oluyor",
        spot: "Dünyanın önemli motokros organizasyonlarından MXGP'de sezonun kritik yarışlarından biri Afyonkarahisar'da gerçekleştiriliyor.",
        tarih: "6 Eylül 2026",
        saat: "08:30",
        gorsel: "images/mxgp yarışması.jpeg",
        kaynak: "Türkiye Motosiklet Federasyonu",
        yazar: "Haberİsta Spor Servisi",
        icerik: `
MXGP HEYECANI AFYONKARAHİSAR'DA

Dünyanın önemli motokros organizasyonlarından MXGP'nin kritik yarışlarından biri Afyonkarahisar'da gerçekleştiriliyor.

Uluslararası motosiklet sporunun önemli organizasyonlarından biri olan MXGP, farklı ülkelerden sporcuların katılımıyla büyük bir mücadeleye sahne oluyor.

ŞAMPİYONLUK YARIŞI

Sezon boyunca elde edilen puanların ardından şampiyonluk mücadelesi büyük önem taşıyor.

Yarışlarda alınacak sonuçların genel puan durumuna etkisi yakından takip edilirken, sporcular sezon hedeflerine ulaşmak için mücadele ediyor.

SPORCULAR PİSTE ÇIKIYOR

Farklı ülkelerden gelen sporcular zorlu parkurda derece elde etmek için mücadele ediyor.

Motokros yarışlarında sürüş becerisinin yanı sıra parkurun yapısı, virajlar, zemin koşulları ve yarış stratejisi de sonuç üzerinde etkili olabiliyor.

AFYONKARAHİSAR'DA BÜYÜK İLGİ

Organizasyonun kentte önemli bir spor etkinliği olarak takip edildiği belirtiliyor.

Uluslararası bir motosiklet organizasyonunun Afyonkarahisar'da düzenlenmesi, kentte motor sporlarına yönelik ilginin artmasına da katkı sağlıyor.

ZORLU PARKUR

Afyonkarahisar'daki pist, farklı zemin ve viraj özellikleriyle sporculara zorlu bir mücadele sunuyor.

Parkurun özellikleri yarışların seyri açısından önemli olurken, sporcuların değişen koşullara uyum sağlaması gerekiyor.

TÜRKİYE'NİN MOTOSİKLET SPORLARINDAKİ YERİ

Türkiye'nin uluslararası motosiklet organizasyonlarına ev sahipliği yapması, motor sporlarının ülkedeki tanıtımı açısından önem taşıyor.

Bu tür organizasyonlar Türkiye'deki motosiklet sporlarının uluslararası düzeyde tanınmasına katkı sağlarken, genç sporcuların da bu alana ilgisini artırabiliyor.

ŞAMPİYONLUK İÇİN KRİTİK MÜCADELE

Yarışların ardından sezon puan tablosunun şekillenmesi ve şampiyonluk yarışının daha da netleşmesi bekleniyor.

Sporcuların elde edeceği dereceler sezonun genel sıralamasında önemli değişikliklere yol açabilir.

HABERİSTA Spor Servisi
        `
    },

    /* =====================================================
       6 - AVRUPA SEYAHATLERİ
    ===================================================== */
    {
        id: 6,
        kategori: "Dünya",
        baslik: "Avrupa seyahatlerinde sınır kontrollerinde yeni dönem",
        spot: "Avrupa'ya seyahat edenleri ilgilendiren sınır kontrol uygulamalarında yeni dönem başlıyor. Yolcuların seyahat öncesinde güncel kuralları kontrol etmesi önem taşıyor.",
        tarih: "6 Eylül 2026",
        saat: "08:15",
        gorsel: "images/asrupa seyhat.jpeg",
        kaynak: "Avrupa Birliği",
        yazar: "Haberİsta Dünya Servisi",
        icerik: `
AVRUPA SEYAHATLERİNDE YENİ DÖNEM

Avrupa ülkelerine seyahat eden yolcuları ilgilendiren sınır kontrol uygulamalarında yeni düzenlemeler gündemde.

Seyahat edecek kişilerin giriş koşulları, sınır kontrolleri ve gerekli belgeler konusunda güncel bilgileri kontrol etmesi önem taşıyor.

SINIR KONTROLLERİ

Avrupa'ya giriş ve çıkışlarda yolcuların kimlik ve seyahat bilgilerinin kontrol edilmesine yönelik uygulamalar önem taşıyor.

Sınır kapılarındaki kontrollerin kapsamı ve uygulanma şekli ülkelere ve seyahat koşullarına göre değişebiliyor.

DİJİTAL SİSTEMLER

Avrupa'nın sınır yönetiminde dijital sistemlerin daha fazla kullanılması hedefleniyor.

Dijital sistemlerin sınır kontrollerinde kullanılması, yolcu bilgilerinin daha düzenli şekilde işlenmesine ve sınır güvenliği uygulamalarının geliştirilmesine yönelik çalışmaların bir parçası olarak değerlendiriliyor.

SEYAHAT ÖNCESİ KONTROL

Yurt dışına çıkacak kişilerin pasaport, vize ve diğer giriş şartlarını seyahat öncesinde kontrol etmesi gerekiyor.

Seyahat belgelerinin geçerlilik süreleri, vize şartları ve ülkeye giriş koşulları yolculuk öncesinde ilgili resmi kaynaklardan kontrol edilmeli.

YOLCULAR İÇİN ÖNEMLİ

Sınır kapılarında yapılacak kontroller nedeniyle seyahat sürelerinde değişiklik yaşanabileceği değerlendiriliyor.

Özellikle yoğun seyahat dönemlerinde sınır kapılarındaki işlem süreleri değişebileceğinden yolcuların seyahat planlarını buna göre yapması önem taşıyor.

AVRUPA'DA GÜVENLİK

Yeni uygulamaların temel amaçları arasında sınır güvenliğinin güçlendirilmesi ve düzensiz göçle mücadele bulunuyor.

Sınır yönetiminde kullanılan yeni yöntemler, Avrupa ülkelerinin güvenlik politikalarının önemli parçaları arasında yer alıyor.

KURALLAR ÜLKELERE GÖRE DEĞİŞEBİLİR

Avrupa ülkelerine giriş şartlarının vatandaşlığa ve seyahat amacına göre farklılık gösterebileceği unutulmamalı.

Turistik seyahat, eğitim, çalışma veya transit geçiş gibi farklı seyahat amaçlarında farklı şartlar uygulanabileceğinden seyahat öncesinde resmi kaynakların kontrol edilmesi gerekiyor.

RESMİ KAYNAKLAR TAKİP EDİLMELİ

Seyahat edecek kişilerin güncel bilgileri ilgili ülkenin ve Avrupa Birliği kurumlarının resmi kaynaklarından kontrol etmesi önem taşıyor.

Kurallarda değişiklik yaşanabileceği için seyahatten hemen önce bilgilerin yeniden kontrol edilmesi tavsiye ediliyor.

HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       5 - RESMİ GAZETE
    ===================================================== */
    {
        id: 5,
        kategori: "Son Dakika",
        baslik: "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",
        spot: "5 Eylül 2026 tarihli Resmî Gazete yayımlandı. Sayıda çeşitli kararlar, atamalar, yönetmelikler ve düzenlemeler yer aldı.",
        tarih: "5 Eylül 2026",
        saat: "15:20",
        gorsel: "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",
        kaynak: "Resmî Gazete",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
RESMÎ GAZETE YAYIMLANDI

5 Eylül 2026 tarihli Resmî Gazete yayımlandı.

Yeni sayıda kamu kurumlarını, vatandaşları ve çeşitli sektörleri ilgilendiren karar ve düzenlemeler yer aldı. Resmî Gazete'de yayımlanan düzenlemeler, ilgili mevzuat kapsamında yürürlüğe giren veya yürürlüğe girecek hükümler açısından önem taşıyor.

YENİ DÜZENLEMELER

Resmî Gazete'de yayımlanan yönetmelik, tebliğ ve diğer düzenlemeler ilgili mevzuat kapsamında yürürlüğe giriyor.

Düzenlemelerin kapsamı, yürürlük tarihi ve hangi kurum veya kişileri ilgilendirdiği resmi metinlerde ayrıntılı olarak belirtiliyor.

ATAMALAR

Cumhurbaşkanlığı ve çeşitli kamu kurumlarına ilişkin bazı atama kararları da Resmî Gazete'nin gündeminde yer aldı.

Kamu görevlerine ilişkin atama kararları, ilgili kurumların çalışma düzeni ve yönetim yapısı açısından önem taşıyor.

YARGI KARARLARI

Sayının içeriğinde ilgili kurum ve kuruluşları ilgilendiren çeşitli yargı kararları ve düzenlemeler yayımlandı.

Yargı kararlarının kapsamı ve hukuki sonuçları ilgili resmi metinler üzerinden değerlendirilmesi gerekiyor.

YÜRÜRLÜĞE GİREN KARARLAR

Resmî Gazete'de yayımlanan düzenlemelerin yürürlük tarihleri ilgili karar ve yönetmeliklerde belirtiliyor.

Bazı düzenlemeler yayımlandığı tarihte yürürlüğe girerken, bazı kararların yürürlük tarihi farklı bir tarih olarak belirlenebiliyor.

VATANDAŞLAR İÇİN ÖNEMLİ

Günlük yaşamı veya çalışma hayatını ilgilendiren yeni düzenlemelerin ayrıntılarının resmi metinlerden takip edilmesi gerekiyor.

Vatandaşların kendilerini ilgilendiren bir düzenleme bulunması halinde ilgili kararın tamamını incelemesi ve yürürlük tarihine dikkat etmesi önem taşıyor.

RESMİ METİNLER ESAS ALINMALI

Haberlerde yer alan özet bilgilerin yanı sıra hukuki ve idari işlemlerde Resmî Gazete'de yayımlanan resmi metinlerin esas alınması önem taşıyor.

Özellikle mevzuat değişiklikleriyle ilgili değerlendirme yapılırken yalnızca haber özetlerine değil, yayımlanan resmi düzenlemenin tamamına bakılması gerekiyor.

GÜNCEL SAYILAR TAKİP EDİLMELİ

Resmî Gazete her gün yayımlanan karar ve düzenlemelerle kamu gündeminin önemli kaynaklarından biri olmayı sürdürüyor.

Vatandaşlar kendilerini ilgilendiren yeni kararları resmi yayın üzerinden takip edebiliyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       4 - FİLENİN SULTANLARI
    ===================================================== */
    {
        id: 4,
        kategori: "Spor",
        baslik: "Filenin Sultanları Avrupa şampiyonluğu için sahada! Türkiye-İtalya finali bugün oynanacak",
        spot: "A Milli Kadın Voleybol Takımı, Avrupa şampiyonluğu için İtalya ile final karşılaşmasına çıkıyor. Voleybolseverler tarihi mücadeleyi takip ediyor.",
        tarih: "6 Eylül 2026",
        saat: "01:30",
        gorsel: "images/AVRUPA.jpeg",
        kaynak: "Türkiye Voleybol Federasyonu",
        yazar: "Haberİsta Spor Servisi",
        icerik: `
FİLENİN SULTANLARI AVRUPA ŞAMPİYONLUĞU İÇİN SAHADA

A Milli Kadın Voleybol Takımı, Avrupa şampiyonluğu için İtalya karşısında final mücadelesine çıkıyor.

Turnuvanın en önemli karşılaşmalarından biri olan final öncesinde milli takımın performansı voleybolseverler tarafından yakından takip ediliyor.

TÜRKİYE-İTALYA FİNALİ

Final karşılaşması voleybolseverler tarafından büyük bir heyecanla bekleniyor.

İki güçlü takımın karşı karşıya geleceği finalde alınacak sonuç turnuvanın şampiyonunu belirleyecek.

MİLLİ TAKIMIN HEDEFİ ŞAMPİYONLUK

Filenin Sultanları, turnuvada gösterdiği performansın ardından kupayı kazanmak için mücadele ediyor.

Milli takımın final karşılaşmasında ortaya koyacağı oyun ve elde edeceği sonuç Türkiye'deki spor gündeminin önemli başlıklarından biri olacak.

ZORLU RAKİP İTALYA

İtalya, Avrupa voleybolunun güçlü ekipleri arasında yer alırken final karşılaşmasının çekişmeli geçmesi bekleniyor.

Finalde iki takımın servis, savunma, hücum ve blok performansları karşılaşmanın sonucunda önemli rol oynayacak.

TÜRKİYE'DE BÜYÜK HEYECAN

Milli takımın final karşılaşması öncesinde Türkiye genelinde voleybolseverlerin mücadeleye yoğun ilgi göstermesi bekleniyor.

Filenin Sultanları'nın uluslararası organizasyonlardaki performansı, kadın voleyboluna yönelik ilgiyi de artırıyor.

MİLLİ FORMAYA DESTEK

Taraftarların milli takıma destek mesajları paylaşması ve karşılaşmayı yakından takip etmesi bekleniyor.

Final karşılaşması, milli takımın turnuvadaki performansının değerlendirilmesi açısından da önemli bir mücadele olacak.

AVRUPA ŞAMPİYONLUĞU İÇİN SON MAÇ

Final karşılaşması turnuvanın en önemli mücadelelerinden biri olarak öne çıkıyor.

Maçın sonucuyla birlikte şampiyon belli olacak ve turnuvanın genel değerlendirmesi yapılacak.

TÜRK VOLEYBOLU İÇİN ÖNEMLİ KARŞILAŞMA

Milli takımın Avrupa şampiyonluğu için sahaya çıkması, Türkiye'deki voleybol gündeminin de en önemli başlıklarından biri olarak öne çıkıyor.

Karşılaşmanın ardından oyuncuların performansı, teknik ekibin tercihleri ve turnuvanın genel sonuçları spor kamuoyu tarafından değerlendirilecek.

HABERİSTA Spor Servisi
        `
    },

    /* =====================================================
       3 - PARA PİYASASI FONLARI
    ===================================================== */
    {
        id: 3,
        kategori: "Ekonomi",
        baslik: "Para piyasası fonlarında yeni dönem: Stopaj oranı yüzde 10'a çıkarıldı",
        spot: "Para piyasası fonlarına ilişkin stopaj uygulamasında değişikliğe gidildi. Yeni düzenlemeyle stopaj oranının yüzde 10'a çıkarıldığı bildirildi.",
        tarih: "5 Eylül 2026",
        saat: "18:10",
        gorsel: "images/EKENOMİ.jpeg",
        kaynak: "Ekonomi Servisi",
        yazar: "Haberİsta Ekonomi Servisi",
        icerik: `
PARA PİYASASI FONLARINDA YENİ DÖNEM

Para piyasası fonlarına ilişkin vergi uygulamasında değişiklik gündeme geldi.

Yeni düzenleme, para piyasası fonlarını değerlendiren yatırımcıların elde edebilecekleri getiriyi hesaplarken vergi kesintilerini de dikkate almasını gerektiriyor.

STOPAJ ORANI YÜZDE 10

Yapılan düzenlemeyle para piyasası fonlarında uygulanan stopaj oranının yüzde 10'a çıkarıldığı bildirildi.

Stopaj oranındaki değişiklik, fon yatırımcılarının net getiri hesaplamalarında dikkate alması gereken önemli unsurlardan biri haline geliyor.

YATIRIMCILARIN DİKKATİNDE

Düzenlemenin ardından yatırımcıların fon getirilerini değerlendirirken vergi kesintisini de hesaba katması gerekiyor.

Bir yatırım aracının brüt getirisi ile yatırımcının eline geçebilecek net tutar arasında vergi uygulamalarından kaynaklanan farklılıklar oluşabiliyor.

FON GETİRİLERİ

Para piyasası fonları kısa vadeli yatırım araçlarına yönelen yatırımcılar tarafından tercih ediliyor.

Bu fonların getirileri piyasa koşullarına, faiz oranlarına ve fonun yatırım yaptığı araçların performansına bağlı olarak değişebiliyor.

VERGİ UYGULAMASI

Stopaj, yatırım araçlarından elde edilen belirli gelirler üzerinden yapılan vergi kesintisini ifade ediyor.

Vergi uygulamalarındaki değişiklikler yatırımcıların net getiri hesaplamalarını etkileyebildiğinden, yatırımcıların güncel mevzuatı takip etmesi önem taşıyor.

NET GETİRİ HESAPLAMASI

Yatırımcıların yalnızca brüt getiriye değil, vergi ve diğer maliyetler sonrasında oluşabilecek net getiriye de dikkat etmesi gerekiyor.

Farklı yatırım araçlarının karşılaştırılmasında vergi uygulamaları önemli bir değerlendirme unsuru olarak öne çıkıyor.

GÜNCEL BİLGİLER TAKİP EDİLMELİ

Vergi uygulamalarındaki değişiklikler yatırım kararlarını etkileyebileceğinden resmi açıklamaların takip edilmesi gerekiyor.

Yatırımcıların işlem yapmadan önce güncel oranları ve ilgili fonun koşullarını yetkili finans kuruluşlarından kontrol etmesi önem taşıyor.

ÖNEMLİ NOT

Bu haber yatırım tavsiyesi değildir.

Yatırım kararları kişisel finansal koşullar, risk durumu ve yatırım hedefleri değerlendirilerek verilmelidir.

HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       2 - YAŞLI VE ENGELLİ AYLIKLARI
    ===================================================== */
    {
        id: 2,
        kategori: "Gündem",
        baslik: "Eylül ayı yaşlı ve engelli aylıkları hesaplara yatırılmaya başlandı",
        spot: "Eylül ayına ilişkin yaşlı ve engelli aylıklarının hak sahiplerinin hesaplarına yatırılmaya başlandığı bildirildi.",
        tarih: "5 Eylül 2026",
        saat: "10:27",
        gorsel: "images/GÜNDEM.jpeg",
        kaynak: "HABERİSTA Gündem",
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
EYLÜL AYI YAŞLI VE ENGELLİ AYLIKLARI

Eylül ayına ilişkin yaşlı ve engelli aylıklarının hak sahiplerinin hesaplarına yatırılmaya başlandığı bildirildi.

Sosyal destek ödemelerinden yararlanan vatandaşlar, ödemelerin hesaplarına yansıyıp yansımadığını ilgili kanallar üzerinden kontrol edebiliyor.

ÖDEMELER HESAPLARA YATIRILIYOR

Sosyal yardım ödemelerinden yararlanan vatandaşların ödemeleri ilgili ödeme takvimi doğrultusunda hesaplarına aktarılıyor.

Ödemelerin hesaplara geçiş zamanı, ilgili ödeme sistemi ve banka işlemlerine bağlı olarak değişiklik gösterebileceğinden vatandaşların resmi açıklamaları takip etmesi önem taşıyor.

HAK SAHİPLERİ ÖDEMELERİNİ KONTROL EDİYOR

Vatandaşlar ödemelerin hesaplarına yansıyıp yansımadığını ilgili bankacılık kanallarından veya resmi sistemlerden kontrol edebiliyor.

Ödeme görünmüyorsa vatandaşların ilgili kamu kurumlarının resmi bilgilendirmelerini takip etmesi gerekiyor.

SOSYAL DESTEKLER

Yaşlı ve engelli aylıkları, sosyal destek mekanizmaları kapsamında ihtiyaç sahibi vatandaşlara yönelik ödemeler arasında bulunuyor.

Bu ödemelerden yararlanma şartları ilgili mevzuat kapsamında belirlenirken, hak sahipliği konusunda resmi kurumların değerlendirmeleri esas alınıyor.

ÖDEME TARİHLERİ TAKİP EDİLMELİ

Ödeme dönemlerinde tarih ve uygulamaların resmi kurumların açıklamalarından takip edilmesi önem taşıyor.

Özellikle ödeme takvimlerinde meydana gelebilecek değişiklikler için vatandaşların resmi duyuruları kontrol etmesi gerekiyor.

ÖDEME MİKTARI VE HAK SAHİPLİĞİ

Ödeme miktarı, hak sahipliği ve ödeme koşulları dönemsel düzenlemelere ve ilgili mevzuata göre değişebiliyor.

Bu nedenle vatandaşların güncel bilgileri ilgili kamu kurumlarından öğrenmesi önem taşıyor.

RESMİ KAYNAKLAR ÖNEMLİ

Ödeme miktarı, hak sahipliği ve ödeme tarihleriyle ilgili en güncel bilgilerin ilgili kamu kurumlarından alınması gerekiyor.

Vatandaşların sosyal medyada veya doğrulanmamış kaynaklarda yayılan bilgileri resmi açıklamalarla karşılaştırması önem taşıyor.

HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       1 - PISA 2025
    ===================================================== */
    {
        id: 1,
        kategori: "Eğitim",
        baslik: "PISA 2025 sonuçları için geri sayım: Sonuçlar 8 Eylül'de açıklanacak",
        spot: "PISA 2025 araştırmasının sonuçları için geri sayım başladı. Türkiye'nin performansının da yer alacağı sonuçların 8 Eylül'de açıklanması bekleniyor.",
        tarih: "6 Eylül 2026",
        saat: "09:42",
        gorsel: "images/PISA.jpeg",
        kaynak: "Eğitim Servisi",
        yazar: "Haberİsta Eğitim Servisi",
        icerik: `
PISA 2025 SONUÇLARI İÇİN GERİ SAYIM

Ekonomik İşbirliği ve Kalkınma Örgütü OECD tarafından gerçekleştirilen PISA araştırmasının 2025 sonuçları için geri sayım başladı.

Uluslararası eğitim araştırması olan PISA, farklı ülkelerdeki öğrencilerin belirli alanlardaki bilgi ve becerilerini değerlendirmesi nedeniyle eğitim dünyasında yakından takip ediliyor.

SONUÇLAR 8 EYLÜL'DE AÇIKLANACAK

PISA 2025 araştırmasının sonuçlarının 8 Eylül tarihinde kamuoyuyla paylaşılması bekleniyor.

Açıklanacak sonuçlarda Türkiye'nin performansı da yer alacak. Sonuçların ardından öğrencilerin performansı, eğitim sistemi ve önceki araştırmalarla karşılaştırmalar üzerinden çeşitli değerlendirmeler yapılması bekleniyor.

PISA NEDİR?

PISA, farklı ülkelerdeki 15 yaş grubundaki öğrencilerin okuma becerileri, matematik ve fen alanlarındaki bilgi ve becerilerini değerlendiren uluslararası bir araştırmadır.

Araştırmanın temel amacı öğrencilerin yalnızca okulda öğrendikleri bilgileri değil, bu bilgileri gerçek yaşamda kullanabilme becerilerini de değerlendirmektir.

TÜRKİYE'NİN PERFORMANSI

Türkiye'nin PISA 2025 sonuçlarında göstereceği performans öğrenciler, öğretmenler, veliler ve eğitim politikaları açısından yakından takip ediliyor.

Sonuçların Türkiye'nin eğitim sistemindeki güçlü alanların ve geliştirilmesi gereken noktaların değerlendirilmesine katkı sağlaması bekleniyor.

EĞİTİM POLİTİKALARINA KATKI

PISA sonuçları ülkelerin eğitim sistemlerinin güçlü ve geliştirilmesi gereken yönlerinin değerlendirilmesinde kullanılan uluslararası göstergelerden biri olarak öne çıkıyor.

Sonuçlar, eğitim politikalarının oluşturulması ve eğitim sistemlerinin farklı ülkelerle karşılaştırılması sırasında başvurulan veriler arasında bulunuyor.

SONUÇLAR NASIL DEĞERLENDİRİLECEK?

Sonuçların yalnızca ülke sıralaması üzerinden değil, öğrencilerin farklı alanlardaki performansları ve önceki dönemlerle karşılaştırmalar üzerinden değerlendirilmesi önem taşıyor.

Matematik, fen ve okuma alanlarındaki sonuçların ayrı ayrı incelenmesi, eğitim sisteminin hangi alanlarda gelişme gösterdiğini anlamak açısından daha kapsamlı bir değerlendirme yapılmasına imkan sağlayabilir.

TÜRKİYE'DE EĞİTİM GÜNDEMİ

Açıklanacak sonuçların Türkiye'deki eğitim politikaları ve öğrencilerin akademik performansına ilişkin değerlendirmelere katkı sağlaması bekleniyor.

PISA sonuçları sonrasında eğitim uzmanları, öğretmenler ve politika yapıcılar tarafından çeşitli değerlendirmelerin yapılması beklenirken, verilerin uzun vadeli eğitim politikaları açısından da önem taşıdığı belirtiliyor.

ÖĞRENCİLER VE VELİLER İÇİN ÖNEMİ

PISA doğrudan bireysel öğrencilerin karne veya sınav sonucu gibi değerlendirilmesi anlamına gelmiyor.

Araştırmanın sonuçları daha çok ülkelerin eğitim sistemlerini ve öğrencilerin belirli alanlardaki genel performanslarını değerlendirmek amacıyla kullanılıyor.

SONUÇLAR TAKİP EDİLECEK

PISA 2025 sonuçlarının açıklanmasının ardından Türkiye'nin performansına ilişkin ayrıntılı verilerin ve uluslararası karşılaştırmaların gündeme gelmesi bekleniyor.

Sonuçların eğitim politikaları açısından nasıl yorumlanacağı ve hangi alanlarda yeni çalışmalar yapılabileceği önümüzdeki dönemin önemli eğitim gündemlerinden biri olacak.

HABERİSTA Eğitim Servisi
        `
    }
];

/* =========================================================
   OTOMATİK SLUG + URL + TARİH + GÖRÜNTÜLENME
========================================================= */

haberler.forEach(function (haber) {

    /* SLUG */
    haber.slug = slugOlustur(haber.baslik);

    /* URL */
    haber.url = "/haber/" + haber.slug;

    /* YAYIN TARİHİ */
    if (!haber.publishedAt) {

        const tarih =
            String(haber.tarih || "").trim();

        const saat =
            String(haber.saat || "00:00").trim();

        const parcalar =
            tarih.split(/\s+/);

        if (parcalar.length === 3) {

            const gun =
                parcalar[0].padStart(2, "0");

            const aylar = {
                "Ocak": "01",
                "Şubat": "02",
                "Mart": "03",
                "Nisan": "04",
                "Mayıs": "05",
                "Haziran": "06",
                "Temmuz": "07",
                "Ağustos": "08",
                "Eylül": "09",
                "Ekim": "10",
                "Kasım": "11",
                "Aralık": "12"
            };

            const ay =
                aylar[parcalar[1]] || "01";

            const yil =
                parcalar[2];

            haber.publishedAt =
                `${yil}-${ay}-${gun}T${saat}:00+03:00`;
        }
    }

    /* DATE MODIFIED */
    if (!haber.dateModified) {
        haber.dateModified =
            haber.publishedAt || null;
    }

    /* GÖRÜNTÜLENME */
    if (
        typeof haber.goruntulenme !== "number"
    ) {
        haber.goruntulenme = 0;
    }

    /* YAZAR */
    if (!haber.yazar) {
        haber.yazar =
            "Haberİsta Haber Merkezi";
    }

    /* KAYNAK */
    if (!haber.kaynak) {
        haber.kaynak =
            "HABERİSTA";
    }
});

/* =========================================================
   HABERLERİ TARİHE GÖRE SIRALA
   EN YENİ HABER EN ÜSTTE
========================================================= */

haberler.sort(function (a, b) {

    const tarihA =
        new Date(
            a.publishedAt || 0
        ).getTime();

    const tarihB =
        new Date(
            b.publishedAt || 0
        ).getTime();

    return tarihB - tarihA;
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
        return String(haber.id) === String(id);
    }) || null;
}

/* =========================================================
   KATEGORİYE GÖRE HABER BUL
========================================================= */

function haberKategoriIleBul(kategori) {

    const temizKategori =
        String(kategori || "")
            .trim()
            .toLocaleLowerCase("tr-TR");

    return haberler.filter(function (haber) {

        return String(haber.kategori || "")
            .trim()
            .toLocaleLowerCase("tr-TR")
            === temizKategori;

    });
}

/* =========================================================
   SON HABERLER
========================================================= */

function sonHaberleriGetir(adet) {

    const sayi =
        Number(adet) || 10;

    return haberler.slice(0, sayi);
}

/* =========================================================
   KATEGORİ LİSTESİ
========================================================= */

function kategorileriGetir() {

    return [
        ...new Set(
            haberler
                .map(function (haber) {
                    return haber.kategori;
                })
                .filter(Boolean)
        )
    ];
}

/* =========================================================
   EN ÇOK OKUNAN HABERLER
========================================================= */

function enCokOkunanlariGetir(adet) {

    const sayi =
        Number(adet) || 10;

    return [...haberler]
        .sort(function (a, b) {

            return (
                Number(b.goruntulenme || 0) -
                Number(a.goruntulenme || 0)
            );

        })
        .slice(0, sayi);
}

/* =========================================================
   ARAMA
========================================================= */

function haberAra(metin) {

    const aranan =
        String(metin || "")
            .trim()
            .toLocaleLowerCase("tr-TR");

    if (!aranan) {
        return [];
    }

    return haberler.filter(function (haber) {

        const baslik =
            String(haber.baslik || "")
                .toLocaleLowerCase("tr-TR");

        const spot =
            String(haber.spot || "")
                .toLocaleLowerCase("tr-TR");

        const icerik =
            String(haber.icerik || "")
                .toLocaleLowerCase("tr-TR");

        const kategori =
            String(haber.kategori || "")
                .toLocaleLowerCase("tr-TR");

        return (
            baslik.includes(aranan) ||
            spot.includes(aranan) ||
            icerik.includes(aranan) ||
            kategori.includes(aranan)
        );
    });
}

/* =========================================================
   DUPLICATE ID KONTROLÜ
========================================================= */

const kullanilanIdler =
    new Set();

haberler.forEach(function (haber) {

    if (kullanilanIdler.has(haber.id)) {

        console.error(
            "Haberİsta: DUPLICATE ID bulundu:",
            haber.id,
            haber.baslik
        );
    }

    kullanilanIdler.add(haber.id);
});

/* =========================================================
   DUPLICATE SLUG KONTROLÜ
========================================================= */

const kullanilanSluglar =
    new Set();

haberler.forEach(function (haber) {

    if (kullanilanSluglar.has(haber.slug)) {

        console.error(
            "Haberİsta: DUPLICATE SLUG bulundu:",
            haber.slug,
            haber.baslik
        );
    }

    kullanilanSluglar.add(haber.slug);
});

/* =========================================================
   BOŞ / EKSİK ALAN KONTROLÜ
========================================================= */

haberler.forEach(function (haber) {

    if (!haber.baslik) {

        console.warn(
            "Haberİsta: Başlık eksik:",
            haber.id
        );
    }

    if (!haber.kategori) {

        console.warn(
            "Haberİsta: Kategori eksik:",
            haber.id
        );
    }

    if (!haber.spot) {

        console.warn(
            "Haberİsta: Spot eksik:",
            haber.id
        );
    }

    if (!haber.icerik) {

        console.warn(
            "Haberİsta: İçerik eksik:",
            haber.id
        );
    }

    if (!haber.gorsel) {

        console.warn(
            "Haberİsta: Görsel eksik:",
            haber.id
        );
    }

    if (!haber.publishedAt) {

        console.warn(
            "Haberİsta: publishedAt eksik:",
            haber.id
        );
    }
});

/* =========================================================
   GLOBAL DEĞİŞKENLER
========================================================= */

if (typeof window !== "undefined") {

    window.haberler =
        haberler;

    window.slugOlustur =
        slugOlustur;

    window.haberSlugIleBul =
        haberSlugIleBul;

    window.haberIdIleBul =
        haberIdIleBul;

    window.haberKategoriIleBul =
        haberKategoriIleBul;

    window.sonHaberleriGetir =
        sonHaberleriGetir;

    window.kategorileriGetir =
        kategorileriGetir;

    window.enCokOkunanlariGetir =
        enCokOkunanlariGetir;

    window.haberAra =
        haberAra;
}

/* =========================================================
   KONSOL BİLGİSİ
========================================================= */

console.log(
    "Haberİsta:",
    haberler.length,
    "haber başarıyla yüklendi."
);

console.log(
    "Haberİsta: İlk haber →",
    haberler[0]
        ? haberler[0].baslik
        : "Yok"
);

console.log(
    "Haberİsta: Son haber →",
    haberler[haberler.length - 1]
        ? haberler[haberler.length - 1].baslik
        : "Yok"
);

/* =========================================================
   HABER URL'LERİ
========================================================= */

haberler.forEach(function (haber) {

    console.log(
        haber.id,
        "→",
        haber.url
    );
});

/* =========================================================
   HABERİSTA - GLOBAL HABER VERİSİ
========================================================= */

if (typeof window !== "undefined") {
    window.haberler = haberler;
}
