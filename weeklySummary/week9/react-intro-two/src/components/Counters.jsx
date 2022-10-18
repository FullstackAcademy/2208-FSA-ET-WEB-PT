import React from "react";
import Counter from "./Counter";

const countersContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "limegreen",
};

const Counters = () => {
  return (
    <div style={countersContainer}>
      <Counter type="Points" numToIncreaseBy={1} />
      <Counter type="Grandma" numToIncreaseBy={2} />
      <Counter type="Cookies" numToIncreaseBy={5} />
      <Counter type="Muffins" numToIncreaseBy={1} />
      <Counter type="Eggs" numToIncreaseBy={12} />
    </div>
  );
};

export default Counters;
