"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState("latest");
  
  // 로그인 상태 (localStorage에서 가져오기)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorage에서 로그인 상태 확인
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleInvestmentClick = () => {
    if (!isLoggedIn) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      window.location.href = "/login";
      return;
    }
    // 로그인한 경우 투자 상세 페이지로 이동
    window.location.href = "/products/detail";
  };

  const handleMoreClick = () => {
    // 더보기 버튼 클릭 시 추가 상품을 로드하거나 페이지를 이동
    alert("더 많은 상품을 불러오는 중입니다...");
  };

  const handleFaankClick = () => {
    // 투자정보 알아보기 버튼 클릭 시
    alert("FAANK 투자정보 페이지로 이동합니다.");
    // 실제로는 투자정보 페이지로 이동
    // window.location.href = "/investment-info";
  };

  return (
    <div className="main-container" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 24px", color: "#111", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px #e0e0e0" }}>
      {/* 카테고리 타이틀 및 정렬 옵션 */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", margin: "32px 0 16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, fontWeight: 700, color: "#111" }}>
          <span style={{ color: "#6b8e23", fontSize: 28 }}>✔</span>
          농수산물 투자 상품
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16, color: "#666", fontWeight: 500 }}>정렬:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            style={{ 
              padding: "8px 12px", 
              borderRadius: 6, 
              border: "1px solid #e0e0e0", 
              fontSize: 16, 
              color: "#111", 
              background: "#fff",
              cursor: "pointer"
            }}
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="achievement">투자달성순</option>
          </select>
        </div>
      </div>
      
      {/* 상품 카드 리스트 (피그마 스타일) */}
      <div className="product-card-list" style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
        {/* 첫번째 카드 - 강조 */}
        <Link href="/products/detail" style={{ flex: 1, textDecoration: "none" }}>
          <div style={{ background: "#e6f4d7", borderRadius: 16, boxShadow: "0 2px 8px #b2c7a7", padding: 32, display: "flex", flexDirection: "column", gap: 16, minWidth: 260, position: "relative", cursor: "pointer" }}>
            <div style={{ position: "absolute", top: 20, left: 20, background: "#fff7e6", color: "#ff6600", borderRadius: 8, padding: "4px 12px", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 18 }}>🔥</span> 실시간 인기 투자 상품
            </div>
            <div style={{ fontWeight: 700, fontSize: 22, marginTop: 36 }}>전략형 투자 상품</div>
            <div style={{ color: "#888", fontSize: 15 }}>○○○농장</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "12px 0" }}>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#111" }}>20,000만원+</div>
              <div style={{ color: "#bdbdbd", fontSize: 15 }}>|</div>
              <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 15 }}>2025.07.14</div>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleInvestmentClick();
              }}
              style={{ 
                background: isLoggedIn ? "#b2c7a7" : "#ff6b6b", 
                color: "#fff", 
                border: "none", 
                borderRadius: 6, 
                padding: "10px 0", 
                fontWeight: 700, 
                fontSize: 16, 
                marginTop: 8,
                cursor: "pointer"
              }}
            >
              {isLoggedIn ? "투자하기" : "로그인 후 투자하기"}
            </button>
          </div>
        </Link>
        {/* 두번째/세번째 카드 - 마감 */}
        <Link href="/products/detail" style={{ flex: 1, textDecoration: "none" }}>
          <div style={{ background: "#ededed", borderRadius: 16, boxShadow: "0 2px 8px #e0e0e0", padding: 32, display: "flex", flexDirection: "column", gap: 16, minWidth: 260, alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 28, color: "#111", cursor: "pointer" }}>
            231% 투자 달성
            <div style={{ color: "#aaa", fontSize: 18, fontWeight: 500, marginTop: 12 }}>마감</div>
          </div>
        </Link>
        <Link href="/products/detail" style={{ flex: 1, textDecoration: "none" }}>
          <div style={{ background: "#ededed", borderRadius: 16, boxShadow: "0 2px 8px #e0e0e0", padding: 32, display: "flex", flexDirection: "column", gap: 16, minWidth: 260, alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 28, color: "#111", cursor: "pointer" }}>
            231% 투자 달성
            <div style={{ color: "#aaa", fontSize: 18, fontWeight: 500, marginTop: 12 }}>마감</div>
          </div>
        </Link>
      </div>
      {/* +더보기 버튼 */}
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 0 0" }}>
        <button 
          onClick={handleMoreClick}
          style={{ 
            background: "#fff", 
            border: "1.5px solid #b2c7a7", 
            borderRadius: 8, 
            padding: "12px 0", 
            width: 420, 
            fontWeight: 600, 
            fontSize: 18, 
            color: "#111",
            cursor: "pointer"
          }}
        >
          +더보기
        </button>
      </div>
      {/* 하단 FAANK 버튼 */}
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 40px 0" }}>
        <button 
          onClick={handleFaankClick}
          style={{ 
            background: "#e6f4d7", 
            color: "#6b8e23", 
            border: "none", 
            borderRadius: 8, 
            padding: "18px 0", 
            width: 420, 
            fontWeight: 700, 
            fontSize: 22, 
            letterSpacing: 1,
            cursor: "pointer"
          }}
        >
          Faank<br />
          <span style={{ fontSize: 15, fontWeight: 500, color: "#888" }}>투자정보 알아보기</span>
        </button>
      </div>
    </div>
  );
} 