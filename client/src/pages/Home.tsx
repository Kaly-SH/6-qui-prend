import React from 'react';
import  Card  from '../components/Game/Card'
// import { Link } from 'react-router-dom';

const Home: React.FC = () => {

const num = 33; 

    return (
        <div> 
            <Card val={num}/>
            {/* <h1>6 QUI PREND</h1>
            <Link to="/room/create">JOUER</Link> */}
           
        </div>
    );
};

export default Home;
