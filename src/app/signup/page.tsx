import React from "react";

export default function SignupPage() {
  return (
    <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>회원가입</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>휴대폰 번호</label>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <input type="tel" placeholder="010-1234-5678" style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, color: "#111" }} />
            <button type="button" style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "0 16px", fontWeight: 600, fontSize: 15, height: 40 }}>PASS 인증</button>
          </div>
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>실명</label>
          <input type="text" placeholder="이름 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4, color: "#111" }} />
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4, color: "#111" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" id="terms" style={{ width: 18, height: 18 }} />
          <label htmlFor="terms" style={{ color: "#111", fontSize: 15 }}>
            이용약관 및 개인정보처리방침 동의
          </label>
        </div>
        <button type="submit" style={{ background: "#4b5e2e", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 8, letterSpacing: 1 }}>
          회원가입 완료
        </button>
      </form>
    </div>
  );
} 