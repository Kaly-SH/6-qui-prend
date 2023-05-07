import { Card } from "./CardType";

export interface User {
    username: string;
    hand: Card[];
    score:Card[];
}