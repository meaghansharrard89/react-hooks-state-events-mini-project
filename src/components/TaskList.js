import React, { useState } from "react";
import Task from "./Task";

function TaskList( { TASKS, handleDelete } ) {

// const [tasks, setTasks] = useState(TASKS)

// function handleDelete(taskText) {
//   setTasks(tasks.filter((task) => task.text !== taskText));
// }

  return (
    <div className="tasks">
      {TASKS.map((task, index) => <Task {...task} key={index} handleDelete={handleDelete} />)}
    </div>
  );
}

export default TaskList;
