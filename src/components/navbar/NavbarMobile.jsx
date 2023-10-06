import styles from "./Navbar.module.css";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import NavBarLinks from "./NavBarLinks";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <VscMenu
      className={styles.burger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeBurger = (
    <GrClose
      className={styles.burger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className={styles.mobile}>
      {open ? closeBurger : burgerIcon}
      {open && (
        <NavBarLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
};

export default NavbarMobile;
