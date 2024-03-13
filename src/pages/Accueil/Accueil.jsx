import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
import Figure from "../../components/Atoms/Figure/Figure";
import Capsule from "../../components/Atoms/Capsule/Capsule";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import projet6 from "../../assets/images/Capture d'écran 2024-03-13 144209.png";
import P11 from "../../assets/images/Capture d'écran 2024-03-13 151704.png";
import P4 from "../../assets/images/Capture d'écran 2024-03-13 151406.png";
import P8 from "../../assets/images/Capture d'écran 2024-03-13 143917.png";
import NavLink from "../../components/Atoms/NavLink/NavLink";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <section className={styles.mainSkills}>
          <section className={styles.titleSkills}>
            <h1>Skills</h1>
            <h2>MY SKILLS</h2>
          </section>
          <section className={styles.mainCapsule}>
            <Capsule
              icon={faReact}
              name="React js"
              text="Du text pour tester"
              className={styles.capsule1}
            />
            <Capsule
              name="Redux-Toolkit"
              text="Du text pour tester"
              className={styles.capsule2}
            />
            <Capsule
              icon={faGithub}
              name="SEO"
              text="Du text pour tester"
              className={styles.capsule3}
            />
            <Capsule
              icon={faFigma}
              name="Figma"
              text="Du text pour tester"
              className={styles.capsule4}
            />
            <Capsule
              icon={faSass}
              name="SASS/SCSS"
              text="Du text pour tester"
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
              to="https://github.com/biboustre/Projet_6"
              className={styles.linkFigures}
            >
              <Figure src={projet6} className={styles.fig1} />
            </Link>
            <Link to="">
              <Figure src={P11} className={styles.fig2} />
            </Link>
            <Figure src={P4} className={styles.fig3} />
            <Figure src={P8} className={styles.fig4} />
          </section>
        </section>
      </main>
      <hr className={styles.hrAccueil} />
    </Template>
  );
}

export default Accueil;
