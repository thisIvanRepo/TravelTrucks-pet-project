import type { ReactNode } from "react";
import style from "./Hero.module.scss";

type HeroProp = {
  children: ReactNode;
};

export default function Hero({ children }: HeroProp) {
  return (
    <div className={style.containerHero}>
      <h1 className={style.titleHero}>Campers of your dreams</h1>
      <h2 className={style.smalTextTitle}>
        You can find everything you want in our catalog
      </h2>
      {children}
    </div>
  );
}
