import Header from '../components/header'
import Hero from '../components/hero'
import FeatureGrid from '../components/feature-grid'
import UsecaseSection from '../components/usecase-section'
import GallerySection from '../components/gallery-section'
import FlowSection from '../components/flow-section'
import PricingSection from '../components/pricing-section'
import FaqSection from '../components/faq-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'
import { faqs } from '../lib/site-data'

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OLDE（オルデ）',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Camera Device / Edge AI',
  description:
    'ユンボ・油圧ショベル後方の接触事故リスク低減を支援する建機安全AIシステム。危険エリア侵入検知、人検知AI、即時ブザー通知、既存機への後付け導入に対応。',
  brand: {
    '@type': 'Brand',
    name: 'OLDE',
  },
  provider: {
    '@type': 'Organization',
    name: 'ナウア株式会社',
    url: 'https://nauh-inc.com/',
  },
  offers: [
    {
      '@type': 'Offer',
      name: '買い切りプラン',
      price: '200000',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'レンタルプラン',
      price: '19800',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <UsecaseSection />
        <GallerySection />
        <FlowSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
