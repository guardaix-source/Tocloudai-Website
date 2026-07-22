type Level = "high" | "mid" | "low";

const LABEL: Record<Level, string> = {
  high: "高風險",
  mid: "中風險",
  low: "低風險",
};

const COLOR: Record<Level, string> = {
  high: "bg-risk-high/10 text-risk-high",
  mid: "bg-risk-mid/10 text-risk-mid",
  low: "bg-risk-low/10 text-risk-low",
};

export default function RiskBadge({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide ${COLOR[level]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABEL[level]}
    </span>
  );
}
