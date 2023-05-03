import React, { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { UserActionType, UserState, defaultUserState, userReducer } from "./UserReducer";
import { Action } from "../../types/ActionType";


export const UserContext = createContext<[UserState, Dispatch<Action<UserActionType>>]>([
    defaultUserState,
    () => {},
]);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, defaultUserState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;