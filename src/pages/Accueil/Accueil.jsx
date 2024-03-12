import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
import Figure from "../../components/Atoms/Figure/Figure";
import Capsule from "../../components/Atoms/Capsule/Capsule";
// import { useInView } from "react-intersection-observer";
// import React, { useEffect } from "react";

function Accueil() {

  return (
    <Template>
      <section className={styles.presentation}>
        <section className={styles.mainPresentation}>
          <h1>MAAMAR BENHADJAR Habib</h1>
          <h2>Web</h2>
          <h3>Developer</h3>
        </section>
      </section>

      <main className={styles.mainAccueil}>
        <section className={styles.mainSkills}>
          <section className={styles.titleSkills}>
            <h1>Skills</h1>
            <h2>MY SKILLS</h2>
          </section>
          <section className={styles.mainCapsule}>
            <Capsule className={styles.capsule1} />
            <Capsule className={styles.capsule2} />
            <Capsule className={styles.capsule3} />
            <Capsule className={styles.capsule4} />
            <Capsule className={styles.capsule5} />
          </section>
        </section>

        <section id="projects" className={styles.portfolioProject}>
          <section className={styles.titleProjects}>
            <h1>Projects</h1>
            <h2>MY CREATION</h2>
          </section>
          <section className={styles.mainProjects}>
            <Figure className={styles.fig1} />
            <Figure className={styles.fig2} />
            <Figure className={styles.fig3} />
            <Figure className={styles.fig4} />
          </section>
        </section>
      </main>
    </Template>
  );
}

export default Accueil;

