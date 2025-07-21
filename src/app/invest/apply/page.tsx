"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ACCOUNTS = [
  { bank: "신한투자증권", account: "110-1234-5678-90", icon: "S", connected: true },
  { bank: "NH농협은행", account: "301-9876-5432-10", icon: "N", connected: false },
];

export default function InvestApplyPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [quantity, setQuantity] = useState("20,000");
  const [showAccountInfoModal, setShowAccountInfoModal] = useState(false);
  const [accountCopied, setAccountCopied] = useState(false);
  const router = useRouter();

  const handleAccountClick = (idx: number) => {
    setSelectedAccount(idx);
    setCopied(false);
  };
  
  const handleCopy = () => {
    if (selectedAccount !== null) {
      navigator.clipboard.writeText(ACCOUNTS[selectedAccount].account);
      setCopied(true);
    }
  };
  
  const closeAll = () => {
    setShowModal(false);
    setSelectedAccount(null);
    setCopied(false);
  };

  const handleConfirmComplete = () => {
    setShowQuantityModal(true);
    setShowModal(false);
  };

  const closeQuantityModal = () => {
    setShowQuantityModal(false);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value) {
      const numValue = parseInt(value);
      setQuantity(numValue.toLocaleString());
    } else {
      setQuantity("");
    }
  };

  const handleQuickSelect = (amount: string) => {
    if (amount === "최대") {
      setQuantity("1,000,000");
    } else {
      const numAmount = amount.replace("C", "");
      const total = parseInt(numAmount) * 10000; // 1C = 10,000원 가정
      setQuantity(total.toLocaleString());
    }
  };

  const handleInvest = () => {
    alert(`${quantity}원 투자가 신청되었습니다!`);
    setShowQuantityModal(false);
    setQuantity("20,000");
  };

  const handlePrevious = () => {
    router.back();
  };

  // 투자 수량 입력 모달 내 계좌 정보 클릭 시
  const handleAccountInfoClick = () => {
    setShowAccountInfoModal(true);
  };
  const closeAccountInfoModal = () => {
    setShowAccountInfoModal(false);
  };

  const handleAccountInfoCopy = () => {
    navigator.clipboard.writeText(selectedAccount !== null ? ACCOUNTS[selectedAccount].account : "110-1234-5678-90");
    setAccountCopied(true);
    setTimeout(() => setAccountCopied(false), 1200);
  };

  return (
    <div style={{ maxWidth: 900, margin: "48px auto 56px auto", padding: "0 16px", color: "#222", background: "#f7f9fa", borderRadius: 24, boxShadow: "0 4px 32px #e0e6ed", position: "relative", minHeight: 700 }}>
      {/* 상단 혜택 안내 */}
      <div style={{ display: "flex", gap: 18, alignItems: "center", justifyContent: "center", margin: "40px 0 0 0" }}>
        <span style={{ fontSize: 28, color: "#6b8e23" }}>🎁</span>
        <span style={{ fontSize: 20, color: "#6b8e23", fontWeight: 700 }}>투자 전 특별 혜택</span>
      </div>
      <div style={{ background: "linear-gradient(90deg, #e6f4d7 0%, #b2c7a7 100%)", color: "#222", fontWeight: 700, fontSize: 22, borderRadius: 16, padding: "18px 0", textAlign: "center", margin: "18px 0 16px 0", boxShadow: "0 2px 8px #e0e0e0" }}>
        놓치면 아쉬운 투자 전 혜택! 지금 참여 시 추가 리워드 지급
      </div>
      <div style={{ background: "#fff", color: "#6b8e23", fontWeight: 600, fontSize: 16, borderRadius: 12, padding: "14px 0", textAlign: "center", margin: "0 0 36px 0", boxShadow: "0 1px 4px #e0e0e0" }}>
        투자 성공 시 <b>추가 혜택</b>을 받을 수 있습니다
      </div>
      {/* 계좌 리스트 */}
      <div style={{ display: "flex", gap: 32, justifyContent: "center", marginBottom: 40 }}>
        {ACCOUNTS.map((acc, idx) => (
          <div key={acc.bank} style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px #e0e0e0", padding: 28, minWidth: 220, maxWidth: 260, textAlign: "center", position: "relative", transition: "box-shadow 0.2s", cursor: "pointer", border: selectedAccount === idx ? "2.5px solid #6b8e23" : "2px solid #e0e0e0" }} onClick={() => handleAccountClick(idx)}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #b2c7a7 0%, #6b8e23 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 22, marginBottom: 2 }}>{acc.icon}</div>
              <span style={{ fontWeight: 700, fontSize: 18, color: "#222" }}>{acc.bank}</span>
              <span style={{ fontSize: 13, color: acc.connected ? "#6b8e23" : "#ff6b6b", fontWeight: 600, marginTop: 2, letterSpacing: 0.5 }}>{acc.connected ? "개설완료" : "개설필요"}</span>
            </div>
            <div style={{ fontSize: 15, color: "#888", margin: "8px 0 0 0" }}>10만원 투자 성공하고<br /><b style={{ color: "#6b8e23" }}>20,000원 투자 킷</b> 받기</div>
            <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 13, marginTop: 10 }}>2025년까지 만기</div>
            {selectedAccount === idx && <div style={{ position: "absolute", top: 16, right: 16, background: "#6b8e23", color: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 700, padding: "2px 10px" }}>선택됨</div>}
          </div>
        ))}
      </div>
      {/* 계좌 선택 버튼 */}
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 0 0" }}>
        <button onClick={() => setShowModal(true)} style={{ background: "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)", color: "#fff", border: "none", borderRadius: 14, padding: "18px 0", width: 340, fontWeight: 700, fontSize: 20, letterSpacing: 1, cursor: "pointer", boxShadow: "0 2px 8px #b2c7a7", transition: "all 0.2s" }}>계좌 선택하기</button>
      </div>
      {/* 하단 이전 버튼 */}
      <div style={{ display: "flex", justifyContent: "flex-start", margin: "40px 0 0 0" }}>
        <button onClick={handlePrevious} style={{ background: "#fff", color: "#6b8e23", border: "2px solid #b2c7a7", borderRadius: 10, padding: "10px 36px", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 1px 4px #e0e0e0" }}>이전</button>
      </div>
      {/* 계좌 선택 모달 */}
      {showModal && selectedAccount === null && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 1200, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 22, boxShadow: "0 8px 32px rgba(107,142,35,0.13)", padding: "48px 44px 40px 44px", minWidth: 380, minHeight: 260, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", border: "2.5px solid #b2c7a7" }}>
            {/* 닫기 버튼 */}
            <button onClick={closeAll} style={{ position: "absolute", top: 18, right: 18, background: "#f7f9fa", border: "none", borderRadius: "50%", width: 36, height: 36, fontSize: 22, color: "#6b8e23", cursor: "pointer", boxShadow: "0 1px 4px #e0e0e0" }}>&times;</button>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 32, color: "#222", letterSpacing: 1 }}>투자하실 계좌를 선택해주세요</div>
            <div style={{ display: "flex", gap: 36 }}>
              {ACCOUNTS.map((acc, idx) => (
                <button key={acc.bank} onClick={() => handleAccountClick(idx)} style={{ width: 120, height: 120, borderRadius: 18, border: selectedAccount === idx ? "2.5px solid #6b8e23" : "2px solid #e0e0e0", background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", cursor: "pointer", boxShadow: "0 2px 8px #e0e0e0", fontSize: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", transition: "box-shadow 0.2s, border 0.2s" }}>
                  <span style={{ fontSize: 36, color: "#6b8e23", fontWeight: 700, marginBottom: 10 }}>{acc.icon}</span>
                  <span style={{ fontWeight: 700, color: "#222", marginBottom: 2 }}>{acc.bank}</span>
                  <span style={{ fontSize: 12, color: acc.connected ? "#6b8e23" : "#ff6b6b", fontWeight: 600, marginTop: 2 }}>{acc.connected ? "개설완료" : "개설필요"}</span>
                  {selectedAccount === idx && <span style={{ position: "absolute", top: 10, right: 10, background: "#6b8e23", color: "#fff", borderRadius: 8, fontSize: 11, fontWeight: 700, padding: "2px 8px" }}>선택됨</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* 계좌 복사 안내 모달 */}
      {showModal && selectedAccount !== null && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 1200, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 22, boxShadow: "0 8px 32px rgba(107,142,35,0.13)", padding: "48px 44px 40px 44px", minWidth: 420, minHeight: 260, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", border: "2.5px solid #b2c7a7" }}>
            {/* 닫기 버튼 */}
            <button onClick={closeAll} style={{ position: "absolute", top: 18, right: 18, background: "#f7f9fa", border: "none", borderRadius: "50%", width: 36, height: 36, fontSize: 22, color: "#6b8e23", cursor: "pointer", boxShadow: "0 1px 4px #e0e0e0" }}>&times;</button>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, marginTop: 8 }}>
              <span style={{ color: "#6b8e23", fontSize: 24 }}>💳</span>
              <span style={{ fontWeight: 700, fontSize: 18, color: "#222" }}>입금 계좌 정보</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f8f9fa", borderRadius: 12, padding: "18px 22px", marginBottom: 18, border: "1.5px solid #e0e0e0", minWidth: 320 }}>
              <span style={{ fontSize: 28, color: "#6b8e23", fontWeight: 700 }}>{ACCOUNTS[selectedAccount].icon}</span>
              <span style={{ fontWeight: 600, fontSize: 17 }}>{ACCOUNTS[selectedAccount].bank}</span>
              <span style={{ flex: 1 }} />
              <span style={{ fontWeight: 700, fontSize: 17 }}>{ACCOUNTS[selectedAccount].account}</span>
              <button onClick={handleCopy} style={{ background: copied ? "#6b8e23" : "#b2c7a7", color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", fontWeight: 600, fontSize: 15, marginLeft: 10, cursor: "pointer", transition: "background 0.2s" }}>복사</button>
            </div>
            {copied && <div style={{ color: "#6b8e23", fontWeight: 600, marginBottom: 10, fontSize: 15 }}>복사완료!</div>}
            <div style={{ color: "#888", fontSize: 13, marginBottom: 18, textAlign: "center" }}>* 본인 명의 계좌에서만 이체가 인정됩니다.</div>
            <button onClick={handleConfirmComplete} style={{ background: "linear-gradient(90deg, #b2c7a7 0%, #6b8e23 100%)", color: "#fff", border: "none", borderRadius: 14, padding: "14px 0", width: 220, fontWeight: 700, fontSize: 18, marginTop: 10, cursor: "pointer", boxShadow: "0 2px 8px #b2c7a7", transition: "all 0.2s" }}>확인 완료</button>
          </div>
        </div>
      )}

      {/* 투자 수량 입력 모달 */}
      {showQuantityModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.15)", padding: "40px", minWidth: 400, maxWidth: 460, position: "relative" }}>
            {/* 닫기 버튼 */}
            <button onClick={closeQuantityModal} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", fontSize: 24, color: "#ccc", cursor: "pointer", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            
            {/* 제목 */}
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 32, color: "#111", textAlign: "center" }}>
              투자 수량을 입력해주세요
            </div>

            {/* 계좌 정보 */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", 
                borderRadius: 12, 
                padding: "16px 20px", 
                marginBottom: 28,
                border: "1px solid #dee2e6",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                cursor: "pointer"
              }}
              onClick={handleAccountInfoClick}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: "50%", 
                  background: "linear-gradient(135deg, #6b8e23 0%, #b2c7a7 100%)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14
                }}>
                  {selectedAccount !== null ? ACCOUNTS[selectedAccount].icon : "S"}
                </div>
                <span style={{ fontWeight: 600, fontSize: 16, color: "#111" }}>
                  {selectedAccount !== null ? ACCOUNTS[selectedAccount].bank : "신한투자증권"} KEBA님
                </span>
              </div>
              <div style={{ 
                width: 24, 
                height: 24, 
                borderRadius: "50%", 
                background: "#e9ecef", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                cursor: "pointer"
              }}>
                <span style={{ color: "#6c757d", fontSize: 12 }}>▶</span>
              </div>
            </div>

            {/* 수량 입력 필드 */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                background: "#f8f9fa", 
                borderRadius: 12, 
                padding: "20px 24px", 
                border: "2px solid #b2c7a7",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
              }}>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#111",
                    outline: "none"
                  }}
                  placeholder="0"
                />
                <div style={{ 
                  background: "#6b8e23", 
                  color: "#fff", 
                  padding: "6px 12px", 
                  borderRadius: 8, 
                  fontWeight: 600, 
                  fontSize: 14 
                }}>
                  1 C
                </div>
              </div>
            </div>

            {/* 빠른 선택 버튼 */}
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              {["1C", "10C", "100C", "최대"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickSelect(amount)}
                  style={{
                    flex: 1,
                    padding: "14px 8px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "1px solid #dee2e6",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#495057",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #b2c7a7 0%, #6b8e23 100%)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                    e.currentTarget.style.color = "#495057";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* 구매 요약 */}
            <div style={{ 
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", 
              borderRadius: 12, 
              padding: 20, 
              marginBottom: 24,
              border: "1px solid #dee2e6"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 15, color: "#495057", fontWeight: 500 }}>구매가능금액</span>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: "50%", 
                    background: "#6b8e23", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    cursor: "pointer"
                  }}>
                    <span style={{ color: "#fff", fontSize: 12 }}>↻</span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>0원</span>
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 15, color: "#495057", fontWeight: 500 }}>이용료</span>
                  <div style={{ 
                    width: 16, 
                    height: 16, 
                    borderRadius: "50%", 
                    background: "#6c757d", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    cursor: "pointer"
                  }}>
                    <span style={{ color: "#fff", fontSize: 10 }}>i</span>
                  </div>
                </div>
                <span style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>0원</span>
              </div>
            </div>

            {/* 수수료 설명 */}
            <div style={{ 
              background: "linear-gradient(135deg, #e6f4d7 0%, #d4edda 100%)", 
              borderRadius: 10, 
              padding: 16, 
              marginBottom: 28,
              border: "1px solid #b2c7a7"
            }}>
              <div style={{ fontSize: 13, color: "#6b8e23", lineHeight: 1.6, marginBottom: 6, fontWeight: 500 }}>
                🎉 플랫폼 이용 수수료 면제 혜택으로 수수료가 0원 처리되었습니다.
              </div>
              <div style={{ fontSize: 13, color: "#6b8e23", lineHeight: 1.6, fontWeight: 500 }}>
                ⏰ 해당 수수료 혜택은 이벤트 기간에만 적용되는 혜택입니다.
              </div>
            </div>

            {/* 투자하기 버튼 */}
            <button 
              onClick={handleInvest}
              style={{ 
                width: "100%", 
                background: "linear-gradient(135deg, #b2c7a7 0%, #6b8e23 100%)", 
                color: "#fff", 
                border: "none", 
                borderRadius: 12, 
                padding: "18px 0", 
                fontWeight: 700, 
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(107, 142, 35, 0.3)",
                transition: "all 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(107, 142, 35, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(107, 142, 35, 0.3)";
              }}
            >
              투자하기
            </button>
          </div>
        </div>
      )}
      {/* 가상계좌 정보 모달 */}
      {showAccountInfoModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 4px 24px rgba(0,0,0,0.15)", padding: "36px 32px", minWidth: 340, maxWidth: 400, position: "relative" }}>
            <button onClick={closeAccountInfoModal} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", fontSize: 22, color: "#ccc", cursor: "pointer" }}>×</button>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18, color: "#111", textAlign: "center" }}>
              입금하실 가상계좌 정보
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#f8f9fa", borderRadius: 10, padding: "16px 18px", marginBottom: 18, border: "1px solid #e0e0e0" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #6b8e23 0%, #b2c7a7 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14 }}>
                {selectedAccount !== null ? ACCOUNTS[selectedAccount].icon : "S"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontWeight: 600, fontSize: 15, color: "#111" }}>{selectedAccount !== null ? ACCOUNTS[selectedAccount].bank : "신한투자증권"} <b>KEBA님</b></span>
                <span style={{ fontSize: 13, color: "#888" }}>예금주: KEBA님</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, justifyContent: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 18, color: "#111", letterSpacing: 1 }}>{selectedAccount !== null ? ACCOUNTS[selectedAccount].account : "110-1234-5678-90"}</span>
              <button onClick={handleAccountInfoCopy} style={{ background: accountCopied ? "#6b8e23" : "#b2c7a7", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "background 0.2s" }}>복사</button>
            </div>
            {accountCopied && <div style={{ color: "#6b8e23", fontWeight: 600, textAlign: "center", marginBottom: 8, fontSize: 14 }}>복사완료!</div>}
            <div style={{ fontSize: 13, color: "#6b8e23", textAlign: "center", marginBottom: 6 }}>
              본 계좌로 입금하셔야 투자 신청이 완료됩니다.
            </div>
            <div style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
              * 반드시 본인 명의 계좌에서 이체해 주세요.
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 