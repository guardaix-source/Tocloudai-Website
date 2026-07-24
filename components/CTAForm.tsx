"use client";

import { useState, FormEvent } from "react";

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 尚未串接後端 / Email 通知服務。
    // 之後可在此改為呼叫 API Route（例如 app/api/contact/route.ts）寄送通知信或寫入資料庫。
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-mock">
        <p className="text-lg font-bold text-ink">已收到您的申請！</p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          我們將在一個工作天內與您聯繫，安排免費 14 天 POC 概念驗證測試（表單目前尚未串接寄送功能，僅供介面展示）。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-8 shadow-mock">
      <div>
        <label htmlFor="company" className="text-sm font-medium text-ink">
          公司名稱
        </label>
        <input
          id="company"
          name="company"
          required
          className="mt-2 w-full rounded border-0 bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-inset ring-line focus:ring-2 focus:ring-signal"
          placeholder="貴公司 / 單位名稱"
        />
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          姓名
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded border-0 bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-inset ring-line focus:ring-2 focus:ring-signal"
          placeholder="您的姓名"
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
          className="mt-2 w-full rounded border-0 bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-inset ring-line focus:ring-2 focus:ring-signal"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          聯絡電話
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-2 w-full rounded border-0 bg-surface2 px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-inset ring-line focus:ring-2 focus:ring-signal"
          placeholder="09xx-xxx-xxx"
        />
      </div>

      <button
        type="submit"
        className="btn-pill mt-2 w-full bg-signal-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
      >
        送出申請，預約免費測試
      </button>
      <p className="text-center text-xs text-muted">不需要事先準備資料 · 一個工作天內回覆</p>
    </form>
  );
}
