import BackgroundBlur from '@/components/background-blur'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import Navbar from '@/components/navbar'
import { Toaster } from '@/components/shadcn/toaster'
import { ConfigProvider } from '@/context/config-context'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubemgr - The Kubernetes Configuration Merger',
  description: 'Kubemgr Web simplifies merging Kubernetes configuration files with a user-friendly interface. No CLI required. Just paste, merge, and manage your clusters effortlessly.',
  keywords: [
    'kubernetes',
    'kubeconfig',
    'merge',
    'configuration',
    'cluster management',
    'developer tools',
    'kubemgr',
    'k8s',
    'devops',
    'cloud native',
    'container orchestration',
    'configuration management',
    'kubernetes tools',
    'kubernetes configuration',
    'kubernetes merge',
    'kubeconfig merge',
    'kubernetes management',
    'kubernetes deployment',
    'kubernetes clusters',
    'kubernetes access',
  ],
  icons: {
    icon: 'favicon.ico',
  },
  metadataBase: new URL('https://kubemgr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Merge easily your kubernetes configurations - Kubemgr',
    description: 'Kubemgr Web simplifies merging Kubernetes configuration files with a user-friendly interface. No CLI required. Just paste, merge, and manage your clusters effortlessly.',
    type: 'website',
    url: 'https://kubemgr.com',
    siteName: 'Kubemgr',
    images: [
      {
        url: 'https://kubemgr.com/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for Kubemgr.com',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge easily your kubernetes configurations - Kubemgr',
    description: 'Kubemgr Web simplifies merging Kubernetes configuration files with a user-friendly interface. No CLI required. Just paste, merge, and manage your clusters effortlessly.',
    images: [
      {
        url: 'https://kubemgr.com/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for Kubemgr.com',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kubemgr - The Kubernetes Configuration Merger',
  description: 'Kubemgr Web simplifies merging Kubernetes configuration files with a user-friendly interface. No CLI required. Just paste, merge, and manage your clusters effortlessly.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Cross-platform',
  url: 'https://kubemgr.com',
  image: 'https://kubemgr.com/og-card.png',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/OnlineOnly',
    category: 'Developer Tools',
  },
  keywords: [
    'kubernetes',
    'kubeconfig',
    'merge',
    'configuration',
    'cluster management',
    'developer tools',
    'kubemgr',
    'k8s',
    'devops',
    'cloud native',
    'container orchestration',
    'configuration management',
    'kubernetes tools',
    'kubernetes configuration',
    'kubernetes merge',
    'kubeconfig merge',
    'kubernetes management',
    'kubernetes deployment',
    'kubernetes clusters',
    'kubernetes access',
  ],
  creator: {
    '@type': 'Person',
    name: 'Dorian Grasset',
    url: 'https://github.com/dorian-grst',
  },
  about: {
    '@type': 'Thing',
    name: 'Kubernetes Configuration Management',
    description: 'Tools and solutions for managing Kubernetes cluster configurations',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kubemgr.com',
    name: 'Merge easily your kubernetes configurations - Kubemgr',
    description: 'Kubemgr Web simplifies merging Kubernetes configuration files with a user-friendly interface. No CLI required. Just paste, merge, and manage your clusters effortlessly.',
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
    </>
  )
}
