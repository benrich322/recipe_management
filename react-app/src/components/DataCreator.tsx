import {
  faBreadSlice,
  faFish,
  faJar,
  faJarWheat,
  faKitchenSet,
  faBottleDroplet,
  faPepperHot,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";
import CustomizedTooltips from "./Tooltips";

export function DataSmokedSalmon(name: string, image: string) {
  return {
    name,
    image,
    history: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough",
        conversion: <CustomizedTooltips/>,
      },
      {
        icon: faFish,
        ingredient: "Smoked Salmon",
        conversion: <CustomizedTooltips/>,
      },
      {
        icon: faJar,
        ingredient: "Pickle Onion",
        conversion: <CustomizedTooltips/>,
      },
      {
        icon: faJarWheat,
        ingredient: "Everything Spice",
        conversion: <CustomizedTooltips/>,
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit",
        conversion: <CustomizedTooltips/>,
      },
    ],
  };
}
export function DataBacon(name: string, image: string) {
  return {
    name,
    image,
    history: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough",
        conversion: 0.083,
      },
      {
        icon: faJar,
        ingredient: "Herby Mayo",
        conversion: 0.167,
      },
      {
        icon: faPepperHot,
        ingredient: "Banana Pepper Relish",
        conversion: 0.167,
      },
      {
        icon: faBacon,
        ingredient: "Bacon",
        conversion: 0.25,
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit",
        conversion: 0.167,
      },
    ],
  };
}

export function DataAvocado(name: string, image: string) {
  return {
    name,
    image,
    history: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough",
        conversion: 0.083,
      },
      {
        icon: faBottleDroplet,
        ingredient: "Olive Oil",
        conversion: 0.007,
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit",
        conversion: 0.167,
      },
    ],
  };
}
