import { configureStore } from "@reduxjs/toolkit";
import equipmentFilterReducer from "./equipmentFilterSlice";
import trucksReducer from "./trucksSlise";

export const store = configureStore({
  reducer: {
    equipmentFilter: equipmentFilterReducer,
    trucks: trucksReducer,
  },
});

export type RootSate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
