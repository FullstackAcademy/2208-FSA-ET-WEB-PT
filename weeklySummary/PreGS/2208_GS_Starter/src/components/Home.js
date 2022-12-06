import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../store/userSlice';

const Home = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        window.localStorage.removeItem('token');
        dispatch(resetUser());
    };

    const testAuth = async () => {
        // Grab token off of localstorage
        const token = window.localStorage.getItem('token');

        // Pass token over to the back-end
        const res = await axios.get("/api/auth/testAuth", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log("RES", res );
    };

    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>Welcome {user.username}!!</p>
                <button onClick={testAuth}>Test Auth</button>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Home;
