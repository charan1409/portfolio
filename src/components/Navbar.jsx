import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const displayPage = useLocation();
  return (
    <div className={styles.navBar}>
      <Link
        to="/"
        className={`${styles.navItem} ${
          displayPage.pathname === "/" ? styles.navItemActive : ""
        }`}
      >
        Resume
      </Link>
      <Link
        to="/projects"
        className={`${styles.navItem} ${
          displayPage.pathname === "/projects" ? styles.navItemActive : ""
        }`}
      >
        Projects
      </Link>
      {/* <Link
        to="/contact"
        className={`${styles.navItem} ${
          displayPage.pathname === "/contact" ? styles.navItemActive : ""
        }`}
      >
        Contact
      </Link> */}
    </div>
  );
}
export default Navbar;
