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
import {toast2} from "./components/Data";

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <AppBar />
      <RecipeReviewCard
        title="Toast"
        count={3}
        icon={faBreadSlice}
        data={toast2}
      />
      <RecipeReviewCard
        title="Cafe Sandwiches"
        count={2}
        icon={faBurger}
        data={toast2}
      />
      <RecipeReviewCard
        title="Cafe Salads"
        count={1}
        icon={faLeaf}
        data={toast2}
      />
      <RecipeReviewCard
        title="Cafe Bowls"
        count={1}
        icon={faBowlRice}
        data={toast2}
      />
      <RecipeReviewCard
        title="Cafe Coffee"
        count={1}
        icon={faMugHot}
        data={toast2}
      />
      <RecipeReviewCard
        title="Cafe Pizza"
        count={6}
        icon={faPizzaSlice}
        data={toast2}
      />
      <RecipeReviewCard
        title="Bagel"
        count={7}
        icon={faBreadSlice}
        data={toast2}
      />
      <RecipeReviewCard
        title="Breakfast Tacos"
        count={4}
        icon={faEgg}
        data={toast2}
      />
    </div>
  );
}

export default App;
