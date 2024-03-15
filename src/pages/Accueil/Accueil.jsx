import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
import Figure from "../../components/Atoms/Figure/Figure";
import Capsule from "../../components/Atoms/Capsule/Capsule";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import projet6 from "../../assets/images/Capture d'écran 2024-03-14 011406.png";
import P10 from "../../assets/images/Capture d'écran 2024-03-15 024541.png";
import P4 from "../../assets/images/Capture d'écran 2024-03-13 143917.png";
import P8 from "../../assets/images/Capture d'écran 2024-03-13 151406.png";
import { Link } from "react-router-dom";

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
      <hr className={styles.hrAccueil} />
      <main className={styles.mainAccueil}>
        <section id="skills" className={styles.mainSkills}>
          <section className={styles.titleSkills}>
            <h1>Skills</h1>
            <h2>MY SKILLS</h2>
          </section>
          <section className={styles.mainCapsule}>
            <Capsule
              icon={faReact}
              name="React js"
              className={styles.capsule1}
            />
            <Capsule name="Redux-Toolkit" className={styles.capsule2} />
            <Capsule icon={faGithub} name="SEO" className={styles.capsule3} />
            <Capsule icon={faFigma} name="Figma" className={styles.capsule4} />
            <Capsule
              icon={faSass}
              name="SASS/SCSS"
              className={styles.capsule5}
            />
          </section>
        </section>
        <hr className={styles.hrAccueil} />
        <section id="projects" className={styles.portfolioProject}>
          <section className={styles.titleProjects}>
            <h1>Projects</h1>
            <h2>MY CREATION</h2>
          </section>
          <section className={styles.mainProjects}>
            <Link
              className={styles.linkFigure}
              to="https://github.com/biboustre/Projet_6"
            >
              <Figure
                src={projet6}
                className={styles.fig1}
                text="Portfolio d'une architecte d'intérieur en JavaScript Vanilla avec la possibilité de se connecter pour pouvoir ajouter et supprimer des travaux."
              />
            </Link>
            <Link className={styles.linkFigure} to="https://github.com/biboustre/Projet_10_Debug">
              <Figure
                src={P10}
                className={styles.fig2}
                text="Débuggage du site d'une agence d'événementiel à l'aide de test unitaires/fonctionnels et des chrome DevTools"
              />
            </Link>
            <Link
              className={styles.linkFigure}
              to="https://github.com/biboustre/Projet_4"
            >
              <Figure
                src={P4}
                className={styles.fig3}
                text="Application web réalisée en mobile-first avec Sass, qui contient plusieurs animations et répertorie les menus de restaurants gastronomiques."
              />
            </Link>
            <Link
              className={styles.linkFigure}
              to="https://github.com/biboustre/Projet-8-Kasa"
            >
              <Figure
                src={P8}
                className={styles.fig4}
                text="Création d'une application web de location immobilière avec React et React Router."
              />
            </Link>
          </section>
        </section>
      </main>
      <hr className={styles.hrAccueil} />
    </Template>
  );
}

export default Accueil;
