import heroPortrait from '../assets/hero-portrait.svg';
import PrimaryButton from './PrimaryButton.jsx';
import GradientBlob from './decor/GradientBlob.jsx';
import styles from './Hero.module.css';

const descriptors = ['Product design', 'Design systems', 'Research'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <GradientBlob className={styles.blob} />
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Product Designer • Utah, USA</p>
          <h1 className={styles.title}>
            Hello, I’m Hunter
            <span className={styles.subtitle}>— building digital experiences with care.</span>
          </h1>
          <p className={styles.description}>
            I combine research, systems thinking, and prototypes to help teams move from fuzzy ideas to confident launches. Let’s
            craft something enduring together.
          </p>
          <div className={styles.actions}>
            <PrimaryButton href="#work">View case studies</PrimaryButton>
            <ul className={styles.descriptorList}>
              {descriptors.map((item) => (
                <li key={item} className={styles.descriptorChip}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.portraitColumn}>
          <div className={styles.glassChip}>Currently open for collaborations</div>
          <div className={styles.portraitCard}>
            <img src={heroPortrait} alt="Stylised portrait representing Hunter Allsop" />
          </div>
        </div>
      </div>
    </section>
  );
}
