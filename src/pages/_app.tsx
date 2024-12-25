import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import type { AppProps } from 'next/app'
import '@styles/global.css'
import '@styles/highlightjs.css'
import 'focus-visible'

const inter = Inter({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={true}>
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
