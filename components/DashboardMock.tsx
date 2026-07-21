// A believable monitoring-dashboard mockup, styled like a real product
// window (traffic-light chrome + labeled title bar).
//
// Visual language borrowed from observability products (Sentry-style):
// violet-tinted midnight canvas, data-dense rows, monospace timestamps,
// tabular figures, and a quiet "AI noise-filter" status line — so the
// mockup reads like a screenshot of the actual product.

const LOG_ROWS = [
  { time: "14:02:11", src: "防火牆 / 對外連線", level: "high" as const, note: "異常掃描行為，來源 IP 已封鎖", mobileHidden: false },
  { time: "14:01:47", src: "雲端服務 / 登入", level: "mid" as const, note: "非常用地區登入嘗試", mobileHidden: false },
  { time: "13:58:03", src: "主機伺服器", level: "low" as const, note: "例行更新，無異常", mobileHidden: false },
  { time: "13:55:20", src: "網路交換設備", level: "low" as const, note: "流量在正常範圍內", mobileHidden: true },
];

const LEVEL_STYLE = {
  high: "bg-[#FF6B54]/15 text-[#FF7A66]",
  mid: "bg-[#FFB648]/15 text-[#FFC163]",
  low: "bg-[#3DD68C]/15 text-[#4ADE97]",
};

const LEVEL_LABEL = { high: "高", mid: "中", low: "低" };

const STATS = [
  { n: "2", label: "高風險事件", color: "text-[#FF7A66]", bars: [3, 5, 2, 6, 4, 8, 5] },
  { n: "5", label: "中風險事件", color: "text-[#FFC163]", bars: [4, 6, 5, 3, 7, 5, 6] },
  { n: "18", label: "低風險事件", color: "text-[#4ADE97]", bars: [5, 4, 6, 5, 4, 6, 5] },
];

export default function DashboardMock() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-[#2E2A45] bg-[#171225]">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-[#2E2A45] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs uppercase tracking-[0.14em] text-[#8DA6FF]">
          即時監控儀表板
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-[#4ADE97]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE97] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4ADE97]" />
          </span>
          LIVE
        </span>
      </div>

      {/* Stat row with mini trend bars */}
      <div className="grid grid-cols-3 divide-x divide-[#2E2A45] border-b border-[#2E2A45]">
        {STATS.map((s) => (
          <div key={s.label} className="min-w-0 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-end justify-between">
              <p className={`tnum font-mono text-base font-medium sm:text-lg ${s.color}`}>{s.n}</p>
              <div className="mb-1 hidden items-end gap-[2px] sm:flex" aria-hidden>
                {s.bars.map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-[1px] bg-[#43407A]"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-0.5 truncate text-[10px] text-[#7B7694] sm:text-[11px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Event rows */}
      <div className="flex-1 divide-y divide-[#2E2A45]/70 overflow-hidden">
        {LOG_ROWS.map((row) => (
          <div
            key={row.time}
            className={`${row.mobileHidden ? "hidden sm:flex" : "flex"} items-center gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4`}
          >
            <span className="tnum shrink-0 font-mono text-[11px] text-[#7B7694]">{row.time}</span>
            <span className="min-w-0 flex-1 truncate text-[12px] text-[#B4AEC8]">
              <span className="text-[#7B7694]">{row.src}</span>
              <span className="mx-1.5 text-[#2E2A45]">·</span>
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

      {/* AI status line */}
      <div className="flex items-center gap-2 border-t border-[#2E2A45] bg-[#131020] px-4 py-2">
        <svg viewBox="0 0 16 16" className="h-3 w-3 text-[#8DA6FF]" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M8 1.5l1.8 4.2 4.5.4-3.4 3 1 4.4L8 11.2l-3.9 2.3 1-4.4-3.4-3 4.5-.4z" strokeLinejoin="round" />
        </svg>
        <p className="tnum min-w-0 truncate font-mono text-[10px] text-[#7B7694]">
          AI 已自動過濾 214 筆重複與誤報事件 · 最近更新 14:02:11
        </p>
      </div>
    </div>
  );
}
