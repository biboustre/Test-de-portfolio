import NavLink from "../../Atoms/NavLink/NavLink";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav>
      <NavLink link="https://github.com/" text="cacao" />
      {/* <FontAwesomeIcon icon={faGithub}/> */}
      
    </nav>
  );
};

export default Navigation;
