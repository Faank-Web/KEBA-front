"use client";

import React, { useState } from "react";

const MENU = [
  { key: "info", label: "내 정보" },
  { key: "invest", label: "투자 내역" },
  { key: "portfolio", label: "포트폴리오" },
  { key: "inquiry", label: "문의 내역" },
  { key: "account", label: "내 계좌" },
];

export default function MyPage() {
  const [selected, setSelected] = useState("info");

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 80px)", background: "#f8f8f8" }}>
      {/* 좌측 연두색 사이드바 */}
      <aside style={{ width: 260, background: "#e6f4d7", padding: "48px 0 0 0", borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: "#222", marginBottom: 32, textAlign: "center" }}>
          안녕하세요<br />
          <span style={{ color: "#4b5e2e", fontSize: 28 }}>KEBA 님</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 18, width: "100%", fontSize: 17, fontWeight: 500, color: "#4b5e2e", paddingLeft: 40 }}>
          {MENU.map((item) => (
            <div
              key={item.key}
              onClick={() => setSelected(item.key)}
              style={{
                color: selected === item.key ? "#222" : "#4b5e2e",
                fontWeight: selected === item.key ? 700 : 500,
                background: selected === item.key ? "#d6eec2" : "none",
                borderRadius: 6,
                padding: "6px 0 6px 12px",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>
      {/* 우측 메인 콘텐츠 */}
      <main style={{ flex: 1, padding: "48px 40px 0 40px", display: "flex", flexDirection: "column", height: "100vh" }}>
        {selected === "info" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 예상 수익 전망</div>
            <div style={{ fontWeight: 700, fontSize: 20, color: "#111", marginBottom: 8 }}>전략형 투자 상품 <span style={{ color: "#888", fontWeight: 500, fontSize: 16 }}>.○○○종</span></div>
            <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
              <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>경매 실적</div>
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>9,999만원</div>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최근 평균보다 10% 비싸게 판매</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 투자자 전용 경매 실적</div>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000만원</div>
              </div>
              <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>목표 수익</div>
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>000~00만원</div>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최대 0%~00% 수익 목표</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 목표 수익 시뮬레이터</div>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000~00만원</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>마감까지<br />7일 00 : 00 : 00</div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#6b8e23", fontWeight: 700, fontSize: 17 }}>70%</span>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 12, width: "100%", maxWidth: 320, margin: "0 8px" }}>
                  <div style={{ background: "#b2c7a7", width: "70%", height: 12, borderRadius: 6 }}></div>
                </div>
                <span style={{ color: "#b2c7a7", fontWeight: 700, fontSize: 15 }}>9999 투자증</span>
              </div>
              <button style={{ background: "#e6f4d7", color: "#6b8e23", border: "none", borderRadius: 8, padding: "18px 48px", fontWeight: 700, fontSize: 20, marginLeft: 12 }}>지금 투자증 받기</button>
            </div>
          </div>
        )}
        {selected === "invest" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>투자 내역</div>
            <table style={{ width: "100%", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", fontSize: 16, color: "#111", borderCollapse: "collapse", marginBottom: 24 }}>
              <thead>
                <tr style={{ background: "#e6f4d7" }}>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0" }}>상품명</th>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0" }}>투자금액</th>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0" }}>수익률</th>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0" }}>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>완주 딸기</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>1,000만원</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>7.2%</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0", color: "#4b5e2e", fontWeight: 700 }}>진행중</td>
                </tr>
                <tr>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>제주 감귤</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>2,000만원</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>5.8%</td>
                  <td style={{ padding: 14, border: "1px solid #e0e0e0", color: "#aaa" }}>마감</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {selected === "portfolio" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>포트폴리오</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              포트폴리오 데이터가 없습니다.
            </div>
          </div>
        )}
        {selected === "inquiry" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>문의 내역</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              문의 내역이 없습니다.
            </div>
          </div>
        )}
        {selected === "account" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 계좌</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              등록된 계좌가 없습니다.
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 