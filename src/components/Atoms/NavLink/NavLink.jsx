import styles from "../../Organisms/Header/Header.module.css";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({link, img, text}) => {
    const location = useLocation();

    const active = location.pathname === link;
   
    return (
        <Link to={link} className={`${styles.liens_globale} ${active && styles.activeLink}`}>
            <p>{text}</p>
            <img src={img} alt="" />
        </Link>  
    )
}

export default NavLink;

