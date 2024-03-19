import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

function App() {
  const me = "Sami";
  const is_me = true;
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  // fetchin the tasks from the DB
  useEffect(() => {
    // this is an anonymous function that will be called when the component is mounted
    const getTasks = async () => {
      const tasksfromDB = await fetchTasks();
      setTasks(tasksfromDB); // what this does is it takes the tasksfromDB and puts it in the tasks variable
    };
    getTasks();
  }, []);

  // what this does is it fetches the tasks from the DB
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // we need fetchTask instead of fetchTasks because we want to fetch a specific task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Task from DB
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    // we keept the line below to filter in the UI
    setTasks(tasks.filter((task) => task.id !== id)); //show the tasks that are not the id of the task that was clicked
  };

  // add task
  const addtask = async (task) => {
    // we added async to the function since we should await the fetch
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(task), // what this does is it takes the task object and converts it to JSON
      headers: {
        "Content-Type": "application/json", // what this does is it tells the server that the body is in JSON format
      },
    });
    const data = await res.json(); // what this does is it takes the response from the server and converts it to JSON
    setTasks([...tasks, data]); //what ...tasks does is it takes the tasks array and adds the task to it
  };

  // Togle Reminder
  const toggleReminder = async (id) => {
    const taskToRemind = await fetchTask(id); // what this does is it fetches the task from the DB and puts it in the taskToRemind variable
    const newTask = { ...taskToRemind, reminder: !taskToRemind.reminder }; // this will negate the reminder property of the task
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT", // since we are updating the task, we need to use PUT
      body: JSON.stringify(newTask), // what this does is it takes the task object and converts it to JSON
      headers: {
        "Content-Type": "application/json", // what this does is it tells the server that the body is in JSON format
      },
    });
    const data = await res.json(); // activate the res function
    setTasks(
      tasks.map(
        (task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task // we used data.reminder instead of task.reminder becuase we want to update the reminder property of the task
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
