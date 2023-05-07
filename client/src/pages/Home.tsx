import React from 'react';
import Deck from '../components/Game/Deck';
// import { Link } from 'react-router-dom';


const Home: React.FC = () => {

// Algo à déplacer

function CheckDeck(deck:number[]) : boolean {
    
    let DeckIsCorrect:boolean = true
    let sorted:number[] =  deck.slice().sort((a, b) =>  a - b)
    
    for (let x = 0; x < sorted.length; x++) {
        if ( sorted[x] !== x+1) {
            DeckIsCorrect = false
        }
    }
    
    return DeckIsCorrect
    
}

function CreateDeck() : number[] {
    
    let deck:number[] = []
    const nbOfCard = 104;
    
    while(deck.length < nbOfCard){
        var cardValue = Math.floor(Math.random() * nbOfCard) + 1
        if(deck.indexOf(cardValue) === -1) deck.push(cardValue)
    }
    
    if (CheckDeck(deck) !== true) {
        deck = CreateDeck()
    }
    
    return deck
}

function GiveCard(deck:number[]) : number[] {
    
    let hand:number[] = []
    const nbOfCard = 10;
    
    while(hand.length < nbOfCard){
        hand.push(deck.pop() as number)
    }
    
    return hand
}



let newDeck = CreateDeck()


    return (
        <div> 
            <Deck deck={GiveCard(newDeck)}/>
            <p>{newDeck.length}</p>
            
            {/* <h1>6 QUI PREND</h1>
            <Link to="/room/create">JOUER</Link> */}
           
        </div>
    );
};

export default Home;
