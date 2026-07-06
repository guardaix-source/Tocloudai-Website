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
        paper: "#F7F9FC",
        surface: "#FFFFFF",
        surface2: "#EDF1F7",
        line: "#E2E8F0",
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
        sm: "3px",
        DEFAULT: "6px",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(90deg, #2563EB 0%, #7C6FF0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
