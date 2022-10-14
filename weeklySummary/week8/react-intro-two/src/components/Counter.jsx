import React, { useState } from "react";
import PropType from "prop-types";

const counterContainer = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "dodgerBlue",
};

const Counter = ({ type, numToIncreaseBy }) => {
  const [count, setCount] = useState(0);

  const increaseCountByOne = () => {
    setCount(count + numToIncreaseBy);
  };

  return (
    <div style={counterContainer}>
      <p>
        {type}: {count}
      </p>
      <button onClick={increaseCountByOne}>
        Add {numToIncreaseBy} {type}
      </button>
    </div>
  );
};

Counter.propTypes = {
  type: PropType.string,
  numToIncreaseBy: PropType.number,
};

export default Counter;
