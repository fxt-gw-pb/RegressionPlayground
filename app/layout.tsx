import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "回归游乐场 · 玩懂统计直觉",
  description: "亲手调一条线，让模型生出数据，重复一千次研究。看懂线性回归、抽样分布、标准误与因果判断。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
