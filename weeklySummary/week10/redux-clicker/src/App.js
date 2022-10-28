import './App.css';
import React, { useState } from 'react';
import Name from './components/Name';
import Game from './components/Game';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const name = useSelector((state) => state.player.username)
  const [userCreated, setUserCreated] = useState(false);

  // VIEW: What the user sees
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {userCreated && <p style={{ color: 'green' }}>New User Just Made</p>}
          <p>Username: {name}</p>
          <Link to="/"><button>Home</button></Link>
          <Link to="/name"><button>Set Name</button></Link>
          <Link to="/game/1246fdww532dg"><button>Play Game</button></Link>
          {
            name === "Admin" &&
            <Link to="/admin"><button>Admin Settings</button></Link>
          }
        </div>
        <Routes>
          <Route path="/name" element={<Name setUserCreated={setUserCreated} />} />
          <Route path="/game/:gameId" element={<Game />} />
          {
            name === "Admin" &&
            <Route path="/admin" element={<p>Welcome Admin!</p>} />
          }
        </Routes>
      </header>
    </div>
  );
}

export default App;
