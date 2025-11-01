import styles from './WorkCard.module.css';

export default function WorkCard({ image, title, description, chips, ctaLabel, ctaHref }) {
  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        <img src={image} alt="" aria-hidden="true" />
        <div className={styles.overlay} />
        <div className={styles.chipRow}>
          {chips.map((chip) => (
            <span key={chip} className={styles.chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <a className={styles.link} href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
