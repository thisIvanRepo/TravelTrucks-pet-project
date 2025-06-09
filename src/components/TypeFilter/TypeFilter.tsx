import CustomChekbox from "../CustomChekbox/CustomChekbox";
import FiltresTitle from "../FiltersTitle/FiltresTitle";
import { iconsMap } from "../../constants/iconsMap";
import style from "./TypeFilter.module.scss";

type Props = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function TypeFilter({ options, selected, onSelect }: Props) {
  return (
    <>
      <FiltresTitle>Vehicle type</FiltresTitle>
      <ul className={style.list}>
        {options.map((option) => (
          <li key={option}>
            <CustomChekbox
              onClick={() => onSelect(iconsMap[option].label)}
              active={selected === iconsMap[option].label}
            >
              <img
                src={iconsMap[option].icon}
                alt={option}
                width={27}
                height={32}
              />
              {iconsMap[option].label}
            </CustomChekbox>
          </li>
        ))}
      </ul>
    </>
  );
}
