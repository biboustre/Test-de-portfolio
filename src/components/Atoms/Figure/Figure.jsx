import styles from "../Figure/Figure.module.css";

function Figure({ src, alt }) {
  return (
    <figure className={styles.projets}>
      <img src={src} alt={alt} />
    </figure>
  );
}

export default Figure;
