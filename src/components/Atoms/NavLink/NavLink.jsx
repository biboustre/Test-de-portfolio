import styles from "../NavLink/NavLink.module.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavLink = ({link, icon, text}) => {
    const location = useLocation();

    const active = location.pathname === link;
   
    return (
        <Link to={link} className={`${styles.liens_globale} ${active && styles.activeLink}`}>
            <p>{text}</p>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
        </Link>  
    )
}

export default NavLink;

