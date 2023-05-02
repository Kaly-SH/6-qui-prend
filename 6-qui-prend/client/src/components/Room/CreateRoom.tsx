import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWebSocket from "react-use-websocket";
import randomWords from 'random-words';

interface CreateRoomProps {
    onLogin?: (username: string) => void;
    serverUrl: string;
}

function CreateRoom({ onLogin,serverUrl } : CreateRoomProps) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');

    useWebSocket(serverUrl, {
        share: true,
        filter: () => false
    });

    function logInUser() {
        if(!username.trim()) {
          return;
        }
        onLogin && onLogin(username);
    };
    
    function CreateRoomWithId() {
        const roomId = randomWords({ exactly: 3, join: '-' });
        navigate(`/room/${roomId}`);
        // TODO: send message to server "room created by username with id roomId"
    }
      
    const handleClick = () => {
        logInUser();
        CreateRoomWithId();
    };

    return (
        <div>
            <p>Avant de jouer, veuillez choisir un pseudo :</p>
            <input name="username" onInput={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} className="form-control"/>
            <div>
                <button type="button"
                onClick={handleClick}
                className="btn btn-primary account__btn">Créer une partie</button>
            </div>
        
        </div>
    );
};

export default CreateRoom;