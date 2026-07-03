import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-line mt-24">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.jpg" alt="向雲智慧" width={28} height={26} className="rounded-sm" />
          <div>
            <p className="text-sm font-semibold text-ink">向雲智慧</p>
            <p className="mt-0.5 text-xs text-muted">國際情資訂閱與企業資安架構建置</p>
          </div>
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
