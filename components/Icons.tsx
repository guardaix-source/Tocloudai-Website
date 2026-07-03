// Minimal line-icon set — thin geometric strokes, matching the SignalGrid
// signature motif so the whole site shares one visual language.

type IconProps = { className?: string };

export function IconThreatIntel({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8.5" strokeOpacity="0.55" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <path d="M20 6v3M20 31v3M6 20h3M31 20h3" strokeLinecap="round" />
    </svg>
  );
}

export function IconMonitoring({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="6" y="8" width="28" height="20" rx="1.5" />
      <path d="M11 23l5-6 4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 33h28" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

export function IconAIEngine({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="20" cy="10" r="2.4" />
      <circle cx="9" cy="27" r="2.4" />
      <circle cx="31" cy="27" r="2.4" />
      <circle cx="20" cy="20" r="2.8" fill="currentColor" stroke="none" />
      <path d="M20 12.4v5.2M18 21.6l-7.3 4M22 21.6l7.3 4" strokeOpacity="0.6" />
    </svg>
  );
}

export function IconAlertBot({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M20 8c-5 0-8.5 3.8-8.5 9v6l-2.5 4h22l-2.5-4v-6c0-5.2-3.5-9-8.5-9z" strokeLinejoin="round" />
      <path d="M17 30.5a3 3 0 0 0 6 0" strokeLinecap="round" />
      <path d="M28 12c1.8 1.6 2.8 3.6 2.8 6M12 12c-1.8 1.6-2.8 3.6-2.8 6" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}
