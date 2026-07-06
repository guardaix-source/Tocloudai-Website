import Link from "next/link";
import DashboardMock from "@/components/DashboardMock";
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

const PAIN_POINTS = [
  { title: "人工比對耗時", desc: "資安人員每天手動比對日誌與情資，等到發現異常，攻擊往往已經造成損害。" },
  { title: "資料來源分散", desc: "防火牆、主機、雲端服務各自留存紀錄，沒有統一視角，難以看見完整攻擊鏈。" },
  { title: "告警延遲失焦", desc: "海量雜訊事件淹沒真正的高風險警示，重要通知常被延遲處理或直接忽略。" },
];

const PROCESS = [
  { n: 1, title: "初步盤點", desc: "了解現有設備、日誌來源與資安痛點，抓出優先處理的風險缺口。" },
  { n: 2, title: "架構建議", desc: "依規模與預算提出對應的情資訂閱與監控導入方案。" },
  { n: 3, title: "分階段建置", desc: "依模組逐步導入監控平台、AI 分析與告警機制，不打斷既有維運。" },
  { n: 4, title: "持續維運", desc: "事件分級處理、定期檢視告警規則，隨威脅趨勢調整防禦策略。" },
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
            <h1 className="text-5xl font-black leading-[1.12] tracking-tight text-ink sm:text-6xl">
              把雜亂的資安事件，
              <br />
              變成<span className="grad-text">有序的防禦體系</span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-slate">
              變種攻擊與新型漏洞層出不窮，傳統被動式防禦與單純日誌紀錄已難以應對。我們透過國際情資匯整、全設備可視監控、AI
              風險研判與分級即時告警，協助企業將海量事件轉化為可預防、可追溯、可管理的主動式防禦。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded bg-signal px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-signal-dark"
              >
                預約諮詢
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services"
                className="rounded border border-line px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                了解服務架構
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((h) => (
                <span key={h} className="flex items-center gap-1.5 text-sm text-muted">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-signal-bright" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M5.3 8.2l1.8 1.8 3.6-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="h-72 overflow-hidden rounded-lg shadow-[0_0_60px_-15px_rgba(62,130,247,0.35)] sm:h-96">
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* Four pillars — feature grid */}
      <section id="features" className="section-line scroll-mt-28">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">技術架構</p>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              四大核心技術，構成<span className="grad-text">完整防禦閉環</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.n} className="glow-card rounded-lg bg-surface p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded bg-signal-light">
                  <p.Icon className="h-6 w-6 text-signal-bright" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-base font-medium text-signal-bright hover:text-signal">
              查看完整服務內容 →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            別再讓<span className="grad-text">被動記錄</span>拖慢防禦速度
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
            人工比對、資料分散、告警延遲，是多數企業資安維運的日常，也是攻擊者最容易利用的空隙。
          </p>
          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="glow-card rounded-lg bg-surface p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-risk-high/15">
                  <span className="h-2 w-2 rounded-full bg-risk-high" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" className="section-line scroll-mt-28">
        <div className="mx-auto max-w-content px-6 py-16 text-center">
          <p className="eyebrow mb-4">合作流程</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">從<span className="grad-text">盤點</span>到持續維運</h2>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="glow-card rounded-lg bg-surface p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal font-mono text-sm font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="eyebrow mb-4">適合對象</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.title} className="glow-card rounded-lg bg-surface p-7">
                <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA panel */}
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-xl border border-line bg-surface px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            準備好<span className="grad-text">盤點資安缺口</span>了嗎？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate">
            留下需求，我們會在一個工作天內回覆評估建議。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-signal px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-signal-dark"
          >
            聯絡我們
            <span aria-hidden>→</span>
          </Link>
          <p className="mt-4 text-xs text-muted">不需要事先準備資料 · 一個工作天內回覆</p>
        </div>
      </section>
    </>
  );
}
