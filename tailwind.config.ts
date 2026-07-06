import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F4F6FA",
        slate: "#AAB4C8",
        muted: "#748099",
        paper: "#0B0F1A",
        surface: "#121826",
        surface2: "#161E2E",
        line: "#232B3D",
        signal: {
          DEFAULT: "#3E82F7",
          dark: "#2E63C9",
          light: "#1A2740",
          bright: "#5B9CFF",
        },
        risk: {
          high: "#FF6B54",
          mid: "#FFB648",
          low: "#3DD68C",
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
        "grad-accent": "linear-gradient(90deg, #5B9CFF 0%, #8B7CF6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
