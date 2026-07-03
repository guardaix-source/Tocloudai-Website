// A believable monitoring-dashboard mockup — communicates "what this product
// looks like" at a glance, instead of an abstract pattern that needs
// explaining. Built from HTML/CSS to read as a real UI, not an illustration.

const LOG_ROWS = [
  { time: "14:02:11", src: "防火牆 / 對外連線", level: "high" as const, note: "異常掃描行為，來源 IP 已封鎖" },
  { time: "14:01:47", src: "雲端服務 / 登入", level: "mid" as const, note: "非常用地區登入嘗試" },
  { time: "13:58:03", src: "主機伺服器", level: "low" as const, note: "例行更新，無異常" },
  { time: "13:55:20", src: "網路交換設備", level: "low" as const, note: "流量在正常範圍內" },
];

const LEVEL_STYLE = {
  high: "bg-risk-high/10 text-risk-high",
  mid: "bg-risk-mid/10 text-risk-mid",
  low: "bg-risk-low/10 text-risk-low",
};

const LEVEL_LABEL = { high: "高", mid: "中", low: "低" };

export default function DashboardMock() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded bg-ink text-white">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="eyebrow ml-3 text-white/50">即時監控儀表板</span>
      </div>

      {/* stat strip */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-high">2</p>
          <p className="mt-0.5 text-[11px] text-white/50">高風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-mid">5</p>
          <p className="mt-0.5 text-[11px] text-white/50">中風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-low">18</p>
          <p className="mt-0.5 text-[11px] text-white/50">低風險事件</p>
        </div>
      </div>

      {/* log rows */}
      <div className="flex-1 divide-y divide-white/10 overflow-hidden">
        {LOG_ROWS.map((row) => (
          <div key={row.time} className="flex items-center gap-3 px-4 py-2.5">
            <span className="font-mono text-[11px] text-white/40">{row.time}</span>
            <span className="flex-1 truncate text-[12px] text-white/80">
              <span className="text-white/50">{row.src}</span>
              <span className="mx-1.5 text-white/25">·</span>
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
  );
}
