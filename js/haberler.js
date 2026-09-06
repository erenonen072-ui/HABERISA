"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
   6 EYLÜL 2026
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
       1 - GÜNDEM
    ===================================================== */
{
    id: 17,
    kategori: "Dünya",
    baslik: "ABD, 3 İran tankerini vurduğunu açıkladı",

    spot: "ABD yönetimi, İran'a ait olduğu belirtilen 3 petrol tankerinin vurulduğunu açıkladı. Gelişme, ABD ile İran arasındaki gerilimin yeniden tırmandığı bir dönemde yaşanırken, bölgedeki deniz trafiği ve enerji güvenliği açısından da dikkat çekti.",

    icerik: `
        ABD ile İran arasındaki gerilimde yeni bir gelişme yaşandı. ABD
        yönetimi, İran'a ait 3 petrol tankerinin vurulduğunu açıkladı.
        Açıklama, bölgede devam eden yüksek tansiyonun deniz taşımacılığına
        ve enerji güvenliğine yönelik etkilerine ilişkin endişeleri yeniden
        gündeme getirdi.

        ABD tarafından yapılan açıklamaya göre, İran'a ait olduğu belirtilen
        tankerler hedef alındı. Söz konusu gelişmenin ardından bölgedeki
        güvenlik durumu ve deniz ulaşımının geleceği yakından takip edilmeye
        başlandı.

        ABD VE İRAN ARASINDA GERİLİM TIRMANIYOR

        Son gelişme, Washington ile Tahran arasındaki karşılıklı gerilimin
        kritik bir aşamaya geldiğini gösteren gelişmelerden biri olarak
        değerlendiriliyor.

        ABD'nin tankerleri hedef aldığı yönündeki açıklamasının ardından
        olayın ayrıntıları ve saldırıların hangi bölgede gerçekleştiğine
        ilişkin bilgiler kamuoyunun gündemine geldi.

        Bölgedeki gelişmeler yalnızca ABD ve İran arasındaki ilişkiler
        açısından değil, enerji piyasaları ve uluslararası deniz ticareti
        bakımından da önem taşıyor.

        PETROL TAŞIMACILIĞI YAKINDAN İZLENİYOR

        İran, dünyanın önemli petrol üreticileri arasında yer alırken,
        ülkeye ait petrolün deniz yoluyla taşınması bölgesel ve küresel
        enerji piyasaları açısından önem taşıyor.

        Tankerlerin hedef alınmasına ilişkin gelişme, petrol taşımacılığının
        güvenliği konusunu yeniden gündeme taşıdı. Bölgede yaşanabilecek
        yeni saldırıların enerji sevkiyatında aksamalara neden olabileceği
        değerlendirilirken, uluslararası piyasaların gelişmeleri yakından
        izlemesi bekleniyor.

        DENİZ GÜVENLİĞİ ENDİŞESİ

        Körfez bölgesi ve çevresindeki deniz yolları, dünya enerji ticareti
        açısından stratejik öneme sahip. Bu nedenle bölgede meydana gelen
        askeri hareketlilik, yalnızca taraf ülkeleri değil, uluslararası
        ticaret yapan şirketleri ve enerji piyasalarını da doğrudan
        ilgilendiriyor.

        İran tankerlerinin hedef alınmasına ilişkin açıklamanın ardından
        bölgede yeni bir saldırı yaşanıp yaşanmayacağı ve deniz ulaşımında
        herhangi bir kısıtlama uygulanıp uygulanmayacağı merak konusu oldu.

        ULUSLARARASI TOPLUMDAN YAKIN TAKİP

        ABD ile İran arasındaki gerilimin yeni bir boyut kazanması,
        uluslararası toplum tarafından da yakından takip ediliyor.

        Bölgedeki ülkelerin güvenlik önlemlerini artırabileceği
        değerlendirilirken, diplomatik kanallardan yeni açıklamaların
        gelmesi bekleniyor.

        Özellikle enerji ihracatı ve deniz ticareti açısından kritik
        güzergahlarda güvenliğin sağlanması, uluslararası aktörlerin
        öncelikleri arasında bulunuyor.

        YENİ GELİŞMELER BEKLENİYOR

        ABD'nin 3 İran tankerini vurduğuna ilişkin açıklamasının ardından
        olayla ilgili ayrıntıların önümüzdeki saatlerde netleşmesi bekleniyor.

        Saldırıların nasıl gerçekleştiği, tankerlerde bulunan personelin
        durumu ve olayın bölgedeki askeri dengelere etkisi konusunda yeni
        açıklamaların yapılabileceği değerlendiriliyor.

        ABD VE İRAN ARASINDAKİ GERİLİMİN BÖLGESEL ETKİSİ

        ABD ile İran arasındaki gerilim uzun süredir Orta Doğu'daki
        gelişmelerin merkezinde yer alıyor. Taraflar arasındaki askeri ve
        siyasi gerilim, zaman zaman bölgedeki farklı aktörleri de etkileyen
        gelişmelere neden oluyor.

        Son tanker saldırısı açıklaması da bu nedenle uluslararası kamuoyu
        tarafından yakından izleniyor.

        Enerji piyasaları, deniz taşımacılığı ve bölgesel güvenlik
        açısından ortaya çıkabilecek sonuçlar önümüzdeki dönemde daha
        belirgin hale gelebilir.

        HABERİSTA TAKİPTE

        ABD'nin İran tankerlerine yönelik saldırı açıklamasının ardından
        bölgede yaşanan gelişmeler yakından takip ediliyor.

        Olayın ayrıntıları ve taraflardan gelecek yeni açıklamalar
        doğrultusunda haberin detaylarının netleşmesi bekleniyor.

        HABERİSTA olarak bölgedeki gelişmeleri doğrulanmış bilgiler
        üzerinden takip ediyor ve yeni gelişmeler oldukça okuyucularımıza
        aktarıyoruz.
    `,

    tarih: "6 Eylül 2026",
    saat: "11:17",
    gorsel: "images/ChatGPT Image 6 Eyl 2026 19_44_18.pngEyl 2026 19_46_53.png ",
    kaynak: "HABERİSTA"
},

{
    id: 18,
    kategori: "Ekonomi",
    baslik: "Ekonomide 3 yıllık yol haritası belli oluyor",

    spot: "Türkiye ekonomisinin önümüzdeki dönemde izleyeceği politikalar açısından önem taşıyan 3 yıllık yol haritası açıklandı. Yeni Orta Vadeli Program ile büyüme, enflasyon, istihdam ve kamu maliyesine ilişkin hedefler gündeme geldi.",

    icerik: `
        Türkiye ekonomisinin önümüzdeki üç yıllık dönemde izleyeceği
        politikalara ilişkin yeni yol haritası kamuoyuyla paylaşıldı.
        Orta Vadeli Program kapsamında ekonominin temel göstergelerine
        ilişkin hedefler ve öncelikli politikalar ortaya konuldu.

        Yeni program, Türkiye ekonomisinde fiyat istikrarının sağlanması,
        sürdürülebilir büyümenin desteklenmesi ve kamu maliyesinin
        güçlendirilmesi açısından önemli bir çerçeve oluşturuyor.

        ÜÇ YILLIK EKONOMİK PLAN

        Orta Vadeli Program, ekonomi yönetiminin önümüzdeki dönemde
        uygulayacağı politikalar açısından temel belgelerden biri olma
        özelliğini taşıyor.

        Program kapsamında büyüme, enflasyon, istihdam, ihracat, kamu
        harcamaları ve mali disiplin gibi başlıklara ilişkin hedefler
        belirleniyor.

        Ekonominin daha dengeli ve sürdürülebilir bir yapıya
        kavuşturulmasının hedeflendiği programda, fiyat istikrarı
        çalışmalarının da önemli bir yer tuttuğu belirtiliyor.

        ENFLASYONLA MÜCADELE ÖNCELİKLİ KONULAR ARASINDA

        Yeni dönemin en önemli başlıklarından biri enflasyonla mücadele
        olacak. Fiyat istikrarının sağlanması ve vatandaşların satın alma
        gücünün korunması ekonomi yönetiminin öncelikleri arasında
        bulunuyor.

        Enflasyonun düşürülmesine yönelik politikaların yanı sıra
        ekonomik büyümenin korunması da programın önemli başlıklarından
        biri olarak öne çıkıyor.

        BÜYÜME VE İSTİHDAM HEDEFİ

        Ekonomik programda sürdürülebilir büyümenin desteklenmesi ve
        istihdamın artırılması da öncelikli hedefler arasında yer alıyor.

        Üretim kapasitesinin geliştirilmesi, yatırımların artırılması ve
        ihracatın desteklenmesi yoluyla ekonominin daha güçlü bir yapıya
        kavuşturulması hedefleniyor.

        İstihdam piyasasındaki gelişmelerin de program süresince yakından
        takip edilmesi bekleniyor.

        KAMU MALİYESİNE ODAKLANILACAK

        Üç yıllık yol haritasının bir diğer önemli başlığı kamu maliyesi
        olacak. Kamu kaynaklarının daha etkin kullanılması ve bütçe
        disiplininin güçlendirilmesi amacıyla çeşitli politikaların
        uygulanması planlanıyor.

        Kamu harcamalarında verimliliğin artırılması ve mali dengelerin
        korunması, ekonomik programın temel unsurları arasında bulunuyor.

        YATIRIMLAR VE ÜRETİM DESTEKLENECEK

        Programın hedefleri arasında yatırımların ve üretimin artırılması
        da bulunuyor. Özellikle katma değerli üretimin ve ihracat
        kapasitesinin geliştirilmesine yönelik politikaların ön plana
        çıkması bekleniyor.

        Türkiye'nin küresel ekonomideki rekabet gücünün artırılması için
        sanayi, teknoloji ve ihracat alanlarında yeni adımların atılması
        hedefleniyor.

        EKONOMİ YÖNETİMİNİN YOL HARİTASI

        Yeni Orta Vadeli Program, önümüzdeki üç yıllık dönemde ekonomi
        yönetiminin izleyeceği temel politikalar açısından yol gösterici
        olacak.

        Programda yer alan hedeflerin hayata geçirilmesiyle birlikte
        enflasyonun düşürülmesi, büyümenin dengeli şekilde sürdürülmesi ve
        ekonomik istikrarın güçlendirilmesi amaçlanıyor.

        PİYASALAR YAKINDAN İZLEYECEK

        Açıklanan programın ardından gözler ekonomi yönetiminin atacağı
        adımlara çevrildi. Piyasalar, belirlenen hedeflerin ne ölçüde
        gerçekleştirileceğini ve uygulanan politikaların ekonomik
        göstergeler üzerindeki etkisini yakından takip edecek.

        Özellikle enflasyon, faiz, büyüme ve kamu maliyesine ilişkin
        gelişmelerin programın başarısı açısından belirleyici olması
        bekleniyor.

        HABERİSTA olarak Türkiye ekonomisine ilişkin gelişmeleri ve yeni
        ekonomik programın uygulanma sürecini takip etmeye devam edeceğiz.
    `,

    tarih: "6 Eylül 2026",
    saat: "11:01",
    gorsel: "images/ChatGPT Image 6 Eyl 2026 19_45_31.png",
    kaynak: "HABERİSTA"
},

{
    id: 19,
    kategori: "Dünya",
    baslik: "İran'da 'Ekonomik Savaş Karargâhı' kuruldu",

    spot: "İran'da ekonomik koşulların ve dış baskıların yönetilmesi amacıyla 'Ekonomik Savaş Karargâhı' kurulduğu açıklandı. Yeni yapılanmanın ülkenin ekonomik faaliyetlerini ve kritik sektörlerini koordine etmesi bekleniyor.",

    icerik: `
        İran'da ekonomik gelişmelere ilişkin dikkat çeken bir adım atıldı.
        Ülkede yaşanan ekonomik baskılar ve mevcut koşulların yönetilmesi
        amacıyla "Ekonomik Savaş Karargâhı" kurulduğu açıklandı.

        Yeni yapılanmanın, ekonomik alanda karşılaşılan sorunların
        koordineli şekilde yönetilmesi ve ülkenin kritik ekonomik
        faaliyetlerinin düzenlenmesi amacıyla görev yapması bekleniyor.

        EKONOMİK BASKILAR GÜNDEMDE

        İran ekonomisi uzun süredir dış baskılar, yaptırımlar ve ekonomik
        dalgalanmalarla karşı karşıya bulunuyor. Son dönemde bölgede
        yaşanan gelişmelerin de ekonomik koşullar üzerinde baskı
        oluşturduğu değerlendiriliyor.

        Bu ortamda Tahran yönetimi ekonomik faaliyetlerin daha etkin
        şekilde koordine edilmesi amacıyla yeni bir yapılanmaya gitti.

        "EKONOMİK SAVAŞ KARARGÂHI" KURULDU

        İran'da kurulan Ekonomik Savaş Karargâhı'nın, ülkenin ekonomik
        güvenliğini ilgilendiren konularda koordinasyon sağlaması
        bekleniyor.

        Yapılanmanın hangi kurumlarla birlikte çalışacağı ve görev
        alanlarının kapsamının önümüzdeki dönemde yapılacak açıklamalarla
        daha net hale gelmesi bekleniyor.

        KRİTİK SEKTÖRLER TAKİP EDİLECEK

        Yeni karargâhın özellikle temel ekonomik faaliyetler, ticaret,
        üretim ve tedarik zincirleri gibi alanlarda yaşanabilecek
        sorunlara karşı koordinasyon sağlaması bekleniyor.

        İran yönetimi açısından ekonomik kaynakların etkin kullanılması
        ve kritik ihtiyaçların karşılanması büyük önem taşıyor.

        DIŞ BASKILARA KARŞI EKONOMİK TEDBİRLER

        İran yönetimi daha önce de ekonomik yaptırımların etkilerini
        azaltmak amacıyla çeşitli önlemler uygulamıştı.

        Yeni karargâhın kurulması, ekonomik baskıların arttığı bir
        dönemde devlet kurumları arasındaki koordinasyonun güçlendirilmesi
        amacıyla atılmış yeni bir adım olarak değerlendiriliyor.

        BÖLGESEL GELİŞMELER EKONOMİYİ ETKİLİYOR

        Orta Doğu'daki siyasi ve askeri gelişmeler, bölge ülkelerinin
        ekonomileri üzerinde doğrudan veya dolaylı etkiler oluşturuyor.

        İran'ın enerji ihracatı, dış ticareti ve finansal sistemi de
        bölgedeki gelişmelerden etkilenebilecek alanlar arasında yer
        alıyor.

        Yeni ekonomik yapılanmanın bu risklere karşı ülke içerisindeki
        koordinasyonu güçlendirmesi amaçlanıyor.

        İRAN EKONOMİSİNDE YENİ DÖNEM

        Ekonomik Savaş Karargâhı'nın kurulması, İran yönetiminin mevcut
        ekonomik koşullara verdiği önemin yeni bir göstergesi olarak
        dikkat çekiyor.

        Karargâhın faaliyetleri ve alınacak kararlar, İran ekonomisinin
        önümüzdeki dönemdeki seyri açısından yakından takip edilecek.

        Yeni yapılanmanın hangi alanlarda somut kararlar alacağı ve
        ekonomik sorunlara yönelik hangi tedbirlerin uygulanacağı ise
        önümüzdeki günlerde daha net ortaya çıkacak.

        HABERİSTA olarak İran'daki ekonomik gelişmeleri ve bölgedeki
        gelişmelerin Türkiye'ye ve küresel piyasalara olası etkilerini
        takip etmeye devam edeceğiz.
    `,

    tarih: "6 Eylül 2026",
    saat: "10:23",
    gorsel: "images/",
    kaynak: "HABERİSTA"
},

{
    id: 20,
    kategori: "Gündem",
    baslik: "Tırdan dökülen mazot 10 aracı birbirine kattı",

    spot: "Bursa'da bir tırdan yola dökülen mazot nedeniyle kayganlaşan yolda zincirleme kaza meydana geldi. Yaklaşık 10 aracın karıştığı kazada ekipler bölgede çalışma başlattı.",

    icerik: `
        Bursa'da trafikte seyir halinde bulunan bir tırdan yola mazot
        dökülmesi, zincirleme kazaya neden oldu. Mazot nedeniyle yolun
        kayganlaşmasının ardından sürücüler araçlarının kontrolünü
        kaybetti.

        Kısa süre içerisinde meydana gelen kazalarda yaklaşık 10 araç
        birbirine girdi. Olayın ardından bölgeye ekipler sevk edilirken,
        trafik güvenliğinin sağlanması için çalışma başlatıldı.

        YOL BİR ANDA KAYGANLAŞTI

        Edinilen bilgilere göre olay, tırdan yola mazot dökülmesinin
        ardından meydana geldi. Asfalt yüzeyine yayılan mazot, yolun
        kayganlaşmasına neden oldu.

        Sürücülerin zemindeki kayganlığı fark etmekte zorlanması üzerine
        peş peşe kazalar yaşandı.

        Yaklaşık 10 aracın karıştığı kazanın ardından olay yerine
        güvenlik ve sağlık ekipleri yönlendirildi.

        10 ARAÇ KAZAYA KARIŞTI

        Mazot nedeniyle meydana gelen zincirleme kazada çok sayıda araç
        birbirine çarptı. Araçlarda maddi hasar meydana gelirken,
        ekipler kazanın ardından yol güvenliğini sağlamak için çalışma
        yaptı.

        Kazanın meydana geldiği bölgede ulaşım bir süre kontrollü şekilde
        sağlandı.

        EKİPLER SEVK EDİLDİ

        İhbar üzerine bölgeye gelen ekipler, hem kazaya karışan araçlara
        müdahale etti hem de yola dökülen mazotun oluşturduğu tehlikeyi
        ortadan kaldırmak için çalışma başlattı.

        Sürücülerin yeni kazalara karışmaması için bölgede gerekli
        güvenlik önlemlerinin alınması sağlandı.

        TRAFİKTE KAYGAN ZEMİN UYARISI

        Özellikle yağ, mazot ve benzeri maddelerin yola dökülmesi,
        araçların fren mesafesini ve yol tutuşunu ciddi şekilde
        etkileyebiliyor.

        Uzmanlar, sürücülerin yol üzerinde kayganlık fark ettikleri
        durumlarda hızlarını düşürmeleri ve ani manevralardan kaçınmaları
        gerektiğine dikkat çekiyor.

        KAZANIN NEDENİ İNCELENİYOR

        Yaklaşık 10 aracın karıştığı kazanın ardından olayla ilgili
        inceleme başlatıldı. Mazotun yola nasıl döküldüğü ve kazaya
        ilişkin diğer ayrıntıların yapılacak çalışmaların ardından
        netleşmesi bekleniyor.

        Trafik ekipleri bölgede güvenliği sağlamak ve ulaşımın yeniden
        normale dönmesi için çalışmalarını sürdürdü.

        SON DAKİKA GELİŞMELERİ TAKİP EDİLİYOR

        Bursa'da yaşanan zincirleme kaza, yola dökülen mazotun trafikte
        ne kadar ciddi bir risk oluşturabileceğini bir kez daha ortaya
        koydu.

        Kazayla ilgili yeni bilgiler geldikçe haberin detaylarının
        güncellenmesi bekleniyor.

        HABERİSTA olarak olayla ilgili gelişmeleri takip ediyoruz.
    `,

    tarih: "6 Eylül 2026",
    saat: "09:53",
    gorsel: "images/ChatGPT Image 6 Eyl 2026 19_48_08.png",
    kaynak: "HABERİSTA"
},

{
    id: 21,
    kategori: "Gündem",
    baslik: "Tırın çarptığı hafif ticari araç 30 metre sürüklendi: 6 yaralı",

    spot: "İstanbul Eyüpsultan'da meydana gelen trafik kazasında tırın çarptığı hafif ticari araç yaklaşık 30 metre sürüklendi. Kazada 6 kişi yaralandı. Olay yerine sevk edilen ekipler yaralılara müdahale etti.",

    icerik: `
        İstanbul Eyüpsultan'da meydana gelen trafik kazasında tır ile
        hafif ticari araç çarpıştı. Çarpışmanın etkisiyle hafif ticari
        araç yaklaşık 30 metre sürüklendi.

        Kazada 6 kişi yaralanırken, ihbar üzerine olay yerine sağlık,
        polis ve ilgili ekipler sevk edildi.

        ÇARPIŞMANIN ETKİSİYLE 30 METRE SÜRÜKLENDİ

        Edinilen bilgilere göre kaza, Eyüpsultan'da meydana geldi.
        Seyir halindeki tır ile hafif ticari araç henüz belirlenemeyen
        bir nedenle çarpıştı.

        Çarpışmanın şiddetiyle hafif ticari araç yaklaşık 30 metre
        sürüklendi. Kazayı gören vatandaşların ihbarı üzerine bölgeye
        kısa sürede ekipler gönderildi.

        6 KİŞİ YARALANDI

        Kazada 6 kişinin yaralandığı bildirildi. Olay yerine ulaşan
        sağlık ekipleri, yaralılara ilk müdahaleyi kaza yerinde yaptı.

        Yaralıların sağlık durumlarına ilişkin ayrıntıların yapılacak
        kontrollerin ardından netleşmesi beklenirken, ekipler kaza
        alanında güvenlik önlemleri aldı.

        TRAFİKTE YOĞUNLUK OLUŞTU

        Kazaya karışan araçların yol üzerinde bulunması nedeniyle
        bölgede ulaşımda kısa süreli aksama yaşandı.

        Polis ekipleri hem kaza nedeniyle oluşabilecek yeni bir
        tehlikeyi önlemek hem de araçların kontrollü şekilde kaldırılması
        için bölgede çalışma yürüttü.

        OLAY YERİNDE İNCELEME

        Kazanın ardından olay yeri ekipleri tarafından inceleme
        gerçekleştirildi. Kazanın meydana geliş şeklinin belirlenmesi
        amacıyla gerekli çalışmalar başlatıldı.

        Tır ile hafif ticari aracın hangi koşullarda çarpıştığına
        ilişkin ayrıntıların yapılacak incelemenin ardından netleşmesi
        bekleniyor.

        SÜRÜCÜLERİN DİKKATLİ OLMASI GEREKİYOR

        İstanbul gibi yoğun trafik akışının bulunduğu kentlerde ağır
        vasıtalar ile diğer araçların karıştığı kazalar ciddi sonuçlara
        yol açabiliyor.

        Özellikle kavşak, bağlantı yolları ve yoğun trafik noktalarında
        sürücülerin hızlarını yol ve trafik şartlarına göre ayarlaması
        önem taşıyor.

        KAZAYLA İLGİLİ İNCELEME SÜRÜYOR

        Eyüpsultan'da 6 kişinin yaralandığı kazanın ardından ekiplerin
        çalışmaları devam etti.

        Kazada yaralanan kişilerin sağlık durumları takip edilirken,
        olayın kesin nedeninin yapılacak incelemeler sonucunda
        belirlenmesi bekleniyor.

        HABERİSTA olarak İstanbul'daki trafik kazasıyla ilgili gelişmeleri
        takip ediyor ve yeni bilgiler geldikçe okuyucularımıza aktarıyoruz.
    `,

    tarih: "6 Eylül 2026",
    saat: "09:22",
    gorsel: "images/",
    kaynak: "HABERİSTA"
},
{
    id: 16,
    kategori: "Magazin",
    baslik: "Ünlü oyuncu Serhat Mustafa Kılıç hayatını kaybetti",

    spot: "Türk tiyatro, sinema ve televizyon dünyasının tanınan isimlerinden Serhat Mustafa Kılıç, 51 yaşında hayatını kaybetti. İstanbul Kağıthane'deki evinde ölü bulunan oyuncunun kesin ölüm nedeni yapılacak adli incelemenin ardından netleşecek.",

    icerik: `
        Türk sanat dünyası acı bir haberle sarsıldı. Tiyatro, sinema ve
        televizyon projelerinde uzun yıllar boyunca başarılı performanslarıyla
        izleyicilerin karşısına çıkan ünlü oyuncu Serhat Mustafa Kılıç,
        51 yaşında hayatını kaybetti.

        Oyuncunun İstanbul Kağıthane'deki evinde hayatını kaybettiği öğrenildi.
        Kılıç'tan bir süredir haber alamayan yakınlarının durumu fark etmesi
        üzerine olay yerine sağlık ve polis ekipleri sevk edildi.

        Sağlık ekiplerinin yaptığı kontrollerin ardından oyuncunun hayatını
        kaybettiği belirlendi. Olayın ardından polis ekipleri tarafından
        inceleme başlatılırken, Kılıç'ın cenazesi kesin ölüm nedeninin
        belirlenmesi amacıyla Adli Tıp Kurumu'na gönderildi.

        Ünlü oyuncunun ölüm nedeni konusunda henüz resmi olarak kesinleşmiş
        bir açıklama yapılmadı. Adli inceleme ve otopsi sonucunun ardından
        ölüm nedenine ilişkin daha net bilgilerin ortaya çıkması bekleniyor.

        SANAT DÜNYASINI YASA BOĞAN HABER

        Serhat Mustafa Kılıç'ın ölüm haberinin duyulmasının ardından sanat
        dünyasından çok sayıda başsağlığı mesajı geldi. Oyuncunun uzun yıllar
        birlikte çalıştığı meslektaşları ve sevenleri, sosyal medya üzerinden
        yaptıkları paylaşımlarla üzüntülerini dile getirdi.

        Tiyatro, sinema ve televizyon alanlarında önemli çalışmalara imza atan
        Kılıç, özellikle canlandırdığı farklı karakterlerle geniş bir izleyici
        kitlesinin tanıdığı oyuncular arasında yer alıyordu.

        TİYATRO KARİYERİ

        Serhat Mustafa Kılıç'ın sanat hayatında tiyatronun önemli bir yeri
        bulunuyordu. Bilkent Üniversitesi Müzik ve Sahne Sanatları Fakültesi
        Tiyatro Bölümü'nde eğitim alan oyuncu, profesyonel kariyerine tiyatro
        sahnesinde başladı.

        Kariyeri boyunca farklı tiyatro topluluklarında ve kurumlarında görev
        alan Kılıç, oyunculuğun yanı sıra sahne sanatları alanındaki
        çalışmalarını da sürdürdü.

        Yıllar içerisinde tiyatro sahnesinde çok sayıda karaktere hayat veren
        oyuncu, sahip olduğu deneyimle genç oyunculara da katkı sağladı.

        TELEVİZYONDA TANINDI

        Serhat Mustafa Kılıç, tiyatronun ardından televizyon projelerinde de
        önemli roller üstlendi. Hatırla Sevgili, Ezel, Seksenler, Söz,
        Kuruluş Osman, Kirli Sepeti ve Mehmed: Fetihler Sultanı gibi
        yapımlarda rol aldı.

        Özellikle Seksenler dizisinde canlandırdığı Ergun Plak karakteri,
        oyuncunun televizyon izleyicileri tarafından geniş kitlelerce
        tanınmasını sağlayan rollerinden biri oldu.

        Kılıç, farklı türlerdeki televizyon projelerinde birbirinden farklı
        karakterleri canlandırarak oyunculuk kariyerini uzun yıllar boyunca
        sürdürdü.

        SİNEMA KARİYERİ

        Başarılı oyuncu televizyon çalışmalarının yanı sıra sinema filmlerinde
        de rol aldı. Nokta, Veda, Kış Uykusu, Mavzer ve Cenazemize Hoş
        Geldiniz gibi yapımlarda yer alan Kılıç, sinema kariyerinde de
        dikkat çeken performanslar sergiledi.

        Özellikle Nuri Bilge Ceylan'ın Kış Uykusu filminde canlandırdığı
        İmam Hamdi karakteriyle sinema izleyicisinin karşısına çıktı.

        Farklı yönetmenlerle ve farklı türlerde çalışan oyuncu, kariyeri
        boyunca tiyatro ile televizyon ve sinemayı birlikte sürdürdü.

        YAKLAŞIK 30 YILLIK SANAT HAYATI

        Serhat Mustafa Kılıç, yaklaşık 30 yıllık sanat hayatı boyunca
        tiyatrodan televizyona, sinemadan farklı sahne çalışmalarına kadar
        birçok alanda üretim gerçekleştirdi.

        Oyunculuğunun yanı sıra eğitim çalışmalarına da önem veren Kılıç,
        sahne sanatları alanındaki bilgi ve deneyimini yeni nesil oyunculara
        aktarmaya çalıştı.

        Kariyeri boyunca farklı karakterlere hayat veren oyuncu, özellikle
        televizyon dizilerindeki performanslarıyla geniş bir hayran kitlesine
        ulaştı.

        ÖLÜMÜYLE İLGİLİ SORUŞTURMA SÜRÜYOR

        Kılıç'ın Kağıthane'deki evinde hayatını kaybetmesinin ardından olayla
        ilgili inceleme başlatıldı. Oyuncunun kesin ölüm nedeninin yapılacak
        adli incelemeler sonucunda belirlenmesi bekleniyor.

        Sosyal medyada ölüm nedenine ilişkin çeşitli iddialar gündeme gelse de
        resmi makamlar tarafından doğrulanmayan bilgilerin kesin gerçek olarak
        değerlendirilmemesi gerekiyor.

        Yetkililerden gelecek açıklamalar ve Adli Tıp Kurumu'ndaki işlemlerin
        ardından olayın tüm detaylarının netleşmesi bekleniyor.

        SEVENLERİNDEN VEDA MESAJLARI

        Oyuncunun vefat haberinin ardından sanat dünyasından çok sayıda isim
        sosyal medya hesaplarından başsağlığı mesajları paylaştı.

        Kılıç'ın yıllar boyunca birlikte çalıştığı oyuncular, yönetmenler,
        tiyatro sanatçıları ve sevenleri, ünlü oyuncunun ardından duydukları
        üzüntüyü dile getirdi.

        Oyuncunun canlandırdığı karakterler ve sanat hayatı boyunca ortaya
        koyduğu çalışmalar, sevenleri tarafından paylaşılan mesajlarda
        hatırlatıldı.

        CENAZE PROGRAMI BEKLENİYOR

        Serhat Mustafa Kılıç'ın vefatının ardından cenaze töreninin ne zaman
        ve nerede gerçekleştirileceğine ilişkin gelişmeler takip ediliyor.

        Cenaze programına ilişkin resmi bilgilerin açıklanmasıyla birlikte
        detayların kamuoyuyla paylaşılması bekleniyor.

        SANAT DÜNYASINDA BÜYÜK KAYIP

        Serhat Mustafa Kılıç'ın 51 yaşında hayatını kaybetmesi, Türk sanat
        dünyasında büyük üzüntü yarattı.

        Tiyatro sahnesinden televizyon ekranlarına ve sinema filmlerine kadar
        uzanan kariyerinde çok sayıda projede yer alan Kılıç, geride uzun
        yıllara yayılan bir sanat kariyeri ve izleyicilerin hafızasında yer
        eden karakterler bıraktı.

        Ünlü oyuncunun vefatıyla ilgili resmi açıklamalar geldikçe haberimiz
        güncellenecektir.

        HABERİSTA olarak Serhat Mustafa Kılıç'ın ailesine, yakınlarına,
        meslektaşlarına ve tüm sevenlerine başsağlığı diliyoruz.
    `,

    tarih: "6 Eylül 2026",
    saat: "17:40",
    gorsel: "images/SERHAT.jpeg",
    kaynak: "HABERİSTA"
},
    {
        id: 11,
        kategori: "Gündem",
        baslik: "4 il için sel ve heyelan uyarısı",

        spot: "6 Eylül 2026'da bazı bölgelerde etkili olması beklenen yağışlar nedeniyle 4 il için sel ve heyelan uyarısı yapıldı. Yetkililer, vatandaşların kuvvetli yağış sırasında dikkatli olması gerektiğini belirtti.",

        icerik: `
            Türkiye'nin bazı bölgelerinde etkili olması beklenen yağışlı hava
            nedeniyle vatandaşlara yönelik uyarılar gündeme geldi. Meteorolojik
            değerlendirmelerde bazı bölgelerde yağışların yerel olarak kuvvetlenebileceği
            belirtilirken, özellikle sel ve heyelan riski bulunan alanlarda yaşayan
            vatandaşların dikkatli olması istendi.

            6 Eylül Pazar günü itibarıyla hava durumundaki değişiklikler ulaşım,
            tarım ve günlük yaşam açısından yakından takip ediliyor. Kısa süre
            içerisinde etkili olan kuvvetli yağışlar şehir merkezlerinde su
            birikintilerine, kırsal bölgelerde ise ulaşım sorunlarına neden
            olabiliyor.

            Yetkililer tarafından yapılan değerlendirmelerde vatandaşların
            meteorolojik uyarıları takip etmeleri ve zorunlu olmadıkça riskli
            bölgelerde bulunmamaları gerektiği vurgulanıyor.

            Özellikle dere yatakları, su kanalları, eğimli araziler ve daha
            önce heyelan yaşanan bölgeler için ekstra dikkat çağrısı yapılıyor.

            SEL RİSKİ ARTIYOR

            Kuvvetli yağış sırasında kısa süre içerisinde büyük miktarda suyun
            birikmesi özellikle alçak bölgelerde ani su baskınlarına yol açabiliyor.
            Bu nedenle vatandaşların yağış sırasında dere yataklarından ve suyun
            hızla birikebileceği bölgelerden uzak durması önem taşıyor.

            Araç sürücülerinin de suyla kaplanan yollarda ilerlemeye çalışmaması
            gerektiği belirtiliyor. Su seviyesinin aracın güvenli geçiş sınırını
            aşması durumunda sürücülerin alternatif güzergahları tercih etmesi
            gerekiyor.

            HEYELAN TEHLİKESİ

            Yağışların uzun süre devam ettiği eğimli bölgelerde toprağın
            hareket etmesi heyelan riskini artırabiliyor. Özellikle dağlık
            bölgelerdeki yolların kullanılması sırasında dikkatli olunması
            gerektiği belirtiliyor.

            Uzmanlar, vatandaşların hava durumuna ilişkin resmi uyarıları
            takip etmelerini ve sosyal medyada doğrulanmamış bilgilere
            itibar etmemelerini öneriyor.

            HAVA DURUMU TAKİP EDİLİYOR

            Yağışların etkisinin bölgeden bölgeye değişebileceği belirtilirken,
            gün içerisinde yeni meteorolojik uyarıların yapılabileceği ifade
            ediliyor.

            Vatandaşların seyahat planlarını hava koşullarını dikkate alarak
            yapması, özellikle uzun yola çıkacak kişilerin güzergahlarını
            önceden kontrol etmesi önem taşıyor.

            HABERİSTA olarak hava koşullarına ilişkin gelişmeleri ve resmi
            açıklamaları takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "12:10",
        gorsel: "images/meteroji.jpeg",
        kaynak: "HABERİSTA"
    },


    /* =====================================================
       2 - TÜRKİYE
    ===================================================== */

    {
        id: 12,
        kategori: "Türkiye",
        baslik: "Son depremler: AFAD ve Kandilli verileri güncellendi",

        spot: "Türkiye'de vatandaşların yakından takip ettiği son deprem verileri 6 Eylül itibarıyla güncellendi. Gün içerisinde farklı bölgelerde çeşitli büyüklüklerde sarsıntılar kaydedildi.",

        icerik: `
            Türkiye'nin deprem kuşağında yer alması nedeniyle ülke genelinde
            meydana gelen sarsıntılar vatandaşlar tarafından yakından takip
            ediliyor.

            AFAD ve Kandilli Rasathanesi tarafından paylaşılan deprem verileri
            gün içerisinde düzenli olarak kontrol ediliyor. Vatandaşlar meydana
            gelen depremlerin merkez üssünü, büyüklüğünü ve derinliğini resmi
            kaynaklardan öğrenmeye çalışıyor.

            6 Eylül 2026 itibarıyla Türkiye'nin farklı bölgelerinde çeşitli
            büyüklüklerde sarsıntılar kaydedilirken, özellikle deprem riski
            bulunan bölgelerde yaşayan vatandaşların gelişmeleri yakından
            takip ettiği görülüyor.

            RESMİ KAYNAKLAR ÖNEMLİ

            Deprem sonrasında sosyal medya platformlarında çok sayıda paylaşım
            yapılabiliyor. Ancak bu paylaşımların tamamının doğru olmadığı
            unutulmamalı.

            Uzmanlar, vatandaşların depremle ilgili bilgi edinirken AFAD ve
            Kandilli Rasathanesi gibi resmi kaynakları takip etmesi gerektiğini
            belirtiyor.

            DEPREM SIRASINDA NE YAPILMALI?

            Deprem sırasında öncelikle panik yapılmaması gerekiyor. Bina içerisinde
            bulunan kişilerin camlardan, balkonlardan ve devrilebilecek ağır
            eşyalardan uzak durması önem taşıyor.

            Güvenli bir noktaya geçilmesi ve mümkün olduğunca baş ve boyun
            bölgesinin korunması öneriliyor.

            Deprem sonrasında ise hasar meydana gelmiş olabilecek binalara
            tekrar girilmemesi gerekiyor.

            DEPREME HAZIRLIK

            Uzmanlara göre deprem hazırlığı yalnızca deprem meydana geldiğinde
            yapılacaklardan ibaret değil. Evlerde ağır eşyaların sabitlenmesi,
            acil durum çantasının hazırlanması ve aile bireyleriyle iletişim
            planı oluşturulması da büyük önem taşıyor.

            Vatandaşların yaşadıkları bölgelerdeki toplanma alanlarını önceden
            öğrenmeleri de öneriliyor.

            TÜRKİYE'DE DEPREM GÜNDEMİ

            Türkiye'de farklı fay hatlarının bulunması nedeniyle deprem konusu
            uzun yıllardır ülkenin önemli gündem maddeleri arasında yer alıyor.

            Gün içerisinde meydana gelen her sarsıntı vatandaşların dikkatini
            çekerken, uzmanlar küçük depremlerin tek başına büyük bir depremin
            habercisi olarak değerlendirilmemesi gerektiğini vurguluyor.

            HABERİSTA olarak Türkiye'deki deprem gelişmelerini ve resmi
            açıklamaları takip etmeye devam ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "11:55",
        gorsel: "images/deprem.jpeg",
        kaynak: "AFAD / Kandilli Rasathanesi"
    },


    /* =====================================================
       3 - EĞİTİM
    ===================================================== */

    {
        id: 13,
        kategori: "Eğitim",
        baslik: "2026 KPSS Lisans sınavı bugün yapılıyor",

        spot: "2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu 6 Eylül Pazar günü gerçekleştirildi. Binlerce aday kamu personeli olabilmek için sınav merkezlerinde ter döktü.",

        icerik: `
            Kamu kurumlarında görev almak isteyen adayların uzun süredir
            hazırlandığı 2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu
            6 Eylül Pazar günü gerçekleştirildi.

            ÖSYM tarafından düzenlenen sınav için Türkiye genelindeki sınav
            merkezlerinde yoğunluk yaşandı.

            Sabahın erken saatlerinden itibaren sınav binalarına gelen adaylar,
            sınav saatinden önce salonlara giriş yaptı.

            SINAVDA 120 SORU

            Genel Yetenek ve Genel Kültür oturumunda adaylara toplam 120 soru
            yöneltildi ve sınav için 130 dakika süre verildi.

            Adaylar sınav boyunca Türkçe, matematik, tarih, coğrafya ve
            vatandaşlık gibi alanlardan gelen soruları yanıtladı.

            SINAV MERKEZLERİNDE YOĞUNLUK

            Türkiye'nin birçok kentinde sınav öncesinde ulaşım yoğunluğu
            yaşandı. Adaylar sınava geç kalmamak için sınav merkezlerine
            erken saatlerde geldi.

            Sınav kuralları gereği belirlenen saatten sonra sınav binalarına
            giriş yapılamaması nedeniyle adaylar sınav saatlerine özellikle
            dikkat etti.

            SORULAR VE CEVAP ANAHTARI

            Sınavın ardından adayların en çok merak ettiği konulardan biri
            soru kitapçığı ve cevap anahtarının ne zaman yayımlanacağı oldu.

            ÖSYM'nin yayımlayacağı resmi soru ve cevap anahtarları üzerinden
            adaylar sınav performanslarını değerlendirebilecek.

            SONUÇLAR BEKLENİYOR

            Sınavın tamamlanmasının ardından adayların gözü sonuç takvimine
            çevrildi.

            KPSS puanları kamu kurum ve kuruluşlarının çeşitli personel
            alımlarında önemli bir değerlendirme kriteri olarak kullanılıyor.

            Adaylar sonuçların açıklanmasının ardından tercih ve başvuru
            süreçlerini takip edecek.

            TERCİH DÖNEMİ ÖNEMLİ

            KPSS puanı alan adayların yalnızca puanlarına değil, başvuracakları
            kadroların özel şartlarına da dikkat etmesi gerekiyor.

            Mezuniyet şartları, yaş şartları ve diğer özel koşullar tercih
            sürecinde önem taşıyor.

            HABERİSTA Eğitim Servisi olarak KPSS sonuçları ve kamu personeli
            alımlarına ilişkin gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "10:15",
        gorsel: "images/kpss.jpeg",
        kaynak: "ÖSYM"
    },


    /* =====================================================
       4 - SPOR
    ===================================================== */

    {
        id: 14,
        kategori: "Spor",
        baslik: "Beşiktaş derbide Fenerbahçe'yi 2-1 mağlup etti",

        spot: "Trendyol Süper Lig'in 4. haftasındaki dev derbide Beşiktaş, Fenerbahçe'yi deplasmanda 2-1 mağlup ederek üç puanın sahibi oldu.",

        icerik: `
            Trendyol Süper Lig'in 4. haftasında futbolseverlerin büyük
            heyecanla beklediği Fenerbahçe-Beşiktaş derbisi oynandı.

            Kadıköy'deki mücadelede iki takım da karşılaşmaya yüksek tempoyla
            başladı. Tribünlerde büyük bir atmosferin oluştuğu maçta ilk gol
            Fenerbahçe'den geldi.

            Milan Skriniar'ın golüyle sarı-lacivertli ekip karşılaşmada
            1-0 öne geçti.

            BEŞİKTAŞ'TAN HIZLI CEVAP

            Fenerbahçe'nin golünün ardından Beşiktaş oyunun kontrolünü
            yeniden ele geçirmek için baskısını artırdı.

            Siyah-beyazlı takımın çabaları sonuç verdi ve Rıdvan Yılmaz'ın
            attığı golle skor 1-1'e geldi.

            İlk yarının kalan bölümünde iki takım da üstünlük kurmak için
            mücadele etti.

            İKİNCİ YARIDA HEYECAN ARTTI

            Karşılaşmanın ikinci yarısında tempo daha da yükseldi.

            Fenerbahçe kendi sahasında yeniden öne geçmek için pozisyonlar
            üretmeye çalışırken Beşiktaş hızlı hücumlarla rakip kalede
            tehlike oluşturmaya başladı.

            Mücadelenin ilerleyen dakikalarında Beşiktaş'ın yıldız oyuncusu
            Dusan Vlahovic sahneye çıktı.

            VLAHOVIC SKORU DEĞİŞTİRDİ

            Vlahovic'in attığı gol Beşiktaş'ı 2-1 öne geçirdi.

            Golden sonra Fenerbahçe beraberlik golünü bulmak için baskısını
            artırdı. Ancak Beşiktaş savunması karşılaşmanın son bölümünde
            skor üstünlüğünü korumayı başardı.

            DERBİDE SON DÜDÜK

            Karşılaşmanın son düdüğüyle birlikte Beşiktaş sahadan
            2-1 galip ayrıldı.

            Siyah-beyazlı ekip deplasmanda aldığı bu önemli galibiyetle
            üç puanı hanesine yazdırırken Fenerbahçe kendi sahasında
            mağlubiyet yaşadı.

            MAÇIN ÖNE ÇIKAN İSİMLERİ

            Rıdvan Yılmaz ve Dusan Vlahovic Beşiktaş adına skora katkı
            sağlayan oyuncular olurken, Fenerbahçe'nin golünü Milan
            Skriniar kaydetti.

            Karşılaşma sosyal medyada da büyük yankı oluşturdu.

            SEZONUN GERİ KALANI

            Süper Lig'de sezonun henüz başında oynanan derbinin ardından
            iki takım da önündeki karşılaşmalara odaklanacak.

            Beşiktaş bu galibiyetle moral kazanırken Fenerbahçe'nin önündeki
            maçlarda nasıl bir reaksiyon göstereceği merak konusu oldu.

            HABERİSTA Spor Servisi olarak Süper Lig'deki tüm gelişmeleri
            takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "00:20",
        gorsel: "images/bjkfb.jpeg",
        kaynak: "Spor Servisi"
    },


    /* =====================================================
       5 - EKONOMİ
    ===================================================== */

    {
        id: 15,
        kategori: "Ekonomi",
        baslik: "Altın fiyatlarında 6 Eylül hareketliliği",

        spot: "Hafta sonuna girilirken yatırımcıların gözü gram, çeyrek, yarım ve Cumhuriyet altını fiyatlarında. Küresel piyasalardaki gelişmeler yakından takip ediliyor.",

        icerik: `
            Altın piyasasında hareketlilik yatırımcıların gündemindeki yerini
            koruyor. Türkiye'de özellikle gram altın ve çeyrek altın fiyatları
            vatandaşlar tarafından yakından takip ediliyor.

            6 Eylül 2026 itibarıyla yatırımcılar yeni haftaya girilirken
            altın fiyatlarının nasıl şekilleneceğini merak ediyor.

            Altının fiyatı yalnızca Türkiye'deki gelişmelerden etkilenmiyor.
            Küresel piyasalarda ons altının seyri, doların değeri, merkez
            bankalarının kararları ve ekonomik beklentiler de fiyat üzerinde
            etkili olabiliyor.

            GRAM ALTIN İLGİ GÖRÜYOR

            Gram altın Türkiye'de en çok takip edilen yatırım araçlarından
            biri olmaya devam ediyor.

            Gün içerisinde fiyatlarda meydana gelen değişimler yatırımcıların
            alış ve satış rakamlarını ayrı ayrı takip etmesine neden oluyor.

            ÇEYREK ALTIN DA GÜNDEMDE

            Fiziki altın tarafında çeyrek altın da vatandaşların yakından
            takip ettiği ürünler arasında bulunuyor.

            Özellikle düğün sezonunda çeyrek altın fiyatları daha fazla
            araştırılıyor.

            KÜRESEL PİYASALARIN ETKİSİ

            ABD ekonomisine ilişkin veriler, faiz beklentileri ve merkez
            bankalarının para politikaları altın piyasasının yönü açısından
            önem taşıyor.

            Yatırımcıların riskten kaçınma eğiliminin arttığı dönemlerde
            değerli metallere olan ilgi de değişebiliyor.

            YENİ HAFTA BEKLENİYOR

            Hafta sonu nedeniyle piyasalarda işlem koşulları hafta içine
            göre farklılık gösterirken yatırımcılar yeni haftanın açılışını
            yakından izleyecek.

            Uzmanlar yatırım kararlarının yalnızca günlük fiyat hareketlerine
            göre verilmemesi gerektiğini vurguluyor.

            Altın alım-satımı yapmak isteyen vatandaşların güncel fiyatları
            ve işlem maliyetlerini ayrı ayrı değerlendirmesi önem taşıyor.

            HABERİSTA Ekonomi Servisi olarak altın piyasasındaki gelişmeleri
            takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:30",
        gorsel: "images/altın.jpeg",
        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       6 - EKONOMİ
    ===================================================== */

    {
        id: 16,
        kategori: "Ekonomi",
        baslik: "Akaryakıt fiyatları yeniden gündemde",

        spot: "Benzin, motorin ve LPG fiyatları küresel petrol piyasaları, döviz kuru ve vergi düzenlemeleri nedeniyle vatandaşların gündemindeki yerini koruyor.",

        icerik: `
            Türkiye'de milyonlarca araç sahibinin yakından takip ettiği
            akaryakıt fiyatları gündemdeki yerini koruyor.

            Benzin, motorin ve LPG fiyatları hem bireysel araç sahipleri
            hem de ticari taşımacılık yapan işletmeler açısından büyük
            önem taşıyor.

            Akaryakıt fiyatlarının oluşmasında uluslararası petrol fiyatları,
            döviz kuru ve vergiler önemli rol oynuyor.

            PETROL FİYATLARI TAKİPTE

            Küresel enerji piyasalarında yaşanan gelişmeler petrol fiyatları
            üzerinde doğrudan etkili olabiliyor.

            Petrol fiyatlarında meydana gelen değişikliklerin yanı sıra
            döviz kurundaki hareketlilik de Türkiye'deki akaryakıt
            fiyatlarının takip edilmesine neden oluyor.

            BENZİN VE MOTORİN

            Özellikle uzun yol yapan vatandaşlar için benzin ve motorin
            fiyatlarındaki değişiklikler önemli bir maliyet oluşturuyor.

            Ticari araç kullanan işletmeler açısından ise yakıt maliyetleri
            toplam işletme giderlerinin önemli bir bölümünü oluşturabiliyor.

            TAŞIMACILIK MALİYETLERİ

            Akaryakıt fiyatlarının yükselmesi yalnızca sürücüleri değil,
            taşımacılık sektörünü de etkileyebiliyor.

            Nakliye maliyetlerindeki değişiklikler bazı ürünlerin raf
            fiyatlarına dolaylı olarak yansıyabiliyor.

            LPG KULLANANLAR DA TAKİP EDİYOR

            LPG'li araç kullanan vatandaşlar da istasyonlardaki güncel
            fiyatları yakından takip ediyor.

            Yeni haftada petrol piyasası ve döviz kurundaki hareketlilik
            akaryakıt fiyatları açısından önem taşıyacak.

            Vatandaşların olası zam veya indirim haberlerinde resmi ve
            güvenilir kaynakları takip etmesi gerekiyor.

            HABERİSTA Ekonomi Servisi olarak akaryakıt piyasasındaki
            gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:10",
        gorsel: "images/yakıt.jpeg",
        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       7 - DÜNYA
    ===================================================== */

    {
        id: 17,
        kategori: "Dünya",
        baslik: "Rusya'da üniversitenin altında Nazi tankı bulundu",

        spot: "Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında II. Dünya Savaşı döneminden kalma Alman Panther V tankı bulundu.",

        icerik: `
            Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında tarih
            dünyasında dikkat çeken bir keşif gerçekleştirildi.

            Bir üniversite yerleşkesinde yapılan çalışmalar sırasında
            II. Dünya Savaşı döneminden kaldığı belirtilen Alman yapımı
            Panther V tankına ulaşıldı.

            Tankın önemli bir bölümünün uzun süredir toprağın altında
            bulunduğu bildirildi.

            TARİHİ ARAÇ TOPRAKTAN ÇIKARILDI

            Çalışmalar sırasında ortaya çıkan metal parçalarının ardından
            bölgede daha detaylı inceleme gerçekleştirildi.

            İncelemeler sonucunda ortaya çıkan yapının savaş döneminden
            kalma bir tank olduğu belirlendi.

            Panther tankları II. Dünya Savaşı sırasında Almanya tarafından
            kullanılan önemli zırhlı araçlar arasında yer alıyordu.

            KAZAN'DAKİ KEŞİF DİKKAT ÇEKTİ

            Tankın bir üniversite alanında bulunması keşfi daha da dikkat
            çekici hale getirdi.

            Tarihi araçların yıllar sonra toprağın altından çıkarılması,
            bölgenin geçmişine ilişkin yeni araştırmalar yapılmasına
            imkan sağlayabiliyor.

            TARİHİ ESERLERİN KORUNMASI

            Savaş döneminden kalan askeri araçların korunması tarih
            araştırmaları açısından büyük önem taşıyor.

            Uzmanların araç üzerinde yapacağı incelemeler tankın geçmişi,
            bulunduğu bölge ve nasıl toprağın altında kaldığı konusunda
            daha fazla bilgi sağlayabilir.

            II. DÜNYA SAVAŞI'NIN İZLERİ

            II. Dünya Savaşı'ndan onlarca yıl sonra bile farklı ülkelerde
            savaş dönemine ait araç ve kalıntılara rastlanabiliyor.

            Bu tür keşifler askeri tarih, arkeoloji ve bölgesel tarih
            araştırmaları açısından önemli kabul ediliyor.

            Kazan'daki tankın da uzmanlar tarafından incelenmesi ve
            gelecekte sergilenip sergilenmeyeceğinin değerlendirilmesi
            bekleniyor.

            HABERİSTA Dünya Servisi olarak gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:45",
        gorsel: "images/rusya ünüversite.jpeg",
        kaynak: "Dünya Servisi"
    },


    /* =====================================================
       8 - SPOR
    ===================================================== */

    {
        id: 18,
        kategori: "Spor",
        baslik: "MXGP şampiyonu Afyon'da belli oluyor",

        spot: "Dünya Motokros Şampiyonası'nın 2026 sezonundaki önemli duraklarından MXGP Türkiye'de final yarışları 6 Eylül Pazar günü Afyonkarahisar'da gerçekleştiriliyor.",

        icerik: `
            Dünya Motokros Şampiyonası'nın önemli etaplarından biri olan
            MXGP Türkiye'de heyecan doruğa ulaştı.

            2026 sezonundaki önemli yarışlardan biri Afyonkarahisar'da
            düzenlenirken, dünyanın farklı ülkelerinden gelen sporcular
            zorlu parkurda mücadele ediyor.

            6 Eylül Pazar günü gerçekleştirilen final yarışları motor
            sporları tutkunlarının dikkatini Afyonkarahisar'a çevirdi.

            AFYONKARAHİSAR'DA BÜYÜK YARIŞ

            Afyonkarahisar Motor Sporları Merkezi, uluslararası seviyedeki
            yarışlara ev sahipliği yapmasıyla Türkiye'nin önemli motor
            sporları merkezlerinden biri haline geldi.

            Parkurun farklı bölümleri sporcular için farklı zorluklar
            oluşturuyor.

            HIZ VE TEKNİK ÖNEMLİ

            Motokros yarışlarında yalnızca yüksek hız değil, virajlarda
            doğru çizginin seçilmesi, atlayışların doğru şekilde yapılması
            ve motosiklet kontrolü de büyük önem taşıyor.

            Pist koşullarının yarış boyunca değişmesi sporcuların
            performansını etkileyebiliyor.

            ŞAMPİYONLUK MÜCADELESİ

            Sezonun önemli yarışlarından biri olması nedeniyle
            Afyonkarahisar'daki sonuçlar şampiyona puanları açısından
            büyük önem taşıyor.

            Sporcular sezon boyunca elde ettikleri puanlarla genel
            klasmanda üst sıralarda yer almak için mücadele ediyor.

            TÜRKİYE'DE MOTOR SPORLARI

            MXGP Türkiye'nin düzenlenmesi ülkedeki motor sporlarına olan
            ilgiyi artıran önemli organizasyonlardan biri olarak öne çıkıyor.

            Yarışların yanı sıra organizasyon alanında farklı etkinlikler
            de düzenlenebiliyor.

            MOTOR SPORLARI TUTKUNLARI PİSTTE

            Yarışları takip etmek için Afyonkarahisar'a gelen motor
            sporları tutkunları hafta sonu boyunca büyük heyecana ortak
            oluyor.

            Final yarışlarının ardından sezon sıralamasında oluşacak
            tablo motor sporları dünyasında yakından takip edilecek.

            HABERİSTA Spor Servisi olarak MXGP Türkiye'deki gelişmeleri
            takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:30",
        gorsel: "images/mxgp yarışması.jpeg",
        kaynak: "Türkiye Motosiklet Federasyonu"
    },


    /* =====================================================
       9 - DÜNYA
    ===================================================== */

    {
        id: 19,
        kategori: "Dünya",
        baslik: "Avrupa seyahatlerinde sınır kontrollerinde yeni dönem",

        spot: "Avrupa'ya seyahat edenleri ilgilendiren EES sınır kontrol sisteminde yeni dönem başlıyor. Sistem kapsamında sınır geçişlerinde biyometrik kontrollerin kullanılması planlanıyor.",

        icerik: `
            Avrupa'ya seyahat eden vatandaşları yakından ilgilendiren
            sınır kontrol uygulamalarında dijitalleşme süreci devam ediyor.

            Avrupa Birliği'nin Entry/Exit System olarak bilinen EES
            sistemi, Schengen bölgesinin dış sınırlarında giriş ve
            çıkışların elektronik olarak takip edilmesini amaçlıyor.

            Sistem özellikle Avrupa Birliği dışından Schengen bölgesine
            seyahat eden kişiler açısından önem taşıyor.

            PASAPORT DAMGASI DÖNEMİ DEĞİŞİYOR

            EES sisteminin uygulanmasıyla birlikte geleneksel pasaport
            damgalarının yerini elektronik kayıtların alması hedefleniyor.

            Böylece yolcuların Schengen bölgesine giriş ve çıkışlarının
            merkezi bir sistem üzerinden takip edilmesi amaçlanıyor.

            BİYOMETRİK KONTROLLER

            Yeni sistem kapsamında yolcuların belirli biyometrik
            bilgilerinin kullanılması planlanıyor.

            Sınır kapılarında yapılacak kontrollerin daha dijital
            hale getirilmesi ve kimlik doğrulama işlemlerinin
            elektronik sistemlerle desteklenmesi hedefleniyor.

            TÜRKİYE'DEN AVRUPA'YA SEYAHAT EDENLER

            Avrupa ülkelerine turistik, eğitim, iş veya farklı
            amaçlarla seyahat eden Türk vatandaşlarının yeni
            uygulamaları takip etmesi önem taşıyor.

            Seyahat öncesinde pasaport, vize ve gidilecek ülkenin
            güncel giriş şartlarının kontrol edilmesi gerekiyor.

            SINIR KAPLARINDA YOĞUNLUK OLABİLİR

            Yeni sistemin uygulanmaya başladığı dönemlerde sınır
            kapılarında işlem sürelerinin değişmesi mümkün olabilir.

            Özellikle yoğun seyahat dönemlerinde yolcuların sınır
            kontrolleri için daha fazla zaman ayırması gerekebilir.

            DİJİTAL SINIR DÖNEMİ

            Avrupa'da sınır yönetiminin giderek daha fazla dijital
            sistemlere taşınması bekleniyor.

            Yeni sistemin temel hedefleri arasında sınır geçişlerinin
            daha düzenli şekilde kayıt altına alınması ve güvenlik
            kontrollerinin geliştirilmesi bulunuyor.

            HABERİSTA Dünya Servisi olarak Avrupa'daki sınır
            uygulamalarına ilişkin gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:15",
        gorsel: "images/asrupa seyhat.jpeg",
        kaynak: "Avrupa Birliği"
    },


    
    /* =====================================================
       11 - SON DAKİKA
    ===================================================== */

    {
        id: 1,
        kategori: "Son Dakika",
        baslik: "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",

        spot: "5 Eylül 2026 tarihli Resmî Gazete yayımlandı. Kamu yönetimi, ekonomi, eğitim ve farklı alanları ilgilendiren kararlar ve düzenlemeler kamuoyuna duyuruldu.",

        icerik: `
            5 Eylül 2026 tarihli ve günün önemli kararlarını içeren
            Resmî Gazete yayımlandı.

            Resmî Gazete'de yayımlanan karar, yönetmelik, atama ve
            düzenlemeler kamu kurumları ve vatandaşlar açısından
            önemli başlıklar oluşturdu.

            Resmî Gazete'de yayımlanan düzenlemeler arasında farklı
            kamu kurumlarını ve vatandaşları ilgilendiren kararlar
            yer aldı.

            KAMU YÖNETİMİNE İLİŞKİN KARARLAR

            Kamu kurumlarının işleyişine ilişkin çeşitli düzenlemeler
            ve kararlar yayımlanırken, ilgili kurumların görev ve
            sorumluluklarına ilişkin yeni gelişmeler kamuoyuna
            duyuruldu.

            ATAMALAR

            Resmî Gazete'nin önemli bölümlerinden biri de atama
            kararları oldu.

            Çeşitli kamu kurumlarında görev değişikliklerine ilişkin
            kararlar yayımlanırken yeni görevlendirmeler de duyuruldu.

            EKONOMİ VE KAMU MALİYESİ

            Ekonomi alanında yayımlanan kararlar ve düzenlemeler
            vatandaşların ve iş dünyasının gündeminde yer aldı.

            Kamu maliyesi, ekonomik yönetim ve çeşitli idari
            düzenlemelere ilişkin hükümler Resmî Gazete üzerinden
            kamuoyuyla paylaşıldı.

            EĞİTİM VE DİĞER ALANLAR

            Eğitim başta olmak üzere farklı sektörleri ilgilendiren
            düzenlemeler de yayımlanan kararlar arasında yer aldı.

            Resmî Gazete'de yayımlanan kararlar yürürlük tarihleri
            ve kapsamlarına göre ilgili kurumlar tarafından
            uygulanacak.

            Vatandaşların kendilerini ilgilendiren düzenlemelerin
            ayrıntılarını resmi metinlerden takip etmesi önem taşıyor.

            HABERİSTA olarak Resmî Gazete'deki yeni kararları ve
            uygulamaların vatandaşlara etkilerini takip ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "15:20",
        gorsel: "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",
        kaynak: "Resmî Gazete"
    },


    /* =====================================================
       12 - SPOR
    ===================================================== */

    {
        id: 2,
        kategori: "Spor",
        baslik: "Filenin Sultanları Avrupa şampiyonluğu için sahada! Türkiye-İtalya finali bugün oynanacak",

        spot: "A Milli Kadın Voleybol Takımı Avrupa şampiyonluğu için İtalya karşısında sahaya çıkıyor. Final mücadelesi İstanbul'da oynanacak.",

        icerik: `
            A Milli Kadın Voleybol Takımı Avrupa Şampiyonası'nda
            şampiyonluk için sahaya çıkıyor.

            Filenin Sultanları'nın finaldeki rakibi İtalya oldu.

            Türkiye'nin ev sahipliği yaptığı turnuvada milli takımın
            finale kadar yükselmesi büyük heyecan oluşturdu.

            FİNALİN ADRESİ İSTANBUL

            Türkiye ile İtalya arasındaki final mücadelesi İstanbul'da
            oynanacak.

            Karşılaşma öncesinde voleybolseverlerin ilgisi büyük olurken
            milli takımın şampiyonluk hedefiyle sahaya çıkması
            Türkiye genelinde heyecan oluşturdu.

            TAKIMIN HEDEFİ ŞAMPİYONLUK

            Filenin Sultanları turnuva boyunca başarılı bir performans
            ortaya koyarak finale yükseldi.

            Milli takım oyuncuları kritik karşılaşmalarda gösterdikleri
            mücadeleyle dikkat çekti.

            Finalde servis karşılamaları, bloklar, hücum organizasyonları
            ve savunma performansı karşılaşmanın sonucunda önemli rol
            oynayacak.

            TARAFTAR DESTEĞİ

            Türkiye'nin finalde sahaya çıkacak olması nedeniyle
            voleybolseverlerin milli takıma desteği de büyük.

            Sosyal medyada Filenin Sultanları için çok sayıda destek
            mesajı paylaşılırken taraftarlar final karşılaşmasına
            odaklandı.

            ŞAMPİYONLUK İÇİN SON MAÇ

            Turnuvanın en önemli karşılaşması olan finalde Türkiye ve
            İtalya Avrupa şampiyonluğu için mücadele edecek.

            Maçın ardından turnuvanın şampiyonu belli olacak.

            HABERİSTA Spor Servisi olarak karşılaşmanın tüm gelişmelerini
            takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "01:30",
        gorsel: "images/AVRUPA.jpeg",
        kaynak: "Türkiye Voleybol Federasyonu"
    },


    /* =====================================================
       13 - EKONOMİ
    ===================================================== */

    {
        id: 3,
        kategori: "Ekonomi",
        baslik: "Para piyasası fonlarında yeni dönem: Stopaj oranı yüzde 10'a çıkarıldı",

        spot: "Para piyasası fonlarına ilişkin stopaj düzenlemesi yatırımcıların gündemine geldi. Yeni düzenlemeyle birlikte stopaj oranında değişikliğe gidildi.",

        icerik: `
            Finans piyasalarında yatırımcıların yakından takip ettiği
            para piyasası fonlarına ilişkin yeni düzenleme gündeme geldi.

            Yapılan düzenlemeyle para piyasası fonlarından elde edilen
            kazançlara uygulanan stopaj oranında değişiklik yapıldı.

            Yeni oran yatırımcıların fon tercihlerini ve net getirilerini
            değerlendirmesinde önemli bir başlık haline geldi.

            YATIRIMCILARIN DİKKATİ FONLARDA

            Para piyasası fonları özellikle kısa vadeli yatırım yapmak
            isteyen yatırımcılar tarafından tercih edilebiliyor.

            Fonların getirileri piyasa koşullarına göre değişirken,
            vergi ve stopaj uygulamaları yatırımcıların elde edeceği
            net kazanç açısından önem taşıyor.

            STOPAJ DEĞİŞİKLİĞİ

            Stopaj oranındaki değişiklik sonrasında yatırımcıların
            brüt getiri ile net getiri arasındaki farkı dikkate alması
            gerekiyor.

            Bir yatırım aracının yalnızca nominal getirisine bakmak
            yerine vergi sonrası getirinin değerlendirilmesi önem taşıyor.

            FONLARA İLGİ DEVAM EDİYOR

            Para piyasası fonları likidite avantajları nedeniyle
            yatırımcıların ilgisini çekmeye devam ediyor.

            Ancak her yatırım ürününde olduğu gibi fon yatırımlarında
            da risk, getiri ve vergi koşullarının birlikte değerlendirilmesi
            gerekiyor.

            YENİ DÖNEMDE YATIRIMCI NE YAPACAK?

            Yatırımcıların yeni düzenlemeyi dikkate alarak kendi
            yatırım stratejilerini yeniden değerlendirmesi bekleniyor.

            Finans uzmanları yatırım kararlarının kişinin risk profili,
            yatırım süresi ve nakit ihtiyacı dikkate alınarak verilmesi
            gerektiğini vurguluyor.

            HABERİSTA Ekonomi Servisi olarak finans piyasalarındaki
            düzenlemeleri takip ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "18:10",
        gorsel: "images/EKENOMİ.jpeg",
        kaynak: "Ekonomi Servisi"
    },


    /* =====================================================
       14 - GÜNDEM
    ===================================================== */

    {
        id: 4,
        kategori: "Gündem",
        baslik: "Eylül ayı yaşlı ve engelli aylıkları hesaplara yatırılmaya başlandı",

        spot: "Eylül ayına ilişkin yaşlı ve engelli aylığı ödemeleri vatandaşların gündeminde. Ödemelerin hak sahiplerinin hesaplarına aktarılması süreci başladı.",

        icerik: `
            Eylül ayına ilişkin yaşlı ve engelli aylığı ödemeleri
            vatandaşların gündemindeki önemli başlıklardan biri oldu.

            Sosyal destek ödemelerinden yararlanan vatandaşlar,
            ödemelerin hesaplarına ne zaman aktarılacağını yakından
            takip ediyor.

            Ödemeler hak sahiplerinin durumlarına göre ilgili ödeme
            kanalları üzerinden gerçekleştiriliyor.

            YAŞLI AYLIĞI ÖDEMELERİ

            Yaşlı aylığı, belirli şartları sağlayan vatandaşlara
            sosyal destek kapsamında ödeniyor.

            Ödemelerden yararlanabilmek için mevzuatta belirtilen
            gelir ve diğer şartların sağlanması gerekiyor.

            ENGELLİ AYLIKLARI

            Engelli vatandaşlara yönelik sosyal destek ödemeleri de
            düzenli şekilde gerçekleştiriliyor.

            Desteklerin amacı ihtiyaç sahibi vatandaşların ekonomik
            yükünü azaltmak ve sosyal destek mekanizmalarını
            güçlendirmek.

            VATANDAŞLAR ÖDEME DURUMUNU TAKİP EDİYOR

            Hak sahipleri ödemelerinin gerçekleşip gerçekleşmediğini
            ilgili resmi kanallar üzerinden kontrol edebiliyor.

            Ödeme konusunda sorun yaşayan vatandaşların ise ilgili
            kamu kurumlarına başvurmaları gerekiyor.

            SOSYAL DESTEKLERİN ÖNEMİ

            Sosyal yardım programları özellikle sabit geliri bulunan
            veya ekonomik desteğe ihtiyaç duyan vatandaşlar açısından
            önemli bir kaynak oluşturuyor.

            Ödemelerin düzenli şekilde gerçekleştirilmesi vatandaşların
            aylık bütçelerini planlamasına yardımcı oluyor.

            HABERİSTA olarak sosyal yardım ödemeleriyle ilgili resmi
            açıklamaları takip etmeye devam ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "10:27",
        gorsel: "images/GÜNDEM.jpeg",
        kaynak: "HABERİSTA Gündem"
    },


    /* =====================================================
       15 - EĞİTİM
    ===================================================== */

    {
        id: 5,
        kategori: "Eğitim",
        baslik: "PISA 2025 sonuçları için geri sayım: Sonuçlar 8 Eylül'de açıklanacak",

        spot: "PISA 2025 araştırmasının sonuçları için geri sayım başladı. Türkiye'nin eğitim performansına ilişkin sonuçların 8 Eylül'de açıklanması bekleniyor.",

        icerik: `
            Eğitim dünyasının yakından takip ettiği PISA 2025
            araştırmasının sonuçları için geri sayım başladı.

            Uluslararası Öğrenci Değerlendirme Programı olarak bilinen
            PISA araştırması, öğrencilerin bilgi ve becerilerini farklı
            alanlarda değerlendiren uluslararası çalışmalardan biri.

            SONUÇLAR BEKLENİYOR

            PISA 2025 sonuçlarının açıklanmasıyla birlikte Türkiye'nin
            uluslararası eğitim performansına ilişkin yeni veriler
            ortaya çıkacak.

            Araştırmada öğrencilerin okuma becerileri, matematik ve
            fen alanlarındaki performansları gibi çeşitli başlıklar
            değerlendiriliyor.

            EĞİTİM SİSTEMİ İÇİN ÖNEMLİ VERİ

            PISA sonuçları yalnızca öğrencilerin sınav performansını
            göstermekle kalmıyor.

            Sonuçlar eğitim politikalarının değerlendirilmesi,
            öğrencilerin güçlü ve zayıf yönlerinin belirlenmesi ve
            eğitim sisteminde yapılabilecek iyileştirmelerin
            tartışılması açısından da önem taşıyor.

            TÜRKİYE'NİN PERFORMANSI MERAK EDİLİYOR

            Yeni sonuçlarla birlikte Türkiye'nin önceki araştırmalara
            kıyasla nasıl bir değişim gösterdiği de değerlendirilecek.

            Eğitim uzmanları sonuçların tek başına değerlendirilmemesi,
            sosyoekonomik koşullar ve eğitim imkanları gibi faktörlerin
            de dikkate alınması gerektiğini belirtiyor.

            8 EYLÜL'DE AÇIKLANACAK

            PISA 2025 sonuçlarının 8 Eylül'de açıklanması bekleniyor.

            Sonuçların açıklanmasının ardından Türkiye'nin sıralaması,
            öğrenci performansları ve önceki yıllarla karşılaştırmalar
            eğitim gündeminin önemli başlıkları arasında yer alacak.

            HABERİSTA Eğitim Servisi olarak PISA sonuçlarını ve
            eğitim dünyasındaki gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:42",
        gorsel: "images/PISA.jpeg",
        kaynak: "Eğitim Servisi"
    }


];


/* =========================================================
   HER HABERE OTOMATİK SLUG VE URL EKLE
========================================================= */

haberler.forEach(function (haber) {

    haber.slug = slugOlustur(haber.baslik);

    haber.url = "/haber/" + haber.slug;

});


/* =========================================================
   SLUG İLE HABER BUL
========================================================= */

function haberSlugIleBul(slug) {

    const temizSlug = slugOlustur(
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
   GLOBAL DEĞİŞKENLER
========================================================= */

window.haberler = haberler;

window.slugOlustur = slugOlustur;

window.haberSlugIleBul = haberSlugIleBul;

window.haberIdIleBul = haberIdIleBul;


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
