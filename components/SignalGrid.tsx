// Signature visual: scattered "noise" resolving into an ordered grid.
// Embodies the brand thesis — turning chaotic security events into an
// ordered, traceable defense system. Positions are deterministic (no
// Math.random) so server and client render identically.

function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const NOISE_COUNT = 42;
const GRID_COLS = 6;
const GRID_ROWS = 5;

export default function SignalGrid() {
  const noiseDots = Array.from({ length: NOISE_COUNT }).map((_, i) => {
    const x = seeded(i) * 230 + 10;
    const y = seeded(i + 100) * 260 + 10;
    const r = 1.4 + seeded(i + 200) * 2.2;
    const o = 0.25 + seeded(i + 300) * 0.55;
    return { x, y, r, o, key: `n-${i}` };
  });

  const gridDots = Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => {
    const col = i % GRID_COLS;
    const row = Math.floor(i / GRID_COLS);
    const x = 330 + col * 42;
    const y = 30 + row * 50;
    const isHigh = (col + row) % 7 === 0;
    return { x, y, isHigh, key: `g-${i}` };
  });

  return (
    <svg
      viewBox="0 0 600 300"
      className="h-full w-full"
      role="img"
      aria-label="從分散雜訊到有序風險網格的視覺呈現"
    >
      <defs>
        <linearGradient id="fadeLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#DEE1E6" stopOpacity="0" />
          <stop offset="100%" stopColor="#1F6F6B" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* scattered noise */}
      {noiseDots.map((d) => (
        <circle key={d.key} cx={d.x} cy={d.y} r={d.r} fill="#4A5468" opacity={d.o} />
      ))}

      {/* connecting thread */}
      <line x1="250" y1="150" x2="320" y2="150" stroke="url(#fadeLine)" strokeWidth="1.5" />

      {/* resolved grid */}
      {gridDots.map((d) => (
        <rect
          key={d.key}
          x={d.x - 3}
          y={d.y - 3}
          width="6"
          height="6"
          rx="1"
          fill={d.isHigh ? "#C1502E" : "#1F6F6B"}
          opacity={d.isHigh ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}
