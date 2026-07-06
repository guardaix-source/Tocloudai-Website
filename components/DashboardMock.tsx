// A believable monitoring-dashboard mockup, styled like a real product
// window (traffic-light chrome + labeled title bar).

const LOG_ROWS = [
  { time: "14:02:11", src: "防火牆 / 對外連線", level: "high" as const, note: "異常掃描行為，來源 IP 已封鎖" },
  { time: "14:01:47", src: "雲端服務 / 登入", level: "mid" as const, note: "非常用地區登入嘗試" },
  { time: "13:58:03", src: "主機伺服器", level: "low" as const, note: "例行更新，無異常" },
  { time: "13:55:20", src: "網路交換設備", level: "low" as const, note: "流量在正常範圍內" },
];

const LEVEL_STYLE = {
  high: "bg-risk-high/15 text-risk-high",
  mid: "bg-risk-mid/15 text-risk-mid",
  low: "bg-risk-low/15 text-risk-low",
};

const LEVEL_LABEL = { high: "高", mid: "中", low: "低" };

export default function DashboardMock() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded border border-line bg-surface2">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="eyebrow ml-3 text-muted">即時監控儀表板</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-high">2</p>
          <p className="mt-0.5 text-[11px] text-muted">高風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-mid">5</p>
          <p className="mt-0.5 text-[11px] text-muted">中風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-risk-low">18</p>
          <p className="mt-0.5 text-[11px] text-muted">低風險事件</p>
        </div>
      </div>

      <div className="flex-1 divide-y divide-line overflow-hidden">
        {LOG_ROWS.map((row) => (
          <div key={row.time} className="flex items-center gap-3 px-4 py-2.5">
            <span className="font-mono text-[11px] text-muted">{row.time}</span>
            <span className="flex-1 truncate text-[12px] text-slate">
              <span className="text-muted">{row.src}</span>
              <span className="mx-1.5 text-line">·</span>
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
