import React, { useContext } from 'react';
import { UserContext } from '../contexts/User/UserProviders';
import CreateRoom from './CreateRoom';
import Game from '../components/Game/Game';

function Room() {

    const [State] = useContext(UserContext);
    const username = State.user.username;
    return (
        <div>
            <h1>Room</h1>
            <h2>Welcome {username}</h2>
        </div>
        
    );
}

export default Room;