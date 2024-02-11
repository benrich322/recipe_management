import React from 'react';
import ListGroup from "./components/ListGroups";
import RecipeReviewCard from "./components/Card"; // Import the RecipeReviewCard component

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let items = ["New York", "San Francisco", "Tokyo", "London"];
  let names = ["Ben", "Jenna", "Darrel", "Brad"];
  let sports = ["Basketball", "Baseball"];

  return (
    <div>      
      {/* Render the RecipeReviewCard component */}
      <RecipeReviewCard />
    </div>
  );
}

export default App;

