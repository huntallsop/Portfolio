import ctaGrid from '../assets/cta-grid.svg';
import PrimaryButton from './PrimaryButton.jsx';
import ArrowIcon from './icons/ArrowIcon.jsx';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.backdrop} aria-hidden="true">
        <img src={ctaGrid} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.availability}>
          <span className={styles.rule} aria-hidden="true" />
          <span>I&apos;m available</span>
          <span className={styles.rule} aria-hidden="true" />
        </div>
        <h2 className={styles.heading}>
          Let&apos;s <span>connect</span>
        </h2>
        <p className={styles.copy}>Reach out anytime, I&apos;m available for new opportunities and collaborations.</p>
        <PrimaryButton className={styles.button} href="mailto:hunter@design.studio">
          Let&apos;s connect
          <ArrowIcon />
        </PrimaryButton>
      </div>
    </section>
  );
}
