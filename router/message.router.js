const express = require("express");
const messageRouter = express.Router();
const messageController = require("../controller/message.controller");
const autharazation = require("../middeware/auth");

messageRouter.post("/", autharazation, messageController.createMessage);
messageRouter.get("/", autharazation, messageController.getAllMessage);
messageRouter.put("/:id", autharazation, messageController.putMessage);
messageRouter.delete("/:id", autharazation, messageController.deleteMessage);

module.exports = {messageRouter};