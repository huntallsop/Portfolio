import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.identityChip}>
          <span className={styles.indicator} aria-hidden="true" />
          <span>Hunter Allsop</span>
        </div>
        <button type="button" className={styles.menuButton}>
          Menu
        </button>
      </div>
    </header>
  );
}
