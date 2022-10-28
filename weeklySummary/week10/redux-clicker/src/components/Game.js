import logo from '../logo.svg';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, subtractPoint } from '../features/gameSlice';
import ChildOne from './ChildOne';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Game = () => {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    // STATE: Info being held
    const points = useSelector((state) => state.game.points);
    const [isRed, setIsRed] = useState(true);

    // ACTIONS: Things to do to our state
    const handleButtonClick = () => {
        setIsRed(false);
        dispatch(addPoint());
    };

    const handleSubtractButton = () => {
        dispatch(subtractPoint());
    };

    return (
        <div>
            <img onClick={handleButtonClick} src={logo} className="App-logo" alt="logo" />
            <p>{gameId}</p>
            <h1 style={{
                color: isRed ? "red" : "white"
            }}>Points: {points}</h1>
            <button onClick={handleSubtractButton}>
                Subtract 1 Point
            </button>
            <ChildOne />
        </div>
    );
};

export default Game;