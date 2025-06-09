import { Link } from "react-router-dom";
import type { Camper } from "../../interface/camper";
import style from "./TrucksItem.module.scss";
import { iconsMap } from "../../constants/iconsMap";
import FunctionList from "../FunctionList/FunctionList";

interface propsTruckItem {
  truck: Camper;
}

export default function TrucksItem({ truck }: propsTruckItem) {
  return (
    <div className={style.cardCumper}>
      <div className={style.content}>
        <img className={style.img}></img>
        <div className={style.info}>
          <div className={style.textContent}>
            <h2 className={style.title}>{truck.name}</h2>
            <div className={style.priceBlock}>
              <h2 className={style.price}>{truck.price}</h2>
              <img className={style.hard} src={truck.gallery[0].thumb} />
            </div>
            <div className={style.details}>
              <div className={style.revievsBlock}>
                <img className={style.star}></img>
                <Link to="/revievs" />
              </div>
              <div className={style.locationBlock}>
                <img
                  className={style.img}
                  src={iconsMap["Location"].icon}
                  alt={iconsMap["Location"].label}
                  width={16}
                  height={16}
                />
                <p>{truck.location}</p>
              </div>
            </div>
            <p className={style.supportText}>{truck.description}</p>
          </div>
          <div className={style.functions}>
            <FunctionList
              functions={[
                truck.AC,
                truck.transmission,
                truck.kitchen,
                truck.engine,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
