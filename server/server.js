import { createServer } from 'http';
import { Server } from 'socket.io';
import GameHelper from './src/helpers/GameHelper.ts';

// Créer un serveur HTTP
const httpServer = createServer();

// Configurer Socket.IO avec la gestion des autorisations CORS
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080"
  }
});

// Gérer les connexions socket
io.on('connection', (socket) => {
  console.log('Nouvelle connexion:', socket.id);

  // Gérer les messages reçus du client
  socket.on('message', (data) => {
    console.log('Message reçu:', data);

    // Envoyer un message de retour au client
    socket.emit('message', 'Message reçu par le serveur');
  });

  socket.on('creategame', (data) => {
    console.log('Création de partie demandé par:', data);
    socket.emit('creategame', GameHelper.CreateDeck());

    });

  // Gérer la déconnexion du client
  socket.on('disconnect', () => {
    console.log('Déconnexion:', socket.id);
  });
});

// Démarrer le serveur sur le port 3000
httpServer.listen(3000, () => {
  console.log('Serveur Socket.IO démarré sur le port 3000');
});
