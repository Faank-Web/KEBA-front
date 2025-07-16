import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAANK 투자 플랫폼",
  description: "농수산물·특산물 STO 투자 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ margin: 0, background: "#f8f8f8" }}>
        {/* 상단 네비게이션 */}
        <header style={{ height: 64, background: "#fff", borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", padding: "0 40px", fontWeight: 700, fontSize: 20, color: "#6b8e23", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Image src="/logo.png" alt="FAANK 로고" width={40} height={40} style={{ marginRight: 8 }} />
              <span style={{ color: "#4b5e2e", fontWeight: 900, fontSize: 26, letterSpacing: 2 }}>FAANK</span>
            </Link>
          </div>
          <nav style={{ display: "flex", gap: 32, fontWeight: 500, fontSize: 17 }}>
            <Link href="/products">투자상품</Link>
            <Link href="/mypage">마이페이지</Link>
          </nav>
        </header>
        {/* 전체 레이아웃 */}
        <div style={{ display: "flex", minHeight: "calc(100vh - 104px)" }}>
          {/* 좌측 메뉴 */}
          <aside style={{ width: 180, background: "#e6f4d7", padding: "32px 0 0 0", borderRight: "1px solid #e0e0e0" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 16, fontWeight: 500, color: "#4b5e2e", paddingLeft: 24 }}>
              <Link href="/signup">회원가입</Link>
              <Link href="/login">로그인</Link>
              <Link href="/products">투자상품</Link>
              <Link href="/mypage">마이페이지</Link>
            </nav>
          </aside>
          {/* 메인 콘텐츠 */}
          <main style={{ flex: 1, background: "#fff", padding: 40, minHeight: "calc(100vh - 104px)", boxSizing: "border-box" }}>
            {children}
          </main>
        </div>
        {/* 푸터 */}
        <footer style={{ height: 40, background: "#f8f8f8", borderTop: "1px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#888" }}>
          © 2024 FAANK. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
