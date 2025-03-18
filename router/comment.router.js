const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controller/comment.controller");
const autharazation = require("../middeware/auth");

commentRouter.post("/:id", autharazation, commentController.createComment);
commentRouter.get("/", commentController.getComments);
commentRouter.put("/:id", autharazation, commentController.putComment);
commentRouter.delete("/:id", autharazation, commentController.deleteComment);

module.exports = {commentRouter};