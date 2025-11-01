import styles from './About.module.css';

const qualities = [
  'User testing',
  'Design systems',
  'Prototypes',
  'Problem solver',
  'UI/UX Design',
  'Research',
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.copy}>
          Hello! I’m an enthusiastic and collaborative designer focused on making complex products feel effortless. I bring
          inclusive research practices, scalable systems, and thoughtful storytelling to every engagement.
        </p>
        <ul className={styles.qualifyList}>
          {qualities.map((item) => (
            <li key={item} className={styles.qualifyChip}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
