import React from 'react';
import Card from './Card';

interface DeckProps {
    deck:number[];
};

function Deck({deck}:DeckProps) {
    
    return (
         <div>
            <div className="deck-container">
                 {deck.map((value) => (
                    <div className="card-in-deck"> 
                        <Card val={value}/>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default Deck;