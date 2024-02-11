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

export function createData(
  nameList: string[],
  imageList: string[],
  historyList: any[]
) {
  const dataList = [];
  for (let i = 0; i < nameList.length; i++) {
    const history = historyList[i].map((item: any) => ({
      ...item,
      conversion:
        typeof item.conversion === "string" ? (
          <CustomizedTooltips />
        ) : (
          item.conversion
        ),
    }));

    dataList.push({
      name: nameList[i],
      image: imageList[i],
      history: history,
    });
  }
  return dataList;
}

const nameList = ["Smoked Salmon Avocado Toast", "Bacon Avocado Toast", "Avocado Toast","Test"];
const imageList = ["smoked_salmon.jpeg", "bacon.jpeg", "avocado.jpeg","avocado.jpeg"];


const historyList = [
  [
    {
      icon: faBreadSlice,
      ingredient: "Sourdough",
      conversion: <CustomizedTooltips />,
    },
    {
      icon: faFish,
      ingredient: "Smoked Salmon",
      conversion: <CustomizedTooltips />,
    },
    {
      icon: faJar,
      ingredient: "Pickle Onion",
      conversion: <CustomizedTooltips />,
    },
    {
      icon: faJarWheat,
      ingredient: "Everything Spice",
      conversion: <CustomizedTooltips />,
    },
    {
      icon: faKitchenSet,
      ingredient: "Avocado Mash Kit",
      conversion: <CustomizedTooltips />,
    },
  ],
  [
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
  [
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
  [
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
];

export { nameList, imageList, historyList };
