# TocloudAI 官網

企業資安維運與威脅情資訂閱服務 — 官網原始碼（Next.js 14 + TypeScript + Tailwind CSS）。

## 頁面結構

- `/` 首頁 — 核心介紹、四大技術架構、CTA
- `/services` 服務項目 — 四大模組完整說明
- `/about` 關於我們 — 品牌價值
- `/contact` 聯絡我們 — 表單（目前僅前端展示，尚未串接寄送功能）

## 本機開發

```bash
npm install
npm run dev
```

打開 http://localhost:3000

## 部署到 Vercel

1. 將此專案 push 到 GitHub repo
2. 到 [vercel.com](https://vercel.com) 匯入該 repo（已串接 GitHub 帳號可直接選取）
3. Framework Preset 選擇 **Next.js**（Vercel 通常會自動偵測），其餘設定保持預設即可
4. 之後每次 push 到主分支會自動觸發部署

## 待辦（下一階段）

- [ ] 聯絡表單串接後端：可在 `app/api/contact/route.ts` 新增 API Route，接 Email 服務（如 Resend）或寫入資料庫
- [ ] 確認並替換 `contact@tocloudai.com` 為正式聯絡信箱
- [ ] 補上正式 Logo / favicon（目前 `public/` 尚未放入圖檔）
- [ ] 視覺微調：可交由 Claude Design 產出視覺稿後再對照調整
