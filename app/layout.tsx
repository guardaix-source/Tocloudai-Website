import type { Metadata } from "next";
import { Noto_Sans_TC, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-tc",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "雲智禦 AI 決策系統｜向雲智慧 TocloudAI",
  description:
    "企業的安全新視界。雲智禦 AI 決策系統無痛外掛於您的基礎防火牆，運用卡巴斯基全球情資，將平均偵測時間壓縮至毫秒級別，最低月訂閱 $18,000 起。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSansTC.variable} ${plexMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
