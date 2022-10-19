import React from "react";
import PropTypes from "prop-types";

const IsSelectedIndicator = ({ color, selectedColor }) => {
  if (color === selectedColor) return <p>SELECTED</p>;
};

IsSelectedIndicator.propTypes = {
  color: PropTypes.string,
  selectedColor: PropTypes.string,
};

export default IsSelectedIndicator;
