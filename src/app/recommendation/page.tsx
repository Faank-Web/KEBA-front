"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RecommendationPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로그인 상태 확인 (실제로는 서버에서 확인해야 함)
    const checkLoginStatus = () => {
      // 임시 로그인 체크 - 실제로는 토큰이나 세션 확인
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        alert("로그인이 필요한 서비스입니다.");
        router.push("/login");
        return;
      }
      setIsLoggedIn(true);
      setLoading(false);
    };

    checkLoginStatus();
  }, [router]);

  if (loading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        fontSize: 18,
        color: "#666"
      }}>
        로딩 중...
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // 로그인 페이지로 리다이렉트됨
  }

  return (
    <>
      {/* 메인 컨텐츠 */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>
          AI 추천시스템
        </h1>

        {/* 추천시스템 소개 */}
        <div style={{ background: "#f8f8f8", borderRadius: 12, padding: 40, marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#6b8e23" }}>
            개인화 투자 추천
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#666", marginBottom: 20 }}>
            AI가 분석한 데이터를 기반으로 개인에게 최적화된 투자 상품을 추천해드립니다.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8, flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>🎯 맞춤형 분석</div>
              <div style={{ fontSize: 14, color: "#666" }}>투자 성향과 선호도를 분석하여 최적의 상품 추천</div>
            </div>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8, flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>📊 실시간 데이터</div>
              <div style={{ fontSize: 14, color: "#666" }}>최신 시장 데이터를 반영한 실시간 추천</div>
            </div>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8, flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>🔒 안전한 투자</div>
              <div style={{ fontSize: 14, color: "#666" }}>리스크 관리가 포함된 안전한 투자 전략</div>
            </div>
          </div>
        </div>

        {/* 추천 시스템 준비 중 */}
        <div style={{ 
          background: "#fff3cd", 
          border: "1px solid #ffeaa7", 
          borderRadius: 12, 
          padding: 40, 
          textAlign: "center",
          marginBottom: 40
        }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🤖</div>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#856404" }}>
            AI 추천시스템 준비 중
          </h3>
          <p style={{ fontSize: 16, color: "#856404", lineHeight: 1.6 }}>
            더 정확하고 개인화된 투자 추천을 위해 AI 시스템을 개발하고 있습니다.<br />
            곧 만나보실 수 있습니다!
          </p>
        </div>

        {/* 임시 기능들 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#6b8e23" }}>투자 성향 분석</h3>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
              투자 경험과 선호도를 바탕으로 개인 투자 성향을 분석합니다.
            </p>
            <button 
              style={{ 
                background: "#6b8e23", 
                color: "#fff", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: 6, 
                fontSize: 14, 
                fontWeight: 600,
                cursor: "pointer"
              }}
              onClick={() => alert("준비 중인 기능입니다.")}
            >
              분석 시작하기
            </button>
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#6b8e23" }}>포트폴리오 추천</h3>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
              현재 투자 현황을 바탕으로 최적의 포트폴리오를 추천합니다.
            </p>
            <button 
              style={{ 
                background: "#6b8e23", 
                color: "#fff", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: 6, 
                fontSize: 14, 
                fontWeight: 600,
                cursor: "pointer"
              }}
              onClick={() => alert("준비 중인 기능입니다.")}
            >
              추천 받기
            </button>
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#6b8e23" }}>시장 트렌드</h3>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
              최신 시장 동향과 투자 기회를 AI가 분석하여 제공합니다.
            </p>
            <button 
              style={{ 
                background: "#6b8e23", 
                color: "#fff", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: 6, 
                fontSize: 14, 
                fontWeight: 600,
                cursor: "pointer"
              }}
              onClick={() => alert("준비 중인 기능입니다.")}
            >
              트렌드 보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 