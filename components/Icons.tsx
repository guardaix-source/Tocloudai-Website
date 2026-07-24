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

export function IconShieldCrack({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M20 5l13 5v9c0 8-5.5 14.5-13 17-7.5-2.5-13-9-13-17v-9l13-5z" strokeLinejoin="round" />
      <path d="M22 12l-5 8h4l-3 8 7-10h-4l3-6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function IconRadar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="20" cy="20" r="15" strokeOpacity="0.35" />
      <circle cx="20" cy="20" r="10" strokeOpacity="0.55" />
      <circle cx="20" cy="20" r="5" strokeOpacity="0.75" />
      <path d="M20 20L31 9" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="26" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconClockAlert({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="18" cy="20" r="13" />
      <path d="M18 12v8l6 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 10l4 4M34 10l-4 4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="7" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChecklist({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="8" y="6" width="24" height="28" rx="2" />
      <path d="M13 14l2.5 2.5L20 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 15h9" strokeLinecap="round" />
      <path d="M13 24h18M13 29h18" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

export function IconMobile({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="11" y="4" width="18" height="32" rx="3" />
      <path d="M18 31h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTrendDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7 13l10 10 6-6 10 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 17h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M20 6c5 3 7 8 7 14 0 3-1 6-2.5 8h-9C14 26 13 23 13 20c0-6 2-11 7-14z" strokeLinejoin="round" />
      <circle cx="20" cy="16" r="2.3" />
      <path d="M13 22l-4 4M27 22l4 4M17 32l-2 3M23 32l2 3" strokeLinecap="round" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M20 5l13 5v9c0 8-5.5 14.5-13 17-7.5-2.5-13-9-13-17v-9l13-5z" strokeLinejoin="round" />
      <path d="M14.5 20l3.5 3.5 7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInfinity({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zM22 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
    </svg>
  );
}
