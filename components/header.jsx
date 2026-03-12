import { navItems } from '../lib/site-data'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/brand/olde-mark.svg" alt="OLDE ロゴ" className="h-12 w-12 rounded-2xl" />
          <div>
            <p className="text-lg font-black tracking-tight text-slate-950">
              <span>OLD</span>
              <span className="text-brand-500">E</span>
            </p>
            <p className="text-xs font-medium text-slate-500">建機安全AIシステム</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-slate-700 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-accent hidden sm:inline-flex">
          お問い合わせ
        </a>
      </div>
    </header>
  )
}
