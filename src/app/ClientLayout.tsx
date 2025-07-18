"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMypage = pathname.startsWith("/mypage");
  const isMain = pathname === "/";
  const isProducts = pathname === "/products" || pathname.startsWith("/products/");
  
  // 로그인 상태 (localStorage에서 가져오기)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorage에서 로그인 상태 확인
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  // 메인페이지에서는 헤더/푸터/사이드바를 렌더링하지 않음
  if (isMain) {
    return <>{children}</>;
  }

  return (
    <>
      {/* 상단 메뉴 */}
      <header style={{ height: 80, background: "#fff", borderBottom: "2px solid #b2c7a7", display: "flex", alignItems: "center", padding: "0 40px", fontWeight: 700, fontSize: 20, color: "#111", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/logo.png" alt="FAANK 로고" width={80} height={80} priority />
          </Link>
          <Link href="/about" style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}>서비스소개</Link>
          <Link href="/magazine" style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}>매거진</Link>
          <Link href="/notice" style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}>공지사항</Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {isLoggedIn ? (
            <>
              <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 6, padding: "8px 18px", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>투자하기</a>
              <a href="/mypage" style={{ color: "#666", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>마이페이지</a>
            </>
          ) : (
            <>
              <a href="/login" style={{ color: "#666", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>로그인</a>
              <span style={{ color: "#666", fontSize: 16 }}>/</span>
              <a href="/signup" style={{ color: "#666", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>회원가입</a>
            </>
          )}
        </div>
      </header>
      {/* 전체 레이아웃 */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 120px)" }}>
        {/* 마이페이지에서만 사이드바 노출 */}
        {isMypage && (
          <aside style={{ width: 180, background: "#e6f4d7", padding: "32px 0 0 0", borderRight: "1px solid #e0e0e0" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 16, fontWeight: 500, color: "#4b5e2e", paddingLeft: 24 }}>
              <Link href="/signup">회원가입</Link>
              <Link href="/login">로그인</Link>
              <Link href="/products">투자상품</Link>
              <Link href="/mypage">마이페이지</Link>
            </nav>
          </aside>
        )}
        {/* 메인 콘텐츠 */}
        <main style={{ flex: 1, background: "#fff", padding: 40, minHeight: "calc(100vh - 120px)", boxSizing: "border-box" }}>
          {children}
        </main>
      </div>
      {/* 피그마 스타일 푸터 */}
      <footer style={{ background: "#ededed", borderTop: "1px solid #e0e0e0", padding: "40px 0 0 0", marginTop: 40, color: "#111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 32, flexWrap: "wrap", color: "#111" }}>
            {/* 서비스 */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>서비스</div>
              <div style={{ color: "#111", lineHeight: 2 }}>
                <div>서비스 소개</div>
                <div>매거진</div>
                <div>공지사항</div>
                <div>투자가이드</div>
                <div>고객센터</div>
                <div>토큰증권 발행내역</div>
              </div>
            </div>
            {/* 문의 */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>문의</div>
              <div style={{ color: "#111", lineHeight: 2 }}>
                <div>사업제휴 문의</div>
                <div>농장입점 문의</div>
                <div>기관투자 문의</div>
              </div>
            </div>
            {/* 약관 */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>약관</div>
              <div style={{ color: "#111", lineHeight: 2 }}>
                <div>서비스 이용약관</div>
                <div>추심이체 거래약관</div>
                <div>개인정보 처리방침</div>
                <div>마케팅 수신동의</div>
              </div>
            </div>
            {/* 앱 다운로드 */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>앱 다운로드</div>
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <button style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "#111" }}>App store</button>
                <button style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 8, padding: "8px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "#111" }}>Google Play</button>
              </div>
            </div>
          </div>
          {/* 하단 회사 정보 */}
          <div style={{ borderTop: "1px solid #ccc", marginTop: 32, padding: "24px 0 12px 0", color: "#111", fontSize: 14, lineHeight: 1.7 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
              <div>
                (주)한국어스퍼트블럭협회 | 대표 최호원<br />
                주소: 경기도 하남시 미사강변한강로 279 129, 130호<br />
                사업자등록번호: 737-87-02891<br />
                법인 등록번호: 00000-0000000<br />
                통신판매업 신고번호: 제 2025-가나다-0000 호
              </div>
              <div>
                전화: 010-4747-2102 (평일 10시 ~ 17시)<br />
                Email(문의): rassom06@naver.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 