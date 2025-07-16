import React from "react";

export default function ProductDetailPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#4b5e2e", margin: "32px 0 24px 0" }}>상품 상세</h2>
      <section style={{ display: "flex", gap: 32 }}>
        {/* 상품 이미지 */}
        <div style={{ width: 260, height: 260, background: "#e6f4d7", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb", fontSize: 18 }}>
          상품 이미지
        </div>
        {/* 상세 정보 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#4b5e2e" }}>완주 딸기</div>
          <div style={{ color: "#666", fontSize: 16 }}>생산자: 김농부</div>
          <div style={{ color: "#666", fontSize: 16 }}>수익률: 7.2%</div>
          <div style={{ color: "#666", fontSize: 16 }}>모집금액: 1,000만원</div>
          <div style={{ color: "#666", fontSize: 16 }}>진행상태: <span style={{ color: "#4b5e2e", fontWeight: 700 }}>모집중</span></div>
          <div style={{ color: "#666", fontSize: 16 }}>예상수익: 72만원</div>
          <button style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 16, width: 180 }}>투자하기</button>
        </div>
      </section>
    </div>
  );
} 