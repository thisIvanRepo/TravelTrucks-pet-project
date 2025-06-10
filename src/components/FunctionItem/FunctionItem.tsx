import { iconsMap } from "../../constants/iconsMap";
import style from "./FunctionItem.module.scss";

type propsFunction = {
  future: { label: string; value: string | boolean };
};

export default function FunctionItem({ future }: propsFunction) {
  const iconData = iconsMap[future.label];
  if (!iconData) return null;

  return (
    <div className={style.function}>
      <img src={iconData.icon} alt={future.label} width={20} height={15} />
      <p className={style.text}>{future.label}</p>
    </div>
  );
}
