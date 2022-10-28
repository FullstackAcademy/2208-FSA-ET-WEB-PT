import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../features/playerSlice';

const Name = ({ setUserCreated }) => {
    const playerName = useSelector(state => state.player.username);
    const dispatch = useDispatch();

    useEffect(() => {
        const username = localStorage.getItem("clicker_username") || "";

        dispatch(changeName(username))
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
        localStorage
            .setItem(
                "clicker_username",
                playerName
            )
    }

    const navigate = useNavigate();

    const handleUpdateName = () => {
        navigate("/");
        setUserCreated(true);
        setTimeout(() => {
            setUserCreated(false)
        }, 5000)
    }

    return (
        <div>
            <h1>Name: {playerName}</h1>
            <input value={playerName} onChange={handleNameChange} type="text"></input>
            <button onClick={handleUpdateName}>Update Name</button>
        </div>
    );
};

export default Name;