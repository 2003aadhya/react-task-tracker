import PropTypes from "prop-types";
import BTN from "./BTN";
const Header = ({ title ,onAdd,showAdd}) => {
 
  return (
    <header className="header">
      <h1>{title}</h1>
      <BTN color={showAdd?'red':'green'} text={showAdd?'close':'add'} onClick={onAdd} />
      
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headerStyle={
//     color:'red',
// }

export default Header;
