import Link from "next/link";

const NAV = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務項目" },
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-ink">
            TocloudAI
          </span>
          <span className="eyebrow hidden sm:inline">資安維運</span>
        </Link>
        <nav className="flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
