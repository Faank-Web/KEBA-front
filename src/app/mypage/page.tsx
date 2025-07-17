"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const MENU = [
  { key: "info", label: "내 정보" },
  { key: "invest", label: "투자 내역" },
  { key: "portfolio", label: "포트폴리오" },
  { key: "inquiry", label: "문의 내역" },
  { key: "account", label: "내 계좌" },
];

const INIT_INVEST_LIST = [
  { id: 1, name: "00000 상품", status: "대기" },
  { id: 2, name: "00000 상품", status: "체결" },
  { id: 3, name: "00000 상품", status: "취소" },
  { id: 4, name: "00000 상품", status: "실패" },
  { id: 5, name: "00000 상품", status: "철회" },
];

const STATUS_HELP = [
  { title: "투자 신청", desc: "투자 신청 후 마감 시간 전까지 추가 투자가 가능합니다." },
  { title: "투자 취소", desc: "투자 취소는 신청 상태일 전체 건에 취소는 가능합니다." },
  { title: "투자 철회", desc: "투자 계약 체결 전 투자 철회는 철회에 해당합니다." },
  { title: "투자 대기", desc: "청약에 투자 기회를 경쟁하게 변환되는 기간이며 일반 변경 방식에 따라 다를 수 있습니다." },
  { title: "투자 실패", desc: "청약 후 투자 실패가 확정된 상태를 실패로 처리합니다." },
  { title: "투자 체결", desc: "투자 신청에 성공하여 투자 체결 수량은 신청한 C 수량과 차이가 발생할 수 있습니다." },
];

export default function MyPage() {
  const [selected, setSelected] = useState("main");
  const [investList, setInvestList] = useState(INIT_INVEST_LIST);
  const [checked, setChecked] = useState<number[]>([]);
  const [showStatusHelp, setShowStatusHelp] = useState(false);
  const helpRef = useRef<HTMLDivElement>(null);

  const handleCheck = (id: number) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };
  const handleCheckAll = () => {
    if (checked.length === investList.length) {
      setChecked([]);
    } else {
      setChecked(investList.map((item) => item.id));
    }
  };
  const handleDelete = () => {
    setInvestList((prev) => prev.filter((item) => !checked.includes(item.id)));
    setChecked([]);
  };
  // 팝업 바깥 클릭 시 닫기
  useEffect(() => {
    if (!showStatusHelp) return;
    const handleClick = (e: MouseEvent) => {
      if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
        setShowStatusHelp(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showStatusHelp]);

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 80px)", background: "#f8f8f8" }}>
      {/* 좌측 연두색 사이드바 */}
      <aside style={{ width: 260, background: "#e6f4d7", padding: "48px 0 0 0", borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: "#222", marginBottom: 32, textAlign: "center" }}>
          안녕하세요<br />
          <span style={{ color: "#4b5e2e", fontSize: 28 }}>KEBA 님</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 18, width: "100%", fontSize: 17, fontWeight: 500, color: "#4b5e2e", paddingLeft: 40 }}>
          {MENU.map((item) => (
            <div
              key={item.key}
              onClick={() => setSelected(item.key)}
              style={{
                color: selected === item.key ? "#222" : "#4b5e2e",
                fontWeight: selected === item.key ? 700 : 500,
                background: selected === item.key ? "#d6eec2" : "none",
                borderRadius: 6,
                padding: "6px 0 6px 12px",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>
      {/* 우측 메인 콘텐츠 */}
      <main style={{ flex: 1, padding: "48px 40px 0 40px", display: "flex", flexDirection: "column", height: "100vh" }}>
        {(selected === "main" || selected === "") && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 예상 수익 전망</div>
            <div style={{ fontWeight: 700, fontSize: 20, color: "#111", marginBottom: 8 }}>전략형 투자 상품 <span style={{ color: "#888", fontWeight: 500, fontSize: 16 }}>.○○○종</span></div>
            <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
              <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>경매 실적</div>
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>9,999만원</div>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최근 평균보다 10% 비싸게 판매</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 투자자 전용 경매 실적</div>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000만원</div>
              </div>
              <div style={{ flex: 1, background: "#f6fff0", borderRadius: 14, padding: 32, boxShadow: "0 2px 8px #e0e0e0" }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#6b8e23" }}>목표 수익</div>
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>000~00만원</div>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>최대 0%~00% 수익 목표</div>
                <div style={{ color: "#b2c7a7", fontWeight: 600, fontSize: 14 }}>Faank 목표 수익 시뮬레이터</div>
                <div style={{ color: "#6b8e23", fontWeight: 700, fontSize: 16, marginTop: 12 }}>0,000~00만원</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>마감까지<br />7일 00 : 00 : 00</div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#6b8e23", fontWeight: 700, fontSize: 17 }}>70%</span>
                <div style={{ background: "#e0e0e0", borderRadius: 6, height: 12, width: "100%", maxWidth: 320, margin: "0 8px" }}>
                  <div style={{ background: "#b2c7a7", width: "70%", height: 12, borderRadius: 6 }}></div>
                </div>
                <span style={{ color: "#b2c7a7", fontWeight: 700, fontSize: 15 }}>9999 투자증</span>
              </div>
              <button style={{ background: "#e6f4d7", color: "#6b8e23", border: "none", borderRadius: 8, padding: "18px 48px", fontWeight: 700, fontSize: 20, marginLeft: 12 }}>지금 투자증 받기</button>
            </div>
          </div>
        )}
        {selected === "info" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 정보</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 18, color: "#222", display: "flex", alignItems: "center", gap: 32 }}>
              <div style={{ fontSize: 48, background: "#e6f4d7", borderRadius: "50%", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#b2c7a7", fontWeight: 700 }}>👤</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 22 }}>KEBA님</div>
                <div style={{ color: "#888", fontSize: 17, marginTop: 4 }}>010 0000 0000</div>
              </div>
              <div style={{ fontSize: 24, color: "#bbb", cursor: "pointer" }}>&gt;</div>
            </div>
            <div style={{ marginTop: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 18, color: "#222", display: "flex", alignItems: "center", gap: 32 }}>
              <span style={{ fontSize: 22, color: "#b2c7a7", marginRight: 12 }}>⭐</span>
              <span style={{ fontWeight: 700, fontSize: 18 }}>내 포인트</span>
              <span style={{ flex: 1 }} />
              <span style={{ fontWeight: 700, fontSize: 20, color: "#4b5e2e" }}>20,000p</span>
            </div>
            <button style={{ marginTop: 18, width: "100%", background: "#f6fff0", border: "none", borderRadius: 8, padding: "14px 0", fontWeight: 600, fontSize: 17, color: "#4b5e2e", cursor: "pointer" }}>내역 상세보기</button>
          </div>
        )}
        {selected === "invest" && (
          <div style={{ width: "100%", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>투자 내역</div>
              <span
                style={{ color: "#bbb", fontSize: 18, marginLeft: 8, marginTop: 2, cursor: "pointer" }}
                onClick={() => setShowStatusHelp((v) => !v)}
              >
                ⓘ
              </span>
              {showStatusHelp && (
                <div
                  ref={helpRef}
                  style={{
                    position: "absolute",
                    left: 120,
                    top: 0,
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow: "0 2px 16px #bbb8",
                    padding: "24px 32px 24px 32px",
                    minWidth: 320,
                    zIndex: 10,
                  }}
                >
                  {STATUS_HELP.map((item) => (
                    <div key={item.title} style={{ marginBottom: 18 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ color: "#888", fontSize: 15 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>총 {investList.length}건</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div />
              <div style={{ color: "#888", fontSize: 15, cursor: "pointer", userSelect: "none" }}>최근 거래순 ▼</div>
            </div>
            <table style={{ width: "100%", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", fontSize: 16, color: "#111", borderCollapse: "collapse", marginBottom: 24 }}>
              <thead>
                <tr style={{ background: "#f6fff0" }}>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0", width: 48 }}>
                    <input type="checkbox" onChange={handleCheckAll} checked={checked.length === investList.length && investList.length > 0} style={{ width: 18, height: 18 }} />
                  </th>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0", textAlign: "left" }}>상품명</th>
                  <th style={{ padding: 14, border: "1px solid #e0e0e0" }}>투자 결과</th>
                </tr>
              </thead>
              <tbody>
                {investList.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: 14, border: "1px solid #e0e0e0", textAlign: "center" }}>
                      <input type="checkbox" checked={checked.includes(item.id)} onChange={() => handleCheck(item.id)} style={{ width: 18, height: 18 }} />
                    </td>
                    <td style={{ padding: 14, border: "1px solid #e0e0e0" }}>
                      <Link href={`/products/${item.id}`} style={{ color: "#222", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>{item.name}</Link>
                    </td>
                    <td style={{ padding: 14, border: "1px solid #e0e0e0", color: item.status === "대기" ? "#aaa" : item.status === "체결" ? "#4b5e2e" : "#bbb", fontWeight: 600, textAlign: "center" }}>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={handleDelete} disabled={checked.length === 0} style={{ background: checked.length === 0 ? "#ededed" : "#b2c7a7", color: checked.length === 0 ? "#bbb" : "#fff", border: "none", borderRadius: 8, padding: "12px 36px", fontWeight: 600, fontSize: 16, cursor: checked.length === 0 ? "not-allowed" : "pointer", transition: "background 0.2s, color 0.2s" }}>투자 취소</button>
            </div>
          </div>
        )}
        {selected === "portfolio" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>포트폴리오</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              포트폴리오 데이터가 없습니다.
            </div>
          </div>
        )}
        {selected === "inquiry" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>문의 내역</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              문의 내역이 없습니다.
            </div>
          </div>
        )}
        {selected === "account" && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>내 계좌</div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
              등록된 계좌가 없습니다.
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 