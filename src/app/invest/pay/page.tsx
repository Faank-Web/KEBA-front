import React from "react";

export default function InvestPayPage() {
  return (
    <div style={{ maxWidth: 420, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#4b5e2e", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>투자 결제</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>결제 금액</label>
          <input type="number" placeholder="금액 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }} />
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>결제 수단</label>
          <select style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }}>
            <option>가상계좌</option>
            <option>카드결제</option>
          </select>
        </div>
        <button type="submit" style={{ background: "#4b5e2e", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 8, letterSpacing: 1 }}>
          결제하기
        </button>
      </form>
      {/* 결제 결과 안내 샘플 */}
      <div style={{ marginTop: 32, background: "#e6f4d7", borderRadius: 8, padding: 20, textAlign: "center", color: "#4b5e2e", fontWeight: 600, fontSize: 16, boxShadow: "0 1px 4px #e0e0e0" }}>
        결제가 완료되었습니다!<br />마이페이지에서 내역을 확인하세요.
      </div>
    </div>
  );
} 