import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="section-line mt-24">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <p className="text-sm font-semibold text-ink">向雲智慧</p>
        </div>
        <div className="flex gap-6 text-sm text-slate">
          <Link href="/services" className="hover:text-ink">服務項目</Link>
          <Link href="/about" className="hover:text-ink">關於我們</Link>
          <Link href="/contact" className="hover:text-ink">聯絡我們</Link>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} 向雲智慧 TocloudAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
