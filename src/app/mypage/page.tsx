"use client";
import React from "react";

export default function MyPageMain() {
  return (
    <div className="mypage-main" style={{ width: "100%", background: "#f7f9fa", borderRadius: 24, boxShadow: "0 4px 32px #e0e6ed", padding: "36px 24px 48px 24px", minHeight: 600 }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#222", marginBottom: 32, letterSpacing: 1 }}> 마이페이지 대시보드</div>
      <div className="mypage-card-list" style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48 }}>
        {/* 예상 수익 카드 */}
        <div style={{ flex: 1, background: "linear-gradient(135deg, #e6f4d7 0%, #b2c7a7 100%)", borderRadius: 18, boxShadow: "0 2px 12px #e0e0e0", padding: 36, color: "#222", display: "flex", flexDirection: "column", alignItems: "flex-start", minWidth: 220 }}>
          <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 16, color: "#6b8e23" }}> 예상 수익</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#4b5e2e", marginBottom: 10, letterSpacing: 1 }}>9,999만원</div>
          <div style={{ fontSize: 16, color: "#888", marginBottom: 10 }}> 목표 달성률 <b style={{ color: "#6b8e23" }}>85%</b></div>
          <div style={{ background: "#e0e0e0", height: 10, borderRadius: 5, overflow: "hidden", width: "100%", marginBottom: 6 }}>
            <div style={{ background: "linear-gradient(90deg, #b2c7a7, #6b8e23)", height: "100%", width: "85%" }}></div>
          </div>
        </div>
        {/* 투자상품 카드 */}
        <div style={{ flex: 1, background: "#fff", borderRadius: 18, padding: 36, boxShadow: "0 2px 12px #e0e0e0", display: "flex", flexDirection: "column", alignItems: "flex-start", minWidth: 220 }}>
          <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 16, color: "#6b8e23" }}> 진행 중인 투자 상품</div>
          <div style={{ fontSize: 20, color: "#111", marginBottom: 8 }}> 전략형 투자 상품</div>
          <div style={{ fontSize: 16, color: "#888" }}> ○○○농장</div>
        </div>
        {/* 통계 카드 */}
        <div style={{ flex: 1, background: "linear-gradient(135deg, #f3fbe7 0%, #e6f4d7 100%)", borderRadius: 18, padding: 36, boxShadow: "0 2px 12px #e0e0e0", minWidth: 220 }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#6b8e23" }}> 누적 회원 수</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#222" }}>99,999명</span>
            </div>
            <div style={{ background: "#e0e0e0", height: 10, borderRadius: 5, overflow: "hidden", width: "100%" }}>
              <div style={{ background: "linear-gradient(90deg, #b2c7a7, #6b8e23)", height: "100%", width: "85%" }}></div>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#6b8e23" }}> 투자자 수</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#222" }}>99,999명</span>
            </div>
            <div style={{ background: "#e0e0e0", height: 10, borderRadius: 5, overflow: "hidden", width: "100%" }}>
              <div style={{ background: "linear-gradient(90deg, #b2c7a7, #6b8e23)", height: "100%", width: "70%" }}></div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#6b8e23" }}> 누적 투자금</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#222" }}>99.9억</span>
            </div>
            <div style={{ background: "#e0e0e0", height: 10, borderRadius: 5, overflow: "hidden", width: "100%" }}>
              <div style={{ background: "linear-gradient(90deg, #b2c7a7, #6b8e23)", height: "100%", width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* 마감 타이머 및 안내 */}
      <div style={{ marginBottom: 28, fontSize: 19, color: "#222", fontWeight: 700, letterSpacing: 0.5 }}> 마감까지 <span style={{ color: "#4b5e2e", fontWeight: 900 }}>7일 00:00:00</span></div>
      <div style={{ fontSize: 17, color: "#e74c3c", fontWeight: 700, marginBottom: 16, letterSpacing: 0.5 }}>70% 금액이 모집되었습니다! 혜택 있는 투자 상품을 확인해보세요.</div>
    </div>
  );
} 