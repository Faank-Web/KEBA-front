import React from "react";

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", color: "#111" }}>
      {/* 상단 이벤트/공지 영역 */}
      <section style={{ display: "flex", gap: 24, margin: "32px 0 24px 0" }}>
        <div style={{ flex: 2, background: "#f3fbe7", borderRadius: 12, padding: 32, minHeight: 160, display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 2px 8px #e0e0e0", color: "#111" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#111", marginBottom: 10 }}>FAANK 농수산물 투자 플랫폼</h2>
          <ul style={{ color: "#111", fontSize: 16, margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>실시간 농수산물 투자 상품 현황 제공</li>
            <li>이벤트 및 공지사항 안내</li>
            <li>투자자 보호를 위한 안전한 시스템</li>
          </ul>
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb" }}>
          {/* 이벤트 이미지 자리 */}
          <span style={{ color: "#bbb", fontSize: 18 }}>이벤트 이미지</span>
        </div>
      </section>
      {/* 상품 상태 표 */}
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, marginBottom: 40, color: "#111" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 18 }}>실시간 상품 현황</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16, color: "#111" }}>
          <thead>
            <tr style={{ background: "#e6f4d7" }}>
              <th style={{ padding: 12, border: "1px solid #e0e0e0", color: "#111" }}>상품명</th>
              <th style={{ padding: 12, border: "1px solid #e0e0e0", color: "#111" }}>상태</th>
              <th style={{ padding: 12, border: "1px solid #e0e0e0", color: "#111" }}>수익률</th>
              <th style={{ padding: 12, border: "1px solid #e0e0e0", color: "#111" }}>모집금액</th>
              <th style={{ padding: 12, border: "1px solid #e0e0e0", color: "#111" }}>진행상태</th>
            </tr>
          </thead>
          <tbody>
            {/* 샘플 데이터 */}
            <tr>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>완주 딸기</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>정상</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>7.2%</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>1,000만원</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0", color: "#4b5e2e", fontWeight: 700 }}>모집중</td>
            </tr>
            <tr>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>제주 감귤</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>정상</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>5.8%</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>2,000만원</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0", color: "#4b5e2e", fontWeight: 700 }}>모집중</td>
            </tr>
            <tr>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>영광 굴비</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>정상</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>6.1%</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0" }}>1,500만원</td>
              <td style={{ padding: 12, border: "1px solid #e0e0e0", color: "#aaa" }}>마감</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
