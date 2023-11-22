import React, { useState } from "react";

function CategoryFilter( { CATEGORIES } ) {

  const [category, setCategory] = useState("");

  function handleClick() {
    setCategory('selected')
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => {
        <button onClick={handleClick} key={category}>{category}</button>
        console.log('I was clicked as a category')
      })
      }
    </div>
  );
}

export default CategoryFilter;
