import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.identityChip}>
          <span className={styles.identityBorder} aria-hidden="true" />
          <span className={styles.identityLabel}>Hunter Allsop</span>
        </div>
        <button type="button" className={styles.menuButton} aria-label="Open navigation">
          <span className={styles.menuBackground} aria-hidden="true" />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>
    </header>
  );
}
