import './globals.css'
import { Inter, Raleway } from 'next/font/google'

import Footer from '@/components/custom/footer'
import Header from '@/components/custom/header'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: 'Prof. Dr. Nusret Ilker Colak - Portfolio',
  description: 'Portfolio website of Professor Doctor Nusret Ilker Colak, exploring law, society, and justice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <Header/>     
        {children}
        <Footer/>
      </body>
    </html>
  )
}