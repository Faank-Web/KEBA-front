"use client";
import React from "react";

export default function MyPageMain() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 예상 수익 전망</div>
      <div style={{ display: "flex", gap: 24, marginBottom: 40 }}>
        {/* 예상 수익 카드 */}
        <div style={{ flex: 1, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, color: "#222" }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>예상 수익</div>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#4b5e2e", marginBottom: 8 }}>9,999만원</div>
          <div style={{ fontSize: 15, color: "#888", marginBottom: 8 }}>목표 달성률 85%</div>
          <div style={{ background: "#e0e0e0", height: 8, borderRadius: 4, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ background: "#6b8e23", height: "100%", width: "85%" }}></div>
          </div>
        </div>
        {/* 투자상품 카드 */}
        <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>진행 중인 투자 상품</div>
          <div style={{ fontSize: 18, color: "#111", marginBottom: 8 }}>전략형 투자 상품</div>
          <div style={{ fontSize: 15, color: "#888" }}>○○○농장</div>
        </div>
        {/* 통계 카드 */}
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
      {/* 마감 타이머 및 안내 */}
      <div style={{ marginBottom: 24, fontSize: 18, color: "#111", fontWeight: 600 }}>마감까지 <span style={{ color: "#4b5e2e" }}>7일 00:00:00</span></div>
      <div style={{ fontSize: 16, color: "#b22222", fontWeight: 700, marginBottom: 12 }}>70% 금액이 모집되었습니다! 혜택 있는 투자 상품을 확인해보세요.</div>
    </div>
  );
} 