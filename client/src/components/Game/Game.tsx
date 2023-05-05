import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User/UserProviders';

const Game = () => {

    const [State] = useContext(UserContext);

    return (
        <div>
            <p>Room de { State.user.username }</p>
        </div>
    );
};

export default Game;