const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");

server.use(cors());


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

const user = require("./router/user.router");
const message = require("./router/message.router");
const comment = require("./router/comment.router");

server.use("/user", user.userRouter);
server.use("/message", message.messageRouter);
server.use("/comment", comment.commentRouter);

server.get("/", (req, res)=>{
    res.send("Hello World");
});

module.exports = server;