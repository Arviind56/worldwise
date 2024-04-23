import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/pricing">pricing </NavLink>
          </li>
          <li>
            <NavLink to="/product">Products </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
