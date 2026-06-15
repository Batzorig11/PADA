import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

// Cyrillic + cyrillic-ext subsets are REQUIRED for Mongolian (Ө ө / Ү ү).
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Noto Sans Mono is the "no-tofu" safety-net fallback.
const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-noto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "erxes · Фронтенд сургалт",
  description:
    "Проектороор үзүүлэхэд бэлэн, гурван шаттай фронтенд хөгжүүлэлтийн сургалт — Үндэс → JavaScript → React & Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Course content is taught in Mongolian (Cyrillic) — lang="mn".
  return (
    <html
      lang="mn"
      className={`${jetbrainsMono.variable} ${notoSansMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
