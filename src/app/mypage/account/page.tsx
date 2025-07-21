"use client";
import React, { useState } from "react";

export default function MyAccountPage() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // 계좌 데이터
  const accounts = [
    { id: "shinhan", name: "신한투자증권", icon: "S" },
    { id: "nh", name: "NH농협은행", icon: "N" }
  ];

  // 투자 상품 데이터
  const products = [
    { name: "전략형 투자 상품", amount: "20,000원 투자", profit: "+3%", isPositive: true },
    { name: "안정형 투자 상품", amount: "50,000원 투자", profit: "-3%", isPositive: false }
  ];

  const handleAccountClick = (accountName: string) => {
    setSelectedAccount(accountName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAccount(null);
  };

  return (
    <div style={{ width: "100%", background: "#f7f9fa", borderRadius: 24, boxShadow: "0 4px 32px #e0e6ed", padding: "36px 24px 48px 24px", minHeight: 600 }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#222", marginBottom: 32, letterSpacing: 1 }}>내 계좌</div>
      {/* 계좌 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {accounts.map((account) => (
          <div
            key={account.id}
            onClick={() => handleAccountClick(account.name)}
            style={{
              background: "linear-gradient(135deg, #e6f4d7 0%, #b2c7a7 100%)",
              borderRadius: 18,
              boxShadow: "0 2px 12px #e0e0e0",
              padding: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px #b2c7a7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px #e0e0e0";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b2c7a7",
                fontWeight: 700,
                fontSize: 22,
                boxShadow: "0 2px 8px #e0e0e0"
              }}>
                {account.icon}
              </div>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#222" }}>{account.name}</span>
            </div>
            <div style={{ fontSize: 28, color: "#b2c7a7" }}>&gt;</div>
          </div>
        ))}
      </div>

      {/* 계좌 상세 모달 */}
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
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "#e6f4d7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#b2c7a7",
                  fontWeight: 700,
                  fontSize: 22,
                  boxShadow: "0 2px 8px #e0e0e0"
                }}>
                  {selectedAccount === "신한투자증권" ? "S" : "N"}
                </div>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#222" }}>{selectedAccount}</span>
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

            {/* 투자 상품 목록 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#222", marginBottom: 18 }}>투자 상품</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {products.map((product, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: 18,
                    background: "#f8f8f8",
                    borderRadius: 12
                  }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      background: "#e6f4d7",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      color: "#b2c7a7"
                    }}>
                      상품 이미지
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 17, fontWeight: 700, color: "#222", marginBottom: 4 }}>{product.name}</div>
                      <div style={{ fontSize: 15, color: "#666" }}>{product.amount}</div>
                    </div>
                    <div style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: product.isPositive ? "#4a90e2" : "#e74c3c"
                    }}>
                      {product.profit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 출금요청 버튼 */}
            <button style={{
              width: "100%",
              background: "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "18px 0",
              fontSize: 18,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px #b2c7a7",
              transition: "background 0.2s"
            }} onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #6b8e23 0%, #b2c7a7 100%)"}
               onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)"}>
              출금요청
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 