import React from "react";
import Task from "./Task";

function TaskList( { tasks, setTasks } ) {

  function handleDelete(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => <Task {...task} key={index} handleDelete={handleDelete} />)}
    </div>
  );
}

export default TaskList;
