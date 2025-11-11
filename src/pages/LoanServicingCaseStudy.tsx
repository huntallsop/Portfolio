import { Link } from "react-router-dom";
import heroImage from "../assets/LoanServicing.png";

const highlightCards = [
  {
    title: "Fewer manual escalations",
    description:
      "Designed a guided servicing workspace that reduced hand-offs between support tiers and lowered escalations by 28%.",
  },
  {
    title: "Streamlined research",
    description:
      "Synthesized interviews, call-center transcripts, and analytics to build a problem map that focused the redesign on three key borrower journeys.",
  },
  {
    title: "Faster iteration",
    description:
      "Partnered with engineering to introduce modular UI patterns so future feature releases could be shipped 40% faster.",
  },
];

const timeline = [
  {
    label: "Discovery",
    duration: "Weeks 1-3",
    body:
      "Shadowed servicing reps, audited legacy tooling, and captured the quantified cost of context switching across five different systems.",
  },
  {
    label: "Definition",
    duration: "Weeks 4-6",
    body:
      "Ran journey mapping workshops with operations and compliance to prioritize scenarios with the highest regulatory pressure.",
  },
  {
    label: "Design",
    duration: "Weeks 7-10",
    body:
      "Prototyped the end-to-end workspace in Figma, validating flows with 14 servicing specialists before handing off refined specs.",
  },
  {
    label: "Launch & Learn",
    duration: "Weeks 11-16",
    body:
      "Monitored adoption metrics, established success dashboards, and led weekly design crits to align future roadmap investments.",
  },
];

const outcomes = [
  {
    metric: "-35%",
    label: "Average call-handle time",
  },
  {
    metric: "+24%",
    label: "Customer satisfaction after first contact",
  },
  {
    metric: "3x",
    label: "Increase in daily workflow automations",
  },
];

export default function LoanServicingCaseStudy() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#06090f] text-white">
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-2 text-[#90a1b9] transition-colors hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm">Back to Home</span>
      </Link>

      <section className="case-study-hero">
        <div className="case-study-hero__content">
          <p className="case-study-eyebrow">Case Study · Loan Servicing Platform</p>
          <h1 className="case-study-title">Rebuilding the borrower servicing experience</h1>
          <p className="case-study-lede">
            Gold Point Systems needed a unified workspace that would empower servicing teams to respond to borrowers faster while keeping compliance and audit requirements intact. I led research, product design, and delivery for the overhaul.
          </p>
          <dl className="case-study-meta" aria-label="Project metadata">
            <div>
              <dt>Role</dt>
              <dd>Lead product designer</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>4 months</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>Design, research, PM, engineering, compliance</dd>
            </div>
          </dl>
        </div>
        <div className="case-study-hero__media">
          <img src={heroImage} alt="Loan servicing dashboard" />
        </div>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section__title">Outcomes</h2>
        <p className="case-study-section__subtitle">
          Centering the redesign on the servicing team&apos;s real workflows drove measurable wins after launch.
        </p>
        <div className="case-study-outcomes">
          {outcomes.map((outcome) => (
            <div key={outcome.metric} className="case-study-outcomes__item">
              <span className="case-study-outcomes__metric">{outcome.metric}</span>
              <span className="case-study-outcomes__label">{outcome.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section__title">Approach</h2>
        <p className="case-study-section__subtitle">
          I combined qualitative and quantitative inputs to ensure the new workspace matched how servicing specialists actually resolve issues.
        </p>
        <div className="case-study-grid">
          {highlightCards.map((card) => (
            <article key={card.title} className="case-study-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section__title">Timeline</h2>
        <p className="case-study-section__subtitle">
          A structured cadence helped stakeholders stay aligned while we iterated on the experience.
        </p>
        <ol className="case-study-timeline">
          {timeline.map((item) => (
            <li key={item.label} className="case-study-timeline__item">
              <header>
                <span className="case-study-timeline__label">{item.label}</span>
                <span className="case-study-timeline__duration">{item.duration}</span>
              </header>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
