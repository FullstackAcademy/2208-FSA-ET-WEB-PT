import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
    const [isConnected, setIsConnected] = useState(false);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {
        const socket = io({
            rejectUnauthorized: false // WARN: please do not do this in production
        });

        console.log("Effect")
        socket.on('connect', () => {
            console.log("Connect")
            setIsConnected(true);
        });

        socket.on('connect_error', (error) => {
            console.log("Error", error);
            setTimeout(() => socket.connect(), 5000)
        })

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    const sendPing = () => {
        socket.emit('ping');
    }

    return (
        <div>
            <p>Connected: {'' + isConnected}</p>
            <p>Last pong: {lastPong || '-'}</p>
            <button onClick={sendPing}>Send ping</button>
        </div>
    );
}

export default App;