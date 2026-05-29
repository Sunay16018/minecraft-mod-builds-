# 🚀 Minecraft Mod Creator

AI-Powered Minecraft Fabric Mod Generator - Uzay temalı web uygulaması.

## 🌟 Özellikler

- **Yapay Zeka Destekli**: Cerebras API (gpt-oss-120b) ile mod kodları üretir
- **Çoklu Sürüm Desteği**: Minecraft 1.7.10'dan 26.1'e kadar tüm Fabric sürümleri
- **Asenkron Derleme**: GitHub Actions'ta derlenir, 19 dakika bekleme yok
- **Uzay Teması**: Neon mor, yıldızlar, terminal stili konsol
- **Otomatik Status Kontrolü**: 15 saniyede bir otomatik kontrol

## 📁 Proje Yapısı

```
minecraft-mod-creator/
├── backend/
│   ├── server.js              # Express API sunucusu
│   ├── package.json           # Node.js bağımlılıkları
│   ├── .env.example           # Çevre değişkenleri şablonu
│   └── utils/
│       ├── gradle-configs.js  # Sürüm bazlı Gradle yapılandırmaları
│       ├── workflow-gen.js    # GitHub Actions workflow oluşturucu
│       └── github-helper.js   # Octokit ile GitHub işlemleri
├── frontend/
│   ├── index.html             # Ana sayfa (uzay teması)
│   ├── styles.css             # Neon uzay teması CSS
│   └── app.js                 # Frontend JavaScript
└── README.md
```

## 🛠️ Kurulum

### 1. Gereksinimler

- Node.js 18+
- GitHub hesabı ve Personal Access Token
- Cerebras API Key
- GitHub repo (örn: `kullaniciadin/minecraft-mod-builds`)

### 2. GitHub Repo Ayarları

GitHub repo'nuzda şu ayarları yapın:

1. **Settings → Actions → General → Workflow permissions**
   - `Read and write permissions` seçin
   - `Allow GitHub Actions to create and approve pull requests` işaretleyin

2. **Repo'da en az bir dosya olmalı** (README.md yeterli)

### 3. Çevre Değişkenleri

`.env` dosyası oluşturun:

```env
CEREBRAS_API_KEY=your_cerebras_api_key_here
GITHUB_TOKEN=ghp_your_github_token_here
GITHUB_REPO=yourusername/minecraft-mod-builds
PORT=3000
```

### 4. Kurulum ve Çalıştırma

```bash
cd backend
npm install
npm start
```

## 🚀 Render.com'a Deploy

### 1. Render.com'da Web Service Oluştur

1. [render.com](https://render.com)'a giriş yap
2. **New → Web Service** seç
3. GitHub repo'nuzu bağlayın
4. Ayarlar:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment**: Node

### 2. Environment Variables Ekle

Render Dashboard → Your Service → Environment:

```
CEREBRAS_API_KEY=xxx
GITHUB_TOKEN=ghp_xxx
GITHUB_REPO=kullaniciadin/repo
PORT=10000
```

### 3. Deploy

Otomatik deploy başlayacak. URL'niz: `https://your-service.onrender.com`

## 🎮 Kullanım

1. Minecraft sürümünü seç
2. Mod türlerini seç (birden fazla)
3. Özellikler ekle
4. Mod adı ve açıklama yaz (opsiyonel)
5. Ekstra isteklerini yaz (opsiyonel)
6. **MOD ÜRET 🚀** butonuna bas
7. Konsolda ilerlemeyi izle
8. Derleme bitince **İNDİR** butonu aktif olur

## 📡 API Endpoints

| Endpoint | Method | Açıklama |
|----------|--------|----------|
| `/api/generate` | POST | Mod kodu üret + GitHub'a pushla |
| `/api/status/:requestId` | GET | Derleme durumunu sorgula |
| `/api/download/:requestId` | GET | İndirme linki al |
| `/api/versions` | GET | Desteklenen sürümleri listele |

## ⚙️ Desteklenen Sürümler

| Minecraft | Java | Gradle | Özellik |
|-----------|------|--------|---------|
| 26.1 / 26.1.2 | 25 | 9.4 | ⭐ Yeni unobfuscated |
| 1.21.11 | 21 | 9.2 | Son obfuscated |
| 1.21.5 - 1.21.8 | 21 | 9.2 | Yarn mappings |
| 1.21.4 | 21 | 8.12 | Yarn mappings |
| 1.20.x | 17/21 | 8.8 | Yarn mappings |
| 1.19.x | 17 | 8.5 | Yarn mappings |
| 1.18.x | 17 | 7.6 | Yarn mappings |
| 1.17.1 | 16 | 7.6 | Yarn mappings |
| 1.16.x | 8 | 7.5 | Yarn mappings |
| 1.15.2 / 1.14.4 | 8 | 7.5 | Yarn mappings |
| 1.12.2 / 1.8.9 / 1.7.10 | 8 | 7.3 | Legacy |

## 🔒 Güvenlik

- API key'ler `.env`'de saklanır
- Frontend'de hiçbir secret yok
- GitHub token sadece server-side kullanılır
- Her mod ayrı branch'e pushlanır

## 📝 Lisans

MIT License

---

Made with 💜 by AI
