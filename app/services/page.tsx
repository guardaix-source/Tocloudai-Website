import type { Metadata } from "next";
import RiskBadge from "@/components/RiskBadge";

export const metadata: Metadata = {
  title: "服務項目｜TocloudAI",
};

const AI_CAPABILITIES = [
  { title: "自動風險分級", desc: "依危害程度、攻擊特徵、影響範圍，自動區分高、中、低風險等級。" },
  { title: "智慧雜訊過濾", desc: "自動篩除重複事件、正常連線、誤報資訊，降低人工審核負擔，聚焦真威脅。" },
  { title: "威脅上下文比對", desc: "對照最新全球攻擊手法、漏洞特徵、入侵鏈路，判斷事件是否屬於已知攻擊行為。" },
  { title: "自動化處置建議", desc: "針對每一起有效風險事件，產生標準化、可立即落地的防禦與修補建議。" },
];

const SERVICE_LIST = [
  "國際全球威脅情資訂閱、在地化風險解析與趨勢報告服務",
  "企業整體資安架構規劃、防禦策略建置與資安落地輔導",
  "開源監控平台建置、全設備日誌匯整、可視化儀表板客製開發",
  "AI 資安事件分析、誤報過濾、風險研判與自動對策系統建置",
  "線上客製化告警機器人開發、分級通知與維運流程導入",
  "資安事件溯源調查、風險盤點、弱點修補與防禦優化諮詢",
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pb-14 pt-16 sm:pt-20">
        <p className="eyebrow mb-4">SERVICES</p>
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">服務項目</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          四大核心技術模組彼此串接，構成從情資蒐集到事件結案的完整資安維運閉環。
        </p>
      </section>

      {/* Module 1 */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-14">
          <span className="font-mono text-sm text-signal">01</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">國際全球威脅情資訂閱服務</h2>
          <p className="mt-2 text-sm text-muted">通用開放威脅資料庫</p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate">
            整合國際公開全球威脅情資體系，彙整全球各大資安研究機構、國際威脅監測中心的開放式威脅數據，即時更新最新勒索軟體、木馬病毒、惡意程式、系統漏洞、異常掃描、暴力破解、DDoS
            攻擊、產業攻擊趨勢等完整威脅指標與攻擊特徵。
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            有別於一般公開原始情資，我們針對台灣企業營運場域、產業屬性、常見攻擊場景進行在地化過濾、場域適配、風險轉譯，將龐雜難解的國際威脅數據，轉換為企業可對照、可判讀、可對應防禦的規則與警示標準。
          </p>
        </div>
      </section>

      {/* Module 2 */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-14">
          <span className="font-mono text-sm text-signal">02</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">全環境事件匯整與可視化監控建置</h2>
          <p className="mt-2 text-sm text-muted">開源監控平台</p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate">
            企業資安最大痛點，多為設備日誌分散、事件雜訊過高、無統一監控介面、異常行為無法即時察覺，往往僅能事後追溯。我們基於開源資料視覺化監控技術，為企業建置專屬整合監控平台，統一匯整防火牆、網路交換設備、主機伺服器、雲端服務、對外連線、內網存取等所有資安事件與流量紀錄。
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            透過客製化儀表板，即時視覺呈現異常對外連線、高風險存取行為、頻率異常掃描等關鍵風險狀態，讓資安狀態可視、可監、可量化、可追溯。
          </p>
        </div>
      </section>

      {/* Module 3 */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-14">
          <span className="font-mono text-sm text-signal">03</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">AI 智能安全事件分析與風險研判引擎</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate">
            單純的日誌蒐集無法產生防禦價值，我們導入 AI 自動分析研判機制，結合企業內部真實事件紀錄與國際最新威脅情資上下文進行雙層交叉比對，自動化完成風險鑑別。
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
            {AI_CAPABILITIES.map((c) => (
              <div key={c.title} className="bg-surface p-6">
                <h3 className="text-sm font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <RiskBadge level="high" />
            <RiskBadge level="mid" />
            <RiskBadge level="low" />
          </div>
        </div>
      </section>

      {/* Module 4 */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-14">
          <span className="font-mono text-sm text-signal">04</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">客製化即時分級告警機器人服務</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate">
            解決傳統監控「有紀錄、無通知、事件延遲處理」的維運缺口，我們建置專屬客製化線上告警機器人，搭配 AI
            分析結果進行分級、分群、即時推送。高風險事件即時緊急推送、中風險事件彙整警示、低風險事件自動紀錄留存。
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            支援權限分組、事件編號管理、時間軸追溯、處置狀態對應，完整實現資安事件「即時發現、即時通知、可追溯、可結案、可復盤」的閉環式管理流程。
          </p>
        </div>
      </section>

      {/* Full service list */}
      <section className="section-line">
        <div className="mx-auto max-w-content px-6 py-14">
          <p className="eyebrow mb-6">完整服務清單</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {SERVICE_LIST.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
