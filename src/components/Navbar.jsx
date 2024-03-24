/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";

import DarkMode from "./DarkMode";

function Navbar({ openSidebar }) {
  return (
    <header>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/meals">
              <FontAwesomeIcon icon={faUtensils} /> Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/cocktails">
              <FontAwesomeIcon icon={faMartiniGlassCitrus} /> Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faIdBadge} /> Contact
            </NavLink>
          </li>
          <DarkMode />
        </ul>
        <button className={styles.close} onClick={openSidebar}>
          <FaTimes />
        </button>
      </nav>
      <button className={styles.fabars} onClick={openSidebar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
