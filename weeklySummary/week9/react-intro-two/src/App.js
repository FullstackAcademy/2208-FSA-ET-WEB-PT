import './App.css';
import logo from './logo.svg';
import React from 'react';
import ColorSelector from "./components/ColorSelector";
import UserGallery from "./components/UserGallery";
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Register from './components/Register';


const appStyles = {
  backgroundColor: "cornSilk"
};

function App() {
  return (
    <div className="App" style={appStyles}>
      <img src={logo} className="App-logo" alt="logo" />      
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/user-gallery"><button>Gallery</button></Link>
        <Link to="/colors"><button>Colors</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>

      <Routes>
        <Route
          exact
          path="/user-gallery"
          element={<UserGallery />}
        />
        <Route exact path="/colors" element={<ColorSelector />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/*" element={<p>Home Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
