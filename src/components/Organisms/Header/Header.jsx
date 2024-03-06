import Navigation from "../../Molecules/Navigation/Navigation";
import styles from "../Header/Header.module.css";


function Header() {

  return (
      <header>
        <h1 className={styles.surnom}>HABIBOU</h1>
        <Navigation />
      </header>
  
  );
}

export default Header;




