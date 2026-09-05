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


   const haberler = [

    {
        id: 2,

        kategori: "Spor",

        baslik:
            "Filenin Sultanları Avrupa şampiyonluğu için sahada! Türkiye-İtalya finali bugün oynanacak",

        spot:
            "A Milli Kadın Voleybol Takımı, Trendyol 2026 CEV Kadınlar Avrupa Voleybol Şampiyonası'nda tarihi bir final karşılaşmasına çıkıyor. Yarı finalde Sırbistan'ı 3-0 mağlup ederek finale yükselen Filenin Sultanları, şampiyonluk maçında İtalya ile karşı karşıya gelecek. İstanbul'daki Sinan Erdem Spor Salonu'nda oynanacak dev mücadele bugün saat 16.00'da başlayacak.",

        content: `

            <p>
                Türkiye'nin gözü bugün İstanbul'da oynanacak dev mücadelede olacak.
                A Milli Kadın Voleybol Takımı, Trendyol 2026 CEV Kadınlar Avrupa
                Voleybol Şampiyonası finalinde İtalya ile karşı karşıya gelecek.
                Filenin Sultanları, turnuvanın en kritik karşılaşmasında Avrupa
                şampiyonluğu için sahaya çıkacak.
            </p>

            <p>
                Ay-yıldızlı ekip, turnuvada gösterdiği başarılı performansın ardından
                finale yükselerek şampiyonluk yolunda son adımı atmaya hazırlanıyor.
                Türkiye, yarı final karşılaşmasında güçlü rakibi Sırbistan'ı
                3-0 mağlup ederek adını finale yazdırdı. Bu sonuçla birlikte
                milliler, Avrupa'nın en önemli voleybol organizasyonlarından
                birinde bir kez daha zirve mücadelesi verme hakkı kazandı.
            </p>

            <h2>Finalin adresi Sinan Erdem Spor Salonu</h2>

            <p>
                Türkiye ile İtalya arasındaki Avrupa Şampiyonası finali,
                İstanbul'daki Sinan Erdem Spor Salonu'nda oynanacak.
                Karşılaşmanın başlama saati 16.00 olarak açıklandı.
                İstanbul'un ev sahipliği yaptığı organizasyonda tribünlerin
                büyük ölçüde dolması ve milli takıma yoğun destek verilmesi
                bekleniyor.
            </p>

            <p>
                Türkiye'nin kendi seyircisi önünde oynayacağı final,
                organizasyonun en önemli karşılaşması olacak.
                Turnuva boyunca Filenin Sultanları'nın maçlarını yakından
                takip eden taraftarların final karşılaşmasında da milli
                takıma büyük destek vermesi bekleniyor.
            </p>

            <p>
                Mücadelenin Türkiye açısından ayrı bir önemi daha bulunuyor.
                Avrupa Şampiyonası'nı kendi taraftarı önünde zirvede tamamlamak
                isteyen ay-yıldızlı ekip, finalde İtalya karşısında
                şampiyonluk kupasını kaldırmayı hedefliyor.
            </p>

            <h2>Filenin Sultanları final yolunda neler yaptı?</h2>

            <p>
                Türkiye, Avrupa Şampiyonası boyunca zorlu bir mücadele verdi.
                Grup aşamasının ardından eleme turlarında yoluna devam eden
                ay-yıldızlı takım, son 16 turunda Azerbaycan'ı mağlup ederek
                çeyrek finale yükseldi.
            </p>

            <p>
                Çeyrek finalde Almanya ile karşılaşan milliler,
                rakibini 3-1 yenerek adını son dört takım arasına yazdırdı.
                Karşılaşmanın özellikle kritik bölümlerinde gösterilen
                mücadele ve takım oyunu Türkiye'nin yarı finale yükselmesini
                sağladı.
            </p>

            <p>
                Almanya karşısında alınan galibiyet aynı zamanda Türkiye'ye
                2027 FIVB Dünya Kupası için de önemli bir avantaj sağladı.
                Avrupa Şampiyonası'nda son dört takım arasına kalan
                ay-yıldızlı ekip, Dünya Kupası biletini de garantileyen
                takımlar arasında yer aldı.
            </p>

            <h2>Yarı finalde rakip Sırbistan oldu</h2>

            <p>
                Türkiye'nin yarı finaldeki rakibi ise Avrupa voleybolunun
                önemli ekiplerinden Sırbistan oldu. İki takımın karşılaşması
                büyük bir heyecana sahne olması beklenen mücadelelerden
                biri olarak öne çıktı.
            </p>

            <p>
                Ancak Filenin Sultanları karşılaşmaya son derece etkili
                başladı. Türkiye, maç boyunca oyunun kontrolünü büyük
                ölçüde elinde tutarak Sırbistan'a set vermedi.
                Ay-yıldızlı ekip, mücadeleyi 3-0 kazanarak Avrupa
                Şampiyonası'nda finale yükseldi.
            </p>

            <p>
                Sırbistan karşısında alınan net galibiyet, Türkiye'nin
                turnuvadaki şampiyonluk hedefini daha da güçlendirdi.
                Milliler, yarı finalde ortaya koyduğu oyunla final öncesi
                moral depolarken gözler doğrudan İtalya ile oynanacak
                şampiyonluk maçına çevrildi.
            </p>

            <h2>Finalde rakip İtalya</h2>

            <p>
                Türkiye'nin finaldeki rakibi İtalya oldu.
                Avrupa voleybolunun son yıllardaki en güçlü ekiplerinden
                biri olarak öne çıkan İtalya, turnuvada finale kadar
                yükselerek şampiyonluk mücadelesine ortak oldu.
            </p>

            <p>
                Böylece Avrupa Şampiyonası'nın finalinde iki güçlü milli
                takım karşı karşıya gelecek. Türkiye bir tarafta kendi
                seyircisi önünde Avrupa'nın zirvesine çıkmak isterken,
                İtalya da kupayı kazanmak için sahaya çıkacak.
            </p>

            <p>
                Final karşılaşması yalnızca iki takım arasındaki bir
                mücadele olmayacak. Aynı zamanda Avrupa kadın voleybolunun
                en güçlü ekiplerinden ikisinin sezonun en önemli
                karşılaşmalarından birinde karşı karşıya gelmesi anlamına
                geliyor.
            </p>

            <h2>Türkiye'nin en büyük kozlarından biri Vargas</h2>

            <p>
                Filenin Sultanları'nın turnuva boyunca en fazla dikkat
                çeken isimlerinden biri Melissa Vargas oldu.
                Hücumdaki etkinliği, servisleri ve kritik anlarda
                ürettiği sayılarla takımın önemli silahlarından biri
                olan Vargas'ın finaldeki performansı da büyük önem taşıyor.
            </p>

            <p>
                Vargas'ın yanı sıra Türkiye'nin kadrosundaki deneyimli
                oyuncular ve genç isimlerin birlikte ortaya koyduğu
                performans, millilerin finale kadar yükselmesinde önemli
                rol oynadı.
            </p>

            <p>
                Takımın kaptanı Eda Erdem'in tecrübesi, savunmadaki
                organizasyon ve file üzerindeki mücadele de Türkiye'nin
                güçlü yönleri arasında bulunuyor.
            </p>

            <h2>Takım oyunu ön plana çıkıyor</h2>

            <p>
                Filenin Sultanları'nın turnuvadaki başarısının yalnızca
                bireysel performanslara bağlı olmadığı görülüyor.
                Türkiye, özellikle kritik karşılaşmalarda takım halinde
                hareket ederek rakiplerinin oyun planlarını bozmayı başardı.
            </p>

            <p>
                Servis karşılamadaki istikrar, blok organizasyonu,
                savunmadaki mücadele ve hücumdaki çeşitlilik Türkiye'nin
                finale ulaşmasında belirleyici unsurlar arasında yer aldı.
            </p>

            <p>
                Teknik ekip tarafından maç içerisinde yapılan değişiklikler
                ve rakibin oyununa göre geliştirilen taktikler de
                millilerin turnuvada ilerlemesine katkı sağladı.
            </p>

            <h2>Türkiye'nin hedefi Avrupa şampiyonluğu</h2>

            <p>
                Artık Filenin Sultanları için turnuvada geriye yalnızca
                bir maç kaldı. Türkiye, Avrupa Şampiyonası'nı kupayla
                tamamlamak istiyor.
            </p>

            <p>
                Finale kadar gelen süreçte elde edilen sonuçlar,
                millilerin şampiyonluk için ne kadar iddialı olduğunu
                ortaya koydu. Ancak final karşılaşması yeni bir mücadele
                olacak ve daha önce oynanan maçların sonuçları sahadaki
                mücadeleyi doğrudan belirlemeyecek.
            </p>

            <p>
                Türkiye'nin finalde özellikle ilk setten itibaren
                oyunun temposunu kontrol etmesi, servislerde baskı
                oluşturması ve rakibin hücumlarını blok-savunma sistemiyle
                durdurması büyük önem taşıyor.
            </p>

            <h2>İtalya karşısında kritik detaylar</h2>

            <p>
                İtalya'nın finalde Türkiye karşısında güçlü servislerle
                oyunu bozmayı ve hücum temposunu yükseltmeyi hedeflemesi
                bekleniyor. Türkiye'nin ise servis karşılamadaki
                istikrarını koruması ve hücum organizasyonlarını
                çeşitlendirmesi gerekecek.
            </p>

            <p>
                Karşılaşmanın en kritik bölümlerinden birinin uzun
                ralliler olması bekleniyor. İki takımın da savunmada
                dirençli olması halinde maçın bazı setlerinde uzun
                ralliler yaşanabilir.
            </p>

            <p>
                Özellikle setlerin son bölümünde yapılacak servisler,
                blok tercihleri ve hücum kararları karşılaşmanın kaderini
                belirleyebilecek ayrıntılar arasında bulunuyor.
            </p>

            <h2>Sinan Erdem'de büyük heyecan</h2>

            <p>
                İstanbul'daki Sinan Erdem Spor Salonu'nun final günü
                büyük bir heyecana sahne olması bekleniyor.
                Milli takımın taraftarları karşılaşma öncesinde
                salon çevresinde ve tribünlerde yoğunluk oluşturacak.
            </p>

            <p>
                Türkiye'nin kendi seyircisi önünde Avrupa Şampiyonası
                finaline çıkacak olması organizasyona ayrı bir atmosfer
                kazandırıyor. Tribünlerden gelecek desteğin maç sırasında
                millilerin motivasyonuna katkı sağlaması bekleniyor.
            </p>

            <p>
                Türkiye açısından finalin bir başka önemi ise
                organizasyonun ev sahibi atmosferinde oynanacak olması.
                Taraftarların desteği, özellikle maçın kritik
                bölümlerinde takım için önemli bir avantaj oluşturabilir.
            </p>

            <h2>Maç saat kaçta?</h2>

            <p>
                Türkiye ile İtalya arasındaki Avrupa Şampiyonası finali
                6 Eylül 2026 Pazar günü saat 16.00'da başlayacak.
                Karşılaşma İstanbul'daki Sinan Erdem Spor Salonu'nda
                oynanacak.
            </p>

            <p>
                Voleybolseverler için günün en önemli spor karşılaşmalarından
                biri olması beklenen finalde Türkiye, Avrupa şampiyonluğu
                için sahaya çıkacak.
            </p>

            <h2>Türkiye finale nasıl geldi?</h2>

            <p>
                Filenin Sultanları turnuvanın grup aşamasından itibaren
                istikrarlı bir görüntü ortaya koydu. Grup karşılaşmalarının
                ardından eleme turlarına kalan Türkiye, son 16 turunda
                Azerbaycan ile karşılaştı.
            </p>

            <p>
                Bu mücadeleyi kazanarak çeyrek finale yükselen ay-yıldızlı
                ekip, burada Almanya ile karşı karşıya geldi.
                Türkiye, Almanya karşısında 3-1'lik galibiyet elde ederek
                yarı finale çıktı.
            </p>

            <p>
                Yarı finalde ise Sırbistan ile karşılaşan milliler,
                rakibine set vermeden 3-0 galip geldi.
                Bu sonuç Türkiye'yi doğrudan Avrupa Şampiyonası finaline
                taşıdı.
            </p>

            <h2>2027 Dünya Kupası bileti de geldi</h2>

            <p>
                Türkiye'nin Avrupa Şampiyonası'ndaki başarısı yalnızca
                final biletiyle sınırlı kalmadı.
                Almanya karşısında alınan çeyrek final galibiyetinin
                ardından milliler, 2027 FIVB Dünya Kupası'nda mücadele
                etme hakkını da elde etti.
            </p>

            <p>
                Avrupa Şampiyonası'nda son dört takım arasında yer alan
                Türkiye, organizasyonda elde ettiği derece sayesinde
                Dünya Kupası yolunu da açmış oldu.
            </p>

            <p>
                2027 FIVB Dünya Kupası'nın 20 Ağustos-5 Eylül 2027
                tarihleri arasında ABD ve Kanada'da düzenlenmesi planlanıyor.
                Türkiye böylece Avrupa Şampiyonası'ndaki başarısını
                bir sonraki büyük uluslararası organizasyona da taşıyacak.
            </p>

            <h2>Şampiyonluk için son maç</h2>

            <p>
                Şimdi ise tüm dikkatler İtalya ile oynanacak finale çevrildi.
                Türkiye'nin turnuva boyunca gösterdiği performansı
                kupayla taçlandırabilmesi için finalde bir galibiyet
                daha alması gerekiyor.
            </p>

            <p>
                Millilerin final öncesinde en büyük hedefi,
                karşılaşmaya konsantre olmak ve turnuva boyunca
                uyguladığı oyun planını sahaya yansıtmak olacak.
                Teknik ekip ve oyuncular için uzun turnuva maratonunun
                en önemli karşılaşması geride kaldı.
            </p>

            <p>
                Avrupa Şampiyonası'nın finalinde alınacak sonuç,
                Türkiye'nin turnuvadaki derecesini belirleyecek.
                Şampiyonluk gelmesi halinde Filenin Sultanları
                Avrupa'nın zirvesine çıkacak ve büyük bir başarıya
                daha imza atacak.
            </p>

            <h2>Türkiye'nin gözü kupada</h2>

            <p>
                Ay-yıldızlı takım için artık hesaplar değil,
                sahadaki performans belirleyici olacak.
                Türkiye'nin servis karşılamadan hücuma,
                bloktan savunmaya kadar tüm alanlarda yüksek
                konsantrasyonla mücadele etmesi bekleniyor.
            </p>

            <p>
                Özellikle karşılaşmanın başlangıcı büyük önem taşıyor.
                İlk seti kazanarak psikolojik üstünlük elde etmek,
                finalin geri kalanında Türkiye'ye önemli bir avantaj
                sağlayabilir.
            </p>

            <p>
                Bununla birlikte İtalya gibi güçlü bir rakibe karşı
                mücadelede maçın herhangi bir bölümünde yaşanabilecek
                küçük bir konsantrasyon kaybı bile setin sonucunu
                değiştirebilir. Bu nedenle millilerin karşılaşma boyunca
                disiplinli bir oyun ortaya koyması gerekiyor.
            </p>

            <h2>Voleybolseverler ekran başında olacak</h2>

            <p>
                Türkiye'de milyonlarca voleybolseverin final karşılaşmasını
                takip etmesi bekleniyor. Avrupa Şampiyonası boyunca
                milli takıma verilen büyük destek, final karşılaşması
                öncesinde de devam edecek.
            </p>

            <p>
                Sosyal medyada da Türkiye-İtalya finalinin günün en çok
                konuşulan spor başlıklarından biri olması bekleniyor.
                Taraftarlar maç öncesinde milli takıma destek mesajları
                paylaşırken, karşılaşma sonrasında oluşacak tablo da
                büyük merak konusu olacak.
            </p>

            <h2>Final öncesi son durum</h2>

            <p>
                Türkiye final öncesinde moral olarak oldukça yüksek bir
                noktada bulunuyor. Sırbistan karşısında alınan 3-0'lık
                galibiyet, takımın finale güçlü bir şekilde gelmesini
                sağladı.
            </p>

            <p>
                İtalya ise Avrupa Şampiyonası'nda finale kadar yükselerek
                Türkiye'nin karşısına çıkmaya hak kazandı.
                Böylece organizasyonun en güçlü iki ekiplerinden biri
                şampiyonluk kupasını İstanbul'da kaldıracak.
            </p>

            <p>
                Finalin sonucunun ne olacağı ise bugün saat 16.00'dan
                itibaren sahada belli olacak.
            </p>

            <h2>Şampiyonluk için geri sayım başladı</h2>

            <p>
                Filenin Sultanları'nın Avrupa Şampiyonası finali için
                geri sayım başladı. Türkiye, kendi seyircisinin önünde
                İtalya karşısında tarih yazmak ve Avrupa'nın zirvesine
                çıkmak istiyor.
            </p>

            <p>
                Uzun turnuva maratonunun ardından artık bütün gözler
                Sinan Erdem Spor Salonu'nda olacak. Türkiye ile İtalya
                arasındaki final, kadın voleybolunda Avrupa'nın
                en büyük kupasının sahibini belirleyecek.
            </p>

            <p>
                Milli takımın finale kadar gösterdiği mücadele,
                Türkiye'deki voleybol heyecanını yeniden zirveye taşıdı.
                Şimdi sırada son maç ve şampiyonluk hedefi bulunuyor.
            </p>

            <h2>Maçın ardından ne olacak?</h2>

            <p>
                Türkiye'nin finali kazanması halinde Filenin Sultanları
                Avrupa şampiyonu olacak. Karşılaşmanın ardından kupa
                töreni düzenlenecek ve turnuvanın en başarılı oyuncuları
                da ödüllendirilecek.
            </p>

            <p>
                Türkiye'nin finali kaybetmesi durumunda ise milliler
                Avrupa Şampiyonası'nı ikinci sırada tamamlayacak.
                Ancak hangi sonuç alınırsa alınsın, Türkiye'nin finale
                kadar yükselmesi ve 2027 Dünya Kupası'na katılma hakkı
                elde etmesi önemli bir başarı olarak kayıtlara geçecek.
            </p>

            <h2>Son söz: Herkesin gözü finalde</h2>

            <p>
                Avrupa Şampiyonası'nda finale kadar gelen Filenin Sultanları,
                şimdi sezonun en önemli karşılaşmalarından birine çıkıyor.
                Türkiye ile İtalya arasındaki mücadele saat 16.00'da
                başlayacak.
            </p>

            <p>
                Türkiye'nin hedefi belli: Avrupa'nın zirvesine çıkmak,
                kupayı kazanmak ve turnuvayı şampiyon olarak tamamlamak.
                Bunun için sahada son topa kadar mücadele edilecek.
            </p>

            <p>
                Türk voleybolunun son yıllardaki yükselişinin önemli
                temsilcilerinden olan Filenin Sultanları,
                İstanbul'daki finalde bir kez daha milyonların karşısına
                çıkacak. Şampiyonluk yolundaki son engel İtalya olacak.
            </p>

            <p>
                Gözler Sinan Erdem Spor Salonu'nda, kulaklar milli takımın
                mücadelesinde olacak. Türkiye'nin Avrupa Şampiyonası
                finalindeki kaderi bugün belli olacak.
            </p>

            <p>
                <strong>
                    Türkiye-İtalya Avrupa Şampiyonası finali:
                    6 Eylül 2026 Pazar, saat 16.00.
                </strong>
            </p>

        `,

        image:
            "images/AVRUPA.jpeg",

        date: "6 Eylül 2026",

        time: "01:30",

        views: 58421,

        source:
            "Anadolu Ajansı / TRT Haber"
    }

];


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
