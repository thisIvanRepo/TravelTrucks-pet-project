import { NavLink } from "react-router-dom";
import style from "./NavDetails.module.scss";

export default function NavDetails() {
  return (
    <ul className={style.navList}>
      <li className={style.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
          to={`futures`}
        >
          Feutures
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
          to={`revievs`}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
