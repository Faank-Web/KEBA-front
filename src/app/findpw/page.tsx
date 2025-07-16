import React from "react";

export default function FindPwPage() {
  return (
    <div style={{ maxWidth: 420, margin: "40px auto", background: "#e6f4d7", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#4b5e2e", marginBottom: 24, textAlign: "center" }}>비밀번호 찾기</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>이메일 또는 휴대폰 번호</label>
          <input type="text" placeholder="이메일 또는 휴대폰 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }} />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input type="text" placeholder="인증코드 입력" style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16 }} />
          <button type="button" style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "0 16px", fontWeight: 600, fontSize: 15, height: 40 }}>인증코드 발송</button>
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#333" }}>새 비밀번호</label>
          <input type="password" placeholder="새 비밀번호 입력" style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4 }} />
        </div>
        <button type="submit" style={{ background: "#4b5e2e", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 8 }}>
          비밀번호 재설정
        </button>
      </form>
    </div>
  );
} 