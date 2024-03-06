import { useState } from "react";
import Navigation from "../../Molecules/Navigation/Navigation";
import styles from "../Header/Header.module.css";

function Header() {
  const [active, setActive] = useState(null);

  return (
    <header>
      <section className={styles.titleSection}>
        <h1 className={styles.surnom}>H</h1>
        <section className={styles.liensHeader}>
          <a
            href="#"
            className={`${styles.redirection} ${
              active === "home" && styles.activeRedirection
            }`}
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`${styles.redirection} ${
              active === "Project" && styles.activeRedirection
            }`}
            onClick={() => setActive("Project")}
          >
            Project
          </a>
          <a
            href="#contact"
            className={`${styles.redirection} ${
              active === "Contact" && styles.activeRedirection
            }`}
            onClick={() => setActive("Contact")}
          >
            Contact
          </a>
        </section>
      </section>
      <Navigation />
    </header>
  );
}

export default Header;
