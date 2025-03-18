const messageService = require("../service/message.service");

const createMessage = (req, res)=>{
    const {post} = req.body;
    const userId = req.userId;
    console.log(userId, "controller-userId");
    
    messageService.createMessage(post, userId, (err)=>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }
        return res.sendStatus(201);
    })
};

const getAllMessage = (req, res)=>{
    messageService.getAllMessage((err, data)=>{        
        try{
            if(err){
                console.error(err);
            }else{
                return res.status(201).json({result: data});
            };
        }catch(err){
            console.error(err);
            return res.sendStatus(500);
        };
    });
};

const putMessage = (req, res)=>{
    const {id} = req.params;
    const {post} = req.body;
    
    messageService.putMessage(id, post, (err)=>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }
        return res.sendStatus(201);
    });
}

const deleteMessage = (req, res)=>{
    const {id} = req.params;
    
    messageService.deleteMessage(id, (err)=>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }
        return res.sendStatus(201);
    });
}

module.exports = {createMessage, getAllMessage, putMessage
, deleteMessage};