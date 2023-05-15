import { Deck } from "../../types/DeckType";
import { Card } from "../../types/CardType";
import { Action } from "../../types/ActionType";
import { Game } from "../../types/GameType";
import { CreateDeck } from "../../helper/GameHelper";


export enum GameActionType {
    INIT_GAME = 'INIT_GAME',
    
}

export interface GameState {
    game: Game;
}

export const defaultGameState: GameState = {
    game: {
        deck: CreateDeck(),
    },
};

export const gameReducer = (state: GameState, action: Action<GameActionType>) => {
    switch (action.type) {
        case GameActionType.INIT_GAME:
            return {
                ...state,
                game: {
                    deck: CreateDeck(),
                },  
            };
        default:
            return state;
    }
}

