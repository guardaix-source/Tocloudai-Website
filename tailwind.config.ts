import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        slate: "#475569",
        muted: "#64748B",
        paper: "#FFFFFF",
        surface: "#FFFFFF",
        surface2: "#F6F9FC",
        line: "#E3E8EE",
        night: "#0A0D16",
        "night-elev": "#141927",
        signal: {
          DEFAULT: "#3E82F7",
          dark: "#2E63C9",
          light: "#E8F0FE",
          bright: "#2563EB",
        },
        risk: {
          high: "#DC2626",
          mid: "#B45309",
          low: "#15803D",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-tc)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 55, 112, 0.08)",
        lift: "0 8px 24px rgba(0, 55, 112, 0.08), 0 2px 6px rgba(0, 55, 112, 0.04)",
        mock: "0 24px 60px -20px rgba(10, 13, 22, 0.45)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(90deg, #2563EB 0%, #7C6FF0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
