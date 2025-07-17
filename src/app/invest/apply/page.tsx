"use client";
import React, { useState } from "react";

const ACCOUNTS = [
  { bank: "신한투자증권", account: "110-1234-5678-90", icon: "S" },
  { bank: "NH농협은행", account: "301-9876-5432-10", icon: "N" },
];

export default function InvestApplyPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

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

  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 24px", color: "#111", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px #e0e0e0", position: "relative" }}>
      {/* 상단 혜택 안내 */}
      <div style={{ fontSize: 18, color: "#bdbdbd", fontWeight: 500, margin: "32px 0 0 0" }}>놓치면 아쉬운 투자 킷 혜택</div>
      <div style={{ background: "#b2c7a7", color: "#fff", fontWeight: 700, fontSize: 22, borderRadius: 10, padding: "18px 0", textAlign: "center", margin: "18px 0 32px 0" }}>
        놓치면 아쉬운 투자 킷 혜택
      </div>
      {/* 은행별 계좌 리스트 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* 신한투자증권 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#4b5e2e" }}>S</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>신한투자증권</span>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ background: "#ededed", borderRadius: 8, padding: 18, minWidth: 180, textAlign: "center", marginBottom: 8 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>10만원 투자 성공하고</div>
                <div style={{ color: "#888", fontSize: 14, margin: "6px 0" }}>20,000원 투자 킷 받기</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>2025년까지 만기</div>
              </div>
            ))}
          </div>
        </div>
        {/* NH농협은행 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: "#4b5e2e" }}>S</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>NH농협은행</span>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ background: "#ededed", borderRadius: 8, padding: 18, minWidth: 180, textAlign: "center", marginBottom: 8 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>10만원 투자 성공하고</div>
                <div style={{ color: "#888", fontSize: 14, margin: "6px 0" }}>20,000원 투자 킷 받기</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>2025년까지 만기</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 계좌 선택 버튼 */}
      <div style={{ display: "flex", justifyContent: "center", margin: "40px 0 0 0" }}>
        <button onClick={() => setShowModal(true)} style={{ background: "#b2c7a7", color: "#fff", border: "none", borderRadius: 8, padding: "18px 0", width: 420, fontWeight: 700, fontSize: 22, letterSpacing: 1, cursor: "pointer" }}>계좌 선택하기</button>
      </div>
      {/* 하단 이전 버튼 */}
      <div style={{ display: "flex", justifyContent: "flex-start", margin: "32px 0 0 0" }}>
        <button style={{ background: "#ededed", color: "#111", border: "none", borderRadius: 8, padding: "10px 36px", fontWeight: 600, fontSize: 16 }}>이전</button>
      </div>
      {/* 계좌 선택 모달 */}
      {showModal && selectedAccount === null && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #8888", padding: "36px 40px 32px 40px", minWidth: 380, minHeight: 220, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* 닫기 버튼 */}
            <button onClick={closeAll} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", fontSize: 22, color: "#888", cursor: "pointer" }}>&times;</button>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 24, color: "#222" }}>투자하실 계좌를 선택해주세요.</div>
            <div style={{ display: "flex", gap: 32 }}>
              {ACCOUNTS.map((acc, idx) => (
                <button key={acc.bank} onClick={() => handleAccountClick(idx)} style={{ width: 110, height: 110, borderRadius: 12, border: "2px solid #e0e0e0", background: "#fafafa", cursor: "pointer", boxShadow: "0 1px 4px #eee", fontSize: 15, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 32, color: "#4b5e2e", fontWeight: 700, marginBottom: 8 }}>{acc.icon}</span>
                  <span style={{ fontWeight: 600 }}>{acc.bank}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* 계좌 복사 안내 모달 */}
      {showModal && selectedAccount !== null && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.35)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #8888", padding: "36px 40px 32px 40px", minWidth: 420, minHeight: 220, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* 닫기 버튼 */}
            <button onClick={closeAll} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", fontSize: 22, color: "#888", cursor: "pointer" }}>&times;</button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ color: "#6b8e23", fontSize: 22 }}>●</span>
              <span style={{ fontWeight: 600, fontSize: 16 }}>아래의 계좌번호로 금액을 입력해주세요.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <span style={{ color: "#6b8e23", fontSize: 22 }}>●</span>
              <span style={{ fontWeight: 600, fontSize: 16 }}>신한투자증권 앱을 통해 충전한 금액을 송금해주세요.</span>
            </div>
            <div style={{ color: "#888", fontSize: 13, marginBottom: 18 }}>* 본인 명의 계좌에서만 이체가 인정됩니다.</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#f6fff0", borderRadius: 8, padding: "16px 20px", marginBottom: 18, width: 320 }}>
              <span style={{ fontSize: 28, color: "#4b5e2e", fontWeight: 700 }}>{ACCOUNTS[selectedAccount].icon}</span>
              <span style={{ fontWeight: 600, fontSize: 17 }}>{ACCOUNTS[selectedAccount].bank}</span>
              <span style={{ flex: 1 }} />
              <span style={{ fontWeight: 700, fontSize: 17 }}>{ACCOUNTS[selectedAccount].account}</span>
              <button onClick={handleCopy} style={{ background: "#b2c7a7", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontWeight: 600, fontSize: 15, marginLeft: 10, cursor: "pointer" }}>복사하기</button>
            </div>
            {copied && <div style={{ color: "#4b5e2e", fontWeight: 600, marginBottom: 10 }}>계좌번호가 복사되었습니다!</div>}
            <button onClick={closeAll} style={{ background: "#b2c7a7", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", width: 220, fontWeight: 700, fontSize: 18, marginTop: 10, cursor: "pointer" }}>확인 완료</button>
          </div>
        </div>
      )}
    </div>
  );
} 