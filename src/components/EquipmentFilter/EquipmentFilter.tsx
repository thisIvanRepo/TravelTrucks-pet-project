import CustomChekbox from "../CustomChekbox/CustomChekbox";
import FiltresTitle from "../FiltersTitle/FiltresTitle";
import { iconsMap } from "../../constants/iconsMap";

type Props = {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export default function EquipmentFilter({
  options,
  selected,
  onToggle,
}: Props) {
  return (
    <>
      <FiltresTitle>Vehicle equipment</FiltresTitle>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <CustomChekbox
              onClick={() => onToggle(option)}
              active={selected.includes(option)}
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
