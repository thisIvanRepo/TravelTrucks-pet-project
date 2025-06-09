import { createSlice } from "@reduxjs/toolkit";

interface EquipmentFilterState {
  location: string;
  selectedEquipment: string[];
  type: string;
}

const initialState: EquipmentFilterState = {
  location: "",
  selectedEquipment: [],
  type: "",
};

const equipmentFilterSlice = createSlice({
  name: "equipmentFilter",
  initialState,
  reducers: {
    toggleEquipment(state, action) {
      const value = action.payload;
      if (state.selectedEquipment.includes(value)) {
        state.selectedEquipment = state.selectedEquipment.filter(
          (item) => item !== value
        );
      } else {
        state.selectedEquipment.push(value);
      }
    },
    clearEquipment(state) {
      state.selectedEquipment = [];
    },
    toggleLocation(state, action) {
      state.location = action.payload;
    },
    toggleType(state, action) {
      state.type = state.type === action.payload ? "" : action.payload;
    },
  },
});

export const { toggleEquipment, clearEquipment, toggleLocation, toggleType } =
  equipmentFilterSlice.actions;
export default equipmentFilterSlice.reducer;
