import React from "react";
import RecipeReviewCard from "./components/Card";
import AppBar from "./components/AppBar";
import { createData, toast } from "./components/DataCreator"; // Import createData function
import {
  faBowlRice,
  faBreadSlice,
  faBurger,
  faEgg,
  faLeaf,
  faMugHot,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

// You need to pass individual lists to createData
const { nameList, imageList, historyList } = toast;
const toastTable = createData(nameList, imageList, historyList);

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
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <AppBar />
            <RecipeReviewCard
              title="Toast"
              count={5}
              icon={faBreadSlice}
              data={toastTable} // Pass your dynamic data here
            />
            <RecipeReviewCard
              title="Cafe Sandwiches"
              count={5}
              icon={faBurger}
              data={toastTable} // Pass your dynamic data here
            />
    </div>
  );
}

export default App;
