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
    <section className="work" aria-labelledby="workTitle">
      <h2 style={{ margin: "24px 0", fontFamily: "Instrument Sans, sans-serif" }}>
        Work (debug)
      </h2>
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
