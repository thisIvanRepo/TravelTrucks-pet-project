import { configureStore } from "@reduxjs/toolkit";
import equipmentFilterReducer from "./equipmentFilterSlice";

export const store = configureStore({
  reducer: {
    equipmentFilter: equipmentFilterReducer,
  },
});

export type RootSate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
