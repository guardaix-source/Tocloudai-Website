import Image from "next/image";

// A simple CSS-drawn phone frame housing a real product screenshot —
// per Keith's spec: "一支高質感的 iPhone 實機模擬圖，呈現深色的 Telegram
// 推播畫面". The screenshot itself is a real (redacted) TG alert card,
// not an illustration, so the feature claim stays honest.
export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2.5rem] border-[10px] border-[#111827] bg-[#111827] shadow-mock">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#111827]" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-[#0B0F19]">
          <Image
            src="/images/tg-alert-sample.jpg"
            alt="雲智禦 AI 決策系統 — Telegram 即時告警畫面示意"
            fill
            className="object-cover object-top"
            sizes="300px"
          />
        </div>
      </div>
      {/* side buttons */}
      <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[#111827]" />
      <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-[#111827]" />
      <div className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-r bg-[#111827]" />
    </div>
  );
}
