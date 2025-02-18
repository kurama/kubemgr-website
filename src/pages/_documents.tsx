import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Kubemgr',
            description: 'Kubemgr simplifies merging Kubernetes configuration files, enabling seamless cluster access and management.',
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
              description: 'Kubemgr simplifies merging Kubernetes configuration files, enabling seamless cluster access and management.',
            },
          }),
        }}
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
