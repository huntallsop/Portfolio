import { Link } from 'react-router-dom';

function CtaButton({ className, action }) {
  if (!action) return null;
  const { href, label, external } = action;

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a className={className} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {label}
    </Link>
  );
}

export default function ContactSection({
  title = "Let's connect",
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="contact">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="contact__actions">
        <CtaButton className="button button--primary" action={primaryCta} />
        <CtaButton className="button button--ghost" action={secondaryCta} />
      </div>
    </section>
  );
}
