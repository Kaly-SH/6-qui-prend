import React, { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { GameActionType, GameState, defaultGameState, gameReducer } from "./GameReducer";
import { Action } from "../../types/ActionType";


export const GameContext = createContext<[GameState, Dispatch<Action<GameActionType>>]>([
    defaultGameState,
    () => {},
]);

const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, defaultGameState);

    return (
        <GameContext.Provider value={[state, dispatch]}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;