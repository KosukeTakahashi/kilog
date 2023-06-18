import './globals.css'
import { Inter, Noto_Sans, Noto_Sans_JP } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'KiLog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={`${notoSans.className} ${notoSansJP.className}`}>{children}</body>
    </html>
  )
}
