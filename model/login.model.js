const db = require("../db/db");

const Login = {
    login: (username, password, callback) => {
        db.query("SELECT * FROM Users WHERE username = ? && password = ? ", [username, password], callback);
    }
};

module.exports = {Login};