import type { Camper } from "../../interface/camper";

interface propsTruckItem {
  truck: Camper;
}

export default function TrucksItem({ truck }: propsTruckItem) {
  return <p>{truck.id}</p>
}
