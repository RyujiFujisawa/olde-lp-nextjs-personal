import './globals.css'

const siteUrl = 'https://nauh-inc.com'
const siteName = 'OLDE（オルデ）'
const title = 'OLDE（オルデ） | ユンボ・油圧ショベル後方の接触事故対策AI'
const description =
  'OLDE（オルデ）は、ユンボ・油圧ショベル・バックホウ後方の接触事故リスク低減を支援する建機安全AIシステムです。後方死角の危険エリア侵入検知、人検知AI、即時ブザー通知、既存機への後付け導入に対応し、建設会社・設備会社・道路工事会社の安全対策を支援します。'
const keywords = [
  '建機 安全 AI',
  'ユンボ 後方 AI',
  '油圧ショベル 安全対策',
  'バックホウ 接触事故 防止',
  '建設機械 AI カメラ',
  '後方死角 検知',
  '重機 人検知',
  '建設現場 安全システム',
  '建機 後付け AI',
  '接触事故 リスク 見える化',
]

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords,
  applicationName: siteName,
  alternates: {
    canonical: '/',
  },
  category: '建設DX・安全AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/images/hero/olde-hero-scene.png',
        width: 1200,
        height: 630,
        alt: 'OLDE 建機後方監視AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero/olde-hero-scene.png'],
  },
  icons: {
    icon: '/brand/favicon.svg',
    shortcut: '/brand/favicon.svg',
    apple: '/brand/favicon.svg',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ナウア株式会社',
  url: 'https://nauh-inc.com/',
  logo: `${siteUrl}/brand/olde-logo.svg`,
  sameAs: ['https://nauh-inc.com/'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  inLanguage: 'ja-JP',
  description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  )
}
