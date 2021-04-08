"use strict";

const express = require("express");
const https = require("https");
const http = require("http");
const path = require("path");
const fs = require("fs");

const app = express();

const httpOptions = { port: 3000 };

const getDoc = (filename) => path.join(__dirname, filename);

app.use("/", (_, res) => res.sendFile(getDoc("./index.html")));

const server = http.createServer(app);

server.listen(httpOptions.port, () =>
  console.log(`Server running on http://localhost:${httpOptions.port}`)
);
