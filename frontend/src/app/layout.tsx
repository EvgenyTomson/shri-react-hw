import Header from '@/components/Header/Header'
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { StoreProvider } from '@/redux/StoreProvider'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['700', '500', '400']})

export const metadata = {
  title: 'Билетопоиск',
  description: 'Учебный проект ШРИ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>

        <div id="portal" />
      </body>
    </html>
  )
}
