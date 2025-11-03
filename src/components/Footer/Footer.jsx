import React from "react";
import "./footer.css";

// Inline arrow icon (no external imports)
function ArrowIcon() {
  return (
    <svg
      className="footer-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 18L18 6M9 6h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Rule() {
  return (
    <span className="footer-rule" aria-hidden="true">
      <svg viewBox="0 0 53 1" preserveAspectRatio="none">
        <path d="M52.4473 0.5H0" />
      </svg>
    </span>
  );
}

export default function Footer() {
  console.log("[Footer] mounted");

  // Try to require the background image if it exists; otherwise fallback
  let bgSrc = null;
  try {
    // Will succeed only if you add src/assets/footer-bg.png
    // (case-sensitive). If missing, we catch and keep bgSrc = null.
    // @ts-ignore
    bgSrc = require("../../assets/footer-bg.png");
  } catch (e) {}

  return (
    <footer
      className={`footer ${bgSrc ? "footer--with-image" : "footer--no-image"}`}
      style={bgSrc ? { ["--footer-bg-image"]: `url(${bgSrc})` } : undefined}
    >
      <div className="footer-inner">
        <div className="footer-available">
          <Rule />
          <p className="footer-available__text">I’m available</p>
          <Rule />
        </div>

        <div className="footer-headline">
          <span className="footer-headline__lets">Let’s&nbsp;</span>
          <em className="footer-headline__connect">connect</em>
        </div>

        <p className="footer-sub">
          Reach out anytime, I’m available for new opportunities and collaborations
        </p>

        <button className="footer-btn" type="button" aria-label="Let’s connect">
          <span>Let’s connect</span>
          <ArrowIcon />
        </button>
      </div>
    </footer>
  );
}
