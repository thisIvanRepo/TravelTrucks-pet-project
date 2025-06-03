import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.active}` : style.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.active}` : style.navLink
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
