/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import styles from "./ResponsiveSidebar.module.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./DarkMode";

function ResponsiveSidebar({ openSidebar }) {
  return (
    <>

      <div className={styles.responsive}>
      <h1>Delicieux</h1>

        <button className={styles.close} onClick={openSidebar}>
          <FaTimes />
        </button>
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
            <NavLink to="/login">
              <FontAwesomeIcon icon={faIdBadge} /> Login
            </NavLink>
          </li>
          <DarkMode />
        </ul>
      </div>
    </>
  );
}

export default ResponsiveSidebar;
