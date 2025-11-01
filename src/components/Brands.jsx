import brandMeta from '../assets/brand-meta.svg';
import brandFiber from '../assets/brand-fiber.svg';
import brandDelta from '../assets/brand-delta.svg';
import brandPeak from '../assets/brand-peak.svg';
import brandNova from '../assets/brand-nova.svg';
import brandOrbit from '../assets/brand-orbit.svg';
import styles from './Brands.module.css';

const brands = [
  { name: 'MetaLab', logo: brandMeta },
  { name: 'Fiber Labs', logo: brandFiber },
  { name: 'Delta Ventures', logo: brandDelta },
  { name: 'Peak Systems', logo: brandPeak },
  { name: 'Nova Research', logo: brandNova },
  { name: 'Orbit Studio', logo: brandOrbit },
];

export default function Brands() {
  return (
    <section className={styles.brands}>
      <div className={styles.container}>
        <p className={styles.caption}>A few brands that trusted my process</p>
        <div className={styles.logoGrid}>
          {brands.map((brand) => (
            <img key={brand.name} src={brand.logo} alt={brand.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
