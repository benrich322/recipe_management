import RecipeReviewCard from "./components/Card";
import {
  faBowlRice,
  faBreadSlice,
  faBurger,
  faEgg,
  faFish,
  faJar,
  faLeaf,
  faMugHot,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  let categories = [
    "Toast",
    "Cafe Sandwhiches",
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
      {categories.map((category, index) => (
        <RecipeReviewCard
          key={index}
          title={category}
          count={counts[index]}
          icon={icons[index]}
        />
      ))}
    </div>
  );
}

export default App;
