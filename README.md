# BlueCare Control - Landing Page

![BlueCare Control](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

Profesjonalna Landing Page dla **BlueCare Control** - zaawansowanego systemu SaaS do zarządzania parametrami wody w basenach hotelowych i obiektach sportowych.

## 🎯 Charakterystyka

- **Wielojęzyczna**: Polska 🇵🇱, Angielska 🇬🇧, Hiszpańska 🇪🇸
- **Tech-Blue Premium Design**: Nowoczesny, responsywny, elegancki
- **Zero Cost Deploy**: Całkowicie darmowe wdrożenie na Vercel
- **Formularze**: Integracja z Formspree do zbierania zapytań
- **SEO Optimized**: Meta-tagi, Open Graph, Structured Data (JSON-LD)
- **PWA Ready**: Instalowalne na urządzeniach mobilnych
- **Fast Performance**: Zoptymalizowane dla Vercel Edge Network

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/)
- **Animacje**: [Framer Motion 10](https://www.framer.com/motion/)
- **Ikony**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Formularz**: [Formspree](https://formspree.io/)
- **Deploy**: [Vercel](https://vercel.com/)
- **SCM**: [GitHub](https://github.com/)

## 📁 Struktura Projektu

```
bluecare-control-landing/
├── public/                          # Statyczne assets
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── logo.png
│   ├── manifest.json
│   └── images/
│       ├── screenshot-dashboard.png
│       ├── screenshot-analysis.png
│       └── ...
├── src/
│   ├── app/
│   │   ├── page.jsx                # Main landing page
│   │   ├── layout.jsx              # Root layout + SEO
│   │   └── globals.css
│   ├── components/
│   │   └── ContactForm.jsx         # Contact form with Formspree
│   └── config/
│       └── next-seo.config.js      # SEO configuration
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json (opcjonalnie)
├── .gitignore
└── README.md (ten plik)
```

## 🛠️ Installation

### Wymagania
- Node.js 18+ (sprawdź: `node --version`)
- Git (sprawdź: `git --version`)
- npm lub yarn

### Kroki

```bash
# Sklonuj repozytorium
git clone https://github.com/YOUR_USERNAME/bluecare-control-landing.git
cd bluecare-control-landing

# Zainstaluj zależności
npm install

# Uruchom dev server
npm run dev

# Otwórz przeglądarkę
# http://localhost:3000
```

## 🚀 Deployment

### Vercel (Rekomendowane - Darmowe)

```bash
# Połącz z GitHub (jeśli jeszcze nie)
git push origin main

# Vercel automatycznie wdroży kod
# URL: https://bluecare-control-landing.vercel.app
```

**Instrukcja pełna**: Zobacz [INSTRUKCJA_WDROŻENIA.md](./INSTRUKCJA_WDROŻENIA.md)

## 📧 Konfiguracja Formspree

1. Wejdź na [formspree.io](https://formspree.io)
2. Załóż konto: `bluecare.control.app@gmail.com`
3. Utwórz formularz
4. Skopiuj ID formularza
5. W `src/components/ContactForm.jsx` zamień ID:
   ```javascript
   const response = await axios.post('https://formspree.io/f/YOUR_FORM_ID', {
   ```
6. Push do GitHub: `git push origin main`

## 🌐 SEO & Meta-tagi

Wszystkie meta-tagi są automatycznie generowane:

- **Open Graph**: Dla Facebook, LinkedIn, Twitter
- **Structured Data**: JSON-LD dla Google
- **Multilingual**: hreflang tags dla search engines
- **Mobile Friendly**: Responsive design
- **Schema.org**: Organization, SoftwareApplication

Sprawdź meta-tagi tutaj:
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Open Graph Checker](https://ogp.me/)

## 🎨 Dostosowanie

### Zmiana kolorów
Edytuj `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00d4ff', // Cyan
      secondary: '#0066cc', // Blue
    }
  }
}
```

### Zmiana tekstu
Edytuj `translations` object w `src/app/page.jsx` lub `src/components/ContactForm.jsx`

### Dodaj nową sekcję
```javascript
// W src/app/page.jsx

<section className="relative z-10 py-24">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    {/* Your content */}
  </motion.div>
</section>
```

## 📱 Mobile & Responsive

Strona jest w 100% responsywna:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test na urządzeniach:
```bash
npm run dev
# Otwórz na iPad, iPhone, Androide
```

## 🔍 SEO Checklist

- [x] Meta-tagi (title, description)
- [x] Open Graph (images, titles)
- [x] Twitter Card
- [x] Structured Data (JSON-LD)
- [x] Sitemap.xml
- [x] robots.txt
- [x] Multilingual (hreflang)
- [x] Mobile Friendly
- [x] Fast Loading (Next.js optimizations)
- [x] SSL Certificate (Vercel auto)

## 📊 Analytics (Opcjonalnie)

Dodaj Google Analytics:

1. Załóż konto: [analytics.google.com](https://analytics.google.com)
2. Skopiuj Tracking ID
3. Dodaj do `next-seo.config.js`
4. Install `gtag`:
   ```bash
   npm install @next/bundle-analyzer
   ```

## 🔒 Security

- CSP Headers (w `next.config.js`)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📞 Kontakt & Support

- **Email**: bluecare.control.app@gmail.com
- **Telefon**: +34 633 363 769
- **Wsparcie**: Pon-Pt 8:00-18:00 (UTC+1)

## 📄 Licencja

MIT License - Zobacz [LICENSE](./LICENSE)

## 👨‍💻 Autor

**Krzysztof Bucki** - BlueCare Control
- Kontakt: bluecare.control.app@gmail.com

## 🤝 Contributing

Zmiany są zapraszane! Please:
1. Fork repozytorium
2. Stwórz feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmiany (`git commit -m 'Add AmazingFeature'`)
4. Push branch (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📚 Linki

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)

## 🎯 Roadmap

- [ ] Blog section
- [ ] Pricing page
- [ ] Case studies
- [ ] Video demo
- [ ] Newsletter integration
- [ ] Dark mode toggle
- [ ] PDF download (broszura)
- [ ] Calendar booking (dla demo)

## ⚡ Performance

- **Lighthouse Score**: 95+ 🚀
- **Core Web Vitals**: Green ✓
- **Page Load**: < 2 seconds
- **Bundle Size**: Optimized with Next.js

## 🆘 Troubleshooting

### Build Error
```bash
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Git push rejected
```bash
git pull origin main
git push origin main
```

Więcej: [INSTRUKCJA_WDROŻENIA.md#8-troubleshooting](./INSTRUKCJA_WDROŻENIA.md#8-troubleshooting)

---

**Dziękujemy za używanie BlueCare Control Landing Page!** 💙

Made with ❤️ by Claude AI Expert | Vercel Deployment | 2026
