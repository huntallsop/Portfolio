import heroPortrait from '../assets/hero-portrait.svg';
import PrimaryButton from './PrimaryButton.jsx';
import ArrowIcon from './icons/ArrowIcon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span className={styles.text}>I'm </span>
            <span className={styles.em}>Hunter</span>
            <span className={styles.portraitChip}>
              <span className={styles.portraitFrame}>
                <img src={heroPortrait} alt="Hunter Allsop" />
              </span>
              <span className={styles.comma} aria-hidden="true">,</span>
            </span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.text}>a </span>
            <span className={styles.em}>product</span>
            <span className={styles.text}> Designer</span>
          </span>
        </h1>
        <p className={styles.description}>
          For the past 7 years, I&apos;ve been designing meaningful digital experiences that connect user needs with business
          strategy.
        </p>
        <PrimaryButton className={styles.cta} href="mailto:hunter@design.studio">
          Let&apos;s connect
          <ArrowIcon />
        </PrimaryButton>
      </div>
    </section>
  );
}
