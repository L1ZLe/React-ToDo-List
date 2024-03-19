import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ showAddTask, setShowAddTask }) => {
  // we can do props or ({ showAddTask, setShowAddTask }) instead of (props) to pass in the title prop
  //we are passing in the showAddTask, setShowAddTask props from the parent component aka App.js
  //defining a function that will be called when the button is clicked
  return (
    // *what this does is align "This Is Your To Do List" with the button
    <header className="header">
      {" "}
      <h3>This Is Your To Do List</h3>
      <Button
        color="green"
        text={showAddTask ? "Close" : "Add Tasks"}
        onClick={() => setShowAddTask(!showAddTask)}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "default title",
};

Header.propTypes = {
  title: propTypes.string,
};

export default Header;
