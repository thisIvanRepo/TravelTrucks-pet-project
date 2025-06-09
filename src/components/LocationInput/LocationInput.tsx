import style from "./LocationInput.module.scss";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: { icon: string; label: string };
};

export default function LocationInput({ value, onChange, icon }: Props) {
  return (
    <label className={style.label}>
      Location
      <input
        placeholder="City"
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
      <img
        className={style.img}
        src={icon.icon}
        alt={icon.label}
        width={20}
        height={30}
      />
    </label>
  );
}
