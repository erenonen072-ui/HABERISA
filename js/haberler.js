"use strict";

/* =========================================================
   HABERİSTA - HABER VERİTABANI
   Güncellenmiş sürüm
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
       1 - KABİNE
    ===================================================== */
{
id: 35,
kategori: "Teknoloji",
baslik: "Avrupa'nın yapay zeka şirketi Mistral'den dev yatırım: Değerlemesi 24 milyar dolara ulaştı",
spot: "Fransız yapay zeka şirketi Mistral, 3 milyar euroluk yeni yatırım turunu tamamladı. Şirketin değerlemesi yaklaşık 21 milyar euroya, yani 24 milyar dolara yükselirken yatırımın yapay zeka modelleri ve ileri araştırmaların geliştirilmesinde kullanılması bekleniyor.",
tarih: "9 Eylül 2026",
saat: "00:50",
yazar: "Haberİsta Teknoloji Servisi",
kaynak: "Reuters",
gorsel: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",

seo: {
    title: "Mistral AI 3 milyar euro yatırım aldı | Haberİsta",
    description: "Fransız yapay zeka şirketi Mistral, 3 milyar euroluk yatırım turuyla yaklaşık 21 milyar euro değerlemeye ulaştı. İşte yatırımın ayrıntıları.",
    keywords: [
        "Mistral AI",
        "Mistral yapay zeka",
        "yapay zeka",
        "AI",
        "Fransa yapay zeka",
        "teknoloji haberleri",
        "Mistral yatırım",
        "yapay zeka yatırımı"
    ],
    canonical: "https://haberisa.vercel.app/haber/mistral-ai-3-milyar-euro-yatirim"
},

icerik: `
    <p><strong>Avrupa'nın yapay zeka alanındaki en dikkat çekici şirketlerinden Mistral, yeni yatırım turuyla büyümesini hızlandıracak önemli bir finansman sağladı.</strong> Fransa merkezli şirket, 3 milyar euroluk yatırım turunu tamamladığını açıkladı. Bu yatırımla birlikte Mistral'in değerlemesi yaklaşık 21 milyar euroya, başka bir ifadeyle yaklaşık 24 milyar dolara yükseldi.</p>

    <p>8 Eylül 2026'da duyurulan yatırım turu, özel bir Avrupa teknoloji şirketinin gerçekleştirdiği en büyük hisse senedi finansmanlarından biri olarak öne çıktı. Şirket, elde edilen kaynağı yapay zeka modellerinin geliştirilmesi, ileri düzey araştırmalar ve küresel büyüme çalışmalarında kullanmayı planlıyor.</p>

    <h2>Mistral'e 3 milyar euroluk yatırım</h2>

    <p>Mistral'in yeni finansman turuna mevcut yatırımcıların yanı sıra önemli yeni yatırımcılar da katıldı. Yatırım turuna PSG Equity liderlik ederken, Güney Kore merkezli Samsung Electronics ve Avrupa Birliği destekli Scaleup Europe Fund da şirkete ilk kez yatırım yapan kuruluşlar arasında yer aldı.</p>

    <p>Şirketin aldığı toplam yatırımın büyüklüğü, Avrupa'nın küresel yapay zeka yarışındaki konumunu güçlendirme çabasının da dikkat çekici örneklerinden biri olarak değerlendiriliyor.</p>

    <h2>Değerleme 24 milyar dolara çıktı</h2>

    <p>Yeni yatırım sonrasında Mistral'in şirket değeri yaklaşık <strong>21 milyar euro</strong> seviyesine yükseldi. Bu rakam yaklaşık 24 milyar dolara karşılık geliyor.</p>

    <p>Mistral henüz üç yıllık bir şirket olmasına rağmen Avrupa'nın en yüksek değerlemeye sahip özel teknoloji şirketlerinden biri konumuna geldi. Şirket yöneticileri, yeni finansmanın Mistral'in büyük yapay zeka şirketleriyle rekabet edebilmesi için önemli bir kaynak sağlayacağını belirtiyor.</p>

    <h2>Avrupa'nın yapay zeka yarışındaki hedefi</h2>

    <p>Yapay zeka sektöründe ABD merkezli şirketler uzun süredir küresel yarışın önemli bölümünü elinde tutuyor. Avrupa ise kendi yapay zeka altyapısını ve şirketlerini geliştirerek dışa bağımlılığını azaltmaya çalışıyor.</p>

    <p>Mistral bu stratejinin en önemli şirketlerinden biri olarak görülüyor. Şirketin büyümesi, Avrupa'nın yalnızca yapay zeka teknolojilerini kullanan bir pazar olmak yerine kendi büyük yapay zeka modellerini geliştirme hedefi açısından da önem taşıyor.</p>

    <p>Özellikle gelişmiş yapay zeka modellerine erişimin jeopolitik gelişmelerden etkilenebilmesi, Avrupa'nın kendi teknoloji şirketlerine sahip olmasının stratejik önemini artırıyor.</p>

    <h2>Yeni yatırım nerede kullanılacak?</h2>

    <p>Mistral'in finansmandan elde ettiği kaynağın önemli bölümünü yapay zeka modellerinin geliştirilmesine ve <strong>frontier research</strong> olarak adlandırılan ileri düzey araştırmalara yönlendirmesi bekleniyor.</p>

    <p>Şirket ayrıca Avrupa dışındaki pazarlarda büyümeye devam ediyor. Mistral'in müşteri tabanında Asya ve Kuzey Amerika'nın payının arttığı belirtilirken, şirketin yıl sonuna kadar yıllık tekrarlayan gelirlerini yaklaşık 1 milyar dolar seviyesine çıkarmayı hedeflediği aktarıldı.</p>

    <h2>Microsoft da Mistral ile çalışıyor</h2>

    <p>Mistral'in büyüme sürecinde Microsoft ile yaptığı iş birliği de dikkat çekiyor. Microsoft daha önce Mistral'in Avrupa'daki bilgi işlem altyapısına milyarlarca dolarlık yatırım yapmayı içeren bir anlaşma gerçekleştirmişti.</p>

    <p>Ancak Reuters'ın aktardığı bilgilere göre Microsoft, Mistral'in son 3 milyar euroluk yatırım turuna katılan yatırımcılar arasında yer almadı.</p>

    <h2>Mistral OpenAI ve Anthropic ile rekabet ediyor</h2>

    <p>Mistral, yapay zeka modelleri konusunda OpenAI ve Anthropic gibi ABD merkezli çok daha büyük şirketlerle rekabet ediyor.</p>

    <p>Şirketin modellerinin önemli özelliklerinden biri, müşterilerin bazı modelleri kendi sunucularında çalıştırabilmesine ve özelleştirebilmesine imkan veren açık yaklaşımı. Bu özellik özellikle şirketlerin verilerini kendi altyapılarında tutmak istediği kurumsal yapay zeka pazarında önem kazanıyor.</p>

    <h2>Şirketin geleceği</h2>

    <p>Mistral'in yeni yatırım turuyla birlikte önündeki dönemde araştırma, ürün geliştirme ve uluslararası büyümeye daha fazla kaynak ayırması bekleniyor.</p>

    <p>Şirketin halka arz seçeneğinin gelecekte değerlendirilebileceği belirtilse de şu aşamada bunun için kesinleşmiş bir takvim bulunmuyor.</p>

    <p><strong>Sonuç olarak Mistral'in 3 milyar euroluk yeni finansman turu, yalnızca şirket açısından değil Avrupa'nın yapay zeka sektöründeki konumu açısından da önemli bir gelişme olarak öne çıkıyor.</strong> Yeni yatırımın Mistral'in küresel rakipleriyle arasındaki teknoloji farkını azaltıp azaltamayacağı ise önümüzdeki dönemde görülecek.</p>

    <div class="haber-kaynak">
        <strong>Kaynak:</strong> Reuters
        <br>
        <strong>Haber tarihi:</strong> 8 Eylül 2026
        <br>
        <strong>Haberİsta yayın tarihi:</strong> 9 Eylül 2026
    </div>
`

},

{
id: 34,
kategori: "Son dakika",
baslik: "Bilim dünyasında dikkat çeken gelişme: DNA'nın genetik alfabesi 8 harfe çıkarıldı",
spot: "ABD'deki UC San Diego araştırmacıları, doğal dört harfli genetik kodun ötesine geçen 8 harfli sentetik DNA sisteminin hücresel bir enzim tarafından okunup RNA'ya aktarılabildiğini gösterdi. Çalışma, sentetik biyoloji ve gelecekteki biyoteknoloji uygulamaları açısından önemli bir adım olarak değerlendiriliyor.",
tarih: "9 Eylül 2026",
saat: "00:50",
gorsel: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1600&q=85",
yazar: "Haberİsta Bilim Servisi",
kaynak: "University of California San Diego, Nature Communications",
icerik: ` <p><strong>Bilim dünyasında genetik bilginin nasıl depolandığı ve işlendiğine ilişkin dikkat çekici bir gelişme yaşandı.</strong> ABD'deki University of California San Diego (UC San Diego) araştırmacıları, yaşamın doğal olarak kullandığı dört harfli genetik alfabeyi genişleten sentetik bir DNA sisteminin, hücresel bir enzim tarafından okunup RNA'ya aktarılabildiğini ortaya koydu.</p>

    <p>Nature Communications dergisinde 2 Eylül 2026 tarihinde yayımlanan araştırmada bilim insanları, DNA'nın doğal genetik harfleri olan adenin (A), timin (T), sitozin (C) ve guaninin (G) yanına sentetik baz çiftlerinin eklenmesiyle oluşturulan <strong>8 harfli genetik alfabeyi</strong> inceledi.</p>

    <h2>DNA'nın alfabesi neden önemli?</h2>

    <p>DNA, canlıların genetik bilgilerini taşıyan temel moleküler yapılardan biri. Bugüne kadar bilinen tüm yaşam formları genetik bilgiyi dört temel baz üzerinden depoluyor. Bu bazlar belirli eşleşmeler oluşturarak DNA'nın yapısını ve genetik bilginin aktarılmasını mümkün kılıyor.</p>

    <p>Araştırmacıların üzerinde çalıştığı sistem ise bu doğal yapıya dört sentetik harf daha eklenmesini hedefliyor. Böylece teorik olarak genetik bilginin depolanması ve nükleik asitlerin sahip olabileceği kimyasal çeşitlilik artırılabiliyor.</p>

    <h2>RNA polimeraz sentetik harfleri okuyabildi</h2>

    <p>Araştırmanın en önemli noktalarından biri, DNA'daki bilgiyi RNA'ya aktaran <strong>RNA polimeraz</strong> enziminin sentetik baz çiftlerini de tanıyabildiğinin gösterilmesi oldu.</p>

    <p>Bilim insanları deneylerde <em>Escherichia coli</em> bakterisinden elde edilen RNA polimerazı kullandı. Yapılan çalışmalar, enzimin doğal baz çiftlerinin yanı sıra <strong>P:Z ve B:S</strong> olarak adlandırılan iki sentetik baz çiftini de işleyebildiğini ortaya koydu.</p>

    <p>Bu durum önemli çünkü sentetik bir genetik alfabenin yalnızca DNA üzerinde bulunması yeterli değil. Hücrenin genetik bilgiyi kullanabilmesi için bu bilginin DNA'dan RNA'ya aktarılabilmesi gerekiyor.</p>

    <h2>Bilim insanları moleküler yapıyı görüntüledi</h2>

    <p>Araştırmacılar yalnızca biyokimyasal deneylerle yetinmedi. RNA polimerazın sentetik bazları nasıl tanıdığını anlamak amacıyla yüksek çözünürlüklü <strong>kriyo-elektron mikroskobu (cryo-EM)</strong> kullandılar.</p>

    <p>Elde edilen yapılar 2,42 ile 2,75 angström arasında çözünürlüğe ulaştı. Görüntüler, sentetik baz çiftlerinin enzimin aktif bölgesinde doğal baz çiftlerine benzer bir geometri oluşturabildiğini gösterdi.</p>

    <p>Bu sonuç, RNA polimerazın tamamen yeni bir moleküler mekanizma geliştirmeden sentetik genetik harfleri tanıyabildiğine ilişkin önemli kanıt sağladı.</p>

    <h2>8 harfli DNA ne işe yarayabilir?</h2>

    <p>Araştırmacılara göre genişletilmiş genetik alfabeler, gelecekte biyoteknoloji ve sentetik biyoloji alanlarında yeni uygulamaların geliştirilmesine katkı sağlayabilir.</p>

    <p>Daha geniş bir genetik alfabe, nükleik asitlerin kimyasal çeşitliliğini artırma potansiyeline sahip. Bu durum gelecekte yeni moleküler araçların, tanı yöntemlerinin veya özel olarak tasarlanmış biyolojik sistemlerin geliştirilmesi için kullanılabilir.</p>

    <p>Ancak araştırma henüz doğrudan insanlarda kullanılabilecek bir teknoloji ortaya koymuş değil. Çalışmanın temel önemi, genişletilmiş genetik bilginin doğal hücresel mekanizmalar tarafından işlenmesinin mümkün olduğunu moleküler düzeyde göstermesi.</p>

    <h2>Hachimoji DNA nedir?</h2>

    <p>Araştırmada ele alınan sistem, literatürde <strong>Hachimoji DNA</strong> olarak bilinen genişletilmiş genetik alfabe yaklaşımıyla bağlantılı. “Hachimoji” Japoncada “sekiz harf” anlamına geliyor.</p>

    <p>Sistem, doğal DNA'daki dört harfe ek olarak sentetik baz çiftleri kullanarak genetik alfabeyi genişletiyor. Araştırmacıların yeni çalışması ise bu sentetik harflerin yalnızca DNA içinde bulunabileceğini değil, genetik bilginin aktarılmasında görev yapan doğal bir enzimin bunları da tanıyabildiğini gösteriyor.</p>

    <h2>Araştırmada bir doğruluk sorunu da incelendi</h2>

    <p>Bilim insanları deneyler sırasında sentetik bazlardan birinin doğal guanin ile istenmeyen şekilde eşleşebilmesi gibi bir sorun da gözlemledi. Araştırmacılar, Z* adı verilen değiştirilmiş bir sentetik baz analoğu kullanarak bu hatalı eşleşme eğilimini azaltmayı başardı.</p>

    <p>Bu ayrıntı, genişletilmiş genetik sistemlerin gelecekte kullanılabilmesi açısından önemli. Çünkü daha fazla genetik harf eklemek kadar, bu harflerin doğru ve güvenilir biçimde tanınması da gerekiyor.</p>

    <h2>Bilim dünyası için neden önemli?</h2>

    <p>Çalışma, sentetik biyolojinin temel hedeflerinden biri olan doğal genetik sistemlerin kontrollü şekilde genişletilmesi konusunda önemli bir adım oluşturuyor.</p>

    <p>Araştırmacılar, doğal yaşamın kullandığı genetik mekanizmaların sentetik bazları belirli koşullar altında işleyebildiğini göstererek gelecekte daha karmaşık yapay biyolojik sistemlerin tasarlanmasına yönelik moleküler bir temel sundu.</p>

    <p>Şimdilik çalışma laboratuvar araştırması seviyesinde bulunuyor. Bununla birlikte elde edilen sonuçlar, gelecekte genetik bilgi taşıyan moleküllerin tasarımında doğadaki dört harften daha geniş bir alfabenin kullanılabileceği fikrini güçlendiriyor.</p>

    <div class="haber-kaynak">
        <strong>Kaynak:</strong> University of California San Diego ve Nature Communications.
        <br>
        <strong>Bilimsel çalışma:</strong> "Structural basis of transcription of the hachimoji eight-letter alphabet by E. coli RNA polymerase"
    </div>
`

},

{
    id: 33,
    kategori: "Gündem",
    baslik: "Mersin'in Bozyazı ilçesindeki yangına havadan ve karadan müdahale ediliyor",
    spot: "Mersin'in Bozyazı ilçesinde ormanlık alanda çıkan yangına havadan ve karadan müdahale sürüyor. Yangının enerjisinin düşürüldüğü açıklanırken, ekiplerin alevleri tamamen kontrol altına almak için çalışmaları devam ediyor.",
    tarih: "8 Eylül 2026",
    saat: "19:39",
    gorsel: "/images/bozyazi-orman-yangini.jpeg",
    icerik: `
        <p><strong>Mersin'in Bozyazı ilçesinde çıkan orman yangınına ekiplerin havadan ve karadan müdahalesi sürüyor.</strong> Tekeli Mahallesi Aksaz mevkisinde öğle saatlerinde başlayan yangınla mücadele için bölgeye çok sayıda ekip ve araç sevk edildi.</p>

        <p>Edinilen bilgilere göre yangın, 8 Eylül 2026 günü saat 12.08 sıralarında Tekeli Mahallesi Aksaz mevkisindeki ormanlık alanda çıktı. Yangın ihbarının alınmasının ardından ekipler kısa sürede bölgeye yönlendirildi ve ilk müdahale saat 12.11 itibarıyla başlatıldı.</p>

        <h2>Yangına yoğun müdahale</h2>

        <p>Yangının kontrol altına alınması amacıyla bölgede kapsamlı bir çalışma yürütülüyor. Söndürme çalışmalarına <strong>230 personel, 66 kara aracı, 2 uçak ve 5 helikopter</strong> katılıyor.</p>

        <p>Havadan gerçekleştirilen müdahaleye uçak ve helikopterler destek verirken, karadan da arazözler ve diğer yangın söndürme araçlarıyla alevlerin ilerlediği bölgelere müdahale ediliyor.</p>

        <p>Çalışmaların güçlendirilmesi amacıyla bölgeye ayrıca <strong>10 arazöz, 3 su ikmal aracı, 2 ekskavatör, 2 dozer ve 3 treyler</strong> sevk edildi.</p>

        <h2>Yangının enerjisi düşürüldü</h2>

        <p>Akşam saatlerinde yangınla ilgili yeni bir gelişme yaşandı. Orman Genel Müdürlüğü tarafından yapılan açıklamada, Bozyazı'daki orman yangınının <strong>enerjisinin düşürüldüğü</strong> bildirildi.</p>

        <p>Ancak yangının tamamen kontrol altına alındığı yönünde bir açıklama yapılmadı. Ekiplerin alevlerin kontrol altına alınması ve bölgede güvenliğin sağlanması amacıyla çalışmalarını sürdürdüğü belirtildi.</p>

        <h2>Yangının çıkış nedeni araştırılıyor</h2>

        <p>Yangının henüz belirlenemeyen bir nedenle başladığı bildirildi. Yangının çıkış nedenine ilişkin incelemelerin yetkili ekipler tarafından yürütülmesi bekleniyor.</p>

        <p>Yangının seraların bulunduğu alanın üst kısmındaki ormanlık bölgede başlaması nedeniyle ekiplerin müdahalesi büyük önem taşıyor. Bölgede görev yapan ekipler, yangının yeniden güçlenmemesi için çalışmalarını sürdürüyor.</p>

        <h2>Havadan ve karadan müdahale sürüyor</h2>

        <p>Bozyazı'daki yangında hem hava araçları hem de kara ekipleri koordineli şekilde görev yapıyor. Özellikle ormanlık alanlarda alevlerin ilerleyebileceği noktalar ekipler tarafından takip ediliyor.</p>

        <p>Yangının enerjisinin düşürülmesi, söndürme çalışmalarında önemli bir gelişme olarak değerlendirilirken, ekiplerin tamamen kontrol sağlanana kadar müdahaleye devam edeceği bildiriliyor.</p>

        <p><strong>Haberİsta olarak bölgedeki gelişmeleri takip ediyor ve resmi makamlardan gelecek yeni bilgileri aktarmaya devam edeceğiz.</strong></p>
    `
},
{
    id: 33,
    kategori: "Gündem",
    baslik: "Orgeneral Bayraktaroğlu, KKTC Başbakanı Üstel ile görüştü",
    spot: "Genelkurmay Başkanı Orgeneral Selçuk Bayraktaroğlu, KKTC Başbakanı Ünal Üstel ile Ankara'da bir araya geldi. Görüşmede Girne açıklarında meydana gelen deniz kazasının ardından devam eden çalışmaların güçlendirilmesi ve yeni teknik imkanlar ele alındı.",
    tarih: "8 Eylül 2026",
    saat: "17:50",
    yazar: "Haberİsta Haber Merkezi",

    // Görsel
    gorsel: "/images/bayraktaroglu-ustel-gorusmesi.jpeg",

    icerik: `
        <p><strong>Genelkurmay Başkanı Orgeneral Selçuk Bayraktaroğlu ile Kuzey Kıbrıs Türk Cumhuriyeti Başbakanı Ünal Üstel</strong> Ankara'da bir araya geldi. Görüşme, Girne açıklarında meydana gelen deniz kazasının ardından bölgede devam eden çalışmaların gündemde olduğu bir süreçte gerçekleştirildi.</p>

        <p>Genelkurmay Başkanlığının açıklamasına göre Ünal Üstel, Genelkurmay Başkanı Orgeneral Selçuk Bayraktaroğlu ile Genelkurmay Başkanlığı Karargâhı'nda görüşme gerçekleştirdi. Görüşmeye ilişkin fotoğraflar da Genelkurmay Başkanlığının sosyal medya hesabından paylaşıldı.</p>

        <h2>Görüşmenin gündeminde Girne'deki deniz kazası vardı</h2>

        <p>Ünal Üstel'in Ankara'daki temaslarının önemli başlıklarından birini, <strong>Girne açıklarında meydana gelen deniz kazasının ardından devam eden arama ve kurtarma çalışmaları</strong> oluşturuyor.</p>

        <p>KKTC Başbakanlığı tarafından yapılan açıklamalarda, çalışmaların güçlendirilmesi ve kayıp kişilere mümkün olan en kısa sürede ulaşılması için yeni imkanların değerlendirilmekte olduğu belirtildi.</p>

        <p>Üstel'in Ankara'daki temasları kapsamında Türkiye'nin ilgili kurumlarıyla görüşmeler gerçekleştirmesi, arama çalışmalarında kullanılabilecek teknik imkanların ve süreci hızlandırabilecek alternatif yöntemlerin değerlendirilmesi açısından önem taşıyor.</p>

        <h2>Yeni teknik imkanlar değerlendiriliyor</h2>

        <p>Başbakan Üstel'in Türkiye'deki temaslarında, devam eden çalışmalara destek sağlayabilecek <strong>yeni teknik imkanlar ve ilave uygulamaların</strong> ele alındığı bildirildi.</p>

        <p>Bu kapsamda deniz kazasının ardından yürütülen arama çalışmalarının daha etkin hale getirilmesi ve ihtiyaç duyulan ilave kapasitenin devreye alınması için yapılabilecek çalışmalar değerlendiriliyor.</p>

        <p>Yetkililer, mevcut imkanların yanı sıra sürecin hızlandırılmasına katkı sağlayabilecek alternatif yöntemlerin de değerlendirilmesinin planlandığını belirtiyor.</p>

        <h2>Üstel Ankara'da temaslarını sürdürüyor</h2>

        <p>KKTC Başbakanı Ünal Üstel, Ankara'daki temasları kapsamında yalnızca Genelkurmay Başkanı Orgeneral Selçuk Bayraktaroğlu ile değil, Türkiye'nin farklı kurumlarının üst düzey yetkilileriyle de görüşmeler gerçekleştirdi.</p>

        <p>Üstel'in Adalet Bakanı Akın Gürlek, Milli Savunma Bakanı Yaşar Güler ve Deniz Kuvvetleri Komutanı Oramiral Ercüment Tatlıoğlu ile de görüşmeler yaptığı bildirildi.</p>

        <p>Bu görüşmelerde Girne açıklarında meydana gelen kazanın ardından yürütülen çalışmaların mevcut durumu ve önümüzdeki süreçte atılabilecek adımlar değerlendirildi.</p>

        <h2>Batığın çıkarılması da gündemde</h2>

        <p>Ankara'daki temaslarda yalnızca kayıp kişilere ulaşılması için sürdürülen çalışmaların değil, <strong>batığın çıkarılmasına yönelik teknik imkanların</strong> da değerlendirildiği açıklandı.</p>

        <p>Batığın bulunduğu bölgedeki şartlar, kullanılabilecek teknik ekipmanlar ve operasyonun nasıl gerçekleştirilebileceği konusunda ilgili kurumların değerlendirmeler yaptığı belirtildi.</p>

        <p>Bu çalışmaların, olayın tüm yönleriyle aydınlatılması ve kayıp kişilere ulaşılması açısından önem taşıdığı ifade ediliyor.</p>

        <h2>Ünal Üstel: Öncelik kayıp kişilere ulaşmak</h2>

        <p>KKTC Başbakanı Ünal Üstel, hükümetin temel önceliğinin deniz kazasının ardından kayıp kişilere en kısa sürede ulaşmak olduğunu belirtti.</p>

        <p>Üstel, Türkiye Cumhuriyeti ile tam iş birliği içerisinde mevcut imkanların güçlendirilmesi ve ihtiyaç duyulan ilave kapasitenin devreye alınması için çalışmaların sürdürüldüğünü vurguladı.</p>

        <p>Ankara'daki görüşmelerin de bu kapsamda gerçekleştirildiği ve ilgili kurumlar arasındaki koordinasyonun devam ettiği bildirildi.</p>

        <h2>Üst düzey toplantı gerçekleştirildi</h2>

        <p>Başbakan Üstel'in Ankara temasları kapsamında Cumhurbaşkanı Yardımcısı Cevdet Yılmaz başkanlığında da üst düzey bir toplantı yapılması planlandı. Toplantıda, devam eden arama çalışmalarına destek sağlayabilecek yeni teknik imkanların ve alternatif yöntemlerin kapsamlı şekilde değerlendirilmesi öngörüldü.</p>

        <p>Toplantının gündeminde ayrıca batığın çıkarılması için atılabilecek yeni adımların da bulunduğu belirtildi.</p>

        <h2>Çalışmalar devam ediyor</h2>

        <p>Girne açıklarında meydana gelen deniz kazasının ardından bölgede yürütülen çalışmalar devam ederken, Türkiye ve KKTC makamları arasındaki koordinasyon da sürdürülüyor.</p>

        <p>Yetkililer, arama çalışmalarının mümkün olan en etkin şekilde yürütülmesi ve mevcut imkanların güçlendirilmesi için çalışmalarına devam ediyor.</p>

        <p>Önümüzdeki süreçte yapılacak yeni değerlendirmeler ve alınacak kararların, arama çalışmalarının seyrinde önemli rol oynaması bekleniyor.</p>

        <p><strong>Haberİsta</strong>, Girne açıklarındaki deniz kazası ve devam eden arama çalışmalarına ilişkin yeni gelişmeleri takip ederek okuyucularına aktarmaya devam edecek.</p>
    `,
},
{
    id: 31,
    kategori: "Dünya",
    baslik: "Putin ve Trump telefonda görüştü: Ukrayna savaşı ve barış süreci masada",
    spot: "Rusya Devlet Başkanı Vladimir Putin ile ABD Başkanı Donald Trump, Ukrayna'daki savaşın sona erdirilmesi ve son diplomatik temasların ardından atılabilecek adımları görüştü.",
    tarih: "8 Eylül 2026",
    saat: "17:30",
    yazar: "Haberİsta Haber Merkezi",

    // Görsel
    gorsel: "/images/putin-trump-telefon-gorusmesi.jpeg",

    icerik: `
        <p><strong>Rusya Devlet Başkanı Vladimir Putin ile ABD Başkanı Donald Trump</strong>, 8 Eylül 2026 tarihinde yaklaşık bir saat süren bir telefon görüşmesi gerçekleştirdi. Görüşmede Ukrayna'daki savaşın sona erdirilmesine yönelik diplomatik girişimler ve ABD'li temsilcilerin son temasları ele alındı.</p>

        <p>Görüşme, ABD Başkanı Trump'ın özel temsilcileri <strong>Steve Witkoff ve Jared Kushner'ın</strong> Moskova ve Kiev'de gerçekleştirdiği temasların ardından yapıldı. Kremlin tarafından yapılan açıklamada, iki liderin bu ziyaretlerin sonuçlarını değerlendirdiği ve görüşmenin yapıcı geçtiği belirtildi.</p>

        <h2>Telefon görüşmesi yaklaşık bir saat sürdü</h2>

        <p>Kremlin yetkililerinin aktardığı bilgilere göre Putin ve Trump arasındaki telefon görüşmesi tam olarak <strong>bir saat</strong> sürdü. Görüşmenin Ukrayna'daki çatışmanın çözümü konusunda gerçekleştirilen son diplomatik temasların ardından yapılması dikkat çekti.</p>

        <p>Rusya Devlet Başkanı'nın yardımcısı Yuri Uşakov, görüşmenin yapıcı ve oldukça açık bir şekilde gerçekleştiğini açıkladı. Liderlerin son dönemde yürütülen diplomatik çalışmalar hakkında görüş alışverişinde bulunduğu belirtildi.</p>

        <h2>Trump: Savaşın bir an önce sona ermesi gerekiyor</h2>

        <p>Görüşmenin en önemli başlıklarından biri Ukrayna'daki savaşın sona erdirilmesi oldu. Kremlin'in açıklamasına göre Trump, çatışmanın mümkün olan en kısa sürede sona erdirilmesinin önemine dikkat çekti.</p>

        <p>Trump'ın, Ukrayna'daki savaşın sona ermesinin ABD ile Rusya arasındaki ilişkilerin yeniden geliştirilmesi için önemli bir fırsat oluşturabileceğini düşündüğü aktarıldı. ABD Başkanı ayrıca iki ülke arasındaki ticari ve ekonomik ilişkilerin yeniden güçlendirilmesinin her iki taraf için de önemli kazanımlar sağlayabileceğini ifade etti.</p>

        <h2>Putin savaş alanındaki durumu aktardı</h2>

        <p>Rusya Devlet Başkanı Vladimir Putin'in ise Trump'a Ukrayna'daki savaşın mevcut durumu hakkında değerlendirmelerde bulunduğu bildirildi. Putin'in ayrıca çatışmaların daha hızlı şekilde sona erdirilmesi konusunda ABD'nin atabileceği adımlara ilişkin görüşlerini aktardığı belirtildi.</p>

        <p>Rusya tarafı, Ukrayna'daki çatışmanın çözümüne yönelik diplomatik kanalların açık tutulmasının önemine vurgu yaptı. İki liderin görüşmede karşılıklı olarak son gelişmeleri değerlendirdiği kaydedildi.</p>

        <h2>Rusya'dan Avrupa açıklaması</h2>

        <p>Telefon görüşmesinde Avrupa'daki güvenlik tartışmalarının da gündeme geldiği açıklandı. Kremlin'e göre Putin, Rusya'nın Avrupa ülkelerine yönelik saldırgan planları olmadığını Trump'a iletti.</p>

        <p>Putin ayrıca Avrupa'da Rusya kaynaklı tehditlere ilişkin değerlendirmelerin, bazı ülkeler tarafından savunma harcamalarını artırmak ve Ukrayna'ya yönelik desteği sürdürmek için kullanıldığını savundu.</p>

        <h2>Esir değişimleri de görüşüldü</h2>

        <p>Putin ve Trump'ın görüşmesinde insani konuların da ele alındığı bildirildi. Bu kapsamda <strong>esir ve tutuklu değişimlerinin</strong> devam ettirilmesi konusunda çalışmaların sürdürülmesinin önemi üzerinde duruldu.</p>

        <p>Tarafların insani konulardaki temasların devam etmesi konusunda hemfikir olduğu belirtildi. Daha önce gerçekleştirilen esir değişimleri, Rusya-Ukrayna savaşında iki taraf arasındaki sınırlı iletişim kanallarından biri olmuştu.</p>

        <h2>ABD'li temsilcilerin Moskova ve Kiev temasları</h2>

        <p>Putin ve Trump arasındaki telefon görüşmesinin arka planında ABD'li temsilcilerin son günlerde gerçekleştirdiği diplomatik temaslar bulunuyor. Steve Witkoff ve Jared Kushner, Moskova'da Putin ile, Kiev'de ise Ukrayna Devlet Başkanı Volodimir Zelenskiy ile görüşmeler gerçekleştirdi.</p>

        <p>Bu temaslarda Ukrayna'daki savaşın sona erdirilmesine yönelik çeşitli önerilerin değerlendirildiği bildirildi. Ukrayna tarafı bazı önerileri olumlu bulduğunu açıklarken, görüşmelerden henüz kesin bir barış anlaşması veya kapsamlı ateşkes kararı çıkmadı.</p>

        <h2>Yeni görüşmelerin önü açık</h2>

        <p>Putin ve Trump'ın son telefon görüşmesinin ardından iki liderin iletişimi sürdürme konusunda anlaşmaya vardığı açıklandı. Kremlin, liderlerin ihtiyaç duyulması halinde yeniden telefon görüşmeleri gerçekleştireceğini bildirdi.</p>

        <p>Bu gelişme, Washington ile Moskova arasındaki diplomatik temasların devam edeceği şeklinde değerlendiriliyor. Ancak görüşmenin ardından Ukrayna'daki savaşın sona erdiğine veya kesin bir ateşkes anlaşmasına varıldığına ilişkin herhangi bir açıklama yapılmadı.</p>

        <p>Ukrayna'daki savaşın geleceğine ilişkin müzakerelerde özellikle çatışmanın nasıl sona erdirileceği ve tarafların hangi şartlarda anlaşabileceği konusu önemini koruyor.</p>

        <h2>Diplomatik süreç yakından takip ediliyor</h2>

        <p>ABD'nin Moskova ve Kiev arasında yürüttüğü diplomatik girişimlerin önümüzdeki günlerde devam etmesi bekleniyor. Trump yönetimi savaşın sona erdirilmesi için yeni görüşmeler yapılmasını isterken, Rusya ve Ukrayna arasındaki temel anlaşmazlıkların çözümü konusunda henüz net bir sonuç ortaya çıkmış değil.</p>

        <p>Putin ve Trump arasındaki son görüşme de bu nedenle uluslararası kamuoyunun dikkatini çekti. Liderlerin yeniden iletişim kurma konusunda anlaşması, diplomatik sürecin devam edeceğine işaret ederken, somut bir barış anlaşmasına ulaşılıp ulaşılmayacağı ise önümüzdeki dönemde belli olacak.</p>

        <p><strong>Haberİsta</strong>, Putin ve Trump arasındaki görüşmenin ardından yaşanacak yeni gelişmeleri ve Ukrayna'daki diplomatik süreci takip ederek okuyucularına aktarmaya devam edecek.</p>
    `,
},
   
{
    id: 30,
    kategori: "Gündem",
    baslik: "Girne açıklarında batan gemi için arama-kurtarma çalışmaları sürüyor",
    spot: "KKTC'nin Girne açıklarında meydana gelen gemi kazasının ardından bölgede başlatılan arama-kurtarma çalışmaları devam ediyor.",
    tarih: "7 Eylül 2026",
    saat: "23:50",
    yazar: "Haberİsta Haber Merkezi",

    // Görsel
    gorsel: "/images/girne-gemi-arama-kurtarma.jpeg",

    icerik: `
        <p><strong>KKTC'nin Girne açıklarında meydana gelen gemi kazasının</strong> ardından bölgede başlatılan arama kurtarma çalışmaları devam ediyor.</p>

        <p>Türk Deniz Kuvvetleri'ne bağlı arama-kurtarma unsurları bölgede çalışmalarını sürdürüyor. Ekipler, kazanın meydana geldiği deniz sahasında kapsamlı arama faaliyetleri gerçekleştiriyor.</p>

        <h2>Arama kurtarma çalışmaları sürüyor</h2>

        <p>Geminin batmasının ardından başlatılan çalışmalar, kazanın meydana geldiği bölgede yoğunlaştırıldı. Ekipler deniz altında ve yüzeyde arama faaliyetlerine devam ediyor.</p>

        <h2>Robotik sistemlerden yararlanılıyor</h2>

        <p>Arama faaliyetlerinde deniz altında inceleme yapabilen robotik sistemler de kullanılıyor. Ekipler, bölgede detaylı tarama gerçekleştirerek çalışmalarını sürdürüyor.</p>

        <h2>TCG Alemdar ve TCG Işın bölgede</h2>

        <p>Türk Deniz Kuvvetleri'ne bağlı <strong>TCG Alemdar</strong> ve <strong>TCG Işın</strong> gemilerinin bölgede arama-kurtarma faaliyetlerini sürdürdüğü bildirildi.</p>

        <p>Çalışmaların deniz koşulları ve bölgenin özellikleri dikkate alınarak koordineli şekilde yürütüldüğü belirtildi.</p>

        <h2>Yeni gelişmeler bekleniyor</h2>

        <p>Girne açıklarında meydana gelen olayla ilgili ekiplerin çalışmaları devam ederken, resmi makamlar tarafından yapılacak yeni açıklamalar takip ediliyor.</p>

        <p><strong>Haberİsta</strong>, olayla ilgili yeni gelişmeleri okuyucularına aktarmaya devam edecek.</p>
    `,
},
{
    id: 29,
    kategori: "Gündem",
    baslik: "Türkiye'de gündem yoğun: Ekonomi, teknoloji ve günlük yaşamda yeni gelişmeler takip ediliyor",
    spot: "Türkiye'de gün boyunca farklı alanlarda yaşanan gelişmeler vatandaşların gündemindeki yerini koruyor. Ekonomiden teknolojiye, eğitimden günlük yaşama kadar birçok başlık yakından takip ediliyor.",
    tarih: "7 Eylül 2026",
    saat: "15:30",
    gorsel: "images/gundem.jpeg",
    kaynak: "HABERİSTA Haber Merkezi",

    icerik: `
        <p>Türkiye'de yeni günle birlikte birçok farklı başlık kamuoyunun gündeminde yer almaya devam ediyor. Ekonomi, teknoloji, eğitim, spor ve günlük yaşamla ilgili gelişmeler vatandaşlar tarafından yakından takip edilirken, resmi kurumlardan yapılacak açıklamalar da merakla bekleniyor.</p>

        <p>Gündemde öne çıkan konular arasında vatandaşların günlük hayatını doğrudan veya dolaylı olarak etkileyebilecek gelişmeler bulunuyor. Gün içerisinde yapılan açıklamalar, alınan kararlar ve ortaya çıkan yeni bilgiler haber merkezleri tarafından takip ediliyor.</p>

        <h2>Ekonomide gelişmeler izleniyor</h2>

        <p>Ekonomi gündeminde piyasaların genel görünümü, fiyat hareketleri ve yeni ekonomik kararlar öne çıkıyor. Vatandaşlar özellikle günlük harcamalarını etkileyebilecek gelişmeleri yakından takip ediyor. Piyasalarda yaşanan değişimlerin yanı sıra ekonomi yönetiminden gelecek açıklamalar da gündemin önemli başlıkları arasında bulunuyor.</p>

        <p>Uzmanlar ve ekonomi çevreleri tarafından yapılan değerlendirmelerde, güncel gelişmelerin tek bir veri üzerinden değerlendirilmemesi gerektiği belirtilirken, resmi açıklamalar ve açıklanan ekonomik göstergelerin birlikte takip edilmesinin önem taşıdığı ifade ediliyor.</p>

        <h2>Teknoloji gündemindeki hareketlilik sürüyor</h2>

        <p>Teknoloji alanında ise yapay zekâ, dijital hizmetler, akıllı cihazlar ve internet teknolojilerindeki gelişmeler dikkat çekiyor. Dijital teknolojilerin günlük yaşamın daha fazla alanında kullanılmasıyla birlikte yeni uygulamalar ve hizmetler de kullanıcıların ilgisini çekiyor.</p>

        <p>Özellikle yapay zekâ teknolojilerindeki gelişmeler, eğitimden iş dünyasına kadar birçok alanda tartışılmaya devam ediyor. Yeni teknolojilerin sunduğu fırsatların yanında güvenlik, gizlilik ve doğru bilgiye erişim gibi konular da önemini koruyor.</p>

        <h2>Eğitim gündemi de yakından takip ediliyor</h2>

        <p>Eğitim alanında öğrenciler, veliler ve öğretmenler yeni açıklamaları takip ediyor. Sınav takvimleri, eğitim programları ve okullarla ilgili gelişmeler özellikle öğrencilerin gündeminde bulunuyor.</p>

        <p>Yeni eğitim dönemine ilişkin açıklamalar yapılmasıyla birlikte öğrencilerin ders programları, sınav hazırlıkları ve eğitim süreçleriyle ilgili gelişmeler de takip edilmeye devam ediyor. Resmi kurumlar tarafından yapılacak açıklamalar, eğitim gündemindeki belirsizliklerin giderilmesi açısından önem taşıyor.</p>

        <h2>Günlük yaşamla ilgili gelişmeler vatandaşların takibinde</h2>

        <p>Vatandaşların günlük hayatını ilgilendiren ulaşım, hava durumu, kamu hizmetleri ve çeşitli sosyal konular da gün içerisinde takip edilen başlıklar arasında yer alıyor. Özellikle değişiklik veya yeni düzenleme içeren açıklamalar vatandaşların dikkatini çekiyor.</p>

        <p>Gün içerisinde ortaya çıkan gelişmelerin doğrulanması da önem taşıyor. Sosyal medyada hızla yayılan bilgilerin tamamının doğru olmayabileceği belirtilirken, vatandaşların önemli konularda resmi kurumların açıklamalarını ve güvenilir haber kaynaklarını takip etmesi gerekiyor.</p>

        <h2>Dünya gündeminde önemli başlıklar</h2>

        <p>Türkiye'nin yanı sıra dünya gündemindeki gelişmeler de yakından izleniyor. Ülkeler arasındaki diplomatik ilişkiler, ekonomik gelişmeler, bölgesel olaylar ve uluslararası kuruluşların açıklamaları gün içerisinde haber akışının önemli bölümünü oluşturuyor.</p>

        <p>Uluslararası gelişmelerin ekonomi, enerji, ulaşım ve ticaret gibi farklı alanlarda etkileri olabileceği için dünya gündemindeki açıklamalar Türkiye'deki vatandaşlar ve piyasalar tarafından da takip ediliyor.</p>

        <h2>Yeni açıklamalar geldikçe gelişmeler aktarılacak</h2>

        <p>Gün içerisinde gündeme gelen başlıklarla ilgili yeni açıklamaların yapılması halinde haber akışının güncellenmesi bekleniyor. Özellikle resmi kurumlar tarafından paylaşılacak yeni bilgiler, mevcut gelişmelerin daha net anlaşılmasına yardımcı olacak.</p>

        <p>HABERİSTA Haber Merkezi olarak Türkiye ve dünyadaki önemli gelişmeleri takip ediyor, doğrulanmış bilgileri okuyucularımıza aktarmaya devam ediyoruz. Gündemdeki konularla ilgili yeni gelişmeler yaşandıkça haberimiz güncellenecektir.</p>

        <p><strong>Not:</strong> Bu haber genel gündem değerlendirmesi niteliğindedir. Belirli bir olay, karar veya resmi açıklamayla ilgili kesin bilgiler için ilgili kurumların güncel duyuruları takip edilmelidir.</p>
    `
},
    {
        id: 21,
        kategori: "Gündem",

        baslik:
            "Kabine bugün toplanıyor: Gündemde ekonomi, güvenlik ve 'Terörsüz Türkiye' süreci var",

        spot:
            "Cumhurbaşkanı Recep Tayyip Erdoğan başkanlığındaki Cumhurbaşkanlığı Kabinesi bugün Beştepe'de toplanacak. Toplantıda ekonomi, güvenlik, dış politika, 'Terörsüz Türkiye' süreci ve sosyal konut çalışmalarının değerlendirilmesi bekleniyor.",

        icerik: `

            KABİNE BUGÜN BEŞTEPE'DE TOPLANIYOR

            Cumhurbaşkanı Recep Tayyip Erdoğan başkanlığındaki
            Cumhurbaşkanlığı Kabinesi, 7 Eylül 2026 Pazartesi günü
            Cumhurbaşkanlığı Külliyesi'nde toplanacak.

            Toplantının saat 15.30'da başlaması bekleniyor.

            Kabine toplantısında Türkiye'nin iç ve dış gündemindeki
            gelişmelerin yanı sıra ekonomi, güvenlik, dış politika ve
            "Terörsüz Türkiye" sürecine ilişkin başlıkların
            değerlendirilmesi bekleniyor.

            Toplantının ardından Cumhurbaşkanı Erdoğan'ın kamuoyuna
            açıklama yapması bekleniyor.

            "TERÖRSÜZ TÜRKİYE" SÜRECİ

            Kabinenin gündeminde bulunması beklenen başlıklardan biri
            "Terörsüz Türkiye" sürecindeki son gelişmeler olacak.

            Süreç kapsamında yürütülen çalışmalar, güvenlik politikaları
            ve önümüzdeki dönemde atılması planlanan adımların
            değerlendirilmesi bekleniyor.

            EKONOMİ GÜNDEMİ

            Ekonomi de toplantının önemli başlıkları arasında yer alacak.

            Enflasyonla mücadele, ekonomik istikrar, fiyat gelişmeleri
            ve ekonomi programının uygulanmasına ilişkin gelişmelerin
            değerlendirilmesi bekleniyor.

            Yeni Orta Vadeli Program kapsamında belirlenen hedefler ve
            önümüzdeki dönemde uygulanması planlanan politikaların da
            gündeme gelmesi bekleniyor.

            SOSYAL KONUT ÇALIŞMALARI

            Toplantıda sosyal konut çalışmalarına ilişkin gelişmelerin
            de değerlendirilmesi bekleniyor.

            Dar ve orta gelirli vatandaşların konut sahibi olmasına
            yönelik çalışmaların yanı sıra İstanbul'daki kiralık sosyal
            konut projesine ilişkin başlıkların gündeme gelmesi bekleniyor.

            GÜVENLİK VE DIŞ POLİTİKA

            Türkiye'nin iç güvenliği, sınır güvenliği ve bölgesel
            gelişmeler de Kabine toplantısında ele alınabilecek
            başlıklar arasında bulunuyor.

            Orta Doğu'daki gelişmelerin Türkiye'nin güvenliği,
            ekonomisi ve enerji politikaları üzerindeki olası
            etkilerinin de değerlendirilmesi bekleniyor.

            ERDOĞAN'IN AÇIKLAMA YAPMASI BEKLENİYOR

            Toplantının tamamlanmasının ardından Cumhurbaşkanı
            Erdoğan'ın gündemdeki konulara ilişkin açıklama yapması
            bekleniyor.

            Açıklamanın ardından toplantıda kesinleşen kararlar
            kamuoyuna duyurulabilecek.

            HABERİSTA OLARAK TAKİP EDİYORUZ

            Kabine toplantısından gelecek açıklamalar ve kesinleşen
            kararlar yakından takip ediliyor.

            Toplantı sonrasında resmi açıklamalar geldikçe haber
            güncellenecektir.

            HABERİSTA, gelişmeleri resmi açıklamalar doğrultusunda
            okuyucularına aktarmaya devam edecektir.
        `,

        tarih: "7 Eylül 2026",
        saat: "16:10",

        gorsel:
            "images/WhatsApp Image 2026-09-07 at 16.15.05.jpeg",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       2 - ABD / İRAN
    ===================================================== */

    {
        id: 20,
        kategori: "Dünya",

        baslik:
            "ABD ile İran arasında tansiyon yeniden yükseldi: 3 İran tankeri hedef alındı",

        spot:
            "ABD ile İran arasındaki gerilimde yeni bir gelişme yaşandı. ABD Merkez Komutanlığı tarafından İran'a ait olduğu belirtilen 3 petrol tankerinin hedef alındığı açıklandı. Gelişme, bölgedeki deniz güvenliği ve enerji piyasalarına ilişkin endişeleri yeniden gündeme taşıdı.",

        icerik: `

            ABD VE İRAN ARASINDA GERİLİM YENİDEN GÜNDEMDE

            ABD ile İran arasındaki askeri ve siyasi gerilimde yeni
            bir gelişme yaşandı.

            ABD Merkez Komutanlığı tarafından yapılan açıklamaya göre,
            İran'a ait olduğu belirtilen 3 petrol tankeri hedef alındı.

            Açıklamanın ardından bölgedeki deniz güvenliği,
            petrol taşımacılığı ve enerji piyasalarına ilişkin
            gelişmeler yeniden gündeme geldi.

            ABD'DEN TANKER AÇIKLAMASI

            ABD tarafının açıklamasında hedef alınan tankerlerin
            İran'a ait olduğu belirtildi.

            Operasyonun ayrıntıları ve olayın bölgedeki gelişmelere
            etkisi uluslararası kamuoyu tarafından takip ediliyor.

            TANKERLERİN HEDEF ALINMASI NEDEN ÖNEMLİ?

            Petrol tankerlerine yönelik gelişmeler, bölgedeki enerji
            taşımacılığının güvenliği açısından önem taşıyor.

            Körfez bölgesindeki deniz yollarında yaşanabilecek yeni
            güvenlik sorunlarının petrol taşımacılığını etkileyebileceği
            değerlendiriliyor.

            HÜRMÜZ BOĞAZI YAKINDAN TAKİP EDİLİYOR

            Hürmüz Boğazı, küresel enerji taşımacılığı açısından
            stratejik öneme sahip geçiş noktalarından biri.

            Bölgede yaşanabilecek güvenlik sorunları veya deniz
            trafiğinde meydana gelebilecek aksaklıklar petrol
            sevkiyatını etkileyebilir.

            ENERJİ PİYASALARI

            ABD ile İran arasındaki gerilim enerji piyasaları
            tarafından da yakından takip ediliyor.

            Petrol arzına ilişkin endişelerin artması halinde
            fiyatlarda hareketlilik yaşanabileceği değerlendiriliyor.

            DENİZ TİCARETİ AÇISINDAN RİSK

            Bölgedeki askeri hareketlilik uluslararası denizcilik
            şirketlerinin güvenlik değerlendirmelerini de etkileyebilir.

            Gemilerin rotalarını değiştirmesi veya güvenlik
            önlemlerinin artırılması halinde taşımacılık maliyetleri
            üzerinde baskı oluşabilir.

            YENİ AÇIKLAMALAR BEKLENİYOR

            ABD'nin açıklamasının ardından gözler İran tarafından
            gelecek açıklamalara çevrildi.

            Taraflardan gelecek yeni açıklamalar, olayın bölgesel
            etkilerinin daha net anlaşılmasını sağlayabilir.

            HABERİSTA TAKİPTE

            ABD ve İran arasındaki gerilime ilişkin yeni gelişmeler
            takip ediliyor.

            Resmi açıklamalar ve doğrulanmış bilgiler geldikçe haber
            güncellenecektir.
        `,

        tarih: "7 Eylül 2026",
        saat: "00:01",

        gorsel:
            "images/6.jpeg",

        kaynak: "Reuters / HABERİSTA"
    },


    /* =====================================================
       3 - ABD 3 TANKER
    ===================================================== */

    {
        id: 19,
        kategori: "Dünya",

        baslik:
            "ABD, 3 İran tankerini vurduğunu açıkladı",

        spot:
            "ABD yönetimi, İran'a ait olduğu belirtilen 3 petrol tankerinin hedef alındığını açıkladı. Gelişme, ABD ile İran arasındaki gerilimin deniz taşımacılığı ve enerji güvenliği üzerindeki etkilerini yeniden gündeme getirdi.",

        icerik: `

            ABD'DEN 3 İRAN TANKERİ AÇIKLAMASI

            ABD ile İran arasındaki gerilimde yeni bir gelişme yaşandı.

            ABD yönetimi, İran'a ait olduğu belirtilen 3 petrol
            tankerinin hedef alındığını açıkladı.

            Açıklamanın ardından olayın ayrıntıları ve bölgedeki
            deniz trafiğine olası etkileri yakından takip edilmeye
            başlandı.

            BÖLGEDE DENİZ GÜVENLİĞİ

            Körfez bölgesindeki deniz yolları küresel enerji
            taşımacılığı açısından stratejik öneme sahip.

            Bu nedenle petrol tankerlerine yönelik herhangi bir
            askeri gelişme, enerji ticareti açısından da yakından
            takip ediliyor.

            PETROL TAŞIMACILIĞI

            İran'ın petrol ihracatı büyük ölçüde deniz yoluyla
            gerçekleştiriliyor.

            Tankerlerin hedef alınmasına ilişkin gelişme,
            petrol taşımacılığının güvenliği konusunu yeniden
            gündeme taşıdı.

            ENERJİ PİYASALARININ GÖZÜ BÖLGEDE

            ABD ile İran arasındaki gerilimin devam etmesi halinde
            petrol arzı ve deniz taşımacılığına ilişkin endişelerin
            artabileceği değerlendiriliyor.

            Hürmüz Boğazı çevresindeki gelişmeler de bu nedenle
            uluslararası enerji piyasaları tarafından takip ediliyor.

            ULUSLARARASI TOPLUM GELİŞMELERİ İZLİYOR

            Bölgedeki ülkelerin güvenlik durumunu yakından takip
            ettiği belirtilirken, diplomatik açıklamalar da
            gündemin önemli başlıkları arasında yer alıyor.

            YENİ AÇIKLAMALAR BEKLENİYOR

            Olayın ayrıntıları konusunda taraflardan yeni açıklamalar
            gelmesi bekleniyor.

            Tankerlerin bulunduğu bölge, saldırının nasıl gerçekleştiği
            ve olayın sonraki gelişmelere etkisi konusunda yeni
            bilgilerin ortaya çıkması bekleniyor.

            HABERİSTA TAKİPTE

            ABD ile İran arasındaki gerilime ilişkin yeni gelişmeler
            doğrulanmış bilgiler üzerinden takip edilmektedir.
        `,

        tarih: "6 Eylül 2026",
        saat: "11:17",

        gorsel:
            "images/ChatGPT Image 6 Eyl 2026 19_44_18.png",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       4 - EKONOMİ
    ===================================================== */

    {
        id: 18,
        kategori: "Ekonomi",

        baslik:
            "Ekonomide 3 yıllık yol haritası belli oluyor",

        spot:
            "Türkiye ekonomisinin önümüzdeki dönemde izleyeceği politikalara ilişkin 3 yıllık yol haritası gündemde. Yeni Orta Vadeli Program kapsamında büyüme, enflasyon, istihdam ve kamu maliyesine yönelik hedefler öne çıkıyor.",

        icerik: `

            TÜRKİYE EKONOMİSİNDE YENİ DÖNEM

            Türkiye ekonomisinin önümüzdeki üç yıllık dönemde
            izleyeceği politikalara ilişkin hedefler ekonomi
            gündeminin önemli başlıkları arasında bulunuyor.

            Orta Vadeli Program kapsamında büyüme, enflasyon,
            istihdam, kamu maliyesi ve ihracat gibi alanlarda
            hedefler belirleniyor.

            ENFLASYONLA MÜCADELE

            Ekonomi programının temel başlıklarından biri
            enflasyonla mücadele.

            Fiyat istikrarının sağlanması ve ekonomik dengelerin
            güçlendirilmesine yönelik politikaların önümüzdeki
            dönemde de devam etmesi bekleniyor.

            BÜYÜME VE İSTİHDAM

            Ekonomik büyümenin sürdürülebilir şekilde devam
            ettirilmesi ve istihdamın artırılması da programın
            önemli başlıkları arasında yer alıyor.

            Üretim kapasitesinin geliştirilmesi, yatırımların
            artırılması ve ihracatın desteklenmesine yönelik
            politikalar izleniyor.

            KAMU MALİYESİ

            Kamu maliyesinde disiplinin korunması ve kamu
            kaynaklarının daha etkin kullanılması da ekonomik
            programın önemli unsurları arasında bulunuyor.

            Kamu harcamalarının verimliliği ve bütçe dengeleri
            önümüzdeki dönemde yakından takip edilecek.

            YATIRIM VE ÜRETİM

            Türkiye'nin üretim kapasitesinin artırılması ve
            yüksek katma değerli üretimin desteklenmesi
            hedeflenen alanlar arasında bulunuyor.

            Sanayi, teknoloji ve ihracat kapasitesinin
            geliştirilmesine yönelik adımların ekonomik
            büyüme açısından önem taşıdığı değerlendiriliyor.

            PİYASALARIN TAKİBİ

            Ekonomi yönetiminin açıklayacağı hedefler ve
            uygulayacağı politikalar piyasalar tarafından
            yakından izlenecek.

            Enflasyon, faiz, büyüme, istihdam ve kamu maliyesi
            verileri programın uygulanmasında önemli göstergeler
            arasında yer alacak.

            HABERİSTA EKONOMİ SERVİSİ

            Türkiye ekonomisindeki gelişmeleri resmi açıklamalar
            ve açıklanan ekonomik veriler üzerinden takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "11:01",

        gorsel:
            "images/ChatGPT Image 6 Eyl 2026 19_45_31.png",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       5 - İRAN EKONOMİ
    ===================================================== */

    {
        id: 17,
        kategori: "Dünya",

        baslik:
            "İran'da 'Ekonomik Savaş Karargâhı' kuruldu",

        spot:
            "İran'da ekonomik baskıların yönetilmesi amacıyla 'Ekonomik Savaş Karargâhı' kurulduğu açıklandı. Yeni yapılanmanın ekonomik faaliyetler ve kritik sektörler arasında koordinasyon sağlaması bekleniyor.",

        icerik: `

            İRAN'DA YENİ EKONOMİK YAPILANMA

            İran'da ekonomik koşullara ilişkin dikkat çeken bir
            yapılanma oluşturuldu.

            Ülkede ekonomik baskıların ve dış kaynaklı sorunların
            yönetilmesi amacıyla "Ekonomik Savaş Karargâhı"
            kurulduğu açıklandı.

            YAPILANMANIN AMACI

            Yeni yapılanmanın ekonomik alandaki gelişmelerin
            daha koordineli şekilde yönetilmesine katkı sağlaması
            bekleniyor.

            Karargâhın hangi kurumlarla birlikte çalışacağı ve
            görev alanlarının kapsamı yapılacak resmi açıklamalarla
            daha net hale gelecek.

            KRİTİK SEKTÖRLER TAKİP EDİLECEK

            Ekonomik yapılanmanın temel ekonomik faaliyetler,
            ticaret, üretim ve tedarik zincirleri gibi alanlarda
            yaşanabilecek sorunların koordinasyonunda rol
            üstlenmesi bekleniyor.

            DIŞ BASKILAR

            İran ekonomisi uzun süredir yaptırımlar ve dış
            ekonomik baskılarla karşı karşıya.

            Enerji ihracatı, dış ticaret ve finansal sistem
            üzerindeki baskılar ülke ekonomisinin önemli
            gündem maddeleri arasında bulunuyor.

            BÖLGESEL GELİŞMELER

            Orta Doğu'daki siyasi ve askeri gelişmelerin de
            İran ekonomisi üzerinde etkili olabileceği
            değerlendiriliyor.

            Yeni yapılanmanın bu süreçte kurumlar arasındaki
            koordinasyonu güçlendirmesi amaçlanıyor.

            ÖNÜMÜZDEKİ SÜREÇ

            Ekonomik Savaş Karargâhı'nın faaliyet alanları ve
            alacağı kararlar önümüzdeki dönemde daha net
            ortaya çıkacak.

            HABERİSTA Dünya Servisi olarak gelişmeleri resmi
            açıklamalar doğrultusunda takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "10:23",

        gorsel:
            "images/ChatGPT Image 6 Eyl 2026 19_46_53.png",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       6 - BURSA KAZA
    ===================================================== */

    {
        id: 16,
        kategori: "Gündem",

        baslik:
            "Tırdan dökülen mazot 10 aracı birbirine kattı",

        spot:
            "Bursa'da bir tırdan yola dökülen mazot nedeniyle kayganlaşan yolda zincirleme kaza meydana geldi. Yaklaşık 10 aracın karıştığı olayın ardından ekipler bölgede çalışma başlattı.",

        icerik: `

            BURSA'DA ZİNCİRLEME KAZA

            Bursa'da trafikte seyreden bir tırdan yola mazot
            dökülmesi zincirleme kazaya neden oldu.

            Yola yayılan mazot nedeniyle asfaltın kayganlaşmasının
            ardından sürücüler araçlarının kontrolünü kaybetti.

            Yaklaşık 10 aracın karıştığı kazanın ardından bölgeye
            ekipler sevk edildi.

            YOL KAYGANLAŞTI

            Mazotun asfalt yüzeyine yayılması sürüş güvenliğini
            olumsuz etkiledi.

            Kaygan zeminde araçların fren ve yol tutuş özelliklerinin
            etkilenmesiyle kısa süre içerisinde peş peşe kazalar
            meydana geldi.

            10 ARAÇ KAZAYA KARIŞTI

            Zincirleme kazada yaklaşık 10 araç birbirine çarptı.

            Olayın ardından bölgede ulaşımın güvenli şekilde
            sürdürülmesi için çalışma gerçekleştirildi.

            EKİPLER BÖLGEYE SEVK EDİLDİ

            İhbar üzerine olay yerine ekipler yönlendirildi.

            Ekipler hem kazaya karışan araçlarla ilgili işlemleri
            yürüttü hem de yola dökülen mazotun oluşturduğu
            tehlikenin giderilmesi için çalışma yaptı.

            SÜRÜCÜLERE UYARI

            Yola yağ, mazot veya benzeri maddelerin dökülmesi
            araçların yol tutuşunu ciddi şekilde etkileyebilir.

            Sürücülerin böyle durumlarda hızlarını azaltması,
            ani manevralardan kaçınması ve güvenli bir güzergâh
            tercih etmesi önem taşıyor.

            İNCELEME BAŞLATILDI

            Kazanın ardından olayın nasıl meydana geldiğine
            ilişkin inceleme başlatıldı.

            Mazotun yola nasıl döküldüğüne ve kazanın diğer
            ayrıntılarına ilişkin bilgilerin incelemelerin
            ardından netleşmesi bekleniyor.

            HABERİSTA olarak olayla ilgili gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:53",

        gorsel:
            "images/ChatGPT Image 6 Eyl 2026 19_48_08.png",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       7 - SERHAT MUSTAFA KILIÇ
    ===================================================== */

    {
        id: 15,
        kategori: "Magazin",

        baslik:
            "Ünlü oyuncu Serhat Mustafa Kılıç hayatını kaybetti",

        spot:
            "Tiyatro, sinema ve televizyon dünyasının tanınan isimlerinden Serhat Mustafa Kılıç, 51 yaşında hayatını kaybetti. Oyuncunun İstanbul Kağıthane'deki evinde yaşamını yitirdiği öğrenildi.",

        icerik: `

            SERHAT MUSTAFA KILIÇ HAYATINI KAYBETTİ

            Türk tiyatro, sinema ve televizyon dünyasının tanınan
            isimlerinden Serhat Mustafa Kılıç'ın 51 yaşında
            hayatını kaybettiği öğrenildi.

            Oyuncunun İstanbul Kağıthane'deki evinde yaşamını
            yitirdiği bildirildi.

            OLAYLA İLGİLİ İNCELEME

            Kılıç'tan bir süredir haber alamayan yakınlarının
            durumu fark etmesi üzerine olay yerine sağlık ve
            polis ekipleri sevk edildi.

            Sağlık ekiplerinin yaptığı kontrollerin ardından
            oyuncunun hayatını kaybettiği belirlendi.

            Oyuncunun kesin ölüm nedeninin yapılacak adli
            incelemelerin ardından netleşmesi bekleniyor.

            SANAT DÜNYASINDAN BAŞSAĞLIĞI MESAJLARI

            Vefat haberinin ardından sanat dünyasından çok
            sayıda isim başsağlığı mesajı paylaştı.

            Oyuncunun meslektaşları ve sevenleri sosyal medya
            hesaplarından üzüntülerini dile getirdi.

            TİYATRO KARİYERİ

            Serhat Mustafa Kılıç'ın sanat hayatında tiyatronun
            önemli bir yeri bulunuyordu.

            Bilkent Üniversitesi Müzik ve Sahne Sanatları
            Fakültesi Tiyatro Bölümü'nde eğitim alan Kılıç,
            profesyonel kariyerinde çok sayıda tiyatro
            çalışmasında yer aldı.

            TELEVİZYON ÇALIŞMALARI

            Oyuncu televizyon dünyasında da çeşitli projelerde
            rol aldı.

            Hatırla Sevgili, Ezel, Seksenler, Söz, Kuruluş Osman,
            Kirli Sepeti ve Mehmed: Fetihler Sultanı gibi
            yapımlarda yer aldı.

            Özellikle Seksenler dizisindeki Ergun Plak karakteri
            geniş bir izleyici kitlesi tarafından tanındı.

            SİNEMA KARİYERİ

            Kılıç, televizyon çalışmalarının yanı sıra sinema
            filmlerinde de rol aldı.

            Nokta, Veda, Kış Uykusu, Mavzer ve
            Cenazemize Hoş Geldiniz gibi yapımlarda yer aldı.

            ÖLÜM NEDENİNE İLİŞKİN KESİN BİLGİ BEKLENİYOR

            Oyuncunun ölüm nedeni konusunda resmi olarak
            kesinleşmemiş bilgilerin gerçekmiş gibi paylaşılmaması
            önem taşıyor.

            Adli incelemelerin ardından olayın ayrıntılarının
            netleşmesi bekleniyor.

            CENAZE PROGRAMI

            Cenaze töreninin ne zaman ve nerede yapılacağına
            ilişkin resmi bilgilerin açıklanması bekleniyor.

            HABERİSTA olarak sanat dünyasındaki gelişmeleri
            resmi açıklamalar doğrultusunda takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "17:40",

        gorsel:
            "images/SERHAT.jpeg",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       8 - METEOROLOJİ
    ===================================================== */

    {
        id: 14,
        kategori: "Gündem",

        baslik:
            "4 il için sel ve heyelan uyarısı",

        spot:
            "6 Eylül 2026'da bazı bölgelerde etkili olması beklenen yağışlar nedeniyle 4 il için sel ve heyelan uyarısı yapıldı. Yetkililer, kuvvetli yağış sırasında vatandaşların dikkatli olması gerektiğini belirtti.",

        icerik: `

            4 İL İÇİN UYARI

            Türkiye'nin bazı bölgelerinde beklenen yağışlar
            nedeniyle sel ve heyelan riskine karşı uyarılar
            gündeme geldi.

            Meteorolojik değerlendirmelerde bazı bölgelerde
            yağışların yerel olarak kuvvetlenebileceği belirtildi.

            Riskli bölgelerde yaşayan vatandaşların resmi
            meteorolojik uyarıları takip etmesi istendi.

            SEL RİSKİ

            Kuvvetli yağışların kısa sürede büyük miktarda
            su birikmesine neden olması, özellikle alçak
            bölgelerde su baskını riskini artırabiliyor.

            Dere yatakları ve suyun hızla birikebileceği
            alanlarda dikkatli olunması gerekiyor.

            HEYELAN TEHLİKESİ

            Uzun süreli ve kuvvetli yağışlar eğimli arazilerde
            heyelan riskini artırabiliyor.

            Özellikle dağlık bölgelerde ve heyelan riski
            bulunan yollarda seyahat edenlerin güncel
            meteorolojik uyarıları takip etmesi önem taşıyor.

            SÜRÜCÜLERE UYARI

            Yağış sırasında görüş mesafesi azalabileceğinden
            sürücülerin hızlarını hava koşullarına göre
            ayarlaması gerekiyor.

            Su birikintilerinin bulunduğu yollarda araçların
            güvenli şekilde ilerleyemeyebileceği unutulmamalı.

            RESMİ UYARILAR TAKİP EDİLMELİ

            Hava koşullarına ilişkin en güncel bilgilerin
            resmi meteoroloji kaynaklarından takip edilmesi
            önem taşıyor.

            Sosyal medyada kaynağı belli olmayan hava durumu
            paylaşımlarının doğrulanmadan paylaşılmaması gerekiyor.

            HABERİSTA olarak meteorolojik gelişmeleri ve
            resmi uyarıları takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "12:10",

        gorsel:
            "images/meteroji.jpeg",

        kaynak: "HABERİSTA"
    },


    /* =====================================================
       9 - DEPREMLER
    ===================================================== */

    {
        id: 13,
        kategori: "Türkiye",

        baslik:
            "Son depremler: AFAD ve Kandilli verileri güncellendi",

        spot:
            "Türkiye'de meydana gelen son depremlere ilişkin veriler AFAD ve Kandilli Rasathanesi tarafından takip ediliyor. Vatandaşlar sarsıntıların merkez üssü, büyüklüğü ve derinliğine ilişkin resmi verileri takip ediyor.",

        icerik: `

            SON DEPREMLER YAKINDAN TAKİP EDİLİYOR

            Türkiye'nin deprem kuşağında yer alması nedeniyle
            meydana gelen sarsıntılar vatandaşlar tarafından
            yakından takip ediliyor.

            Depremlere ilişkin en güncel veriler AFAD ve
            Kandilli Rasathanesi gibi resmi kaynaklardan
            takip edilebiliyor.

            DEPREM VERİLERİNDE HANGİ BİLGİLER YER ALIYOR?

            Deprem listelerinde sarsıntının meydana geldiği
            saat, merkez üssü, büyüklüğü ve derinliği gibi
            bilgiler yer alabiliyor.

            Vatandaşların depremle ilgili bilgi edinirken
            resmi kaynaklardaki güncel verileri dikkate
            alması önem taşıyor.

            SOSYAL MEDYADAKİ BİLGİLERE DİKKAT

            Deprem sonrasında sosyal medya platformlarında
            çok sayıda paylaşım yapılabiliyor.

            Ancak bu paylaşımların tamamının doğrulanmış
            bilgi olmadığı unutulmamalı.

            Resmi kurumların açıklamaları dışındaki
            doğrulanmamış bilgilerin paylaşılmaması gerekiyor.

            DEPREM SIRASINDA

            Deprem sırasında panik yapmamak ve mümkün
            olduğunca güvenli bir noktaya geçmek önem taşıyor.

            Camlardan, balkonlardan ve devrilebilecek
            eşyalardan uzak durulması gerekiyor.

            DEPREM SONRASI

            Hasar gördüğünden şüphe edilen binalara
            tekrar girilmemesi gerekiyor.

            Acil durumlarda resmi ekiplerin yönlendirmelerine
            uyulması önem taşıyor.

            DEPREME HAZIRLIK

            Deprem hazırlığının yalnızca deprem anında
            yapılacaklardan ibaret olmadığı belirtiliyor.

            Evlerde ağır eşyaların sabitlenmesi, acil durum
            çantası hazırlanması ve aile iletişim planının
            oluşturulması hazırlık açısından önem taşıyor.

            HABERİSTA olarak deprem gelişmelerini AFAD,
            Kandilli Rasathanesi ve diğer resmi açıklamalar
            üzerinden takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "11:55",

        gorsel:
            "images/deprem.jpeg",

        kaynak: "AFAD / Kandilli Rasathanesi"
    },


    /* =====================================================
       10 - KPSS
    ===================================================== */

    {
        id: 12,
        kategori: "Eğitim",

        baslik:
            "2026 KPSS Lisans Genel Yetenek-Genel Kültür sınavı yapıldı",

        spot:
            "2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu 6 Eylül Pazar günü gerçekleştirildi. Adaylar sınavın ardından soru kitapçığı, cevap anahtarı ve sonuç takvimini takip etmeye başladı.",

        icerik: `

            2026 KPSS LİSANS SINAVI GERÇEKLEŞTİRİLDİ

            Kamu kurumlarında görev almak isteyen adayların
            katıldığı 2026-KPSS Lisans Genel Yetenek-Genel
            Kültür oturumu 6 Eylül Pazar günü gerçekleştirildi.

            ÖSYM tarafından düzenlenen sınav için Türkiye
            genelindeki sınav merkezlerinde adaylar sınava girdi.

            SINAVDA GENEL YETENEK VE GENEL KÜLTÜR

            Sınavda adayların Genel Yetenek ve Genel Kültür
            alanlarındaki bilgileri ölçüldü.

            Türkçe, matematik, tarih, coğrafya ve vatandaşlık
            gibi alanlara ilişkin sorular adayların
            performansında belirleyici oldu.

            SINAV MERKEZLERİNDE YOĞUNLUK

            Sınav öncesinde birçok kentte sınav merkezlerinin
            çevresinde yoğunluk yaşandı.

            Adayların sınav saatinden önce binalarda hazır
            bulunması gerektiği için ulaşım planlaması
            önem taşıdı.

            SORULAR VE CEVAP ANAHTARI

            Sınavın ardından adayların en çok merak ettiği
            konular arasında soru kitapçığı ve cevap anahtarının
            yayımlanacağı tarih bulunuyor.

            ÖSYM tarafından yayımlanacak resmi dokümanlar
            üzerinden adaylar sınav performanslarını
            değerlendirebilecek.

            SONUÇLAR BEKLENİYOR

            Sınavın tamamlanmasının ardından adayların gözü
            sonuç takvimine çevrildi.

            KPSS puanları kamu kurumlarının personel
            alımlarında ve ilgili tercih süreçlerinde
            kullanılabiliyor.

            TERCİH SÜRECİ

            Adayların yalnızca KPSS puanına değil,
            başvuracakları kadroların özel şartlarına da
            dikkat etmesi gerekiyor.

            Mezuniyet, yaş ve diğer başvuru koşullarının
            tercih döneminde kontrol edilmesi önem taşıyor.

            HABERİSTA Eğitim Servisi olarak ÖSYM'nin
            açıklamalarını takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "10:15",

        gorsel:
            "images/kpss.jpeg",

        kaynak: "ÖSYM"
    },


    /* =====================================================
       11 - BEŞİKTAŞ FENERBAHÇE
    ===================================================== */

    {
        id: 11,
        kategori: "Spor",

        baslik:
            "Beşiktaş derbide Fenerbahçe'yi 2-1 mağlup etti",

        spot:
            "Trendyol Süper Lig'in 4. haftasındaki derbide Beşiktaş, Fenerbahçe'yi deplasmanda 2-1 mağlup ederek üç puanın sahibi oldu.",

        icerik: `

            DERBİDE KAZANAN BEŞİKTAŞ

            Trendyol Süper Lig'in 4. haftasında Fenerbahçe
            ile Beşiktaş karşı karşıya geldi.

            Kadıköy'de oynanan mücadelede iki takım da
            karşılaşmaya yüksek tempoyla başladı.

            FENERBAHÇE ÖNE GEÇTİ

            Mücadelenin ilk bölümünde Fenerbahçe'nin golüyle
            sarı-lacivertli ekip 1-0 öne geçti.

            Beşiktaş ise golün ardından oyundaki baskısını
            artırarak beraberlik için pozisyonlar geliştirdi.

            BEŞİKTAŞ EŞİTLİĞİ SAĞLADI

            Siyah-beyazlı takımın baskısı sonucunda
            Rıdvan Yılmaz'ın golüyle skor 1-1'e geldi.

            İlk yarının kalan bölümünde iki takım da
            üstünlük kurmak için mücadele etti.

            İKİNCİ YARIDA BEŞİKTAŞ ÖNE GEÇTİ

            İkinci yarıda karşılaşmanın temposu yükseldi.

            Beşiktaş'ın hücumları sonucunda Dusan Vlahovic'in
            attığı golle siyah-beyazlı ekip 2-1 öne geçti.

            FENERBAHÇE BERABERLİK İÇİN YÜKLENDİ

            Fenerbahçe kalan bölümde beraberlik golünü
            bulmak için baskısını artırdı.

            Ancak Beşiktaş savunması skor üstünlüğünü
            korumayı başardı.

            MAÇIN SONUCU

            Karşılaşmanın son düdüğüyle birlikte Beşiktaş
            sahadan 2-1 galip ayrıldı.

            Siyah-beyazlı ekip deplasmanda üç puan alırken
            Fenerbahçe sahasında mağlubiyet yaşadı.

            HABERİSTA Spor Servisi olarak Süper Lig'deki
            gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "00:20",

        gorsel:
            "images/bjkfb.jpeg",

        kaynak: "Spor Servisi"
    },


    /* =====================================================
       12 - ALTIN
    ===================================================== */

    {
        id: 10,
        kategori: "Ekonomi",

        baslik:
            "Altın fiyatlarında 6 Eylül hareketliliği",

        spot:
            "Hafta sonuna girilirken yatırımcıların gözü gram, çeyrek, yarım ve Cumhuriyet altını fiyatlarında. Küresel piyasalardaki gelişmeler altın fiyatlarının yönü açısından yakından takip ediliyor.",

        icerik: `

            ALTIN FİYATLARI GÜNDEMDE

            Altın piyasasındaki hareketlilik yatırımcıların
            gündemindeki yerini koruyor.

            Türkiye'de özellikle gram altın ve çeyrek altın
            fiyatları vatandaşlar tarafından yakından takip
            ediliyor.

            FİYATLARI ETKİLEYEN FAKTÖRLER

            Altın fiyatlarının oluşumunda küresel piyasalardaki
            ons altın fiyatı, döviz kuru, faiz beklentileri ve
            merkez bankalarının politikaları gibi birçok faktör
            etkili olabiliyor.

            GRAM ALTIN

            Gram altın Türkiye'de en fazla takip edilen
            değerli maden ürünlerinden biri.

            Gün içerisindeki fiyat değişimleri nedeniyle
            yatırımcılar alış ve satış fiyatlarını ayrı ayrı
            takip ediyor.

            ÇEYREK ALTIN

            Fiziki altın tarafında çeyrek altın da vatandaşların
            yakından takip ettiği ürünler arasında bulunuyor.

            Özellikle düğün sezonlarında çeyrek altına
            yönelik ilgi artabiliyor.

            KÜRESEL PİYASALAR

            ABD ekonomisine ilişkin veriler, faiz beklentileri
            ve merkez bankalarının kararları altın piyasasının
            yönü açısından önem taşıyor.

            YENİ HAFTA BEKLENİYOR

            Hafta sonunun ardından küresel piyasaların açılması
            ile altın fiyatlarının yeni haftadaki seyri
            yakından izlenecek.

            Yatırımcıların karar verirken yalnızca günlük
            fiyat hareketlerine değil, piyasa koşullarına
            ve kendi finansal durumlarına da dikkat etmesi
            önem taşıyor.

            HABERİSTA Ekonomi Servisi olarak altın piyasasındaki
            gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:30",

        gorsel:
            "images/altın.jpeg",

        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       13 - AKARYAKIT
    ===================================================== */

    {
        id: 9,
        kategori: "Ekonomi",

        baslik:
            "Akaryakıt fiyatları yeniden gündemde",

        spot:
            "Benzin, motorin ve LPG fiyatları küresel petrol piyasaları, döviz kuru ve vergi düzenlemeleri nedeniyle araç sahiplerinin gündemindeki yerini koruyor.",

        icerik: `

            AKARYAKIT FİYATLARI TAKİP EDİLİYOR

            Türkiye'de araç sahiplerinin yakından takip ettiği
            benzin, motorin ve LPG fiyatları gündemdeki yerini
            koruyor.

            Akaryakıt fiyatlarının oluşumunda uluslararası
            petrol fiyatları, döviz kuru ve vergiler gibi
            çeşitli faktörler etkili olabiliyor.

            PETROL FİYATLARININ ETKİSİ

            Küresel enerji piyasalarında yaşanan gelişmeler
            petrol fiyatlarında değişikliklere yol açabiliyor.

            Petrol fiyatındaki hareketlerin yanı sıra döviz
            kurundaki değişimler de Türkiye'deki akaryakıt
            piyasası açısından önem taşıyor.

            BENZİN VE MOTORİN

            Benzin ve motorin fiyatları bireysel araç sahipleri
            kadar ticari taşımacılık yapan işletmeler açısından
            da önemli bir maliyet kalemi.

            TAŞIMACILIK MALİYETLERİ

            Akaryakıt maliyetlerindeki değişimler taşımacılık
            sektörünü doğrudan etkileyebiliyor.

            Nakliye maliyetlerinde yaşanabilecek değişiklikler
            bazı ürünlerin tüketici fiyatlarına dolaylı olarak
            yansıyabiliyor.

            LPG FİYATLARI

            LPG kullanan araç sahipleri de istasyonlardaki
            güncel fiyatları takip ediyor.

            Vatandaşların fiyat değişiklikleri konusunda
            güvenilir ve güncel kaynakları kontrol etmesi
            önem taşıyor.

            HABERİSTA Ekonomi Servisi olarak akaryakıt
            piyasasındaki gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:10",

        gorsel:
            "images/yakıt.jpeg",

        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       14 - RUSYA TANK
    ===================================================== */

    {
        id: 8,
        kategori: "Dünya",

        baslik:
            "Rusya'da üniversitenin altında Nazi tankı bulundu",

        spot:
            "Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında II. Dünya Savaşı döneminden kalma Alman yapımı Panther V tankına ulaşıldığı bildirildi.",

        icerik: `

            KAZAN'DA TARİHİ KEŞİF

            Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında
            II. Dünya Savaşı döneminden kalma Alman yapımı bir
            Panther V tankına ulaşıldığı bildirildi.

            Tankın bir üniversite yerleşkesinde, uzun süredir
            toprağın altında bulunduğu belirtildi.

            TANK TOPRAKTAN ÇIKARILDI

            Çalışmalar sırasında ortaya çıkan metal parçalarının
            ardından bölgede daha ayrıntılı inceleme yapıldı.

            İncelemelerin sonucunda yapının savaş döneminden
            kalma bir tank olduğu belirlendi.

            PANTHER TANKLARI

            Panther tankları II. Dünya Savaşı sırasında Almanya
            tarafından kullanılan zırhlı araçlar arasında
            bulunuyordu.

            Tarihi araçların günümüzde bulunması askeri tarih
            açısından dikkat çekici kabul ediliyor.

            ÜNİVERSİTE ALANINDA BULUNMASI DİKKAT ÇEKTİ

            Tankın bir üniversite yerleşkesinde bulunması,
            keşfin dikkat çeken ayrıntılarından biri oldu.

            Uzmanların araç üzerinde yapacağı çalışmaların,
            tankın geçmişi ve bulunduğu bölge hakkında daha
            fazla bilgi sağlaması bekleniyor.

            TARİHİ ARAÇLARIN KORUNMASI

            II. Dünya Savaşı döneminden kalan askeri araçlar,
            dönemin teknolojisini ve askeri tarihini anlamak
            açısından önemli kaynaklar arasında bulunuyor.

            HABERİSTA Dünya Servisi olarak gelişmeleri
            takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:45",

        gorsel:
            "images/rusya ünüversite.jpeg",

        kaynak: "Dünya Servisi"
    },


    /* =====================================================
       15 - MXGP
    ===================================================== */

    {
        id: 7,
        kategori: "Spor",

        baslik:
            "MXGP şampiyonu Afyon'da belli oluyor",

        spot:
            "Dünya Motokros Şampiyonası'nın 2026 sezonundaki önemli duraklarından MXGP Türkiye'de final yarışları 6 Eylül Pazar günü Afyonkarahisar'da gerçekleştiriliyor.",

        icerik: `

            MXGP TÜRKİYE'DE HEYECAN

            Dünya Motokros Şampiyonası'nın önemli etaplarından
            MXGP Türkiye'de sezonun kritik yarışlarından biri
            Afyonkarahisar'da düzenleniyor.

            6 Eylül Pazar günü gerçekleştirilen final yarışları
            motor sporları takipçilerinin ilgisini çekiyor.

            AFYONKARAHİSAR'DA YARIŞ

            Afyonkarahisar Motor Sporları Merkezi,
            uluslararası motokros organizasyonlarına ev
            sahipliği yapan önemli pistlerden biri.

            Sporcular zorlu parkurda sezon puanlarını
            artırmak için mücadele ediyor.

            HIZ VE TEKNİK ÖNEMLİ

            Motokros yarışlarında yalnızca hız değil,
            virajlarda doğru çizginin seçilmesi, motosiklet
            kontrolü ve parkur şartlarına uyum da önem taşıyor.

            ŞAMPİYONLUK MÜCADELESİ

            Afyonkarahisar'daki yarışların şampiyona
            sıralaması açısından önem taşıması bekleniyor.

            Sezon boyunca toplanan puanlar genel klasmandaki
            sıralamayı belirlemede önemli rol oynuyor.

            TÜRKİYE'DE MOTOR SPORLARI

            MXGP Türkiye organizasyonu, Türkiye'de motor
            sporlarının tanıtımı açısından da dikkat çekiyor.

            Yarışların yanı sıra organizasyon alanında
            farklı etkinlikler de gerçekleştirilebiliyor.

            HABERİSTA Spor Servisi olarak MXGP Türkiye'deki
            gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:30",

        gorsel:
            "images/mxgp yarışması.jpeg",

        kaynak: "Türkiye Motosiklet Federasyonu"
    },


    /* =====================================================
       16 - AVRUPA EES
    ===================================================== */

    {
        id: 6,
        kategori: "Dünya",

        baslik:
            "Avrupa seyahatlerinde sınır kontrollerinde yeni dönem",

        spot:
            "Avrupa'ya seyahat edenleri ilgilendiren EES sınır kontrol sisteminde yeni dönem gündemde. Sistem kapsamında Schengen dış sınırlarında elektronik kayıt ve biyometrik kontrollerin kullanılması planlanıyor.",

        icerik: `

            AVRUPA'DA SINIR KONTROLLERİNDE DİJİTALLEŞME

            Avrupa'ya seyahat eden vatandaşları ilgilendiren
            sınır kontrol uygulamalarında dijitalleşme süreci
            devam ediyor.

            Avrupa Birliği'nin Entry/Exit System olarak
            adlandırdığı EES sistemi, Schengen bölgesinin
            dış sınırlarında giriş ve çıkışların elektronik
            olarak takip edilmesini amaçlıyor.

            PASAPORT DAMGASI SİSTEMİ DEĞİŞİYOR

            EES sisteminin uygulanmasıyla birlikte yolcuların
            giriş ve çıkış bilgilerinin elektronik olarak
            kaydedilmesi hedefleniyor.

            Sistem sayesinde sınır geçişlerinin daha düzenli
            şekilde kayıt altına alınması amaçlanıyor.

            BİYOMETRİK KONTROLLER

            Yeni sistem kapsamında belirli biyometrik
            bilgilerin sınır kontrol süreçlerinde kullanılması
            planlanıyor.

            Bu uygulamaların sınır kontrollerinde kimlik
            doğrulama sürecini desteklemesi hedefleniyor.

            TÜRKİYE'DEN SEYAHAT EDECEKLER

            Avrupa ülkelerine seyahat edecek Türk vatandaşlarının
            gidilecek ülkenin güncel giriş şartlarını kontrol
            etmesi önem taşıyor.

            Pasaport ve vize şartlarının yanı sıra sınır
            uygulamalarındaki değişikliklerin de seyahat
            öncesinde kontrol edilmesi gerekiyor.

            SINIR KAPILARINDA İŞLEM SÜRELERİ

            Yeni sistemlerin uygulanmaya başladığı dönemlerde
            sınır kapılarındaki işlem sürelerinin değişmesi
            mümkün olabilir.

            Yoğun seyahat dönemlerinde yolcuların sınır
            kontrolleri için yeterli zaman ayırması önem taşıyor.

            DİJİTAL SINIR DÖNEMİ

            Avrupa'da sınır yönetiminin daha fazla dijital
            sisteme taşınması bekleniyor.

            HABERİSTA Dünya Servisi olarak Avrupa'daki sınır
            uygulamalarına ilişkin gelişmeleri takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "08:15",

        gorsel:
            "images/asrupa seyhat.jpeg",

        kaynak: "Avrupa Birliği"
    },


    /* =====================================================
       17 - RESMİ GAZETE
    ===================================================== */

    {
        id: 5,
        kategori: "Son Dakika",

        baslik:
            "5 Eylül 2026 Resmî Gazete yayımlandı: Yeni kararlar, atamalar ve önemli düzenlemeler",

        spot:
            "5 Eylül 2026 tarihli Resmî Gazete yayımlandı. Kamu yönetimi, ekonomi, eğitim ve farklı alanları ilgilendiren kararlar ve düzenlemeler kamuoyuna duyuruldu.",

        icerik: `

            RESMÎ GAZETE YAYIMLANDI

            5 Eylül 2026 tarihli Resmî Gazete yayımlandı.

            Resmî Gazete'de yayımlanan kararlar, yönetmelikler,
            atamalar ve diğer düzenlemeler kamuoyuna duyuruldu.

            KAMU YÖNETİMİNE İLİŞKİN DÜZENLEMELER

            Kamu kurumlarının işleyişini ilgilendiren çeşitli
            düzenlemeler ve kararlar Resmî Gazete'de yer aldı.

            Düzenlemelerin kapsamı ve yürürlük tarihleri ilgili
            mevzuat metinlerinde belirtiliyor.

            ATAMA KARARLARI

            Resmî Gazete'nin önemli bölümleri arasında atama
            kararları da bulunuyor.

            Kamu kurumlarında görev değişikliklerine ilişkin
            kararlar yayımlandı.

            EKONOMİ VE KAMU MALİYESİ

            Ekonomi ve kamu maliyesine ilişkin çeşitli karar
            ve düzenlemeler de Resmî Gazete üzerinden
            kamuoyuna duyuruldu.

            EĞİTİM VE DİĞER ALANLAR

            Eğitim başta olmak üzere farklı alanları ilgilendiren
            düzenlemeler de yayımlanan kararlar arasında
            bulunuyor.

            VATANDAŞLAR RESMİ METİNLERİ KONTROL ETMELİ

            Vatandaşların kendilerini ilgilendiren kararların
            ayrıntılarını Resmî Gazete'deki resmi metinlerden
            kontrol etmesi önem taşıyor.

            HABERİSTA olarak yayımlanan kararların vatandaşlara
            etkilerini takip ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "15:20",

        gorsel:
            "images/ChatGPT Image 5 Eyl 2026 15_25_02.png",

        kaynak: "Resmî Gazete"
    },


    /* =====================================================
       18 - FİLENİN SULTANLARI
    ===================================================== */

    {
        id: 4,
        kategori: "Spor",

        baslik:
            "Filenin Sultanları Avrupa şampiyonluğu için sahada! Türkiye-İtalya finali bugün oynanacak",

        spot:
            "A Milli Kadın Voleybol Takımı Avrupa şampiyonluğu için İtalya karşısında sahaya çıkıyor. Türkiye ile İtalya arasındaki final mücadelesi İstanbul'da oynanacak.",

        icerik: `

            FİLENİN SULTANLARI FİNALDE

            A Milli Kadın Voleybol Takımı Avrupa Şampiyonası'nda
            şampiyonluk için sahaya çıkıyor.

            Türkiye'nin finaldeki rakibi İtalya oldu.

            Turnuvada finale kadar yükselen milli takım,
            şampiyonluk hedefiyle mücadele edecek.

            FİNALİN ADRESİ İSTANBUL

            Türkiye ile İtalya arasındaki final karşılaşması
            İstanbul'da oynanacak.

            Karşılaşma öncesinde milli takıma destek vermek
            isteyen taraftarların ilgisi dikkat çekiyor.

            ŞAMPİYONLUK HEDEFİ

            Filenin Sultanları turnuva boyunca gösterdiği
            performansla finale yükseldi.

            Final karşılaşmasında servis, blok, hücum ve
            savunma performanslarının maçın sonucunda
            belirleyici olması bekleniyor.

            TARAFTAR DESTEĞİ

            Türkiye'nin finale yükselmesi sosyal medyada da
            büyük ilgi gördü.

            Milli takım için çok sayıda destek mesajı paylaşılırken
            voleybolseverler final karşılaşmasına odaklandı.

            ŞAMPİYON BELLİ OLACAK

            Türkiye ile İtalya arasındaki finalin ardından
            Avrupa şampiyonu belli olacak.

            HABERİSTA Spor Servisi olarak karşılaşmanın
            gelişmelerini takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "01:30",

        gorsel:
            "images/AVRUPA.jpeg",

        kaynak: "Türkiye Voleybol Federasyonu"
    },


    /* =====================================================
       19 - PARA PİYASASI FONLARI
    ===================================================== */

    {
        id: 3,
        kategori: "Ekonomi",

        baslik:
            "Para piyasası fonlarında yeni dönem: Stopaj oranı yüzde 10'a çıkarıldı",

        spot:
            "Para piyasası fonlarına ilişkin stopaj düzenlemesi yatırımcıların gündemine geldi. Yeni düzenlemeyle birlikte stopaj oranındaki değişiklik yatırımcıların net getiri hesaplamalarını daha önemli hale getirdi.",

        icerik: `

            PARA PİYASASI FONLARINDA YENİ DÖNEM

            Para piyasası fonlarına ilişkin stopaj düzenlemesi
            yatırımcıların gündemindeki önemli başlıklardan biri
            oldu.

            Yapılan düzenlemeyle birlikte fon kazançlarına
            uygulanan stopaj oranında değişikliğe gidildi.

            YATIRIMCILARIN DİKKATİ FONLARDA

            Para piyasası fonları kısa vadeli yatırım ve
            likidite amacıyla yatırımcılar tarafından tercih
            edilebiliyor.

            Ancak fonların getirileri piyasa koşullarına göre
            değişebiliyor.

            STOPAJIN NET GETİRİYE ETKİSİ

            Stopaj oranındaki değişiklik, brüt getiri ile
            yatırımcının eline geçen net getiri arasındaki
            farkın daha dikkatli değerlendirilmesini gerektiriyor.

            Yatırımcıların fon seçerken vergi, risk, getiri
            ve yatırım süresini birlikte değerlendirmesi
            önem taşıyor.

            YATIRIM KARARI VERİRKEN

            Her yatırım ürününde olduğu gibi para piyasası
            fonlarında da risk ve getiri unsurlarının
            birlikte değerlendirilmesi gerekiyor.

            Yatırımcıların resmi düzenlemeleri ve fonların
            güncel belgelerini kontrol etmesi önem taşıyor.

            HABERİSTA Ekonomi Servisi olarak finans
            piyasalarındaki gelişmeleri takip ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "18:10",

        gorsel:
            "images/EKENOMİ.jpeg",

        kaynak: "Ekonomi Servisi"
    },


    /* =====================================================
       20 - YAŞLI / ENGELLİ AYLIĞI
    ===================================================== */

    {
        id: 2,
        kategori: "Gündem",

        baslik:
            "Eylül ayı yaşlı ve engelli aylıkları hesaplara yatırılmaya başlandı",

        spot:
            "Eylül ayına ilişkin yaşlı ve engelli aylığı ödemeleri vatandaşların gündeminde. Hak sahipleri ödemelerinin hesaplarına aktarılıp aktarılmadığını resmi kanallar üzerinden kontrol edebiliyor.",

        icerik: `

            EYLÜL AYI ÖDEMELERİ GÜNDEMDE

            Eylül ayına ilişkin yaşlı ve engelli aylığı
            ödemeleri vatandaşların takip ettiği konular
            arasında bulunuyor.

            Sosyal destek ödemelerinden yararlanan hak sahipleri,
            ödemelerin hesaplarına ne zaman aktarılacağını
            takip ediyor.

            YAŞLI AYLIĞI

            Yaşlı aylığı, mevzuatta belirtilen şartları
            sağlayan vatandaşlara sosyal destek kapsamında
            ödeniyor.

            Hak sahipliği için ilgili gelir ve diğer şartların
            karşılanması gerekiyor.

            ENGELLİ AYLIKLARI

            Engelli vatandaşlara yönelik sosyal destek ödemeleri
            de ilgili mevzuat kapsamında gerçekleştiriliyor.

            ÖDEMELER NASIL TAKİP EDİLİR?

            Hak sahipleri ödeme durumlarını ilgili resmi
            kanallar üzerinden kontrol edebiliyor.

            Ödeme konusunda sorun yaşayan vatandaşların
            ilgili kamu kurumlarına başvurması gerekiyor.

            SOSYAL DESTEKLERİN ÖNEMİ

            Sosyal destek ödemeleri, hak sahiplerinin aylık
            bütçelerini planlamalarında önemli bir rol
            oynayabiliyor.

            HABERİSTA olarak sosyal yardım ödemelerine ilişkin
            resmi açıklamaları takip ediyoruz.
        `,

        tarih: "5 Eylül 2026",
        saat: "10:27",

        gorsel:
            "images/GÜNDEM.jpeg",

        kaynak: "HABERİSTA Gündem"
    },


    /* =====================================================
       21 - PISA
    ===================================================== */

    {
        id: 1,
        kategori: "Eğitim",

        baslik:
            "PISA 2025 sonuçları için geri sayım: Sonuçlar 8 Eylül'de açıklanacak",

        spot:
            "PISA 2025 araştırmasının sonuçları için geri sayım başladı. Türkiye'nin eğitim performansına ilişkin sonuçların 8 Eylül'de açıklanması bekleniyor.",

        icerik: `

            PISA 2025 SONUÇLARI BEKLENİYOR

            Uluslararası Öğrenci Değerlendirme Programı olarak
            bilinen PISA araştırmasının 2025 sonuçları için
            geri sayım başladı.

            Araştırma, öğrencilerin farklı alanlardaki bilgi
            ve becerilerini uluslararası ölçekte değerlendiren
            önemli çalışmalardan biri.

            SONUÇLAR 8 EYLÜL'DE BEKLENİYOR

            PISA 2025 sonuçlarının 8 Eylül'de açıklanması
            bekleniyor.

            Sonuçların yayımlanmasıyla birlikte Türkiye'nin
            performansına ilişkin yeni veriler ortaya çıkacak.

            HANGİ ALANLAR DEĞERLENDİRİLİYOR?

            PISA araştırmasında öğrencilerin okuma becerileri,
            matematik ve fen alanlarındaki performansları
            değerlendiriliyor.

            Sonuçlar ülkelerin eğitim sistemlerini karşılaştırmak
            amacıyla da kullanılıyor.

            TÜRKİYE'NİN PERFORMANSI MERAK EDİLİYOR

            Yeni sonuçların açıklanmasının ardından Türkiye'nin
            önceki araştırmalardaki performansıyla karşılaştırma
            yapılması bekleniyor.

            Sonuçların değerlendirilmesinde öğrencilerin
            performansının yanı sıra sosyoekonomik koşullar
            ve eğitim imkanları gibi faktörlerin de dikkate
            alınması önem taşıyor.

            SONUÇLAR AÇIKLANDIKTAN SONRA

            Sonuçların açıklanmasının ardından Türkiye'nin
            sıralaması, puanları ve önceki dönemlerle
            karşılaştırmaları eğitim gündeminin önemli
            başlıklarından biri olacak.

            HABERİSTA Eğitim Servisi olarak PISA 2025
            sonuçlarını ve resmi açıklamaları takip ediyoruz.
        `,

        tarih: "6 Eylül 2026",
        saat: "09:42",

        gorsel:
            "images/PISA.jpeg",

        kaynak: "Eğitim Servisi"
    }

];


/* =========================================================
   HABERLERE OTOMATİK SLUG VE URL EKLE
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
            .toLocaleLowerCase("tr-TR") === temizKategori;

    });

}


/* =========================================================
   SON HABERLER
========================================================= */

function sonHaberleriGetir(adet) {

    const sayi = Number(adet) || 10;

    return haberler.slice(0, sayi);

}


/* =========================================================
   GLOBAL DEĞİŞKENLER
========================================================= */

window.haberler = haberler;

window.slugOlustur = slugOlustur;

window.haberSlugIleBul = haberSlugIleBul;

window.haberIdIleBul = haberIdIleBul;

window.haberKategoriIleBul = haberKategoriIleBul;

window.sonHaberleriGetir = sonHaberleriGetir;


/* =========================================================
   KONTROLLER
========================================================= */

console.log(
    "Haberİsta:",
    haberler.length,
    "haber başarıyla yüklendi."
);


/* =========================================================
   DUPLICATE ID KONTROLÜ
========================================================= */

const kullanilanIdler = new Set();

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

const kullanilanSluglar = new Set();

haberler.forEach(function (haber) {

    if (kullanilanSluglar.has(haber.slug)) {

        console.error(
            "Haberİsta: DUPLICATE SLUG bulundu:",
            haber.slug
        );

    }

    kullanilanSluglar.add(haber.slug);

});


/* =========================================================
   HABER URL'LERİ
========================================================= */

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
