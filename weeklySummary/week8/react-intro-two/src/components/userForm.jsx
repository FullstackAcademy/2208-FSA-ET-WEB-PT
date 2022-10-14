import React, { useState } from "react";

const userForm = () => {
  const [username, setUsername] = useState("");

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <p>Username: {username}</p>
      <input value={username} onChange={updateUsername} />
    </div>
  );
};

export default userForm;
