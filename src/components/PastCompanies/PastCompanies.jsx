import React from "react";
import "./past-companies.css";

const safe = (name) => {
  try {
    return require(`../../assets/${name}`);
  } catch {
    return require(`../../assets/logo-placeholder.svg`);
  }
};

const logosTop = [
  { src: safe("past-bofa.png"), alt: "Bank of America" },
  { src: safe("past-familysearch.png"), alt: "FamilySearch" },
  { src: safe("past-metajive.png"), alt: "Metajive" },
];
const logosBottom = [
  { src: safe("past-utah-tech.png"), alt: "Utah Tech" },
  { src: safe("past-era.png"), alt: "ERA" },
  { src: safe("past-suu.png"), alt: "Southern Utah University" },
  { src: safe("past-dhi.png"), alt: "DHI" },
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
