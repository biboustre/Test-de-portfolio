import styles from "../Capsule/Capsule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Capsule({ name, className, icon, text }) {
  return (
    <figure className={`${styles.capsule} ${className}`}>
      <FontAwesomeIcon icon={icon} className={styles.iconCapsules} />
      <section className={styles.details}>
        <h1>{name}</h1>
        <p>{text}</p>
      </section>
    </figure>
  );
}

export default Capsule;
