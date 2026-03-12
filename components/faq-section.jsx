import { faqs } from '../lib/site-data'

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="info-kicker">FAQ</div>
          <h2 className="section-title">OLDEに関するよくある質問</h2>
          <p className="section-lead">営業・現場の両方からよく出る質問を先回りして整理しています。</p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="card group overflow-hidden p-6 open:border-brand-200 open:bg-brand-50/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black tracking-tight text-slate-950">
                <span>{item.question}</span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-open:rotate-45 group-open:bg-brand-100 group-open:text-brand-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14" strokeLinecap="round" />
                    <path d="M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 pr-12 text-base leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
