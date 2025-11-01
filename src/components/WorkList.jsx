import workCanvas from '../assets/work-canvas.svg';
import workLabs from '../assets/work-labs.svg';
import WorkCard from './WorkCard.jsx';
import styles from './WorkList.module.css';

const projects = [
  {
    image: workCanvas,
    title: 'Canvas OS — Enterprise workflow system',
    description:
      'Led a redesign of a lending operations platform, shaping modular UI patterns and analytics that unlocked faster onboarding for 1,200+ team members.',
    chips: ['Design strategy', 'Systems thinking'],
    ctaLabel: 'View full project →',
    ctaHref: '#',
  },
  {
    image: workLabs,
    title: 'Launch Labs — Experimentation toolkit',
    description:
      'Brought researchers, PMs, and engineers into a shared space with guided testing scripts, insight libraries, and prototypes that ship clarity.',
    chips: ['Research', 'Prototyping'],
    ctaLabel: 'Explore case study →',
    ctaHref: '#',
  },
];

export default function WorkList() {
  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 className={styles.heading}>Helping product teams move from concept to clarity</h2>
        </header>
        <div className={styles.grid}>
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
