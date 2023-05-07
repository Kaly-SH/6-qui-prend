import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User/UserProviders';
import GameProvider, { GameContext } from '../../contexts/Game/GameProviders';
import DeckComponent from './DeckComponent';
import { GiveCard } from '../../helper/GameHelper';

const GameComponent = () => {

    const [State] = useContext(GameContext);

    return (
        
        <div>
            <GameProvider>
                <DeckComponent deck={GiveCard(State.game.deck)}/>
            </GameProvider>
        </div>
    );
};

export default GameComponent;