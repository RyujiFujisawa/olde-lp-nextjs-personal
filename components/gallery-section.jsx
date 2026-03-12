import { galleryItems } from '../lib/site-data'

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="info-kicker">検知画面</div>
          <h2 className="section-title">OLDEの検知画面で伝わる現場イメージ</h2>
          <p className="section-lead">
            住宅地の道路工事を想定した画面例です。危険エリアの設定、人の接近、侵入時のアラート状態がひと目で伝わるように整理できます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="card overflow-hidden">
              <div className="aspect-[16/11] overflow-hidden border-b border-slate-200 bg-slate-100">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
