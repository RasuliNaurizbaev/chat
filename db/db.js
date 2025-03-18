const mysql = require("mysql2");

const server = mysql.createConnection({
    host: "localhost",
    database: "chatAPP",
    password: "root",
    user: "root"
});

server.connect((err)=>{
    if(err){
        console.error(err);
    }
    console.log("connect database");
})

module.exports = server;