import { pricingPlans } from '../lib/site-data'

const adopters = [
  {
    name: '鴨下設備工業株式会社',
    url: 'https://kamoshita-setsubi.com/',
    logo: '/brand/kamoshita-logo.png',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="info-kicker">料金</div>
          <h2 className="section-title">OLDE 料金プラン</h2>
          <p className="section-lead">
            買い切り・レンタル・設置費を分けて整理し、会社の方針や現場数に応じて選びやすくしています。
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`card flex h-full flex-col p-7 ${plan.accent ? 'border-brand-300 bg-slate-950 text-white shadow-panel' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-sm font-black tracking-[0.22em] ${plan.accent ? 'text-brand-300' : 'text-brand-700'}`}>
                    {plan.name}
                  </p>
                  <h3 className="mt-4 text-3xl font-black tracking-tight">{plan.price}</h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    plan.accent ? 'bg-brand-400 text-slate-950' : 'bg-brand-50 text-brand-800'
                  }`}
                >
                  {plan.badge}
                </span>
              </div>
              <p className={`mt-5 text-sm leading-7 ${plan.accent ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
              <ul className={`mt-6 space-y-3 text-sm font-semibold ${plan.accent ? 'text-white' : 'text-slate-700'}`}>
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.accent ? 'bg-white/10 text-brand-300' : 'bg-brand-100 text-brand-800'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6">
                <a href="#contact" className={plan.accent ? 'btn-accent w-full' : 'btn-primary w-full'}>
                  このプランで相談する
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          ※記載価格は現時点の想定プランです。機種、設置条件、警告機器構成により最終見積は変動します。
        </p>

        <div className="mt-12">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">導入会社</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">導入・検証パートナー</h3>
            </div>
            <p className="hidden text-sm font-semibold text-slate-500 sm:block">横スクロールで確認できます</p>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-4">
              {adopters.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex min-w-[320px] items-center gap-5 rounded-[28px] border border-slate-200 bg-white px-6 py-5 hover:border-brand-200"
                >
                  <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-4">
                    <img src={company.logo} alt={`${company.name} ロゴ`} className="max-h-12 w-auto object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-black text-slate-950">{company.name}</p>
                    <p className="mt-1 truncate text-sm font-semibold text-brand-600">{company.url}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
