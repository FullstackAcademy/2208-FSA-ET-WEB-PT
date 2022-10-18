import React, { useState } from "react";

const CookieCounter = () => {
  const [cookies, setCookies] = useState(0);

  /**
   * Adds one cookie at a time
   */
  const addCookie = () => {
    setCookies(cookies + 1);
  };

  return (
    <div>
      <p className="cookieCounter">Cookies: {cookies}</p>

      {/* Button that calls addPoint on click */}
      <button onClick={addCookie}>Add One Cookie</button>
    </div>
  );
};

export default CookieCounter;
