import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  //we are passing in the color and text prop from the parent component aka App.js
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#40E0D0",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
