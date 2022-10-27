import './App.css';
import React, { useEffect, useState } from 'react';
import Game from './components/Game';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './features/playerSlice';

function App() {
  const [name, setName] = useState("");
  const playerName = useSelector(state => state.player.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem("clicker_username");
    setName(username);
    dispatch(changeName(username))
  });

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(changeName(name));
    localStorage
      .setItem(
        "clicker_username",
        name
      )
  }

  // VIEW: What the user sees
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name: {playerName}</h1>
        <form onSubmit={handleSubmitName}>
          <input value={name} onChange={handleNameChange} type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
