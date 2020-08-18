import styles from "../styles/Home.module.css";
import SectionProyects from '../components/home/sectionProyects'
import SectionFeatures from '../components/home/sectionFeatures'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SectionProyects/>
        <SectionFeatures/>
      </main>
    </div>
  );
}
