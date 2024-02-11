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
        conversion: "Customized Tooltips",
      },
      {
        icon: faFish,
        ingredient: "Smoked Salmon",
        conversion: 0.25,
      },
      {
        icon: faJar,
        ingredient: "Pickle Onion",
        conversion: 0.083,
      },
      {
        icon: faJarWheat,
        ingredient: "Everything Spice",
        conversion: 0.043,
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit",
        conversion: 0.167,
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
