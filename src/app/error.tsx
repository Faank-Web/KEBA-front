"use client";
import React from "react";

export default function ErrorPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <div style={{ fontSize: 80, fontWeight: 900, color: "#111", marginBottom: 16 }}>500</div>
      <div style={{ fontSize: 28, color: "#111", marginBottom: 8 }}>Server Error</div>
    </div>
  );
} 