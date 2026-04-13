export const seoConfig = {
  titleTemplate: '%s | BlueCare Control',
  defaultTitle: 'BlueCare Control - Sistema de Gestión de Piscinas',
  description:
    'BlueCare Control: Sistema SaaS avanzado para gestionar parámetros de agua en piscinas de hoteles. Cloud Sync, alertas inteligentes y reportes automáticos.',
  canonical: 'https://bluecare-control.vercel.app',
  language: 'es',
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://bluecare-control.vercel.app',
  },
  languageAlternates: [
    {
      hrefLang: 'es',
      href: 'https://bluecare-control.vercel.app',
    },
    {
      hrefLang: 'en',
      href: 'https://bluecare-control.vercel.app?lang=en',
    },
    {
      hrefLang: 'pl',
      href: 'https://bluecare-control.vercel.app?lang=pl',
    },
    {
      hrefLang: 'x-default',
      href: 'https://bluecare-control.vercel.app',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://bluecare-control.vercel.app',
    siteName: 'BlueCare Control',
    title: 'BlueCare Control - Sistema Profesional de Gestión de Piscinas',
    description:
      'Solución SaaS avanzada para hoteles y complejos deportivos. Sincronización en la nube, alertas inteligentes, reportes sanitarios automáticos y control total de parámetros de agua en tiempo real.',
    images: [
      {
        url: 'https://bluecare-control.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BlueCare Control - Pool Management System',
        type: 'image/png',
      },
      {
        url: 'https://bluecare-control.vercel.app/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'BlueCare Control Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@BlueCareControl',
    site: '@BlueCareControl',
    cardType: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'BlueCare Control',
  description:
    'Sistema SaaS profesional para la gestión y control de parámetros de agua en piscinas de hoteles y complejos deportivos.',
  url: 'https://bluecare-control.vercel.app',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  inLanguage: ['es', 'en', 'pl'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'BlueCare Control',
    url: 'https://bluecare-control.vercel.app',
    logo: 'https://bluecare-control.vercel.app/logo.png',
    email: 'bluecare.control.app@gmail.com',
    telephone: '+34-633-363-769',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Costa Adeje',
      addressLocality: 'San Eugenio',
      addressRegion: 'Tenerife',
      postalCode: '38660',
      addressCountry: 'ES',
    },
  },
  provider: {
    '@type': 'Organization',
    name: 'BlueCare Control',
    url: 'https://bluecare-control.vercel.app',
  },
};

export const keyFeatures = [
  {
    name: 'Cloud Sync Activo',
    description: 'Sincronización ultrarrápida entre dispositivos en tiempo real',
  },
  {
    name: 'Alertas Inteligentes',
    description: 'Notificaciones automáticas cuando parámetros salen de rango',
  },
  {
    name: 'Gestión de Stock',
    description: 'Control de consumo de químicos y alertas de bajo inventario',
  },
  {
    name: 'Reportes Automáticos',
    description: 'Generación de reportes sanitarios PDF en un clic',
  },
  {
    name: 'Panel Administrativo',
    description: 'Gestión centralizada de múltiples hoteles y técnicos',
  },
];
