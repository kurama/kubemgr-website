import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="" data-domains="kubemgr.com" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
