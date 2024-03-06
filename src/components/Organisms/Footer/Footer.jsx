import styles from "../Footer/Footer.module.css";
import LogoImg from "../../../assets/images/logo-kasa.png"

function Footer () {
    return (
            <footer>
                <h1>Contact Me</h1>
                <h2>Avec joie</h2>
                <main className={styles.contactMe}>
                    <i>habib_MaamarBenhadjar@outlook.com</i>
                    <i></i>
                    <i></i>
                </main>
            </footer>
    )
}

export default Footer