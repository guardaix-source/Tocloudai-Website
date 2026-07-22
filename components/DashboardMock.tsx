// A believable monitoring-dashboard mockup, styled like a real product
// window (traffic-light chrome + labeled title bar). Deliberately kept as
// a self-contained DARK "product screenshot" widget with hardcoded literal
// hex values, decoupled from the site's light-theme tokens — a common SaaS
// marketing pattern (dark app UI shown inside an otherwise light page).

const LOG_ROWS = [
  { time: "14:02:11", src: "防火牆 / 對外連線", level: "high" as const, note: "異常掃描行為，來源 IP 已封鎖" },
  { time: "14:01:47", src: "雲端服務 / 登入", level: "mid" as const, note: "非常用地區登入嘗試" },
  { time: "13:58:03", src: "主機伺服器", level: "low" as const, note: "例行更新，無異常" },
  { time: "13:55:20", src: "網路交換設備", level: "low" as const, note: "流量在正常範圍內" },
];

const LEVEL_STYLE = {
  high: "bg-[#FF6B54]/15 text-[#FF6B54]",
  mid: "bg-[#FFB648]/15 text-[#FFB648]",
  low: "bg-[#3DD68C]/15 text-[#3DD68C]",
};

const LEVEL_LABEL = { high: "高", mid: "中", low: "低" };

const STATS = [
  { value: 2, label: "高風險事件", color: "#FF6B54", bars: [40, 70, 55, 90, 65] },
  { value: 5, label: "中風險事件", color: "#FFB648", bars: [60, 45, 80, 50, 70] },
  { value: 18, label: "低風險事件", color: "#3DD68C", bars: [50, 65, 55, 75, 60] },
];

export default function DashboardMock() {
  return (
    <div className="relative h-full w-full">
      <div className="flex h-full w-full flex-col overflow-hidden rounded border border-[#232B3D] bg-[#0B0F1A]">
        {/* title bar */}
        <div className="flex items-center gap-1.5 border-b border-[#232B3D] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-[#748099]">
            即時監控儀表板
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3DD68C] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
            </span>
            <span className="font-mono text-[10px] font-medium tracking-wider text-[#3DD68C]">LIVE</span>
          </span>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-3 divide-x divide-[#232B3D] border-b border-[#232B3D]">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-2 px-4 py-3">
              <div>
                <p className="font-mono text-2xl font-bold" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] text-[#748099]">{s.label}</p>
              </div>
              <div className="flex h-6 items-end gap-[3px]">
                {s.bars.map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-full opacity-60"
                    style={{ height: `${h}%`, backgroundColor: s.color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* log rows */}
        <div className="flex-1 divide-y divide-[#232B3D] overflow-hidden">
          {LOG_ROWS.map((row) => (
            <div key={row.time} className="flex items-center gap-3 px-4 py-2.5">
              <span className="font-mono text-[11px] text-[#748099]">{row.time}</span>
              <span className="flex-1 truncate text-[12px] text-[#AAB4C8]">
                <span className="text-[#748099]">{row.src}</span>
                <span className="mx-1.5 text-[#232B3D]">·</span>
                {row.note}
              </span>
              <span
                className={`shrink-0 rounded-sm px-1.5 py-0.5 font-mono text-[10px] ${LEVEL_STYLE[row.level]}`}
              >
                {LEVEL_LABEL[row.level]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* floating AI suggestion card */}
      <div className="absolute bottom-3 left-3 z-10 w-56 rounded-lg border border-[#232B3D] bg-[#161E2E] p-3.5 shadow-2xl">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#5B9CFF]/15 font-mono text-[9px] font-bold text-[#5B9CFF]">
            AI
          </span>
          <span className="text-[11px] font-semibold text-[#AAB4C8]">處置建議</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-[#748099]">
          封鎖來源 IP 區段，並檢查防火牆規則 #142 的對外連線白名單。
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#3DD68C]">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3.5 8.2l2.7 2.7 6.3-6.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          已自動執行 · 14:02:15
        </div>
      </div>
    </div>
  );
}
