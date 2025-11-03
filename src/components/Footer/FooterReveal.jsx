import React, { useEffect, useRef } from "react";
import "./footer.css";
import Footer from "./Footer";

/**
 * Wrapper that creates a scrollable area taller than the viewport.
 * Inside it, a sticky 100vh panel (the footer) pins while the user scrolls.
 * We also compute a parallax offset for the bg overlay.
 */
export default function FooterReveal() {
  const wrapRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // Progress from 0 → 1 as the wrapper scrolls past the viewport
        const total = rect.height - vh; // scrollable distance inside wrapper
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        const progress = total > 0 ? scrolled / total : 0;

        // Parallax translate: subtle upward drift as you scroll (adjust as desired)
        const offset = Math.round(progress * 80 - 40); // -40px → +40px
        overlay.style.setProperty("--parallax-y", `${offset}px`);

        ticking = false;
      });
    };

    // Run once and on scroll/resize
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={wrapRef} className="footer-reveal" aria-label="Footer reveal">
      <div className="footer-sticky">
        {/* We render Footer, but we also need a hook to the bg overlay for parallax. */}
        <Footer overlayRef={overlayRef} />
      </div>
    </section>
  );
}
