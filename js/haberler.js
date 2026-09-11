"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
   PROFESYONEL / GELİŞTİRİLMİŞ SÜRÜM
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

Mersin'in Bozyazı ilçesinde ormanlık alanda yangın çıktı. Yangının fark edilmesinin ardından ilgili ekipler bölgeye sevk edilirken, alevlerin kontrol altına alınması için müdahale başlatıldı.

Yangın, özellikle ormanlık alanlarda kısa sürede farklı noktalara ilerleyebilmesi nedeniyle ekiplerin yoğun çalışma yürüttüğü olaylar arasında yer alıyor. Bozyazı'daki yangında da ekiplerin önceliği alevlerin yayılmasını sınırlandırmak ve yangını kontrol altına almak oldu.

HAVADAN VE KARADAN MÜDAHALE SÜRÜYOR

Yangına hem kara ekipleri hem de hava araçlarıyla müdahale ediliyor. Kara ekipleri yangın çevresinde çalışmalarını sürdürürken, hava araçları ulaşılması daha zor bölümlerde yürütülen müdahaleye destek veriyor.

Havadan ve karadan yapılan çalışmaların aynı anda yürütülmesi, yangının farklı bölümlerinin kontrol altında tutulması açısından önem taşıyor. Ekipler sahadaki duruma göre müdahale noktalarını ve çalışma planını değerlendiriyor.

YANGININ SEYRİNDE HAVA KOŞULLARI ÖNEMLİ

Orman yangınlarında hava sıcaklığı, rüzgarın yönü ve hızı ile arazinin yapısı müdahalenin seyrini etkileyebiliyor.

Özellikle rüzgarın yön değiştirmesi, alevlerin ilerleme yönünün kısa sürede değişmesine neden olabildiğinden ekipler meteorolojik koşulları da dikkate alıyor. Bu nedenle söndürme çalışmaları yalnızca mevcut alevlere müdahaleden değil, yangının ilerleyebileceği alanların değerlendirilmesinden de oluşuyor.

EKİPLER RİSKLİ NOKTALARI KONTROL EDİYOR

Yangınla mücadelede alevlerin bulunduğu bölgenin yanı sıra çevredeki riskli alanların kontrol edilmesi de önem taşıyor.

Ekipler, yangının yayılma ihtimali bulunan bölgelerde gerekli çalışmaları yürütürken, müdahale sırasında saha koşullarını sürekli değerlendiriyor. Arazinin yapısı ve ulaşım imkanları, kara ekiplerinin çalışmalarında dikkate alınan unsurlar arasında bulunuyor.

VATANDAŞLARIN DİKKATLİ OLMASI İSTENİYOR

Yangın bölgesine yakın alanlarda bulunan vatandaşların ekiplerin çalışmalarını aksatabilecek davranışlardan kaçınması gerekiyor.

Özellikle yangın söndürme araçlarının geçiş güzergahlarının açık tutulması ve hava araçlarının çalıştığı bölgelerde güvenlik kurallarına uyulması önem taşıyor. Vatandaşların yangınla ilgili bilgileri resmi kurumlardan takip etmesi gerekiyor.

SOĞUTMA ÇALIŞMALARI DA ÖNEM TAŞIYOR

Yangının kontrol altına alınmasının ardından çalışmaların yalnızca alevlerin söndürülmesiyle sona ermesi beklenmiyor. Yangın bölgesinde sıcak noktaların kontrol edilmesi ve yeniden alevlenme ihtimaline karşı alanın izlenmesi gerekiyor.

Bu nedenle söndürme çalışmalarının ardından yapılacak soğutma faaliyetleri, yangının tamamen kontrol altına alınması açısından önemli bir aşama oluşturuyor.

ORMAN YANGINLARINDA ERKEN MÜDAHALE ÖNEMLİ

Orman yangınlarında yangının erken fark edilmesi ve ekiplerin kısa sürede bölgeye ulaşması, alevlerin daha geniş alanlara yayılmasının önlenmesi açısından önem taşıyor.

Sıcak ve kuru hava koşullarının etkili olduğu dönemlerde ormanlık alanlarda daha dikkatli olunması gerekiyor. Yangına neden olabilecek davranışlardan kaçınılması ve şüpheli bir durum görüldüğünde ilgili kurumlara haber verilmesi büyük önem taşıyor.

BOZYAZI'DAKİ ÇALIŞMALAR SÜRÜYOR

Bozyazı'daki yangına ilişkin müdahale çalışmaları ekiplerin sahadaki değerlendirmeleri doğrultusunda devam ediyor.

Yangının kontrol altına alınıp alınmadığı, çalışmaların hangi aşamada olduğu ve bölgenin son durumu konusunda yapılacak resmi açıklamalar gelişmelerin seyri açısından belirleyici olacak.

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
BAYRAKTAROĞLU VE ÜSTEL BİR ARAYA GELDİ

Orgeneral Bayraktaroğlu, Kuzey Kıbrıs Türk Cumhuriyeti'nde gerçekleştirdiği temaslar kapsamında KKTC Başbakanı Ünal Üstel ile görüştü.

Türkiye ile KKTC arasındaki siyasi ve güvenlik temasları açısından takip edilen görüşmede bölgesel gelişmeler ile iki taraf arasındaki iş birliğinin ele alındığı bildirildi.

GÜNDEMİN ÖNEMLİ BAŞLIKLARINDAN BİRİ GÜVENLİK

Görüşmede güvenlik konularının yanı sıra bölgedeki güncel gelişmelerin değerlendirildiği belirtildi.

Doğu Akdeniz'deki gelişmeler, Kıbrıs çevresindeki güvenlik gündemi ve bölgedeki siyasi hareketlilik Türkiye ve KKTC'nin yakından takip ettiği başlıklar arasında bulunuyor.

Görüşmelerde bu gelişmelerin değerlendirilmesi, tarafların mevcut durum hakkındaki görüşlerini paylaşmasına imkan sağlıyor.

TÜRKİYE-KKTC İŞ BİRLİĞİ

Türkiye ile KKTC arasındaki ilişkiler farklı alanlarda sürdürülen temaslarla devam ediyor.

Siyasi ilişkilerin yanında güvenlik, ekonomi, eğitim ve sosyal alanlarda gerçekleştirilen çalışmalar da iki taraf arasındaki ilişkilerin önemli parçalarını oluşturuyor.

Üst düzey yetkililer arasında gerçekleştirilen görüşmeler, mevcut iş birliğinin değerlendirilmesi ve yeni gelişmeler hakkında karşılıklı bilgi paylaşılması açısından önem taşıyor.

DOĞU AKDENİZ GÜNDEMİ

Doğu Akdeniz, enerji kaynakları, deniz yetki alanları, güvenlik ve bölgesel diplomasi açısından uluslararası gündemde önemli bir yere sahip.

Bölgede yaşanan siyasi ve güvenlik gelişmeleri Türkiye, KKTC ve diğer bölge ülkeleri tarafından yakından izleniyor.

Bu nedenle Türkiye ile KKTC arasında gerçekleştirilen üst düzey temaslarda bölgesel gelişmelerin değerlendirilmesi önem taşıyor.

KOORDİNASYONUN SÜRDÜRÜLMESİ

Güvenlik alanında koordinasyon, bölgesel gelişmelerin hızlı şekilde değerlendirilmesi açısından önem taşıyor.

Tarafların gerçekleştirdiği temaslar sayesinde bölgedeki gelişmeler hakkında karşılıklı değerlendirme yapılırken, mevcut iş birliği alanlarının da ele alınması mümkün oluyor.

GÖRÜŞMENİN ARDINDAN GÖZLER YENİ AÇIKLAMALARDA

Bayraktaroğlu ile Üstel arasındaki görüşmenin ardından Türkiye-KKTC ilişkileri ve Doğu Akdeniz'deki gelişmeler gündemde kalmaya devam edecek.

Tarafların önümüzdeki dönemde yapacağı yeni açıklamalar ve gerçekleştireceği temaslar, bölgesel güvenlik gündeminin değerlendirilmesi açısından önem taşıyacak.

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
PUTİN VE TRUMP TELEFON GÖRÜŞMESİ GERÇEKLEŞTİ

Rusya Devlet Başkanı Vladimir Putin ile ABD Başkanı Donald Trump arasında telefon görüşmesi gerçekleştirildi.

Görüşmenin merkezinde Ukrayna savaşı ve savaşın sona erdirilmesine yönelik diplomatik girişimler yer aldı. ABD ile Rusya arasındaki temaslar, savaşın geleceği ve olası müzakere süreci açısından uluslararası kamuoyunun dikkatle izlediği başlıklardan biri.

UKRAYNA SAVAŞI GÜNDEMİN MERKEZİNDE

Rusya-Ukrayna savaşı, Avrupa güvenliği ve uluslararası diplomasi açısından önemini koruyor.

Savaşın sahadaki seyri kadar, taraflar arasında yürütülen diplomatik temaslar da sürecin geleceği açısından önem taşıyor. ABD ve Rusya arasında gerçekleştirilen üst düzey görüşmeler bu nedenle uluslararası kamuoyunda yakından takip ediliyor.

BARIŞ SÜRECİ İÇİN DİPLOMATİK TEMASLAR

Putin ve Trump arasındaki görüşmede olası barış sürecinin de ele alındığı bildirildi.

Savaşın sona erdirilmesi konusunda atılabilecek adımların ne olacağı, tarafların birbirinden beklentileri ve müzakere ihtimali önümüzdeki dönemin önemli gündem maddeleri arasında bulunuyor.

Diplomatik temasların sonuç üretip üretmeyeceği ise yapılacak yeni açıklamalar ve görüşmelerle daha net ortaya çıkacak.

ABD-RUSYA İLİŞKİLERİ

Washington ile Moskova arasındaki ilişkiler yalnızca Ukrayna savaşı açısından değil, uluslararası güvenlik bakımından da önem taşıyor.

İki ülke arasındaki temasların düzeyi, farklı bölgesel krizler ve güvenlik başlıkları üzerinde de etkili olabiliyor.

Bu nedenle Putin-Trump görüşmesi, iki ülkenin doğrudan iletişim kanallarını sürdürmesi açısından da dikkat çekiyor.

AVRUPA GÜVENLİĞİ

Ukrayna'daki savaşın Avrupa güvenliği üzerindeki etkileri, savaşın başladığı dönemden bu yana uluslararası gündemin önemli başlıkları arasında bulunuyor.

Savaşın seyri, Avrupa ülkelerinin güvenlik politikaları ve NATO-Rusya ilişkileri gibi konularla birlikte değerlendiriliyor.

Diplomatik çözüm ihtimali, Avrupa'nın gelecekteki güvenlik ortamı açısından da yakından izleniyor.

SAHA VE DİPLOMASİ BİRLİKTE İZLENİYOR

Ukrayna'daki askeri gelişmeler ile diplomatik görüşmeler birbirinden bağımsız değerlendirilmiyor.

Sahadaki durum, tarafların müzakere pozisyonlarını etkileyebildiği gibi diplomatik girişimlerin başarısı da savaşın geleceği açısından önem taşıyor.

Bu nedenle uluslararası kamuoyu hem cephedeki gelişmeleri hem de siyasi temasları birlikte takip ediyor.

ÖNÜMÜZDEKİ SÜREÇ

Putin ve Trump arasındaki telefon görüşmesinin ardından ABD-Rusya temaslarının nasıl ilerleyeceği merak konusu.

Yeni görüşmeler, resmi açıklamalar ve Ukrayna'daki gelişmeler, barış sürecinin yönünü anlamak açısından önemli göstergeler olacak.

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
GİRNE AÇIKLARINDA GEMİ BATTI

Kuzey Kıbrıs Türk Cumhuriyeti'nin Girne açıklarında bir geminin batmasının ardından bölgede arama-kurtarma çalışmaları başlatıldı.

Olayın bildirilmesi üzerine ilgili ekipler denizde çalışma yürütmek üzere bölgeye yönlendirildi. Arama faaliyetlerinde olayın meydana geldiği alan ve çevresindeki deniz koşulları dikkate alınıyor.

ARAMA-KURTARMA EKİPLERİ BÖLGEDE

Ekipler, belirlenen arama alanlarında çalışmalarını sürdürüyor.

Denizde yürütülen operasyonlarda arama bölgesinin doğru şekilde belirlenmesi, ekipler arasındaki iletişim ve hava koşullarının değerlendirilmesi büyük önem taşıyor.

Çalışmaların amacı olayla ilgili mümkün olan en fazla bilgiye ulaşmak ve arama-kurtarma sürecini güvenli şekilde yürütmek.

DENİZ KOŞULLARI ÇALIŞMALARI ETKİLEYEBİLİYOR

Denizde gerçekleştirilen arama-kurtarma faaliyetlerinde rüzgar, dalga yüksekliği ve görüş mesafesi operasyonların planlanmasında önemli rol oynuyor.

Hava koşullarının değişmesi halinde ekiplerin çalışma yöntemi veya arama alanları yeniden değerlendirilebiliyor.

Bu nedenle bölgede yürütülen çalışmalar sırasında meteorolojik koşulların sürekli takip edilmesi gerekiyor.

FARKLI EKİPLERİN KOORDİNASYONU ÖNEMLİ

Deniz kazalarında arama-kurtarma çalışmalarının etkili şekilde yürütülebilmesi için görevli ekiplerin koordinasyonu gerekiyor.

Arama alanının belirlenmesi, elde edilen bilgilerin paylaşılması ve denizdeki ekiplerin güvenliğinin sağlanması operasyonun önemli aşamalarını oluşturuyor.

OLAYIN AYRINTILARI ARAŞTIRILIYOR

Geminin neden battığı ve olayın hangi koşullarda meydana geldiğine ilişkin ayrıntıların resmi incelemeler sonucunda netleşmesi bekleniyor.

Olayın ardından yetkili kurumların açıklamaları, kamuoyunun gelişmeleri doğru şekilde takip edebilmesi açısından önem taşıyor.

DENİZ TRAFİĞİNDE GÜVENLİK

Deniz ulaşımında hava koşulları, gemilerin teknik durumu, seyir şartları ve deniz trafiği güvenlik açısından önem taşıyan unsurlar arasında bulunuyor.

Yaşanan kazaların ardından yapılacak incelemeler, olayın nedenlerinin belirlenmesine ve benzer durumların değerlendirilmesine katkı sağlayabiliyor.

GİRNE'DEKİ ÇALIŞMALAR DEVAM EDİYOR

Girne açıklarında yürütülen arama-kurtarma faaliyetlerinin sonucu ve olayın ayrıntıları, yetkili kurumların açıklamaları doğrultusunda netleşecek.

Bölgedeki ekiplerin çalışmaları sürerken, yeni bilgilerin resmi açıklamalarla kamuoyuna aktarılması bekleniyor.

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
TÜRKİYE'DE GÜNDEMİN ÖNE ÇIKAN BAŞLIKLARI

Türkiye'de yeni haftayla birlikte ekonomi, eğitim, teknoloji, kamu hizmetleri ve günlük yaşama ilişkin farklı gelişmeler kamuoyunun gündeminde yer alıyor.

Vatandaşların gündemini doğrudan ilgilendiren gelişmelerin yanı sıra resmi kurumlar tarafından yayımlanan duyurular da takip ediliyor.

EKONOMİ GÜNDEMİ

Ekonomide fiyat hareketleri, enflasyon, döviz piyasası ve ekonomik politikalar vatandaşların yakından takip ettiği başlıklar arasında bulunuyor.

Ekonomik göstergelerde meydana gelen değişiklikler hem işletmelerin maliyetlerini hem de hane halkının harcamalarını etkileyebiliyor. Bu nedenle açıklanan ekonomik veriler yalnızca finans piyasaları açısından değil, günlük yaşam açısından da önem taşıyor.

TEKNOLOJİ GÜNDEMİ

Yapay zeka, dijital hizmetler, mobil cihazlar ve internet teknolojilerindeki gelişmeler günlük yaşamın önemli bir parçası haline geliyor.

Kamu ve özel sektörde dijital hizmetlerin yaygınlaşması, vatandaşların birçok işlemi internet üzerinden gerçekleştirmesine imkan sağlıyor.

EĞİTİM GÜNDEMİ

Öğrenciler, veliler ve öğretmenler eğitim takvimi, sınavlar ve yeni eğitim dönemine ilişkin açıklamaları takip ediyor.

Eğitim alanında yapılacak yeni düzenlemeler öğrencilerin okul hayatını, sınav süreçlerini ve eğitim planlamasını doğrudan etkileyebiliyor.

GÜNLÜK YAŞAMI İLGİLENDİREN KARARLAR

Ulaşım, sosyal destekler, kamu hizmetleri ve çeşitli idari düzenlemeler de vatandaşların günlük yaşamında karşılık bulan başlıklar arasında yer alıyor.

Özellikle resmi kurumların açıkladığı yeni uygulamalarda yürürlük tarihleri ve başvuru şartlarının dikkatle incelenmesi gerekiyor.

RESMİ KAYNAKLAR NEDEN ÖNEMLİ?

Gündeme ilişkin bilgilerin hızlı şekilde yayılması, doğrulanmamış bilgilerin de sosyal medya üzerinden paylaşılmasına neden olabiliyor.

Vatandaşların özellikle ekonomik kararlar, kamu düzenlemeleri, eğitim ve sosyal destekler konusunda resmi kurumların açıklamalarını esas alması önem taşıyor.

YENİ HAFTADA GÜNDEM

Türkiye'de önümüzdeki günlerde ekonomi, eğitim, teknoloji ve kamu gündeminin yanı sıra uluslararası gelişmelerin iç politikaya ve ekonomiye yansımaları da takip edilecek.

Yeni kararlar ve resmi açıklamalar geldikçe vatandaşların günlük yaşamını ilgilendiren başlıklar daha net şekilde ortaya çıkacak.

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
KABİNE TOPLANTISI GÜNDEMİ

Cumhurbaşkanlığı Kabinesi, Cumhurbaşkanı Recep Tayyip Erdoğan başkanlığında gündemdeki başlıkları değerlendirmek üzere toplanıyor.

Toplantıda ekonomi, güvenlik, dış politika ve Türkiye'nin iç gündemine ilişkin konuların ele alınması bekleniyor.

EKONOMİ ÖNE ÇIKAN BAŞLIKLAR ARASINDA

Kabine toplantısında ekonomi gündeminin önemli başlıklardan biri olması bekleniyor.

Fiyat istikrarı, ekonomik büyüme, kamu maliyesi ve önümüzdeki dönemde uygulanabilecek ekonomi politikaları toplantının takip edilen başlıkları arasında bulunuyor.

Kabine toplantısından çıkacak değerlendirmeler, özellikle vatandaşların günlük yaşamını etkileyebilecek ekonomik gelişmeler açısından önem taşıyor.

GÜVENLİK GÜNDEMİ

Türkiye'nin iç ve dış güvenliğine ilişkin gelişmelerin de toplantıda değerlendirilmesi bekleniyor.

Türkiye'nin yakın çevresinde yaşanan gelişmeler, bölgesel güvenlik ortamı ve ilgili kurumların çalışmaları güvenlik gündeminin başlıkları arasında yer alıyor.

TERÖRSÜZ TÜRKİYE SÜRECİ

Toplantının dikkat çeken başlıklarından birinin de "Terörsüz Türkiye" süreci olması bekleniyor.

Sürece ilişkin gelişmeler, güvenlik politikaları ve ilgili kurumların değerlendirmelerinin toplantıda ele alınması gündemde bulunuyor.

Bu konuda yapılacak açıklamalar, sürecin bundan sonraki aşamalarının anlaşılması açısından önem taşıyacak.

DIŞ POLİTİKA VE BÖLGESEL GELİŞMELER

Türkiye'nin yakın çevresinde yaşanan siyasi ve güvenlik gelişmelerinin de Kabine gündeminde değerlendirilmesi bekleniyor.

Orta Doğu ve Doğu Akdeniz'deki gelişmelerin yanı sıra Türkiye'nin dış politika gündemini ilgilendiren konular toplantının önemli başlıkları arasında bulunuyor.

TOPLANTI SONRASI AÇIKLAMA BEKLENİYOR

Kabine toplantısının ardından alınan kararlar ve gündeme ilişkin değerlendirmelerin kamuoyuyla paylaşılması bekleniyor.

Yapılacak açıklamalarda ekonomi, güvenlik ve dış politika başta olmak üzere vatandaşları ilgilendiren çeşitli başlıklara ilişkin değerlendirmelerin yer alması bekleniyor.

GÖZLER TOPLANTI SONRASINDA

Kabine toplantısında ele alınan konular ve toplantı sonrasında yapılacak açıklamalar önümüzdeki dönemin gündeminin anlaşılması açısından önem taşıyor.

Özellikle ekonomi ve güvenlik alanındaki değerlendirmeler, kamuoyu tarafından yakından takip edilecek.

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
ABD-İRAN GERİLİMİNDE YENİ GELİŞME

ABD ile İran arasındaki gerilim, İran'a ait olduğu belirtilen üç tankerin hedef alındığına ilişkin gelişmelerin ardından yeniden uluslararası gündemin merkezine taşındı.

Deniz taşımacılığıyla ilgili yaşanan gelişme, yalnızca iki ülke arasındaki ilişkiler açısından değil, Orta Doğu'daki güvenlik ortamı ve enerji piyasaları bakımından da dikkat çekti.

ÜÇ İRAN TANKERİ HEDEF ALINDI

Üç İran tankerinin hedef alındığına ilişkin haberler sonrasında olayın ayrıntıları uluslararası kamuoyunun gündemine geldi.

Tankerlerin durumu, olayın hangi koşullarda gerçekleştiği ve sonrasında bölgede ne tür gelişmeler yaşanacağı konusunda farklı açıklamalar bulunurken, resmi kaynaklardan gelecek bilgiler önem taşıyor.

ABD'DEN AÇIKLAMALAR TAKİP EDİLİYOR

ABD yönetiminin olaya ilişkin açıklamaları, gelişmenin gerekçesinin ve Washington'ın bölgedeki yaklaşımının anlaşılması açısından önem taşıyor.

ABD'nin İran'a yönelik politikası, bölgesel güvenlik ve deniz taşımacılığı açısından uzun süredir uluslararası kamuoyunun takip ettiği başlıklar arasında bulunuyor.

İRAN'IN TUTUMU ÖNEMLİ

İran yönetiminin yaşanan gelişmeye ilişkin açıklamaları da sürecin geleceği açısından yakından takip ediliyor.

İran'ın vereceği siyasi veya diplomatik tepkinin, ABD ile ilişkilerin bundan sonraki seyrine etkisi olabileceği değerlendiriliyor.

BÖLGESEL GÜVENLİK ENDİŞESİ

ABD ile İran arasındaki gerilim, Orta Doğu'daki diğer ülkelerin güvenlik politikalarını da yakından ilgilendiriyor.

Bölgede meydana gelen yeni olaylar, deniz ticareti, enerji taşımacılığı ve uluslararası diplomasi açısından farklı sonuçlar doğurabiliyor.

ENERJİ PİYASALARI DA İZLİYOR

Orta Doğu'daki güvenlik gelişmeleri petrol ve enerji piyasaları açısından da önem taşıyor.

Petrol taşımacılığında yaşanabilecek güvenlik sorunları, arz güvenliği ve taşıma maliyetleri üzerinde etkili olabiliyor. Bu nedenle bölgedeki gelişmeler enerji piyasalarında da yakından takip ediliyor.

DİPLOMASİ TRAFİĞİ ÖNEM KAZANIYOR

Gerilimin daha fazla yükselmemesi açısından diplomatik temaslar önem taşıyor.

ABD ve İran'dan gelecek yeni açıklamalar ile bölgedeki diğer ülkelerin tutumu, olayın siyasi sonuçlarının anlaşılması açısından belirleyici olabilir.

ÖNÜMÜZDEKİ SÜREÇ

Tankerlerle ilgili gelişmenin ardından gözler ABD ve İran'ın açıklamalarına çevrildi.

Olayın ayrıntılarının resmi kaynaklarla netleşmesi ve bölgede yeni bir gelişme yaşanıp yaşanmayacağı uluslararası kamuoyu tarafından yakından takip edilecek.

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

ABD yönetimi, İran'a ait üç tankerin vurulduğunu açıkladı.

Açıklamanın ardından gelişme, ABD ile İran arasındaki ilişkiler ve Orta Doğu'daki güvenlik gündemi açısından uluslararası kamuoyunun dikkatini çekti.

OLAYIN AYRINTILARI MERAK EDİLİYOR

Tankerlerin hangi koşullarda hedef alındığı ve olayın ardından bölgede ne gibi gelişmeler yaşanacağı merak konusu oldu.

Yaşanan gelişmeyle ilgili ayrıntıların farklı resmi açıklamalar ve güvenilir kaynaklar üzerinden netleşmesi bekleniyor.

ABD-İRAN GERİLİMİ

ABD ile İran arasındaki ilişkiler uzun süredir bölgesel ve uluslararası siyasetin önemli başlıklarından biri.

İki ülke arasındaki gerilim yalnızca diplomatik ilişkileri değil, Orta Doğu'daki güvenlik ortamını ve enerji taşımacılığını da etkileyebilecek gelişmeler arasında değerlendiriliyor.

DENİZ TAŞIMACILIĞI GÜNDEMDE

Tankerlerin hedef alındığına ilişkin açıklama, deniz taşımacılığının güvenliği konusunu da yeniden gündeme getirdi.

Bölgede meydana gelebilecek güvenlik sorunları, ticari gemilerin kullandığı güzergahlar ve enerji taşımacılığı açısından önem taşıyor.

İRAN'IN TEPKİSİ BEKLENİYOR

İran yönetiminin gelişmeye ilişkin açıklaması ve vereceği tepki, olayın diplomatik sonuçlarının anlaşılması açısından önem taşıyor.

Taraflardan gelecek açıklamalar, gerilimin siyasi boyutunun nasıl şekilleneceği konusunda yeni bilgiler sağlayabilir.

ENERJİ PİYASALARI GELİŞMELERİ İZLİYOR

Orta Doğu'daki güvenlik gelişmeleri petrol ve enerji piyasaları açısından da yakından takip ediliyor.

Bölgede enerji taşımacılığının güvenliğiyle ilgili yaşanabilecek sorunlar, uluslararası enerji piyasalarında beklentileri etkileyebiliyor.

DİPLOMATİK TEMASLAR ÖNEMLİ

ABD ile İran arasındaki gerilimin daha fazla yükselmesini önlemek amacıyla diplomatik kanalların açık tutulması önem taşıyor.

Uluslararası aktörlerin açıklamaları ve taraflar arasında kurulabilecek temaslar, bölgedeki gelişmelerin geleceği açısından yakından izlenecek.

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
TÜRKİYE EKONOMİSİNDE ÜÇ YILLIK PLAN

Türkiye ekonomisinin önümüzdeki üç yıllık dönemde izleyeceği politikalara ilişkin hedefler gündemde.

Yeni Orta Vadeli Program kapsamında büyüme, enflasyon, istihdam ve kamu maliyesi gibi ekonominin temel alanlarına ilişkin hedeflerin ortaya konulması bekleniyor.

ENFLASYONLA MÜCADELE ÖNCELİKLİ BAŞLIKLARDAN

Ekonomik programların en önemli başlıklarından biri fiyat istikrarının sağlanması.

Enflasyonun seyri, vatandaşların satın alma gücünü ve işletmelerin maliyetlerini doğrudan etkileyebildiği için açıklanan ekonomik hedefler kamuoyu tarafından yakından takip ediliyor.

Enflasyonla mücadelede uygulanacak politikaların sonuçları ise açıklanacak yeni ekonomik veriler üzerinden değerlendirilecek.

BÜYÜME VE ÜRETİM

Ekonomik büyümenin sürdürülebilir olması, üç yıllık planlamanın temel konuları arasında bulunuyor.

Üretimin devam etmesi, yatırımların desteklenmesi ve ekonomik faaliyetlerin korunması büyüme açısından önem taşıyor.

Büyüme rakamlarının tek başına değerlendirilmesi yerine istihdam, üretim ve yatırım göstergeleriyle birlikte ele alınması ekonominin genel görünümünün daha doğru anlaşılmasını sağlayabilir.

İSTİHDAM GÜNDEMİ

Ekonomik büyümenin vatandaşlara yansıyan önemli göstergelerinden biri istihdam.

İş gücü piyasasındaki gelişmeler, işsizlik oranları ve yeni istihdam alanlarının oluşturulması önümüzdeki dönemin ekonomik gündeminde önemli yer tutacak.

KAMU MALİYESİ

Bütçe dengesi, kamu harcamaları ve mali disiplin de ekonomik yol haritasının önemli başlıkları arasında.

Kamu gelirleri ile harcamalar arasındaki dengenin korunması, ekonomik programların sürdürülebilirliği açısından önem taşıyor.

YATIRIM VE İHRACAT

Üretim kapasitesinin artırılması ve yatırımların desteklenmesi ekonominin uzun vadeli büyümesi açısından önem taşıyor.

Bunun yanında ihracatın artırılması ve dış ticaret dengesinin geliştirilmesi de Türkiye ekonomisinin önümüzdeki dönemde takip edeceği başlıklardan biri olacak.

KÜRESEL EKONOMİ DE ETKİLİ

Türkiye'nin ekonomik performansı yalnızca iç politikalarla belirlenmiyor.

Küresel büyüme, enerji fiyatları, uluslararası faiz oranları ve dış ticaret koşulları Türkiye ekonomisinin görünümünü etkileyebilecek faktörler arasında bulunuyor.

HEDEFLERİN GERÇEKLEŞME DURUMU TAKİP EDİLECEK

Üç yıllık ekonomik yol haritasında yer alacak hedeflerin gerçekleşme durumu, dönem içerisinde açıklanacak ekonomik verilerle değerlendirilecek.

Enflasyon, büyüme, istihdam ve bütçe verilerinin birlikte incelenmesi, programın uygulanma sürecinin daha sağlıklı değerlendirilmesine imkan sağlayacak.

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
İRAN'DA EKONOMİK SAVAŞ KARARGÂHI KURULDU

İran'da ekonomik baskılara karşı alınabilecek önlemlerin koordinasyonu amacıyla "Ekonomik Savaş Karargâhı" adı verilen yeni bir yapılanmanın kurulduğu açıklandı.

Yeni yapılanmanın ekonomik gelişmelerin daha yakından takip edilmesi ve ilgili kurumlar arasında koordinasyon sağlanması amacıyla oluşturulduğu bildirildi.

EKONOMİK BASKILAR GÜNDEMDE

İran ekonomisi uzun süredir yaptırımlar, dış ticaret koşulları ve uluslararası finans sistemine erişim gibi çeşitli baskılarla karşı karşıya bulunuyor.

Bu durum özellikle ticaret, enerji ve finans alanlarındaki gelişmelerin ülke ekonomisi açısından daha yakından izlenmesine neden oluyor.

YENİ YAPILANMANIN AMACI

Ekonomik Savaş Karargâhı'nın temel amaçlarından biri ekonomik gelişmeler hakkında kurumlar arasında koordinasyon sağlamak.

Ekonomik koşulların hızlı şekilde değiştiği dönemlerde kurumlar arasındaki bilgi akışının güçlendirilmesi, alınabilecek önlemlerin daha hızlı değerlendirilmesine imkan sağlayabiliyor.

KRİTİK SEKTÖRLER ÖN PLANDA

Enerji, finans, ticaret ve üretim gibi alanlar İran ekonomisinin önemli parçaları arasında bulunuyor.

Bu sektörlerde yaşanabilecek gelişmelerin ülke ekonomisi üzerindeki etkileri nedeniyle ekonomik karar alma süreçlerinde kritik sektörlerin durumunun yakından takip edilmesi önem taşıyor.

YAPTIRIMLARIN ETKİSİ

Uluslararası yaptırımlar İran ekonomisinin dış ticaret ve finans alanındaki hareket alanını etkileyen temel unsurlar arasında yer alıyor.

Yaptırımların kapsamı ve uluslararası gelişmeler, İran'ın ekonomik politikalarında dikkate alınan başlıklar arasında bulunuyor.

ENERJİ SEKTÖRÜNÜN ROLÜ

İran ekonomisinde enerji sektörü önemli bir yere sahip.

Petrol ve enerji ticaretindeki gelişmeler, ülkenin dış gelirleri ve ekonomik görünümü açısından önem taşıyor. Küresel enerji piyasalarındaki değişiklikler de İran ekonomisinin geleceği açısından yakından izleniyor.

BÖLGESEL GELİŞMELER

İran'ın ekonomik görünümü, Orta Doğu'daki siyasi ve güvenlik gelişmeleriyle de bağlantılı.

Bölgede yaşanan gerilimlerin ticaret yolları, enerji taşımacılığı ve yatırım ortamı üzerinde oluşturabileceği etkiler İran ekonomisi açısından önem taşıyor.

ÖNÜMÜZDEKİ SÜREÇ

Yeni yapılanmanın hangi kararları alacağı ve İran ekonomisine yönelik hangi politikaların uygulanacağı önümüzdeki dönemin önemli başlıkları arasında olacak.

İran yönetiminin açıklayacağı ekonomik tedbirler ve uluslararası gelişmeler, yeni yapılanmanın rolünün daha net anlaşılmasını sağlayacak.

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

Bursa'da bir tırdan yola dökülen mazot nedeniyle kayganlaşan zeminde zincirleme kaza meydana geldi.

Yaklaşık 10 aracın karıştığı bildirilen kazanın ardından bölgeye ilgili ekipler sevk edildi. Yol güvenliğinin sağlanması ve mazotun temizlenmesi için çalışma başlatıldı.

MAZOT YOLU KAYGANLAŞTIRDI

Yol yüzeyine dökülen mazot, araçların lastikleri ile zemin arasındaki tutunmayı azaltabiliyor.

Özellikle sürücülerin fren yaptığı veya yön değiştirdiği anlarda kaygan zemin araçların kontrolünü zorlaştırabiliyor. Bu nedenle yola yakıt veya yağ dökülmesi trafik güvenliği açısından önemli bir risk oluşturuyor.

YAKLAŞIK 10 ARAÇ KAZAYA KARIŞTI

Kayganlaşan yolda meydana gelen zincirleme kazaya yaklaşık 10 aracın karıştığı bildirildi.

Birden fazla aracın aynı olay içerisinde yer alması nedeniyle ekipler bölgede hem trafik güvenliğini sağlamaya hem de kazaya karışan araçların güvenli şekilde kaldırılmasına yönelik çalışma yürüttü.

EKİPLER BÖLGEYE SEVK EDİLDİ

İhbarın ardından olay yerine ilgili ekipler yönlendirilirken, yol üzerinde oluşan tehlikenin giderilmesi için çalışmalar başlatıldı.

Yola dökülen mazotun temizlenmesi, yeni kazaların önlenmesi açısından olay sonrası yapılması gereken önemli işlemlerden biri oldu.

SÜRÜCÜLERİN DİKKAT ETMESİ GEREKİYOR

Kaygan yol koşullarında sürücülerin hızlarını düşürmesi ve takip mesafesini artırması önem taşıyor.

Ani fren ve ani direksiyon hareketleri kaygan zeminde araç kontrolünü zorlaştırabileceğinden sürücülerin daha kontrollü hareket etmesi gerekiyor.

YOL GÜVENLİĞİNİN ÖNEMİ

Karayollarında güvenli ulaşım yalnızca sürücü davranışlarına değil, yol koşullarına da bağlı.

Yakıt, yağ veya başka kayganlaştırıcı maddelerin yola dökülmesi durumunda hızlı müdahale edilmesi, bölgede yeni kazaların meydana gelme ihtimalini azaltabiliyor.

KAZANIN AYRINTILARI İNCELENİYOR

Kazanın meydana geliş şekli ve yola mazot dökülmesine ilişkin ayrıntıların belirlenmesi amacıyla inceleme yürütülüyor.

Resmi incelemelerin ardından kazanın oluşumuna ilişkin daha ayrıntılı bilgilerin ortaya çıkması bekleniyor.

TRAFİK AKIŞINDA GÜVENLİK

Kazanın ardından bölgede trafik akışının güvenli şekilde devam ettirilmesi için gerekli çalışmalar yürütüldü.

Sürücülerin olay yerindeki trafik işaretleri, ekiplerin yönlendirmeleri ve geçici düzenlemelere uyması önem taşıyor.

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

Oyuncunun İstanbul Kağıthane'deki evinde yaşamını yitirdiği bilgisi gündeme gelirken, vefatın ayrıntıları konusunda resmi açıklamaların esas alınması gerektiği belirtiliyor.

SANAT DÜNYASINDA ÜZÜNTÜ

Kılıç'ın vefat haberi sanat dünyasında üzüntüyle karşılandı.

Tiyatro, televizyon ve sinema alanlarında çalışmalar yapan oyuncunun vefatının ardından sanat dünyasında taziye mesajlarının paylaşılması bekleniyor.

TİYATRO SAHNESİNDEKİ ÇALIŞMALARI

Tiyatro, oyunculuk kariyerinin önemli alanlarından biri olarak öne çıkıyor.

Sahne oyunculuğu, canlı performans gerektirmesi ve oyuncunun izleyiciyle doğrudan iletişim kurması bakımından televizyon ve sinemadan farklı bir çalışma alanı oluşturuyor.

Kılıç'ın da sanat kariyerinde tiyatro çalışmalarına yer verdiği belirtiliyor.

TELEVİZYON PROJELERİ

Oyuncunun televizyon yapımlarında da rol aldığı ve ekran çalışmalarıyla izleyiciler tarafından tanındığı ifade ediliyor.

Televizyon projeleri, oyuncuların farklı karakterleri geniş bir izleyici kitlesine ulaştırmasına imkan sağlayan önemli alanlardan biri.

SİNEMA ÇALIŞMALARI

Kılıç'ın sinema alanında da çalışmalar gerçekleştirdiği belirtiliyor.

Sinema oyunculuğunda karakterin hikaye içerisindeki konumu, filmin anlatım dili ve yönetmenin yaklaşımı oyuncunun performansını şekillendiren unsurlar arasında bulunuyor.

VEFAT HABERİNİN ARDINDAN MERAK EDİLENLER

Bir sanatçının vefat haberinin ardından hem kariyeri hem de geçmişte yer aldığı projeler yeniden gündeme gelebiliyor.

Kılıç'ın geçmiş çalışmalarına ilişkin bilgiler de vefat haberinin ardından sanatseverler tarafından araştırılmaya başlandı.

ÖLÜM NEDENİ KONUSUNDA RESMİ BİLGİ ÖNEMLİ

Vefatın nedenine ilişkin doğrulanmış ve resmi bir bilgi bulunmadığı sürece çeşitli iddiaların kesin bilgi gibi aktarılmaması gerekiyor.

Özellikle vefat haberlerinde resmi açıklamalar ve güvenilir kaynaklar esas alınmalı.

CENAZE PROGRAMI

Cenaze töreninin tarih ve yeriyle ilgili bilgilerin resmi açıklamalarla netleşmesi bekleniyor.

Program kesinleştiğinde sanat dünyası ve sevenleri tarafından takip edilecek.

SANAT DÜNYASINDAN TAZİYE MESAJLARI

Oyuncunun vefatının ardından meslektaşları ve sanat dünyasından isimlerin başsağlığı mesajları paylaşması bekleniyor.

Serhat Mustafa Kılıç'ın kariyerine ilişkin geçmiş çalışmalarının da önümüzdeki günlerde yeniden gündeme gelmesi bekleniyor.

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
4 İL İÇİN KUVVETLİ YAĞIŞ UYARISI

Meteoroloji tarafından dört il için kuvvetli yağış, sel ve heyelan riskine karşı uyarı yapıldı.

Yağışların etkili olabileceği bölgelerde vatandaşların hava durumunu takip etmesi ve özellikle riskli alanlarda dikkatli olması istendi.

SEL RİSKİ NEDEN ARTIYOR?

Kuvvetli yağışlar kısa süre içerisinde büyük miktarda suyun birikmesine neden olabiliyor.

Dere yatakları, alçak bölgeler ve yağmur suyunun tahliyesinin zor olduğu alanlar sel açısından daha riskli hale gelebiliyor.

Bu nedenle meteorolojik uyarı yapılan bölgelerde vatandaşların riskli alanlardan uzak durması önem taşıyor.

HEYELAN TEHLİKESİ

Yoğun yağış, eğimli arazilerde toprağın suya doymasına neden olarak heyelan riskini artırabiliyor.

Özellikle yamaçlarda ve eğimli bölgelerde yaşayanların resmi uyarıları takip etmesi gerekiyor.

Yollarda da toprak ve kaya parçalarının ulaşımı etkileyebilmesi nedeniyle sürücülerin dikkatli olması önem taşıyor.

SÜRÜCÜLER DİKKATLİ OLMALI

Kuvvetli yağış sırasında görüş mesafesi azalabilir, yollar kayganlaşabilir ve su birikintileri oluşabilir.

Sürücülerin hızlarını hava ve yol şartlarına göre ayarlaması, takip mesafesini koruması ve suyla kaplı yollarda dikkatli ilerlemesi gerekiyor.

HAVA DURUMU TAKİP EDİLMELİ

Meteorolojik koşullar kısa süre içerisinde değişebildiğinden vatandaşların güncel uyarıları takip etmesi önem taşıyor.

Özellikle kuvvetli yağış uyarılarında yalnızca günlük hava tahminine değil, resmi meteorolojik uyarı seviyelerine de dikkat edilmesi gerekiyor.

ULAŞIMDA AKSAMALAR YAŞANABİLİR

Kuvvetli yağışların etkili olduğu bölgelerde su baskınları, taşkınlar veya heyelan nedeniyle ulaşımda geçici aksamalar yaşanabiliyor.

Yola çıkacak kişilerin hava ve yol durumunu kontrol ederek hareket etmesi güvenlik açısından önem taşıyor.

VATANDAŞLAR TEDBİRLİ OLMALI

Riskli bölgelerde yaşayan vatandaşların yetkililerin yönlendirmelerine uyması gerekiyor.

Sel sırasında su basmış yollardan geçmeye çalışmak yerine güvenli alanlarda bulunmak ve resmi uyarıları takip etmek önem taşıyor.

RESMİ UYARILAR ESAS ALINMALI

Yağışların şiddeti, etkili olacağı bölgeler ve uyarıların geçerlilik süreleri değişebileceğinden güncel bilgiler resmi meteoroloji kaynaklarından kontrol edilmeli.

Yeni uyarılar yayımlandıkça vatandaşların planlarını güncel hava koşullarına göre düzenlemesi gerekiyor.

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

Türkiye'nin farklı bölgelerinde meydana gelen sarsıntılara ilişkin deprem verileri AFAD ve Kandilli Rasathanesi tarafından yayımlanıyor.

Listelerde depremin meydana geldiği bölge, zamanı, büyüklüğü ve derinliği gibi bilgiler yer alıyor.

DEPREM VERİLERİ NASIL OKUNMALI?

Deprem listelerinde yer alan büyüklük, derinlik ve merkez üssü bilgileri sarsıntının özelliklerini anlamak açısından önem taşıyor.

Farklı kurumların ölçüm yöntemleri nedeniyle ilk açıklanan değerlerde daha sonra küçük değişiklikler yapılabilmesi mümkün olduğundan güncel verilerin takip edilmesi gerekiyor.

AFAD VERİLERİ

AFAD, Türkiye ve çevresinde meydana gelen depremlere ilişkin verileri kamuoyuyla paylaşıyor.

Depremin zamanı, konumu ve büyüklüğü gibi bilgiler resmi sistemler üzerinden takip edilebiliyor.

KANDİLLİ RASATHANESİ VERİLERİ

Kandilli Rasathanesi de Türkiye ve çevresindeki sismik hareketlere ilişkin verileri yayımlayan önemli kurumlardan biri.

Vatandaşlar meydana gelen sarsıntıların merkez üssü ve diğer teknik bilgilerini ilgili sistemlerden kontrol edebiliyor.

DEPREM SONRASINDA NE YAPILMALI?

Deprem sonrasında vatandaşların öncelikle kendi güvenliğini sağlaması gerekiyor.

Hasar görmüş binalara yeniden girilmemesi, resmi ekiplerin uyarılarının takip edilmesi ve gerekli durumlarda acil yardım ekiplerinden destek alınması önem taşıyor.

ARTÇI SARSINTILARA DİKKAT

Depremlerin ardından artçı sarsıntılar meydana gelebiliyor.

Bu nedenle hasarlı yapılardan uzak durulması ve özellikle bina güvenliği konusunda yetkili ekiplerin değerlendirmelerinin beklenmesi gerekiyor.

DEPREME HAZIRLIK

Deprem riski bulunan bölgelerde afet öncesinde hazırlık yapılması önem taşıyor.

Aile içinde acil durumda buluşma noktalarının belirlenmesi, temel acil durum malzemelerinin hazır tutulması ve deprem sırasında yapılması gerekenlerin önceden öğrenilmesi hazırlık açısından fayda sağlayabilir.

RESMİ KAYNAKLAR TAKİP EDİLMELİ

Depremin büyüklüğü, konumu ve derinliği hakkında en güncel bilgilerin AFAD ve Kandilli Rasathanesi gibi güvenilir kaynaklardan kontrol edilmesi gerekiyor.

Sosyal medyada paylaşılan doğrulanmamış deprem bilgileri yerine resmi verilerin esas alınması önem taşıyor.

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

Sınava katılan adaylar sınav sürecinin tamamlanmasının ardından sonuçların açıklanacağı tarihi ve ÖSYM tarafından yapılacak duyuruları takip etmeye başladı.

KPSS NEDEN ÖNEMLİ?

KPSS, kamu kurumlarında görev almak isteyen adayların katıldığı önemli sınavlardan biri.

Sınav sonuçları, ilgili kurumların personel alım süreçlerinde ve mevzuatta belirtilen şartlar doğrultusunda kullanılabiliyor.

GENEL YETENEK VE GENEL KÜLTÜR OTURUMU

Genel Yetenek ve Genel Kültür oturumunda adayların ilgili testlerdeki performansları değerlendiriliyor.

Sınavın ardından cevap anahtarı, sonuçların açıklanma tarihi ve değerlendirme süreciyle ilgili ÖSYM duyuruları önem taşıyor.

ADAYLAR SONUÇLARI BEKLİYOR

Sınava giren adayların en çok merak ettiği konuların başında sonuçların açıklanacağı tarih geliyor.

Sonuçlar açıklandığında adaylar puan bilgilerini ÖSYM'nin ilgili sistemi üzerinden görüntüleyebilecek.

DEĞERLENDİRME SÜRECİ

Sınav sonuçlarının değerlendirilmesi ÖSYM tarafından belirlenen kurallar çerçevesinde gerçekleştirilecek.

Adayların puanlarının oluşmasının ardından ilgili personel alımlarında hangi puan türlerinin kullanılacağı kurumların ilanlarında belirtiliyor.

TERCİH VE BAŞVURU SÜRECİ

KPSS puanının tek başına bir kamu görevine yerleşme anlamına gelmediği unutulmamalı.

Adayların tercih veya başvuru dönemlerinde ilgili kurumun ilanında belirtilen eğitim, yaş, puan ve diğer şartları ayrıca kontrol etmesi gerekiyor.

ÖSYM DUYURULARI TAKİP EDİLMELİ

Sonuç tarihi, cevap anahtarı, sınav sonuçları ve diğer işlemlerle ilgili en güncel bilgilerin ÖSYM'nin resmi duyurularından takip edilmesi gerekiyor.

Sosyal medya üzerinden yayılan doğrulanmamış bilgilerin yerine resmi sınav takviminin esas alınması önem taşıyor.

ADAYLARA BAŞARILAR

2026 KPSS Lisans Genel Yetenek-Genel Kültür oturumuna katılan tüm adayların sonuç sürecini sağlıklı şekilde tamamlaması ve hedeflerine ulaşması temenni ediliyor.

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

Mücadeleyi Beşiktaş 2-1'lik skorla kazanarak üç puanın sahibi oldu. Derbiden çıkan sonuç, iki takımın sezon hedefleri açısından spor gündeminin öne çıkan başlıklarından biri haline geldi.

BEŞİKTAŞ'TAN DEĞERLİ ÜÇ PUAN

Siyah-beyazlı ekip, derbiden galibiyetle ayrılarak hanesine üç puan yazdırdı.

Derbi maçlarında alınan sonuçlar yalnızca puan tablosu açısından değil, takımın moral ve motivasyonu açısından da önem taşıyor.

FENERBAHÇE SAHADAN MAĞLUBİYETLE AYRILDI

Fenerbahçe, karşılaşmayı 2-1 kaybetti.

Sarı-lacivertli ekip açısından derbinin ardından önündeki maçlarda alınacak sonuçlar önem kazanırken, takımın sezon hedefleri doğrultusunda mücadelesi devam edecek.

DERBİ HEYECANI

Beşiktaş-Fenerbahçe karşılaşmaları Türk futbolunun en fazla ilgi gören derbileri arasında bulunuyor.

İki takımın taraftarları için büyük önem taşıyan mücadeleler, maç öncesinden başlayarak spor gündeminin merkezinde yer alıyor.

MAÇ SONUCUNUN LİG YARIŞINA ETKİSİ

Derbiden alınan üç puan Beşiktaş açısından lig yarışında önemli bir kazanım oluştururken, Fenerbahçe için puan kaybı anlamına geldi.

Ancak sezon uzun bir maraton olduğu için tek bir maçın ardından lig yarışının tamamı hakkında kesin değerlendirme yapmak mümkün değil.

ÖNÜMÜZDEKİ KARŞILAŞMALAR

Beşiktaş'ın galibiyetin ardından önündeki maçlarda aynı performansı sürdürmesi hedeflenirken, Fenerbahçe de yaşanan puan kaybının ardından yeniden galibiyet serisi oluşturmak isteyecek.

İki takımın bundan sonraki karşılaşmalarında elde edeceği sonuçlar puan tablosunun şekillenmesi açısından önem taşıyacak.

TARAFTARLARIN İLGİSİ

Derbi karşılaşmasına taraftarların ilgisi de yüksek oldu.

İstanbul derbileri, Türkiye'de futbol kültürünün en dikkat çeken karşılaşmaları arasında yer alırken, maç sonuçları günler boyunca spor kamuoyunda değerlendirilebiliyor.

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
ALTIN PİYASASINDA YENİ HAFTA

Altın fiyatları yeni haftanın başında yatırımcıların ve vatandaşların takip ettiği piyasa başlıkları arasında yer alıyor.

Gram altın, çeyrek altın ve ons altındaki hareketler farklı piyasa dinamiklerinden etkilenebildiği için fiyatların değerlendirilmesinde birden fazla gösterge önem taşıyor.

GRAM ALTIN NASIL HAREKET EDİYOR?

Türkiye'de en çok takip edilen altın türlerinden biri gram altın.

Gram altın fiyatı, uluslararası piyasalarda ons altının değerinin yanı sıra dolar/TL kurundaki değişimlerden de etkilenebiliyor.

Bu nedenle gram altın fiyatını takip edenlerin yalnızca ons altına değil, döviz piyasasındaki gelişmelere de bakması gerekiyor.

ÇEYREK ALTIN FİYATI

Çeyrek altın özellikle fiziki altın alan vatandaşların yakından takip ettiği ürünlerden biri.

Kuyumcu fiyatları ile piyasa ekranlarında görülen fiyatlar arasında dönemsel farklılıklar bulunabileceğinden işlem yapılmadan önce güncel fiyatın kontrol edilmesi önem taşıyor.

ONS ALTIN NEDEN ÖNEMLİ?

Ons altın, küresel altın piyasasının temel göstergelerinden biri.

ABD ekonomisine ilişkin veriler, faiz beklentileri, doların seyri ve küresel risk algısı ons altın fiyatı üzerinde etkili olabilen unsurlar arasında bulunuyor.

FAİZ BEKLENTİLERİ ALTINI ETKİLEYEBİLİYOR

Merkez bankalarının faiz politikalarına ilişkin beklentiler, yatırımcıların altın tercihlerini etkileyebiliyor.

Özellikle ABD Merkez Bankası'nın para politikasıyla ilgili beklentiler küresel piyasalarda yakından takip ediliyor.

KÜRESEL GELİŞMELER DE İZLENİYOR

Jeopolitik riskler, ekonomik belirsizlikler ve küresel piyasalardaki hareketlilik altına yönelik talebi etkileyebiliyor.

Bu nedenle altın fiyatlarını değerlendirirken yalnızca Türkiye'deki fiyatlara değil, küresel piyasalardaki gelişmelere de bakmak gerekiyor.

FİYATLAR GÜN İÇİNDE DEĞİŞEBİLİR

Altın fiyatları gün içerisinde piyasa koşullarına bağlı olarak değişebiliyor.

Ayrıca fiziki altın alım satımında ürünün türüne ve işlem yapılan yere göre fiyat farklılıkları görülebiliyor.

YATIRIMCILAR İÇİN ÖNEMLİ NOT

Altın fiyatındaki kısa vadeli hareketler gelecekteki fiyatı kesin olarak göstermiyor.

Yatırım kararlarında kişinin kendi finansal koşullarını ve risk durumunu dikkate alması gerekiyor.

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
AKARYAKIT FİYATLARINDA HAREKETLİLİK

Benzin, motorin ve LPG fiyatlarındaki değişimler araç sahiplerinin günlük olarak takip ettiği ekonomik konular arasında bulunuyor.

Akaryakıt fiyatları yalnızca bireysel sürücüleri değil, taşımacılık, lojistik ve farklı sektörlerde faaliyet gösteren işletmeleri de doğrudan ilgilendiriyor.

PETROL FİYATLARI ÖNEMLİ BİR ETKEN

Küresel petrol fiyatları akaryakıt piyasasının temel göstergelerinden biri.

Petrol fiyatlarında meydana gelen değişiklikler, enerji maliyetlerinin yanı sıra akaryakıt fiyatları üzerinde de etkili olabiliyor.

Ancak pompa fiyatlarının oluşumunda yalnızca petrol fiyatı değil, farklı ekonomik unsurlar da rol oynuyor.

DÖVİZ KURU DA ETKİLİ

Türkiye'de akaryakıt fiyatlarının oluşumunda döviz kuru da önemli bir faktör.

Döviz kurundaki değişimler ile uluslararası petrol fiyatlarının birlikte hareket etmesi, akaryakıt maliyetlerinin yönünü etkileyebiliyor.

SÜRÜCÜLER GÜNCEL FİYATLARI KONTROL EDİYOR

Akaryakıt fiyatları istasyona, dağıtıcı firmaya ve bölgesel koşullara göre farklılık gösterebiliyor.

Bu nedenle araç sahiplerinin yakıt alımı öncesinde bulunduğu bölgedeki güncel pompa fiyatını kontrol etmesi önem taşıyor.

ULAŞIM MALİYETLERİNE ETKİSİ

Yakıt maliyetlerindeki değişiklikler taşımacılık sektörünü doğrudan etkileyebiliyor.

Nakliye maliyetlerinin yükselmesi veya düşmesi, bazı ürün ve hizmetlerin taşıma giderleri üzerinde değişiklik oluşturabiliyor.

Bu nedenle akaryakıt fiyatları ekonominin farklı alanlarıyla bağlantılı bir konu olarak öne çıkıyor.

VATANDAŞLARIN GÜNLÜK YAŞAMINA YANSIMASI

Özel araç kullanan vatandaşlar için yakıt giderleri aylık bütçenin önemli kalemlerinden biri olabiliyor.

Bunun yanında şehirler arası taşımacılık ve ticari ulaşımda kullanılan yakıt maliyetleri de ekonomik faaliyetlerin bir parçasını oluşturuyor.

PİYASALARDA GÖZLER YENİ FİYATLARDA

Petrol piyasası, döviz kuru ve küresel ekonomik gelişmeler akaryakıt fiyatlarının gelecekteki seyrini etkileyebilecek başlıklar arasında.

Vatandaşların fiyat değişikliklerini güvenilir ve güncel kaynaklardan takip etmesi önem taşıyor.

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
RUSYA'DA DİKKAT ÇEKEN TARİHİ BULUNTU

Rusya'da yapılan çalışmalar sırasında bir üniversite yapısının altında İkinci Dünya Savaşı dönemine ait olduğu değerlendirilen bir tank bulundu.

Beklenmedik şekilde ortaya çıkan tarihi araç, bölgenin geçmişine ilişkin araştırmaların yeniden gündeme gelmesine neden oldu.

TANKIN GEÇMİŞİ ARAŞTIRILIYOR

Bulunan tankın hangi dönemde ve hangi koşullarda bölgeye getirildiği araştırılıyor.

Aracın modeli, üretim dönemi ve kullanım geçmişi hakkında yapılacak incelemeler, tankın tarihsel değerinin daha iyi anlaşılmasına yardımcı olabilir.

İKİNCİ DÜNYA SAVAŞI DÖNEMİ

Tankın İkinci Dünya Savaşı dönemine ait olduğunun kesinleşmesi halinde buluntu, dönemin askeri tarihi açısından dikkat çekici bir örnek oluşturacak.

İkinci Dünya Savaşı'nda kullanılan askeri araçlar, dönemin teknoloji seviyesinin ve savaş koşullarının anlaşılması açısından önemli tarihi materyaller arasında bulunuyor.

ÜNİVERSİTE YAPISININ ALTINDA BULUNMASI DİKKAT ÇEKTİ

Buluntunun bir üniversite yapısının altında ortaya çıkarılması olayın en dikkat çekici ayrıntılarından biri oldu.

Tankın bulunduğu yere nasıl getirildiği, neden burada kaldığı ve yapının inşası sırasında nasıl korunabildiği gibi soruların araştırılması gerekiyor.

UZMANLARIN İNCELEMESİ BEKLENİYOR

Tarihi askeri araçlarda yapılacak teknik incelemeler, aracın modeli ve üretim tarihi hakkında daha fazla bilgi sağlayabiliyor.

Ayrıca araç üzerindeki işaretler, üretim özellikleri ve mevcut durumu da geçmişinin araştırılmasında kullanılabilecek unsurlar arasında bulunuyor.

TARİHİ ARAÇLARIN KORUNMASI

Savaş dönemlerinden kalan askeri araçlar yalnızca askeri tarih açısından değil, dönemin sanayi ve teknoloji tarihinin anlaşılması bakımından da önem taşıyor.

Bu tür buluntuların korunması, gelecek nesillerin tarihi olayları somut materyaller üzerinden inceleyebilmesine imkan sağlıyor.

YENİ BİLGİLER BEKLENİYOR

Tankın geçmişine ilişkin araştırmalar tamamlandıkça buluntunun ne zaman ve nasıl kullanıldığına ilişkin daha ayrıntılı bilgilerin ortaya çıkması bekleniyor.

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

Uluslararası motosiklet sporunun önemli organizasyonlarından olan yarış, sezonun genel sıralaması açısından dikkatle takip ediliyor.

ŞAMPİYONLUK YARIŞI KIZIŞIYOR

Sezon boyunca toplanan puanlar şampiyonluk mücadelesinin şekillenmesinde önemli rol oynuyor.

Afyonkarahisar'daki yarışta alınacak dereceler, sezonun genel puan tablosu açısından değer taşıyor.

SPORCULAR ZORLU PARKURDA MÜCADELE EDİYOR

Motokros yarışlarında sporcular yalnızca rakipleriyle değil, aynı zamanda parkurun zorlu koşullarıyla da mücadele ediyor.

Virajlar, zemin yapısı, sıçrama noktaları ve yarış temposu sürücülerin performansını etkileyebilen unsurlar arasında bulunuyor.

AFYONKARAHİSAR'DA MOTOR SPORLARI İLGİSİ

MXGP'nin Afyonkarahisar'da düzenlenmesi, kentin uluslararası spor organizasyonları açısından görünürlüğünü artırıyor.

Büyük organizasyonlar aynı zamanda motosiklet sporlarının daha geniş kitlelere ulaşmasına ve gençlerin bu alana ilgi göstermesine katkı sağlayabiliyor.

YARIŞ STRATEJİSİ ÖNEMLİ

Motokrosta yalnızca hızlı olmak yeterli olmayabiliyor.

Sürücülerin lastik kullanımı, zemin koşulları, rakiplerle mücadele ve yarış içerisinde oluşabilecek değişikliklere göre strateji geliştirmesi gerekiyor.

TÜRKİYE'NİN MOTOR SPORLARINDAKİ YERİ

Türkiye'nin uluslararası motosiklet yarışlarına ev sahipliği yapması, ülkenin motor sporları alanındaki organizasyon kapasitesini göstermesi açısından önem taşıyor.

Bu tür etkinlikler hem profesyonel sporcuların Türkiye'ye gelmesini hem de yerel düzeyde motosiklet sporlarına olan ilginin artmasını sağlayabiliyor.

ŞAMPİYONLUK İÇİN KRİTİK AŞAMA

Afyonkarahisar'daki yarışın ardından sezon puan tablosunda önemli değişiklikler yaşanabilir.

Yarış sonuçları, şampiyonluk mücadelesinin son bölümüne girilirken sporcuların konumunu belirleyecek önemli göstergelerden biri olacak.

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

Avrupa'ya seyahat edecek kişileri ilgilendiren sınır kontrol uygulamalarında yeni düzenlemeler gündemde.

Seyahat planı yapan yolcuların pasaport, vize ve giriş şartlarının yanı sıra sınır kontrol prosedürlerini de yolculuk öncesinde kontrol etmesi önem taşıyor.

SINIR KONTROLLERİ NEDEN ÖNEMLİ?

Avrupa ülkelerine giriş ve çıkışlarda yolcuların kimlik ve seyahat belgeleri kontrol edilebiliyor.

Uygulamaların kapsamı, yolcunun vatandaşlığına, seyahat amacına ve gidilen ülkeye göre değişebiliyor.

DİJİTAL SİSTEMLER KULLANILIYOR

Avrupa'nın sınır yönetiminde dijital teknolojilerin kullanımının artırılması hedefleniyor.

Dijital sistemler, yolcu bilgilerinin işlenmesi, sınır güvenliği ve giriş-çıkış işlemlerinin daha düzenli şekilde yürütülmesi amacıyla kullanılabiliyor.

SEYAHATTEN ÖNCE BELGELER KONTROL EDİLMELİ

Yurt dışına çıkacak kişilerin seyahat öncesinde pasaportlarının geçerlilik süresini ve gerekiyorsa vize şartlarını kontrol etmesi gerekiyor.

Bunun yanında gidilecek ülkenin özel giriş şartları da ayrıca incelenmeli.

YOLCULUK SÜRESİNE DİKKAT

Sınır kapılarındaki kontroller, özellikle yoğun dönemlerde yolcuların bekleme süresini etkileyebiliyor.

Bu nedenle seyahat planı yapan kişilerin ulaşım bağlantıları ve sınır geçiş süreleri konusunda yeterli zaman bırakması faydalı olabilir.

KURALLAR HER ÜLKEDE AYNI DEĞİL

Avrupa ülkelerinde uygulanabilecek giriş şartları her yolcu için aynı olmayabilir.

Turistik ziyaret, eğitim, çalışma veya transit geçiş gibi farklı seyahat amaçlarında farklı kurallar uygulanabileceğinden resmi kaynakların kontrol edilmesi gerekiyor.

GÜVENLİK VE SINIR YÖNETİMİ

Sınır kontrol sistemlerinin geliştirilmesinde güvenlik, düzensiz göçle mücadele ve yolcu hareketlerinin daha düzenli takip edilmesi gibi amaçlar bulunuyor.

Yeni sistemlerin uygulanmasıyla birlikte yolcuların sınır geçişlerinde karşılaşabileceği prosedürlerin de değişmesi mümkün.

RESMİ KAYNAKLAR KONTROL EDİLMELİ

Seyahat kuralları zaman içerisinde değişebildiği için yolcuların eski internet içeriklerine güvenmek yerine seyahat tarihine yakın güncel resmi bilgileri kontrol etmesi gerekiyor.

Özellikle vize ve giriş şartlarında gidilecek ülkenin resmi kaynakları esas alınmalı.

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
5 EYLÜL 2026 TARİHLİ RESMÎ GAZETE YAYIMLANDI

5 Eylül 2026 tarihli Resmî Gazete yayımlandı.

Yeni sayıda kamu kurumlarını, vatandaşları ve farklı sektörleri ilgilendiren çeşitli kararlar, düzenlemeler ve resmi metinler yer aldı.

RESMÎ GAZETE NEDİR?

Resmî Gazete, devlet tarafından yayımlanan karar, yönetmelik, tebliğ ve çeşitli hukuki metinlerin kamuoyuna duyurulduğu resmi yayın organı.

Yayımlanan düzenlemelerin yürürlük tarihleri ve kapsamları ilgili metinlerde ayrıntılı şekilde belirtiliyor.

YENİ DÜZENLEMELER

Resmî Gazete'de yayımlanan yönetmelik, tebliğ ve diğer düzenlemeler belirli alanlarda yeni kurallar veya mevcut kurallarda değişiklikler getirebiliyor.

Bir düzenlemenin kimleri ilgilendirdiği ve ne zaman yürürlüğe girdiği, yayımlanan resmi metnin içerisinde yer alıyor.

ATAMA KARARLARI

Kamu kurumları ve çeşitli görev alanlarına ilişkin atama kararları da Resmî Gazete'de yayımlanabiliyor.

Atama kararlarının kapsamı ve görevlendirilen kişiler resmi metinlerde açık şekilde belirtiliyor.

YARGI KARARLARI VE HUKUKİ METİNLER

Resmî Gazete'de yayımlanan hukuki metinler arasında çeşitli yargı kararları ve mevzuata ilişkin düzenlemeler de bulunabiliyor.

Bu metinlerin hukuki sonuçlarının doğru şekilde anlaşılması için yalnızca haber özetlerine değil, resmi kararın tamamına bakılması gerekiyor.

YÜRÜRLÜK TARİHLERİNE DİKKAT

Her düzenleme yayımlandığı gün yürürlüğe girmeyebilir.

Bazı karar ve yönetmeliklerde yürürlük tarihi ayrıca belirtilirken, bazı düzenlemeler yayımlandığı tarihte yürürlüğe girebiliyor.

VATANDAŞLAR İÇİN NEDEN ÖNEMLİ?

Resmî Gazete'de yayımlanan bazı kararlar doğrudan vatandaşların günlük hayatını, çalışma koşullarını veya kamu hizmetlerinden yararlanma biçimini etkileyebiliyor.

Bu nedenle vatandaşların kendilerini ilgilendiren bir düzenleme olduğunda resmi metni dikkatle incelemesi önem taşıyor.

RESMİ METİN ESAS ALINMALI

Haber sitelerinde yayımlanan özetler bilgi edinmek açısından yararlı olsa da hukuki işlemlerde Resmî Gazete'de yayımlanan metnin tamamı esas alınmalı.

Özellikle mevzuat değişikliklerinde kapsam, istisnalar ve yürürlük tarihleri ayrıntılı şekilde incelenmeli.

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

Turnuvanın en önemli karşılaşması olan final öncesinde milli takımın performansı Türkiye'deki voleybolseverler tarafından yakından takip ediliyor.

TÜRKİYE-İTALYA FİNALİ

Final karşılaşmasında Türkiye ile İtalya karşı karşıya gelecek.

Şampiyonluk maçlarında yalnızca takımın genel performansı değil, servis kalitesi, savunma organizasyonu, blok ve hücum verimliliği gibi birçok unsur sonucu etkileyebiliyor.

MİLLİ TAKIMIN HEDEFİ KUPA

Filenin Sultanları turnuvanın final aşamasına ulaşarak şampiyonluk için son maçına çıkıyor.

Final karşılaşmasından alınacak sonuç, turnuvanın şampiyonunu belirleyecek.

İTALYA GÜÇLÜ RAKİP

İtalya kadın voleybolunun güçlü ekiplerinden biri olarak bilinirken, finalin iki takım açısından da zorlu geçmesi bekleniyor.

Böyle karşılaşmalarda servis karşılamadaki istikrar ve kritik rallilerde yapılan doğru tercihler maçın kaderini değiştirebiliyor.

TAKIM OYUNU BELİRLEYİCİ OLACAK

Voleybolda bir oyuncunun bireysel performansı kadar takımın birlikte hareket etmesi de büyük önem taşıyor.

Hücum organizasyonu, savunma yerleşimi ve blok performansı finalde Türkiye'nin en önemli kozları arasında bulunacak.

TÜRKİYE'DE BÜYÜK HEYECAN

Milli takımın final karşılaşması Türkiye'de spor gündeminin en önemli başlıklarından biri.

Voleybolseverler, Filenin Sultanları'nın Avrupa şampiyonluğu mücadelesini yakından takip ederken, milli takımın uluslararası turnuvalardaki performansı kadın voleyboluna olan ilgiyi de artırıyor.

FİNALİN ARDINDAN

Final karşılaşmasının tamamlanmasıyla turnuvanın şampiyonu belli olacak.

Maçın ardından milli takımın turnuva boyunca gösterdiği performans, oyuncuların katkısı ve teknik ekibin tercihleri spor kamuoyunda değerlendirilecek.

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

Yeni düzenleme, bu fonları değerlendiren yatırımcıların getirilerini hesaplarken vergi kesintisini de dikkate almasını gerektiriyor.

STOPAJ ORANI YÜZDE 10

Yapılan düzenlemeyle para piyasası fonlarında uygulanan stopaj oranının yüzde 10'a çıkarıldığı bildirildi.

Stopaj oranındaki değişiklik, yatırımcıların brüt getiri ile vergi sonrası oluşabilecek net getiri arasındaki farkı daha dikkatli değerlendirmesini gerektiriyor.

STOPAJ NEDİR?

Stopaj, belirli gelirler üzerinden gelir elde edilmeden veya ödeme sırasında yapılan vergi kesintisini ifade ediyor.

Yatırım araçlarında uygulanan stopaj oranının değişmesi, yatırımcının eline geçebilecek net tutarı etkileyebiliyor.

BRÜT VE NET GETİRİ FARKI

Bir yatırım aracının açıklanan getirisi ile vergi sonrasında yatırımcının elde edeceği tutar aynı olmayabilir.

Bu nedenle yatırımcıların yalnızca brüt kazanca bakmak yerine vergi kesintilerini de hesaba katması gerekiyor.

PARA PİYASASI FONLARI NEDİR?

Para piyasası fonları, kısa vadeli ve likiditesi yüksek para piyasası araçlarına yatırım yapan fon türleri arasında bulunuyor.

Bu fonların getirileri faiz oranları, piyasa koşulları ve fonun yatırım yaptığı araçların performansı gibi faktörlerden etkilenebiliyor.

DÜZENLEME YATIRIMCILARI NASIL İLGİLENDİRİYOR?

Stopaj oranındaki değişiklik, özellikle kısa vadeli getiri hesaplamalarında önem taşıyor.

Aynı brüt getiri oranına sahip farklı yatırım araçlarında vergi uygulaması nedeniyle yatırımcının elde edeceği net tutar farklılaşabiliyor.

GÜNCEL MEVZUAT TAKİP EDİLMELİ

Vergi uygulamaları zaman içerisinde değişebildiği için yatırımcıların güncel mevzuatı ve fonun kendi koşullarını kontrol etmesi gerekiyor.

İşlem öncesinde finans kuruluşlarından güncel vergi uygulaması ve fon bilgileri hakkında bilgi alınması önem taşıyor.

ÖNEMLİ NOT

Bu içerik yatırım tavsiyesi değildir.

Yatırım araçlarının getirileri ve vergi uygulamaları değişebileceğinden yatırımcıların kendi finansal koşullarını ve risk durumunu dikkate alması gerekiyor.

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
EYLÜL AYI YAŞLI VE ENGELLİ AYLIKLARI ÖDENİYOR

Eylül ayına ilişkin yaşlı ve engelli aylıklarının hak sahiplerinin hesaplarına yatırılmaya başlandığı bildirildi.

Sosyal destek ödemelerinden yararlanan vatandaşlar, ödemelerin hesaplarına geçip geçmediğini ilgili bankacılık kanalları ve resmi sistemler üzerinden kontrol edebiliyor.

ÖDEMELERİN HESAPLARA GEÇİŞİ

Sosyal yardım ödemeleri belirlenen ödeme takvimi doğrultusunda hak sahiplerine ulaştırılıyor.

Ancak ödemenin hesapta görünme zamanı bankacılık işlemlerine veya ödeme sistemlerine bağlı olarak farklılık gösterebiliyor.

Bu nedenle vatandaşların yalnızca sosyal medya paylaşımlarına değil, resmi duyurulara göre hareket etmesi önem taşıyor.

YAŞLI AYLIĞI KİMLERİ İLGİLENDİRİYOR?

Yaşlı aylıkları, ilgili mevzuatta belirtilen şartları sağlayan vatandaşlara yönelik sosyal destek mekanizmalarından biri.

Hak sahipliği ve ödeme koşulları ilgili kamu kurumlarının değerlendirmeleri doğrultusunda belirleniyor.

ENGELLİ AYLIKLARI

Engelli aylıkları da mevzuatta belirtilen şartları karşılayan hak sahiplerine yönelik sosyal destek ödemeleri arasında bulunuyor.

Ödeme miktarı, hak sahipliği koşulları ve diğer ayrıntılar dönemsel düzenlemelere göre değişebildiği için güncel bilgilerin resmi kaynaklardan kontrol edilmesi gerekiyor.

ÖDEME GÖRÜNMÜYORSA NE YAPILMALI?

Vatandaşların öncelikle ilgili bankacılık kanallarından hesap hareketlerini kontrol etmesi gerekiyor.

Ödemenin görünmemesi halinde ilgili kamu kurumlarının resmi bilgilendirmeleri takip edilmeli ve gerekirse yetkili kanallardan bilgi alınmalı.

ÖDEME MİKTARI DEĞİŞEBİLİR

Sosyal yardım ödemelerinin miktarı ve hak sahipliği şartları mevzuat değişikliklerine bağlı olarak farklılık gösterebilir.

Bu nedenle geçmiş dönemlerdeki ödeme tutarlarının güncel dönem için kesin ölçü olarak kullanılmaması gerekiyor.

RESMİ AÇIKLAMALAR TAKİP EDİLMELİ

Ödeme tarihleri, miktarları ve hak sahipliğiyle ilgili en güncel bilgilerin ilgili kamu kurumlarının resmi kanallarından kontrol edilmesi önem taşıyor.

Vatandaşların doğrulanmamış sosyal medya paylaşımlarındaki bilgilere karşı dikkatli olması gerekiyor.

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

OECD tarafından gerçekleştirilen PISA araştırmasının 2025 sonuçları için geri sayım başladı.

Uluslararası eğitim araştırması olan PISA, farklı ülkelerdeki öğrencilerin bilgi ve becerilerini belirli alanlarda karşılaştırmalı olarak değerlendirmesi nedeniyle eğitim dünyasında yakından takip ediliyor.

SONUÇLAR 8 EYLÜL'DE

PISA 2025 sonuçlarının 8 Eylül tarihinde kamuoyuyla paylaşılması bekleniyor.

Açıklanacak sonuçlarda Türkiye'nin performansına ilişkin veriler de yer alacak. Sonuçların açıklanmasının ardından Türkiye'nin farklı alanlardaki performansı uluslararası verilerle karşılaştırılabilecek.

PISA NEDİR?

PISA, 15 yaş grubundaki öğrencilerin okuma becerileri, matematik ve fen alanlarındaki bilgi ve becerilerini değerlendiren uluslararası bir araştırma.

Araştırmanın dikkat çeken yönlerinden biri, öğrencilerin yalnızca teorik bilgilerini değil, sahip oldukları bilgileri gerçek yaşamda kullanabilme becerilerini de değerlendirmeye çalışması.

TÜRKİYE'NİN PERFORMANSI NEDEN ÖNEMLİ?

Türkiye'nin PISA sonuçları öğrenciler, öğretmenler, veliler ve eğitim politikaları açısından önemli bir veri kaynağı oluşturuyor.

Sonuçlar Türkiye'deki öğrencilerin hangi alanlarda daha güçlü olduğunu ve hangi alanlarda geliştirilmesi gereken noktaların bulunduğunu değerlendirmek için kullanılabiliyor.

SADECE SIRALAMAYA BAKMAK YETERLİ DEĞİL

PISA sonuçları açıklanırken yalnızca ülkelerin sıralamasına odaklanmak, araştırmanın tamamını anlamak için yeterli değil.

Matematik, fen ve okuma alanlarındaki ayrı sonuçlar, önceki araştırmalarla karşılaştırmalar ve öğrencilerin performans dağılımı birlikte değerlendirilerek daha kapsamlı bir tablo ortaya çıkarılabiliyor.

EĞİTİM POLİTİKALARINA KATKI SAĞLIYOR

PISA sonuçları, ülkelerin eğitim sistemlerini uluslararası ölçekte değerlendirmesine yardımcı olan göstergelerden biri.

Sonuçlar doğrudan tek başına bir eğitim politikasının başarılı veya başarısız olduğunu göstermese de eğitim sistemindeki eğilimlerin incelenmesine katkı sağlayabiliyor.

ÖĞRENCİLERİN BİREYSEL SINAVI DEĞİL

PISA'nın bireysel öğrencilerin karne veya merkezi sınav sonucu gibi değerlendirilmemesi gerekiyor.

Araştırma daha geniş bir perspektifle ülkelerdeki öğrencilerin genel performansını incelemek amacıyla gerçekleştiriliyor.

VELİLER VE ÖĞRENCİLER İÇİN NE ANLAMA GELİYOR?

PISA sonuçları doğrudan bir öğrencinin okul notunu veya gelecekteki sınav sonucunu belirlemiyor.

Bunun yerine eğitim sisteminin genel durumunu değerlendirmek, ülkeler arasındaki farklılıkları incelemek ve uzun vadeli eğitim politikalarına ilişkin fikir oluşturmak amacıyla kullanılıyor.

SONUÇLAR AÇIKLANDIĞINDA NELERE BAKILACAK?

Sonuçların açıklanmasının ardından Türkiye'nin matematik, fen ve okuma alanlarındaki performansı incelenecek.

Ayrıca önceki PISA araştırmalarıyla karşılaştırmalar yapılarak performanstaki değişimler değerlendirilecek.

Bu verilerin eğitim politikaları ve eğitim sisteminin geleceğine ilişkin tartışmalarda önemli bir kaynak olması bekleniyor.

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

    window.haberler =
        haberler;
}
