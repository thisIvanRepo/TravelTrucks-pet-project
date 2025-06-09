import Location from "../assets/Location.svg";
import AC from "../assets/icons/filters/AC.svg";
import Automatic from "../assets/icons/filters/Automatic.svg";
import Bathroom from "../assets/icons/filters/Bathroom.svg";
import Kitchen from "../assets/icons/filters/Kitchen.svg";
import TV from "../assets/icons/filters/TV.svg";
import Van from "../assets/icons/types/Van.svg";
import FullyIntegrated from "../assets/icons/types/Fully_Integrated.svg";
import Alcove from "../assets/icons/types/Alcove.svg";

export const iconsMap: Record<string, { icon: string; label: string }> = {
  Location: { icon: Location, label: "Location" },
  AC: { icon: AC, label: "AC" },
  Automatic: { icon: Automatic, label: "Automatic" },
  Bathroom: { icon: Bathroom, label: "Bathroom" },
  Kitchen: { icon: Kitchen, label: "Kitchen" },
  TV: { icon: TV, label: "TV" },
  Van: { icon: Van, label: "Van" },
  FullyIntegrated: { icon: FullyIntegrated, label: "Fully Integrated" },
  Alcove: { icon: Alcove, label: "Alcove" },
};
