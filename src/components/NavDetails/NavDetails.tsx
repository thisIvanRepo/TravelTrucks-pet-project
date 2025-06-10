import { NavLink, useParams } from "react-router-dom";
import style from "./NavDetails.module.scss";

export default function NavDetails() {
  const { catalogId } = useParams();

  return (
    <ul className={style.navList}>
      <li className={style.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
          to={`/catalog/${catalogId}/futures`}
        >
          Feutures
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
          to={`/catalog/${catalogId}/revievs`}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
