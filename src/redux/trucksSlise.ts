import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "../api/trucks";

interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;

  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  gallery: {
    thumb: string;
    original: string;
  }[];

  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}

interface selectedTrucksState {
  items: Camper[];
  loading: boolean;
  error: string | null;
}

interface Filters {
  location: string;
  selectedEquipment: string[];
  type: string;
}

export const fetchTrucks = createAsyncThunk<Camper[], Filters>(
  "trucks/fetchTrucks",
  async (filters) => {
    const data = await getTrucks(filters);
    return data;
  }
);

const initialState: selectedTrucksState = {
  items: [],
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
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default truckSlice.reducer;
