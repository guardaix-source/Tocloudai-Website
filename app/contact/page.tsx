"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 尚未串接後端 / Email 通知服務。
    // 之後可在此改為呼叫 API Route（例如 app/api/contact/route.ts）
    // 寄送通知信或寫入資料庫。
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <p className="eyebrow mb-4">CONTACT</p>
      <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">聯絡我們</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate">
        留下您的需求與聯絡方式，我們會在一個工作天內回覆評估建議。
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink">
              姓名
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal"
              placeholder="您的姓名"
            />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium text-ink">
              公司名稱
            </label>
            <input
              id="company"
              name="company"
              className="mt-2 w-full rounded border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal"
              placeholder="公司 / 單位名稱"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink">
              需求描述
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal"
              placeholder="請簡述您目前的資安需求或痛點"
            />
          </div>

          {submitted ? (
            <p className="rounded border border-signal/30 bg-signal-light px-4 py-3 text-sm text-signal-dark">
              已收到您的訊息（表單目前尚未串接寄送功能，僅供介面展示）。
            </p>
          ) : (
            <button
              type="submit"
              className="rounded bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-dark"
            >
              送出需求
            </button>
          )}
        </form>

        <div className="space-y-6 border-t border-line pt-10 sm:border-t-0 sm:border-l sm:pl-12 sm:pt-0">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <p className="text-sm text-ink">info@tocloudai.com</p>
          </div>
          <div>
            <p className="eyebrow mb-2">服務對象</p>
            <p className="text-sm leading-relaxed text-slate">
              中小企業、政府機關單位，以及需要輕量化資安維運能力的組織。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
