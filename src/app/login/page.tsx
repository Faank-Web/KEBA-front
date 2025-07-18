"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handlePhoneNumberSubmit = () => {
    if (phoneNumber.length >= 12) {
      setShowPasswordModal(true);
      setError("");
    } else {
      setError("휴대폰 번호를 입력해주세요.");
    }
  };

  const handlePasswordSubmit = () => {
    // 테스트용 로그인 정보 (6자리로 변경)
    const testPhoneNumber = "010-1234-5678";
    const testPassword = "123456";
    
    if (phoneNumber === testPhoneNumber && password === testPassword) {
      // 로그인 성공 - 실제로는 서버에서 인증 후 토큰을 저장
      localStorage.setItem("isLoggedIn", "true");
      alert("로그인 성공!");
      router.push("/");
    } else {
      setError("비밀번호가 올바르지 않습니다.");
      setPassword("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
    setPassword(value);
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setError("");
  };

  return (
    <div style={{ maxWidth: 380, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>로그인</h2>
      
      {/* 테스트 정보 안내 */}
      <div style={{ background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: 6, padding: 12, marginBottom: 20, fontSize: 14, color: "#666" }}>
        <strong>테스트용 로그인 정보:</strong><br />
        휴대폰 번호: 010-1234-5678<br />
        비밀번호: 123456
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, color: "#111" }}>휴대폰 번호</label>
          <input 
            type="tel" 
            placeholder="휴대폰 번호를 입력해주세요" 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={13}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 16, marginTop: 4, color: "#111" }} 
          />
        </div>
        
        {error && (
          <div style={{ color: "#dc3545", fontSize: 14, textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <button 
          onClick={handlePhoneNumberSubmit}
          style={{ 
            background: phoneNumber.length >= 12 ? "#4b5e2e" : "#ccc", 
            color: "#fff", 
            border: "none", 
            borderRadius: 6, 
            padding: "12px 0", 
            fontWeight: 700, 
            fontSize: 17, 
            marginTop: 8, 
            letterSpacing: 1,
            cursor: phoneNumber.length >= 12 ? "pointer" : "not-allowed"
          }}
        >
          다음
        </button>
      </div>
      
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <span style={{ color: "#111", fontSize: 15 }}>비밀번호를 잊으셨나요?</span>
      </div>

      {/* 비밀번호 입력 모달 */}
      {showPasswordModal && (
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
        }} onClick={closePasswordModal}>
          <div style={{
            background: "#fff",
            borderRadius: 12,
            padding: 12,
            width: "92%",
            maxWidth: 300,
            maxHeight: 320,
            overflow: "auto"
          }} onClick={(e) => e.stopPropagation()}>
            {/* 모달 헤더 */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>비밀번호 6자리 등록</span>
              <button
                onClick={closePasswordModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 18,
                  color: "#ccc",
                  cursor: "pointer",
                  padding: 2
                }}
              >
                ×
              </button>
            </div>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              {/* 비밀번호 입력 상태 표시 */}
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 8 }}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      border: password.length === num - 1 ? "2px solid #e74c3c" : "2px solid #ddd",
                      background: password.length >= num ? "#6b8e23" : "transparent"
                    }}
                  />
                ))}
              </div>
              {/* 비밀번호 입력 필드 */}
              <div style={{
                width: "100%",
                padding: 6,
                borderRadius: 6,
                border: "2px solid #e74c3c",
                fontSize: 13,
                textAlign: "center",
                letterSpacing: "3px",
                marginBottom: 6,
                background: "#f8f8f8",
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {password.split('').map((char, index) => (
                  <span key={index} style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>●</span>
                ))}
                {password.length < 6 && (
                  <span style={{ 
                    width: "2px", 
                    height: "12px", 
                    background: "#e74c3c", 
                    animation: "blink 1s infinite",
                    marginLeft: "1px"
                  }} />
                )}
              </div>
            </div>
            {/* 숫자 키패드 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, marginBottom: 8 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    if (password.length < 6) {
                      setPassword(prev => prev + num.toString());
                    }
                  }}
                  style={{
                    width: "100%",
                    height: 32,
                    border: "1px solid #ddd",
                    borderRadius: 6,
                    background: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#111",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => {
                  if (password.length < 6) {
                    setPassword(prev => prev + "0");
                  }
                }}
                style={{
                  width: "100%",
                  height: 32,
                  border: "1px solid #ddd",
                  borderRadius: 6,
                  background: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#111",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
              >
                0
              </button>
              <button
                onClick={() => {
                  if (password.length > 0) {
                    setPassword(prev => prev.slice(0, -1));
                  }
                }}
                style={{
                  width: "100%",
                  height: 32,
                  border: "1px solid #ddd",
                  borderRadius: 6,
                  background: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#111",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
              >
                ←
              </button>
            </div>
            <button 
              onClick={handlePasswordSubmit}
              style={{ 
                width: "100%",
                background: password.length === 6 ? "#6b8e23" : "#ccc", 
                color: "#fff", 
                border: "none", 
                borderRadius: 6, 
                padding: "7px 0", 
                fontWeight: 600, 
                fontSize: 13,
                cursor: password.length === 6 ? "pointer" : "not-allowed"
              }}
            >
              로그인
            </button>
            <style jsx>{`
              @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
} 