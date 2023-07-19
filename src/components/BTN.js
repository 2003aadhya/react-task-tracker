import PropTypes from "prop-types";

const BTN = ({ color, text, onClick }) => {
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

BTN.defaultProps = {
  color: "steelblue",
};

BTN.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default BTN;
