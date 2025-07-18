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
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 계좌</div>
      
      {/* 계좌 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {accounts.map((account) => (
          <div
            key={account.id}
            onClick={() => handleAccountClick(account.name)}
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #e0e0e0",
              padding: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px #d0d0d0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px #e0e0e0";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#4a90e2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 18
              }}>
                {account.icon}
              </div>
              <span style={{ fontSize: 18, fontWeight: 600, color: "#111" }}>{account.name}</span>
            </div>
            <div style={{ fontSize: 20, color: "#ccc" }}>&gt;</div>
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
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#4a90e2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18
                }}>
                  {selectedAccount === "신한투자증권" ? "S" : "N"}
                </div>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>{selectedAccount}</span>
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

            {/* 투자 상품 목록 */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 16 }}>투자 상품</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {products.map((product, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: 16,
                    background: "#f8f8f8",
                    borderRadius: 8
                  }}>
                    <div style={{
                      width: 60,
                      height: 60,
                      background: "#ddd",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      color: "#666"
                    }}>
                      상품 이미지
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 4 }}>{product.name}</div>
                      <div style={{ fontSize: 14, color: "#666" }}>{product.amount}</div>
                    </div>
                    <div style={{
                      fontSize: 16,
                      fontWeight: 700,
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
              출금요청
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 