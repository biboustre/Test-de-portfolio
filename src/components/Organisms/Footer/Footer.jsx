import styles from "../Footer/Footer.module.css";
import Yosemite from "../../../assets/images/img2.wallspic.com-yosemite_falls-tunnel_de_wawona-demi_dome-le_parc_national_de-death_valley_national_park-5242x3495.jpg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer id="contact">
      <main className={styles.mainFooter}>
        <section className={styles.identity}>
          <figure className={styles.imgIdentity}>
            <img src={Yosemite} alt="" />
          </figure>
          <aside className={styles.info}>
            <h1>MAAMAR BENHADJAR Habib</h1>
            <h2>Web Developer</h2>
            <hr className={styles.hrFooter} />
            <p>
              Formation développeur/Intégrateur web <br /> Openclassrooms
            </p>
          </aside>
        </section>
        <section className={styles.coordonnee}>
          <section>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={styles.iconFooter}
            />
            <h2 className={styles.mailNum}>biboustre@hotmail.com</h2>
          </section>
          <section>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.iconFooter} />
            <h2 className={styles.mailNum}>06-74-32-48-32</h2>
          </section>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
