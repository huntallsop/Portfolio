import React from "react";
import "./past-companies.css";
import placeholder from "../../assets/logo-placeholder.svg";

// Explicit ESM imports for your exact filenames
import pastBofa         from "../../assets/past-bofa.png";
import pastFamilysearch from "../../assets/past-familysearch.png";
import pastMetajive     from "../../assets/past-metajive.png";
import pastUtahTech     from "../../assets/past-utah-tech.png";
import pastEra          from "../../assets/past-era.png";
import pastSuu          from "../../assets/past-suu.png";
import pastDhi          from "../../assets/past-dhi.png";

const logosTop = [
  { src: pastBofa,         alt: "Bank of America" },
  { src: pastFamilysearch, alt: "FamilySearch" },
  { src: pastMetajive,     alt: "Metajive" },
];

const logosBottom = [
  { src: pastUtahTech, alt: "Utah Tech" },
  { src: pastEra,      alt: "ERA" },
  { src: pastSuu,      alt: "Southern Utah University" },
  { src: pastDhi,      alt: "DHI" },
];

const Logo = ({ item, className }) => {
  const [src, setSrc] = React.useState(item.src);
  return (
    <div className={`pc-logo ${className || ""}`}>
      <img
        src={src}
        alt={item.alt}
        loading="lazy"
        onError={() => setSrc(placeholder)}
      />
    </div>
  );
};

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
          {logosTop.map((item, i) => (
            <Logo key={i} item={item} className="pc-logo--top" />
          ))}
        </div>
        <div className="pc-row pc-row--bottom">
          {logosBottom.map((item, i) => (
            <Logo key={i} item={item} className="pc-logo--bottom" />
          ))}
        </div>
      </div>

      <div className="pc-footerDivider">x</div>
    </section>
  );
}
