import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajuduck.vercel.app";
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "사주짤(SajuZZal) - 웃긴 사주 밈 카드",
    template: "%s | 사주짤",
  },
  description:
    "생년월일, 태어난 시간, 성별로 120가지 하찮고 웃긴 사주짤 결과 카드를 만들어보세요. 개인정보 저장 없이 즐기는 오락용 운세 밈 서비스입니다.",
  keywords: ["사주", "운세", "밈", "사주 테스트", "카카오톡 공유", "SajuZZal"],
  openGraph: {
    title: "사주짤(SajuZZal)",
    description: "오늘의 사주를 하찮고 웃긴 결과 카드로 뽑아보세요.",
    url: siteUrl,
    siteName: "사주짤",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "사주짤(SajuZZal)",
    description: "120가지 웃긴 사주 밈 카드 테스트",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {adsenseClientId ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className="min-h-full bg-[#fffbeb] text-zinc-950">
        {children}
      </body>
    </html>
  );
}
