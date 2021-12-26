# Netflix-Clone-ReactNative
 
Projenin GitHub Linki: [https://github.com/ArifYusufYilmaz/Netflix-Clone-ReactNative ](https://github.com/ArifYusufYilmaz/Netflix-Clone-ReactNative)Projenin APK linki: [https://drive.google.com/file/d/15gtmxHnpXNk6IHTJkNQdKmHmEIpFsVqR/view?usp=sharin g](https://drive.google.com/file/d/15gtmxHnpXNk6IHTJkNQdKmHmEIpFsVqR/view?usp=sharing)

Genel Bakış:

Mobil Programlama dönem projesi olarak Netflix klonu oluşturmaya karar verdik. Projeye temel olarak istenenleri tasarlayarak işe başladık. React Native temel komponentleri, Stack ve Tab Navigation’ lar ile genel iskelet oluşturuldu ardından Firebase kullanarak Firestore ve Authentication işlemleri yapıldı.

Kullanım Senaryosu:

- Kullanıcı sisteme kayıt olur.
- Sisteme giriş yapar.
- Ana Ekran’ da tüm filmleri/dizileri kategorilerine göre görüntüler.
- Her bir filmin/dizinin detay sayfasını, içeriğin resmi, açıklaması, türü ve fragmanıyla birlikte görüntüleyebilir.
- Her bir filmi/diziyi favori listesine ekleyebilir.
- Favori filmlerinin/dizilerinin bulunduğu listeyi görüntüleyebilir.
- Filmleri/dizileri isimlerine göre filtreleyebilir, bu filtreleme yapılırken filmler ve diziler sırasıyla yazılan harfe göre anlık olarak filtrelenir.
- Oturumdan çıkış yapabilir.

Firebase bağlantısı:

Authentication İşlemi:

- Kayıt işlemi sırasında girilen bilgilerin doğruluğu belirli kısıtlara göre kontrol edilir. Bu kısıtlardan bazıları şu şekildedir;
  - E-mail kısıtlarına uygun olmayan e-mailler kabul edilmez.
  - Daha önce kayıt olan kullanıcı tekrar kayıt olamaz.
- Yapılan her giriş işlemi sırasında veritabanında bulunan veriler ile eşleme yapılır.
- Eşleme sırasında giriş kabul edilmeyen bazı durumlar şu şekildedir;
- Yanlış formatta girilen e-mailler kabul edilmez.
- Yanlış e-mail ya da şifre girişi dolayısıyla sisteme giriş kabul edilmez.

FireStore İşlemi:

- Uygulama ekranında kayıt işlemi esnasında Authentication ile kısıtlamadan geçen kullanıcı verileri için  “users” isimli koleksiyon oluşturulur.
- Kullanıcı verileri alanlarıyla birlikte burada tutulur. Bu alanlar şunlardır;
  - id
  - email
  - firstname
  - lastname
  - password
  - list
- “movies” isimli koleksiyonda filmler ve diziler gerekli alanlarıyla tutulur.Bu alanlar şunlardır;
- banner
- description
- id
- name
- tag
- videoURL
- yearsOfRelease

Teknik Detaylar:

Expo ile oluşturduğumuz uygulamada temel react-native bileşenlerinin dışında “components” klasörünün içinde olacak şekilde 4 adet komponent oluşturduk.

- HeaderTabs.js
  - Ana sayfa ekranında üstte bulunan tıklanabilir 3 ayrı yapı bir container içerisinde yer alarak  burada bulunur.
- Header.js
  - Uygulama logosunun, kullanıcının arama yapabileceği arama butonunun ve oturumunu kapatabileceği oturum kapatma ikonunun bulunduğu üst kısım buradadır.
  - Gerekli navigationlar ile desteklenmiştir.
- Hero.js
  - Ana sayfada görünecek film/dizi resmi, tür bilgileri, oynatma ikon, info ikonu burada bulunur.
- Movies.js
- Firestore’ dan çekilen film/ dizi listesi bu komponentte listelenir.
- Filmler ve dizilerin gerekli boyut ayarlamaları yapılarak ekranda sıralı bir şekilde gözükmesi sağlanır, aynı zamanda tıklanabilir yapı olarak ayarlayarak tıklandığında o filme/diziye ait açıklamaların görüntülenmesi sağlanır.

“screen” isimli klasörün içerisinde 7 adet ekran oluşturduk.

- Home.js
  - Uygulamanın Ana Sayfasıdır.
  - Oluşturulan komponentler ve gerekli react-native komponentleri ile Header kısmı, film/dizi listesi vs. kullanıcıya sunulur.
- Login.js
  - Kullanıcının giriş yapabilmesi için görünen ekrandır.
  - Giriş için gerekli inputlar alınır ve Firebase’ deki veriler ile kontrol edilir.
- Register.js
  - Kullanıcının kayıt yapabilmesi için görünen ekrandır.
  - Kayıt için gerekli inputlar alınır, uygunsa firebase’ e gönderilir.
- MyList.js
  - Kullanıcının favorilere eklediği filmleri/dizileri görüntüleyebildiği ekrandır.
  - Aynı zamanda favorilerinde bulunan filmleri/dizileri favorilerinden çıkarabilir.
- SearchScreen.js
  - Kullanıcı arama yaparken yaptığı aramalara göre filtrelenen filmleri/dizileri gösterir.
- Splash.js
  - Uygulama açılırken logonun göründüğü ekrandır.
- ViewMovie.js
- Filmlerin/dizilerin videosunun, isminin, açıklamasının, etiketlerinin, yayınlanma yılının bulunduğu detay sayfasıdır.

“firebase.js” dosyasında oluşturduğumuz Firebase projesinin konfigürasyon anahtarları bulunur.

Son olarak App.js dosyasında Stack ve BottomTab Navigator’ ları oluşturup, gerekli diğer komponentlerle destekleyerek uygulamamızın ayağa kalkmasını sağladık.

