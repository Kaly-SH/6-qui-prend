import { io, Socket } from 'socket.io-client';
import { Deck } from '../types/DeckType';

// Connecter au serveur Socket.IO
const socket: Socket = io('http://localhost:3000');

// Événement déclenché lorsque la connexion est établie
socket.on('connect', () => {
  console.log('Connecté au serveur Socket.IO');

  // Envoyer un message au serveur
  socket.emit('message', 'Message du client');
});

// Événement déclenché lors de la réception d'un message du serveur
socket.on('message', (message) => {
  console.log(`Message reçu du serveur : ${message}`);
});

export function CreateGame(room: string): Promise<Deck> {
  return new Promise((resolve) => {
    socket.emit('creategame', room);

    socket.on('creategame', (deck: Deck) => {
      console.log('Deck :', deck);
      resolve(deck);
    });
  });
}


// Événement déclenché lorsque la connexion est fermée
socket.on('disconnect', () => {
  console.log('Déconnecté du serveur Socket.IO');
});
