import styles from './About.module.css';

const leftColumn = [
  { label: 'User testing', tilt: 9 },
  { label: 'Design systems', tilt: 0 },
  { label: 'Prototypes', tilt: -10 },
];

const rightColumn = [
  { label: 'Problem solver', tilt: -14 },
  { label: 'UI/UX Design', tilt: 0 },
  { label: 'Research', tilt: 6 },
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span className={styles.greetingDivider} aria-hidden="true" />
          <span className={styles.greetingText}>Hello,</span>
          <span className={styles.greetingDivider} aria-hidden="true" />
        </div>
        <div className={styles.bodyRow}>
          <ul className={styles.chipColumn} aria-label="Core skills">
            {leftColumn.map((chip) => (
              <li
                key={chip.label}
                className={styles.chipItem}
                style={{ transform: `rotate(${chip.tilt}deg)` }}
              >
                <span>{chip.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.copy}>
            I&apos;m an enthusiastic and professional designer who&apos;s passionate about making products better—both for the people who
            use them and the teams who build them. I care deeply about the details, love solving problems, and bring a collaborative,
            thoughtful energy to every project I work on.
          </p>
          <ul className={styles.chipColumn} aria-hidden="true">
            {rightColumn.map((chip) => (
              <li
                key={chip.label}
                className={styles.chipItem}
                style={{ transform: `rotate(${chip.tilt}deg)` }}
              >
                <span>{chip.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
