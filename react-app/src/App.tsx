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

function App() {
  let categories = [
    "Toast",
    "Cafe Sandwiches",
    "Cafe Salads",
    "Cafe Bowls",
    "Cafe Coffee",
    "Cafe Pizza",
    "Bagel",
    "Breakfast Tacos",
  ];
  let counts = [3, 2, 1, 1, 1, 6, 7, 4];
  let icons = [
    faBreadSlice,
    faBurger,
    faLeaf,
    faBowlRice,
    faMugHot,
    faPizzaSlice,
    faBreadSlice,
    faEgg,
  ];

  return (
    <div>
      <AppBar />
      {categories.map((category, index) => (
        <div key={index}>
          <RecipeReviewCard
            key={index}
            title={category}
            count={counts[index]}
            icon={icons[index]}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
