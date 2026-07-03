import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們｜TocloudAI",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <p className="eyebrow mb-4">ABOUT</p>
      <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">關於我們</h1>

      <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-ink">
        我們不做傳統設備販售導向的資安服務，專注為企業建置輕量、自動、有效、好維運的現代化資安防禦體系。
      </p>

      <div className="mt-10 max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
        <p>
          透過國際威脅情資訂閱、客製化監控建置、AI 智能分析、即時告警四大技術模組，以新創團隊的靈活與創新能力，讓中小企業與機關單位，能用更精簡的人力與預算，落地高規格的主動式資安管理。
        </p>
        <p>
          真正實現每一筆資安投入，都能看見具體防禦成效。
        </p>
      </div>

      <div className="mt-14 grid gap-6 border-t border-line pt-10 sm:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-signal">輕量化</p>
          <p className="mt-2 text-sm text-slate">高彈性、高 CP 值的導入模式，不綁死既有資源配置。</p>
        </div>
        <div>
          <p className="font-mono text-sm text-signal">自動化</p>
          <p className="mt-2 text-sm text-slate">AI 分擔人工審核負擔，聚焦真正需要人判斷的威脅。</p>
        </div>
        <div>
          <p className="font-mono text-sm text-signal">可追溯</p>
          <p className="mt-2 text-sm text-slate">每一起事件都有編號、時間軸與處置紀錄，全程可覆盤。</p>
        </div>
      </div>
    </section>
  );
}
