
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlueCare Control - Premium Pool Management',
  description: 'Kompleksowe zarządzanie infrastrukturą basenową.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
