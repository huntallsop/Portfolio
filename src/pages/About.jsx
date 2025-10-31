const experience = [
  {
    role: 'Principal Product Designer · Metalwave',
    period: '2021 — Present',
    description:
      'Leading cross-functional pods to shape enterprise tools for manufacturing teams. Established design systems and research practices that scale across five product lines.',
  },
  {
    role: 'Senior Designer · Meta',
    period: '2018 — 2021',
    description:
      'Crafted AR collaboration workflows for Workplace. Delivered multi-platform experiences that improved adoption by 32%.',
  },
  {
    role: 'Product Designer · Gold Point Systems',
    period: '2016 — 2018',
    description:
      'Modernized underwriting tools with modular UI patterns, accelerating approvals and reducing manual review steps by 40%.',
  },
];

const values = [
  'Lead with research to inform every design decision.',
  'Prototype early and often to uncover the right fidelity fast.',
  'Design systems that empower teams to move with clarity.',
  'Champion accessibility and inclusive experiences.',
];

export default function About() {
  return (
    <>
      <section>
        <h1 className="section-title">Designing with intention</h1>
        <p className="section-subtitle">
          I'm Hunter, a product designer who helps teams translate complex problems into elegant, human-centered experiences. I believe the best products are built on curiosity, empathy, and measurable outcomes.
        </p>
      </section>

      <section className="timeline">
        {experience.map((item) => (
          <article key={item.role} className="timeline-item">
            <h3>{item.role}</h3>
            <span>{item.period}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="case-detail__section" style={{ marginTop: '120px' }}>
        <h3>Values that guide my work</h3>
        <ul>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
