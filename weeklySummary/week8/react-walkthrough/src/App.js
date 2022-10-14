import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Buisness Logic / JS
  const [points, setPoints] = useState(0);

  const addPoint = () => setPoints(points + 1);

  // Presentation Logic / JSX
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Points: {points}</h2>
      <button onClick={addPoint}>Add 1 Point</button>
    </div>
  );
}

export default App;
