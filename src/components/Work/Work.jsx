import React from "react";
import { Link } from "react-router-dom";
import "./work.css";
import background from "../../assets/LoanServicing.png";

function Chip({ label }) {
  return (
    <div className="work-chip" role="img" aria-label={label}>
      <span className="work-chip__stroke" aria-hidden="true" />
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
      <div className="work-brand" aria-label="Gold Point Systems">
        <div>Gold Point systems</div>
      </div>
      <p className="work-desc">
        Gold Point Systems offers easy to use tools to track and manage banking transactions.
      </p>
    </div>
  );
}

export default function Work() {
  return (
    <section className="work" aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">Work</h2>
      <Link to="/case-studies/loan-servicing" className="block group">
        <div className="work-card">
          <div className="work-bg">
            <img src={background} alt="" className="work-bg__img" />
            <div className="work-bg__shadow" aria-hidden="true" />
          </div>
          <Chips />
          <BottomText />
        </div>
      </Link>
    </section>
  );
}
