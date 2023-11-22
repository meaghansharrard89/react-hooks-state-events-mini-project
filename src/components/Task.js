import React, {useState} from "react";

function Task( { text, category, handleDelete } ) {
  function handleClick(){
    handleDelete(text);
    console.log('I was clicked')
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
