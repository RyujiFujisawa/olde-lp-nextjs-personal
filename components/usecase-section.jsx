import { useCases } from '../lib/site-data'

export default function UsecaseSection() {
  return (
    <section id="usecases" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="info-kicker">導入対象</div>
          <h2 className="section-title">こんな現場の後方リスク対策に</h2>
          <p className="section-lead">
            OLDEは、ユンボ後方の死角管理を強化したい現場向けに設計しています。狭い道路、住宅地、埋設工事など人と重機が近くなりやすい環境に向いています。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => (
            <article key={item.title} className="card p-7">
              <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-black tracking-[0.22em] text-brand-800">
                TARGET
              </div>
              <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
