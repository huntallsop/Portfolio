import React, { useEffect, useMemo } from "react";
import footerBgRaw from "../../assets/footer-bg.png?raw";

const FOOTER_STYLE_ID = "footer-inline-styles";
const FOOTER_CSS = `
.footer {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: #f9f9f9;
  background: #141414;
  overflow: hidden;
}

.footer-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

.footer-available {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-rule {
  display: inline-flex;
  width: 52px;
  height: 1px;
  opacity: 0.9;
}

.footer-rule svg {
  width: 100%;
  height: 1px;
}

.footer-rule path {
  stroke: #f9f9f9;
}

.footer-available__text {
  margin: 0;
  font-family: "Instrument Serif", serif;
  font-size: 20px;
  letter-spacing: 0.1px;
}

.footer-headline {
  font-family: "Instrument Serif", serif;
  font-size: 70px;
  line-height: 1;
}

.footer-headline__lets {
  color: #f9f9f9;
}

.footer-headline__connect {
  color: rgba(249, 249, 249, 0.5);
  font-style: italic;
}

.footer-sub {
  margin: 0;
  font-family: "Instrument Sans", sans-serif;
  font-size: 20px;
  letter-spacing: 0.1px;
  opacity: 0.95;
}

.footer-btn {
  height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 100px;
  background: #3d3d3d;
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 6px 7px 14px rgba(0, 0, 0, 0.21);
  cursor: pointer;
  font: 500 14px/20px Roboto, system-ui, -apple-system, Segoe UI, "Helvetica Neue", Arial, "Noto Sans";
}

.footer-arrow {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.footer-bg-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  opacity: 0.18;
}

@media (max-width: 480px) {
  .footer-headline {
    font-size: 48px;
  }

  .footer-sub {
    font-size: 18px;
  }
}
`;

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
  const footerBg = useMemo(() => {
    const blob = new Blob([footerBgRaw], { type: "image/png" });
    return URL.createObjectURL(blob);
  }, []);

  useEffect(() => {
    const styleId = FOOTER_STYLE_ID;
    let styleEl = document.getElementById(styleId);
    let created = false;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.textContent = FOOTER_CSS;
      document.head.appendChild(styleEl);
      created = true;
    }

    return () => {
      URL.revokeObjectURL(footerBg);
      if (created && styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [footerBg]);

  return (
    <footer className="footer">
      <div
        className="footer-bg-overlay"
        style={{
          backgroundImage: `url(${footerBg})`,
          opacity: 0.18,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
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
