import React, { useState } from "react";

function NewTaskForm( { CATEGORIES } ) {

const [newForm, setNewForm] = useState("");

function handleSubmit(e){
  e.preventDefault();
  console.log('I was submitted');
}

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {CATEGORIES.map((category) => {
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
