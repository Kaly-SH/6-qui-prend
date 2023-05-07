import { UserActionType } from "./UserReducer";

function setUsername(username: string) {
    return {
      type: UserActionType.SET_USERNAME,
      payload: username,
    };
};

export { setUsername };