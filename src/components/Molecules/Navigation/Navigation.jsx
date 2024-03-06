import NavLink from "../../Atoms/NavLink/NavLink";
import styles from "../Navigation/Navigation.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane  } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <NavLink link="https://github.com/"  icon={faGithub} /> 
      <NavLink link="https://www.facebook.com/profile.php?id=100094671295507"  icon={faFacebook} /> 
      <NavLink link="https://www.linkedin.com/in/habib-maamar-benhadjar/"  icon={faLinkedin} /> 
      <NavLink link=""  icon={faPaperPlane } /> 
    </nav>
  );
};

export default Navigation;
