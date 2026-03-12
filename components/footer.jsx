export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell flex flex-col gap-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/brand/olde-mark.svg" alt="OLDE ロゴ" className="h-12 w-12 rounded-2xl" />
          <div>
            <p className="font-black text-slate-900">
              <span>OLD</span>
              <span className="text-brand-500">E</span>
            </p>
            <p className="mt-1">建機後方の接触事故リスクをAIで低減する安全支援システム</p>
            <p className="mt-2">
              運営会社：
              <a
                href="https://nauh-inc.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
              >
                https://nauh-inc.com/
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#features" className="font-semibold hover:text-slate-900">特徴</a>
          <a href="#pricing" className="font-semibold hover:text-slate-900">料金</a>
          <a href="#contact" className="font-semibold hover:text-slate-900">お問い合わせ</a>
        </div>
      </div>
    </footer>
  )
}
