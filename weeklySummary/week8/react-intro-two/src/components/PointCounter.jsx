import React, { useState } from "react";
import styles from "./PointCounter.styles";

const PointCounter = () => {
  const [points, setPoints] = useState(0);

  /**
   * Adds one point at a time
   */
  const addPoint = () => {
    setPoints(points + 1);
  };

  return (
    <div style={styles.containerStyles}>
      {/* Display points to our user */}
      <p>Points: {points}</p>
      <button onClick={addPoint}>Add One Point</button>
    </div>
  );
};

export default PointCounter;
