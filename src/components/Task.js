import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)} // we used this to pass in the id of the task so it can be shown in the console
        />
      </h3>
      {/*
      * what this does is it prints the task.text and an icon to remove the
      task
      * what cursor: pointer does is it turn the cursor to a hand
      */}
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
