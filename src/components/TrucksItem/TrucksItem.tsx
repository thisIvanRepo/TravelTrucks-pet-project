import { NavLink } from "react-router-dom";
import type { Camper } from "../../interface/camper";
import style from "./TrucksItem.module.scss";
import { iconsMap } from "../../constants/iconsMap";
import FunctionList from "../FunctionList/FunctionList";
import ButtonUseg from "../ButtonUseg/ButtonUseg";

interface propsTruckItem {
  truck: Camper;
}

export default function TrucksItem({ truck }: propsTruckItem) {
  return (
    <div className={style.cardCumper}>
      <div className={style.content}>
        <img
          className={style.imgTruck}
          width={292}
          height={320}
          src={truck.gallery[0].thumb}
        ></img>
        <div className={style.info}>
          <div className={style.textContent}>
            <div className={style.headerBlock}>
              <h2 className={style.title}>{truck.name}</h2>
              <div className={style.priceBlock}>
                <h2 className={style.price}>{`€${truck.price}`}</h2>
                <img
                  src={iconsMap["hard"].icon}
                  alt={iconsMap["hard"].label}
                  width={24}
                  height={21}
                />
              </div>
            </div>
            <div className={style.details}>
              <div className={style.revievsBlock}>
                <img
                  src={iconsMap["starFull"].icon}
                  alt={iconsMap["starFull"].label}
                  width={16}
                  height={16}
                ></img>
                <NavLink
                  className={style.linkRevievs}
                  to={`/catalog/${truck.id}/reviews`}
                >{`${truck.rating}(${truck.reviews.length} Reviews)`}</NavLink>
              </div>
              <div className={style.locationBlock}>
                <img
                  src={iconsMap["Location"].icon}
                  alt={iconsMap["Location"].label}
                  width={16}
                  height={16}
                />
                <p className={style.textLocation}>{truck.location}</p>
              </div>
            </div>
            <p className={style.supportText}>{truck.description}</p>
          </div>
          <div className={style.functions}>
            <FunctionList limit={4} cumper={truck} />
          </div>
          <ButtonUseg
            variant="contained"
            text="Show more"
            to={`/catalog/${truck.id}`}
          />
        </div>
      </div>
    </div>
  );
}
