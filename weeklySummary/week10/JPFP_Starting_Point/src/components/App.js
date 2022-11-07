import { Button } from '@mui/material';
import React from 'react';
import styles from './App.styles';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    return (
        <div style={styles.bodyStyles}>
            <h1>Welcome to JPFP, Good luck!</h1>
            <Button variant="contained">Hello World</Button>
        </div>
    );
};

export default App;