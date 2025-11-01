import ctaGrid from '../assets/cta-grid.svg';
import PrimaryButton from './PrimaryButton.jsx';
import GradientBlob from './decor/GradientBlob.jsx';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.background} aria-hidden="true">
        <img src={ctaGrid} alt="" />
        <GradientBlob className={styles.blob} variant="cta" />
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>Available for select collaborations</div>
        <h2 className={styles.heading}>
          I’m available.
          <span>Let’s connect.</span>
        </h2>
        <p className={styles.copy}>
          Share the problems you’re solving and I’ll respond within two business days with next steps.
        </p>
        <PrimaryButton href="mailto:hunter@design.studio" className={styles.buttonOverride}>
          Start a project
        </PrimaryButton>
      </div>
    </section>
  );
}
