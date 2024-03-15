import styles from "../Figure/Figure.module.css";

function Figure({ src, alt, className, text }) {
  return (
    <figure className={`${styles.projets} ${className}`}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </figure>
  );
}

export default Figure;
