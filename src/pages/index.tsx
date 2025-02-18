import BackgroundBlur from '@/components/background-blur'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import Navbar from '@/components/navbar'
import { Toaster } from '@/components/shadcn/toaster'
import { ConfigProvider } from '@/context/config-context'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="h-dvh p-4 border flex flex-col overflow-hidden">
      <Head>
        <title>Kubemgr</title>
        <meta name="description" content="Kubemgr simplifies merging Kubernetes configuration files, enabling seamless cluster access and management." />
        <link rel="icon" href="favicon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://kubemgr.com" key="canonical" />
        <meta
          name="keywords"
          content="kubernetes, kubeconfig, merge, configuration, cluster management, developer tools, kubemgr, k8s, devops, cloud native, container orchestration, configuration management, kubernetes tools, kubernetes configuration, kubernetes merge, kubeconfig merge, kubernetes management, kubernetes deployment, kubernetes clusters, kubernetes access"
        />
        <meta property="og:title" content="Merge easily your kubernetes configurations - Kubemgr" />
        <meta property="og:description" content="Kubemgr simplifies merging Kubernetes configuration files, enabling seamless cluster access and management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kubemgr.com" />
        <meta property="og:site_name" content="Kubemgr" />
        <meta property="og:image" content="https://kubemgr.com/og-card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Preview image for Kubemgr.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Merge easily your kubernetes configurations - Kubemgr" />
        <meta name="twitter:description" content="Kubemgr simplifies merging Kubernetes configuration files, enabling seamless cluster access and management." />
        <meta name="twitter:image" content="https://kubemgr.com/og-card.png" />
        <meta name="twitter:image:alt" content="Preview image for Kubemgr.com" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="6d6f1afd-17fc-432d-96be-a82ab23c0f70" data-domains="kubemgr.com" />
      <Toaster />
      <ConfigProvider>
        <div className="flex flex-row justify-between p-4 rounded-t-md border-x border-t border-input">
          <Header />
          <Navbar />
        </div>
        <Main />
        <Footer />
      </ConfigProvider>
      <BackgroundBlur />
    </div>
  )
}
