import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWebSocket, { ReadyState } from "react-use-websocket";
import randomWords from 'random-words';
import { UserContext } from '../contexts/User/UserProviders';
import { setUsername } from '../contexts/User/UserActions';

function CreateRoom() {

    const navigate = useNavigate();
    
    function CreateRoomWithId() {
        const roomId = randomWords({ exactly: 3, join: '-' });
        navigate(`/room/${roomId}`);
        // TODO: send message to server "room created by username with id roomId"
    }

    const[state, dispatch] = useContext(UserContext);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      if (name === 'username') {
        dispatch(setUsername(value));
      }
    }

    const handleClick = () => {
        CreateRoomWithId();
    };

    return (
        <div>
            <p>Avant de jouer, veuillez choisir un pseudo :</p>
            <input name="username" onInput={handleInputChange} className="form-control"/>
            <div>
                <button type="button"
                onClick={() =>handleClick()}
                className="btn btn-primary account__btn">Créer une partie</button>
            </div>
        </div>
    );
};

export default CreateRoom;
