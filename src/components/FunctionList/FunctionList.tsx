import FunctionItem from "../FunctionItem/FunctionItem";
import style from "./FunctionList.module.scss";

type propCumper = {
  limit?: number;
  cumper: Record<string, boolean | string | []>;
};

export default function FunctionList({ limit, cumper }: propCumper) {
  const allowedKeys = [
    "TV",
    "Kitchen",
    "Bathroom",
    "AC",
    "Water",
    "Refrigerator",
    "Transmission",
    "Microwave",
  ];

  const filteredFunctions = allowedKeys
    .filter((key) => cumper[key] !== false)
    .map((key) => ({ label: key, value: cumper[key] as string | boolean }));

  const renderFunctions = filteredFunctions.slice(
    0,
    limit || filteredFunctions.length
  );

  return (
    <ul className={style.list}>
      {renderFunctions.map((item, index) => (
        <li key={index}>
          <FunctionItem future={item} />
        </li>
      ))}
    </ul>
  );
}
