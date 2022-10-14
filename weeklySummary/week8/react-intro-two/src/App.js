import './App.css';
import logo from './logo.svg';
import React from 'react';
import Counters from './components/Counters';

const appStyles = {
  backgroundColor: "cornSilk"
};

function App() {
  return (
    <div className="App" style={appStyles}>
      <img src={logo} className="App-logo" alt="logo" />
      <Counters />
    </div>
  );
}

export default App;
