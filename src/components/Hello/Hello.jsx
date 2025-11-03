import React from "react";
import "./hello.css";

// Small reusable pill
function Pill({ label, rotate = 0, fill = "rgba(45,45,45,0.6)" }) {
  return (
    <div
      className="hello-pill"
      style={{ transform: `rotate(${rotate}deg)`, background: fill }}
      role="img"
      aria-label={label}
    >
      <span className="hello-pill__stroke" aria-hidden="true" />
      <span className="hello-pill__text">{label}</span>
    </div>
  );
}

function LeftStack() {
  return (
    <div className="hello-stack hello-stack--left">
      <Pill label="User testing" rotate={9} />
      <Pill label="Design systems" rotate={0} fill="rgba(45,45,45,0.6)" />
      <Pill label="Prototypes" rotate={-10} />
    </div>
  );
}

function RightStack() {
  return (
    <div className="hello-stack hello-stack--right">
      <Pill label="Problem solver" rotate={-14} />
      <Pill label="UI/UX Design" rotate={0} />
      <Pill label="Research" rotate={16} />
    </div>
  );
}

// Thin vertical divider SVG
function Divider() {
  return (
    <div className="hello-divider" aria-hidden="true">
      <svg viewBox="0 0 1 120" width="1" height="120" preserveAspectRatio="none">
        <path d="M0.5 0V120" stroke="rgba(45,45,45,0.6)" />
      </svg>
    </div>
  );
}

export default function Hello() {
  console.log("[Hello] mounted");
  return (
    <section className="hello" aria-labelledby="hello-title">
      <h2 id="hello-title" className="sr-only">Hello</h2>

      <div className="hello-row">
        <Divider />
        <p className="hello-text">Hello,</p>
        <Divider />
      </div>

      <div className="hello-row hello-row--with-stacks">
        <LeftStack />
        <p className="hello-blurb">
          I’m an enthusiastic and professional designer who’s passionate about making products better—both for the
          people who use them and the teams who build them. I care deeply about the details, love solving problems,
          and bring a collaborative, thoughtful energy to every project I work on.
        </p>
        <RightStack />
      </div>
    </section>
  );
}
