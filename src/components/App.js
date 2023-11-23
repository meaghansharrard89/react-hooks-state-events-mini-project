import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All")
  
  function handleTaskFormSubmit(task) {
    setTasks([...tasks, task])
  }

  function handleCategoryFilter(selectedCategory) {
    setFilter(selectedCategory)
  }

  function isFiltered(item) {
    if (filter === "All") {
      return true
    } else {
      return item.category === filter
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks.filter(isFiltered)} setTasks={setTasks}/>
    </div>
  );
}

export default App;