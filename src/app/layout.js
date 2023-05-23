import Footer from './(components)/Footer/Footer'
import Navigation from './(components)/Navigation/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        

        <Navigation />
        {children}

        <Footer />

        </body>
    </html>
  )
}
