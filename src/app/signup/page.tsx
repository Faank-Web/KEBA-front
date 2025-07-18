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
  const [step, setStep] = useState(1); // 1: 휴대폰번호, 2: PASS인증, 3: 비밀번호설정, 4: 비밀번호확인, 5: 완료
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleNextStep = () => {
    if (step === 1 && phoneNumber.length >= 12) {
      setStep(2);
    } else if (step === 1) {
      alert("휴대폰 번호를 입력해주세요.");
    }
  };

  const handlePassAuth = () => {
    // PASS 인증 시뮬레이션
    setIsAuthenticated(true);
    setUserName("KEBA"); // 실제로는 PASS에서 받아온 이름
    setStep(3);
  };

  const handlePasswordSubmit = () => {
    if (password.length !== 6) {
      alert("비밀번호는 6자리로 입력해주세요.");
      return;
    }
    setStep(4);
  };

  const handlePasswordConfirmSubmit = () => {
    if (passwordConfirm.length !== 6) {
      alert("비밀번호를 6자리로 입력해주세요.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다. 처음 설정한 비밀번호와 동일하게 입력해주세요.");
      setPasswordConfirm("");
      return;
    }
    if (!agreeToTerms) {
      alert("이용약관 및 개인정보처리방침에 동의해주세요.");
      return;
    }
    setStep(5);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
    setPassword(value);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
    setPasswordConfirm(value);
  };

  // 1단계: 휴대폰 번호 입력
  if (step === 1) {
    return (
      <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>회원가입</h2>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 8 }}>핸드폰 번호를 입력해주세요</div>
          <div style={{ fontSize: 14, color: "#666" }}>본인인증을 위해 휴대폰 번호가 필요합니다</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <input 
              type="tel" 
              placeholder="휴대폰 번호를 입력해주세요" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={13}
              style={{ 
                width: "100%", 
                padding: 16, 
                borderRadius: 8, 
                border: "1px solid #ddd", 
                fontSize: 16, 
                color: "#111",
                textAlign: "center"
              }} 
            />
          </div>
          <button 
            onClick={handleNextStep}
            style={{ 
              background: phoneNumber.length >= 12 ? "#6b8e23" : "#ccc", 
              color: "#fff", 
              border: "none", 
              borderRadius: 8, 
              padding: "16px 0", 
              fontWeight: 600, 
              fontSize: 16,
              cursor: phoneNumber.length >= 12 ? "pointer" : "not-allowed"
            }}
          >
            다음
          </button>
        </div>
      </div>
    );
  }

  // 2단계: PASS 실명인증
  if (step === 2) {
    return (
      <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>본인인증</h2>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 8 }}>인증방법을 선택해주세요</div>
          <div style={{ fontSize: 14, color: "#666" }}>안전한 본인인증을 진행해주세요</div>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* PASS 인증 */}
          <div 
            onClick={handlePassAuth}
            style={{
              border: "2px solid #e74c3c",
              borderRadius: 12,
              padding: 20,
              cursor: "pointer",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#f8f8f8"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
          >
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 4 }}>PASS 인증</div>
              <div style={{ fontSize: 14, color: "#666" }}>앱으로 간편하고 안전하게</div>
            </div>
            <div style={{ fontSize: 24 }}>📱</div>
          </div>

          {/* QR코드 인증 */}
          <div style={{
            border: "2px solid #ddd",
            borderRadius: 12,
            padding: 20,
            background: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: 0.6
          }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#666", marginBottom: 4 }}>QR코드 인증</div>
              <div style={{ fontSize: 14, color: "#999" }}>QR코드 스캔으로 간편하게</div>
            </div>
            <div style={{ fontSize: 24 }}>📱</div>
          </div>

          {/* SMS 인증 */}
          <div style={{
            border: "2px solid #ddd",
            borderRadius: 12,
            padding: 20,
            background: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: 0.6
          }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#666", marginBottom: 4 }}>문자(SMS) 인증</div>
              <div style={{ fontSize: 14, color: "#999" }}>SMS 인증번호 본인확인</div>
            </div>
            <div style={{ fontSize: 24 }}>💬</div>
          </div>
        </div>
      </div>
    );
  }

  // 3단계: 비밀번호 설정
  if (step === 3) {
    return (
      <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>비밀번호 6자리 등록</h2>
        
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 16, color: "#666", marginBottom: 16 }}>로그인시 사용할 비밀번호를 입력해주세요</div>
          
          {/* 비밀번호 입력 상태 표시 */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: password.length === num - 1 ? "2px solid #e74c3c" : "2px solid #ddd",
                  background: password.length >= num ? "#6b8e23" : "transparent"
                }}
              />
            ))}
          </div>

          {/* 비밀번호 입력 필드 (숫자만 표시) */}
          <div style={{
            width: "100%",
            padding: 16,
            borderRadius: 8,
            border: "2px solid #e74c3c",
            fontSize: 18,
            textAlign: "center",
            letterSpacing: "8px",
            marginBottom: 16,
            background: "#f8f8f8",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {password.split('').map((char, index) => (
              <span key={index} style={{ fontSize: 24, fontWeight: 700, color: "#111" }}>●</span>
            ))}
            {password.length < 6 && (
              <span style={{ 
                width: "2px", 
                height: "24px", 
                background: "#e74c3c", 
                animation: "blink 1s infinite",
                marginLeft: "4px"
              }} />
            )}
          </div>
        </div>

        {/* 숫자 키패드 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
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
                height: 60,
                border: "1px solid #ddd",
                borderRadius: 8,
                background: "#fff",
                fontSize: 20,
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
              height: 60,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
              fontSize: 20,
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
              height: 60,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
              fontSize: 20,
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
            borderRadius: 8, 
            padding: "16px 0", 
            fontWeight: 600, 
            fontSize: 16,
            cursor: password.length === 6 ? "pointer" : "not-allowed"
          }}
        >
          다음
        </button>

        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // 4단계: 비밀번호 확인
  if (step === 4) {
    return (
      <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>비밀번호 확인</h2>
        
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 16, color: "#666", marginBottom: 16 }}>설정한 비밀번호를 한 번 더 입력해주세요</div>
          
          {/* 비밀번호 확인 입력 상태 표시 */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: passwordConfirm.length === num - 1 ? "2px solid #e74c3c" : "2px solid #ddd",
                  background: passwordConfirm.length >= num ? "#6b8e23" : "transparent"
                }}
              />
            ))}
          </div>

          {/* 비밀번호 확인 입력 필드 */}
          <div style={{
            width: "100%",
            padding: 16,
            borderRadius: 8,
            border: "2px solid #e74c3c",
            fontSize: 18,
            textAlign: "center",
            letterSpacing: "8px",
            marginBottom: 16,
            background: "#f8f8f8",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {passwordConfirm.split('').map((char, index) => (
              <span key={index} style={{ fontSize: 24, fontWeight: 700, color: "#111" }}>●</span>
            ))}
            {passwordConfirm.length < 6 && (
              <span style={{ 
                width: "2px", 
                height: "24px", 
                background: "#e74c3c", 
                animation: "blink 1s infinite",
                marginLeft: "4px"
              }} />
            )}
          </div>
        </div>

        {/* 숫자 키패드 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => {
                if (passwordConfirm.length < 6) {
                  setPasswordConfirm(prev => prev + num.toString());
                }
              }}
              style={{
                width: "100%",
                height: 60,
                border: "1px solid #ddd",
                borderRadius: 8,
                background: "#fff",
                fontSize: 20,
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
              if (passwordConfirm.length < 6) {
                setPasswordConfirm(prev => prev + "0");
              }
            }}
            style={{
              width: "100%",
              height: 60,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
              fontSize: 20,
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
              if (passwordConfirm.length > 0) {
                setPasswordConfirm(prev => prev.slice(0, -1));
              }
            }}
            style={{
              width: "100%",
              height: 60,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
              fontSize: 20,
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

        {/* 약관 동의 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
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

        <button 
          onClick={handlePasswordConfirmSubmit}
          style={{ 
            width: "100%",
            background: passwordConfirm.length === 6 ? "#6b8e23" : "#ccc", 
            color: "#fff", 
            border: "none", 
            borderRadius: 8, 
            padding: "16px 0", 
            fontWeight: 600, 
            fontSize: 16,
            cursor: passwordConfirm.length === 6 ? "pointer" : "not-allowed"
          }}
        >
          회원가입 완료
        </button>

        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // 5단계: 가입 완료
  if (step === 5) {
    return (
      <div style={{ maxWidth: 400, margin: "60px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 40, color: "#111", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 24 }}>🎉</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 16 }}>회원가입 완료!</h2>
        <div style={{ fontSize: 16, color: "#666", marginBottom: 32 }}>
          {userName}님, FAANK에 오신 것을 환영합니다!
        </div>
        <button 
          onClick={() => window.location.href = "/login"}
          style={{ 
            width: "100%",
            background: "#6b8e23", 
            color: "#fff", 
            border: "none", 
            borderRadius: 8, 
            padding: "16px 0", 
            fontWeight: 600, 
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          로그인하기
        </button>
      </div>
    );
  }

  return null;
} 