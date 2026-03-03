import { useState, useEffect } from "react";
import { TaskInput } from "./componets/TaskInput";
import { TaskItem } from "./componets/TaskItem";

let nextId = 2;

const initialTasks = [
  { id: 0, title: "Learn React", completed: false },
  { id: 1, title: "Learn Python", completed: false }
];

function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return initialTasks;
});
  const [newTaskTitle, setNewTaskTitle] = useState("");
  
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  function handleAddTask() {
    if (newTaskTitle.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nextId++,
        title: newTaskTitle,
        completed: false
      }
    ]);

    setNewTaskTitle("");
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  }

  function handleToggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId? { ...task, completed: !task.completed }: task
      )
    );
  }

  function handleUpdateTask(taskId,newTaskTitle){
    setTasks(prevTasks=>
      prevTasks.map(task=>
        taskId==task.id?{...task,title:newTaskTitle}:task
      )
    )
  }

  return (
    <div>
      <h1>Smart Task Manager</h1>

      <TaskInput
        inputValue={newTaskTitle}
        onInputChange={(e) => setNewTaskTitle(e.target.value)}
        onAddTask={handleAddTask}
      />

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id}
           task={task} 
           onItemChange={() => handleToggleTask(task.id)} 
          ondelete={()=>handleDeleteTask(task.id)}
          onUpdate={handleUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;