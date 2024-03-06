import styles from "../Capsule/Capsule.module.css";

function Capsule({src, alt, name, className}) {
    return(
        <figure className={`${styles.capsule} ${className}`}>
            <img className={styles.capsuleImg} src={src} alt={alt} />
            <p>{name}</p>
        </figure>
    )
}

export default Capsule;