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
    <div style={{ width: "100%", background: "#f7f9fa", borderRadius: 24, boxShadow: "0 4px 32px #e0e6ed", padding: "36px 24px 48px 24px", minHeight: 600 }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#222", marginBottom: 32, letterSpacing: 1 }}>프로필</div>
      <div 
        style={{ 
          background: "linear-gradient(135deg, #e6f4d7 0%, #b2c7a7 100%)", 
          borderRadius: 18, 
          boxShadow: "0 2px 12px #e0e0e0", 
          padding: 36, 
          fontSize: 18, 
          color: "#222", 
          display: "flex", 
          alignItems: "center", 
          gap: 36,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onClick={handleProfileClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 16px #b2c7a7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 12px #e0e0e0";
        }}
      >
        <div style={{ fontSize: 54, background: "#fff", borderRadius: "50%", width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center", color: "#b2c7a7", fontWeight: 700, boxShadow: "0 2px 8px #e0e0e0" }}></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 24, color: "#222" }}>KEBA님</div>
          <div style={{ color: "#888", fontSize: 18, marginTop: 6 }}>010 0000 0000</div>
        </div>
        <div style={{ fontSize: 28, color: "#b2c7a7" }}>&gt;</div>
      </div>
      <div style={{ marginTop: 36, background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px #e0e0e0", padding: 36, fontSize: 18, color: "#222", display: "flex", alignItems: "center", gap: 36 }}>
        <span style={{ fontSize: 26, color: "#b2c7a7", marginRight: 16 }}></span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>내 포인트</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontWeight: 800, fontSize: 22, color: "#4b5e2e" }}>20,000p</span>
      </div>
      <button 
        onClick={togglePointHistory}
        style={{ 
          marginTop: 24, 
          width: "100%", 
          background: "linear-gradient(90deg, #e6f4d7 0%, #b2c7a7 100%)", 
          border: "none", 
          borderRadius: 12, 
          padding: "16px 0", 
          fontWeight: 700, 
          fontSize: 18, 
          color: "#4b5e2e", 
          cursor: "pointer",
          boxShadow: "0 2px 8px #b2c7a7",
          transition: "background 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #b2c7a7 0%, #e6f4d7 100%)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #e6f4d7 0%, #b2c7a7 100%)"}
      >
        {showPointHistory ? "내역 접기" : "내역 상세보기"}
      </button>

      {/* 포인트 내역 */}
      {showPointHistory && (
        <div style={{ 
          marginTop: 18, 
          background: "#fff", 
          borderRadius: 16, 
          boxShadow: "0 2px 12px #e0e0e0", 
          padding: 28,
          animation: "slideDown 0.3s ease-out"
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#222", marginBottom: 18 }}>포인트 내역</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {pointHistory.map((item, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: index < pointHistory.length - 1 ? "1px solid #eee" : "none"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 15, color: "#666" }}>{item.date}</span>
                  <span style={{ fontSize: 17, color: "#222", fontWeight: 600 }}>{item.description}</span>
                </div>
                <span style={{ 
                  fontSize: 17, 
                  fontWeight: 800, 
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
            borderRadius: 22,
            padding: 40,
            width: "90%",
            maxWidth: 520,
            maxHeight: "80vh",
            overflow: "auto",
            boxShadow: "0 8px 32px #b2c7a7"
          }} onClick={(e) => e.stopPropagation()}>
            {/* 모달 헤더 */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div style={{ fontSize: 54, background: "#e6f4d7", borderRadius: "50%", width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center", color: "#b2c7a7", fontWeight: 700, boxShadow: "0 2px 8px #e0e0e0" }}></div>
                <span style={{ fontSize: 28, fontWeight: 800, color: "#222" }}>내 정보 상세</span>
              </div>
              <button
                onClick={closeModal}
                style={{
                  background: "#f7f9fa",
                  border: "none",
                  borderRadius: "50%",
                  fontSize: 26,
                  color: "#b2c7a7",
                  cursor: "pointer",
                  padding: 6,
                  width: 40,
                  height: 40,
                  boxShadow: "0 1px 4px #e0e0e0"
                }}
              >
                ×
              </button>
            </div>

            {/* 상세 정보 목록 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 17, color: "#666", fontWeight: 600 }}>이름</span>
                <span style={{ fontSize: 17, color: "#222", fontWeight: 700 }}>KEBA</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 17, color: "#666", fontWeight: 600 }}>전화번호</span>
                <span style={{ fontSize: 17, color: "#222", fontWeight: 700 }}>010 0000 0000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 17, color: "#666", fontWeight: 600 }}>가입일</span>
                <span style={{ fontSize: 17, color: "#222", fontWeight: 700 }}>2024년 01월 01일</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 17, color: "#666", fontWeight: 600 }}>회원등급</span>
                <span style={{ fontSize: 17, color: "#4b5e2e", fontWeight: 800 }}>VIP</span>
              </div>
            </div>

            {/* 수정/취소 버튼 */}
            <div style={{ marginTop: 36, display: "flex", gap: 16 }}>
              <button style={{
                flex: 1,
                background: "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "16px 0",
                fontSize: 17,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px #b2c7a7",
                transition: "background 0.2s"
              }} onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #6b8e23 0%, #b2c7a7 100%)"}
                 onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)"}>
                정보 수정
              </button>
              <button style={{
                flex: 1,
                background: "#f7f9fa",
                color: "#b2c7a7",
                border: "2px solid #b2c7a7",
                borderRadius: 12,
                padding: "16px 0",
                fontSize: 17,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 1px 4px #e0e0e0",
                transition: "background 0.2s"
              }} onMouseEnter={(e) => e.currentTarget.style.background = "#e6f4d7"}
                 onMouseLeave={(e) => e.currentTarget.style.background = "#f7f9fa"}>
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