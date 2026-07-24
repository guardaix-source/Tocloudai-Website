// A believable monitoring-dashboard mockup, styled like a real product
// window (traffic-light chrome + labeled title bar). Deliberately kept as
// a self-contained DARK "product screenshot" widget with hardcoded literal
// hex values matching Keith's spec ("對比色 Mockup：#111827"), decoupled
// from the site's white/light-gray page background — dark UI on a light
// page is a common SaaS marketing contrast pattern.

const LOG_ROWS = [
  { time: "16:46:22", src: "防火牆 / DNS 阻擋", level: "high" as const, note: "偵測到網域阻擋，來源已封鎖" },
  { time: "14:45:44", src: "VPN / 認證", level: "high" as const, note: "VPN 認證失敗，疑似暴力破解" },
  { time: "14:12:08", src: "網路交換設備", level: "low" as const, note: "Connection Failed，例行流量" },
];

const LEVEL_STYLE = {
  high: "bg-[#EF4444]/15 text-[#F87171]",
  mid: "bg-[#F59E0B]/15 text-[#FBBF24]",
  low: "bg-[#22C55E]/15 text-[#4ADE80]",
};

const LEVEL_LABEL = { high: "高", mid: "中", low: "低" };

const STATS = [
  { value: 75, label: "高等級事件", color: "#3B82F6", bars: [40, 70, 55, 90, 65] },
  { value: 15, label: "需人工複判", color: "#F59E0B", bars: [60, 45, 80, 50, 70] },
  { value: 1, label: "不需要處理", color: "#22C55E", bars: [30, 20, 25, 15, 20] },
];

export default function DashboardMock() {
  return (
    <div className="relative h-full w-full">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-[#1F2937] bg-[#111827]">
        {/* title bar */}
        <div className="flex items-center gap-1.5 border-b border-[#1F2937] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
            雲智禦 AI 戰情室
          </span>
          <span className="ml-auto flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <span className="font-mono text-xs font-bold tracking-wider text-[#4ADE80]">LIVE</span>
          </span>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-3 divide-x divide-[#1F2937] border-b border-[#1F2937]">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-2 px-4 py-3">
              <div>
                <p className="font-mono text-2xl font-bold" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] text-[#6B7280]">{s.label}</p>
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

        {/* log rows — bottom padding reserves clear space for the floating
            AI card below so it never overlaps a real log entry */}
        <div className="flex-1 divide-y divide-[#1F2937] overflow-hidden pb-24">
          {LOG_ROWS.map((row) => (
            <div key={row.time} className="flex items-center gap-3 px-4 py-2.5">
              <span className="font-mono text-[11px] text-[#6B7280]">{row.time}</span>
              <span className="flex-1 truncate text-[12px] text-[#D1D5DB]">
                <span className="text-[#6B7280]">{row.src}</span>
                <span className="mx-1.5 text-[#374151]">·</span>
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
      <div className="absolute bottom-3 left-3 z-10 w-56 rounded-lg border border-[#1F2937] bg-[#1A2233] p-3.5 shadow-2xl">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#3B82F6]/15 font-mono text-[9px] font-bold text-[#60A5FA]">
            AI
          </span>
          <span className="text-[11px] font-semibold text-[#D1D5DB]">處置建議</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-[#9CA3AF]">
          立即隔離內網來源 IP 進行端點清查，並將惡意網域加入 DNS 過濾清單。
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#4ADE80]">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3.5 8.2l2.7 2.7 6.3-6.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          AI 已完成研判 · 16:46
        </div>
      </div>
    </div>
  );
}
