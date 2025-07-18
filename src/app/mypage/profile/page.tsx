"use client";
import React from "react";

export default function MyProfilePage() {
  return (
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
  );
} 