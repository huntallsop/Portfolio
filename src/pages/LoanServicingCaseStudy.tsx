import React, { useEffect } from "react";
import heroImage from "../assets/LoanServicing.png";

const highlights = [
  {
    title: "35% faster servicing cycles",
    description:
      "Automated workflows trimmed manual review steps from five to two, giving loan officers more time to focus on high-risk cases.",
  },
  {
    title: "7 point increase in NPS",
    description:
      "Borrowers gained real-time visibility into statements and payment options, eliminating the most common support ticket.",
  },
  {
    title: "Rollout in under 10 weeks",
    description:
      "A phased delivery plan paired with a reusable UI system helped engineering launch the redesign without disrupting production operations.",
  },
];

const discoveryFindings = [
  "Agents spent up to 40% of their shift reconciling payment exceptions in spreadsheets.",
  "Borrowers lacked a clear snapshot of loan health, driving unnecessary service calls.",
  "Supervisors struggled to prioritize backlogs because case statuses were scattered across tools.",
];

const solutionPillars = [
  {
    name: "Guided servicing workspaces",
    details:
      "We created task-based layouts that surface the next-best action and relevant customer history in a single screen.",
  },
  {
    name: "Borrower-facing transparency",
    details:
      "Self-service dashboards expose payoff amounts, payment schedules, and support channels without requiring an agent touchpoint.",
  },
  {
    name: "Operational insights",
    details:
      "Supervisors receive queue heatmaps, SLA alerts, and coaching notes so they can course-correct in near real time.",
  },
];

const impactMetrics = [
  {
    metric: "-22%",
    label: "Average handling time",
  },
  {
    metric: "+18%",
    label: "Borrower digital adoption",
  },
  {
    metric: "3x",
    label: "Supervisor reporting depth",
  },
];

function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="case-study__section">
      <div className="case-study__section-header">
        {eyebrow ? <p className="case-study__eyebrow">{eyebrow}</p> : null}
        <h2 className="case-study__title">{title}</h2>
      </div>
      <div className="case-study__section-body">{children}</div>
    </section>
  );
}

export default function LoanServicingCaseStudy() {
  useEffect(() => {
    document.title = "Loan Servicing Case Study";
  }, []);

  return (
    <div className="case-study">
      <header className="case-study__hero">
        <div className="case-study__hero-content">
          <p className="case-study__eyebrow">Case study</p>
          <h1 className="case-study__hero-title">Designing a modern loan servicing experience</h1>
          <p className="case-study__hero-lede">
            A holistic redesign of Gold Point Systems' servicing platform, aligning loan officers, supervisors, and borrowers around a shared
            source of truth.
          </p>
          <dl className="case-study__hero-meta">
            <div>
              <dt>Client</dt>
              <dd>Gold Point Systems</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Lead Product Designer</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>Q1–Q2 2024</dd>
            </div>
          </dl>
        </div>
        <figure className="case-study__hero-figure">
          <img src={heroImage} alt="Screens from the Gold Point servicing platform redesign" />
        </figure>
      </header>

      <main className="case-study__content">
        <Section title="Project highlights">
          <ul className="case-study__highlight-grid">
            {highlights.map((highlight) => (
              <li key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Where we started" eyebrow="Discovery">
          <div className="case-study__two-col">
            <div className="case-study__narrative">
              <p>
                Gold Point Systems needed to support a surge in loan originations without sacrificing the personal attention borrowers expect
                from community lenders. Our research focused on three user groups—servicing agents, operations leadership, and borrowers.
              </p>
              <p>
                Workshops and shadow sessions uncovered friction created by context switching, disconnected reporting, and limited borrower
                self-service. The insights guided an experience strategy centered on clarity, automation, and trust.
              </p>
            </div>
            <ul className="case-study__bullets">
              {discoveryFindings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title="Experience pillars" eyebrow="Solution">
          <div className="case-study__pillars">
            {solutionPillars.map((pillar) => (
              <article key={pillar.name}>
                <h3>{pillar.name}</h3>
                <p>{pillar.details}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Design approach" eyebrow="Process">
          <div className="case-study__process">
            <div>
              <h3>01 • Frame the servicing journey</h3>
              <p>
                Mapped end-to-end workflows from application approval through payoff, highlighting decision points, supporting systems, and
                compliance hand-offs.
              </p>
            </div>
            <div>
              <h3>02 • Prototype critical flows</h3>
              <p>
                Built high-fidelity, data-aware prototypes for exception handling, borrower escalations, and supervisor analytics to validate
                usability with real servicing teams.
              </p>
            </div>
            <div>
              <h3>03 • Ship with a component system</h3>
              <p>
                Delivered a token-based UI kit and documentation so engineering could extend the experience across lending products without
                reinventing core patterns.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Outcome" eyebrow="Impact">
          <div className="case-study__impact">
            <ul>
              {impactMetrics.map((metric) => (
                <li key={metric.metric}>
                  <span>{metric.metric}</span>
                  <p>{metric.label}</p>
                </li>
              ))}
            </ul>
            <div className="case-study__quote">
              <p>
                “The redesign gave our servicing team the clarity we needed to scale. Borrowers get answers faster, and our supervisors can steer
                the day without digging through reports.”
              </p>
              <footer>
                <strong>Director of Servicing, Gold Point Systems</strong>
              </footer>
            </div>
          </div>
        </Section>

        <Section title="Next steps" eyebrow="Looking ahead">
          <div className="case-study__next-steps">
            <p>
              With the core servicing platform stabilized, our next focus is on proactive retention—predicting borrower churn risk and
              orchestrating targeted outreach with marketing and compliance teams. The foundation we built keeps future investments cohesive and
              measurable.
            </p>
            <a className="case-study__cta" href="mailto:hello@goldpoint.design">
              Discuss the servicing redesign
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}

