"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleInvestClick = () => {
    router.push("/invest/apply");
  };

  const handleModalOpen = (type: string) => {
    setModalTitle(type);
    if (type === "투자 상세내역 · 증권 신고서") {
      setModalContent(`
        <h3 style={{ color: '#6b8e23', marginBottom: '16px' }}>투자 상세내역</h3>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#111', marginBottom: '8px' }}>투자 개요</h4>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
            본 상품은 농수산물 특산물 STO(증권형 토큰) 투자 상품으로, 
            투자자들이 농수산물 생산 및 유통 과정에 참여하여 수익을 창출하는 구조입니다.
          </p>
          <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>투자 대상: 전략형 농수산물 생산 및 유통</li>
            <li>투자 기간: 12개월</li>
            <li>예상 수익률: 8-15%</li>
            <li>최소 투자 금액: 100만원</li>
          </ul>
        </div>
        
        <h3 style={{ color: '#6b8e23', marginBottom: '16px' }}>증권 신고서</h3>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#111', marginBottom: '8px' }}>주요 내용</h4>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
            본 증권신고서는 농수산물 STO 상품의 투자 위험과 수익 가능성을 
            투명하게 공시하기 위해 작성되었습니다.
          </p>
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px', marginBottom: '12px' }}>
            <strong style={{ color: '#111' }}>신고서 번호:</strong> STO-2024-001<br/>
            <strong style={{ color: '#111' }}>신고일자:</strong> 2024년 12월 15일<br/>
            <strong style={{ color: '#111' }}>발행인:</strong> 농수산물 STO 플랫폼<br/>
            <strong style={{ color: '#111' }}>주관사:</strong> 신한투자증권
          </div>
        </div>
      `);
    } else if (type === "투자자 유의사항") {
      setModalContent(`
        <h3 style={{ color: '#6b8e23', marginBottom: '16px' }}>투자자 유의사항</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#111', marginBottom: '8px' }}>투자 위험 고지</h4>
          <div style={{ background: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '6px', padding: '12px', marginBottom: '12px' }}>
            <strong style={{ color: '#856404' }}>⚠️ 주의사항</strong>
            <p style={{ color: '#856404', margin: '8px 0 0 0', fontSize: '14px' }}>
              본 상품은 원금 손실 가능성이 있는 투자 상품입니다.
            </p>
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#111', marginBottom: '8px' }}>주요 위험 요소</h4>
          <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li><strong>시장 위험:</strong> 농수산물 가격 변동에 따른 수익 변동</li>
            <li><strong>생산 위험:</strong> 기후, 질병 등으로 인한 생산량 감소</li>
            <li><strong>유통 위험:</strong> 수요 변화, 경쟁 심화로 인한 판매 부진</li>
            <li><strong>환율 위험:</strong> 수출입 시 환율 변동에 따른 영향</li>
            <li><strong>정책 위험:</strong> 농업 정책 변화에 따른 영향</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#111', marginBottom: '8px' }}>투자 적격성</h4>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
            본 상품은 다음과 같은 투자자를 대상으로 합니다:
          </p>
          <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>투자 원금 손실을 감수할 수 있는 투자자</li>
            <li>농수산물 산업에 대한 이해가 있는 투자자</li>
            <li>장기 투자 관점을 가진 투자자</li>
            <li>투자 위험을 충분히 인지한 투자자</li>
          </ul>
        </div>
        
        <div style={{ background: '#e6f4d7', border: '1px solid #b2c7a7', borderRadius: '6px', padding: '12px' }}>
          <strong style={{ color: '#6b8e23' }}>투자 전 필수 확인사항</strong>
          <p style={{ color: '#6b8e23', margin: '8px 0 0 0', fontSize: '14px' }}>
            투자 결정 전 상품설명서, 증권신고서, 투자자 유의사항을 
            반드시 확인하시기 바랍니다.
          </p>
        </div>
      `);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
    setModalTitle("");
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
              
              {/* 목표 수익 그래프 */}
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, color: "#666" }}>목표 달성률</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#6b8e23" }}>75%</span>
                </div>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 12, width: "100%", marginBottom: 8, position: "relative" }}>
                  <div style={{ background: "linear-gradient(90deg, #b2c7a7, #6b8e23)", width: "75%", height: 12, borderRadius: 6 }}></div>
                  <div style={{ position: "absolute", left: "75%", top: -2, width: 0, height: 0, borderLeft: "6px solid #6b8e23", borderTop: "8px solid transparent", borderBottom: "8px solid transparent" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666" }}>
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
              
              {/* 수익률 그래프 */}
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, color: "#666" }}>예상 수익률</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#6b8e23" }}>12.5%</span>
                </div>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 12, width: "100%", marginBottom: 8, position: "relative" }}>
                  <div style={{ background: "linear-gradient(90deg, #ffd700, #ffa500)", width: "62.5%", height: 12, borderRadius: 6 }}></div>
                  <div style={{ position: "absolute", left: "62.5%", top: -2, width: 0, height: 0, borderLeft: "6px solid #ffa500", borderTop: "8px solid transparent", borderBottom: "8px solid transparent" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666" }}>
                  <span>0%</span>
                  <span>10%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
            {/* 실시간 타이머/투자 */}
            <div style={{ flex: 1.2, background: "#f6fff0", borderRadius: 14, padding: 24, boxShadow: "0 2px 8px #e0e0e0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#222", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>마감까지 7일 00:00:00</div>
              <div style={{ width: "100%", margin: "8px 0" }}>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>70%</div>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 10, width: "100%", marginBottom: 8 }}>
                  <div style={{ background: "#b2c7a7", width: "70%", height: 10, borderRadius: 6 }}></div>
                </div>
              </div>
              <button onClick={handleInvestClick} style={{ background: "#b2c7a7", color: "#fff", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 700, fontSize: 17, width: "100%", margin: "8px 0", cursor: "pointer" }}>투자하기</button>
              
              {/* 클릭 가능한 버튼들로 변경 */}
              <div style={{ width: "100%", marginTop: 8 }}>
                <button 
                  onClick={() => handleModalOpen("투자 상세내역 · 증권 신고서")}
                  style={{ 
                    width: "100%", 
                    padding: "8px 12px", 
                    borderRadius: 6, 
                    border: "1px solid #b2c7a7", 
                    fontSize: 15, 
                    color: "#111", 
                    background: "#fff",
                    cursor: "pointer",
                    marginBottom: "8px"
                  }}
                >
                  투자 상세내역 · 증권 신고서
                </button>
                <button 
                  onClick={() => handleModalOpen("투자자 유의사항")}
                  style={{ 
                    width: "100%", 
                    padding: "8px 12px", 
                    borderRadius: 6, 
                    border: "1px solid #b2c7a7", 
                    fontSize: 15, 
                    color: "#111", 
                    background: "#fff",
                    cursor: "pointer"
                  }}
                >
                  투자자 유의사항
                </button>
              </div>
              
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

      {/* 모달 */}
      {showModal && (
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
        }} onClick={closeModal}>
          <div style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            width: "90%",
            maxWidth: 600,
            maxHeight: "80vh",
            overflow: "auto"
          }} onClick={(e) => e.stopPropagation()}>
            {/* 모달 헤더 */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, borderBottom: "1px solid #e0e0e0", paddingBottom: 16 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", margin: 0 }}>{modalTitle}</h2>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 24,
                  color: "#ccc",
                  cursor: "pointer",
                  padding: 4
                }}
              >
                ×
              </button>
            </div>
            {/* 모달 내용 */}
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
} 