'use strict'

const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');

const app = express();

const httpOptions = { port: 4000 }
// const httpsOptions = {
//   port: 3443,
//   ssl: {
//     cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
//     key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'))
//   }
// }

const getDoc = (filename) => path.join(__dirname, filename);

app.use('/', (_, res) => res.sendFile(getDoc('./index.html')));

const server = http.createServer(app);
// const sslServer = https.createServer(httpsOptions.options, app);

server.listen(httpOptions.port, () => console.log(`Server running on http://localhost:${httpOptions.port}`));
// sslServer.listen(httpsOptions.port, () => console.log(`Server running on https://localhost:${httpsOptions.port}`));

