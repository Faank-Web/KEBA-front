import React from "react";

export default function NotFoundPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <div style={{ fontSize: 80, fontWeight: 900, color: "#111", marginBottom: 16 }}>404</div>
      <div style={{ fontSize: 28, color: "#111", marginBottom: 8 }}>not found</div>
    </div>
  );
} 