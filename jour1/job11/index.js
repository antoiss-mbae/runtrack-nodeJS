const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Définition du code de statut et des en-têtes de réponse
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Envoi de la réponse avec le message "Hello World!"
    res.end('Hello World!\n');
});

// Écoute sur le port 8888
const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
