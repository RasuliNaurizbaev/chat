const loginModel = require("../model/login.model");

const login = (username, password, callback) => {
    loginModel.Login.login(username, password, callback);
};

module.exports = {login};