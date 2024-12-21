import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bar Citizen Korea",
    description: "Star Citizen 팬들을 위한 대한민국 오프라인 모임.",
    keywords: ["Star Citizen", "Bar Citizen", "바시티즌", "게임", "모임", "스타시티즌", "Korea"],
    openGraph: {
        title: "Bar Citizen Korea",
        description: "Star Citizen 팬들을 위한 대한민국 오프라인 모임",
        images: [

        ],
        locale: "ko_KR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: "#00A6ED",
    viewport: "width=device-width, initial-scale=1.0",
    category: "gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
