import React from 'react';
import { useSelector } from 'react-redux';

const ChildThree = () => {
    const points = useSelector(state => state.game.points)
    return (
        <div>
            points: {points}
        </div>
    );
};

export default ChildThree;