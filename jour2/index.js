// index.js - Point d'entrée de l'API

// Importation des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Initialisation de l'application Express
const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

// Utilisation de bodyParser pour analyser les requêtes au format JSON
app.use(bodyParser.json());

// Définition des routes
app.use('/api', routes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
