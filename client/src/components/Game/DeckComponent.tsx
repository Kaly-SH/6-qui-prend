import React from 'react';
import CardComponent from './CardComponent';
import { Card } from '../../types/CardType';
import { Deck } from '../../types/DeckType';

function DeckComponent({deck}:Deck) {
    
    return (
         <div>
            <div className="deck-container">
                 {deck.map((card, index) => (
                    <div className="card-in-deck" key={index}> 
                        <CardComponent value={card.value}/>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default DeckComponent;