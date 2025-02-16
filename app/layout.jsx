import { Inter } from 'next/font/google'

import Script from 'next/script'
import Topbar from '@/components/layout/Topbar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// CSS imports
import '@fortawesome/fontawesome-free/css/all.min.css'
import '/public/css/animate.css'
import '/public/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Digital Tech Solutions',
    template: '%s | Digital Tech Solutions'
  },
  description: 'Digital Tech Solution offers expert website development, graphic design, data analysis, video editing, SEO, and digital marketing services.',
  openGraph: {
    title: 'Digital Tech Solutions',
    description: 'Digital Tech Solution offers expert website development, graphic design, data analysis, video editing, SEO, and digital marketing services.',
    images: '/images/logo.png',
  },
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {


  return (

    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} suppressHydrationWarning>

        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script
          id="wow-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                new WOW().init();
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
