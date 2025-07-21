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

function goToMainAndScroll(sectionId: string, isMain: boolean) {
  if (isMain) {
    scrollToSection(sectionId);
  } else {
    window.location.href = '/';
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 500);
  }
}

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
            <Image src="/logo.png" alt="FAANK 로고" width={120} height={120} priority />
          </Link>
          <button onClick={() => goToMainAndScroll('about-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>서비스소개</button>
          <button onClick={() => goToMainAndScroll('magazine-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>매거진</button>
          <button onClick={() => goToMainAndScroll('notice-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>공지사항</button>
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
          <aside style={{ width: 260, background: "linear-gradient(135deg, #e6f4d7 0%, #b2c7a7 100%)", padding: "48px 0 0 0", borderRight: "1.5px solid #b2c7a7", minHeight: "calc(100vh - 120px)", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 4px 24px #b2c7a7", borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 28, color: "#3d4d1a", marginBottom: 44, textAlign: "center", lineHeight: 1.3, letterSpacing: 0.5 }}>
              안녕하세요<br />
              <span style={{ fontWeight: 900, fontSize: 32, color: "#5a6d2b", letterSpacing: 1 }}>KEBA 님</span>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: 19, fontWeight: 600, color: "#4b5e2e", width: "100%", alignItems: "center" }}>
              {[
                { href: "/mypage", label: "마이페이지" },
                { href: "/mypage/profile", label: "내 정보" },
                { href: "/mypage/history", label: "투자 내역" },
                { href: "/mypage/portfolio", label: "포트폴리오" },
                { href: "/mypage/inquiry", label: "문의 내역" },
                { href: "/mypage/account", label: "내 계좌" }
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{
                  color: pathname === item.href ? "#fff" : "#4b5e2e",
                  background: pathname === item.href ? "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)" : "none",
                  borderRadius: 12,
                  textDecoration: "none",
                  width: "82%",
                  textAlign: "center",
                  padding: pathname === item.href ? "13px 0" : "11px 0",
                  fontWeight: pathname === item.href ? 800 : 600,
                  boxShadow: pathname === item.href ? "0 2px 8px #b2c7a7" : "none",
                  fontSize: pathname === item.href ? 20 : 18,
                  letterSpacing: 0.5,
                  marginBottom: 2,
                  transition: "all 0.18s"
                }}
                onMouseEnter={e => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.background = "#e6f4d7";
                    e.currentTarget.style.color = "#6b8e23";
                  }
                }}
                onMouseLeave={e => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#4b5e2e";
                  }
                }}
                >{item.label}</Link>
              ))}
            </nav>
          </aside>
        )}
        {/* 메인 콘텐츠 */}
        <main style={{ flex: 1, background: "#fff", padding: 40, minHeight: "calc(100vh - 120px)", boxSizing: "border-box" }}>
          {children}
        </main>
      </div>
      {/* 피그마 스타일 푸터 */}
      <footer style={{ background: "linear-gradient(90deg, #e6f4d7 0%, #b2c7a7 100%)", borderTop: "none", borderRadius: "0 0 20px 20px", boxShadow: "0 -2px 12px #b2c7a7", padding: "28px 0 0 0", marginTop: 36, color: "#222" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", color: "#222", fontSize: 14, fontWeight: 500 }}>
            {/* 서비스 */}
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10, color: "#4b5e2e", letterSpacing: 0.2 }}>서비스</div>
              <div style={{ color: "#222", lineHeight: 1.7 }}>
                <div>투자하기</div>
                <div>공지사항</div>
                <div>고객센터</div>
              </div>
            </div>
            {/* 문의 */}
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10, color: "#4b5e2e", letterSpacing: 0.2 }}>문의</div>
              <div style={{ color: "#222", lineHeight: 1.7 }}>
                <div>사업제휴 문의</div>
                <div>기관투자 문의</div>
              </div>
            </div>
            {/* 약관 */}
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10, color: "#4b5e2e", letterSpacing: 0.2 }}>약관</div>
              <div style={{ color: "#222", lineHeight: 1.7 }}>
                <div>이용약관</div>
                <div>개인정보 처리방침</div>
              </div>
            </div>
          </div>
          {/* 하단 회사 정보 */}
          <div style={{ borderTop: "1px solid #b2c7a7", marginTop: 18, padding: "12px 0 8px 0", color: "#4b5e2e", fontSize: 12, lineHeight: 1.6, fontWeight: 500 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "space-between" }}>
              <div>
                (주)한국엑스퍼트브랜드협회 | 대표: 최윤희<br />
                사업자등록번호 737-87-02891<br />
              </div>
              <div>
                메일: rassom@naver.com | 번호: 010. 7586. 2102<br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 