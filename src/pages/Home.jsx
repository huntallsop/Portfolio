import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection.jsx';

const badgeLogos = [
  { src: '/assets/img/logo-meta.svg', alt: 'Meta' },
  { src: '/assets/img/logo-umesh.svg', alt: 'UTEM Tech' },
  { src: '/assets/img/logo-suu.svg', alt: 'Southern Utah University' },
  { src: '/assets/img/logo-dbh.svg', alt: 'DBH' },
  { src: '/assets/img/logo-fiber.svg', alt: 'Fiber' },
  { src: '/assets/img/logo-metalwave.svg', alt: 'Metalwave' },
];

const caseStudies = [
  {
    image: '/assets/img/case-goldpoint-1.svg',
    label: 'Enterprise Platform',
    title: 'Gold Point Systems',
    description:
      "Revitalizing an aging lending platform with modular design systems, flexible dashboards, and data-rich insights that accelerate loan teams.",
    ctaLabel: 'View full project →',
    ctaHref: '/case-studies',
  },
  {
    image: '/assets/img/case-goldpoint-2.svg',
    label: 'Workflow Automation',
    title: 'Gold Point Systems',
    description:
      'Created a unified workspace for underwriting, simplifying complex processes with collaborative tooling, smart defaults, and streamlined approvals.',
    ctaLabel: 'Explore the case study →',
    ctaHref: '/case-studies',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero__subtitle">Product Designer</p>
        <h1 className="hero__title">I'm Hunter, a product designer</h1>
        <p className="hero__description">
          For the past 7 years, I've crafted immersive experiences that bring digital products to life. I blend research, strategy, and intuitive interaction design to build human-centered solutions that scale.
        </p>

        <div className="badge-grid">
          {badgeLogos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </section>

      <section className="case-studies">
        <div className="case-studies__grid">
          {caseStudies.map((study) => (
            <article key={study.label} className="case-card">
              <img src={study.image} alt={study.title} />
              <p className="case-card__label">{study.label}</p>
              <h2 className="case-card__title">{study.title}</h2>
              <p className="hero__description">{study.description}</p>
              <Link className="case-card__cta" to={study.ctaHref}>
                {study.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="greeting">
        <p>
          Hello, I'm an enthusiastic and professional designer passionate about making products better—both for the people who use them and the teams who build them. I bring curiosity, inclusive thinking, and thoughtful energy to every project I work on.
        </p>
      </section>

      <section className="skills">
        <span className="skill-pill">Design Systems</span>
        <span className="skill-pill">Product Strategy</span>
        <span className="skill-pill">Research</span>
        <span className="skill-pill">Interaction Design</span>
        <span className="skill-pill">Prototyping</span>
        <span className="skill-pill">Workshop Facilitation</span>
      </section>

      <ContactSection
        description="I'm available for select freelance engagements and collaborative product design roles. Share your project details and I'll be in touch within two business days."
        primaryCta={{ href: 'mailto:hunter@design.studio', label: 'Email me' }}
        secondaryCta={{ href: '/contact', label: 'Project inquiry' }}
      />
    </>
  );
}
