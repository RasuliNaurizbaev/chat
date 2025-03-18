const userModel = require("../model/user.model");

const createUser = (username, lastname, password, callback)=>{
    return userModel.Users.createUser(username, lastname, password, callback);
};

const getAllUser = (callback) => {
    userModel.Users.getAllUser(callback);
};

module.exports = {
    createUser,
    getAllUser,
};