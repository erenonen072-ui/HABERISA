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
   HABERİSTA
   6 EYLÜL 2026 - UZUN HABERLER
========================================================= */

const yeniHaberler = [

    /* =====================================================
       1 - GÜNDEM
    ===================================================== */
    {
        id: 11,
        kategori: "Gündem",
        baslik: "4 il için sel ve heyelan uyarısı",
        spot: "6 Eylül 2026 tarihinde bazı bölgelerde etkili olması beklenen yağışlar nedeniyle 4 il için sel ve heyelan uyarısı yapıldı. Yetkililer, vatandaşları özellikle kuvvetli yağış sırasında dikkatli olmaları konusunda uyardı.",
        icerik: `
            Türkiye'nin bazı bölgelerinde etkili olması beklenen yağışlı hava nedeniyle
            vatandaşlara yönelik uyarılar gündeme geldi. Meteorolojik değerlendirmelerde
            yağışların bazı bölgelerde yerel olarak kuvvetlenebileceği belirtilirken,
            özellikle sel ve heyelan riski bulunan alanlarda yaşayan vatandaşların
            dikkatli olması istendi.

            6 Eylül Pazar günü itibarıyla hava durumundaki değişiklikler özellikle
            ulaşım, tarım ve günlük yaşam açısından yakından takip ediliyor. Kısa sürede
            etkili olan kuvvetli yağışlar, şehir merkezlerinde su birikintilerine,
            kırsal bölgelerde ise ulaşım sorunlarına neden olabiliyor.

            Yetkililer tarafından yapılan değerlendirmelerde vatandaşların meteorolojik
            uyarıları takip etmeleri ve zorunlu olmadıkça riskli bölgelerde bulunmamaları
            gerektiği vurgulanıyor. Özellikle dere yatakları, su kanalları, eğimli araziler
            ve daha önce heyelan yaşanan bölgeler için ekstra dikkat çağrısı yapılıyor.

            Uzmanlara göre son yıllarda kısa süre içerisinde yüksek miktarda yağış
            bırakabilen hava sistemleri, özellikle altyapının yetersiz olduğu bölgelerde
            ani su baskınlarına yol açabiliyor. Bu nedenle yağış sırasında araç kullanacak
            vatandaşların da güzergahlarını dikkatli seçmeleri önem taşıyor.

            SEL VE SU BASKINI RİSKİ

            Kuvvetli yağış sırasında suyun hızlı şekilde yükselmesi özellikle dere
            yatakları ve alçak bölgelerde risk oluşturabiliyor. Vatandaşların yağış
            sırasında araçlarını su birikintilerinin bulunduğu alanlarda bırakmamaları,
            mümkün olduğunca güvenli ve yüksek noktalarda bulunmaları tavsiye ediliyor.

            HEYELAN RİSKİNE DİKKAT

            Yağışın uzun süre devam ettiği eğimli bölgelerde toprak hareketleri
            meydana gelebiliyor. Bu nedenle yamaç ve dağlık alanlarda bulunan yolların
            kullanılması sırasında dikkatli olunması gerekiyor.

            Yetkililer, hava koşullarının bölgeden bölgeye değişebileceğini belirterek
            vatandaşların resmi kurumlardan yapılan güncel açıklamaları takip etmelerini
            öneriyor.

            HABERİSTA olarak gelişmeleri ve hava koşullarına ilişkin yeni uyarıları
            takip ediyoruz. Yeni bir uyarı yapılması halinde haberimiz güncellenecektir.
        `,
        tarih: "6 Eylül 2026",
        saat: "12:10",
        gorsel: "images/SEL-HEYELAN.jpeg",
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
            Türkiye'nin deprem kuşağında yer alması nedeniyle ülke genelinde meydana gelen
            sarsıntılar vatandaşlar tarafından yakından takip ediliyor. AFAD ve Kandilli
            Rasathanesi tarafından paylaşılan deprem verileri gün içerisinde düzenli olarak
            kontrol ediliyor.

            6 Eylül 2026 itibarıyla Türkiye'nin farklı bölgelerinde çeşitli büyüklüklerde
            depremler meydana gelirken, vatandaşların en çok merak ettiği konular arasında
            sarsıntıların merkez üssü, büyüklüğü ve derinliği bulunuyor.

            Deprem verileri resmi kurumların internet siteleri ve mobil uygulamaları
            üzerinden vatandaşlarla paylaşılabiliyor. Özellikle sosyal medya üzerinden
            yayılan doğrulanmamış bilgilerin aksine resmi kaynaklardan açıklanan verilerin
            dikkate alınması önem taşıyor.

            DEPREM SONRASI NE YAPILMALI?

            Uzmanlar, deprem sırasında panik yapılmaması gerektiğini ve mümkün olduğunca
            güvenli bir noktaya geçilmesini öneriyor. Bina içerisinde bulunan kişilerin
            camlardan, balkonlardan ve devrilebilecek eşyalardan uzak durması önem taşıyor.

            Deprem sonrasında ise binanın güvenliği konusunda şüphe oluşması halinde
            vatandaşların binaya tekrar girmemesi gerekiyor. Hasarlı binalardan uzak
            durulması ve yetkililerin açıklamalarının takip edilmesi gerekiyor.

            TÜRKİYE'DE DEPREM GERÇEĞİ

            Türkiye'nin farklı bölgelerinde aktif fay hatlarının bulunması nedeniyle
            deprem riski uzun yıllardır ülkenin önemli gündem maddelerinden biri olarak
            öne çıkıyor. Uzmanlar, deprem riskine karşı sadece deprem sonrasında değil,
            deprem gerçekleşmeden önce de hazırlıklı olunması gerektiğini vurguluyor.

            Evlerde ağır eşyaların sabitlenmesi, acil durum çantasının hazırlanması,
            aile bireyleriyle toplanma alanının belirlenmesi ve acil durum iletişim
            planının oluşturulması alınabilecek önlemler arasında yer alıyor.

            Vatandaşların güncel deprem bilgileri için AFAD ve Kandilli Rasathanesi gibi
            resmi kaynakları takip etmesi öneriliyor.

            HABERİSTA olarak Türkiye'deki son deprem gelişmelerini ve resmi açıklamaları
            takip etmeye devam ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "11:55",
        gorsel: "images/DEPREM.jpeg",
        kaynak: "AFAD / Kandilli Rasathanesi"
    },


    /* =====================================================
       3 - EĞİTİM
    ===================================================== */
    {
        id: 13,
        kategori: "Eğitim",
        baslik: "2026 KPSS Lisans sınavı bugün yapılıyor",
        spot: "2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu 6 Eylül Pazar günü gerçekleştirildi. Milyonlarca aday kamu personeli olabilmek için sınav merkezlerinde ter döktü.",
        icerik: `
            Kamu kurumlarında görev almak isteyen binlerce adayın uzun süredir hazırlandığı
            2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumu 6 Eylül Pazar günü
            gerçekleştirildi.

            ÖSYM tarafından düzenlenen sınava Türkiye genelindeki sınav merkezlerinde
            adaylar katıldı. Sınav öncesinde adaylar, sınav binalarının önünde yoğunluk
            oluştururken görevliler de sınav sürecinin düzenli şekilde yürütülmesi için
            gerekli hazırlıkları tamamladı.

            2026-KPSS Lisans Genel Yetenek-Genel Kültür oturumuna 1 milyon 708 bin 329
            adayın başvurduğu açıklandı. Adaylar sınavda Genel Yetenek ve Genel Kültür
            testlerinden soruları yanıtladı. Sınav 120 sorudan oluşurken adaylara
            130 dakika süre verildi. :contentReference[oaicite:2]{index=2}

            SINAVDA YOĞUNLUK

            Sınavın gerçekleştirildiği kentlerde sabah saatlerinden itibaren hareketlilik
            yaşandı. Adaylar sınav saatinden önce sınav binalarına gelirken bazı bölgelerde
            ulaşım yoğunluğu meydana geldi.

            ÖSYM'nin sınav kuralları gereği adayların sınav binalarına belirlenen saatten
            sonra alınmaması nedeniyle birçok aday sınav merkezlerine erken gelmeyi tercih etti.

            SINAV SONUÇLARI MERAK EDİLİYOR

            Sınavın tamamlanmasının ardından adayların en çok merak ettiği konu sonuçların
            ne zaman açıklanacağı oldu. Adaylar ÖSYM'nin sonuç takvimini takip ederek
            sonuçların açıklanacağı tarihi öğrenebilecek.

            KPSS puanı, kamu kurumlarında yapılacak çeşitli personel alımlarında adayların
            değerlendirilmesinde kullanılan önemli kriterlerden biri olarak öne çıkıyor.

            SINAV SONRASI SÜREÇ

            Sınavın tamamlanmasıyla birlikte adaylar artık sonuç ve tercih dönemine
            odaklanacak. Alınacak puanların ardından ilgili kamu kurumlarının ilanları
            takip edilecek.

            Adayların tercih döneminde puanlarının yanı sıra başvuru şartlarını,
            mezuniyet durumlarını ve kadroların özel koşullarını dikkatli şekilde
            incelemesi gerekiyor.

            ÖSYM tarafından yayımlanan soru kitapçığı ve cevap anahtarının ardından
            adaylar kendi performanslarını da değerlendirme fırsatı buldu. :contentReference[oaicite:3]{index=3}

            HABERİSTA olarak KPSS sonuçları ve tercih sürecine ilişkin gelişmeleri
            takip etmeye devam edeceğiz.
        `,
        tarih: "6 Eylül 2026",
        saat: "10:15",
        gorsel: "images/KPSS-LISANS.jpeg",
        kaynak: "ÖSYM / AA"
    },


    /* =====================================================
       4 - SPOR
    ===================================================== */
    {
        id: 14,
        kategori: "Spor",
        baslik: "Beşiktaş derbide Fenerbahçe'yi 2-1 mağlup etti",
        spot: "Trendyol Süper Lig'in 4. haftasındaki dev derbide Beşiktaş, deplasmanda Fenerbahçe'yi 2-1 mağlup ederek önemli bir galibiyete imza attı.",
        icerik: `
            Trendyol Süper Lig'in 4. haftası dev bir derbiye sahne oldu. Fenerbahçe ile
            Beşiktaş, Kadıköy'de karşı karşıya geldi. Büyük mücadeleye sahne olan karşılaşmayı
            Beşiktaş 2-1 kazanarak deplasmandan üç puanla ayrıldı.

            Karşılaşmada ilk gol Fenerbahçe'den geldi. Sarı-lacivertli takımın savunma
            oyuncusu Milan Skriniar'ın attığı golle Fenerbahçe mücadelede 1-0 öne geçti.

            Ancak Beşiktaş kısa süre içerisinde oyunun kontrolünü yeniden ele geçirdi.
            Siyah-beyazlı ekip Rıdvan Yılmaz'ın golüyle skoru 1-1'e getirdi.

            İkinci yarıda iki takım da galibiyet için önemli fırsatlar yakaladı.
            Mücadelenin ilerleyen bölümünde Beşiktaş'ın yıldız oyuncusu Dusan Vlahovic
            sahneye çıktı ve siyah-beyazlı ekibi 2-1 öne geçiren golü kaydetti.

            Karşılaşmanın kalan bölümünde Fenerbahçe beraberlik golünü bulmak için
            baskısını artırdı. Ancak Beşiktaş savunması skoru korumayı başardı.

            Son düdüğün ardından Beşiktaş sahadan 2-1 galip ayrıldı. Böylece siyah-beyazlı
            ekip sezonun önemli deplasman maçlarından birinde üç puanı hanesine yazdırdı.
            Maçın golleri ve skor bilgisi güncel spor kaynakları tarafından da doğrulandı.
            :contentReference[oaicite:4]{index=4}

            DERBİDE BÜYÜK HEYECAN

            Karşılaşma boyunca iki takım taraftarları da takımlarına büyük destek verdi.
            Kadıköy'deki atmosfer maçın önemini daha da artırırken, futbolcuların
            mücadelesi tribünlerdeki heyecanı yükseltti.

            Beşiktaş'ın geriye düştükten sonra maçı çevirmesi ise karşılaşmanın
            dikkat çeken noktalarından biri oldu.

            VLAHOVIC'TEN KRİTİK GOL

            Siyah-beyazlı takım adına maçın en önemli anlarından biri Vlahovic'in
            attığı gol oldu. Bu gol Beşiktaş'ı öne geçirirken karşılaşmanın sonucunu
            da büyük ölçüde belirledi.

            DERBİ SONRASI

            Beşiktaş aldığı galibiyetle ligde önemli bir üç puanı hanesine yazdırırken,
            Fenerbahçe kendi sahasında aldığı mağlubiyetin ardından önündeki maçlara
            odaklanacak.

            Süper Lig'de sezonun ilerleyen haftalarında iki takımın alacağı sonuçlar
            şampiyonluk yarışının ve üst sıralardaki mücadelenin şekillenmesinde
            önemli rol oynayacak.

            HABERİSTA olarak Süper Lig'deki gelişmeleri, transfer haberlerini,
            puan durumunu ve maç sonuçlarını takip etmeye devam ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "00:20",
        gorsel: "images/BESIKTAS-FENERBAHCE.jpeg",
        kaynak: "Spor kaynakları"
    },


    /* =====================================================
       5 - EKONOMİ
    ===================================================== */
    {
        id: 15,
        kategori: "Ekonomi",
        baslik: "Altın fiyatlarında 6 Eylül hareketliliği",
        spot: "Hafta sonuna girilirken yatırımcıların gözü gram, çeyrek ve diğer altın fiyatlarında. Küresel piyasalar ve döviz hareketleri altın yatırımcıları tarafından yakından izleniyor.",
        icerik: `
            Altın piyasası, Türkiye'de yatırımcıların en fazla takip ettiği finansal
            göstergeler arasında yer almaya devam ediyor. 6 Eylül 2026 itibarıyla
            yatırımcıların gündeminde gram altın, çeyrek altın, yarım altın,
            tam altın ve Cumhuriyet altını bulunuyor.

            Hafta sonlarında fiziki piyasalarda işlem yoğunluğu hafta içine kıyasla
            farklılık gösterirken yatırımcılar yeni haftanın açılış fiyatlarını da
            yakından takip ediyor.

            Altın fiyatlarının Türkiye'deki seyri yalnızca ons altın fiyatına bağlı
            değil. Dolar/TL kuru, küresel piyasalardaki gelişmeler, merkez bankalarının
            para politikaları ve yatırımcıların risk iştahı da fiyatlar üzerinde etkili
            olabiliyor.

            GRAM ALTIN TAKİP EDİLİYOR

            Türkiye'de özellikle gram altın küçük ve orta ölçekli yatırımcıların
            yakından takip ettiği ürünlerden biri. Gün içerisinde oluşan fiyat
            değişimleri nedeniyle yatırımcılar alış ve satış rakamlarını ayrı ayrı
            değerlendiriyor.

            Çeyrek altın ise özellikle fiziki altın talebinde önemli bir yere sahip.
            Düğün sezonu, özel günler ve geleneksel yatırım alışkanlıkları nedeniyle
            çeyrek altının fiyatı vatandaşlar tarafından günlük olarak kontrol ediliyor.

            KÜRESEL PİYASALARIN ETKİSİ

            Uluslararası piyasalarda altının ons fiyatında yaşanan hareketler Türkiye
            piyasasında da hissedilebiliyor. Özellikle doların küresel değeri ve ABD
            ekonomisine ilişkin gelişmeler altın fiyatlarının yönü açısından önem taşıyor.

            Uzmanlar altın fiyatlarını değerlendirirken sadece günlük hareketlere
            bakılmaması gerektiğini, yatırım kararlarının kişisel risk durumu ve
            yatırım süresi dikkate alınarak verilmesi gerektiğini belirtiyor.

            YENİ HAFTA BEKLENİYOR

            Piyasalar yeni haftaya hazırlanırken yatırımcılar altın fiyatlarının
            nasıl bir seyir izleyeceğini merak ediyor.

            Özellikle küresel ekonomik veriler, merkez bankalarından gelecek açıklamalar
            ve döviz piyasasındaki hareketlilik altın tarafında yeni fiyatlamalara
            neden olabilir.

            HABERİSTA Ekonomi Servisi olarak altın piyasasındaki gelişmeleri ve
            haftanın ilk işlem günündeki fiyat hareketlerini takip ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "09:30",
        gorsel: "images/ALTIN.jpeg",
        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       6 - EKONOMİ
    ===================================================== */
    {
        id: 16,
        kategori: "Ekonomi",
        baslik: "Akaryakıt fiyatları yeniden gündemde",
        spot: "Benzin, motorin ve LPG fiyatları küresel petrol piyasası, döviz kuru ve vergi düzenlemeleri nedeniyle vatandaşların gündemindeki yerini koruyor.",
        icerik: `
            Türkiye'de milyonlarca araç sahibinin yakından takip ettiği akaryakıt
            fiyatları yeniden gündemin önemli başlıkları arasında yer alıyor.

            Benzin, motorin ve LPG fiyatlarında yaşanan değişiklikler özellikle araç
            kullanan vatandaşların bütçesini doğrudan etkileyebiliyor. Bu nedenle
            sürücüler istasyonlardaki fiyatları ve olası zam veya indirim haberlerini
            yakından takip ediyor.

            Akaryakıt fiyatlarının belirlenmesinde uluslararası petrol fiyatlarının
            yanı sıra döviz kuru ve vergiler de önemli rol oynuyor. Küresel piyasalarda
            petrol fiyatlarında meydana gelen değişiklikler belirli koşullarda
            Türkiye'deki pompa fiyatlarına da yansıyabiliyor.

            BENZİN VE MOTORİN TAKİPTE

            Özellikle şehirler arası yolculuk yapan vatandaşlar açısından benzin
            ve motorin fiyatları büyük önem taşıyor. Ticari araçlarda ise yakıt
            maliyetleri işletme giderlerinin önemli bir bölümünü oluşturabiliyor.

            Taşımacılık sektöründeki yakıt maliyetleri yalnızca araç sahiplerini
            değil, ürünlerin lojistik maliyetlerini ve dolayısıyla bazı mal ve
            hizmetlerin fiyatlarını da etkileyebiliyor.

            LPG KULLANANLAR DA FİYATLARI İZLİYOR

            LPG'li araç kullanan vatandaşlar da istasyonlardaki güncel fiyatları
            yakından takip ediyor. LPG fiyatları da diğer akaryakıt ürünlerinde
            olduğu gibi piyasa koşullarından etkilenebiliyor.

            DÖVİZ VE PETROL PİYASASI ÖNEMLİ

            Önümüzdeki dönemde petrol fiyatlarının seyri, küresel enerji piyasaları
            ve döviz kurundaki hareketlilik akaryakıt fiyatları açısından önemli
            başlıklar arasında olacak.

            Vatandaşların fiyat değişiklikleri konusunda resmi açıklamaları ve
            güvenilir piyasa kaynaklarını takip etmesi önem taşıyor.

            HABERİSTA Ekonomi Servisi olarak benzin, motorin ve LPG fiyatlarında
            meydana gelebilecek değişiklikleri takip etmeye devam ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "09:10",
        gorsel: "images/AKARYAKIT.jpeg",
        kaynak: "HABERİSTA Ekonomi"
    },


    /* =====================================================
       7 - DÜNYA
    ===================================================== */
    {
        id: 17,
        kategori: "Dünya",
        baslik: "Rusya'da üniversitenin altında Nazi tankı bulundu",
        spot: "Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında II. Dünya Savaşı döneminden kalma Alman Panther V tankı bulundu. Tankın önemli bir bölümünün toprağın altında olduğu bildirildi.",
        icerik: `
            Rusya'nın Kazan kentinde yürütülen çalışmalar sırasında tarih meraklılarını
            şaşırtan bir keşif yapıldı. Bir üniversite yerleşkesinde gerçekleştirilen
            çalışmalar sırasında II. Dünya Savaşı döneminden kalma Alman yapımı
            Panther V tankına ulaşıldı.

            Tankın Kazan Ulusal Araştırma Teknoloji Üniversitesi'ndeki bir çalışma
            sırasında ortaya çıkarıldığı bildirildi. Yapılan incelemelerde tankın
            uzun süredir toprağın altında bulunduğu belirlendi.

            Panther V, II. Dünya Savaşı döneminde Almanya tarafından kullanılan
            önemli tank modellerinden biri olarak biliniyor. Savaş döneminden kalan
            araçların günümüzde ortaya çıkarılması tarih araştırmaları açısından
            büyük önem taşıyor.

            ÜNİVERSİTE ALANINDA TARİHİ KEŞİF

            Tankın üniversite yerleşkesindeki eski bir yeraltı yapısının bulunduğu
            bölgede yapılan çalışmalar sırasında fark edildiği aktarıldı.

            İnşaat çalışmaları sırasında ortaya çıkan metal parçalarının ardından
            bölgede inceleme yapılmasıyla aracın bir tank olduğu anlaşıldı.
            Tankın büyük bölümünün toprak altında bulunduğu bildirildi.

            Panther tankının ortaya çıkarılması yalnızca askeri tarih açısından
            değil, bölgenin geçmişi açısından da dikkat çekici bir gelişme olarak
            değerlendiriliyor.

            TARİHİ ARAÇLARIN KORUNMASI

            II. Dünya Savaşı döneminden kalan askeri araçlar, savaş tarihinin
            araştırılması açısından önemli arşiv niteliği taşıyor. Bu araçların
            korunması ve uygun koşullarda sergilenmesi, gelecek nesillerin geçmişi
            daha iyi anlamasına yardımcı oluyor.

            Kazan'daki tankın da uzmanlar tarafından detaylı şekilde incelenmesi
            ve durumunun değerlendirilmesi bekleniyor.

            Keşif, Rusya'da ve uluslararası basında da dikkat çeken tarih haberleri
            arasında yer aldı. Tankın Kazan'daki bir üniversitenin altında ortaya
            çıkarıldığı farklı kaynaklar tarafından da aktarıldı. :contentReference[oaicite:5]{index=5}

            HABERİSTA olarak tarihi keşifle ilgili yeni gelişmeleri takip ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "08:45",
        gorsel: "images/PANTHER-TANK.jpeg",
        kaynak: "Dünya basını"
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
            Dünya Motokros Şampiyonası'nın 2026 sezonundaki önemli etaplarından biri
            olan MXGP Türkiye'de büyük heyecan yaşanıyor. Organizasyonun final günü
            6 Eylül Pazar günü Afyonkarahisar'da gerçekleştiriliyor.

            Dünyanın en iyi motokros sporcularının mücadele ettiği organizasyon,
            Afyonkarahisar Motor Sporları Merkezi'nde düzenleniyor. Türkiye etabı
            hem sporcular hem de motor sporları tutkunları açısından sezonun
            önemli organizasyonlarından biri olarak öne çıkıyor.

            MXGP Türkiye'nin Afyonkarahisar'daki organizasyonunda farklı kategorilerde
            yarışlar gerçekleştiriliyor. MXGP'nin yanı sıra MX2 ve diğer destek
            kategorilerinde de sporcular piste çıkıyor.

            ŞAMPİYONLUK MÜCADELESİ

            Sezonun son yarışlarına yaklaşılması nedeniyle sporcular arasındaki
            şampiyonluk mücadelesi büyük önem taşıyor. Her yarışta elde edilen
            puanların sezon sonu sıralamasına etkisi bulunuyor.

            Afyonkarahisar'daki yarışlarda alınacak sonuçlar şampiyonluk mücadelesinin
            kaderini belirleyebilecek önemli gelişmeler arasında bulunuyor.

            AFYONKARAHİSAR MOTOR SPORLARI MERKEZİ

            Türkiye'nin önemli motor sporları tesislerinden biri olan Afyonkarahisar
            Motor Sporları Merkezi, yıllardır uluslararası yarışlara ev sahipliği yapıyor.

            Parkur, yüksek hızlı bölümleri, virajları ve atlayışlarıyla sporculara
            zorlu bir mücadele sunuyor. Yarış boyunca pistin durumu ve hava şartları
            da sporcuların performansını etkileyebiliyor.

            TÜRKİYE'DE MOTOR SPORLARINA İLGİ

            MXGP Türkiye'nin düzenlenmesi Türkiye'deki motor sporları kültürünün
            gelişmesine de katkı sağlıyor. Organizasyon kapsamında yarışların yanı
            sıra çeşitli etkinlikler ve festival programları da gerçekleştiriliyor.

            Türkiye'nin MXGP etabının 2026 takviminde Afyonkarahisar'da düzenlendiği
            resmi ve yerel kaynaklarda yer alıyor. :contentReference[oaicite:6]{index=6}

            Şampiyonluk yarışının sonucu motor sporları dünyasında yakından takip
            ediliyor.

            HABERİSTA Spor Servisi olarak MXGP Türkiye'deki gelişmeleri ve yarış
            sonuçlarını takip ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "08:30",
        gorsel: "images/MXGP-AFYON.jpeg",
        kaynak: "Türkiye Motosiklet Federasyonu"
    },


    /* =====================================================
       9 - DÜNYA
    ===================================================== */
    {
        id: 19,
        kategori: "Dünya",
        baslik: "Avrupa seyahatlerinde sınır kontrollerinde yeni dönem",
        spot: "Avrupa'ya seyahat edenleri ilgilendiren EES sınır kontrol sistemiyle birlikte Avrupa'nın dış sınırlarında biyometrik verilerin kullanımına dayalı yeni bir dönem başlıyor.",
        icerik: `
            Avrupa'ya seyahat eden vatandaşları yakından ilgilendiren sınır kontrol
            uygulamalarında yeni bir dönem gündemde. Avrupa Birliği'nin Entry/Exit
            System olarak bilinen EES sistemi, Schengen bölgesinin dış sınırlarında
            giriş ve çıkışların daha dijital şekilde takip edilmesini amaçlıyor.

            Sistem kapsamında geleneksel pasaport damgasının yerini elektronik
            kayıtların alması ve sınır geçişlerinde biyometrik verilerin kullanılması
            planlanıyor.

            Yeni sistem özellikle Avrupa Birliği dışından Schengen bölgesine seyahat
            eden kişiler açısından önem taşıyor. Yolcuların sınır kapılarında daha
            kapsamlı kontrollerden geçirilmesi ve seyahat bilgilerinin elektronik
            ortamda kaydedilmesi hedefleniyor.

            BİYOMETRİK KONTROL DÖNEMİ

            EES kapsamında yolcuların kimlik bilgilerinin yanı sıra biyometrik
            verilerinin de sisteme işlenmesi planlanıyor. Böylece sınır geçişlerinin
            daha dijital ve merkezi şekilde takip edilmesi amaçlanıyor.

            Avrupa'daki sınır kapılarında sistemin uygulanmaya başlamasıyla birlikte
            ilk dönemlerde ek kontroller nedeniyle bazı noktalarda işlem sürelerinin
            değişmesi mümkün olabilecek.

            TÜRK VATANDAŞLARI İÇİN ÖNEMİ

            Avrupa'ya turistik amaçla, eğitim için, iş seyahati nedeniyle veya
            farklı nedenlerle seyahat eden Türk vatandaşlarının yeni sınır kontrol
            sistemindeki uygulamaları takip etmesi önem taşıyor.

            Seyahat öncesinde pasaport geçerlilik süresi, vize durumu ve gidilecek
            ülkenin güncel giriş koşullarının kontrol edilmesi gerekiyor.

            SINIR KAPLARINDA YENİ TEKNOLOJİ

            Avrupa'nın sınır yönetiminde dijitalleşmenin artmasıyla birlikte
            biyometrik sistemlerin daha fazla kullanılması bekleniyor. Amaç,
            sınır geçişlerinin daha güvenli şekilde kayıt altına alınması ve
            kişilerin Schengen bölgesindeki giriş-çıkışlarının elektronik olarak
            takip edilmesi.

            Sistemle ilgili uygulama ayrıntılarının ve geçiş takviminin ülkeler
            tarafından duyurulması seyahat planlayanlar açısından önem taşıyor.

            HABERİSTA Dünya Servisi olarak Avrupa'daki sınır uygulamalarına ilişkin
            gelişmeleri takip ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "08:15",
        gorsel: "images/EES-AVRUPA.jpeg",
        kaynak: "Avrupa Birliği"
    },


    /* =====================================================
       10 - SPOR
    ===================================================== */
    {
        id: 20,
        kategori: "Spor",
        baslik: "Filenin Sultanları için Avrupa Şampiyonası heyecanı",
        spot: "A Milli Kadın Voleybol Takımı, 2026 CEV Kadınlar Avrupa Voleybol Şampiyonası finalinde İtalya ile karşılaşacak. Türkiye'nin şampiyonluk heyecanı İstanbul'da yaşanıyor.",
        icerik: `
            A Milli Kadın Voleybol Takımı'nın Avrupa şampiyonluğu yolundaki mücadelesinde
            artık final zamanı. Filenin Sultanları, 2026 CEV Trendyol Kadınlar Avrupa
            Voleybol Şampiyonası finalinde İtalya ile karşı karşıya gelecek.

            Türkiye'nin de ev sahipleri arasında bulunduğu organizasyonda A Milli Kadın
            Voleybol Takımı başarılı performansıyla finale yükseldi.

            Filenin Sultanları yarı finalde Sırbistan karşısında etkili bir oyun ortaya
            koyarak finale yükseldi. Türkiye'nin finale çıkmasının ardından gözler
            İtalya ile oynanacak şampiyonluk maçına çevrildi. Türkiye Voleybol
            Federasyonu da final rakibinin İtalya olduğunu duyurdu. :contentReference[oaicite:7]{index=7}

            FİNALDE RAKİP İTALYA

            Avrupa şampiyonluğu için mücadele edecek iki takım da turnuvanın en
            güçlü ekipleri arasında bulunuyor. Türkiye ile İtalya arasındaki final
            mücadelesinin büyük bir voleybol heyecanına sahne olması bekleniyor.

            Filenin Sultanları'nın kadrosunda yer alan oyuncular, turnuva boyunca
            hücumdaki etkinlikleri ve savunmadaki mücadeleleriyle dikkat çekti.

            İSTANBUL'DA BÜYÜK HEYECAN

            Final karşılaşmasının İstanbul'da oynanacak olması Türk voleybolseverler
            açısından ayrı bir önem taşıyor. Milli takımın Avrupa şampiyonluğu
            hedefiyle sahaya çıkacak olması nedeniyle karşılaşmaya yoğun ilgi
            gösterilmesi bekleniyor.

            Türkiye'nin ev sahipleri arasında bulunduğu turnuvada milli takımın
            finale kadar yükselmesi, organizasyonun Türkiye açısından önemini
            daha da artırdı.

            AVRUPA ŞAMPİYONLUĞU HEDEFİ

            Filenin Sultanları'nın hedefi Avrupa şampiyonluğuna ulaşmak. Milli takım
            son yıllarda uluslararası turnuvalarda elde ettiği başarılarla Türkiye'de
            voleybola olan ilgiyi de önemli ölçüde artırdı.

            Final karşılaşmasında oyuncuların servis, blok, hücum ve savunmadaki
            performansı maçın sonucunu belirleyecek.

            TÜRKİYE'NİN VOLEYBOL HEYECANI

            Avrupa Şampiyonası boyunca milli takımın maçları Türkiye'de büyük ilgi
            gördü. Sosyal medyada da Filenin Sultanları ile ilgili çok sayıda paylaşım
            yapılırken taraftarlar final maçına odaklandı.

            Türkiye ile İtalya arasındaki final karşılaşması, Avrupa kadın voleybolunun
            iki önemli takımını karşı karşıya getirecek.

            HABERİSTA Spor Servisi olarak final maçındaki gelişmeleri, set sonuçlarını
            ve karşılaşmanın ardından oluşacak tabloyu takip ediyoruz.
        `,
        tarih: "6 Eylül 2026",
        saat: "19:00",
        gorsel: "images/FILENIN-SULTANLARI.jpeg",
        kaynak: "Türkiye Voleybol Federasyonu"
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
