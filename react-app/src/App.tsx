import React from "react";
import RecipeReviewCard from "./components/Card"; // Import the RecipeReviewCard component

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let categories = ["Toast", "Breakfast Sandwhich", "Cafe Pizza"];

  return (
    <div>
      {/* Map through the categories array and render RecipeReviewCard for each category */}
      {categories.map((category, index) => (
        <RecipeReviewCard key={index} title={category} />
      ))}
    </div>
  );
}

export default App;
