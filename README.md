# Netlify Canlı Örneği
Netlify linki: [http:arda-rick-and-morty.netlify.app](http:arda-rick-and-morty.netlify.app) 

Bu bağlantıya tıkladıklarında, uygulamanın canlı çalıştığı web sitesine yönlendirilecekler. Bu, projenizi sergilemek ve paylaşmak için harika bir yol!

Yapılan işlerin dökümante edilmesi, katkıda bulunmak isteyenler için faydalı olabilir. Yapılan değişiklikler, projenin daha da gelişmesini sağlayabilir.

Katkıda bulunmak isteyenler için yönergeleri net bir şekilde belirttiğiniz için teşekkürler! Bu, açık kaynak projelerin büyümesine ve gelişmesine katkıda bulunmanın önemli bir parçasıdır.


# Rick and Morty Character Search

Bu proje, Rick and Morty API'sini kullanarak karakter araması yapmanızı sağlayan bir React uygulamasıdır. Arama yaparken her bir karakterin detaylarını görebilir ve istediğiniz karakterleri ana sayfada kalıcı olarak tutabilirsiniz.

## Özellikler

- **Canlı Arama:** Arama çubuğuna yazdıkça sonuçlar otomatik olarak güncellenir.
- **Sonuçları Gösterme/Gizleme:** Arama çubuğu boş olduğunda sonuçlar gösterilmez.
- **Karakter Seçimi:** Seçilen karakterler ana sayfada kalıcı olarak gösterilir.
- **Yerel Depolama:** Seçilen karakterler tarayıcıda saklanır, böylece sayfa yenilendiğinde bile seçili karakterler korunur.

## Kurulum

Proje bağımlılıklarını yüklemek ve çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/yukselarda/rick-and-morty-search.git
    cd rick-and-morty-search
    ```

2. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

3. Uygulamayı başlatın:
    ```bash
    npm start
    ```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.

## Proje Yapısı

```plaintext
src/
├── components/
│   ├── SearchBar.js          # Arama çubuğu bileşeni
│   ├── CharacterList.js      # Karakter listesini gösteren bileşen
│   └── CharacterCard.js      # Her bir karakterin detaylarını gösteren bileşen
├── pages/
│   └── HomePage.js           # Ana sayfa bileşeni
├── styles/
│   └── styles.css            # CSS stil dosyası
└── App.js                    # Uygulamanın ana bileşeni

Kullanılan Teknolojiler
React: Kullanıcı arayüzünü oluşturmak için.
Axios: Rick and Morty API'sine istek atmak için.
CSS: Basit ve modern bir arayüz sağlamak için.

API Kullanımı
Uygulama, Rick and Morty API'sini kullanır. Arama sorguları 
https://rickandmortyapi.com/api/character/?name=&lt;query&gt; formatında yapılır.

Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir fork oluşturun ve yeni özellikler veya hata düzeltmeleri için bir pull request gönderin.

Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.