import React, { useContext } from 'react';
import { UserContext } from '../contexts/User/UserProviders';
import CreateRoom from './CreateRoom';
import Game from '../components/Game/Game';

function Room() {

    const [State] = useContext(UserContext);
    const username = State.user.username;
    return (
        // { username ? <Game/> : <CreateRoom/> }
        <p></p>
    );
};

export default Room;