import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavBarLinks = (props) => {
  // console.log(props);
  return (
    <div>
      <nav>
        <ul className={styles.navigation}>
          <Link
            to={"/"}
            className={styles.link1}
            style={{ textDecoration: "none", color: "black" }}
            onClick={ props.isMobile && props.closeMobileMenu}
          >
            <li>Inicio</li>
          </Link>
          <Link
            to={"/services"}
            className={styles.link1}
            style={{ textDecoration: "none", color: "black" }}
            onClick={ props.isMobile && props.closeMobileMenu}
          >
            <li>Servicios</li>
          </Link>
          <Link
            to={"/contact"}
            className={styles.link1}
            style={{ textDecoration: "none", color: "black" }}
            onClick={ props.isMobile && props.closeMobileMenu}
          >
            <li>Contacto</li>
          </Link>
          <Link
            to={"/about"}
            className={styles.link1}
            style={{ textDecoration: "none", color: "black" }}
            onClick={ props.isMobile && props.closeMobileMenu}
          >
            <li>Acerca de</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarLinks;
