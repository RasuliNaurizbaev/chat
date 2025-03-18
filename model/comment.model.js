const db = require("../db/db");

const Comment = {
    createComment: (comment, user_id, message_id, callback)=>{
        db.query("INSERT INTO Comment (comment, user_id, message_id) VALUES (?, ?, ?)", [comment, user_id, message_id], callback);
    },
    getComments: (callback)=>{
        db.query("SELECT * FROM Comment", callback);
    },
    putComment: (comment, id, callback)=>{
        db.query("UPDATE Comment SET comment = ? WHERE id = ?", [comment, id], callback);
    },
    deleteComment: (id, callback)=>{
        db.query("DELETE FROM Comment WHERE id = ?", [id], callback);
    }
};

module.exports = {Comment};