Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

1. Projeyi Klonlayın
Öncelikle projeyi bilgisayarınıza klonlayın:

https://github.com/slash585/rick-and-morty.git
cd rick-and-morty

2. Gerekli Bağımlılıkları Yükleyin
Projede kullanılacak gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

npm install

3. .env.local Dosyasını Oluşturun
Proje kök dizininde .env.local adında bir dosya oluşturun ve bu dosyanın içine aşağıdaki satırı ekleyin:

RICK_AND_MORTY_BASE_URL=https://rickandmortyapi.com/api/

4. Geliştirme Sunucusunu Başlatın
Projeyi yerel geliştirme ortamında çalıştırmak için aşağıdaki komutu kullanın:

npm run dev

Sunucu başlatıldığında, projeyi http://localhost:3000 adresinden görüntüleyebilirsiniz.
