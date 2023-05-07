import { Action } from "../../types/ActionType";
import { User } from "../../types/Usertype";
import React from "react";


export enum UserActionType {
    SET_USERNAME = 'SET_USERNAME',
}

export interface UserState {
    user: User;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultUserState: UserState = {
    user: {
        username: '',
        hand: [],
        score: [],
    },
    isLogged: false,
    setIsLogged: () => {},
};

export const userReducer = (state: UserState, action: Action<UserActionType>): UserState => {
    switch (action.type) {
      case UserActionType.SET_USERNAME:
        return {
          ...state,
          user: {
            ...state.user,
            username: action.payload
          }
        };
      default:
        return state;
    }
  }
  