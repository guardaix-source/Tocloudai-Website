import Image from "next/image";

// A refined CSS-drawn phone frame — brushed-metal gradient bezel, a modern
// "dynamic island" cutout, and a subtle glass highlight overlay — housing a
// real product screenshot, per Keith's spec ("一支高質感的 iPhone 實機模擬圖，
// 呈現深色的 Telegram 推播畫面"). The screenshot is a real (redacted) TG
// alert card, not an illustration, so the feature claim stays honest.
//
// The card image uses object-contain (not cover) inside an inset wrapper,
// so the full alert card is always shown with clean margins on a dark
// "chat wallpaper" backdrop — this avoids any edge-cropping and reads as a
// legitimate Telegram dark-mode chat background behind a light message card.
export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* metallic bezel — gradient ring simulates a brushed-titanium edge */}
      <div
        className="relative rounded-[3rem] p-[3px] shadow-mock"
        style={{
          background:
            "linear-gradient(155deg, #4B505C 0%, #23262E 18%, #0A0C10 50%, #23262E 82%, #4B505C 100%)",
        }}
      >
        <div className="rounded-[2.9rem] bg-[#0A0C10] p-2">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.35rem] bg-[#0B0F19]">
            <div className="absolute inset-x-4 inset-y-11">
              <Image
                src="/images/tg-alert-sample.jpg"
                alt="雲智禦 AI 決策系統 — Telegram 即時告警畫面示意"
                fill
                className="object-contain object-center"
                sizes="300px"
              />
            </div>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[94px] -translate-x-1/2 rounded-full bg-black" />
            {/* glass highlight streak, for a bit of realism on the screen */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* side buttons on the metal bezel */}
      <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[#3A3E48]" />
      <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-[#3A3E48]" />
      <div className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-r bg-[#3A3E48]" />
    </div>
  );
}
