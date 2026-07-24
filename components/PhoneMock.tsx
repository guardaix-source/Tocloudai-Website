import Image from "next/image";

// A refined CSS-drawn phone frame — a thick brushed-titanium gradient bezel
// (light highlight bands catching the edges, dark core), a modern "dynamic
// island" cutout, and a subtle glass highlight overlay — housing a real
// product screenshot, per Keith's spec ("一支高質感的 iPhone 實機模擬圖，
// 呈現深色的 Telegram 推播畫面"). The screenshot is a real (redacted) TG
// alert card, not an illustration, so the feature claim stays honest.
//
// The screen fills edge-to-edge (object-cover, full bleed) so the whole
// alert card is visible, not just a cropped banner. The source image
// (public/images/tg-alert-sample.jpg) is pre-padded — extra dark "wallpaper"
// margin added left/right and above the card — so its aspect ratio is
// slightly WIDER than the screen's 9:19.5. That guarantees object-cover
// only ever crops into the padding (and the top clearance keeps the dynamic
// island off the card's title line), never into real card content, however
// the screen ends up sized on the page.
export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* metallic bezel — a thick gradient ring simulates a brushed-titanium
          edge with light catching the top-left and bottom-right corners */}
      <div
        className="relative rounded-[3rem] p-[9px] shadow-mock"
        style={{
          background:
            "linear-gradient(155deg, #9CA3AF 0%, #5B616E 14%, #23262E 40%, #0A0C10 55%, #23262E 70%, #5B616E 88%, #9CA3AF 100%)",
        }}
      >
        <div
          className="rounded-[2.5rem] bg-[#0A0C10] p-1.5"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.1rem] bg-[#0B0F19]">
            <Image
              src="/images/tg-alert-sample.jpg"
              alt="雲智禦 AI 決策系統 — Telegram 即時告警畫面示意"
              fill
              className="object-cover object-center"
              sizes="380px"
            />
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

      {/* side buttons — metallic gradient to match the bezel */}
      <div
        className="absolute -left-1 top-24 h-8 w-1 rounded-l"
        style={{ background: "linear-gradient(180deg, #C4C9D2, #6B7280)" }}
      />
      <div
        className="absolute -left-1 top-36 h-12 w-1 rounded-l"
        style={{ background: "linear-gradient(180deg, #C4C9D2, #6B7280)" }}
      />
      <div
        className="absolute -right-1 top-28 h-16 w-1 rounded-r"
        style={{ background: "linear-gradient(180deg, #C4C9D2, #6B7280)" }}
      />
    </div>
  );
}
