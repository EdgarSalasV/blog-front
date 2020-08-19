// import styles from "../styles/Home.module.css";
import SectionProyects from '../views/home/sectionProyects'
import SectionFeatures from '../views/home/sectionFeatures'

export default function Home() {
  return (
    <div>
      {/* <div className={styles.container}> */}
      {/* <main className={styles.main}> */}
      <main>
        <SectionFeatures/>
        <SectionProyects/>
      </main>
    </div>
  );
}
