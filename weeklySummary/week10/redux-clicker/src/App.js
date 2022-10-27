import './App.css';
import React, { useEffect } from 'react';
import Game from './components/Game';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './features/playerSlice';

function App() {
  const playerName = useSelector(state => state.player.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem("clicker_username");

    dispatch(changeName(username))
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
    localStorage
      .setItem(
        "clicker_username",
        event.target.value
      )
  }

  // VIEW: What the user sees
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name: {playerName}</h1>
        <input value={playerName} onChange={handleNameChange} type="text"></input>
      </header>
    </div>
  );
}

export default App;
