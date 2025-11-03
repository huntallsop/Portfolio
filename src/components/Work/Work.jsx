import React from "react";
import background from "../../assets/LoanServicing.png";

export default function Work() {
  console.log("[Work] mounted (minimal)");
  return (
    <section
      id="work-section"
      data-testid="work-section"
      style={{
        border: "6px solid #ff0066",
        background: "rgba(255,0,102,0.06)",
        padding: 24,
        margin: "48px auto",
        maxWidth: 860,
        minHeight: 300,
        position: "relative",
        zIndex: 9999
      }}
    >
      <h2 style={{margin:0, marginBottom:12, fontFamily:"Instrument Sans, system-ui, sans-serif"}}>
        WORK SIMPLE DEBUG
      </h2>

      <p style={{marginTop:0, fontFamily:"Instrument Sans, system-ui, sans-serif"}}>
        If you can see this hot-pink box, the section is visible. Image below should load too.
      </p>

      <div style={{
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        outline: "2px dashed #00d1b2",
        background: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img
          src={background}
          alt="LoanServicing"
          style={{width:"100%", height:"100%", objectFit:"cover"}}
          onError={(e) => { e.currentTarget.style.opacity = 0.2; e.currentTarget.alt = "image failed to load"; }}
        />
      </div>
    </section>
  );
}
