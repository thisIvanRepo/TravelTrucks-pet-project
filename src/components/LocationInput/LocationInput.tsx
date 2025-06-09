type Props = {
  value: string;
  onChange: (value: string) => void;
  icon: { icon: string; label: string };
};

export default function LocationInput({ value, onChange, icon }: Props) {
  return (
    <label>
      Location
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img src={icon.icon} alt={icon.label} width={20} height={30} />
    </label>
  );
}
