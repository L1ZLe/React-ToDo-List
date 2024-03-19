import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter a task");
    onAdd({ text: name, day: date, reminder });
    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Enter a task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>{" "}
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Enter a date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>{" "}
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>{" "}
      <input className="btn btn-block" type="submit" value="Add Task" />
    </form>
  );
};

export default AddTask;
