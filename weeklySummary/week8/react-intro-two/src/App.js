import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react';
import PointCounter from './components/PointCounter';
import CookieCounter from './components/CookieCounter';

function App() {
  // [variable, setterForVariable]
  const [username, setUsername] = useState("");

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const appStyles = {
    backgroundColor: "cornSilk"
  };

  return (
    <div className="App" style={appStyles}>
      <img src={logo} className="App-logo" alt="logo" />
      <PointCounter />
      <PointCounter />
      <CookieCounter />

      <p>Username: {username}</p>
      <input value={username} onChange={updateUsername} />
    </div>
  );
}

export default App;
