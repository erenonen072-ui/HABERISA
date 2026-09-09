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

Mersin'in Bozyazı ilçesinde ormanlık alanda yangın çıktı. Yangının ardından bölgeye çok sayıda ekip yönlendirilirken, alevlerin kontrol altına alınması için çalışmalar başlatıldı.

HAVADAN VE KARADAN MÜDAHALE

Yangına hem kara ekipleriyle hem de hava araçlarıyla müdahale ediliyor. Ekipler, yangının ilerleyebileceği alanlarda kontrol sağlamak ve alevlerin yayılmasını önlemek için çalışmalarını sürdürüyor.

EKİPLER BÖLGEDE ÇALIŞIYOR

Yangın bölgesine sevk edilen ekipler, müdahale çalışmalarını koordineli şekilde yürütüyor. Çalışmalar sırasında çevredeki alanların güvenliği de takip ediliyor.

RÜZGAR ÇALIŞMALARI ETKİLEYEBİLİYOR

Bölgede etkili olabilecek rüzgarın yangının seyri üzerinde etkili olabileceği belirtiliyor. Bu nedenle ekipler yangının hareket yönünü ve çevredeki riskli bölgeleri yakından izliyor.

SOĞUTMA ÇALIŞMALARI ÖNEM TAŞIYOR

Alevlerin kontrol altına alınmasının ardından yeniden yangın çıkma riskine karşı soğutma çalışmalarının da yürütülmesi bekleniyor.

YETKİLİLERDEN UYARI

Yetkililer, yangın bölgesine yakın alanlarda bulunan vatandaşların ekiplerin çalışmalarını aksatmaması ve yapılan uyarıları dikkate alması gerektiğini belirtiyor.

GELİŞMELER TAKİP EDİLİYOR

Bozyazı'daki yangına ilişkin gelişmeler ekiplerin çalışmaları ve yetkililerden gelecek açıklamalar doğrultusunda takip ediliyor.

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

GÜNDEMDE GÜVENLİK VE İŞ BİRLİĞİ

Görüşmede güvenlik başta olmak üzere bölgesel gelişmeler ve Türkiye ile KKTC arasındaki iş birliği konularının değerlendirildiği bildirildi.

BÖLGESEL GELİŞMELER DEĞERLENDİRİLDİ

Doğu Akdeniz'deki gelişmelerin yanı sıra bölgesel güvenlik gündeminin de görüşmede ele alınan başlıklar arasında olduğu belirtildi.

TÜRKİYE-KKTC İLİŞKİLERİ

Türkiye ile KKTC arasındaki ilişkiler farklı alanlardaki temaslarla devam ederken, güvenlik ve koordinasyon başlıkları da gündemdeki önemini koruyor.

GÖRÜŞMELER DEVAM EDİYOR

Gerçekleştirilen temasların ardından bölgedeki gelişmeler ve iki taraf arasındaki iş birliğine ilişkin sürecin yakından takip edilmesi bekleniyor.

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

UKRAYNA SAVAŞI GÜNDEMDE

Rusya-Ukrayna savaşına ilişkin gelişmeler uluslararası diplomasinin önemli gündem başlıklarından biri olmayı sürdürüyor. Görüşmede savaşın mevcut durumu ve sürece ilişkin değerlendirmelerin yapıldığı belirtildi.

BARIŞ SÜRECİ ELE ALINDI

Putin ve Trump arasındaki görüşmede olası barış süreci ve diplomatik girişimlerin de gündeme geldiği ifade edildi.

ABD-RUSYA TEMASLARI

Washington ile Moskova arasındaki temaslar, savaşın geleceği açısından uluslararası kamuoyu tarafından yakından takip ediliyor.

BÖLGESEL GELİŞMELER

Ukrayna'daki savaşın yanı sıra Avrupa güvenliği ve bölgedeki diğer gelişmelerin de diplomatik görüşmeler açısından önem taşıdığı değerlendiriliyor.

DİPLOMASİ TRAFİĞİ SÜRÜYOR

Taraflar arasındaki temasların önümüzdeki dönemde devam edip etmeyeceği ve görüşmelerin sahadaki gelişmelere nasıl yansıyacağı yakından izleniyor.

ÖNÜMÜZDEKİ SÜREÇ

Diplomatik temasların seyri, Ukrayna savaşının geleceği ve olası müzakere süreci açısından önem taşıyor.

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

EKİPLER BÖLGEYE SEVK EDİLDİ

Olayın ardından ilgili ekipler bölgeye yönlendirilirken, denizde yürütülen çalışmalar koordineli şekilde devam ediyor.

DENİZDE ARAMA ÇALIŞMALARI

Arama-kurtarma ekipleri deniz üzerinde belirlenen alanlarda çalışmalarını sürdürüyor. Bölgedeki gelişmeler ekipler tarafından yakından takip ediliyor.

HAVA VE DENİZ KOŞULLARI İZLENİYOR

Çalışmaların yürütüldüğü bölgede hava ve deniz koşulları ekiplerin faaliyetleri açısından önem taşıyor.

YETKİLİLERDEN AÇIKLAMA BEKLENİYOR

Olayın ayrıntıları ve yürütülen çalışmalara ilişkin resmi açıklamaların kamuoyuyla paylaşılması bekleniyor.

ÇALIŞMALAR SÜRÜYOR

Arama-kurtarma faaliyetlerinin sonuçları ve olayla ilgili yeni bilgiler yetkili kurumların açıklamaları doğrultusunda takip ediliyor.

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

EKONOMİ GÜNDEMİ

Piyasalardaki hareketlilik, ekonomik göstergeler ve vatandaşların günlük yaşamını etkileyebilecek gelişmeler yakından takip ediliyor.

TEKNOLOJİDE YENİ GELİŞMELER

Dijital teknolojiler ve yeni ürünler teknoloji gündeminin öne çıkan başlıkları arasında yer alıyor. Teknolojideki gelişmeler günlük yaşamın farklı alanlarında etkisini artırıyor.

EĞİTİM GÜNDEMİ

Öğrenciler, veliler ve eğitimciler yeni eğitim dönemine ilişkin gelişmeleri takip ediyor. Eğitim takvimleri ve resmi açıklamalar gündemdeki önemini koruyor.

GÜNLÜK YAŞAM

Vatandaşların ulaşım, ekonomi, eğitim ve sosyal yaşamla ilgili gelişmeleri yakından takip ettiği görülüyor.

YENİ HAFTADA GÜNDEM

Yeni haftada Türkiye'nin iç gündeminde farklı başlıkların öne çıkması beklenirken, resmi açıklamalar ve güncel gelişmeler takip edilmeye devam ediyor.

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

GÜNDEMDE EKONOMİ VAR

Toplantının önemli başlıkları arasında ekonomi gündeminin yer alması bekleniyor. Ekonomik gelişmeler, fiyat istikrarı ve önümüzdeki döneme ilişkin politikaların değerlendirilmesi öne çıkan konular arasında bulunuyor.

GÜVENLİK KONULARI ELE ALINACAK

Türkiye'nin iç ve dış güvenliğine ilişkin gelişmelerin de Kabine toplantısında değerlendirilmesi bekleniyor.

TERÖRSÜZ TÜRKİYE SÜRECİ

'Terörsüz Türkiye' sürecine ilişkin gelişmelerin toplantının gündem maddeleri arasında yer alması bekleniyor. Sürece ilişkin atılabilecek adımlar ve mevcut gelişmelerin değerlendirilmesi öne çıkıyor.

BÖLGESEL GELİŞMELER

Türkiye'nin yakın çevresindeki gelişmeler ve dış politika gündeminin de toplantıda ele alınabilecek başlıklar arasında olduğu değerlendiriliyor.

TOPLANTI SONRASI AÇIKLAMA

Kabine toplantısının ardından alınan kararlar ve gündeme ilişkin değerlendirmelerin kamuoyuyla paylaşılması bekleniyor.

VATANDAŞLARIN YAKINDAN TAKİP ETTİĞİ KONULAR

Ekonomi, güvenlik ve dış politika başlıklarının yanı sıra vatandaşların günlük yaşamını ilgilendiren konulara ilişkin yapılacak açıklamalar da yakından takip ediliyor.

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

ÜÇ İRAN TANKERİ HEDEF ALINDI

Üç İran tankerinin hedef alındığına ilişkin gelişmeler bölgedeki tansiyonun yeniden yükselmesine neden oldu. Olayın ayrıntıları ve gelişmeler uluslararası kamuoyu tarafından takip ediliyor.

OLAYIN AYRINTILARI ARAŞTIRILIYOR

Tankerlerle ilgili gelişmelere ilişkin farklı açıklamalar gündeme gelirken, olayın ayrıntılarının netleşmesi için resmi açıklamalar ve güvenilir kaynaklardan gelecek bilgiler bekleniyor.

ABD'DEN AÇIKLAMA

ABD tarafının olaya ilişkin açıklamaları uluslararası kamuoyu tarafından yakından takip ediliyor.

İRAN'IN TEPKİSİ

İran yönetiminin gelişmeye ilişkin vereceği tepki ve yapacağı açıklamalar bölgedeki diplomatik sürecin seyri açısından önem taşıyor.

BÖLGESEL GERİLİM

ABD ve İran arasındaki gerilim, Orta Doğu'daki güvenlik ve diplomasi gündemini doğrudan etkileyen başlıklar arasında bulunuyor.

PETROL PİYASALARI TAKİPTE

Bölgede yaşanan gelişmeler enerji piyasaları tarafından da yakından izleniyor. Petrol arzı ve bölgesel risklere ilişkin gelişmeler fiyatlamalar üzerinde etkili olabiliyor.

DİPLOMATİK TEMASLAR ÖNEMLİ

Önümüzdeki süreçte tarafların açıklamaları ve diplomatik temaslar, gerilimin seyrine ilişkin önemli göstergeler arasında olacak.

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

GELİŞME DÜNYA GÜNDEMİNDE

Tankerlerle ilgili gelişme, ABD ile İran arasındaki gerilimin yeniden gündeme gelmesine neden oldu.

ABD-İRAN GERİLİMİ

İki ülke arasındaki ilişkilerde yaşanan gerilim, bölgedeki güvenlik ve diplomasi gelişmelerinin yakından takip edilmesine neden oluyor.

BÖLGEDEKİ GELİŞMELER İZLENİYOR

Olayın ardından bölgedeki gelişmeler ve taraflardan gelecek yeni açıklamalar uluslararası kamuoyu tarafından takip ediliyor.

İRAN'IN TEPKİSİ BEKLENİYOR

İran yönetiminin gelişmeye ilişkin açıklaması ve vereceği tepkinin bölgedeki diplomatik sürecin seyri açısından önem taşıdığı değerlendiriliyor.

ENERJİ GÜVENLİĞİ GÜNDEMDE

Orta Doğu'daki gelişmeler enerji güvenliği ve petrol taşımacılığı açısından da yakından izleniyor.

DİPLOMATİK TEMASLAR

Bölgede tansiyonun düşürülmesine yönelik diplomatik girişimlerin önümüzdeki dönemde önem kazanması bekleniyor.

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

Türkiye ekonomisinin önümüzdeki üç yıllık dönemde izleyeceği politikalara ilişkin hedefler gündemde. Yeni Orta Vadeli Program kapsamında ekonominin farklı alanlarına yönelik planlamaların ortaya konulması bekleniyor.

ENFLASYONLA MÜCADELE

Ekonomi politikalarının önemli başlıklarından biri enflasyonla mücadele olmaya devam ediyor. Fiyat istikrarının sağlanmasına yönelik politikaların önümüzdeki dönemde de önemini koruması bekleniyor.

BÜYÜME VE İSTİHDAM

Ekonomik büyümenin sürdürülebilir şekilde devam ettirilmesi ve istihdamın desteklenmesi programın önemli başlıkları arasında değerlendiriliyor.

KAMU MALİYESİ

Kamu harcamaları, bütçe dengesi ve mali disiplin de ekonomik planlamanın önemli unsurları arasında bulunuyor.

YATIRIM VE ÜRETİM

Üretim kapasitesinin artırılması, yatırımların desteklenmesi ve ekonomik faaliyetlerin güçlendirilmesine yönelik politikalar da takip ediliyor.

PİYASALARIN TAKİBİ

Açıklanacak ekonomik hedeflerin ardından piyasaların göstereceği tepki ve ekonomik verilerin seyri yakından izlenecek.

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

YAPILANMANIN AMACI

Yeni yapının ekonomik gelişmelerin daha yakından takip edilmesi ve ilgili kurumlar arasında koordinasyon sağlanması amacıyla oluşturulduğu belirtiliyor.

KRİTİK SEKTÖRLER TAKİP EDİLECEK

Enerji, ticaret ve finans gibi ekonominin kritik alanlarındaki gelişmelerin yeni yapılanma tarafından takip edilmesi bekleniyor.

DIŞ BASKILAR

İran ekonomisi üzerindeki dış baskılar ve yaptırımlar ülkenin ekonomik gündeminde önemli bir yer tutuyor.

BÖLGESEL GELİŞMELER

İran'daki ekonomik gelişmeler, ülkenin bölgesel politikaları ve uluslararası ilişkileriyle birlikte değerlendiriliyor.

ÖNÜMÜZDEKİ SÜREÇ

Yeni yapılanmanın çalışmalarının İran ekonomisi üzerindeki etkisi ve alınacak kararlar önümüzdeki dönemde yakından takip edilecek.

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

Bursa'da yola dökülen mazot nedeniyle kayganlaşan zeminde zincirleme kaza meydana geldi. Kazaya yaklaşık 10 aracın karıştığı bildirildi.

YOL KAYGANLAŞTI

Bir tırdan yola dökülen mazot, yol yüzeyinin kayganlaşmasına neden oldu. Bu durum sürücüler açısından ciddi bir trafik riski oluşturdu.

10 ARAÇ KAZAYA KARIŞTI

Kayganlaşan yolda meydana gelen zincirleme kazada yaklaşık 10 aracın birbirine karıştığı bildirildi.

EKİPLER BÖLGEYE SEVK EDİLDİ

İhbar üzerine bölgeye ilgili ekipler yönlendirilirken, yol güvenliğinin sağlanması ve dökülen maddenin temizlenmesi için çalışma başlatıldı.

SÜRÜCÜLERE UYARI

Yetkililer, yol yüzeyindeki kayganlık nedeniyle sürücülerin dikkatli olması ve trafik işaretlerine uyması gerektiğini hatırlatıyor.

İNCELEME BAŞLATILDI

Kazanın meydana geliş şekli ve yola mazot dökülmesine ilişkin ayrıntıların belirlenmesi amacıyla inceleme başlatıldığı bildirildi.

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

OLAYLA İLGİLİ İNCELEME

Oyuncunun İstanbul Kağıthane'deki evinde yaşamını yitirdiği öğrenilirken, olayla ilgili ayrıntıların resmi açıklamalar doğrultusunda netleşmesi bekleniyor.

SANAT DÜNYASINDAN BAŞSAĞLIĞI MESAJLARI

Kılıç'ın vefatının ardından sanat dünyasından çok sayıda başsağlığı ve taziye mesajı paylaşılması bekleniyor.

TİYATRO KARİYERİ

Serhat Mustafa Kılıç, sanat hayatı boyunca tiyatro sahnesinde çeşitli çalışmalarda yer aldı ve oyunculuk kariyerini farklı projelerle sürdürdü.

TELEVİZYON ÇALIŞMALARI

Oyuncunun televizyon projelerinde de yer aldığı ve geniş bir izleyici kitlesi tarafından tanındığı belirtildi.

SİNEMA KARİYERİ

Kılıç, sinema alanında da çeşitli yapımlarda rol alarak oyunculuk kariyerini farklı mecralarda sürdürdü.

ÖLÜM NEDENİNE İLİŞKİN KESİN BİLGİ BEKLENİYOR

Vefatın nedenine ilişkin kesin ve doğrulanmış bilgilerin resmi açıklamalarla netleşmesi bekleniyor.

CENAZE PROGRAMI

Cenaze töreninin tarih ve yeriyle ilgili yapılacak resmi açıklamaların takip edilmesi bekleniyor.

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

SEL RİSKİNE DİKKAT

Kuvvetli yağışların bazı bölgelerde kısa sürede su baskınlarına yol açabileceği belirtilirken, vatandaşların dikkatli olması istendi.

HEYELAN TEHLİKESİ

Yağışların etkili olduğu eğimli ve toprak yapısının hassas olduğu bölgelerde heyelan riskinin artabileceği değerlendiriliyor.

SÜRÜCÜLERE UYARI

Yağış sırasında görüş mesafesinin azalabileceği ve yolların kayganlaşabileceği belirtilirken, sürücülerin hızlarını yol ve hava şartlarına göre ayarlaması önem taşıyor.

VATANDAŞLAR TEDBİRLİ OLMALI

Vatandaşların meteorolojik uyarıları takip etmesi ve riskli bölgelerde gerekli tedbirleri alması isteniyor.

HAVA DURUMU TAKİP EDİLMELİ

Yağışların seyri ve uyarıların güncellenip güncellenmediği resmi meteoroloji kaynaklarından takip edilmeli.

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

DEPREM VERİLERİ TAKİP EDİLİYOR

Depremlerin büyüklüğü, derinliği ve merkez üssü gibi bilgiler resmi kurumların yayımladığı veriler üzerinden takip ediliyor.

AFAD VERİLERİ

AFAD tarafından paylaşılan son deprem verileri, meydana gelen sarsıntıların zaman ve konum bilgileriyle birlikte kamuoyuna sunuluyor.

KANDİLLİ RASATHANESİ

Kandilli Rasathanesi de Türkiye ve çevresindeki sismik hareketlere ilişkin verileri düzenli olarak yayımlıyor.

DEPREM SONRASI NE YAPILMALI?

Deprem sırasında ve sonrasında resmi kurumların uyarılarının takip edilmesi, güvenli alanlara geçilmesi ve gerekli durumlarda acil yardım ekipleriyle iletişim kurulması önem taşıyor.

ARTÇI SARSINTILAR

Depremlerin ardından artçı sarsıntılar meydana gelebileceğinden vatandaşların resmi açıklamaları takip etmesi gerekiyor.

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

2026 KPSS Lisans Genel Yetenek-Genel Kültür oturumu gerçekleştirildi. Sınava katılan adaylar sınav sürecinin tamamlanmasının ardından sonuç takvimini takip etmeye başladı.

ADAYLAR SINAVDA TER DÖKTÜ

Adaylar sınav merkezlerinde belirlenen saatlerde sınava katılırken, sınav süreci ÖSYM tarafından açıklanan kurallar doğrultusunda yürütüldü.

SINAV SÜRECİ

Genel Yetenek ve Genel Kültür oturumunda adaylara ilgili testler uygulanırken, sınavın ardından cevap anahtarı ve değerlendirme sürecine ilişkin açıklamalar takip ediliyor.

SINAV SONUÇLARI BEKLENİYOR

Adaylar sınav sonuçlarının açıklanacağı tarihi ÖSYM'nin resmi sınav takvimi üzerinden takip edecek.

DEĞERLENDİRME SÜRECİ

Sınav sonuçlarının değerlendirilmesinin ardından adayların puanları ve başarı sıralamaları açıklanacak.

PUANLARIN KULLANIMI

KPSS puanları, ilgili kurumların personel alım süreçlerinde ve mevzuatta belirtilen şartlar doğrultusunda kullanılabiliyor.

ADAYLARA BAŞARILAR

Haberİsta olarak sınava katılan tüm adaylara sonuç sürecinde başarılar diliyoruz.

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

İstanbul derbisinde Beşiktaş ile Fenerbahçe karşı karşıya geldi. Mücadeleyi Beşiktaş 2-1'lik skorla kazanarak önemli bir galibiyet elde etti.

MAÇTA BÜYÜK HEYECAN

İki takımın karşılaşması boyunca mücadele yüksek tempoda devam ederken, taraftarların ilgisi de dikkat çekti.

BEŞİKTAŞ'TAN ÖNEMLİ GALİBİYET

Beşiktaş aldığı üç puanla lig yarışında önemli bir sonuç elde etti. Siyah-beyazlı ekip karşılaşmanın ardından galibiyetin sevincini yaşadı.

FENERBAHÇE MÜCADELEYİ SÜRDÜRDÜ

Fenerbahçe sahadan mağlubiyetle ayrılırken sezon hedefleri doğrultusunda mücadelesine devam ediyor.

TARAFTARLARDAN BÜYÜK İLGİ

Derbi öncesinde ve karşılaşma sırasında iki takım taraftarlarının ilgisi dikkat çekti. Mücadele spor kamuoyunun da gündeminde önemli yer tuttu.

LİG YARIŞI

Derbiden alınan üç puanın iki takımın sezon hedefleri açısından önemli olduğu değerlendiriliyor.

ÖNÜMÜZDEKİ MAÇLAR

Her iki takım da sezonun kalan bölümünde lig ve diğer organizasyonlardaki mücadelelerine devam edecek.

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

Altın piyasasındaki fiyat hareketleri yatırımcıların ve vatandaşların gündemindeki yerini koruyor. Küresel piyasalardaki gelişmeler ve iç piyasadaki hareketlilik altın fiyatlarının seyri açısından yakından izleniyor.

GRAM ALTIN TAKİP EDİLİYOR

Türkiye'de yatırımcıların yakından takip ettiği gram altın fiyatı, ons altındaki hareketler ve döviz kurundaki değişimlerden etkilenebiliyor.

ÇEYREK ALTIN

Fiziki altın talebi nedeniyle çeyrek altın fiyatları da vatandaşlar tarafından yakından takip ediliyor. Fiyatlar gün içerisinde piyasa koşullarına bağlı olarak değişebiliyor.

ONS ALTIN

Küresel piyasalarda ons altının seyri, Türkiye'deki altın fiyatlaması açısından önemli göstergeler arasında bulunuyor.

PİYASALARDA GÖZLER EKONOMİK VERİLERDE

ABD ekonomisine ilişkin açıklanacak veriler ve merkez bankalarının para politikaları altın piyasasının yönü açısından yakından takip ediliyor.

YATIRIMCILAR TEMKİNLİ

Altın fiyatlarındaki kısa vadeli hareketlerin piyasa koşullarına göre değişebileceği belirtilirken, yatırım kararlarının kişisel risk durumu dikkate alınarak değerlendirilmesi önem taşıyor.

ÖNEMLİ NOT

Altın fiyatları gün içerisinde değişebildiği için işlem öncesinde güncel fiyatların yetkili piyasa ve finans kuruluşlarından kontrol edilmesi gerekiyor.

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

Benzin, motorin ve LPG fiyatlarındaki değişimler araç sahipleri tarafından yakından takip ediliyor. Fiyatlardaki hareketlilik ulaşım ve taşımacılık maliyetleri açısından da önem taşıyor.

PETROL FİYATLARI ETKİLİ OLUYOR

Küresel petrol piyasalarında yaşanan hareketlilik, akaryakıt fiyatlarının oluşumunda önemli unsurlardan biri olarak öne çıkıyor.

DÖVİZ KURU DA ÖNEMLİ

Türkiye'de akaryakıt fiyatlarının oluşumunda döviz kuru ve uluslararası petrol fiyatları önemli faktörler arasında bulunuyor.

SÜRÜCÜLER GÜNCEL FİYATLARI TAKİP EDİYOR

Akaryakıt istasyonlarındaki fiyatlar şehir, dağıtıcı ve dönemsel değişikliklere göre farklılık gösterebiliyor.

ULAŞIM MALİYETLERİ

Akaryakıt fiyatlarındaki değişimler bireysel araç kullanıcılarının yanı sıra taşımacılık ve lojistik sektörünü de etkileyebiliyor.

PİYASALAR İZLENİYOR

Önümüzdeki dönemde petrol fiyatları, döviz hareketleri ve küresel ekonomik gelişmelerin akaryakıt piyasasının seyri açısından belirleyici olması bekleniyor.

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

TANKIN TARİHİ ARAŞTIRILIYOR

Bulunan askeri aracın hangi dönemde ve hangi koşullarda bölgeye getirildiğine ilişkin araştırmalar yürütülüyor.

İKİNCİ DÜNYA SAVAŞI DÖNEMİ

Tankın İkinci Dünya Savaşı yıllarından kaldığının belirlenmesi halinde buluntu, dönemin askeri tarihi açısından dikkat çekici bir örnek oluşturacak.

ÜNİVERSİTE ALTINDA BULUNDU

Tankın bir üniversite yapısının altında ortaya çıkarılması buluntunun en dikkat çekici ayrıntılarından biri oldu.

UZMANLAR İNCELİYOR

Tarihi askeri araç üzerinde yapılacak incelemelerle modelinin ve geçmişinin daha ayrıntılı şekilde belirlenmesi bekleniyor.

TARİHİ DEĞERİ ARAŞTIRILIYOR

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

ŞAMPİYONLUK YARIŞI

Sezon boyunca elde edilen puanların ardından şampiyonluk mücadelesi büyük önem taşıyor. Yarışlarda alınacak sonuçların genel puan durumuna etkisi yakından takip ediliyor.

SPORCULAR PİSTE ÇIKIYOR

Farklı ülkelerden gelen sporcular zorlu parkurda derece elde etmek için mücadele ediyor.

AFYONKARAHİSAR'DA BÜYÜK İLGİ

Organizasyonun kentte önemli bir spor etkinliği olarak takip edildiği belirtilirken, motosiklet sporuna yönelik ilginin de arttığı görülüyor.

ZORLU PARKUR

Afyonkarahisar'daki pist, farklı zemin ve viraj özellikleriyle sporculara zorlu bir mücadele sunuyor.

TÜRKİYE'NİN MOTOSİKLET SPORLARINDAKİ YERİ

Türkiye'nin uluslararası motosiklet organizasyonlarına ev sahipliği yapması, motor sporlarının ülkedeki tanıtımı açısından önem taşıyor.

ŞAMPİYONLUK İÇİN KRİTİK MÜCADELE

Yarışların ardından sezon puan tablosunun şekillenmesi ve şampiyonluk yarışının daha da netleşmesi bekleniyor.

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

SINIR KONTROLLERİ

Avrupa'ya giriş ve çıkışlarda yolcuların kimlik ve seyahat bilgilerinin kontrol edilmesine yönelik uygulamalar önem taşıyor.

DİJİTAL SİSTEMLER

Avrupa'nın sınır yönetiminde dijital sistemlerin daha fazla kullanılması hedefleniyor.

SEYAHAT ÖNCESİ KONTROL

Yurt dışına çıkacak kişilerin pasaport, vize ve diğer giriş şartlarını seyahat öncesinde kontrol etmesi gerekiyor.

YOLCULAR İÇİN ÖNEMLİ

Sınır kapılarında yapılacak kontroller nedeniyle seyahat sürelerinde değişiklik yaşanabileceği değerlendiriliyor.

AVRUPA'DA GÜVENLİK

Yeni uygulamaların temel amaçları arasında sınır güvenliğinin güçlendirilmesi ve düzensiz göçle mücadele bulunuyor.

KURALLAR ÜLKELERE GÖRE DEĞİŞEBİLİR

Avrupa ülkelerine giriş şartlarının vatandaşlığa ve seyahat amacına göre farklılık gösterebileceği unutulmamalı.

RESMİ KAYNAKLAR TAKİP EDİLMELİ

Seyahat edecek kişilerin güncel bilgileri ilgili ülkenin ve Avrupa Birliği kurumlarının resmi kaynaklarından kontrol etmesi önem taşıyor.

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

5 Eylül 2026 tarihli Resmî Gazete yayımlandı. Yeni sayıda kamu kurumlarını, vatandaşları ve çeşitli sektörleri ilgilendiren karar ve düzenlemeler yer aldı.

YENİ DÜZENLEMELER

Resmî Gazete'de yayımlanan yönetmelik, tebliğ ve diğer düzenlemeler ilgili mevzuat kapsamında yürürlüğe giriyor.

ATAMALAR

Cumhurbaşkanlığı ve çeşitli kamu kurumlarına ilişkin bazı atama kararları da Resmî Gazete'nin gündeminde yer aldı.

YARGI KARARLARI

Sayının içeriğinde ilgili kurum ve kuruluşları ilgilendiren çeşitli yargı kararları ve düzenlemeler yayımlandı.

YÜRÜRLÜĞE GİREN KARARLAR

Resmî Gazete'de yayımlanan düzenlemelerin yürürlük tarihleri ilgili karar ve yönetmeliklerde belirtiliyor.

VATANDAŞLAR İÇİN ÖNEMLİ

Günlük yaşamı veya çalışma hayatını ilgilendiren yeni düzenlemelerin ayrıntılarının resmi metinlerden takip edilmesi gerekiyor.

RESMİ METİNLER ESAS ALINMALI

Haberlerde yer alan özet bilgilerin yanı sıra hukuki ve idari işlemlerde Resmî Gazete'de yayımlanan resmi metinlerin esas alınması önem taşıyor.

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

TÜRKİYE-İTALYA FİNALİ

Final karşılaşması voleybolseverler tarafından büyük bir heyecanla bekleniyor. İki güçlü takım şampiyonluk için sahada olacak.

MİLLİ TAKIMIN HEDEFİ ŞAMPİYONLUK

Filenin Sultanları, turnuvada gösterdiği performansın ardından kupayı kazanmak için mücadele ediyor.

ZORLU RAKİP İTALYA

İtalya, Avrupa voleybolunun güçlü ekipleri arasında yer alırken final karşılaşmasının çekişmeli geçmesi bekleniyor.

TÜRKİYE'DE BÜYÜK HEYECAN

Milli takımın final karşılaşması öncesinde Türkiye genelinde voleybolseverlerin mücadeleye yoğun ilgi göstermesi bekleniyor.

MİLLİ FORMAYA DESTEK

Taraftarların milli takıma destek mesajları paylaşması ve karşılaşmayı yakından takip etmesi bekleniyor.

AVRUPA ŞAMPİYONLUĞU İÇİN SON MAÇ

Final karşılaşması turnuvanın en önemli mücadelelerinden biri olarak öne çıkıyor.

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

Para piyasası fonlarına ilişkin vergi uygulamasında değişiklik gündeme geldi. Yeni düzenleme yatırımcıların fon getirilerini değerlendirirken vergi kesintilerini de dikkate almasını gerektiriyor.

STOPAJ ORANI YÜZDE 10

Yapılan düzenlemeyle para piyasası fonlarında uygulanan stopaj oranının yüzde 10'a çıkarıldığı bildirildi.

YATIRIMCILARIN DİKKATİNDE

Düzenlemenin ardından yatırımcıların fon getirilerini değerlendirirken vergi kesintisini de hesaba katması gerekiyor.

FON GETİRİLERİ

Para piyasası fonları kısa vadeli yatırım araçlarına yönelen yatırımcılar tarafından tercih ediliyor.

VERGİ UYGULAMASI

Stopaj, yatırım araçlarından elde edilen belirli gelirler üzerinden yapılan vergi kesintisini ifade ediyor.

YATIRIM KARARLARI

Yatırımcıların yalnızca brüt getiriye değil, vergi ve diğer maliyetler sonrasında oluşabilecek net getiriye de dikkat etmesi önem taşıyor.

GÜNCEL BİLGİLER TAKİP EDİLMELİ

Vergi uygulamalarındaki değişiklikler yatırım kararlarını etkileyebileceğinden resmi açıklamaların takip edilmesi gerekiyor.

ÖNEMLİ NOT

Bu haber yatırım tavsiyesi değildir. Yatırım kararları kişisel finansal koşullar ve riskler değerlendirilerek verilmelidir.

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

ÖDEMELER HESAPLARA YATIRILIYOR

Sosyal yardım ödemelerinden yararlanan vatandaşların ödemeleri ilgili ödeme takvimi doğrultusunda hesaplarına aktarılıyor.

HAK SAHİPLERİ ÖDEMELERİNİ KONTROL EDİYOR

Vatandaşlar ödemelerin hesaplarına yansıyıp yansımadığını ilgili bankacılık kanallarından veya resmi sistemlerden kontrol edebiliyor.

SOSYAL DESTEKLER

Yaşlı ve engelli aylıkları, sosyal destek mekanizmaları kapsamında ihtiyaç sahibi vatandaşlara yönelik ödemeler arasında bulunuyor.

ÖDEME TARİHLERİ TAKİP EDİLMELİ

Ödeme dönemlerinde tarih ve uygulamaların resmi kurumların açıklamalarından takip edilmesi önem taşıyor.

RESMİ KAYNAKLAR ÖNEMLİ

Ödeme miktarı, hak sahipliği ve ödeme tarihleriyle ilgili en güncel bilgilerin ilgili kamu kurumlarından alınması gerekiyor.

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

SONUÇLAR 8 EYLÜL'DE AÇIKLANACAK

PISA 2025 araştırmasının sonuçlarının 8 Eylül tarihinde kamuoyuyla paylaşılması bekleniyor.

PISA NEDİR?

PISA, farklı ülkelerdeki 15 yaş grubundaki öğrencilerin okuma becerileri, matematik ve fen alanlarındaki bilgi ve becerilerini değerlendiren uluslararası bir araştırmadır.

TÜRKİYE'NİN PERFORMANSI

Türkiye'nin PISA 2025 sonuçlarında göstereceği performans öğrenciler, öğretmenler, veliler ve eğitim politikaları açısından yakından takip ediliyor.

EĞİTİM POLİTİKALARINA KATKI

PISA sonuçları ülkelerin eğitim sistemlerinin güçlü ve geliştirilmesi gereken yönlerinin değerlendirilmesinde kullanılan uluslararası göstergelerden biri olarak öne çıkıyor.

SONUÇLAR NASIL DEĞERLENDİRİLECEK?

Sonuçların yalnızca ülke sıralaması üzerinden değil, öğrencilerin farklı alanlardaki performansları ve önceki dönemlerle karşılaştırmalar üzerinden değerlendirilmesi önem taşıyor.

TÜRKİYE'DE EĞİTİM GÜNDEMİ

Açıklanacak sonuçların Türkiye'deki eğitim politikaları ve öğrencilerin akademik performansına ilişkin değerlendirmelere katkı sağlaması bekleniyor.

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
