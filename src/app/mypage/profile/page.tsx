"use client";
import React, { useState } from "react";

export default function MyProfilePage() {
  const [showModal, setShowModal] = useState(false);
  const [showPointHistory, setShowPointHistory] = useState(false);

  const handleProfileClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const togglePointHistory = () => {
    setShowPointHistory(!showPointHistory);
  };

  // 포인트 내역 데이터
  const pointHistory = [
    { date: "2024.01.15", description: "투자 상품 구매", amount: "+5,000", type: "earn" },
    { date: "2024.01.10", description: "서비스 이용료", amount: "-2,000", type: "use" },
    { date: "2024.01.05", description: "신규 가입 보너스", amount: "+10,000", type: "earn" },
    { date: "2024.01.01", description: "투자 수익", amount: "+7,000", type: "earn" },
    { date: "2023.12.28", description: "포인트 사용", amount: "-3,000", type: "use" }
  ];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 정보</div>
      <div 
        style={{ 
          background: "#fff", 
          borderRadius: 12, 
          boxShadow: "0 2px 8px #e0e0e0", 
          padding: 32, 
          fontSize: 18, 
          color: "#222", 
          display: "flex", 
          alignItems: "center", 
          gap: 32,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onClick={handleProfileClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 12px #d0d0d0";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px #e0e0e0";
        }}
      >
        <div style={{ fontSize: 48, background: "#e6f4d7", borderRadius: "50%", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#b2c7a7", fontWeight: 700 }}>👤</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 22 }}>KEBA님</div>
          <div style={{ color: "#888", fontSize: 17, marginTop: 4 }}>010 0000 0000</div>
        </div>
        <div style={{ fontSize: 24, color: "#bbb" }}>&gt;</div>
      </div>
      <div style={{ marginTop: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 18, color: "#222", display: "flex", alignItems: "center", gap: 32 }}>
        <span style={{ fontSize: 22, color: "#b2c7a7", marginRight: 12 }}>⭐</span>
        <span style={{ fontWeight: 700, fontSize: 18 }}>내 포인트</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontWeight: 700, fontSize: 20, color: "#4b5e2e" }}>20,000p</span>
      </div>
      <button 
        onClick={togglePointHistory}
        style={{ 
          marginTop: 18, 
          width: "100%", 
          background: "#f6fff0", 
          border: "none", 
          borderRadius: 8, 
          padding: "14px 0", 
          fontWeight: 600, 
          fontSize: 17, 
          color: "#4b5e2e", 
          cursor: "pointer",
          transition: "background 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "#e6f4d7"}
        onMouseLeave={(e) => e.currentTarget.style.background = "#f6fff0"}
      >
        {showPointHistory ? "내역 접기" : "내역 상세보기"}
      </button>

      {/* 포인트 내역 */}
      {showPointHistory && (
        <div style={{ 
          marginTop: 16, 
          background: "#fff", 
          borderRadius: 12, 
          boxShadow: "0 2px 8px #e0e0e0", 
          padding: 24,
          animation: "slideDown 0.3s ease-out"
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 16 }}>포인트 내역</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {pointHistory.map((item, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: index < pointHistory.length - 1 ? "1px solid #eee" : "none"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 14, color: "#666" }}>{item.date}</span>
                  <span style={{ fontSize: 16, color: "#111", fontWeight: 500 }}>{item.description}</span>
                </div>
                <span style={{ 
                  fontSize: 16, 
                  fontWeight: 700, 
                  color: item.type === "earn" ? "#4b5e2e" : "#e74c3c"
                }}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 내 정보 상세 모달 */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }} onClick={closeModal}>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            width: "90%",
            maxWidth: 500,
            maxHeight: "80vh",
            overflow: "auto"
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* 모달 헤더 */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 48, background: "#e6f4d7", borderRadius: "50%", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#b2c7a7", fontWeight: 700 }}>👤</div>
                <span style={{ fontSize: 24, fontWeight: 700, color: "#111" }}>내 정보 상세</span>
              </div>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 24,
                  color: "#ccc",
                  cursor: "pointer",
                  padding: 4
                }}
              >
                ×
              </button>
            </div>

            {/* 상세 정보 목록 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 16, color: "#666", fontWeight: 500 }}>이름</span>
                <span style={{ fontSize: 16, color: "#111", fontWeight: 600 }}>KEBA</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 16, color: "#666", fontWeight: 500 }}>전화번호</span>
                <span style={{ fontSize: 16, color: "#111", fontWeight: 600 }}>010 0000 0000</span>
              </div>
              {/* 이메일, 생년월일 항목 제거됨 */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 16, color: "#666", fontWeight: 500 }}>가입일</span>
                <span style={{ fontSize: 16, color: "#111", fontWeight: 600 }}>2024년 01월 01일</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 16, color: "#666", fontWeight: 500 }}>회원등급</span>
                <span style={{ fontSize: 16, color: "#4b5e2e", fontWeight: 700 }}>VIP</span>
              </div>
            </div>

            {/* 수정 버튼 */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <button style={{
                flex: 1,
                background: "#6b8e23",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "16px 0",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.2s"
              }} onMouseEnter={(e) => e.currentTarget.style.background = "#5a7a1e"}
                 onMouseLeave={(e) => e.currentTarget.style.background = "#6b8e23"}>
                정보 수정
              </button>
              <button style={{
                flex: 1,
                background: "#f8f8f8",
                color: "#666",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "16px 0",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s"
              }} onMouseEnter={(e) => e.currentTarget.style.background = "#eee"}
                 onMouseLeave={(e) => e.currentTarget.style.background = "#f8f8f8"}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 