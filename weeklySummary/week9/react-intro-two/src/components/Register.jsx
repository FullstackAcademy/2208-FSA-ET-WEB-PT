import axios from "axios";
import React, { useState } from "react";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);

  const handleUsernameInput = (event) => {
    let newUsername = event.target.value;
    if (newUsername[0] !== "@") newUsername = "@" + newUsername;

    if (newUsername.length < 8) {
      setUsername(newUsername);
    }

    // axios.get("/isValidUsername/{username}")
    // based on the result, setIsValidUsername

    if (username.length < 3) setIsValidUsername(false);
    else setIsValidUsername(true);
  };

  const handleUserSelect = (event) => {
    setUserType(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const body = {
      name: username,
      job: userType,
    };

    if (!username) {
      body.username = "Default";
    }

    const res = await axios.post("https://reqres.in/api/users", body);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} style={formStyles}>
        <label>
          Username:
          <input value={username} onChange={handleUsernameInput} type="text" />
          {/* {!isValidUsername ? (
            <p>Hey, your username is invalid!</p>
          ) : (
            <p>Your username is valid!</p>
          )} */}
          {!isValidUsername && <p>Hey, your username is invalid!</p>}
        </label>

        <label>
          Admin Type:
          <select value={userType} onChange={handleUserSelect}>
            <option>User</option>
            <option>Admin</option>
            <option>Leader</option>
            <option>Super Admin</option>
          </select>
        </label>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Register;
