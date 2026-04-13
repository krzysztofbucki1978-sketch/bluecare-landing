# 📸 PLACEHOLDER IMAGE MANAGEMENT - BlueCare Control

## Jakie obrazy potrzebujesz?

### 1. **OG Image (Social Media)**
Dla Facebook, LinkedIn, WhatsApp, Twitter

**Wymiary**: 1200x630px (lub 1200x675px dla YouTube)
**Format**: PNG lub JPG
**Nazwa**: `public/og-image.png`

**Zawartość**:
- Logo BlueCare Control (górny lewy róg)
- Tytuł: "BlueCare Control"
- Opis: "Sistema de Gestión de Piscinas"
- Tło: Tech-Blue gradient (jak na stronie)
- Tekst: "+ 3 Idiomas" (PL, EN, ES)

**Tools do tworzenia**:
- Canva.com (free tier) - drag & drop
- Figma.com - profesjonalne
- Adobe Express (free) - quick

### 2. **OG Image Square (Instagram, Pinterest)**
Dla czarnego tła social media

**Wymiary**: 800x800px
**Format**: PNG
**Nazwa**: `public/og-image-square.png`

**Zawartość**:
- Logo BlueCare Control (centered)
- Ikony funkcji (5 ikon: Cloud, Alert, Droplet, Chart, Settings)
- Tech-Blue gradient background

### 3. **Favicon**
Malutka ikona w przeglądarce

**Wymiary**: 32x32px (albo 64x64px)
**Format**: ICO lub PNG
**Nazwa**: `public/favicon.ico`

**Zawartość**:
- Logo BlueCare Control (simplified)
- Może być inicjały "BC" lub ikona kropli wody

### 4. **Apple Touch Icon**
Ikona na home screen iOS

**Wymiary**: 180x180px
**Format**: PNG
**Nazwa**: `public/apple-touch-icon.png`

**Zawartość**:
- Logo BlueCare Control
- Kwadratowa forma (zaokrąglone rogi automatycznie)
- Tech-Blue background

### 5. **Screenshots Aplikacji**
Zdjęcia ekranów aplikacji mobilnej

**Wymiary**: 540x960px (mobile screenshot)
**Format**: PNG
**Nazwy**:
```
public/images/screenshot-dashboard.png
public/images/screenshot-analysis.png
public/images/screenshot-agua.png
public/images/screenshot-history.png
public/images/screenshot-settings.png
```

Możesz użyć:
- IMG_5309.png → screenshot-dashboard.png
- IMG_5310.png → screenshot-agua.png
- IMG_5311.png → screenshot-analysis.png
- IMG_5313.png → screenshot-settings.png

---

## 🎨 Jak tworzyć OG Images (Canva Tutorial)

### Krok 1: Wejdź na Canva
```
1. https://www.canva.com
2. Zaloguj się lub załóż free account
3. Kliknij "Create a design"
```

### Krok 2: Wybierz rozmiar
```
1. Szukaj: "Open Graph"
2. Lub wpisz wymiary: "1200x630"
3. Kliknij "Create"
```

### Krok 3: Design
```
1. Dodaj tło:
   - Elements → Gradients
   - Wyszukaj: "blue gradient" lub "tech gradient"
   - Musi być ciemny: dark blue → cyan

2. Dodaj tekst:
   - Text → Heading
   - "BlueCare Control"
   - Font: Bold, czarny/biały, duży
   - Pozycja: górne środek

3. Dodaj opis:
   - Text → Body
   - "Sistema de Gestión de Piscinas"
   - Mniejszy font
   - Poniżej głównego tytułu

4. Dodaj logo (jeśli masz):
   - Upload your own → [logo.png]
   - Umieść w lewym górnym rogu
   - Rozmiar: ~200px szerokości

5. Eksportuj:
   - Download → PNG (zalecane dla OG)
   - Zapisz: public/og-image.png
```

---

## 🔧 Alternativa: Używaj AI do generacji

### Midjourney (Płatne - $10-20/miesiąc)
```
Prompt:
"Create a 1200x630px social media banner for 'BlueCare Control' 
pool management system. 
Dark blue to cyan gradient background, modern tech aesthetic, 
professional, includes pool water droplet icon. 
Includes text: BlueCare Control, Pool Management System."
```

### DALL-E 3 (OpenAI - $15-20/miesiąc)
```
Prompt: Similar jak wyżej
```

### Leonardo.AI (Darmowe)
```
Free tier do 150 obrazów/miesiąc
Similar prompt jak Midjourney
```

---

## 📁 Struktura plików (public folder)

```
public/
├── favicon.ico              (32x32px)
├── apple-touch-icon.png     (180x180px)
├── og-image.png             (1200x630px)
├── og-image-square.png      (800x800px)
├── logo.png                 (transparent PNG, 200x200px)
├── logo-white.png           (white version)
└── images/
    ├── screenshot-dashboard.png    (540x960px)
    ├── screenshot-analysis.png     (540x960px)
    ├── screenshot-agua.png         (540x960px)
    ├── screenshot-history.png      (540x960px)
    └── screenshot-settings.png     (540x960px)
```

---

## ✅ Checklist Obrazów

- [ ] og-image.png (1200x630px)
- [ ] og-image-square.png (800x800px)
- [ ] favicon.ico (32x32px)
- [ ] apple-touch-icon.png (180x180px)
- [ ] screenshot-dashboard.png (540x960px)
- [ ] screenshot-analysis.png (540x960px)
- [ ] screenshot-agua.png (540x960px)
- [ ] screenshot-history.png (540x960px)
- [ ] screenshot-settings.png (540x960px)

---

## 🔗 Jak wstawić obrazy do kodu

### OG Image (w layout.jsx)
```javascript
openGraph: {
  images: [
    {
      url: 'https://bluecare-control-landing.vercel.app/og-image.png',
      width: 1200,
      height: 630,
      alt: 'BlueCare Control',
      type: 'image/png',
    },
  ],
}
```

### Screenshots (w ContactForm czy Mobile App Carousel)
```javascript
<img 
  src="/images/screenshot-dashboard.png"
  alt="Dashboard"
  className="w-full h-full object-cover"
/>
```

### Favicon (w layout.jsx)
```javascript
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

---

## 🌐 Test Social Media Preview

Sprawdź jak będzie wyglądać na social mediach:

### Facebook Share Debugger
```
https://developers.facebook.com/tools/debug/
Wklej URL: https://bluecare-control-landing.vercel.app
Powinny się wyświetlić meta-tagi i og-image
```

### Open Graph Checker
```
https://www.opengraph.xyz/
Wklej URL i sprawdzaj live preview
```

### LinkedIn Post Inspector
```
https://www.linkedin.com/sharing/share-offsite/
Wklej URL - będzie live preview
```

---

## 📝 Notatki

1. **Zmiana obrazów**: 
   - Po zamianie obrazów w `/public`
   - Git push do GitHub
   - Vercel automatycznie wdroży w 1-2 minuty

2. **Cache-busting**:
   - Jeśli zmienisz og-image.png
   - URL się nie zmieni ale cache się wyczyści po ~1h
   - Lub otwórz w Private/Incognito mode

3. **Format PNG vs JPG**:
   - PNG: Lepsza dla ikon, przezroczystości (favicon)
   - JPG: Lepsza dla fotografii (screenshots)
   - OG images: PNG (lepsze dla Facebooka)

4. **Optymalizacja**:
   - Usar TinyPNG (https://tinypng.com) do kompresji
   - Nie robi się plikach > 200KB
   - OG Image powinien być < 500KB

---

Powodzenia z obrazami! 📸✨
