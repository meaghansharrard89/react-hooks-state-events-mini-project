import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

// const [tasks, setTasks] = useState(TASKS)

// function handleDelete(taskText) {
//   setTasks(tasks.filter((task) => task,text !== taskText));
// }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} />
      <NewTaskForm CATEGORIES={CATEGORIES} />
      <TaskList TASKS={TASKS} />
    </div>
  );
}

export default App;
