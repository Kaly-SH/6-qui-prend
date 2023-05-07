import React from 'react';
import Deck from '../components/Game/DeckComponent';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {

    return (
        <div> 

            <h1>6 QUI PREND</h1>
            <Link to="/room/create">JOUER</Link> 
           
        </div>
    );
};

export default Home;
