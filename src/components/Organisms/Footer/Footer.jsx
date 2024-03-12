import styles from "../Footer/Footer.module.css";
import Yosemite from "../../../assets/images/img2.wallspic.com-yosemite_falls-tunnel_de_wawona-demi_dome-le_parc_national_de-death_valley_national_park-5242x3495.jpg"

function Footer() {
  return (
    <footer>
      <main className={styles.mainFooter}>
        <section className={styles.identity}>
            <figure className={styles.imgIdentity}>
                <img src={Yosemite} alt="" />
            </figure>
            <aside style={styles.nameFooter}>
                <h1>MAAMAR BENHADJAR Habib</h1>
                <h2>Web Developer</h2>
                <hr />

            </aside>
        </section>
        <section className={styles.coordonnee}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
