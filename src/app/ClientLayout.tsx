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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showShorts, setShowShorts] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  // 모바일 메뉴 닫기
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* 메인페이지가 아니면 기존 레이아웃(헤더/사이드바/푸터/children) 렌더링 */}
      {!isMain && (
        <>
          {/* 상단 메뉴 */}
          <header style={{ height: 80, background: "#fff", borderBottom: "2px solid #b2c7a7", display: "flex", alignItems: "center", padding: "0 40px", fontWeight: 700, fontSize: 20, color: "#111", justifyContent: "space-between", position: "relative", zIndex: 100 }}>
            {/* 로고 + 왼쪽 메뉴 */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Image src="/logo.png" alt="FAANK 로고" width={120} height={120} priority />
              </Link>
              <nav className="main-nav-left" style={{ display: "flex", alignItems: "center", gap: 32, marginLeft: 24 }}>
                <button onClick={() => goToMainAndScroll('about-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>서비스소개</button>
                <button onClick={() => goToMainAndScroll('magazine-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>매거진</button>
                <button onClick={() => goToMainAndScroll('notice-section', isMain)} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>공지사항</button>
              </nav>
            </div>
            {/* 오른쪽 메뉴 */}
            <nav className="main-nav-right" style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
                  <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 6, padding: "8px 18px", fontWeight: 700, fontSize: 16, textDecoration: "none", marginLeft: 8 }}>투자하기</a>
                </>
              )}
            </nav>
            {/* 모바일 햄버거 메뉴 버튼 */}
            <button className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", fontSize: 32, color: "#6b8e23", cursor: "pointer", zIndex: 101 }} onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
              ☰
            </button>
            {/* 모바일 오버레이 메뉴 */}
            {menuOpen && (
              <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#fff", zIndex: 2000, display: "flex", flexDirection: "column" }} onClick={closeMenu}>
                <div style={{ background: "#fff", borderBottom: "2px solid #b2c7a7", padding: "24px 0 16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Image src="/logo.png" alt="FAANK 로고" width={90} height={90} priority />
                  <button onClick={closeMenu} style={{ background: "none", border: "none", fontSize: 32, color: "#b2c7a7", cursor: "pointer", marginRight: 24 }} aria-label="메뉴 닫기">×</button>
                </div>
                <nav style={{ display: "flex", flexDirection: "column", gap: 24, padding: "32px 0 0 32px", fontSize: 20, fontWeight: 700, color: "#4b5e2e" }} onClick={e => e.stopPropagation()}>
                  <button onClick={() => { goToMainAndScroll('about-section', isMain); closeMenu(); }} style={{ background: "none", border: "none", color: "#4b5e2e", fontWeight: 700, fontSize: 20, textAlign: "left", cursor: "pointer" }}>서비스소개</button>
                  <button onClick={() => { goToMainAndScroll('magazine-section', isMain); closeMenu(); }} style={{ background: "none", border: "none", color: "#4b5e2e", fontWeight: 700, fontSize: 20, textAlign: "left", cursor: "pointer" }}>매거진</button>
                  <button onClick={() => { goToMainAndScroll('notice-section', isMain); closeMenu(); }} style={{ background: "none", border: "none", color: "#4b5e2e", fontWeight: 700, fontSize: 20, textAlign: "left", cursor: "pointer" }}>공지사항</button>
                  {isLoggedIn ? (
                    <>
                      <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 8, padding: "12px 0", fontWeight: 800, fontSize: 20, textDecoration: "none", textAlign: "center", marginTop: 12, width: 180 }}>투자하기</a>
                      <a href="/mypage" style={{ color: "#4b5e2e", fontWeight: 700, fontSize: 20, textDecoration: "none", marginTop: 8 }}>마이페이지</a>
                    </>
                  ) : (
                    <>
                      <a href="/login" style={{ color: "#4b5e2e", fontWeight: 700, fontSize: 20, textDecoration: "none", marginTop: 8 }}>로그인</a>
                      <a href="/signup" style={{ color: "#4b5e2e", fontWeight: 700, fontSize: 20, textDecoration: "none", marginTop: 8 }}>회원가입</a>
                      <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 8, padding: "12px 0", fontWeight: 800, fontSize: 20, textDecoration: "none", textAlign: "center", marginTop: 12, width: 180 }}>투자하기</a>
                    </>
                  )}
                </nav>
              </div>
            )}
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
      )}
      {/* 메인페이지면 children만 */}
      {isMain && <main>{children}</main>}
      {/* 오른쪽 아래 고정 유튜브 숏츠 */}
      {showShorts && !isMypage && (
        isFullscreen ? (
          // 전체화면 모달
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            overflow: "hidden"
          }}>
            {/* 전체화면 버튼들: 영상 위쪽 중앙 */}
            <div style={{
              position: "absolute",
              top: "calc(5% - 32px)",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 16,
              zIndex: 100000
            }}>
              <button onClick={() => setIsFullscreen(false)} style={{
                background: "rgba(0,0,0,0.5)",
                border: "none",
                color: "#fff",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 24,
                cursor: "pointer"
              }} aria-label="화면축소">⛶</button>
              <button onClick={() => setShowShorts(false)} style={{
                background: "rgba(0,0,0,0.5)",
                border: "none",
                color: "#fff",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 24,
                cursor: "pointer"
              }} aria-label="닫기">X</button>
            </div>
            <iframe
              width="90%"
              height="90%"
              src="https://www.youtube.com/embed/BfKI_TQnQvo?autoplay=1&mute=1&controls=1&loop=1&playlist=BfKI_TQnQvo"
              title="YouTube Shorts"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        ) : (
          // 오른쪽 아래 작은 창
          <div style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 240,
            height: 430, // Shorts 세로 비율에 맞게 높이 조정
            zIndex: 9999,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            background: "#000"
          }}>
            {/* 작은 창 버튼: 크게보기 왼쪽 위, 닫기 오른쪽 위 */}
            <button onClick={() => setIsFullscreen(true)} style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              fontSize: 20,
              cursor: "pointer",
              zIndex: 10000
            }} aria-label="크게 보기">⛶</button>
            <button onClick={() => setShowShorts(false)} style={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              fontSize: 20,
              cursor: "pointer",
              zIndex: 10000
            }} aria-label="닫기">X</button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BfKI_TQnQvo?autoplay=1&mute=1&controls=1&loop=1&playlist=BfKI_TQnQvo"
              title="YouTube Shorts"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        )
      )}
    </>
  );
} 