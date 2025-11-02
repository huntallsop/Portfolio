import React from "react";
import "./past-companies.css";

// Try to use my uploaded PNGs from src/assets. If any are missing, fall back to logo-placeholder.svg
const safeImport = (path) => {
  try {
    return require(`../../assets/${path}`);
  } catch {
    return require(`../../assets/logo-placeholder.svg`);
  }
};

const logosTop = [
  { src: safeImport("past-bofa.png"), alt: "Bank of America" },
  { src: safeImport("past-familysearch.png"), alt: "FamilySearch" },
  { src: safeImport("past-metajive.png"), alt: "Metajive" },
];

const logosBottom = [
  { src: safeImport("past-utah-tech.png"), alt: "Utah Tech" },
  { src: safeImport("past-era.png"), alt: "ERA" },
  { src: safeImport("past-suu.png"), alt: "Southern Utah University" },
  { src: safeImport("past-dhi.png"), alt: "DHI" },
];

export default function PastCompanies() {
  return (
    <section className="pastCompanies" aria-labelledby="pastCompaniesTitle">
      <div className="pc-header">
        <div className="pc-divider">x</div>
        <h2 id="pastCompaniesTitle" className="pc-title">
          A few brands I have worked with
        </h2>
      </div>

      <div className="pc-rows">
        <div className="pc-row">
          {logosTop.map((l, i) => (
            <div className="pc-logo pc-logo--top" key={i}>
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="pc-row pc-row--bottom">
          {logosBottom.map((l, i) => (
            <div className="pc-logo pc-logo--bottom" key={i}>
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="pc-footerDivider">x</div>
    </section>
  );
}
