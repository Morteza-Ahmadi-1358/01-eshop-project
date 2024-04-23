import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TopBanner from '@/components/TopBanner'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import localFont from 'next/font/local'

const iranYekan = localFont({src: '../public/fonts/iranyekan.woff'})

export default function App({ Component, pageProps }) {
  return (
    <div className={iranYekan.className}>
      <TopBanner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
