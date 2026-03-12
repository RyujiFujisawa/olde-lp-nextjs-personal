import { flowSteps } from '../lib/site-data'

export default function FlowSection() {
  return (
    <section id="flow" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="info-kicker">導入フロー</div>
          <h2 className="section-title">現場条件に合わせて導入・調整</h2>
          <p className="section-lead">
            ヒアリングから設置、危険エリア調整、運用開始までを段階的に進める前提で、現場ごとの差に合わせた導入ができます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {flowSteps.map((item) => (
            <article key={item.step} className="card p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.25em] text-brand-700">STEP {item.step}</span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800">導入</span>
              </div>
              <img src={item.icon} alt="" className="mt-5 h-20 w-full rounded-2xl border border-slate-100 bg-slate-50 object-contain p-3" />
              <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
