import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint } from './features/gameSlice';
import ChildOne from './components/ChildOne';

function App() {
  const dispatch = useDispatch();

  // STATE: Info being held
  const points = useSelector((state) => state.game.points);

  // ACTIONS: Things to do to our state
  const handleButtonClick = () => {
    console.log(addPoint());
    dispatch(addPoint());
  };

  // VIEW: What the user sees
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleButtonClick} src={logo} className="App-logo" alt="logo" />
        <h1>Points: {points}</h1>
        <ChildOne />
      </header>
    </div>
  );
}

export default App;
