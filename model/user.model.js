const db = require("../db/db");

const Users = {
    createUser: (username, lastname, password, callback)=>{
        return db.query("INSERT INTO Users (username, lastname, password) VALUES (?, ?, ?)", [username, lastname, password], callback);
    },
    getAllUser: (callback) => {
        db.query("SELECT * FROM Users", callback);
    }
};

module.exports = {Users};