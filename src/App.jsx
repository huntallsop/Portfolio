import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Brands from './components/Brands.jsx';
import WorkList from './components/WorkList.jsx';
import About from './components/About.jsx';
import CTASection from './components/CTASection.jsx';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.canvas} aria-hidden="true" />
      <div className={styles.shell}>
        <Header />
        <main className={styles.main}>
          <Hero />
          <Brands />
          <WorkList />
          <About />
        </main>
        <CTASection />
      </div>
    </div>
  );
}
