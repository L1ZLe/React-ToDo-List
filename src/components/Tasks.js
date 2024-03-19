import Task from "./Task";

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {/*what this does is it prints the tasks array from the tasks variable*/}
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
