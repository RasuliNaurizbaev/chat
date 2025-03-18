const db = require("../db/db");

const Message = {
    createMessage: (post, userId, callback) => {
        console.log(userId, "model-userId");
        db.query("INSERT INTO Message (post, user_id) VALUES (?, ?)", [post, userId], callback);
    },
    getAllMessage: (callback)=>{
        db.query("SELECT * FROM Message", callback);
    },
    putMessage: (id, post, callback)=>{
        db.query("UPDATE Message SET post = ? WHERE id = ?", [post, id], callback);
    },
    deleteMessage: (id, callback)=>{
        db.query("DELETE FROM Message WHERE id = ?", [id], callback);
    }
}


module.exports = {Message};