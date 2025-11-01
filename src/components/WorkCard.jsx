import styles from './WorkCard.module.css';

export default function WorkCard({ image, chips, heading, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={image} alt="" aria-hidden="true" />
        <div className={styles.gradient} aria-hidden="true" />
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip} className={styles.chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className={styles.bottomText}>
          <div className={styles.heading}>
            <span>{heading[0]}</span>
            <span>{heading[1]}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </article>
  );
}
