import axios from "axios";
import React, { useEffect, useState } from "react";

const UserGallery = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  const grabUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    setUsers(response.data.data);
  };

  useEffect(() => {
    console.log("USE EFFECT TRIGGERED");
    grabUsers();
  }, []);

  useEffect(() => {
    console.log("SECOND USE EFFECT TRIGGERED");
    setUserCount(users.length);
  }, [users]);

  return (
    <div>
      <p>Users: {userCount}</p>
      {users.map((user) => (
        <img key={user.id} src={user.avatar} />
      ))}
    </div>
  );
};

export default UserGallery;
