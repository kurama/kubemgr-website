import Script from 'next/script'
import '@/styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="6d6f1afd-17fc-432d-96be-a82ab23c0f70" data-domains="kubemgr.com" />
      <body>
        <div className="h-dvh p-4 border flex flex-col overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
