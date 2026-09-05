// ============================================================
// HABERİSTA - HABERLER.JS
// ============================================================

function slugOlustur(metin) {
    return metin
        .toLocaleLowerCase("tr-TR")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/İ/g, "i")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}


// ============================================================
// HABERLER
// ============================================================

const haberler = [

    // ========================================================
    // 1 - MEVCUT HABERİN
    // ========================================================

    {
        id: 1,
        kategori: "Son Dakika",
        baslik: "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",
        spot: "5 Eylül 2026 tarihli Resmî Gazete'de ekonomi, kamu yönetimi, eğitim ve ulaştırma alanlarını ilgilendiren çok sayıda karar ve düzenleme yayımlandı. Sayıştay Başsavcılığına Recep Çevik atanırken bazı kamu kurumlarında yeni atama ve görevden alma kararları da Resmî Gazete'de yer aldı.",
        icerik: `
        5 Eylül 2026 tarihli ve 33361 sayılı Resmî Gazete yayımlandı. Gece yarısından itibaren yayımlanan karar ve düzenlemelerde kamu yönetiminden ekonomiye, yükseköğretimden ulaştırma altyapısına kadar farklı alanları ilgilendiren çok sayıda gelişme yer aldı.

        Resmî Gazete'nin yeni sayısında özellikle Cumhurbaşkanı kararları, atama ve görevden alma kararları ile çeşitli kurumlara ilişkin düzenlemeler dikkat çekti. Yayımlanan kararların bir bölümü doğrudan kamu kurumlarının çalışma yapısını ve yönetim kadrolarını ilgilendirirken, bazı düzenlemeler ise ihracat ve döviz kazandırıcı faaliyetlerde bulunan kişi ve kuruluşlar açısından önem taşıyor.

        EKONOMİ VE İHRACAT ALANINDA YENİ DÜZENLEME

        Günün öne çıkan kararlarından biri ihracat, transit ticaret, ihracat sayılan satış ve teslimler ile döviz kazandırıcı hizmet ve faaliyetlerde vergi, resim ve harç istisnasına ilişkin düzenlemede yapılan değişiklik oldu.

        Cumhurbaşkanı kararıyla yapılan değişiklik, özellikle dış ticaret faaliyetleri yürüten şirketler ve döviz kazandırıcı hizmetlerde bulunan işletmeler açısından takip edilmesi gereken düzenlemeler arasında yer aldı.

        Düzenlemenin yürürlüğe girmesiyle birlikte ilgili sektörlerde faaliyet gösteren işletmelerin mevcut uygulamalarını ve istisna kapsamındaki işlemlerini yeni hükümler doğrultusunda değerlendirmesi gerekiyor.

        Söz konusu kararın ekonomi açısından önem taşıyan noktalarından biri, ihracat ve döviz kazandırıcı faaliyetlerde uygulanan vergi, resim ve harç istisnalarının kapsamına ilişkin kuralların güncellenmesi oldu.

        KAMU HİZMETLERİNE İLİŞKİN YENİ KARAR

        Resmî Gazete'de ayrıca kamu kurum ve kuruluşlarının ürettikleri bazı mal ve hizmetlerden ücretsiz veya indirimli olarak faydalanacak kişilerin belirlenmesine ilişkin yeni bir Cumhurbaşkanı kararı yayımlandı.

        Kararla birlikte belirli kamu hizmetlerinden hangi kişi ve grupların ücretsiz veya indirimli şekilde yararlanabileceğine ilişkin çerçeve yeniden düzenlendi.

        Kamu kurumlarının sunduğu hizmetlerin niteliğine göre farklı uygulamalar bulunabildiği için vatandaşların kendilerini ilgilendiren hizmetlerde güncel mevzuatı ve ilgili kurumların duyurularını takip etmesi önem taşıyor.

        ÜNİVERSİTELERLE İLGİLİ ÖNEMLİ KARARLAR

        5 Eylül tarihli Resmî Gazete'de yükseköğretim kurumlarıyla ilgili de çeşitli kararlar yayımlandı.

        Dokuz Eylül Üniversitesi Rektörlüğü bünyesinde bulunan Güzel Sanatlar Enstitüsünün kapatılmasına karar verilirken, Munzur Üniversitesi bünyesinde Yabancı Diller ve Turizm Fakültesi kurulmasına ilişkin karar da yayımlandı.

        Kayseri Üniversitesi bünyesinde bulunan Mühendislik, Mimarlık ve Tasarım Fakültesinin adı ise Mühendislik ve Tasarım Fakültesi olarak değiştirildi.

        Bunun yanında Türkiye Uluslararası İslam, Bilim ve Teknoloji Üniversitesi bünyesinde Yabancı Diller Yüksekokulu kurulmasına ilişkin karar da Resmî Gazete'de yer aldı.

        Bu kararların üniversitelerin akademik ve idari yapılanmaları açısından önümüzdeki dönemde çeşitli değişikliklere yol açması bekleniyor.

        ULAŞTIRMA VE RAYLI SİSTEMLER

        Resmî Gazete'nin dikkat çeken diğer başlıklarından biri şehir içi raylı ulaşım sistemleri ve metrolarla ilgili düzenleme oldu.

        Şehir içi raylı ulaşım sistemleri, metrolar ve bunlarla ilgili tesislerin Ulaştırma ve Altyapı Bakanlığı tarafından üstlenilmesi, devralınması ve tamamlanmasının ardından ilgili kuruluşlara devredilmesine ilişkin şartlarda değişiklik yapılmasına dair karar yayımlandı.

        Büyükşehirlerde ulaşım altyapısının geliştirilmesi ve raylı sistem yatırımlarının tamamlanması açısından söz konusu düzenlemenin önümüzdeki dönemde önem taşıması bekleniyor.

        Yeni düzenlemeyle birlikte ilgili projelerin devralınması, tamamlanması ve sonrasında işletilmek üzere ilgili kuruluşlara devredilmesine ilişkin mevcut kurallarda değişiklik yapılmış oldu.

        SAYIŞTAY BAŞSAVCILIĞINA YENİ ATAMA

        Günün önemli atama kararlarından biri Sayıştay Başkanlığı bünyesinde gerçekleşti.

        Resmî Gazete'de yayımlanan karara göre Sayıştay Savcısı Recep Çevik, Sayıştay Başsavcılığı görevine atandı.

        Atama kararı Cumhurbaşkanı Recep Tayyip Erdoğan'ın imzasıyla yayımlanan kararlar arasında yer aldı.

        Kamu yönetiminde denetim mekanizmasının önemli kurumlarından biri olan Sayıştay'daki bu değişiklik, yayımlanan Resmî Gazete kararları arasında öne çıkan başlıklardan biri oldu.

        DİYANET İŞLERİ BAŞKANLIĞINDA ATAMALAR

        Resmî Gazete'de Diyanet İşleri Başkanlığına ilişkin çeşitli atama kararları da yayımlandı.

        Cumhurbaşkanı tarafından imzalanan kararlarla bazı müftülüklerde yeni görevlendirmeler yapılırken Diyanet teşkilatındaki bazı yönetici kadrolarında da değişiklik gerçekleştirildi.

        Atama kararları kapsamında farklı illerde görev yapan bazı müftülerin görev yerleri değiştirildi ve bazı yeni isimler görevlerine atandı.

        KAMU KURUMLARINDA GÖREV DEĞİŞİKLİKLERİ

        5 Eylül tarihli Resmî Gazete'de yalnızca tek bir kurumla sınırlı olmayan çok sayıda atama ve görevden alma kararı da yayımlandı.

        Kamu kurumlarında yapılan bu değişikliklerin bir bölümü üst düzey yönetici kadrolarını kapsarken bazı kararlar ise farklı kamu kuruluşlarındaki görev değişikliklerine ilişkin oldu.

        Atama ve görevden alma kararlarının tamamı Resmî Gazete'nin ilgili bölümünde yayımlanarak yürürlüğe girdi.

        VATANDAŞLAR İÇİN NE ANLAMA GELİYOR?

        Resmî Gazete'de yayımlanan kararların tamamı doğrudan vatandaşları ilgilendirmiyor. Ancak özellikle kamu hizmetlerinden ücretsiz veya indirimli yararlanma şartları, eğitim kurumlarının yapılanması ve ekonomik faaliyetlere ilişkin düzenlemeler belirli vatandaş grupları ve işletmeler açısından önem taşıyor.

        İhracat yapan şirketler ile döviz kazandırıcı hizmet ve faaliyetlerde bulunan işletmelerin yeni düzenlemeleri yakından takip etmesi gerekiyor.

        Üniversite öğrencileri ve akademik personel açısından ise üniversitelerin yapısına ilişkin kararların önümüzdeki eğitim dönemlerinde çeşitli etkileri olabilir.

        Raylı sistem yatırımlarıyla ilgili değişikliklerin ise özellikle büyükşehirlerde ulaşım projeleri açısından orta ve uzun vadede sonuçlarının görülmesi bekleniyor.

        RESMÎ GAZETE KARARLARI NASIL TAKİP EDİLEBİLİR?

        Vatandaşlar kendilerini ilgilendiren kanun, karar, yönetmelik, tebliğ ve diğer düzenlemeleri Resmî Gazete üzerinden takip edebiliyor.

        Özellikle vergi, eğitim, çalışma hayatı, sosyal güvenlik, kamu personeli ve ulaşım gibi alanlarda yapılan düzenlemelerin yürürlük tarihleri birbirinden farklı olabildiğinden, yalnızca haber başlığına bakmak yerine düzenlemenin tam metninin incelenmesi önem taşıyor.

        5 Eylül 2026 tarihli Resmî Gazete'de yayımlanan kararlar arasında yürürlük tarihi ayrıca belirtilen düzenlemeler de bulunuyor.

        GÜNDEMDEKİ DİĞER GELİŞMELER

        Resmî Gazete gündeminin yanı sıra 5 Eylül 2026 tarihinde Türkiye ve dünyada çok sayıda önemli gelişme yaşanıyor.

        Anadolu Ajansı'nın güncel haber akışında Sayıştay Başsavcılığına Recep Çevik'in atanmasının yanı sıra çalışan annelerin doğum izni süresine ilişkin açıklama da öne çıkan gelişmeler arasında yer aldı.

        Aile ve Sosyal Hizmetler Bakanı Mahinur Özdemir Göktaş, çalışan annelerin doğum izni süresinin 16 haftadan 24 haftaya çıkarıldığını açıkladı.

        Spor gündeminde ise Türkiye'de 2026-2027 sezonu birinci transfer ve tescil döneminin sona ermesi öne çıkan gelişmeler arasında bulunuyor.

        Dünya gündeminde de Orta Doğu'daki gelişmeler, Birleşmiş Milletler'in bölgeye ilişkin açıklamaları ve uluslararası gelişmeler yakından takip ediliyor.

        SONUÇ

        5 Eylül 2026 tarihli Resmî Gazete, kamu yönetimi ve ekonomi başta olmak üzere birçok alanda yeni kararların yürürlüğe girdiği bir gündem oluşturdu.

        İhracat ve döviz kazandırıcı faaliyetlerde vergi, resim ve harç istisnalarına ilişkin değişiklik, üniversitelerin yapısına yönelik kararlar, raylı sistemlerle ilgili düzenleme ve kamu kurumlarındaki atamalar günün öne çıkan başlıkları arasında yer aldı.

        Sayıştay Başsavcılığına Recep Çevik'in atanması ve Diyanet İşleri Başkanlığı başta olmak üzere çeşitli kurumlarda gerçekleştirilen görev değişiklikleri de Resmî Gazete'nin dikkat çeken gelişmeleri oldu.

        Yeni kararların uygulanmasına ilişkin ayrıntılar, ilgili kurumların açıklamaları ve önümüzdeki günlerde yayımlanabilecek ek düzenlemelerle birlikte daha net ortaya çıkacak.

        Vatandaşların ve işletmelerin kendilerini ilgilendiren konularda güncel mevzuatı takip etmeleri ve Resmî Gazete'de yayımlanan düzenlemelerin yürürlük tarihlerini kontrol etmeleri önem taşıyor.
        `,
        resim: "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",
        tarih: "5 Eylül 2026",
        saat: "15:20",
        okunma: 38742,
        kaynak: "Resmî Gazete / Anadolu Ajansı"
    },


    // ========================================================
    // 2
    // ========================================================

    {
        id: 2,
        kategori: "Gündem",
        baslik: "Türkiye'de gündem yoğun: Yeni haftada gözler kritik gelişmelerde",
        spot: "Türkiye'de yeni haftaya girilirken siyaset, ekonomi, eğitim ve kamu gündemindeki gelişmeler yakından takip ediliyor.",
        icerik: `
        Türkiye'de yeni haftanın başlamasıyla birlikte birçok başlık kamuoyunun
        gündeminde yer almaya devam ediyor.

        Siyasi gelişmeler, ekonomi gündemi ve kamu kurumlarından gelecek yeni
        açıklamalar vatandaşlar tarafından yakından takip ediliyor.

        Önümüzdeki günlerde yapılması beklenen açıklamalar ve alınabilecek yeni
        kararların gündemin seyrini belirlemesi bekleniyor.

        Uzmanlar özellikle ekonomi ve kamu yönetimine ilişkin gelişmelerin
        önümüzdeki günlerde daha fazla öne çıkabileceğini değerlendiriyor.

        Haberista olarak Türkiye gündemindeki gelişmeleri anlık olarak takip
        ederek yeni açıklamalar geldikçe okuyucularımıza aktarmaya devam edeceğiz.
        `,
        resim: "images/haber-2.jpg",
        tarih: "6 Eylül 2026",
        saat: "09:15",
        okunma: 24681,
        kaynak: "Haberista Haber Merkezi"
    },


    // ========================================================
    // 3
    // ========================================================

    {
        id: 3,
        kategori: "Ekonomi",
        baslik: "Piyasalarda yeni hafta öncesi hareketlilik: Gözler ekonomi gündeminde",
        spot: "Yeni hafta öncesinde piyasaların seyri ve açıklanacak ekonomik veriler yatırımcıların yakın takibinde olacak.",
        icerik: `
        Finans piyasalarında yeni hafta öncesinde hareketlilik devam ediyor.

        Yurt içi piyasalarda ekonomik veriler, para politikası ve küresel
        gelişmeler yatırımcıların takip ettiği başlıca başlıklar arasında
        bulunuyor.

        Önümüzdeki günlerde açıklanacak veriler ve resmi kurumlardan gelecek
        açıklamalar piyasaların yönü açısından önem taşıyor.

        Küresel piyasalarda yaşanan gelişmelerin Türkiye piyasalarına etkisi
        de yakından takip ediliyor.

        Ekonomi gündemindeki gelişmelerin özellikle döviz, altın ve hisse
        piyasalarında hareketliliğe neden olup olmayacağı merak ediliyor.
        `,
        resim: "images/haber-3.jpg",
        tarih: "6 Eylül 2026",
        saat: "10:00",
        okunma: 19852,
        kaynak: "Haberista Ekonomi Servisi"
    },


    // ========================================================
    // 4
    // ========================================================

    {
        id: 4,
        kategori: "Spor",
        baslik: "Transfer döneminin ardından futbolda gözler yeni haftaya çevrildi",
        spot: "2026-2027 sezonunda transfer döneminin sona ermesiyle birlikte takımların yeni sezon performansları gündemin önemli başlıklarından biri oldu.",
        icerik: `
        Türk futbolunda transfer döneminin sona ermesinin ardından gözler
        liglerde oynanacak karşılaşmalara çevrildi.

        Takımlar yeni sezon kadrolarıyla mücadele ederken yapılan transferlerin
        sahadaki performansa nasıl yansıyacağı merak ediliyor.

        Teknik direktörler ve futbolcular için yoğun maç programının başlamasıyla
        birlikte takımların form durumu da önem kazanacak.

        Taraftarlar ise yeni sezonun ilerleyen haftalarında takımlarının
        hedeflerine ulaşıp ulaşamayacağını yakından takip edecek.

        Futbol gündemindeki son gelişmeler Haberista Spor Servisi tarafından
        takip ediliyor.
        `,
        resim: "images/haber-4.jpg",
        tarih: "6 Eylül 2026",
        saat: "11:30",
        okunma: 31247,
        kaynak: "Haberista Spor Servisi"
    },


    // ========================================================
    // 5
    // ========================================================

    {
        id: 5,
        kategori: "Dünya",
        baslik: "Dünyada kritik gelişmeler: Uluslararası gündem yakından takip ediliyor",
        spot: "Dünya genelinde yaşanan siyasi ve diplomatik gelişmeler yeni haftanın en önemli gündem maddeleri arasında yer alıyor.",
        icerik: `
        Dünya genelinde yaşanan gelişmeler uluslararası kamuoyunun gündeminde
        yer almaya devam ediyor.

        Özellikle Orta Doğu'daki gelişmeler, Birleşmiş Milletler'in açıklamaları
        ve ülkeler arasındaki diplomatik temaslar yakından takip ediliyor.

        Bölgedeki gelişmelerin uluslararası diplomasi ve güvenlik gündemine
        etkileri tartışılırken ülkelerden yeni açıklamalar gelmeye devam ediyor.

        Önümüzdeki günlerde gerçekleştirilecek diplomatik görüşmelerin ve
        yapılacak resmi açıklamaların gündemin yönünü belirlemesi bekleniyor.

        Haberista Dünya Servisi gelişmeleri takip ederek yeni bilgiler geldikçe
        okuyucularına aktarmaya devam edecek.
        `,
        resim: "images/haber-5.jpg",
        tarih: "6 Eylül 2026",
        saat: "12:10",
        okunma: 17543,
        kaynak: "Haberista Dünya Servisi"
    }

];


// ============================================================
// OTOMATİK SEO URL / SLUG
// ============================================================

haberler.forEach(haber => {

    haber.slug = slugOlustur(haber.baslik);

    haber.url = `/haber/${haber.slug}`;

});


// ============================================================
// HABER BULMA
// ============================================================

function haberSlugIleBul(slug) {
    return haberler.find(haber => haber.slug === slug);
}

function haberIdIleBul(id) {
    return haberler.find(haber => haber.id === Number(id));
}


// ============================================================
// EXPORT
// ============================================================

export {
    haberler,
    slugOlustur,
    haberSlugIleBul,
    haberIdIleBul
};

export default haberler;
