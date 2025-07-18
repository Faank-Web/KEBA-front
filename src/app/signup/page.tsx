"use client";
import React, { useState } from "react";

// 휴대폰 번호 포맷팅 함수
const formatPhoneNumber = (value: string) => {
  // 숫자만 추출
  const numbers = value.replace(/[^\d]/g, '');
  
  // 길이에 따라 포맷팅
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }
};

export default function SignupPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeToTerms) {
      alert("이용약관 및 개인정보처리방침에 동의해주세요.");
      return;
    }
    
    // 회원가입 로직 (실제로는 서버로 데이터 전송)
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>회원가입</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>휴대폰 번호</label>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <input 
              type="tel" 
              placeholder="010-1234-5678" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={13}
              style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, color: "#111" }} 
            />
            <button type="button" style={{ background: "#6b8e23", color: "#fff", border: "none", borderRadius: 6, padding: "0 16px", fontWeight: 600, fontSize: 15, height: 40 }}>PASS 인증</button>
          </div>
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>실명</label>
          <input 
            type="text" 
            placeholder="이름 입력" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4, color: "#111" }} 
          />
        </div>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>비밀번호</label>
          <input 
            type="password" 
            placeholder="비밀번호 입력" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4, color: "#111" }} 
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input 
            type="checkbox" 
            id="terms" 
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            style={{ width: 18, height: 18 }} 
          />
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