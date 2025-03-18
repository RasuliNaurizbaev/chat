const express = require("express");
const app = express();
const server = require("./server.js");

const PORT = 5000;

app.use("/", server);

app.listen(PORT);