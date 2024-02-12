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

export function createData(
  nameList: string[],
  imageList: string[],
  historyList: any[]
) {
  const dataList = [];
  for (let i = 0; i < nameList.length; i++) {
    const history = historyList[i].map((item: any) => ({
      ...item,
    }));

    dataList.push({
      name: nameList[i],
      image: imageList[i],
      history: history,
    });
  }
  return dataList;
}

const nameList = [
  "Smoked Salmon Avocado Toast",
  "Bacon Avocado Toast",
  "Avocado Toast",
];
const imageList = ["smoked_salmon.jpeg", "bacon.jpeg", "avocado.jpeg"];

const historyList = [
  [
    {
      icon: faBreadSlice,
      ingredient: "Sourdough",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faFish,
      ingredient: "Smoked Salmon",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faJar,
      ingredient: "Pickle Onion",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faJarWheat,
      ingredient: "Everything Spice",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faKitchenSet,
      ingredient: "Avocado Mash Kit",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
  ],
  [
    {
      icon: faBreadSlice,
      ingredient: "Sourdough",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faJar,
      ingredient: "Herby Mayo",
      conversion: 0.167,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faPepperHot,
      ingredient: "Banana Pepper Relish",
      conversion: 0.167,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faBacon,
      ingredient: "Bacon",
      conversion: 0.25,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faKitchenSet,
      ingredient: "Avocado Mash Kit",
      conversion: 0.167,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
  ],
  [
    {
      icon: faBreadSlice,
      ingredient: "Sourdough",
      conversion: 0.083,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faBottleDroplet,
      ingredient: "Olive Oil",
      conversion: 0.007,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
    {
      icon: faKitchenSet,
      ingredient: "Avocado Mash Kit",
      conversion: 0.167,
      detail: "1 loaf of sourdough can make 12 Salmon Avocado Toasts",
    },
  ],
];

export { nameList, imageList, historyList };
