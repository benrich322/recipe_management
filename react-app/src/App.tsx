import RecipeReviewCard from "./components/Card";
import { faBreadSlice, faFish, faJar } from "@fortawesome/free-solid-svg-icons";

function App() {
  let categories = ["Toast", "Breakfast Sandwhich", "Cafe Pizza", "Cafe Salad"];
  let counts = [3, 2, 5, 3];
  let icons = [faBreadSlice, faFish, faJar, faFish];

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
