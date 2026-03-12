export const formspreeEndpoint = 'https://formspree.io/f/xeergbny'
export const contactEmail = 'fujisawa@nauh-inc.com'

export const navItems = [
  { label: '特徴', href: '#features' },
  { label: '導入対象', href: '#usecases' },
  { label: '検知画面', href: '#gallery' },
  { label: '導入フロー', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const trustPoints = [
  '危険エリア侵入検知',
  'AIによる人検知',
  '即時ブザー通知',
]

export const features = [
  {
    title: '危険エリア侵入検知',
    description:
      'OLDEはユンボ後方の死角に危険エリアを設定し、作業員や通行人が入るとすぐに警告。住宅地や狭い道路工事でも使いやすい構成です。',
    points: ['後方の死角を監視', 'エリアは現場に合わせて設定', '狭小現場・仮囲い現場にも対応'],
    icon: '/illustrations/danger-zone.svg',
  },
  {
    title: 'AI人検知',
    description:
      'カメラ映像から人をリアルタイムに検知。後退時や旋回時に、オペレーターの目視だけでは拾いにくい動きをAIが補助します。',
    points: ['作業員・見学者・通行人を検知', 'リアルタイム動作', '既存機への後付けを想定'],
    icon: '/illustrations/person-detect.svg',
  },
  {
    title: '即時アラート通知',
    description:
      '危険エリア侵入時や人の接近時に、ブザーや表示で即時に注意喚起。モニター常時監視が難しい運用でも導入しやすい設計です。',
    points: ['ブザー警告を標準想定', '視認しづらい場面でもすぐに気付きやすい', '将来的なモニター連携拡張も可能'],
    icon: '/illustrations/alert-beep.svg',
  },
]

export const valueCards = [
  {
    title: '既存機への後付け導入',
    body: '新車前提ではなく、いま使っているユンボ・油圧ショベルへの追加導入を想定した提案ができます。',
    icon: '/illustrations/retrofit.svg',
  },
  {
    title: '狭小住宅地の現場に向く',
    body: '人と建機の距離が近くなりやすい上下水道工事・道路工事・住宅地工事での安全補助に向いています。',
    icon: '/illustrations/site-scene.svg',
  },
  {
    title: '買い切りとレンタルの両対応',
    body: '常設現場向けの買い切りと、試験導入や期間限定運用向けのレンタルを用意しやすい構成です。',
    icon: '/illustrations/plan-choice.svg',
  },
  {
    title: '設置の柔軟さ',
    body: '設置費込みの導入も、現場側でのセルフ設置も選択可能。運用体制に合わせてコスト設計ができます。',
    icon: '/illustrations/install-flex.svg',
  },
]

export const useCases = [
  {
    title: '住宅地の道路工事',
    body: '通行人や近隣住民との距離が近い現場で、後方死角の注意喚起を強化したいときに。',
  },
  {
    title: '上下水道・埋設工事',
    body: '狭い作業スペースで人と重機が交差しやすい場面の安全対策として。',
  },
  {
    title: '小規模造成・外構工事',
    body: '限られた敷地内で旋回・後退を伴う作業の補助として。',
  },
  {
    title: '構内整備・搬入動線',
    body: '一時的に人の動線が変わる構内でも、危険エリアを見える化したい場合に。',
  },
]

export const galleryItems = [
  {
    title: '後方危険エリアの監視',
    text: '赤枠で設定した危険エリア付近を常時監視し、現場の死角を見える化。',
    image: '/images/gallery/detection-view-01.png',
  },
  {
    title: '作業員・見学者の接近検知',
    text: '住宅地の工事現場でも、人が後方へ近付いた状況を画面上で確認できます。',
    image: '/images/gallery/detection-view-02.png',
  },
  {
    title: '侵入時のALERT表示',
    text: '危険エリア侵入時にはアラート状態に切り替わり、ブザー通知のトリガーに活用できます。',
    image: '/images/gallery/detection-view-03.png',
  },
]

export const flowSteps = [
  {
    step: '01',
    title: 'ヒアリング',
    body: '対象機種、現場条件、電源の取り方、必要な警告方式を確認します。',
    icon: '/illustrations/flow-hearing.svg',
  },
  {
    step: '02',
    title: '設置・配線',
    body: 'ユンボ後方にカメラと警告機器を取り付け、必要に応じて設置作業を実施します。',
    icon: '/illustrations/flow-install.svg',
  },
  {
    step: '03',
    title: 'エリア設定・調整',
    body: '危険エリアの範囲や検知条件を現場に合わせて調整し、誤検知を抑えます。',
    icon: '/illustrations/flow-tune.svg',
  },
  {
    step: '04',
    title: '運用開始',
    body: '作業開始後も運用状況を見ながら、現場に合わせた微調整に対応します。',
    icon: '/illustrations/flow-start.svg',
  },
]

export const pricingPlans = [
  {
    name: '買い切りプラン',
    price: '200,000円 / 台',
    badge: 'おすすめ',
    description: '長期運用や複数現場で使い回したい会社向け。',
    items: ['1年保証', 'AIカメラ + 人検知 + ブザー警告', '現場に合わせた導入相談'],
    accent: true,
  },
  {
    name: 'レンタルプラン',
    price: '初期 50,000円 + 19,800円 / 月',
    badge: '最低利用期間 12ヶ月',
    description: 'まずは試験導入したい、期間限定現場で使いたい場合に。',
    items: ['最低利用期間 12ヶ月', '初期投資を抑えやすい', '現場評価後に買い切り移行の検討も可能'],
    accent: false,
  },
  {
    name: '設置費',
    price: '30,000〜50,000円',
    badge: 'セルフ設置なら不要',
    description: '配線・固定方法・取付位置で変動します。',
    items: ['現場条件により個別見積', '自社施工ならコスト圧縮可能', '機種や取り回しで変動'],
    accent: false,
  },
]

export const faqs = [
  {
    question: 'OLDEは何を検知するシステムですか？',
    answer:
      '基本構成ではユンボ後方に入った人をAIで検知し、危険時にブザーで通知する運用を想定しています。',
  },
  {
    question: 'モニターは必須ですか？',
    answer:
      '標準想定はブザー警告中心です。モニターを常時見る運用が難しい現場でも導入しやすいようにしています。',
  },
  {
    question: '既存のユンボに後付けできますか？',
    answer:
      '可能性があります。機種・電源・取り付け位置により確認が必要ですが、後付け前提の提案を想定しています。',
  },
  {
    question: 'レンタルはどのくらいから使えますか？',
    answer:
      '最低利用期間は12ヶ月の想定です。短期現場でも、継続して安全対策を標準化したい会社に向いています。',
  },
  {
    question: '設置費は必ずかかりますか？',
    answer:
      '設置作業を依頼する場合は3〜5万円の想定です。自社で設置する場合は不要です。',
  },
]
