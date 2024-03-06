import Navigation from "../../Molecules/Navigation/Navigation";
import styles from "../Header/Header.module.css";
import NavLink from "../../Atoms/NavLink/NavLink";


function Header() {
  return (
    <header>
      <section className={styles.titleSection}>
        <h1 className={styles.surnom}>H</h1>
        <NavLink className={styles.sectionPage} link="https://github.com/"  text="Home" /> 

      </section>
      <Navigation />
    </header>
  );
}

export default Header;
