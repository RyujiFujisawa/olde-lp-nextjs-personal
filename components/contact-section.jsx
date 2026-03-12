'use client'

import { useState } from 'react'
import { contactEmail, formspreeEndpoint } from '../lib/site-data'

const initialForm = {
  company: '',
  name: '',
  email: '',
  units: '',
  message: '',
  _gotcha: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const payload = new FormData()
      payload.append('company', form.company)
      payload.append('name', form.name)
      payload.append('email', form.email)
      payload.append('units', form.units)
      payload.append('message', form.message)
      payload.append('_gotcha', form._gotcha)
      payload.append('_subject', 'OLDE LPお問い合わせ')

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        const errorMessage =
          data?.errors?.[0]?.message ||
          data?.error ||
          '送信に失敗しました。時間をおいて再度お試しください。'
        throw new Error(errorMessage)
      }

      setStatus({
        type: 'success',
        message:
          '送信ありがとうございました。内容を確認のうえ、担当者より折り返しご連絡します。',
      })
      setForm(initialForm)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <div className="info-kicker !bg-white/10 !text-white">
                お問い合わせ
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                OLDEの見積もり・現場相談はこちら
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                導入予定台数、対象機種、現場環境がわかると提案がスムーズです。価格の出し方やレンタルの考え方も含めて整理できます。
              </p>

              <div className="mt-8 space-y-4 text-sm font-semibold text-slate-200">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-slate-950">
                    1
                  </span>
                  <span>
                    対象機種、導入予定台数、現場の広さを確認
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-slate-950">
                    2
                  </span>
                  <span>
                    買い切りかレンタルか、設置を依頼するかを整理
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-slate-950">
                    3
                  </span>
                  <span>
                    現場条件に合わせた見積もりと導入提案を返答
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300">
                <p className="font-semibold text-white">送信先</p>
                <p>{contactEmail}</p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="OLDE LPお問い合わせ"
                  readOnly
                />

                <label className="hidden" aria-hidden="true">
                  <span>Do not fill this field</span>
                  <input
                    type="text"
                    name="_gotcha"
                    value={form._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <LabelInput
                    label="会社名"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="例：株式会社〇〇建設"
                    required
                  />

                  <LabelInput
                    label="ご担当者名"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例：山田 太郎"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <LabelInput
                    label="メールアドレス"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="例：sample@example.co.jp"
                    required
                  />

                  <LabelInput
                    label="導入予定台数"
                    name="units"
                    value={form.units}
                    onChange={handleChange}
                    placeholder="例：2台"
                  />
                </div>

                <label className="grid gap-2 text-sm font-bold text-slate-800">
                  <span>
                    ご相談内容
                    <span className="ml-1 text-rose-500">*</span>
                  </span>

                  <textarea
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="現場の規模、対象機種、運用イメージなど"
                    required
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white"
                  />
                </label>

                <p className="text-xs leading-6 text-slate-500">
                  ご入力内容はお問い合わせ対応のためにのみ利用します。送信後、自動で受付確認が表示されます。
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? '送信中...' : 'この内容で送信する'}
                </button>

                {status.message ? (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LabelInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-800">
      <span>
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white"
      />
    </label>
  )
}
