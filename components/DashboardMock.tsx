// A believable monitoring-dashboard mockup, styled like a real product
// window (traffic-light chrome + labeled title bar).
//
// Deliberately kept on its own fixed dark palette instead of the shared
// theme tokens. Even on the site's light theme, this stays a dark "product
// screenshot" floating in the hero — a common, effective pattern for SaaS
// marketing pages (dark UI screenshot as a focal point on a light page).

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

export default function DashboardMock() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded border border-[#232B3D] bg-[#161E2E]">
      <div className="flex items-center gap-1.5 border-b border-[#232B3D] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs uppercase tracking-[0.14em] text-[#5B9CFF]">
          即時監控儀表板
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-[#232B3D] border-b border-[#232B3D]">
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-[#FF6B54]">2</p>
          <p className="mt-0.5 text-[11px] text-[#748099]">高風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-[#FFB648]">5</p>
          <p className="mt-0.5 text-[11px] text-[#748099]">中風險事件</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-lg font-medium text-[#3DD68C]">18</p>
          <p className="mt-0.5 text-[11px] text-[#748099]">低風險事件</p>
        </div>
      </div>

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
  );
}
