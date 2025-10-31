import ContactSection from '../components/ContactSection.jsx';

export default function CaseStudies() {
  return (
    <>
      <section className="case-detail">
        <div>
          <h1 className="section-title">Gold Point Systems</h1>
          <p className="section-subtitle">
            Redesigning an enterprise lending suite into an adaptable, insight-driven workspace used by over 12k financial specialists daily.
          </p>
        </div>
        <div className="case-detail__hero">
          <img src="/assets/img/case-goldpoint-1.svg" alt="Gold Point Systems screens" />
        </div>
        <div className="case-detail__section">
          <h3>Challenge</h3>
          <p>
            Gold Point's underwriting product had become brittle after a decade of incremental updates. Teams juggled spreadsheets and legacy workflows that slowed approvals, frustrated borrowers, and obscured insight.
          </p>
        </div>
        <div className="case-detail__section">
          <h3>Approach</h3>
          <ul>
            <li>Partnered with research to map lender journeys across six regions.</li>
            <li>Built a modular design system with 120+ components for consistent delivery.</li>
            <li>Prototyped dashboard concepts and validated them through remote testing.</li>
            <li>Co-created adoption playbooks with implementation teams.</li>
          </ul>
        </div>
        <div className="case-detail__section">
          <h3>Outcome</h3>
          <p>
            The redesign reduced manual touchpoints by 48%, cut onboarding time from four weeks to nine days, and surfaced actionable insights that improved decision velocity across the lending org.
          </p>
        </div>
      </section>

      <ContactSection
        title="Let's collaborate"
        description="Have a product challenge that needs thoughtful strategy and beautiful execution? I'd love to hear about it."
        primaryCta={{ href: 'mailto:hunter@design.studio', label: 'Start a project' }}
        secondaryCta={{ href: '/contact', label: 'View contact details' }}
      />
    </>
  );
}
