import Footer from "../Organisms/Footer/Footer";
import Header from "../Organisms/Header/Header";
import styles from "../Templates/Template.module.css";
import PropTypes from "prop-types";

const Template = ({ children }) => {
  return (
    <>
    <body className={styles.body}>
    </body>
      <main className={styles.mainBackground}>
        <Header />
        <main className="mainTemplate">{children}</main>
        <Footer />
      </main>
    </>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
