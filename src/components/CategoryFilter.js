import React, { useState } from "react";

function CategoryFilter( { categories, handleCategoryFilter } ) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(clickedCategory) {
    setSelectedCategory(clickedCategory)
    handleCategoryFilter(clickedCategory)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
        onClick={() =>
          handleClick(category)
        }     
        key={category}
        className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
        ))}
    </div>
  );
}

export default CategoryFilter;
