// server.js - Configuration et création du serveur

const express = require('express');
const bodyParser = require('body-parser');

// Création d'une instance d'Express
const app = express();

// Utilisation de bodyParser pour analyser les requêtes au format JSON
app.use(bodyParser.json());

// Définition des routes - nous les ajouterons plus tard dans le fichier routes.js

// Export du serveur pour pouvoir l'utiliser dans index.js
module.exports = app;
