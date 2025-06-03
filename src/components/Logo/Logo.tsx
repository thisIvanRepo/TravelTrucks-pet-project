import { NavLink } from "react-router-dom";
import style from "./Logo.module.scss";

export default function Logo() {
  return (
    <NavLink to="/" className={style.logo}>
      Travel<span className={style.logoSpan}>Trucks</span>
    </NavLink>
  );
}
