"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

// 배너 데이터
const BANNER_DATA = [
  { id: 1, title: "홍보영상 및 이벤트 이미지 1", image: "/banner1.jpg" },
  { id: 2, title: "홍보영상 및 이벤트 이미지 2", image: "/banner2.jpg" },
  { id: 3, title: "홍보영상 및 이벤트 이미지 3", image: "/banner3.jpg" },
];

// 경매 TOP10 데이터
const AUCTION_DATA = [
  { id: 1, farm: "○○○농장", image: "/farm1.jpg" },
  { id: 2, farm: "△△△농장", image: "/farm2.jpg" },
  { id: 3, farm: "□□□농장", image: "/farm3.jpg" },
  { id: 4, farm: "◇◇◇농장", image: "/farm4.jpg" },
  { id: 5, farm: "○○○농장", image: "/farm5.jpg" },
];

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentAuction, setCurrentAuction] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 배너 슬라이더 함수들
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % BANNER_DATA.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + BANNER_DATA.length) % BANNER_DATA.length);
  };

  // 경매 캐러셀 함수들
  const nextAuction = () => {
    setCurrentAuction((prev) => (prev + 1) % AUCTION_DATA.length);
  };

  const prevAuction = () => {
    setCurrentAuction((prev) => (prev - 1 + AUCTION_DATA.length) % AUCTION_DATA.length);
  };

  return (
    <>
      {/* 상단 메뉴 */}
      <header className="main-header" style={{ height: 80, background: "#fff", borderBottom: "2px solid #b2c7a7", display: "flex", alignItems: "center", padding: "0 40px", fontWeight: 700, fontSize: 20, color: "#111", justifyContent: "space-between", position: "relative", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Image src="/logo.png" alt="FAANK 로고" width={120} height={120} priority />
        </div>
        {/* 데스크탑 메뉴 */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <button onClick={() => scrollToSection("about-section")} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>서비스소개</button>
          <button onClick={() => scrollToSection("magazine-section")} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>매거진</button>
          <button onClick={() => scrollToSection("notice-section")} style={{ background: "none", border: "none", fontSize: 16, color: "#666", cursor: "pointer", fontWeight: 500 }}>공지사항</button>
          <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 6, padding: "8px 18px", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>투자하기</a>
          <a href="/login" style={{ color: "#666", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>로그인</a>
          <span style={{ color: "#666", fontSize: 16 }}>/</span>
          <a href="/signup" style={{ color: "#666", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>회원가입</a>
        </nav>
        {/* 모바일 메뉴 버튼 */}
        <button className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", fontSize: 32, color: "#6b8e23", cursor: "pointer" }} onClick={() => setShowMobileMenu(true)} aria-label="모바일 메뉴 열기">
          ☰
        </button>
        {/* 모바일 메뉴 오버레이 */}
        {showMobileMenu && (
          <div className="mobile-menu-overlay" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.4)", zIndex: 9999, display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#fff", padding: 24, borderBottom: "2px solid #b2c7a7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Image src="/logo.png" alt="FAANK 로고" width={90} height={90} priority />
              <button onClick={() => setShowMobileMenu(false)} style={{ background: "none", border: "none", fontSize: 32, color: "#6b8e23", cursor: "pointer" }} aria-label="모바일 메뉴 닫기">×</button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 24, padding: 32, background: "#fff", flex: 1 }}>
              <button onClick={() => { setShowMobileMenu(false); scrollToSection("about-section"); }} style={{ background: "none", border: "none", fontSize: 18, color: "#666", cursor: "pointer", fontWeight: 500, textAlign: "left" }}>서비스소개</button>
              <button onClick={() => { setShowMobileMenu(false); scrollToSection("magazine-section"); }} style={{ background: "none", border: "none", fontSize: 18, color: "#666", cursor: "pointer", fontWeight: 500, textAlign: "left" }}>매거진</button>
              <button onClick={() => { setShowMobileMenu(false); scrollToSection("notice-section"); }} style={{ background: "none", border: "none", fontSize: 18, color: "#666", cursor: "pointer", fontWeight: 500, textAlign: "left" }}>공지사항</button>
              <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 18, textDecoration: "none", textAlign: "center" }}>투자하기</a>
              <a href="/login" style={{ color: "#666", fontWeight: 500, fontSize: 18, textDecoration: "none", textAlign: "center" }}>로그인</a>
              <a href="/signup" style={{ color: "#666", fontWeight: 500, fontSize: 18, textDecoration: "none", textAlign: "center" }}>회원가입</a>
            </nav>
          </div>
        )}
      </header>

      {/* 페이지 주요 내용 */}
      <div className="main-container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", color: "#111" }}>
        {/* 홍보영상 및 이벤트 이미지 배너 */}
        <div style={{ background: "#f8f8f8", borderRadius: 12, padding: "60px 40px", marginBottom: 40, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ 
            display: "flex", 
            transform: `translateX(-${currentBanner * 100}%)`, 
            transition: "transform 0.5s ease-in-out",
            width: `${BANNER_DATA.length * 100}%`
          }}>
            {BANNER_DATA.map((banner, index) => (
              <div key={banner.id} style={{ 
                width: `${100 / BANNER_DATA.length}%`, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                flexShrink: 0
              }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#666" }}>
                  {banner.title}
                </div>
              </div>
            ))}
          </div>
          
          {/* 배너 인디케이터 */}
          <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
            {BANNER_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentBanner ? "#6b8e23" : "#ccc",
                  cursor: "pointer",
                  transition: "background 0.3s"
                }}
              />
            ))}
          </div>
          
          <button 
            onClick={prevBanner}
            style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", fontSize: 24, color: "#ccc", cursor: "pointer", background: "none", border: "none", padding: 8 }}
          >
            ‹
          </button>
          <button 
            onClick={nextBanner}
            style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", fontSize: 24, color: "#ccc", cursor: "pointer", background: "none", border: "none", padding: 8 }}
          >
            ›
          </button>
        </div>

        {/* 3개 콘텐츠 블록 */}
        <div className="main-card-list" style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 60 }}>
          {/* 왼쪽 블록 - 실제 상품 기반 메시지 */}
          <div style={{ flex: 1, background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#6b8e23", lineHeight: 1.6 }}>
              <span>실제로 </span>
              <span style={{ background: "#fff3cd", color: "#856404" }}>만져보고</span>
              <br />
              <span>먹어본 상품이,</span>
              <br />
              <span>내 수익의 </span>
              <span style={{ background: "#fff3cd", color: "#856404" }}>기반이 됩니다.</span>
            </div>
          </div>

          {/* 중간 블록 - 인기 투자 상품 */}
          <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>🔥</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#666" }}>실시간 인기 투자 상품</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8 }}>전략형 투자 상품</div>
            <div style={{ fontSize: 16, color: "#666" }}>○○○농장</div>
          </div>

          {/* 오른쪽 블록 - 통계 */}
          <div style={{ flex: 1, background: "#f3fbe7", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#6b8e23" }}>누적 회원 수</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>99,999명</span>
              </div>
              <div style={{ background: "#e0e0e0", height: 8, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#6b8e23", height: "100%", width: "85%" }}></div>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#6b8e23" }}>투자자 수</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>99,999명</span>
              </div>
              <div style={{ background: "#e0e0e0", height: 8, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#6b8e23", height: "100%", width: "70%" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#6b8e23" }}>누적 투자금</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>99.9억</span>
              </div>
              <div style={{ background: "#e0e0e0", height: 8, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#6b8e23", height: "100%", width: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 경매 TOP10 섹션 */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>경매 TOP10</h2>
          
          {/* 상단 캐러셀 */}
          <div style={{ background: "#f8f8f8", borderRadius: 12, padding: "40px 20px", marginBottom: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ 
              display: "flex", 
              transform: `translateX(-${currentAuction * 200}px)`, 
              transition: "transform 0.5s ease-in-out",
              gap: 40
            }}>
              {AUCTION_DATA.map((item) => (
                <div key={item.id} style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: 12,
                  minWidth: 160,
                  flexShrink: 0
                }}>
                  <div style={{ width: 80, height: 80, background: "#e0e0e0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#999" }}>
                    🐄
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#666" }}>{item.farm}</div>
                </div>
              ))}
            </div>
            
            {/* 경매 캐러셀 인디케이터 */}
            <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAuction(index)}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: "none",
                    background: index === currentAuction ? "#6b8e23" : "#ccc",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                />
              ))}
            </div>
            
            <button 
              onClick={prevAuction}
              style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", fontSize: 24, color: "#ccc", cursor: "pointer", background: "none", border: "none", padding: 8 }}
            >
              ‹
            </button>
            <button 
              onClick={nextAuction}
              style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", fontSize: 24, color: "#ccc", cursor: "pointer", background: "none", border: "none", padding: 8 }}
            >
              ›
            </button>
          </div>

          {/* 하단 상세 데이터 테이블 */}
          <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px #e0e0e0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "200px repeat(5, 1fr)", borderBottom: "1px solid #e0e0e0" }}>
              {/* 헤더 */}
              <div style={{ background: "#f8f8f8", padding: "16px", fontWeight: 700, color: "#111", borderRight: "1px solid #e0e0e0" }}>구분</div>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} style={{ background: "#f8f8f8", padding: "16px", fontWeight: 700, color: "#111", textAlign: "center", borderRight: item === 5 ? "none" : "1px solid #e0e0e0" }}>
                  {item}번
                </div>
              ))}
            </div>
            
            {/* 데이터 행들 */}
            {[
              { label: "출하 개월", values: ["30개월", "29개월", "29개월", "30개월", "30개월"] },
              { label: "육질 등급", values: ["1++등급", "1++등급", "1++등급", "1++등급", "1++등급"] },
              { label: "육량 등급", values: ["B", "B", "B", "B", "B"] },
              { label: "도체중", values: ["546kg", "533kg", "599kg", "593kg", "552kg"] },
              { label: "유전 능력", values: ["등심면적 우등생", "마블링 우등생", "등심면적 우등생", "등등 우등생", "마블링 우등생"] },
              { label: "냉도체중", values: ["A", "D", "A", "A", "A"] },
              { label: "근단면적", values: ["A", "D", "A", "B", "B"] },
              { label: "근내지방도", values: ["A", "A", "A", "C", "A"] },
              { label: "등지방두제", values: ["C", "A", "C", "C", "B"] }
            ].map((row, index) => (
              <div key={index} style={{ display: "grid", gridTemplateColumns: "200px repeat(5, 1fr)", borderBottom: index === 8 ? "none" : "1px solid #e0e0e0" }}>
                <div style={{ background: "#f8f8f8", padding: "12px 16px", fontWeight: 600, color: "#111", borderRight: "1px solid #e0e0e0", fontSize: 14 }}>
                  {row.label}
                </div>
                {row.values.map((value, valueIndex) => (
                  <div key={valueIndex} style={{ padding: "12px 16px", textAlign: "center", borderRight: valueIndex === 4 ? "none" : "1px solid #e0e0e0", fontSize: 14 }}>
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* 기존 섹션들 */}
        <section id="about-section" style={{ padding: "80px 0 60px 0", borderBottom: "1px solid #eee" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>서비스 소개</h2>
          <div style={{ fontSize: 18, marginBottom: 12 }}>실제 물건과 연계된 상품에 투자하여 내 수익의 기회가 됩니다.</div>
          <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
            <div style={{ flex: 1, background: "#f3fbe7", borderRadius: 12, padding: 32, minHeight: 160, boxShadow: "0 2px 8px #e0e0e0" }}>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>실물 기반 STO</div>
              <div>농수산물, 특산물 등 실물 자산 기반 투자 상품 제공</div>
            </div>
            <div style={{ flex: 1, background: "#f3fbe7", borderRadius: 12, padding: 32, minHeight: 160, boxShadow: "0 2px 8px #e0e0e0" }}>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>안전한 투자 환경</div>
              <div>투자자 보호와 투명한 정보 제공</div>
            </div>
          </div>
        </section>

        <section id="magazine-section" style={{ padding: "80px 0 60px 0", borderBottom: "1px solid #eee" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>매거진</h2>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 10, padding: 24, minHeight: 120 }}>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>이달의 투자 트렌드</div>
              <div style={{ color: "#222" }}>최신 농수산물 투자 트렌드와 시장 소식</div>
            </div>
            <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 10, padding: 24, minHeight: 120 }}>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>성공 투자 사례</div>
              <div style={{ color: "#222" }}>실제 투자 성공 스토리와 인터뷰</div>
            </div>
          </div>
        </section>

        <section id="notice-section" style={{ padding: "80px 0 60px 0", borderBottom: "1px solid #eee" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>공지사항</h2>
          <ul style={{ fontSize: 17, color: "#111", lineHeight: 2 }}>
            <li>2024-07-01 신규 투자 상품 오픈 안내</li>
            <li>2024-06-20 서비스 점검 안내</li>
            <li>2024-06-10 투자 가이드 업데이트</li>
          </ul>
        </section>
      </div>

      {/* 맨 위로 스크롤 버튼 */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            right: 24,
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#fff",
            border: "2px solid #b2c7a7",
            boxShadow: "0 2px 8px #e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            color: "#6b8e23",
            cursor: "pointer",
            zIndex: 1000,
            transition: "opacity 0.3s"
          }}
          aria-label="맨 위로"
        >
          ▲
        </button>
      )}

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
