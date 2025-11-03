import React from "react";

export default function WorkDebug() {
  console.log("[WorkDebug] mounted");
  return (
    <section
      id="work-debug"
      style={{
        border: "8px solid #ff00aa",
        background: "rgba(255,0,170,0.08)",
        padding: 24,
        margin: "48px auto",
        maxWidth: 860,
        minHeight: 240,
        position: "relative",
        zIndex: 99999
      }}
    >
      <h2 style={{margin:0, marginBottom:12, fontFamily:"Instrument Sans, system-ui, sans-serif"}}>
        WORK DEBUG BLOCK
      </h2>
      <p style={{marginTop:0, fontFamily:"Instrument Sans, system-ui, sans-serif"}}>
        If you can see this hot-pink box, App.jsx wiring is correct.
      </p>
    </section>
  );
}
