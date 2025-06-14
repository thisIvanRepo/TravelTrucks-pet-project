import { useDispatch, useSelector } from "react-redux";
import {
  toggleEquipment,
  toggleLocation,
  toggleType,
} from "../../redux/equipmentFilterSlice";
import style from "./FilterForm.module.scss";
import { iconsMap } from "../../constants/iconsMap";

import LocationInput from "../LocationInput/LocationInput";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import ButtonUseg from "../ButtonUseg/ButtonUseg";
import { filtersParams } from "../../redux/selectors";
import { fetchTrucks } from "../../redux/trucksSlise";
import type { AppDispatch } from "../../redux/store";

const equipmentOptions = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
const typeOptions = ["Van", "FullyIntegrated", "Alcove"];

export default function FilterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { location, selectedEquipment, type } = useSelector(filtersParams);

  const handleSubmit = () => {
    dispatch(fetchTrucks({ location, selectedEquipment, type }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(toggleLocation(newValue));
  };

  const handleEquipmentToggle = (value: string) => {
    dispatch(toggleEquipment(value));
  };

  const handleTypeChange = (value: string) => {
    dispatch(toggleType(value));
  };

  return (
    <form className={style.form}>
      <LocationInput
        value={location}
        onChange={handleLocationChange}
        icon={iconsMap["Location"]}
      />

      <div className={style.filtres}>
        <p style={{ marginBottom: "32px" }}>Filters</p>
        <EquipmentFilter
          options={equipmentOptions}
          selected={selectedEquipment}
          onToggle={handleEquipmentToggle}
        />

        <TypeFilter
          options={typeOptions}
          selected={type}
          onSelect={handleTypeChange}
        />
      </div>

      <ButtonUseg text="Search" variant="contained" onClick={handleSubmit} />
    </form>
  );
}
