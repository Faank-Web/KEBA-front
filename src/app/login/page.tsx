"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 테스트용 로그인 정보
    const testPhoneNumber = "010-1234-5678";
    const testPassword = "1234";
    
    if (phoneNumber === testPhoneNumber && password === testPassword) {
      // 로그인 성공 - 실제로는 서버에서 인증 후 토큰을 저장
      localStorage.setItem("isLoggedIn", "true");
      alert("로그인 성공!");
      router.push("/products");
    } else {
      setError("휴대폰 번호 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div style={{ maxWidth: 380, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>로그인</h2>
      
      {/* 테스트 정보 안내 */}
      <div style={{ background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: 6, padding: 12, marginBottom: 20, fontSize: 14, color: "#666" }}>
        <strong>테스트용 로그인 정보:</strong><br />
        휴대폰 번호: 010-1234-5678<br />
        비밀번호: 1234
      </div>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>휴대폰 번호</label>
          <input 
            type="tel" 
            placeholder="010-1234-5678" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        
        {error && (
          <div style={{ color: "#dc3545", fontSize: 14, textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <button type="submit" style={{ background: "#4b5e2e", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, marginTop: 8, letterSpacing: 1 }}>
          로그인
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <span style={{ color: "#111", fontSize: 15 }}>비밀번호를 잊으셨나요?</span>
      </div>
    </div>
  );
} 