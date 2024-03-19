import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

function App() {
  const me = "Sami";
  const is_me = true;
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "This is a task",
        day: "today",
        reminder: false,
      },
    ],
    []
  );

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); //show the tasks that are not the id of the task that was clicked
  };

  // add task
  const addtask = (task) => {
    // we are adding the task to the tasks array
    // we need an id to add the task to the array
    const id = tasks.length + 1;
    const newTask = { ...task, id }; // what this does is it takes the task object and adds the id to it
    setTasks([...tasks, newTask]); //what ...tasks does is it takes the tasks array and adds the task to it
    console.log(tasks);
  };

  // Togle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    // Classname should be the same as the class in the css file
    <div className="container">
      {/*what this does is it checks if the user is me and if so, it will display the name of theuser. If not, it will display "user".*/}
      <h2>Hello {is_me ? me : "user"}</h2>

      {/*what this does is toggle the showAddTask variable*/}
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      {/*what this does is add task*/}
      {showAddTask ? <AddTask onAdd={addtask} /> : null}
      {/*what this does is print tasks*/}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onReminder={toggleReminder}
        />
      ) : (
        <h3>No tasks yet</h3>
      )}
    </div>
  );
}

export default App;
