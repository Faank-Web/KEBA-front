"use client";
import React from "react";

export default function ErrorPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <h1 style={{ fontSize: 48, fontWeight: 700, color: "#4b5e2e", marginBottom: 16 }}>500</h1>
      <div style={{ fontSize: 22, color: "#666", marginBottom: 8 }}>서버 오류가 발생했습니다.</div>
      <div style={{ color: "#aaa", fontSize: 16 }}>잠시 후 다시 시도해 주세요.</div>
    </div>
  );
} 