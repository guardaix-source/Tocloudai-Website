"use client";

import Image from "next/image";
import { useState } from "react";

const NAV = [
  { href: "#crisis-stats", label: "現況痛點" },
  { href: "#solution-ctem", label: "解決方案" },
  { href: "#features-showcase", label: "功能展示" },
  { href: "#business-roi", label: "投資效益" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="向雲智慧 TocloudAI"
            width={700}
            height={460}
            priority
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold tracking-tight text-ink">向雲智慧</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#contact-form-section"
            className="btn-pill bg-signal px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-signal-bright"
          >
            申請免費 POC 測試
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink sm:hidden"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white sm:hidden">
          <div className="mx-auto flex max-w-content flex-col px-6 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-base text-slate last:border-b-0 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-form-section"
              onClick={() => setOpen(false)}
              className="btn-pill my-3 bg-signal px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              申請免費 POC 測試
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
