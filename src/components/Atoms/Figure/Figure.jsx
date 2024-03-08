import styles from "../Figure/Figure.module.css";

function Figure({ src, alt, className }) {
  return (
    <figure className={`${styles.projets} ${className}`}>
      <img src={src} alt={alt} />
    </figure>
  );
}

export default Figure;
