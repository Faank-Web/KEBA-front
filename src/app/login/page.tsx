import React from "react";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 380, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#4b5e2e", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>로그인</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>휴대폰 번호</label>
          <input type="tel" placeholder="010-1234-5678" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }} />
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }} />
        </div>
        <button type="submit" style={{ background: "#4b5e2e", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 8, letterSpacing: 1 }}>
          로그인
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <span style={{ color: "#6b8e23", fontSize: 15 }}>비밀번호를 잊으셨나요?</span>
      </div>
    </div>
  );
} 