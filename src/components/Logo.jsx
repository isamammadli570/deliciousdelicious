import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <img style={{ width: "70px" }} src="./images/délicieux.png" alt="" />
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <h1>Délicieux</h1>
      </NavLink>
    </div>
  );
}

export default Logo;
