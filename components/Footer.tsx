import Image from "next/image";

const SECTION_LINKS = [
  { href: "#crisis-stats", label: "現況痛點" },
  { href: "#solution-ctem", label: "解決方案" },
  { href: "#features-showcase", label: "功能展示" },
  { href: "#business-roi", label: "投資效益" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface2">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="向雲智慧 TocloudAI"
                width={700}
                height={460}
                className="h-8 w-auto"
              />
              <p className="text-base font-bold text-ink">向雲智慧</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              雲智禦 AI 決策系統——資料不落地，毫秒級的情資驅動引擎，企業的安全新視界。
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">網站導覽</p>
            <ul className="mt-4 space-y-2.5">
              {SECTION_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">聯絡我們</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="mailto:info@tocloudai.com" className="text-sm text-slate hover:text-ink">
                  info@tocloudai.com
                </a>
              </li>
              <li>
                <a href="#contact-form-section" className="text-sm text-slate hover:text-ink">
                  申請免費 14 天 POC 測試
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} 向雲智慧 TocloudAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
