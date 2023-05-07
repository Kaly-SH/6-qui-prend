import React, { useContext } from 'react';
import { UserContext } from '../contexts/User/UserProviders';
import CreateRoom from './CreateRoom';
import Game from '../components/Game/GameComponent';
import Deck from '../components/Game/DeckComponent';
import { CreateDeck, GiveCard } from '../helper/GameHelper';

function Room() {

    const [State] = useContext(UserContext);
    const username = State.user.username;

    return (

        <div>
            <h1>Room</h1>
            <h2>Welcome {username}</h2>
            <Game/>
        </div>

    );
};

export default Room;