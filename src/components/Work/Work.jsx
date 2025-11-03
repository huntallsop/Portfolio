import React from "react";
import "./work.css";
import background from "../../assets/LoanServicing.png";

// Small pill chips reused from your Figma layout
function Chip({ label }) {
  return (
    <div className="work-chip">
      <div className="work-chip__stroke" aria-hidden="true" />
      <span className="work-chip__text">{label}</span>
    </div>
  );
}

function Chips() {
  return (
    <div className="work-chips">
      <Chip label="Product design" />
      <Chip label="User research" />
    </div>
  );
}

function BottomText() {
  return (
    <div className="work-bottom">
      <div className="work-brand">
        <div>Gold Point</div>
        <div>Systems</div>
      </div>
      <p className="work-desc">
        Gold Point Systems offers easy to use tools to track and manage banking transactions.
      </p>
    </div>
  );
}

export default function Work() {
  console.log("[Work] mounted");
  return (
    <section
      id="work-section"
      data-testid="work-section"
      className="work"
      style={{
        outline: "4px solid red",
        minHeight: 420,
        marginTop: 40,
        position: "relative",
        background: "rgba(255,0,0,0.06)"
      }}
      aria-labelledby="workTitle"
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "rgba(255,255,255,0.9)",
          border: "2px dashed #f0b",
          padding: "8px 12px",
          textAlign: "center",
          fontFamily: "Instrument Sans, system-ui, sans-serif"
        }}
      >
        Work (debug) — find me with: <code>#work-section</code> or <code>[data-testid="work-section"]</code>
      </div>

      {/* keep your existing card content below unchanged */}
      <div className="work-card">
        {/* Background image + blur/shadow overlay */}
        <div className="work-bg">
          <img src={background} alt="" className="work-bg__img" />
          <div className="work-bg__shadow" aria-hidden="true" />
        </div>

        <Chips />
        <BottomText />
      </div>
    </section>
  );
}
