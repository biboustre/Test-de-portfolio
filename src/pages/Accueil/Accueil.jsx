// import { Link } from "react-router-dom";
import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
// import Banner from "../../components/Molecules/Banner/Banner";
// import BannerImg from "../../assets/images/IMG.jpg";

function Accueil() {
  return (
    <Template>
      {/* <Banner
        name="MAAMAR"
        prenom="Habib"
        job="developpeur Front-End"
        description="Autodidacte de 29 ans, je suis passionné par le développement web, l'UI/UX et l'accessibilité depuis 3 ans."
        lien="Contact"
        lien2="GitHub"
      /> */}
      <section className={styles.presentation}>
        <h1>MAAMAR BENHADJAR</h1>
        <h2>Habib</h2>
        <h3>Développeur web</h3>
        <p></p>
      </section>

      <main className={styles.mainAccueil}>
        <h1>Mes travaux récents</h1>
        <section>
          <figure className={`${styles.projets} ${styles.projet1}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet2}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet3}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet4}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet5}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet6}`}>
            <img src="" alt="" />
          </figure>
          <figure className={`${styles.projets} ${styles.projet7}`}>
            <img src="" alt="" />
          </figure>
        </section>
      </main>
    </Template>
  );
}

export default Accueil;
