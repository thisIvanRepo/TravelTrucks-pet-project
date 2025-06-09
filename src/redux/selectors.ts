import type { RootSate } from "./store";

export const filtersParams = (state: RootSate) => state.equipmentFilter;
export const trucks = (state: RootSate) => state.trucks;
