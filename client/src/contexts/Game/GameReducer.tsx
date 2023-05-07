import { Deck } from "../../types/DeckType";
import { Action } from "../../types/ActionType";
import { Game } from "../../types/GameType";


export enum GameActionType {
    INIT_GAME = 'INIT_GAME',
    
}

export interface GameState {
    game: Game;
}
