import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit } ) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e){
    e.preventDefault();
  //create a new task object using the text and category state vars
    const newTask = {
      text: text,
      category: category
    }

    console.log(newTask)
  //Call the callback prop with the new task object
    onTaskFormSubmit(newTask)
    setText("")
    setCategory("")
}

  // Update the state variables as the user types
    function handleTextChange(e) {
      setText(e.target.value)
    }

    function handleCategoryChange(e) {
      setCategory(e.target.value)
    }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange} >
          {categories.map((category) => {
              if (category !== 'All') {
                return <option key={category}>{category}</option>
              } else {
                return null;
              }
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

/*In this updated code, we've added state variables text and category using the useState hook. We've also added two new event handlers, handleTextChange and handleCategoryChange, to update the state variables as the user types.

The value prop of the input and select elements is set to the corresponding state variable, and the onChange prop is set to the respective event handler functions.

Give this a try and see if it works for you. Let me know if you have any questions or if you encounter any issues.*/