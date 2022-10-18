import React from "react";
import PropTypes from "prop-types";

const Box = ({ color, selectedColor, setSelectedColor }) => {
  // const {
  //   color,
  //   selectedColor,
  //   setSelectedColor
  // } = props;
  // Buisness Logic
  const boxStyles = {
    background: color,
    width: "100px",
    height: "100px",
    boxSizing: "border-box",
  };

  if (selectedColor === color) boxStyles.border = "10px solid purple";

  const selectColor = () => {
    setSelectedColor(color);
  };

  // Presentation Logic
  return <div onClick={selectColor} style={boxStyles}></div>;
};

Box.propTypes = {
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  setSelectedColor: PropTypes.func,
};

export default Box;
