import DashboardMock from "@/components/DashboardMock";
import PhoneMock from "@/components/PhoneMock";
import CTAForm from "@/components/CTAForm";
import {
  IconShieldCrack,
  IconRadar,
  IconClockAlert,
  IconTarget,
  IconChecklist,
  IconMobile,
  IconTrendDown,
  IconRocket,
  IconShieldCheck,
  IconInfinity,
  IconThreatIntel,
  IconMonitoring,
  IconAIEngine,
  IconAlertBot,
} from "@/components/Icons";

const HERO_HIGHLIGHTS = ["情資在地化轉譯", "日誌統一可視", "AI 分級即時告警"];

const CRISIS_STATS = [
  {
    value: "260萬次",
    unit: "/ 日",
    desc: "2025 年數據顯示，台灣每日平均遭受超過 260 萬次的網路攻擊，全面滲透製造、金融與政府機關。",
    source: "資料來源：國安局《2025網駭威脅分析》",
  },
  {
    value: "36,000次",
    unit: "/ 秒",
    desc: "攻擊者正大規模部署自動化掃描，全球每秒高達 36,000 次掃描活動，無死角刺探您的企業漏洞。",
    source: "資料來源：FortiGuard Labs《2025全球資安威脅報告》",
  },
  {
    value: "500%",
    unit: "暴增",
    desc: "資訊竊取惡意程式（Infostealer）感染量暴增 500%，暗網充斥著企業被盜的存取憑證。",
    source: "資料來源：FortiGuard Labs《2025全球資安威脅報告》",
  },
  {
    value: "50,000筆",
    unit: "雜訊",
    desc: "傳統設備的告警風暴淹沒 IT，真正的致命威脅就藏在無效的警報中。",
    source: null,
  },
];

const FEATURES = [
  {
    Icon: IconTarget,
    title: "毫秒級精準推播",
    desc: "內建 AI 風險評分，過濾 99% 雜訊，僅通報真正的高危險事件（如內網偷連 C&C 伺服器）。",
  },
  {
    Icon: IconChecklist,
    title: "附帶處置 SOP",
    desc: "每則通報皆附帶 AI 研判報告與具體防禦建議（如一鍵封鎖惡意 IP），讓 IT 不再半夜盲目救火。",
  },
  {
    Icon: IconMobile,
    title: "即裝即戰",
    desc: "開箱即用，免去傳統 SIEM 漫長的建置地獄，透過 Telegram/Line 輕鬆掌握全域安全。",
  },
];

const ROI = [
  {
    Icon: IconTrendDown,
    value: "30%",
    title: "降低總體擁有成本",
    desc: "免百萬建置費，大幅降低資安分析師的人力招募與系統維護支出。",
  },
  {
    Icon: IconRocket,
    value: "80%",
    title: "提升威脅處置效率",
    desc: "AI 自動排序優先級，全面釋放 IT 人力專注於核心營運。",
  },
  {
    Icon: IconShieldCheck,
    value: "100%",
    title: "合規與稽核保障",
    desc: "提供完整的日誌留存與鑑識擴充包，輕鬆通過 ISO 27001 與供應鏈資安稽核要求。",
  },
  {
    Icon: IconInfinity,
    value: "業務連續性",
    title: "核心營運穩定發展",
    desc: "企業核心營運穩定且長期發展，不受資安事件影響，讓成長不因一次入侵而中斷。",
  },
];

const PIPELINE = [
  { n: "1", label: "威脅偵測", Icon: IconThreatIntel },
  { n: "2", label: "AI 分析", Icon: IconAIEngine },
  { n: "3", label: "即時告警", Icon: IconAlertBot },
  { n: "4", label: "處置建議", Icon: IconChecklist },
  { n: "5", label: "SOC 專家", Icon: IconMonitoring },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* Section 1 — Hero */}
      {/* ============================================================ */}
      <header id="hero" className="bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:py-24">
          <div>
            <p className="eyebrow mb-5">雲智禦 AI 決策系統</p>
            <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-ink sm:text-5xl">
              企業的安全新視界 —<br />
              迎戰 2026 武器化 AI 攻擊，
              <br />
              您的防禦時間已<span className="grad-text">趨近於零</span>！
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              告別被動挨打！讓 AI 成為您的主動式智慧安防雷達。
            </p>

            <div className="mt-7 rounded-lg border border-signal/20 bg-signal-light px-5 py-4">
              <p className="text-sm font-medium leading-relaxed text-ink sm:text-base">
                企業級 AI 智慧安防，最低月訂閱只需{" "}
                <span className="text-xl font-black text-signal-dark">$18,000</span> 起（每日只要 $600），
                即刻享有全天候虛擬資安團隊！
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form-section"
                className="btn-pill flex items-center gap-2 bg-signal px-7 py-3.5 text-base font-semibold text-white shadow-lift transition-colors hover:bg-signal-bright"
              >
                立即導入 CTEM，申請免費 POC 測試
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {HERO_HIGHLIGHTS.map((h) => (
                <span key={h} className="flex items-center gap-1.5 text-sm text-muted">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-signal" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M5.3 8.2l1.8 1.8 3.6-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="h-72 overflow-hidden rounded-lg shadow-mock sm:h-96">
            <DashboardMock />
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* Section 2 — Crisis stats */}
      {/* ============================================================ */}
      <section id="crisis-stats" className="bg-surface2">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <p className="eyebrow mb-4 text-center">THE SILENT CRISIS</p>
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
            砸了重金買防火牆，為什麼還是<span className="grad-text">防不勝防</span>？
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CRISIS_STATS.map((s) => (
              <div key={s.value} className="card-lift rounded-lg bg-white p-6 shadow-card">
                <p className="font-mono text-3xl font-black text-signal">
                  {s.value}
                  <span className="ml-1 text-base font-bold text-slate">{s.unit}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.desc}</p>
                {s.source && <p className="mt-4 text-xs text-muted">{s.source}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — Blind spot */}
      {/* ============================================================ */}
      <section id="blind-spot" className="bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:grid-cols-2 sm:items-center sm:py-20">
          <div className="order-2 flex items-center justify-center sm:order-1">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-signal-light sm:h-80 sm:w-80">
              <IconClockAlert className="h-28 w-28 text-signal sm:h-36 sm:w-36" />
              <IconShieldCrack className="absolute -bottom-3 -right-3 h-16 w-16 text-signal-dark sm:h-20 sm:w-20" />
            </div>
          </div>
          <div className="order-1 sm:order-2">
            <p className="eyebrow mb-4">THE BLIND SPOT</p>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              企業安全的最大盲點：您只想著防不防得住，卻沒想過<span className="grad-text">多久才會發現</span>？
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate">
              <p>許多企業談資安，第一個想到的永遠是「防」。防火牆有沒有裝？端點防護是不是最新？</p>
              <p>
                但在實務上，企業主必須直面兩個最殘酷的指標：平均偵測時間（駭客進來到您發現，花了多久？）與
                平均回應時間（發現異常到真正行動，又花了多久？）。
              </p>
              <p>
                面對每週高達 4,055 次的攻擊，多數企業的現實是：系統其實早就被潛入。因為每天有高達 50,000
                筆的無效告警淹沒 IT，缺乏即時異常分析，導致企業往往是等到客戶反映、資料外洩上新聞，才驚覺事情已經失控。這時再來補救，往往只剩止血，再也挽回不了商譽崩盤。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — CTEM solution */}
      {/* ============================================================ */}
      <section id="solution-ctem" className="bg-surface2">
        <div className="mx-auto max-w-content px-6 py-16 text-center sm:py-20">
          <p className="eyebrow mb-4">THE PARADIGM SHIFT</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
            企業需要的不再是更厚的盾，而是<span className="grad-text">毫秒級的雷達</span>
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-lg leading-relaxed text-slate">
            <p>
              Gartner 在其十大技術趨勢中預警，被動的「偵測與回應」已無法應對現代威脅。雲智禦 AI
              決策系統，完美實踐 CTEM（持續威脅暴露管理）框架。
            </p>
            <p>
              您的防火牆負責「防」，雲智禦負責「抓」。我們無痛外掛於您的基礎防火牆，運用卡巴斯基全球情資，將原本可能長達數個月的「平均偵測時間
              (MTTD)」，瞬間壓縮至毫秒級別。
            </p>
          </div>

          {/* Traditional defense → CTEM pipeline comparison */}
          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 shadow-card sm:w-40">
              <IconShieldCrack className="h-10 w-10 text-muted" />
              <p className="mt-3 text-sm font-semibold text-slate">傳統防禦</p>
              <p className="mt-1 text-xs text-muted">被動、單點、事後補救</p>
            </div>

            <IconRadar className="h-6 w-6 shrink-0 rotate-90 text-line sm:rotate-0" />

            <div className="grid w-full grid-cols-5 gap-2 rounded-lg bg-white p-4 shadow-card sm:w-auto sm:gap-3 sm:p-5">
              {PIPELINE.map((p) => (
                <div key={p.n} className="flex flex-col items-center gap-1.5 px-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-light sm:h-10 sm:w-10">
                    <p.Icon className="h-5 w-5 text-signal" />
                  </div>
                  <p className="text-center text-[10px] font-medium leading-tight text-ink sm:text-xs">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs italic text-muted">雲智禦 CTEM 框架：資料流向持續循環，形成完整防禦閉環</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Feature showcase */}
      {/* ============================================================ */}
      <section id="features-showcase" className="bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:grid-cols-2 sm:items-center sm:py-20">
          <div>
            <p className="eyebrow mb-4">THE &ldquo;AHA&rdquo; MOMENT</p>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              告別告警風暴，把<span className="grad-text">AI 戰情室放進口袋</span>
            </h2>

            <div className="mt-8 space-y-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal-light">
                    <f.Icon className="h-6 w-6 text-signal" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-slate">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PhoneMock />
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — Business ROI */}
      {/* ============================================================ */}
      <section id="business-roi" className="bg-surface2">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <p className="eyebrow mb-4 text-center">BUSINESS ROI</p>
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
            投資報酬分析 — 導入 CTEM 的<span className="grad-text">高價值商業決策</span>
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROI.map((r) => (
              <div key={r.title} className="card-lift rounded-lg bg-white p-6 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal-light">
                  <r.Icon className="h-6 w-6 text-signal" />
                </div>
                <p className="mt-4 text-2xl font-black text-signal">{r.value}</p>
                <h3 className="mt-1 text-sm font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — Final CTA */}
      {/* ============================================================ */}
      <footer id="contact-form-section" className="bg-signal-dark">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:grid-cols-2 sm:items-center sm:py-20">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              光聽不準，讓您看見現有環境的潛藏威脅！
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
              面對每秒萬次的掃描威脅，內部開會討論的時間就是駭客入侵的空窗期。無需更動您現有的網路架構，即刻申請
              免費 14 天 POC 概念驗證測試。讓真實數據說話，找出隱藏在貴公司內網的攻擊軌跡！
            </p>
          </div>
          <CTAForm />
        </div>
      </footer>
    </>
  );
}
