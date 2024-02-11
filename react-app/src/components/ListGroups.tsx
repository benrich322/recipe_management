// Import the useState hook from the React library
import { useState } from "react";

// Define the shape of the props that the ListGroup component expects
interface Props {
  items: string[]; // An array of strings representing items
  heading: string; // A string representing the heading of the list
  onSelectItem: (item: string) => void; // A function that accepts a string argument and returns void
}

// Define the ListGroup component
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Declare state variable selectedIndex and function setSelectedIndex to update it
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Define a function getMessage to conditionally render a message if no items are found
  const getMessage = () => {
    // If the items array is empty, render a paragraph element with the message
    return items.length === 0 && <p>No item found</p>;
  };

  // Render the JSX (UI) of the ListGroup component
  return (
    <>
      {/* Render the heading passed as props */}
      <h1>{heading}</h1>
      {/* Render a message if no items are found */}
      {getMessage()}
      {/* Render an unordered list with the class "list-group" */}
      <ul className="list-group">
        {/* Map over the items array to render list items */}
        {items.map((item, index) => (
          // Each list item has a dynamic class name based on whether it's selected
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // Set the key to the item to uniquely identify each list item
            key={item}
            // Attach an onClick event handler to update the selectedIndex and call onSelectItem
            onClick={() => {
              setSelectedIndex(index); // Update selectedIndex when the item is clicked
              onSelectItem(item); // Call onSelectItem function with the selected item
            }}
          >
            {/* Render the text content of the list item */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Export the ListGroup component as the default export of the module
export default ListGroup;