import Link from "next/link";
import Image from "next/image";

const SERVICE_LINKS = [
  { href: "/services#module-01", label: "威脅情資訂閱" },
  { href: "/services#module-02", label: "可視化監控建置" },
  { href: "/services#module-03", label: "AI 風險研判" },
  { href: "/services#module-04", label: "分級即時告警" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡我們" },
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
              企業資安維運與威脅情資訂閱服務，把雜亂的資安事件，變成有序的防禦體系。
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">服務項目</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">公司</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:contact@tocloudai.com" className="text-sm text-slate hover:text-ink">
                  contact@tocloudai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal band */}
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} 向雲智慧 TocloudAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
