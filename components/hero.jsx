import { trustPoints } from '../lib/site-data'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="section-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="info-kicker">建設現場の安全を見守る後方監視AI</div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white px-4 py-2 shadow-soft">
              <img src="/brand/olde-mark.svg" alt="OLDE ロゴ" className="h-8 w-8 rounded-xl" />
              <div className="text-sm font-black tracking-tight text-slate-900">
                <span>OLD</span>
                <span className="text-brand-500">E</span>
                <span className="ml-2 text-xs font-bold text-slate-500">オルデ</span>
              </div>
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              ユンボ後方の事故を
              <span className="block text-brand-500">AIが未然に防止</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
              OLDE（オルデ）は、ユンボ・油圧ショベル・バックホウ後方に設置する建機安全AIシステムです。
              後方死角の危険エリア侵入をAIで検知し、人が近付いたら即時にブザーで知らせ、目視だけに頼らない建設現場の安全管理を支援します。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                OLDEについて相談する
                <ArrowIcon />
              </a>
              <a href="#pricing" className="btn-accent">
                料金を見る
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="pill">買い切り 200,000円 / 台</span>
              <span className="pill">レンタル 初期50,000円 + 19,800円 / 月</span>
              <span className="pill">設置費 30,000〜50,000円</span>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden border-brand-100 bg-white/90 p-4 shadow-panel sm:p-6">
              <img
                src="/images/hero/olde-hero-scene.png"
                alt="ユンボ後方の危険エリアを監視するOLDEのイメージ"
                className="w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point} className="card flex items-center gap-3 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-base font-bold text-slate-900">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
