// Vector brand mark — a stopgap for the low-resolution raster logo.
// Cloud + circuit + AI chip, in the brand's blue gradient. Renders crisp
// at any size since it's pure SVG, no upscaling artifacts.

export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7CB2FF" />
          <stop offset="100%" stopColor="#2E63C9" />
        </linearGradient>
      </defs>

      {/* cloud */}
      <path
        d="M20 40c-5.5 0-10-4.3-10-9.6 0-5 3.8-9.1 8.8-9.6.9-4.8 5.2-8.4 10.3-8.4 5 0 9.2 3.4 10.2 8 .5-.1 1.1-.2 1.7-.2 5 0 9 3.9 9 8.7 0 4.8-4 8.7-9 8.7-6.9.1-14.1.4-21 .4z"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      {/* checkmark / protection glyph */}
      <path
        d="M23 32.5l6 6 11-13"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* circuit traces */}
      <path
        d="M14 44v3h-4M14 44l-5 4"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="10" cy="47" r="1.4" fill="url(#logoGrad)" />
      <circle cx="9" cy="48" r="1.4" fill="url(#logoGrad)" opacity="0.7" />

      <path
        d="M46 42v4h5M46 42l6-3"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="51" cy="46" r="1.4" fill="url(#logoGrad)" />
      <circle cx="52" cy="39" r="1.4" fill="url(#logoGrad)" opacity="0.7" />

      {/* AI chip badge */}
      <rect x="41" y="39" width="16" height="13" rx="2.5" fill="#0B0F1A" stroke="url(#logoGrad)" strokeWidth="1.4" />
      <text
        x="49"
        y="48.2"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="#7CB2FF"
        fontFamily="ui-monospace, monospace"
      >
        AI
      </text>
    </svg>
  );
}
