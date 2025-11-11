import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./assets/Tellerdashboard.png";
import "./LoanServicingCaseStudy.css";

function ScrollIndicator() {
  return (
    <div className="case-study__scroll-indicator" aria-hidden="true">
      <div className="case-study__scroll-indicator-inner" />
    </div>
  );
}

export default function LoanServicingCaseStudy() {
  return (
    <div className="case-study">
      {/* Full-width gradient header area */}
      <section className="case-study__hero-section">
        {/* Back link sits on top of the gradient */}
        <header className="case-study__header">
          <Link to="/" className="case-study__back">
            <span className="case-study__back-icon" aria-hidden="true">
              ←
            </span>
            <span>Back to home</span>
          </Link>
        </header>

        {/* Figma-style top content inside 800px max width */}
        <div className="case-study__top">
          {/* Pills: UX/UI Design · Product strategy · 2025 */}
          <div className="case-study__tags-row">
            <div className="case-study__tag-pill">UX/UI Design</div>
            <span className="case-study__tag-dot" aria-hidden="true" />
            <div className="case-study__tag-pill">Product strategy</div>
            <span className="case-study__tag-dot" aria-hidden="true" />
            <div className="case-study__tag-pill">2025</div>
          </div>

          {/* Title + subtitle line with percentages */}
          <div className="case-study__title-block">
            <h1 className="case-study__title">Revamping Loan Servicing</h1>
            <p className="case-study__subtitle">
              Designing a scalable, user-centered lending platform that reduced
              processing time by{" "}
              <span className="case-study__subtitle-highlight-green">67%</span>{" "}
              and increased customer satisfaction scores by{" "}
              <span className="case-study__subtitle-highlight-blue">45%</span>.
            </p>
          </div>

          {/* Small row: 12 weeks · Lead Designer · B2B FinTech */}
          <div className="case-study__summary-row">
            <div className="case-study__summary-item">
              <span
                className="case-study__summary-dot case-study__summary-dot--blue"
                aria-hidden="true"
              />
              <span className="case-study__summary-text">12 weeks</span>
            </div>
            <div className="case-study__summary-item">
              <span
                className="case-study__summary-dot case-study__summary-dot--green"
                aria-hidden="true"
              />
              <span className="case-study__summary-text">Lead Designer</span>
            </div>
            <div className="case-study__summary-item">
              <span
                className="case-study__summary-dot case-study__summary-dot--orange"
                aria-hidden="true"
              />
              <span className="case-study__summary-text">B2B FinTech</span>
            </div>
          </div>

          {/* Scroll indicator centered under the summary row */}
          <div className="case-study__scroll-indicator-wrapper">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* All content below the gradient */}
      <main className="case-study__main">
        {/* HERO IMAGE */}
        <section className="case-study__hero">
          <div className="case-study__hero-image-wrapper">
            <img
              src={heroImage}
              alt="Loan servicing teller dashboard"
              className="case-study__hero-image"
            />
            <div className="case-study__hero-border" aria-hidden="true" />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="case-study__section">
          <div className="case-study__section-label">Overview</div>
          <div className="case-study__section-body">
            <p className="case-study__intro">
              Our financial services client was struggling with an{" "}
              <span className="case-study__bold">
                outdated loan servicing platform
              </span>{" "}
              that created{" "}
              <span className="case-study__bold">
                friction for both customers and internal teams
              </span>
              . Processing times were lengthy, error rates were high, and
              customer satisfaction was declining.
            </p>
            <div className="case-study__highlight">
              I led the complete redesign of their Teller Dashboard, focusing on
              creating an intuitive, efficient, and scalable solution that
              would serve both B2B clients and their end customers.
            </div>
          </div>
        </section>

        {/* META ROW: ROLE / TIMELINE / TEAM / TOOLS */}
        <section className="case-study__meta-row">
          <div className="case-study__meta-item">
            <div className="case-study__meta-label">My role</div>
            <p className="case-study__meta-text">
              Lead UX/UI Designer
              <br />
              Product Strategy
            </p>
          </div>

          <div className="case-study__meta-item">
            <div className="case-study__meta-label">Timeline</div>
            <p className="case-study__meta-text">12 weeks</p>
          </div>

          <div className="case-study__meta-item">
            <div className="case-study__meta-label">Team</div>
            <p className="case-study__meta-text">
              Design (2)
              <br />
              Engineering (5)
              <br />
              Product (1)
            </p>
          </div>

          <div className="case-study__meta-item">
            <div className="case-study__meta-label">Tools</div>
            <p className="case-study__meta-text">
              Figma
              <br />
              FigJam
              <br />
              Azure DevOps
            </p>
          </div>
        </section>

        {/* THE PROBLEM SPACE */}
        <section className="case-study__section">
          <div className="case-study__section-label">The problem space</div>
          <div className="case-study__section-body">
            <p className="case-study__body-text">
              The old dashboard design was{" "}
              <span className="case-study__bold">cluttered</span>, presenting{" "}
              <span className="case-study__bold">too much information</span> at
              once, making it difficult for tellers to locate key data quickly.
            </p>
            <p className="case-study__body-text">
              The lack of real-time updates meant cash flow tracking was
              inefficient, often leading to discrepancies in drawer totals.
              End-of-day reporting was another pain point, as the process for
              generating and submitting transaction reports was slow and prone
              to manual errors.
            </p>
            <p className="case-study__body-text">
              Poor transaction searchability further hindered teller efficiency,
              requiring multiple steps to retrieve past transactions and
              extending customer service interactions. Lastly, limited drawer
              breakdown visibility made it challenging for tellers to see a
              detailed count of bills and coins, complicating cash balancing at
              the end of shifts.
            </p>
          </div>
        </section>

        {/* HYPOTHESIS */}
        <section className="case-study__section case-study__section--last">
          <div className="case-study__section-label">Hypothesis</div>
          <div className="case-study__section-body">
            <p className="case-study__body-text">
              Redesigning the Teller Dashboard to simplify navigation, reduce
              redundant steps, and surface critical customer information will
              enable tellers to complete transactions faster, lower the risk of
              errors, and improve overall efficiency.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
