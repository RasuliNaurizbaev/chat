const userController = require("../controller/user.controller");
const loginController = require("../controller/login.controller");
const express = require("express");
const userRouter = express.Router();
const autharazation = require("../middeware/auth");

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.post("/login", loginController.login);

userRouter.get("/checkToken", autharazation, (req, res)=>{
    res.status(200).json({result: "user token checked", token: req.token});
});

module.exports = {userRouter};
