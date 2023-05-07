import { Card } from "../types/CardType"
import { Deck } from "../types/DeckType"


export function CheckDeck(deck: Deck): boolean {
    const sorted = deck.deck.map((card) => card.value).sort((a, b) => a - b);
  
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== i + 1) {
        return false;
      }
    }
    return true;
}

export function CreateDeck(): Deck {
    let deck: Card[] = [];
    const nbOfCard = 104;
  
    while (deck.length < nbOfCard) {
      let cardValue = Math.floor(Math.random() * nbOfCard) + 1;
      if (deck.findIndex((card) => card.value === cardValue) === -1) {
        deck.push({ value: cardValue });
      }
    }
  
    const newDeck: Deck = { deck };
  
    if (CheckDeck(newDeck) !== true) {
      return CreateDeck();
    }
  
    return newDeck;
}


export function GiveCard(deck: Deck): Card[] {
    let hand: Card[] = [];
    const nbOfCard = 10;
  
    while (hand.length < nbOfCard) {
      hand.push(deck.deck.pop() as Card);
    }
  
    return hand;
  }