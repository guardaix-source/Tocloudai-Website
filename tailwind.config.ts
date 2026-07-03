import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131B2E",
        slate: "#4A5468",
        muted: "#7B8499",
        paper: "#F5F6F4",
        surface: "#FFFFFF",
        line: "#DEE1E6",
        signal: {
          DEFAULT: "#1F6F6B",
          dark: "#164F4C",
          light: "#E7F1F0",
        },
        risk: {
          high: "#C1502E",
          mid: "#C98A2C",
          low: "#4C8C5B",
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
        sm: "2px",
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
