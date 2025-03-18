const userService = require("../service/user.service");

const createUser = (req, res)=>{
    const {username, lastname, password} = req.body;
    try{
        if(!username || !lastname || !password){
            res.status(312).json({message: "enter all values"});
        };
        userService.createUser(username, lastname, password);
        return res.status(201).json({message: "user is created"}).end();
    }catch(err){
        console.error(err);
        return res.status(500).json({error: err}).end();
    }
};

const getAllUser = (req, res)=>{
    userService.getAllUser((err, data) =>{
        try{
            if(err) {
                return res.sendStatus(500);
            }
            res.status(200).json({result: data});
        }catch(err){
            console.error(err);
        };
    });
};

module.exports = {
    createUser,
    getAllUser
}