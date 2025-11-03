import React, { useEffect, useRef } from "react";
const footerBgUrl = new URL("../../assets/footer-bg.png", import.meta.url).toString();
// Fallback if bundler complains about import.meta.url:
// import footerBg from "../../assets/footer-bg.png";
// const footerBgUrl = footerBg;
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
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const applyRealBg = () => {
      el.style.removeProperty("background-image");
      el.style.setProperty("background-image", `url("${footerBgUrl}")`, "important");
      el.style.setProperty("opacity", "0.18", "important");
      el.style.setProperty("background-repeat", "no-repeat", "important");
      el.style.setProperty("background-size", "cover", "important");
      el.style.setProperty("background-position", "50% 50%", "important");
    };

    applyRealBg();

    const mo = new MutationObserver(() => {
      const v = el.style.backgroundImage || "";
      if (v.includes("data:image") || v.includes("base64,DQo=")) {
        applyRealBg();
      }
    });
    mo.observe(el, { attributes: true, attributeFilter: ["style", "class"] });

    queueMicrotask(applyRealBg);
    requestAnimationFrame(applyRealBg);

    console.log("[Footer] enforcing real bg:", footerBgUrl);
    console.log("[Footer] current inline bg:", el.style.backgroundImage);

    return () => mo.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div ref={bgRef} className="footer-bg-overlay" />
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
