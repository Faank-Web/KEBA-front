import React from "react";

export default function NotFoundPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <h1 style={{ fontSize: 48, fontWeight: 700, color: "#4b5e2e", marginBottom: 16 }}>404</h1>
      <div style={{ fontSize: 22, color: "#666", marginBottom: 8 }}>페이지를 찾을 수 없습니다.</div>
      <div style={{ color: "#aaa", fontSize: 16 }}>요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</div>
    </div>
  );
} 