import Head from 'next/head';
import { seoConfig, structuredData } from '@/config/next-seo.config';

export const metadata = {
  title: 'BlueCare Control - Sistema de Gestión de Piscinas',
  description: seoConfig.description,
  keywords: [
    'gestión de piscinas',
    'control de parámetros agua',
    'pH cloro temperatura',
    'software hotelero',
    'sistema SaaS piscinas',
    'reportes sanitarios',
    'cloud sync',
  ],
  authors: [
    {
      name: 'BlueCare Control',
      url: 'https://bluecare-control.vercel.app',
    },
  ],
  creator: 'Krzysztof Bucki',
  publisher: 'BlueCare Control',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  alternates: {
    canonical: seoConfig.canonical,
    languages: {
      es: 'https://bluecare-control.vercel.app',
      en: 'https://bluecare-control.vercel.app?lang=en',
      pl: 'https://bluecare-control.vercel.app?lang=pl',
    },
  },
  verification: {
    google: 'TU_GOOGLE_VERIFICATION_CODE_AQUI',
    yandex: 'TU_YANDEX_VERIFICATION_CODE_AQUI',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://formspree.io" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BlueCare Control" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" as="image" href="/og-image.png" />
        <link rel="preload" as="font" href="/fonts/sans.woff2" type="font/woff2" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="bg-slate-950">
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BlueCare Control',
              url: 'https://bluecare-control.vercel.app',
              logo: 'https://bluecare-control.vercel.app/logo.png',
              description: 'Sistema profesional de gestión de piscinas para hoteles',
              sameAs: [
                'https://www.facebook.com/bluecare',
                'https://www.linkedin.com/company/bluecare-control',
                'https://www.instagram.com/bluecare_control',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'bluecare.control.app@gmail.com',
                telephone: '+34-633-363-769',
                availableLanguage: ['Spanish', 'English', 'Polish'],
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
