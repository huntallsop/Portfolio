import React from "react";

export default function Work() {
  console.log("[Work] mounted (minimal)");

  return (
    <section
      id="work-section"
      data-testid="work-section"
      style={{
        border: "6px solid #ff0099",
        background: "rgba(255, 0, 153, 0.15)",
        color: "#ff0099",
        fontFamily: "Instrument Sans, system-ui, sans-serif",
        fontWeight: 700,
        padding: "36px",
        margin: "48px auto",
        maxWidth: 640,
        textAlign: "center",
        borderRadius: 16,
        boxShadow: "0 0 32px rgba(255, 0, 153, 0.35)",
      }}
    >
      <div
        style={{
          padding: "24px",
          borderRadius: 12,
          border: "4px dashed #ff66c4",
          background: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <span style={{ fontSize: 24, letterSpacing: 2 }}>
          WORK SIMPLE DEBUG
        </span>
      </div>
    </section>
  );
}
