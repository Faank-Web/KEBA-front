"use client";
import React from "react";

export default function MyInquiryPage() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 18 }}>문의 내역</div>
      <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e0e0", padding: 32, fontSize: 17, color: "#888" }}>
        문의 내역이 없습니다.
      </div>
    </div>
  );
} 