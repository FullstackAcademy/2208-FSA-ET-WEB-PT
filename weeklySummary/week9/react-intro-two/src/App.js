import './App.css';
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserGallery from './components/UserGallery';

const appStyles = {
  backgroundColor: "cornSilk"
};

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const json = await response.json();
    setUsers(json.data);
    setLoading(false);
  };

  // After you load for the first time, grab our users
  useEffect(() => {
    console.log("FIRST USE EFFECT KICKED OFF")
    getUsers();
  }, []);

  // Anytime the users state updates, 
  // count how many times we've updated it
  useEffect(() => {
    console.log("SECOND USE EFFECT KICKED OFF")
    setUpdateCount(updateCount + 1);
  }, [users]);

  // // After you load for the first time, grab our users
  // useEffect(() => {
  //   // getUsers();
  // });
  console.log(updateCount)

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App" style={appStyles}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>UPDATES: {updateCount}</p>
      <UserGallery users={users} />
      <UserList users={users} />
    </div>
  );
}

export default App;
