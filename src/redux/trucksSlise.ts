import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "../api/trucks";
import type { Camper } from "../interface/camper";

interface selectedTrucksState {
  total: number;
  cumpers: Camper[];
  loading: boolean;
  error: string | null;
}

interface Filters {
  location: string;
  selectedEquipment: string[];
  type: string;
}

export const fetchTrucks = createAsyncThunk<
  { items: Camper[]; total: number },
  Filters
>("trucks/fetchTrucks", async (filters) => {
  const data = await getTrucks(filters);
  return data;
});

const initialState: selectedTrucksState = {
  total: 0,
  cumpers: [],
  loading: false,
  error: null,
};

const truckSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.cumpers = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default truckSlice.reducer;
