"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const router = useRouter();
  const handleInvestClick = () => {
    router.push("/invest/apply");
  };
  return (
    <div style={{ maxWidth: 1200, margin: "40px auto", padding: "0 24px", color: "#111", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px #e0e0e0" }}>
      {/* 상단 타이틀 및 네비 (제거됨) */}
      <div style={{ display: "flex", gap: 32, marginTop: 24 }}>
        {/* 좌측 상품 정보 카드 */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* 상품 정보 + 생산자 정보 */}
          <div style={{ background: "linear-gradient(90deg, #222 60%, #eee 100%)", borderRadius: 16, color: "#fff", padding: 32, minHeight: 160, marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 16 }}>상품 정보</div>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>전략형 투자 상품</div>
            <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 16 }}>생산자 정보</div>
            <div style={{ fontSize: 15, color: "#e0e0e0" }}>○○○농장<br/>○○○ 농장주<br/>상세 단골</div>
          </div>
          {/* 예상 수익 전망 */}
          <div style={{ display: "flex", gap: 20, marginTop: 0 }}>
            {/* 경매 실적 */}
            <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 24, boxShadow: "0 2px 8px #e0e0e0" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>경매 실적</div>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>9,999만원</div>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최근 평균보다 10% 비싸게 판매</div>
              <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 투자자 전용 경매 실적</div>
              <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000만원</div>
            </div>
            {/* 목표 수익 */}
            <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 24, boxShadow: "0 2px 8px #e0e0e0" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>목표 수익</div>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>000~00만원</div>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최대 0%~00% 수익 목표</div>
              <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 목표 수익 시뮬레이터</div>
              <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000~00만원</div>
            </div>
            {/* 실시간 타이머/투자 */}
            <div style={{ flex: 1.2, background: "#f6fff0", borderRadius: 14, padding: 24, boxShadow: "0 2px 8px #e0e0e0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#ff2222", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>실시간 타이머</div>
              <div style={{ color: "#222", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>마감까지 7일 00:00:00</div>
              <div style={{ width: "100%", margin: "8px 0" }}>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>70%</div>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 10, width: "100%", marginBottom: 8 }}>
                  <div style={{ background: "#b2c7a7", width: "70%", height: 10, borderRadius: 6 }}></div>
                </div>
              </div>
              <button onClick={handleInvestClick} style={{ background: "#b2c7a7", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, width: "100%", margin: "8px 0", cursor: "pointer" }}>투자하기</button>
              <select style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #b2c7a7", fontSize: 15, color: "#111", marginTop: 8 }}>
                <option>투자 상세내역 · 증권 신고서</option>
                <option>투자자 유의사항</option>
              </select>
              <div style={{ marginTop: 16, width: "100%" }}>
                <button style={{ background: "#e6f4d7", color: "#6b8e23", border: "none", borderRadius: 8, padding: "14px 0", width: "100%", fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>Faank<br /><span style={{ fontSize: 14, fontWeight: 500, color: "#888" }}>투자정보 알아보기</span></button>
              </div>
            </div>
          </div>
        </div>
        {/* 우측 상품 정보 표 */}
        <div style={{ flex: 1.2, background: "#fafafa", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px #e0e0e0", minWidth: 320, maxWidth: 360, alignSelf: "flex-start" }}>
          <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 18, color: "#111" }}>상품 정보</div>
          <table style={{ width: "100%", fontSize: 15, color: "#111", borderCollapse: "collapse" }}>
            <tbody>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>모집기간</td><td style={{ padding: "7px 0", textAlign: "right" }}>25.07.00(월) ~ 25.07.00(월)</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>1C 금액</td><td style={{ padding: "7px 0", textAlign: "right" }}>00,000원</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>전체수량</td><td style={{ padding: "7px 0", textAlign: "right" }}>00,000C</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>모집총액</td><td style={{ padding: "7px 0", textAlign: "right" }}>000,000,000원</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>거래 금융기관</td><td style={{ padding: "7px 0", textAlign: "right" }}>신한투자증권<br/>NH농협은행</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>모집방법</td><td style={{ padding: "7px 0", textAlign: "right" }}>일반(배정, 균등, 추첨)</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>관리구조</td><td style={{ padding: "7px 0", textAlign: "right" }}>공유지분권</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>수익구조</td><td style={{ padding: "7px 0", textAlign: "right" }}>지배 및 경매</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>납입기일</td><td style={{ padding: "7px 0", textAlign: "right" }}>25.00.00(목)</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>청약초과일</td><td style={{ padding: "7px 0", textAlign: "right" }}>25.00.00(목)</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>배정공고일</td><td style={{ padding: "7px 0", textAlign: "right" }}>25.00.00(목)</td></tr>
              <tr><td style={{ padding: "7px 0", color: "#888" }}>배정기준일</td><td style={{ padding: "7px 0", textAlign: "right" }}>25.00.00(목)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 안내문구 */}
      <div style={{ fontSize: 13, color: "#888", margin: "32px 0 0 0", textAlign: "left" }}>
        ※ 본 상품은 투자자 보호장치가 적용된 KDS의 STO 상품입니다. 투자 전 상품설명서, 증권신고서, 투자자 유의사항을 반드시 확인하시기 바랍니다.
      </div>
    </div>
  );
} 