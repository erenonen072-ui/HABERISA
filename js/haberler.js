"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
   Birleştirilmiş sürüm
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

const haberler = [


   
    /* =====================================================
       33 - MERSİN BOZYAZI ORMAN YANGINI
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

            Mersin'in Bozyazı ilçesinde ormanlık alanda
            yangın çıktı. Yangının fark edilmesinin ardından
            bölgeye çok sayıda ekip sevk edildi.

            HAVADAN VE KARADAN MÜDAHALE

            Yangına karadan ulaşan ekiplerin yanı sıra
            havadan da müdahale gerçekleştiriliyor.

            Ekipler, alevlerin çevredeki ormanlık alanlara
            yayılmasını önlemek ve yangını kontrol altına
            almak için çalışmalarını sürdürüyor.

            EKİPLER BÖLGEYE SEVK EDİLDİ

            İhbar üzerine bölgeye itfaiye, orman ekipleri
            ve ilgili diğer ekipler yönlendirildi.

            Yangının bulunduğu bölgenin arazi şartları
            nedeniyle ekiplerin çalışmaları zaman zaman
            güçlüklerle karşılaşabiliyor.

            YANGININ SEYRİ TAKİP EDİLİYOR

            Yetkililer tarafından yangının ilerleyişi
            ve çevrede oluşturabileceği risk yakından
            takip ediliyor.

            RÜZGAR ÇALIŞMALARI ETKİLEYEBİLİYOR

            Orman yangınlarında rüzgarın yönü ve şiddeti,
            alevlerin yayılma hızını etkileyebildiği için
            ekipler müdahale planlarını bölgedeki koşullara
            göre sürdürüyor.

            SOĞUTMA ÇALIŞMALARI ÖNEM TAŞIYOR

            Yangının kontrol altına alınmasının ardından
            bölgede soğutma çalışmalarının gerçekleştirilmesi
            bekleniyor.

            YETKİLİLERDEN UYARI

            Yangın bölgelerine görevli ekiplerin çalışmasını
            engelleyecek şekilde yaklaşılmaması ve yetkililerin
            uyarılarına uyulması önem taşıyor.

            GELİŞMELER TAKİP EDİLİYOR

            Bozyazı'daki yangınla ilgili gelişmeler,
            ekiplerin çalışmalarına ilişkin açıklamalar
            geldikçe güncellenecek.

            HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       33 - KKTC GÖRÜŞMESİ
       NOT: Aynı ID daha önce kullanıldığı için aşağıdaki
       kayıt daha sonra benzersiz ID ile düzenlenmelidir.
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

            Orgeneral Bayraktaroğlu ile Kuzey Kıbrıs Türk
            Cumhuriyeti Başbakanı Ünal Üstel arasında
            görüşme gerçekleştirildi.

            GÜNDEMDE GÜVENLİK VE İŞ BİRLİĞİ

            Görüşmede Kıbrıs'taki güvenlik durumu,
            bölgesel gelişmeler ve Türkiye ile KKTC
            arasındaki iş birliği konularının ele alındığı
            bildirildi.

            BÖLGESEL GELİŞMELER DEĞERLENDİRİLDİ

            Doğu Akdeniz'deki gelişmelerin yanı sıra
            bölgesel güvenlik başlıklarının da görüşmede
            değerlendirildiği belirtildi.

            TÜRKİYE-KKTC İLİŞKİLERİ

            Türkiye ile KKTC arasındaki siyasi, ekonomik
            ve güvenlik alanlarındaki iş birliği
            çalışmalarının önemine dikkat çekildi.

            GÖRÜŞMELER DEVAM EDİYOR

            Yetkililer arasındaki temasların önümüzdeki
            dönemde de devam etmesi bekleniyor.

            HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       31 - PUTİN TRUMP GÖRÜŞMESİ
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

            Rusya Devlet Başkanı Vladimir Putin ile
            ABD Başkanı Donald Trump arasında telefon
            görüşmesi gerçekleştirildi.

            UKRAYNA SAVAŞI GÜNDEMDE

            Görüşmenin ana başlıkları arasında Ukrayna'daki
            savaş ve çatışmaların sona erdirilmesine yönelik
            diplomatik girişimler yer aldı.

            BARIŞ SÜRECİ ELE ALINDI

            Tarafların Ukrayna'daki savaşın sona erdirilmesi
            için yürütülen diplomatik temasları ve olası
            müzakere sürecini değerlendirdiği aktarıldı.

            ABD-RUSYA TEMASLARI

            Görüşme, Washington ile Moskova arasındaki
            diplomatik temasların sürdüğünü göstermesi
            açısından önem taşıyor.

            BÖLGESEL GELİŞMELER

            Ukrayna savaşının yanı sıra Avrupa güvenliği
            ve bölgedeki gelişmelerin de görüşmede gündeme
            geldiği belirtildi.

            DİPLOMASİ TRAFİĞİ SÜRÜYOR

            ABD, Rusya ve Ukrayna arasında savaşın sona
            erdirilmesine yönelik diplomatik girişimler
            uluslararası kamuoyunun gündemindeki yerini
            koruyor.

            ÖNÜMÜZDEKİ SÜREÇ

            Görüşmenin ardından tarafların yapacağı
            açıklamalar ve diplomatik temasların seyri
            yakından takip edilecek.

            HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       30 - GİRNE AÇIKLARINDA BATAN GEMİ
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

            Kuzey Kıbrıs Türk Cumhuriyeti'nin Girne
            açıklarında meydana gelen deniz kazasının
            ardından bölgede arama-kurtarma çalışmaları
            başlatıldı.

            EKİPLER BÖLGEYE SEVK EDİLDİ

            Olayın ardından deniz ve hava unsurları
            bölgeye yönlendirilerek çalışmalar başlatıldı.

            DENİZDE ARAMA ÇALIŞMALARI

            Ekipler, olayın meydana geldiği bölgede
            arama-kurtarma faaliyetlerini sürdürüyor.

            HAVA VE DENİZ KOŞULLARI İZLENİYOR

            Arama-kurtarma çalışmalarında bölgedeki
            hava ve deniz koşulları da dikkate alınıyor.

            YETKİLİLERDEN AÇIKLAMA BEKLENİYOR

            Olayın ayrıntılarına ilişkin yetkili
            kurumlardan yapılacak açıklamalar takip
            ediliyor.

            ÇALIŞMALAR SÜRÜYOR

            Bölgedeki ekiplerin çalışmalarının,
            olayla ilgili durum netleşene kadar
            devam etmesi bekleniyor.

            HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       29 - TÜRKİYE'DE GÜNDEM
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

            Türkiye'de yeni haftayla birlikte ekonomi,
            teknoloji, eğitim ve günlük yaşama ilişkin
            çok sayıda gelişme takip ediliyor.

            EKONOMİ GÜNDEMİ

            Piyasalardaki hareketlilik, fiyat gelişmeleri
            ve ekonomik göstergeler vatandaşların yakından
            takip ettiği başlıklar arasında bulunuyor.

            TEKNOLOJİDE YENİ GELİŞMELER

            Yapay zeka, dijital hizmetler ve teknoloji
            sektöründeki gelişmeler de gündemin önemli
            başlıkları arasında yer alıyor.

            EĞİTİM GÜNDEMİ

            Yeni eğitim dönemi yaklaşırken öğrenciler,
            veliler ve eğitimciler okullara ilişkin
            gelişmeleri takip ediyor.

            GÜNLÜK YAŞAM

            Ulaşım, hava durumu, kamu hizmetleri ve
            vatandaşları doğrudan ilgilendiren gelişmeler
            de gündemdeki yerini koruyor.

            YENİ HAFTADA GÜNDEM

            Önümüzdeki günlerde ekonomi, siyaset,
            teknoloji ve toplum gündemindeki gelişmelerin
            yakından takip edilmesi bekleniyor.

            HABERİSTA Haber Merkezi
        `
    },
    /* =====================================================
       21 - KABİNE TOPLANTISI
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
            KABİNE TOPLANTISI BUGÜN GERÇEKLEŞTİRİLİYOR

            Cumhurbaşkanlığı Kabinesi, Cumhurbaşkanı
            Recep Tayyip Erdoğan başkanlığında bugün
            toplanıyor.

            GÜNDEMDE EKONOMİ VAR

            Toplantının önemli başlıkları arasında
            Türkiye ekonomisindeki son gelişmeler,
            enflasyonla mücadele, büyüme ve vatandaşların
            gündemindeki ekonomik konuların bulunması
            bekleniyor.

            GÜVENLİK KONULARI ELE ALINACAK

            İç ve dış güvenlik başlıklarının da Kabine
            toplantısında değerlendirilmesi bekleniyor.

            TERÖRSÜZ TÜRKİYE SÜRECİ

            Türkiye'nin yürüttüğü "Terörsüz Türkiye"
            sürecine ilişkin gelişmelerin de toplantının
            gündem maddeleri arasında yer alması bekleniyor.

            BÖLGESEL GELİŞMELER

            Türkiye'nin yakın çevresinde yaşanan siyasi
            ve güvenlik gelişmelerinin de toplantıda
            değerlendirilmesi bekleniyor.

            TOPLANTI SONRASI AÇIKLAMA

            Kabine toplantısının ardından Cumhurbaşkanı
            Erdoğan'ın kamuoyuna yönelik açıklamalarda
            bulunması bekleniyor.

            VATANDAŞLARIN YAKINDAN TAKİP ETTİĞİ KONULAR

            Ekonomi, güvenlik ve dış politika başlıkları
            başta olmak üzere toplantıdan çıkacak karar
            ve açıklamalar vatandaşlar tarafından
            yakından takip ediliyor.

            HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       20 - ABD İRAN TANKERLERİ
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

            ABD ile İran arasındaki gerilim, İran'a ait
            tankerlerle ilgili gelişmelerin ardından
            yeniden uluslararası gündemin öne çıkan
            başlıklarından biri oldu.

            ÜÇ İRAN TANKERİ HEDEF ALINDI

            ABD tarafından yapılan açıklamalara göre
            üç İran tankerinin hedef alındığı bildirildi.

            OLAYIN AYRINTILARI ARAŞTIRILIYOR

            Tankerlerle ilgili olayın meydana geliş şekli,
            hedef alınma gerekçesi ve bölgedeki gelişmeler
            uluslararası kaynaklar tarafından takip ediliyor.

            ABD'DEN AÇIKLAMA

            ABD yönetimi olayla ilgili açıklamalarında
            bölgedeki gelişmelere ilişkin değerlendirmelerde
            bulundu.

            İRAN'IN TEPKİSİ

            Tahran yönetiminin gelişmeye ilişkin açıklamaları
            ve vereceği tepki, iki ülke arasındaki gerilimin
            seyri açısından yakından takip ediliyor.

            BÖLGESEL GERİLİM

            ABD ile İran arasındaki gerilim yalnızca iki
            ülkeyi değil, Orta Doğu'daki güvenlik ve enerji
            piyasalarını da yakından ilgilendiriyor.

            PETROL PİYASALARI TAKİPTE

            Bölgede yaşanan gelişmelerin enerji piyasaları
            üzerindeki olası etkileri de yatırımcıların
            takip ettiği başlıklar arasında bulunuyor.

            DİPLOMASİ TRAFİĞİ ÖNEMLİ

            Taraflar arasındaki diplomatik temasların
            gelecekteki gelişmeler açısından önem taşıdığı
            değerlendiriliyor.

            HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       19 - ABD 3 İRAN TANKERİNİ VURDU
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

            ABD yönetimi, İran'a ait üç tankerin
            vurulduğunu açıkladı.

            GELİŞME DÜNYA GÜNDEMİNDE

            Açıklamanın ardından olay uluslararası
            kamuoyunun gündeminde geniş yer buldu.

            ABD-İRAN GERİLİMİ

            Washington ile Tahran arasındaki gerilim,
            bölgede yaşanan gelişmelerle birlikte
            yeniden gündemin önemli başlıklarından
            biri haline geldi.

            BÖLGEDEKİ GELİŞMELER İZLENİYOR

            Olayın ardından bölgedeki askeri ve siyasi
            gelişmeler yakından takip ediliyor.

            İRAN'IN TEPKİSİ BEKLENİYOR

            İran yönetiminin gelişmeye yönelik açıklamaları
            ve atacağı adımlar uluslararası kamuoyunda
            merakla takip ediliyor.

            ENERJİ GÜVENLİĞİ GÜNDEMDE

            Orta Doğu'daki gerilim, enerji taşımacılığı
            ve petrol piyasaları açısından da önem taşıyor.

            DİPLOMATİK TEMASLAR

            Bölgede tansiyonun düşürülmesine yönelik
            diplomatik girişimlerin önemi de artıyor.

            GELİŞMELER TAKİP EDİLİYOR

            Olayla ilgili yeni açıklamalar geldikçe
            gelişmeler kamuoyuyla paylaşılacak.

            HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       18 - EKONOMİDE 3 YILLIK YOL HARİTASI
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

            Türkiye ekonomisinin önümüzdeki üç yıllık
            dönemde izleyeceği politikalara ilişkin
            çalışmalar gündemde.

            Orta Vadeli Program kapsamında büyüme,
            enflasyon, istihdam ve kamu maliyesi gibi
            temel ekonomik başlıkların ele alınması
            bekleniyor.

            ENFLASYONLA MÜCADELE

            Ekonomide fiyat istikrarının sağlanması,
            önümüzdeki dönemin temel hedefleri arasında
            bulunuyor.

            Enflasyonla mücadele kapsamında para ve
            maliye politikalarının koordineli şekilde
            uygulanması önem taşıyor.

            BÜYÜME VE İSTİHDAM

            Ekonomik büyümenin sürdürülebilir hale
            getirilmesi ve istihdamın artırılması da
            planlamanın önemli başlıkları arasında.

            Üretim kapasitesinin artırılması ve yatırımların
            desteklenmesiyle ekonomik aktivitenin güçlü
            tutulması hedefleniyor.

            KAMU MALİYESİ

            Kamu harcamalarında disiplin ve bütçe
            dengesinin korunması da ekonomik programın
            önemli unsurları arasında yer alıyor.

            YATIRIM VE ÜRETİM

            Yatırımların artırılması, sanayi üretiminin
            desteklenmesi ve ihracat kapasitesinin
            geliştirilmesi ekonominin uzun vadeli
            hedefleri arasında bulunuyor.

            PİYASALARIN TAKİBİ

            Yeni ekonomik hedeflerin açıklanmasıyla
            birlikte piyasaların vereceği tepki de
            yakından takip edilecek.

            HABERİSTA EKONOMİ SERVİSİ
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

            İran'da ekonomik baskılar ve dış kaynaklı
            sorunlarla mücadele amacıyla yeni bir
            koordinasyon mekanizması oluşturulduğu
            açıklandı.

            YAPILANMANIN AMACI

            "Ekonomik Savaş Karargâhı" olarak adlandırılan
            yapının ekonomik faaliyetlerin koordinasyonu
            ve kritik sektörlerin takibi amacıyla
            oluşturulduğu bildirildi.

            KRİTİK SEKTÖRLER TAKİP EDİLECEK

            Enerji, ticaret, finans ve temel ihtiyaç
            ürünleri gibi stratejik alanların yeni
            yapılanmanın çalışma alanları arasında
            bulunması bekleniyor.

            DIŞ BASKILAR

            İran ekonomisi uzun süredir yaptırımlar,
            döviz hareketleri ve dış ticaret üzerindeki
            baskılarla mücadele ediyor.

            BÖLGESEL GELİŞMELER

            İran'ın ekonomik politikaları bölgedeki
            siyasi ve güvenlik gelişmelerinden de
            etkileniyor.

            ÖNÜMÜZDEKİ SÜREÇ

            Yeni ekonomik yapılanmanın nasıl çalışacağı
            ve piyasalara nasıl yansıyacağı önümüzdeki
            dönemde takip edilecek.

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

            Bursa'da bir tırdan yola dökülen mazot
            nedeniyle yolun kayganlaşmasının ardından
            zincirleme trafik kazası meydana geldi.

            YOL KAYGANLAŞTI

            Tırdan yola dökülen mazot, sürücüler için
            tehlikeli bir zemin oluşturdu.

            Kayganlaşan yolda araçların kontrolünün
            zorlaşmasıyla zincirleme kaza meydana geldi.

            10 ARAÇ KAZAYA KARIŞTI

            Kazaya yaklaşık 10 aracın karıştığı
            bildirildi.

            Olayın ardından bölgede trafik akışının
            kontrollü şekilde sağlandığı aktarıldı.

            EKİPLER BÖLGEYE SEVK EDİLDİ

            İhbar üzerine bölgeye polis, sağlık ve
            yol bakım ekipleri sevk edildi.

            SÜRÜCÜLERE UYARI

            Yetkililer, yol üzerinde yapılan temizlik
            ve güvenlik çalışmalarına dikkat edilmesi
            konusunda sürücüleri uyardı.

            İNCELEME BAŞLATILDI

            Kazanın meydana geliş nedeninin belirlenmesi
            amacıyla inceleme başlatıldı.

            HABERİSTA
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

            Tiyatro, sinema ve televizyon dünyasının
            tanınan isimlerinden Serhat Mustafa Kılıç'ın
            51 yaşında hayatını kaybettiği bildirildi.

            OLAYLA İLGİLİ İNCELEME

            Oyuncunun İstanbul Kağıthane'deki evinde
            yaşamını yitirdiği öğrenildi.

            Olayın ardından ilgili ekiplerin inceleme
            yaptığı belirtildi.

            SANAT DÜNYASINDAN BAŞSAĞLIĞI MESAJLARI

            Oyuncunun vefat haberinin ardından sanat
            dünyasından çok sayıda başsağlığı mesajı
            paylaşılması bekleniyor.

            TİYATRO KARİYERİ

            Serhat Mustafa Kılıç, kariyeri boyunca
            tiyatro sahnesinde çeşitli projelerde yer aldı.

            TELEVİZYON ÇALIŞMALARI

            Oyuncu, televizyon projeleriyle de geniş
            izleyici kitlesine ulaştı.

            SİNEMA KARİYERİ

            Sinema alanında da çeşitli yapımlarda
            rol alan Kılıç, oyunculuk kariyeri boyunca
            farklı karakterleri canlandırdı.

            ÖLÜM NEDENİNE İLİŞKİN KESİN BİLGİ BEKLENİYOR

            Ölüm nedenine ilişkin resmi açıklamalar
            ve inceleme sonuçlarının takip edilmesi
            bekleniyor.

            CENAZE PROGRAMI

            Cenaze törenine ilişkin resmi bilgilerin
            açıklanmasının ardından kamuoyuyla
            paylaşılması bekleniyor.

            ÖNEMLİ NOT

            Haberİsta olarak sanatçının vefatına ilişkin
            yalnızca resmi ve güvenilir kaynaklardan
            yapılacak açıklamaları esas alıyoruz.

            HABERİSTA Magazin Servisi
        `
    },
    /* =====================================================
       14 - 4 İL İÇİN SEL VE HEYELAN UYARISI
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
        yazar: "Haberİsta Haber Merkezi",
        icerik: `
            4 İL İÇİN SEL VE HEYELAN UYARISI

            Meteoroloji tarafından yapılan değerlendirmelerde
            bazı bölgelerde kuvvetli yağış beklendiği bildirildi.

            Yağışların özellikle kısa sürede etkili olması
            halinde sel ve su baskını riskinin artabileceği
            belirtildi.

            SEL RİSKİNE DİKKAT

            Kuvvetli yağışların dere yatakları, alçak
            kesimler ve su birikintilerinin oluşabileceği
            bölgelerde risk oluşturabileceği ifade edildi.

            HEYELAN TEHLİKESİ

            Yağışların etkili olacağı eğimli ve dağlık
            bölgelerde heyelan riskinin de bulunduğu
            değerlendiriliyor.

            SÜRÜCÜLERE UYARI

            Yağış sırasında görüş mesafesinin azalabileceği
            ve yolların kayganlaşabileceği belirtilirken,
            sürücülerin hızlarını hava ve yol şartlarına
            göre ayarlamaları istendi.

            VATANDAŞLAR TEDBİRLİ OLMALI

            Yetkililerin uyarılarının takip edilmesi,
            riskli bölgelerden uzak durulması ve ani
            su baskınlarına karşı dikkatli olunması önem
            taşıyor.

            HAVA DURUMU TAKİP EDİLMELİ

            Yağışların seyri ve uyarıların güncellenmesi
            nedeniyle vatandaşların resmi meteorolojik
            açıklamaları takip etmesi gerekiyor.

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

            Türkiye ve çevresinde meydana gelen depremler,
            AFAD ve Kandilli Rasathanesi tarafından
            kaydedilerek kamuoyuyla paylaşılmaya devam ediyor.

            DEPREM VERİLERİ TAKİP EDİLİYOR

            Meydana gelen sarsıntıların merkez üssü,
            büyüklüğü, derinliği ve gerçekleştiği saat
            resmi kurumların internet sitelerindeki
            veriler üzerinden takip edilebiliyor.

            AFAD VERİLERİ

            Afet ve Acil Durum Yönetimi Başkanlığı,
            Türkiye'de meydana gelen depremlere ilişkin
            güncel verileri yayımlıyor.

            KANDİLLİ RASATHANESİ

            Kandilli Rasathanesi ve Deprem Araştırma
            Enstitüsü de Türkiye ve çevresindeki
            sismik hareketleri izleyerek verileri
            kamuoyuyla paylaşıyor.

            DEPREM SONRASI NE YAPILMALI?

            Deprem hissedilmesi durumunda panik yapılmaması,
            güvenli bir alana geçilmesi ve resmi kurumların
            açıklamalarının takip edilmesi önem taşıyor.

            ARTÇI SARSINTILAR

            Büyük depremlerin ardından artçı sarsıntılar
            meydana gelebileceğinden vatandaşların
            yetkililerin uyarılarını dikkate alması gerekiyor.

            RESMİ KAYNAKLAR TAKİP EDİLMELİ

            Deprem büyüklüğü ve konumuyla ilgili en güncel
            bilgiler için AFAD ve Kandilli Rasathanesi'nin
            resmi verilerinin esas alınması gerekiyor.

            HABERİSTA Haber Merkezi
        `
    },

    /* =====================================================
       12 - 2026 KPSS
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

            Kamu Personel Seçme Sınavı'nın 2026 yılı
            Lisans Genel Yetenek-Genel Kültür oturumu
            gerçekleştirildi.

            ADAYLAR SINAVDA TER DÖKTÜ

            Sınava katılan adaylar, belirlenen sınav
            merkezlerinde Genel Yetenek ve Genel Kültür
            testlerini yanıtladı.

            SINAV SÜRECİ

            Sınav öncesinde adayların sınav giriş belgeleri
            ve kimlik kontrolleri gerçekleştirildi.

            SINAV SONUÇLARI BEKLENİYOR

            Sınava giren adaylar sonuçların açıklanacağı
            tarihi ÖSYM'nin resmi sınav takvimi üzerinden
            takip edecek.

            DEĞERLENDİRME SÜRECİ

            Sınavın ardından cevapların değerlendirilmesi
            ve sonuçların hazırlanmasına yönelik süreç
            ÖSYM tarafından yürütülecek.

            PUANLARIN KULLANIMI

            KPSS puanları, ilgili kamu kurumlarının
            personel alım süreçlerinde ve mevzuatta
            belirtilen diğer işlemlerde kullanılabiliyor.

            ADAYLARA BAŞARILAR

            Sınava katılan tüm adayların sonuçlarını
            beklediği süreçte resmi açıklamaları takip
            etmesi önem taşıyor.

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

            İstanbul'un iki köklü kulübünü karşı karşıya
            getiren derbide Beşiktaş, Fenerbahçe'yi
            2-1 mağlup etti.

            MAÇTA BÜYÜK HEYECAN

            Karşılaşma boyunca iki takım da etkili
            pozisyonlar üretirken mücadele yüksek
            tempoda geçti.

            BEŞİKTAŞ'TAN ÖNEMLİ GALİBİYET

            Siyah-beyazlı ekip, karşılaşmadan 2-1'lik
            skorla ayrılarak taraftarlarına önemli bir
            galibiyet yaşattı.

            FENERBAHÇE MÜCADELEYİ SÜRDÜRDÜ

            Fenerbahçe, karşılaşma boyunca skoru
            değiştirmek için çaba gösterse de mücadele
            Beşiktaş'ın üstünlüğüyle tamamlandı.

            TARAFTARLARDAN BÜYÜK İLGİ

            Derbi öncesinde ve karşılaşma sırasında
            iki takım taraftarlarının ilgisi dikkat çekti.

            LİG YARIŞI

            Derbiden alınan üç puanın iki takımın
            sezon hedefleri açısından önemli olduğu
            değerlendiriliyor.

            ÖNÜMÜZDEKİ MAÇLAR

            Her iki takım da sezonun kalan bölümünde
            lig ve diğer organizasyonlardaki mücadelelerine
            devam edecek.

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

            Altın piyasasındaki fiyat hareketleri
            yatırımcıların ve vatandaşların gündeminde
            yer almaya devam ediyor.

            GRAM ALTIN TAKİP EDİLİYOR

            Türkiye'de yatırımcıların yakından takip ettiği
            gram altının fiyatındaki değişimler iç piyasa
            ve ons altındaki hareketlerden etkilenebiliyor.

            ÇEYREK ALTIN

            Düğün sezonu ve fiziki altın talebi nedeniyle
            çeyrek altın fiyatları da vatandaşlar tarafından
            yakından takip ediliyor.

            ONS ALTIN

            Küresel piyasalarda ons altının seyri,
            altının iç piyasadaki fiyatlaması açısından
            önemli göstergeler arasında bulunuyor.

            PİYASALARDA GÖZLER EKONOMİK VERİLERDE

            ABD ekonomisi başta olmak üzere açıklanacak
            ekonomik veriler ve merkez bankalarının
            faiz politikaları altın fiyatlarının seyrinde
            etkili olabiliyor.

            YATIRIMCILAR TEMKİNLİ

            Uzmanlar yatırım kararlarının yalnızca kısa
            vadeli fiyat hareketlerine göre verilmemesi
            gerektiğine dikkat çekiyor.

            ÖNEMLİ NOT

            Altın fiyatları gün içerisinde değişebildiği
            için işlem öncesinde güncel fiyatların
            yetkili piyasa ve finans kuruluşlarından
            kontrol edilmesi gerekiyor.

            HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       9 - AKARYAKIT FİYATLARI
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

            Benzin, motorin ve LPG fiyatlarındaki
            değişimler araç sahipleri tarafından
            yakından takip ediliyor.

            PETROL FİYATLARI ETKİLİ OLUYOR

            Küresel petrol piyasalarında yaşanan
            hareketlilik akaryakıt fiyatlarının
            oluşumunda önemli rol oynuyor.

            DÖVİZ KURU DA ÖNEMLİ

            Türkiye'de akaryakıt fiyatlarının oluşumunda
            döviz kuru ve uluslararası petrol fiyatları
            önemli unsurlar arasında bulunuyor.

            SÜRÜCÜLER GÜNCEL FİYATLARI TAKİP EDİYOR

            Akaryakıt istasyonlarındaki fiyatlar şehir,
            dağıtıcı ve dönemsel fiyat değişikliklerine
            göre farklılık gösterebiliyor.

            ULAŞIM MALİYETLERİ

            Akaryakıt fiyatlarındaki değişimler yalnızca
            bireysel araç kullanıcılarını değil,
            taşımacılık ve lojistik sektörünü de
            etkileyebiliyor.

            PİYASALAR İZLENİYOR

            Önümüzdeki dönemde petrol fiyatları,
            döviz hareketleri ve küresel ekonomik
            gelişmeler akaryakıt piyasasının
            seyrinde belirleyici olabilir.

            HABERİSTA Ekonomi Servisi
        `
    },

    /* =====================================================
       8 - RUSYA'DA NAZİ TANKI
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

            Rusya'da gerçekleştirilen çalışmalar sırasında
            bir üniversite yapısının altında İkinci Dünya
            Savaşı dönemine ait olduğu değerlendirilen
            bir tank bulundu.

            TANKIN TARİHİ ARAŞTIRILIYOR

            Bulunan askeri aracın hangi dönemde ve
            hangi koşullarda bölgeye getirildiğine
            ilişkin araştırmalar yürütülüyor.

            İKİNCİ DÜNYA SAVAŞI DÖNEMİ

            Tankın İkinci Dünya Savaşı yıllarından
            kaldığının belirlenmesi halinde buluntu,
            dönemin askeri tarihi açısından dikkat
            çekici bir örnek oluşturacak.

            ÜNİVERSİTE ALTINDA BULUNDU

            Tankın bir üniversite yapısının altında
            ortaya çıkarılması buluntunun en dikkat
            çekici ayrıntılarından biri oldu.

            UZMANLAR İNCELİYOR

            Tarihi askeri araç üzerinde yapılacak
            incelemelerle modelinin ve geçmişinin
            daha ayrıntılı şekilde belirlenmesi
            bekleniyor.

            TARİHİ ESER NİTELİĞİ

            Buluntunun korunması ve tarihsel değerinin
            belirlenmesi için uzmanların değerlendirmesi
            önem taşıyor.

            GELİŞMELER TAKİP EDİLİYOR

            Tankın geçmişine ilişkin yeni bilgiler
            ortaya çıktıkça konuya ilişkin açıklamaların
            kamuoyuyla paylaşılması bekleniyor.

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

            Dünyanın en önemli motokros organizasyonları
            arasında gösterilen MXGP'nin önemli yarışlarından
            biri Afyonkarahisar'da gerçekleştiriliyor.

            ŞAMPİYONLUK YARIŞI

            Sezon boyunca elde edilen puanların ardından
            şampiyonluk mücadelesi büyük önem taşıyor.

            SPORCULAR PİSTE ÇIKIYOR

            Dünyanın farklı ülkelerinden gelen sporcular,
            zorlu parkurda derece elde etmek için
            mücadele ediyor.

            AFYONKARAHİSAR'DA BÜYÜK İLGİ

            Organizasyonun kentte önemli bir spor
            etkinliği olarak takip edildiği belirtiliyor.

            ZORLU PARKUR

            Afyonkarahisar'daki pist, sürücülere
            farklı zemin ve viraj özellikleriyle
            zorlu bir mücadele sunuyor.

            TÜRKİYE'NİN MOTOSİKLET SPORLARINDAKİ YERİ

            Türkiye'nin uluslararası motosiklet
            organizasyonlarına ev sahipliği yapması,
            motor sporlarının ülkedeki tanıtımı açısından
            önem taşıyor.

            ŞAMPİYONLUK İÇİN KRİTİK MÜCADELE

            Yarışların ardından sezon puan tablosunun
            şekillenmesi ve şampiyonluk yarışının
            daha da netleşmesi bekleniyor.

            HABERİSTA Spor Servisi
        `
    },

    /* =====================================================
       6 - AVRUPA SEYAHATLERİNDE SINIR KONTROLLERİ
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

            Avrupa ülkelerine seyahat eden yolcuları
            ilgilendiren sınır kontrol uygulamalarında
            yeni düzenlemeler gündemde.

            SINIR KONTROLLERİ

            Avrupa'ya giriş ve çıkışlarda yolcuların
            kimlik ve seyahat bilgilerinin kontrol
            edilmesine yönelik uygulamalar önem taşıyor.

            DİJİTAL SİSTEMLER

            Avrupa'nın sınır yönetiminde dijital
            sistemlerin daha fazla kullanılması
            hedefleniyor.

            SEYAHAT ÖNCESİ KONTROL

            Yurt dışına çıkacak kişilerin pasaport,
            vize ve diğer giriş şartlarını seyahat
            öncesinde kontrol etmesi gerekiyor.

            YOLCULAR İÇİN ÖNEMLİ

            Sınır kapılarında yapılacak kontroller
            nedeniyle seyahat sürelerinde değişiklik
            yaşanabileceği değerlendiriliyor.

            AVRUPA'DA GÜVENLİK

            Yeni uygulamaların temel amaçları arasında
            sınır güvenliğinin güçlendirilmesi ve
            düzensiz göçle mücadele bulunuyor.

            KURALLAR ÜLKELERE GÖRE DEĞİŞEBİLİR

            Avrupa ülkelerine giriş şartlarının
            vatandaşlığa ve seyahat amacına göre
            farklılık gösterebileceği unutulmamalı.

            RESMİ KAYNAKLAR TAKİP EDİLMELİ

            Seyahat edecek kişilerin güncel bilgileri
            ilgili ülkenin ve Avrupa Birliği kurumlarının
            resmi kaynaklarından kontrol etmesi önem taşıyor.

            HABERİSTA Dünya Servisi
        `
    },

    /* =====================================================
       5 - RESMÎ GAZETE
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
            Yeni sayıda kamu kurumlarını, vatandaşları
            ve çeşitli sektörleri ilgilendiren karar ve
            düzenlemeler yer aldı.

            YENİ DÜZENLEMELER

            Resmî Gazete'de yayımlanan yönetmelik,
            tebliğ ve diğer düzenlemeler ilgili
            mevzuat kapsamında yürürlüğe giriyor.

            ATAMALAR

            Cumhurbaşkanlığı ve çeşitli kamu kurumlarına
            ilişkin bazı atama kararları da Resmî
            Gazete'nin gündeminde yer aldı.

            YARGI KARARLARI

            Sayıda ilgili kurum ve kuruluşları ilgilendiren
            çeşitli yargı kararları ve düzenlemeler
            yayımlandı.

            YÜRÜRLÜĞE GİREN KARARLAR

            Resmî Gazete'de yayımlanan düzenlemelerin
            yürürlük tarihleri ilgili karar ve yönetmeliklerde
            belirtiliyor.

            VATANDAŞLAR İÇİN ÖNEMLİ

            Günlük yaşamı veya çalışma hayatını ilgilendiren
            yeni düzenlemelerin ayrıntılarının resmi
            metinlerden takip edilmesi gerekiyor.

            RESMÎ METİNLER ESAS ALINMALI

            Haberlerde yer alan özet bilgilerin yanı sıra
            hukuki ve idari işlemlerde Resmî Gazete'de
            yayımlanan resmi metinlerin esas alınması
            önem taşıyor.

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
        spot: "A Milli Kadın Voleybol Takımı, Avrupa şampiyonluğu için İtalya ile final karşılaşmasına çıkıyor. Milyonlarca voleybolsever tarihi mücadeleyi takip ediyor.",
        tarih: "6 Eylül 2026",
        saat: "01:30",
        gorsel: "images/AVRUPA.jpeg",
        kaynak: "Türkiye Voleybol Federasyonu",
        yazar: "Haberİsta Spor Servisi",
        icerik: `
            FİLENİN SULTANLARI AVRUPA ŞAMPİYONLUĞU
            İÇİN SAHADA

            A Milli Kadın Voleybol Takımı, Avrupa
            şampiyonluğu için İtalya karşısında
            önemli bir final mücadelesine çıkıyor.

            TÜRKİYE-İTALYA FİNALİ

            Final karşılaşması voleybolseverler tarafından
            büyük bir heyecanla bekleniyor.

            MİLLİ TAKIMIN HEDEFİ ŞAMPİYONLUK

            Filenin Sultanları, turnuvanın önceki
            karşılaşmalarında gösterdiği performansın
            ardından kupayı kazanmak için mücadele ediyor.

            ZORLU RAKİP İTALYA

            İtalya, Avrupa voleybolunun güçlü ekipleri
            arasında yer alırken final karşılaşmasının
            oldukça çekişmeli geçmesi bekleniyor.

            TÜRKİYE'DE BÜYÜK HEYECAN

            Milli takımın final karşılaşması öncesinde
            Türkiye'nin birçok kentinde vatandaşların
            maçı takip etmek için hazırlık yaptığı
            bildiriliyor.

            MİLLİ FORMAYA DESTEK

            Taraftarların sosyal medya üzerinden
            milli takıma destek mesajları paylaşması
            bekleniyor.

            AVRUPA ŞAMPİYONLUĞU İÇİN SON MAÇ

            Final karşılaşması, turnuvanın en önemli
            mücadelelerinden biri olarak öne çıkıyor.

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

            Para piyasası fonlarına ilişkin vergi
            uygulamasında değişiklik gündeme geldi.

            STOPAJ ORANI YÜZDE 10

            Yapılan düzenlemeyle para piyasası
            fonlarında uygulanan stopaj oranının
            yüzde 10'a çıkarıldığı bildirildi.

            YATIRIMCILARIN DİKKATİNDE

            Düzenlemenin ardından yatırımcıların
            fon getirilerini değerlendirirken vergi
            kesintisini de hesaba katması gerekiyor.

            FON GETİRİLERİ

            Para piyasası fonları kısa vadeli yatırım
            araçlarına yönelen yatırımcılar tarafından
            sıklıkla tercih ediliyor.

            VERGİ UYGULAMASI

            Stopaj, yatırım araçlarından elde edilen
            belirli gelirler üzerinden yapılan vergi
            kesintisini ifade ediyor.

            YATIRIM KARARLARI

            Yatırımcıların yalnızca brüt getiriye değil,
            vergi ve diğer maliyetler sonrasında
            oluşabilecek net getiriye de dikkat etmesi
            önem taşıyor.

            GÜNCEL BİLGİLER TAKİP EDİLMELİ

            Vergi uygulamalarındaki değişiklikler
            yatırım kararlarını etkileyebileceğinden
            resmi açıklamaların takip edilmesi gerekiyor.

            ÖNEMLİ NOT

            Bu haber yatırım tavsiyesi değildir.
            Yatırım kararları kişisel finansal koşullar
            ve riskler değerlendirilerek verilmelidir.

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

            Eylül ayına ilişkin yaşlı ve engelli
            aylıklarının hak sahiplerinin hesaplarına
            yatırılmaya başlandığı bildirildi.

            ÖDEMELER HESAPLARA YATIRILIYOR

            Sosyal yardım ödemelerinden yararlanan
            vatandaşların ödemeleri ilgili ödeme
            takvimi doğrultusunda hesaplarına
            aktarılıyor.

            HAK SAHİPLERİ ÖDEMELERİNİ KONTROL EDİYOR

            Vatandaşlar ödemelerin hesaplarına
            yansıyıp yansımadığını ilgili bankacılık
            kanallarından veya resmi sistemlerden
            kontrol edebiliyor.

            SOSYAL DESTEKLER

            Yaşlı ve engelli aylıkları, sosyal destek
            mekanizmaları kapsamında ihtiyaç sahibi
            vatandaşlara yönelik ödemeler arasında
            bulunuyor.

            ÖDEME TARİHLERİ TAKİP EDİLMELİ

            Ödeme dönemlerinde tarih ve uygulamaların
            resmi kurumların açıklamalarından takip
            edilmesi önem taşıyor.

            RESMİ KAYNAKLAR ÖNEMLİ

            Ödeme miktarı, hak sahipliği ve ödeme
            tarihleriyle ilgili en güncel bilgilerin
            ilgili kamu kurumlarından alınması gerekiyor.

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

            Ekonomik İşbirliği ve Kalkınma Örgütü
            OECD tarafından gerçekleştirilen PISA
            araştırmasının 2025 sonuçları için
            geri sayım başladı.

            SONUÇLAR 8 EYLÜL'DE AÇIKLANACAK

            PISA 2025 araştırmasının sonuçlarının
            8 Eylül tarihinde kamuoyuyla paylaşılması
            bekleniyor.

            PISA NEDİR?

            PISA, farklı ülkelerdeki 15 yaş grubundaki
            öğrencilerin okuma becerileri, matematik
            ve fen alanlarındaki bilgi ve becerilerini
            değerlendiren uluslararası bir araştırmadır.

            TÜRKİYE'NİN PERFORMANSI

            Türkiye'nin PISA 2025 sonuçlarında
            göstereceği performans öğrenciler,
            öğretmenler, veliler ve eğitim politikaları
            açısından yakından takip ediliyor.

            EĞİTİM POLİTİKALARINA KATKI

            PISA sonuçları ülkelerin eğitim sistemlerinin
            güçlü ve geliştirilmesi gereken yönlerinin
            değerlendirilmesinde kullanılan uluslararası
            göstergelerden biri olarak öne çıkıyor.

            SONUÇLAR NASIL DEĞERLENDİRİLECEK?

            Sonuçların yalnızca ülke sıralaması üzerinden
            değil, öğrencilerin farklı alanlardaki
            performansları ve önceki dönemlerle
            karşılaştırmalar üzerinden değerlendirilmesi
            önem taşıyor.

            TÜRKİYE'DE EĞİTİM GÜNDEMİ

            Açıklanacak sonuçların Türkiye'deki eğitim
            politikaları ve öğrencilerin akademik
            performansına ilişkin tartışmalara da
            katkı sağlaması bekleniyor.

            HABERİSTA Eğitim Servisi
        `
    }
   ];

/* =========================================================
   OTOMATİK SLUG + URL + TARİH + GÖRÜNTÜLENME
========================================================= */

haberler.forEach(function (haber) {

    /* -----------------------------------------
       SLUG
    ----------------------------------------- */

    haber.slug = slugOlustur(haber.baslik);

    haber.url = "/haber/" + haber.slug;


    /* -----------------------------------------
       YAYIN TARİHİ
    ----------------------------------------- */

    if (!haber.publishedAt) {

        const tarih =
            String(haber.tarih || "")
                .trim();

        const saat =
            String(haber.saat || "00:00")
                .trim();

        /*
         * Türkiye saati UTC+03:00
         */

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


    /* -----------------------------------------
       DATE MODIFIED
    ----------------------------------------- */

    if (!haber.dateModified) {

        haber.dateModified =
            haber.publishedAt || null;
    }


    /* -----------------------------------------
       GÖRÜNTÜLENME
    ----------------------------------------- */

    if (
        typeof haber.goruntulenme !== "number"
    ) {

        haber.goruntulenme = 0;
    }


    /* -----------------------------------------
       YAZAR
    ----------------------------------------- */

    if (!haber.yazar) {

        haber.yazar =
            "Haberİsta Haber Merkezi";
    }


    /* -----------------------------------------
       KAYNAK
    ----------------------------------------- */

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
