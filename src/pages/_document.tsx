import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="md share" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="md share" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f6f8fa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#010409" media="(prefers-color-scheme: dark)" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="any" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
