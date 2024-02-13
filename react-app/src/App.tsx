import React from "react";
import RecipeReviewCard from "./components/Card";
import AppBar from "./components/AppBar";
import { createData, toast } from "./components/DataCreator";
import {
  faBowlRice,
  faBreadSlice,
  faBurger,
  faEgg,
  faLeaf,
  faMugHot,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

const { nameList, imageList, historyList } = toast;
const toastTable = createData(nameList, imageList, historyList);

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <AppBar />
      <RecipeReviewCard
        title="Toast"
        count={3}
        icon={faBreadSlice}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Cafe Sandwiches"
        count={2}
        icon={faBurger}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Cafe Salads"
        count={1}
        icon={faLeaf}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Cafe Bowls"
        count={1}
        icon={faBowlRice}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Cafe Coffee"
        count={1}
        icon={faMugHot}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Cafe Pizza"
        count={6}
        icon={faPizzaSlice}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Bagel"
        count={7}
        icon={faBreadSlice}
        data={toastTable}
      />
      <RecipeReviewCard
        title="Breakfast Tacos"
        count={4}
        icon={faEgg}
        data={toastTable}
      />
    </div>
  );
}

export default App;
