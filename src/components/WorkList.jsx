import workCanvas from '../assets/work-canvas.svg';
import workLabs from '../assets/work-labs.svg';
import WorkCard from './WorkCard.jsx';
import styles from './WorkList.module.css';

const projects = [
  {
    id: 'gold-point-systems-1',
    image: workCanvas,
    chips: ['Product design', 'User research'],
    heading: ['Gold Point', 'Systems'],
    description: 'Gold Point Systems offers easy to use tools to track and manage banking transactions.',
  },
  {
    id: 'gold-point-systems-2',
    image: workLabs,
    chips: ['Product design', 'User research'],
    heading: ['Gold Point', 'Systems'],
    description: 'Gold Point Systems offers easy to use tools to track and manage banking transactions.',
  },
];

export default function WorkList() {
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        {projects.map((project) => (
          <WorkCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
