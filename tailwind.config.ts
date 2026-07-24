import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 全域設計規範（Keith 一頁式架構文件）
        ink: "#202124", // 主標文字：深灰/近黑
        slate: "#4B5563", // 內文段落
        muted: "#6B7280", // 說明性小字
        paper: "#FFFFFF", // 背景色：純白
        surface: "#FFFFFF",
        surface2: "#F8F9FA", // 極淺灰，區塊交錯用
        line: "#E5E7EB",
        contrast: "#111827", // Mockup／深色對比區塊
        signal: {
          DEFAULT: "#3B82F6", // 品牌強調色：科技亮藍
          dark: "#1E3A8A", // CTA / 收單區深藍
          light: "#EFF6FF",
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
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(17, 24, 39, 0.06)",
        lift: "0 12px 28px -10px rgba(59, 130, 246, 0.25)",
        mock: "0 30px 70px -20px rgba(17, 24, 39, 0.45)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
