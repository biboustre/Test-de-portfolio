import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
import Figure from "../../components/Atoms/Figure/Figure";
import Capsule from "../../components/Atoms/Capsule/Capsule";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";

// import BannerImg from "../../assets/images/IMG.jpg";

function Accueil() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Détecter lorsque 50% de l'élément est visible
    triggerOnce: true, // Détecter une seule fois lorsque l'élément devient visible
  });

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
            <Capsule className={styles.capsule1}/>
            <Capsule className={styles.capsule2}/>
            <Capsule className={styles.capsule3}/>
            <Capsule className={styles.capsule4}/>
            <Capsule className={styles.capsule5}/>
          </section>
        </section>

        <section id="projects" className={styles.mainFigure}>
          <h1>Mes travaux récents</h1>
          <section className={styles.portfolioProject}>
            <Figure />
            <Figure />
            <Figure />
            <Figure />
          </section>
        </section>
      </main>
    </Template>
  );
}

export default Accueil;
