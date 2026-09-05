// ============================================================
// HABERİSTA - HABERLER.JS
// ============================================================

// Türkçe başlıktan SEO uyumlu URL oluşturur
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
    // HABER 1
    // ========================================================

    {
        id: 1,

        kategori: "Son Dakika",

        baslik:
            "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",

        spot:
            "5 Eylül 2026 tarihli Resmî Gazete'de ekonomi, kamu yönetimi, eğitim ve ulaştırma alanlarını ilgilendiren çok sayıda karar ve düzenleme yayımlandı. Sayıştay Başsavcılığına Recep Çevik atanırken bazı kamu kurumlarında yeni atama ve görevden alma kararları da Resmî Gazete'de yer aldı.",

        icerik: `
            <p>
                5 Eylül 2026 tarihli ve 33361 sayılı Resmî Gazete yayımlandı.
                Gece yarısından itibaren yayımlanan karar ve düzenlemelerde kamu
                yönetiminden ekonomiye, yükseköğretimden ulaştırma altyapısına
                kadar farklı alanları ilgilendiren çok sayıda gelişme yer aldı.
            </p>

            <p>
                Resmî Gazete'nin yeni sayısında özellikle Cumhurbaşkanı kararları,
                atama ve görevden alma kararları ile çeşitli kurumlara ilişkin
                düzenlemeler dikkat çekti.
            </p>

            <h2>Ekonomi ve ihracat alanında yeni düzenleme</h2>

            <p>
                Günün öne çıkan kararlarından biri ihracat, transit ticaret,
                ihracat sayılan satış ve teslimler ile döviz kazandırıcı hizmet
                ve faaliyetlerde vergi, resim ve harç istisnasına ilişkin
                düzenlemede yapılan değişiklik oldu.
            </p>

            <p>
                Cumhurbaşkanı kararıyla yapılan değişiklik, özellikle dış ticaret
                faaliyetleri yürüten şirketler ve döviz kazandırıcı hizmetlerde
                bulunan işletmeler açısından takip edilmesi gereken düzenlemeler
                arasında yer aldı.
            </p>

            <p>
                Düzenlemenin yürürlüğe girmesiyle birlikte ilgili sektörlerde
                faaliyet gösteren işletmelerin mevcut uygulamalarını ve istisna
                kapsamındaki işlemlerini yeni hükümler doğrultusunda
                değerlendirmesi gerekiyor.
            </p>

            <h2>Kamu hizmetlerine ilişkin yeni karar</h2>

            <p>
                Resmî Gazete'de ayrıca kamu kurum ve kuruluşlarının ürettikleri
                bazı mal ve hizmetlerden ücretsiz veya indirimli olarak
                faydalanacak kişilerin belirlenmesine ilişkin yeni bir
                Cumhurbaşkanı kararı yayımlandı.
            </p>

            <p>
                Kararla birlikte belirli kamu hizmetlerinden hangi kişi ve
                grupların ücretsiz veya indirimli şekilde yararlanabileceğine
                ilişkin çerçeve yeniden düzenlendi.
            </p>

            <h2>Üniversitelerle ilgili önemli kararlar</h2>

            <p>
                5 Eylül tarihli Resmî Gazete'de yükseköğretim kurumlarıyla
                ilgili de çeşitli kararlar yayımlandı.
            </p>

            <p>
                Dokuz Eylül Üniversitesi Rektörlüğü bünyesinde bulunan Güzel
                Sanatlar Enstitüsünün kapatılmasına karar verilirken,
                Munzur Üniversitesi bünyesinde Yabancı Diller ve Turizm
                Fakültesi kurulmasına ilişkin karar da yayımlandı.
            </p>

            <p>
                Kayseri Üniversitesi bünyesinde bulunan Mühendislik, Mimarlık
                ve Tasarım Fakültesinin adı ise Mühendislik ve Tasarım Fakültesi
                olarak değiştirildi.
            </p>

            <p>
                Bunun yanında Türkiye Uluslararası İslam, Bilim ve Teknoloji
                Üniversitesi bünyesinde Yabancı Diller Yüksekokulu kurulmasına
                ilişkin karar da Resmî Gazete'de yer aldı.
            </p>

            <h2>Ulaştırma ve raylı sistemler</h2>

            <p>
                Resmî Gazete'nin dikkat çeken diğer başlıklarından biri şehir
                içi raylı ulaşım sistemleri ve metrolarla ilgili düzenleme oldu.
            </p>

            <p>
                Şehir içi raylı ulaşım sistemleri, metrolar ve bunlarla ilgili
                tesislerin Ulaştırma ve Altyapı Bakanlığı tarafından
                üstlenilmesi, devralınması ve tamamlanmasının ardından ilgili
                kuruluşlara devredilmesine ilişkin şartlarda değişiklik
                yapılmasına dair karar yayımlandı.
            </p>

            <h2>Sayıştay Başsavcılığına yeni atama</h2>

            <p>
                Günün önemli atama kararlarından biri Sayıştay Başkanlığı
                bünyesinde gerçekleşti.
            </p>

            <p>
                Resmî Gazete'de yayımlanan karara göre Sayıştay Savcısı
                Recep Çevik, Sayıştay Başsavcılığı görevine atandı.
            </p>

            <p>
                Atama kararı Cumhurbaşkanı Recep Tayyip Erdoğan'ın imzasıyla
                yayımlanan kararlar arasında yer aldı.
            </p>

            <h2>Diyanet İşleri Başkanlığında atamalar</h2>

            <p>
                Resmî Gazete'de Diyanet İşleri Başkanlığına ilişkin çeşitli
                atama kararları da yayımlandı.
            </p>

            <p>
                Cumhurbaşkanı tarafından imzalanan kararlarla bazı
                müftülüklerde yeni görevlendirmeler yapılırken Diyanet
                teşkilatındaki bazı yönetici kadrolarında da değişiklik
                gerçekleştirildi.
            </p>

            <h2>Kamu kurumlarında görev değişiklikleri</h2>

            <p>
                5 Eylül tarihli Resmî Gazete'de çok sayıda atama ve görevden
                alma kararı da yayımlandı.
            </p>

            <p>
                Kamu kurumlarında yapılan bu değişikliklerin bir bölümü üst
                düzey yönetici kadrolarını kapsarken bazı kararlar ise farklı
                kamu kuruluşlarındaki görev değişikliklerine ilişkin oldu.
            </p>

            <h2>Vatandaşlar için ne anlama geliyor?</h2>

            <p>
                Resmî Gazete'de yayımlanan kararların tamamı doğrudan
                vatandaşları ilgilendirmiyor. Ancak özellikle kamu
                hizmetlerinden ücretsiz veya indirimli yararlanma şartları,
                eğitim kurumlarının yapılanması ve ekonomik faaliyetlere
                ilişkin düzenlemeler belirli vatandaş grupları ve işletmeler
                açısından önem taşıyor.
            </p>

            <p>
                İhracat yapan şirketler ile döviz kazandırıcı hizmet ve
                faaliyetlerde bulunan işletmelerin yeni düzenlemeleri
                yakından takip etmesi gerekiyor.
            </p>

            <h2>Sonuç</h2>

            <p>
                5 Eylül 2026 tarihli Resmî Gazete, kamu yönetimi ve ekonomi
                başta olmak üzere birçok alanda yeni kararların yürürlüğe
                girdiği bir gündem oluşturdu.
            </p>

            <p>
                İhracat ve döviz kazandırıcı faaliyetlerde vergi, resim ve
                harç istisnalarına ilişkin değişiklik, üniversitelerin
                yapısına yönelik kararlar, raylı sistemlerle ilgili düzenleme
                ve kamu kurumlarındaki atamalar günün öne çıkan başlıkları
                arasında yer aldı.
            </p>
        `,

        resim: "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",

        tarih: "5 Eylül 2026",

        saat: "15:20",

        okunma: 38742,

        kaynak: "Resmî Gazete / Anadolu Ajansı"
    },


    // ========================================================
    // HABER 2
    // ========================================================

    {
        id: 2,

        kategori: "Gündem",

        baslik:
            "Türkiye'de gündem yoğun: Yeni haftada gözler kritik gelişmelerde",

        spot:
            "Türkiye'de yeni haftaya girilirken siyaset, ekonomi, eğitim ve kamu gündemindeki gelişmeler yakından takip ediliyor.",

        icerik: `
            <p>
                Türkiye'de yeni haftanın başlamasıyla birlikte birçok başlık
                kamuoyunun gündeminde yer almaya devam ediyor.
            </p>

            <p>
                Siyasi gelişmeler, ekonomi gündemi ve kamu kurumlarından
                gelecek yeni açıklamalar vatandaşlar tarafından yakından
                takip ediliyor.
            </p>

            <h2>Yeni haftada yoğun gündem</h2>

            <p>
                Önümüzdeki günlerde yapılması beklenen açıklamalar ve
                alınabilecek yeni kararların gündemin seyrini belirlemesi
                bekleniyor.
            </p>

            <p>
                Özellikle ekonomi ve kamu yönetimine ilişkin gelişmelerin
                önümüzdeki günlerde daha fazla öne çıkabileceği
                değerlendiriliyor.
            </p>

            <h2>Gelişmeler takip ediliyor</h2>

            <p>
                Haberista olarak Türkiye gündemindeki gelişmeleri yakından
                takip ediyoruz.
            </p>

            <p>
                Yeni açıklamalar geldikçe gelişmeleri okuyucularımıza
                aktarmaya devam edeceğiz.
            </p>
        `,

        resim: "images/haber-2.jpg",

        tarih: "6 Eylül 2026",

        saat: "09:15",

        okunma: 24681,

        kaynak: "Haberista Haber Merkezi"
    },


    // ========================================================
    // HABER 3
    // ========================================================

    {
        id: 3,

        kategori: "Ekonomi",

        baslik:
            "Piyasalarda yeni hafta öncesi hareketlilik: Gözler ekonomi gündeminde",

        spot:
            "Yeni hafta öncesinde piyasaların seyri ve açıklanacak ekonomik veriler yatırımcıların yakın takibinde olacak.",

        icerik: `
            <p>
                Finans piyasalarında yeni hafta öncesinde hareketlilik
                devam ediyor.
            </p>

            <p>
                Yurt içi piyasalarda ekonomik veriler, para politikası ve
                küresel gelişmeler yatırımcıların takip ettiği başlıca
                başlıklar arasında bulunuyor.
            </p>

            <h2>Ekonomik veriler takip edilecek</h2>

            <p>
                Önümüzdeki günlerde açıklanacak veriler ve resmi kurumlardan
                gelecek açıklamalar piyasaların yönü açısından önem taşıyor.
            </p>

            <p>
                Küresel piyasalarda yaşanan gelişmelerin Türkiye piyasalarına
                etkisi de yakından takip ediliyor.
            </p>

            <h2>Yatırımcıların gözü piyasalarda</h2>

            <p>
                Ekonomi gündemindeki gelişmelerin özellikle döviz, altın ve
                hisse piyasalarında hareketliliğe neden olup olmayacağı
                merak ediliyor.
            </p>
        `,

        resim: "images/haber-3.jpg",

        tarih: "6 Eylül 2026",

        saat: "10:00",

        okunma: 19852,

        kaynak: "Haberista Ekonomi Servisi"
    },


    // ========================================================
    // HABER 4
    // ========================================================

    {
        id: 4,

        kategori: "Spor",

        baslik:
            "Transfer döneminin ardından futbolda gözler yeni haftaya çevrildi",

        spot:
            "2026-2027 sezonunda transfer döneminin sona ermesiyle birlikte takımların yeni sezon performansları gündemin önemli başlıklarından biri oldu.",

        icerik: `
            <p>
                Türk futbolunda transfer döneminin sona ermesinin ardından
                gözler liglerde oynanacak karşılaşmalara çevrildi.
            </p>

            <p>
                Takımlar yeni sezon kadrolarıyla mücadele ederken yapılan
                transferlerin sahadaki performansa nasıl yansıyacağı merak
                ediliyor.
            </p>

            <h2>Takımlar yeni sezon hedeflerine odaklandı</h2>

            <p>
                Teknik direktörler ve futbolcular için yoğun maç programının
                başlamasıyla birlikte takımların form durumu da önem kazanacak.
            </p>

            <p>
                Taraftarlar ise yeni sezonun ilerleyen haftalarında takımlarının
                hedeflerine ulaşıp ulaşamayacağını yakından takip edecek.
            </p>

            <h2>Futbol gündemi</h2>

            <p>
                Futbol gündemindeki son gelişmeler Haberista Spor Servisi
                tarafından takip ediliyor.
            </p>
        `,

        resim: "images/haber-4.jpg",

        tarih: "6 Eylül 2026",

        saat: "11:30",

        okunma: 31247,

        kaynak: "Haberista Spor Servisi"
    },


    // ========================================================
    // HABER 5
    // ========================================================

    {
        id: 5,

        kategori: "Dünya",

        baslik:
            "Dünyada kritik gelişmeler: Uluslararası gündem yakından takip ediliyor",

        spot:
            "Dünya genelinde yaşanan siyasi ve diplomatik gelişmeler yeni haftanın en önemli gündem maddeleri arasında yer alıyor.",

        icerik: `
            <p>
                Dünya genelinde yaşanan gelişmeler uluslararası kamuoyunun
                gündeminde yer almaya devam ediyor.
            </p>

            <p>
                Özellikle Orta Doğu'daki gelişmeler, Birleşmiş Milletler'in
                açıklamaları ve ülkeler arasındaki diplomatik temaslar
                yakından takip ediliyor.
            </p>

            <h2>Diplomatik temaslar sürüyor</h2>

            <p>
                Bölgedeki gelişmelerin uluslararası diplomasi ve güvenlik
                gündemine etkileri tartışılırken ülkelerden yeni açıklamalar
                gelmeye devam ediyor.
            </p>

            <p>
                Önümüzdeki günlerde gerçekleştirilecek diplomatik görüşmelerin
                ve yapılacak resmi açıklamaların gündemin yönünü belirlemesi
                bekleniyor.
            </p>

            <h2>Dünya gündemi takip ediliyor</h2>

            <p>
                Haberista Dünya Servisi gelişmeleri takip ederek yeni bilgiler
                geldikçe okuyucularına aktarmaya devam edecek.
            </p>
        `,

        resim: "images/haber-5.jpg",

        tarih: "6 Eylül 2026",

        saat: "12:10",

        okunma: 17543,

        kaynak: "Haberista Dünya Servisi"
    }

];


// ============================================================
// OTOMATİK SLUG + URL
// ============================================================

haberler.forEach(haber => {

    haber.slug = slugOlustur(haber.baslik);

    haber.url = `/haber/${haber.slug}`;

});


// ============================================================
// HABER BULMA FONKSİYONLARI
// ============================================================

function haberSlugIleBul(slug) {

    return haberler.find(
        haber => haber.slug === slug
    );

}


function haberIdIleBul(id) {

    return haberler.find(
        haber => haber.id === Number(id)
    );

}


// ============================================================
// APP.JS İÇİN GLOBAL OLARAK PAYLAŞ
// ============================================================

window.haberler = haberler;

window.slugOlustur = slugOlustur;

window.haberSlugIleBul = haberSlugIleBul;

window.haberIdIleBul = haberIdIleBul;


// ============================================================
// KONSOL KONTROLÜ
// ============================================================

console.log(
    `Haberİsta: ${haberler.length} haber başarıyla yüklendi.`
);

console.log(
    "Haberler:",
    haberler
);
