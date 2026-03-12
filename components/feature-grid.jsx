import { features, valueCards } from '../lib/site-data'

export default function FeatureGrid() {
  return (
    <>
      <section id="features" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="info-kicker">特徴</div>
            <h2 className="section-title">OLDEが後方作業員との接触リスクを見える化</h2>
            <p className="section-lead">
              危険エリアを設定し、人が入ったらすぐに検知。ユンボ後方の死角を監視し、オペレーターの安全確認を補助します。
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="card p-7">
                <img src={feature.icon} alt="" className="h-28 w-full rounded-3xl border border-slate-100 bg-slate-50 object-contain p-4" />
                <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{feature.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{feature.description}</p>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="section-shell">
          <div className="card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="bg-slate-950 p-8 text-white sm:p-10">
                <div className="info-kicker !bg-white/10 !text-white">選ばれる理由</div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">現場導入しやすい安全AIの形に整理</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  OLDEは、高価な大規模システムではなく、まずは後方の接触事故対策に絞って導入しやすくしたプランです。
                  現場に必要な機能から始めて、運用に合わせて広げられます。
                </p>
              </div>
              <div className="grid gap-5 bg-white p-8 sm:grid-cols-2 sm:p-10">
                {valueCards.map((card) => (
                  <article key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <img src={card.icon} alt="" className="h-20 w-full rounded-2xl border border-slate-100 bg-white object-contain p-3" />
                    <h3 className="mt-5 text-lg font-black tracking-tight text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
