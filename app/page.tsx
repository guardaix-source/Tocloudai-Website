import Link from "next/link";
import SignalGrid from "@/components/SignalGrid";
import { IconThreatIntel, IconMonitoring, IconAIEngine, IconAlertBot } from "@/components/Icons";

const HIGHLIGHTS = ["情資在地化轉譯", "日誌統一可視", "AI 自動分級", "分級即時告警"];

const PILLARS = [
  {
    n: "01",
    title: "國際威脅情資訂閱",
    desc: "彙整全球資安研究機構與監測中心的開放式威脅數據，在地化過濾轉譯為企業可判讀的防禦規則。",
    Icon: IconThreatIntel,
  },
  {
    n: "02",
    title: "全設備日誌可視監控",
    desc: "統一匯整防火牆、主機、雲端服務等所有事件與流量紀錄，用客製化儀表板讓風險狀態可視、可追溯。",
    Icon: IconMonitoring,
  },
  {
    n: "03",
    title: "AI 智能風險研判",
    desc: "雙層交叉比對內部事件與最新威脅情資，自動分級、過濾雜訊，產出可落地的處置建議。",
    Icon: IconAIEngine,
  },
  {
    n: "04",
    title: "分級即時告警機器人",
    desc: "依風險等級差異化推送通知，支援權限分組與時間軸追溯，讓事件處理形成完整閉環。",
    Icon: IconAlertBot,
  },
];

const AUDIENCE = [
  { title: "中小企業", desc: "沒有專職資安團隊，需要用有限預算補齊維運能力。" },
  { title: "政府機關單位", desc: "需符合資安規範，但既有設備分散、缺乏統一監控視角。" },
  { title: "成長中的新創", desc: "業務快速擴張，資安建置要跟得上但不能拖慢腳步。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid gap-12 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
          <div>
            <p className="eyebrow mb-5">ENTERPRISE THREAT DEFENSE</p>
            <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-ink sm:text-5xl">
              把雜亂的資安事件，
              <br />
              變成有序的防禦體系
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
              變種攻擊與新型漏洞層出不窮，傳統被動式防禦與單純日誌紀錄已難以應對。我們透過國際情資匯整、全設備可視監控、AI
              風險研判與分級即時告警，協助企業將海量事件轉化為可預防、可追溯、可管理的主動式防禦。
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-dark"
              >
                了解服務架構
              </Link>
              <Link
                href="/contact"
                className="rounded border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                預約諮詢
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((h) => (
                <span key={h} className="flex items-center gap-2 text-xs text-muted">
                  <span className="h-1 w-1 rounded-full bg-signal" />
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="h-64 rounded border border-line bg-surface p-4 sm:h-80">
            <SignalGrid />
          </div>
        </div>
      </section>

      {/* Two core business lines */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="eyebrow mb-4">核心營運項目</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded border border-line bg-surface p-8">
              <h3 className="text-lg font-bold text-ink">專業情資訂閱服務</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                提供在地化、可判讀、可對應防禦的企業級威脅情資訂閱，讓企業即時掌握全球攻擊態勢，提前部署防禦對策。
              </p>
            </div>
            <div className="rounded border border-line bg-surface p-8">
              <h3 className="text-lg font-bold text-ink">企業整體資安架構建置</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                以輕量化、高彈性、高 CP 值的導入模式，協助企業在有限人力與預算下建置企業級資安維運能力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="eyebrow mb-4">技術架構</p>
          <h2 className="text-2xl font-bold text-ink">四大核心技術模組</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-signal">{p.n}</span>
                  <p.Icon className="h-8 w-8 text-signal" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-sm font-medium text-signal hover:text-signal-dark">
              查看完整服務內容 →
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="eyebrow mb-4">適合對象</p>
          <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.title} className="bg-surface p-7">
                <h3 className="text-base font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand value */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="max-w-2xl text-xl font-medium leading-relaxed text-ink">
            我們不做傳統設備販售導向的資安服務，專注為企業建置輕量、自動、有效、好維運的現代化資安防禦體系
            ——
            <span className="text-signal">每一筆資安投入，都能看見具體防禦成效。</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded border border-line bg-ink p-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">準備好盤點貴公司的資安缺口了嗎？</h2>
            <p className="mt-2 text-sm text-white/70">留下需求，我們會在一個工作天內回覆評估建議。</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-light"
          >
            聯絡我們
          </Link>
        </div>
      </section>
    </>
  );
}
