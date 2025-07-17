import React from "react";

export default function ProductsPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", color: "#111" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111", margin: "32px 0 24px 0" }}>투자 상품 목록</h2>
      {/* 필터 영역 */}
      <section style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <select style={{ padding: 8, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 15, color: "#111" }}>
          <option>전체</option>
          <option>과일</option>
          <option>수산물</option>
        </select>
        <select style={{ padding: 8, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 15, color: "#111" }}>
          <option>정렬: 최신순</option>
          <option>정렬: 수익률순</option>
        </select>
        <input type="text" placeholder="상품명 검색" style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 15, color: "#111" }} />
      </section>
      {/* 상품 카드 리스트 */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, color: "#111" }}>
        {/* 샘플 카드 */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 24, display: "flex", flexDirection: "column", gap: 12, color: "#111" }}>
          <div style={{ height: 120, background: "#e6f4d7", borderRadius: 8, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb" }}>
            상품 이미지
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>완주 딸기</div>
          <div style={{ color: "#111" }}>수익률: 7.2%</div>
          <div style={{ color: "#111" }}>모집금액: 1,000만원</div>
          <button style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "8px 0", fontWeight: 600, fontSize: 15, marginTop: 8 }}>투자하기</button>
        </div>
        {/* 추가 카드 샘플 */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 24, display: "flex", flexDirection: "column", gap: 12, color: "#111" }}>
          <div style={{ height: 120, background: "#e6f4d7", borderRadius: 8, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb" }}>
            상품 이미지
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>제주 감귤</div>
          <div style={{ color: "#111" }}>수익률: 5.8%</div>
          <div style={{ color: "#111" }}>모집금액: 2,000만원</div>
          <button style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "8px 0", fontWeight: 600, fontSize: 15, marginTop: 8 }}>투자하기</button>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 24, display: "flex", flexDirection: "column", gap: 12, color: "#111" }}>
          <div style={{ height: 120, background: "#e6f4d7", borderRadius: 8, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb" }}>
            상품 이미지
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>영광 굴비</div>
          <div style={{ color: "#111" }}>수익률: 6.1%</div>
          <div style={{ color: "#111" }}>모집금액: 1,500만원</div>
          <button style={{ background: "#aaa", color: "#fff", border: "none", borderRadius: 6, padding: "8px 0", fontWeight: 600, fontSize: 15, marginTop: 8 }} disabled>마감</button>
        </div>
      </section>
      {/* 페이지네이션 샘플 */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, margin: "32px 0" }}>
        <button style={{ border: "none", background: "#e6f4d7", borderRadius: 6, padding: "6px 14px", fontWeight: 600, color: "#4b5e2e" }}>1</button>
        <button style={{ border: "none", background: "#fff", borderRadius: 6, padding: "6px 14px", fontWeight: 600, color: "#4b5e2e" }}>2</button>
        <button style={{ border: "none", background: "#fff", borderRadius: 6, padding: "6px 14px", fontWeight: 600, color: "#4b5e2e" }}>3</button>
      </div>
    </div>
  );
} 