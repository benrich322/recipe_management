import { useState } from "react";
import RecipeReviewCard from "./components/Card";
import AppBar from "./components/AppBar";
import {
  faBowlRice,
  faBreadSlice,
  faBurger,
  faEgg,
  faLeaf,
  faMugHot,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import {
  toast,
  cafeSandwiches,
  bagel,
  cafeSalad,
  cafeBowl,
  breakfastTacos,
  cafePizza,
  cafeCoffee,
} from "./components/Data";

type OpenStates = {
  toast: boolean;
  cafeSandwiches: boolean;
  cafeSalad: boolean;
  cafeBowl: boolean;
  cafeCoffee: boolean;
  cafePizza: boolean;
  bagel: boolean;
  breakfastTacos: boolean;
};

const App = () => {
  const [openStates, setOpenStates] = useState<OpenStates>({
    toast: false,
    cafeSandwiches: false,
    cafeSalad: false,
    cafeBowl: false,
    cafeCoffee: false,
    cafePizza: false,
    bagel: false,
    breakfastTacos: false,
  });

  type CardName = keyof OpenStates;

  const handleExpandClick = (cardName: CardName) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [cardName]: !prevState[cardName],
    }));
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <AppBar />
      <RecipeReviewCard
        title="Toast"
        count={toast.length}
        icon={faBreadSlice}
        data={toast}
        onClick={() => handleExpandClick("toast")}
        open={openStates["toast"]}
      />
      <RecipeReviewCard
        title="Cafe Sandwiches"
        count={cafeSandwiches.length}
        icon={faBurger}
        data={cafeSandwiches}
        onClick={() => handleExpandClick("cafeSandwiches")}
        open={openStates["cafeSandwiches"]}
      />
      <RecipeReviewCard
        title="Cafe Salads"
        count={cafeSalad.length}
        icon={faLeaf}
        data={cafeSalad}
        onClick={() => handleExpandClick("cafeSalad")}
        open={openStates["cafeSalad"]}
      />
      <RecipeReviewCard
        title="Cafe Bowls"
        count={cafeBowl.length}
        icon={faBowlRice}
        data={cafeBowl}
        onClick={() => handleExpandClick("cafeBowl")}
        open={openStates["cafeBowl"]}
      />
      <RecipeReviewCard
        title="Cafe Coffee"
        count={cafeCoffee.length}
        icon={faMugHot}
        data={cafeCoffee}
        onClick={() => handleExpandClick("cafeCoffee")}
        open={openStates["cafeCoffee"]}
      />
      <RecipeReviewCard
        title="Cafe Pizza"
        count={cafePizza.length}
        icon={faPizzaSlice}
        data={cafePizza}
        onClick={() => handleExpandClick("cafePizza")}
        open={openStates["cafePizza"]}
      />
      <RecipeReviewCard
        title="Bagel"
        count={bagel.length}
        icon={faBreadSlice}
        data={bagel}
        onClick={() => handleExpandClick("bagel")}
        open={openStates["bagel"]}
      />
      <RecipeReviewCard
        title="Breakfast Tacos"
        count={breakfastTacos.length}
        icon={faEgg}
        data={breakfastTacos}
        onClick={() => handleExpandClick("breakfastTacos")}
        open={openStates["breakfastTacos"]}
      />
    </div>
  );
};

export default App;
