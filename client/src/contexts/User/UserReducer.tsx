import { Action } from "../../types/ActionType";
import { User } from "../../types/Usertype";


export enum UserActionType {
    SET_USERNAME = 'SET_USERNAME',
    GET_USERNAME = 'GET_USERNAME',
    EDIT_USERNAME = 'EDIT_USERNAME',
}

export interface UserState {
    user: User;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultUserState: UserState = {
    user: {
        username: '',
    },
    isLogged: false,
    setIsLogged: () => {},
};

export const userReducer = (state: UserState, action: Action<UserActionType>) => {
    switch (action.type) {
        case UserActionType.SET_USERNAME:
            return {
                ...state,
                user: {
                    username: action.payload,
                },
            };
        case UserActionType.GET_USERNAME:
            return {
                ...state,
                user: {
                    username: action.payload,
                },
            };
        case UserActionType.EDIT_USERNAME:
            return {
                ...state,
                user: {
                    username: action.payload,
                },
            };
        default:
            return state;
    }
}