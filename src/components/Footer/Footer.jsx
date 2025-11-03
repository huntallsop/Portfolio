import React from "react";
import "./footer.css";
import footerBg from "../../assets/footer-bg.png";

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

export default function Footer({ overlayRef }) {
  console.log("[Footer] mounted");

  return (
    <footer className="footer">
      <div
        ref={overlayRef}
        className="footer-bg-overlay"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
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
