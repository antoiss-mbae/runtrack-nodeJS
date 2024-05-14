const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;

const server = http.createServer((req, res) => {
    // Récupérer le chemin vers le fichier index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lire le contenu du fichier index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erreur interne du serveur');
            return;
        }

        // Définir les en-têtes de la réponse avec le type de contenu
        res.writeHead(200, {'Content-Type': 'text/html'});

        // Envoyer le contenu du fichier index.html en réponse
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
