import styles from "./Navbar.module.css";
import logo from "../../assets/LOGO_FUNSOYEAA-sin_fondo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import NavbarMobile from "./NavbarMobile";
import Navegacion from "./Navegacion";
import ReactSwitch from "react-switch";


const NavBar = () => {
  const {theme, toogleTheme} = useContext(ThemeContext)

  const handleThemeChange = ()=>{
    toogleTheme()
  }
  return (
    <header className={styles.header_container}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="Not found" />
        </Link>
      </div>
      <Navegacion/>
      <NavbarMobile/>
      <div className={styles.principal_title}>
        <span>
          <ReactSwitch
          checked={theme === 'light'}
          onChange={handleThemeChange}
          />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
