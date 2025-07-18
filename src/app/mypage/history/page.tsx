"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

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

export default function MyHistoryPage() {
  const [investList, setInvestList] = useState(INIT_INVEST_LIST);
  const [checked, setChecked] = useState<number[]>([]);
  const [showStatusHelp, setShowStatusHelp] = useState(false);
  const [sortType, setSortType] = useState<'recent' | 'name' | 'status'>('recent');
  const helpRef = useRef<HTMLDivElement>(null);

  // 정렬 함수
  const getSortedList = () => {
    let sorted = [...investList];
    if (sortType === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'status') {
      sorted.sort((a, b) => a.status.localeCompare(b.status));
    } // 'recent'은 원래 순서 유지
    return sorted;
  };

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
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: "#111" }}>{item.title}</div>
                <div style={{ color: "#888", fontSize: 15 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>총 {investList.length}건</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <div />
        <select
          value={sortType}
          onChange={e => setSortType(e.target.value as any)}
          style={{ color: "#888", fontSize: 15, border: "1px solid #e0e0e0", borderRadius: 6, padding: "4px 12px", background: "#fff", cursor: "pointer" }}
        >
          <option value="recent">최근 거래순</option>
          <option value="name">이름순</option>
          <option value="status">상태순</option>
        </select>
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
          {getSortedList().map((item) => (
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
  );
} 