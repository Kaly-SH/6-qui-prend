// Import de WebSocket, WebSocketServer pour la communication entre le client et le serveur
const { WebSocket, WebSocketServer } = require('ws');
// Import de http pour le serveur
const http = require('http');
// Import de uuidv4 pour les id unique des utilisateurs
const uuidv4 = require('uuid').v4;

// Création du serveur
const server = http.createServer();
// Création du serveur WebSocket
const wsServer = new WebSocketServer({ server });
// Port du serveur
const port = 8000;
// Ecoute du serveur sur le port
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});

// Création des variables
// clients: liste des clients connectés
const clients = {};
// users: liste des utilisateurs connectés
const users = {};
// gameContent: contenu du jeu
let gameContent = null;
// userActivity: liste des actions des utilisateurs
let userActivity = [];

// typesDef: type de message
const typesDef = {
  // USER_EVENT: evenement concernant les utilisateurs
  USER_EVENT: 'userevent',
  // GAME_EVENT: evenement concernant le jeu
  GAME_EVENT: 'gameevent'
}

// Fonction broadcastMessage: envoie un message à tous les clients connectés
function broadcastMessage(json) {

  // Conversion du message en JSON
  const data = JSON.stringify(json);

  // Envoie du message à tous les clients connectés
  for(let userId in clients) {
    let client = clients[userId];
    if(client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  };
}

// Fonction handleMessage: traite le message reçu
function handleMessage(message, userId) {

  // Conversion du message en JSON
  const dataFromClient = JSON.parse(message.toString());
  // Création du message à envoyer
  const json = { type: dataFromClient.type };

  // Si le message est de type USER_EVENT
  if (dataFromClient.type === typesDef.USER_EVENT) {
    // Ajout de l'utilisateur à la liste des utilisateurs
    users[userId] = dataFromClient;
    userActivity.push(`${dataFromClient.username} joined to edit the document`);
    json.data = { users, userActivity };

  // Si le message est de type GAME_EVENT
  } else if (dataFromClient.type === typesDef.GAME_EVENT) {
    // Mise à jour du contenu du jeu
    gameContent = dataFromClient.content;
    json.data = { gameContent, userActivity };
  }

  // Envoie du message à tous les clients connectés
  broadcastMessage(json);
}

// Fonction handleDisconnect: traite la déconnexion d'un utilisateur
function handleDisconnect(userId) {

    console.log(`${userId} disconnected.`);
    // Création du message à envoyer
    const json = { type: typesDef.USER_EVENT };
    // Ajout de l'utilisateur à la liste des utilisateurs déconnectés
    const username = users[userId]?.username || userId;
    // Ajout de l'action de l'utilisateur à la liste des actions des utilisateurs
    userActivity.push(`${username} left the document`);
    // Mise à jour de la liste des utilisateurs et de la liste des actions des utilisateurs
    json.data = { users, userActivity };
    // Suppression de l'utilisateur de la liste des clients 
    delete clients[userId];
    // Suppression de l'utilisateur de la liste des utilisateurs
    delete users[userId];
    // Envoie du message à tous les clients connectés
    broadcastMessage(json);
}

// Ecoute des connexions
wsServer.on('connection', function(connection) {
  // Création d'un id unique pour l'utilisateur
  const userId = uuidv4();
  console.log('Recieved a new connection');
  // Ajout de l'utilisateur à la liste des clients
  clients[userId] = connection;
  // Création du message à envoyer
  console.log(`${userId} connected.`);
  // Envoie du message à tous les clients connectés
  connection.on('message', (message) => handleMessage(message, userId));
  // Ecoute de la déconnexion de l'utilisateur
  connection.on('close', () => handleDisconnect(userId));
});
