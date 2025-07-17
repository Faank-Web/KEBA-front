import React from "react";

export default function MyPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", color: "#111" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111", margin: "32px 0 24px 0" }}>마이페이지</h2>
      {/* 프로필 카드 */}
      <section style={{ background: "#e6f4d7", borderRadius: 12, padding: 24, marginBottom: 24, display: "flex", alignItems: "center", gap: 24, color: "#111" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#6b8e23", fontWeight: 700 }}>
          홍길동
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>홍길동</div>
          <div style={{ color: "#111", fontSize: 15 }}>010-1234-5678</div>
        </div>
      </section>
      {/* 투자 대시보드 */}
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 24, marginBottom: 24, display: "flex", gap: 32, color: "#111" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#111" }}>총 투자금</div>
          <div style={{ fontSize: 24, fontWeight: 700, margin: "12px 0" }}>3,000만원</div>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#111" }}>수익률</div>
          <div style={{ fontSize: 24, fontWeight: 700, margin: "12px 0" }}>6.3%</div>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#111" }}>투자 상품 수</div>
          <div style={{ fontSize: 24, fontWeight: 700, margin: "12px 0" }}>3개</div>
        </div>
      </section>
      {/* 투자 내역 리스트 */}
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 24, color: "#111" }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 16 }}>투자 내역</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, color: "#111" }}>
          <thead>
            <tr style={{ background: "#e6f4d7" }}>
              <th style={{ padding: 10, border: "1px solid #e0e0e0", color: "#111" }}>상품명</th>
              <th style={{ padding: 10, border: "1px solid #e0e0e0", color: "#111" }}>투자금액</th>
              <th style={{ padding: 10, border: "1px solid #e0e0e0", color: "#111" }}>수익률</th>
              <th style={{ padding: 10, border: "1px solid #e0e0e0", color: "#111" }}>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>완주 딸기</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>1,000만원</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>7.2%</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0", color: "#4b5e2e", fontWeight: 700 }}>진행중</td>
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>제주 감귤</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>2,000만원</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0" }}>5.8%</td>
              <td style={{ padding: 10, border: "1px solid #e0e0e0", color: "#aaa" }}>마감</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
} 