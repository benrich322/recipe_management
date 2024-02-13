import React from "react";
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

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <AppBar />
      <RecipeReviewCard
        title="Toast"
        count={toast.length}
        icon={faBreadSlice}
        data={toast}
      />
      <RecipeReviewCard
        title="Cafe Sandwiches"
        count={cafeSandwiches.length}
        icon={faBurger}
        data={cafeSandwiches}
      />
      <RecipeReviewCard
        title="Cafe Salads"
        count={cafeSalad.length}
        icon={faLeaf}
        data={cafeSalad}
      />
      <RecipeReviewCard
        title="Cafe Bowls"
        count={cafeBowl.length}
        icon={faBowlRice}
        data={cafeBowl}
      />
      <RecipeReviewCard
        title="Cafe Coffee"
        count={cafeCoffee.length}
        icon={faMugHot}
        data={cafeCoffee}
      />
      <RecipeReviewCard
        title="Cafe Pizza"
        count={cafePizza.length}
        icon={faPizzaSlice}
        data={cafePizza}
      />
      <RecipeReviewCard
        title="Bagel"
        count={bagel.length}
        icon={faBreadSlice}
        data={bagel}
      />
      <RecipeReviewCard
        title="Breakfast Tacos"
        count={breakfastTacos.length}
        icon={faEgg}
        data={breakfastTacos}
      />
    </div>
  );
}

export default App;
