// index.js - Point d'entrée de l'API

const app = require('./server'); // Import du serveur depuis server.js

const port = 3000; // Port sur lequel le serveur écoutera

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
