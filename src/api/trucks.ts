import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const apiTrucks = axios.create({
  baseURL: BASE_URL,
});

interface Filters {
  location: string;
  selectedEquipment: string[];
  type: string;
}

export const getTrucks = async (filters: Filters) => {
  const params = new URLSearchParams();

  if (filters.location) {
    params.append("location", filters.location);
  }

  if (filters.selectedEquipment.length > 0) {
    filters.selectedEquipment.forEach((option) => {
      switch (option) {
        case "Automatic":
          params.append("transmission", "automatic");
          break;
        case "TV":
        case "AC":
          params.append(option, "true");
          break;
        default:
          params.append(option.toLowerCase(), "true");
          break;
      }
    });
  }

  if (filters.type) {
    params.append("form", filters.type);
  }

  try {
    const response = await apiTrucks.get(`?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrucksDetails = async (id) => {
  const params = new URLSearchParams();
  params.append("id", id);

  try {
    const response = await apiTrucks.get(`?${params.toString()}`);
    return response.data.items[0];
  } catch (error) {
    console.log(error);
  }
};
