"use client";
import React from "react";

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HomePage() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", color: "#111" }}>
        {/* 상단 메뉴 */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 72, borderBottom: "1px solid #e0e0e0", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <span style={{ fontWeight: 900, fontSize: 28, letterSpacing: 2 }}>Faank</span>
            <button onClick={() => scrollToSection("about-section")} style={{ background: "none", border: "none", fontSize: 17, color: "#111", cursor: "pointer" }}>서비스소개</button>
            <button onClick={() => scrollToSection("magazine-section")} style={{ background: "none", border: "none", fontSize: 17, color: "#111", cursor: "pointer" }}>매거진</button>
            <button onClick={() => scrollToSection("notice-section")} style={{ background: "none", border: "none", fontSize: 17, color: "#111", cursor: "pointer" }}>공지사항</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button onClick={() => scrollToSection("invest-section")} style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "8px 22px", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>투자하기</button>
            <a href="/login" style={{ color: "#111", fontWeight: 500, fontSize: 16, marginLeft: 8, textDecoration: "none" }}>로그인</a>
            <a href="/signup" style={{ color: "#111", fontWeight: 500, fontSize: 16, marginLeft: 8, textDecoration: "none" }}>회원가입</a>
          </div>
        </nav>

        {/* 서비스소개 섹션 */}
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

        {/* 매거진 섹션 */}
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

        {/* 공지사항 섹션 */}
        <section id="notice-section" style={{ padding: "80px 0 60px 0", borderBottom: "1px solid #eee" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>공지사항</h2>
          <ul style={{ fontSize: 17, color: "#111", lineHeight: 2 }}>
            <li>2024-07-01 신규 투자 상품 오픈 안내</li>
            <li>2024-06-20 서비스 점검 안내</li>
            <li>2024-06-10 투자 가이드 업데이트</li>
          </ul>
        </section>

        {/* 투자하기 섹션 */}
        <section id="invest-section" style={{ padding: "80px 0 60px 0" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>투자하기</h2>
          <div style={{ background: "#f3fbe7", borderRadius: 12, padding: 32, minHeight: 120, boxShadow: "0 2px 8px #e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 600, fontSize: 20 }}>실시간 투자 상품 현황</div>
            <a href="/products" style={{ background: "#6b8e23", color: "#fff", borderRadius: 6, padding: "10px 28px", fontWeight: 700, fontSize: 17, textDecoration: "none" }}>투자상품 전체보기</a>
          </div>
        </section>
      </div>

      {/* 피그마 스타일 푸터 */}
      <footer style={{ background: "#ededed", borderTop: "1px solid #e0e0e0", padding: "40px 0 0 0", marginTop: 40, color: "#111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 32, flexWrap: "wrap", color: "#111" }}>
            {/* 서비스 */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>서비스</div>
              <div style={{ color: "#111", lineHeight: 2 }}>
                <div>투자하기</div>
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
