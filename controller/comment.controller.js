const commentService = require("../service/comment.service");

const createComment = (req, res)=>{
    const {comment} = req.body;
    const user_id = req.user.id;
    const message_id = req.params.id;
    if(!comment){
        return res.status(400).json({message: "comment is required"}).end();
    };
    try{
        commentService.createComment(comment, user_id, message_id, (err, results)=>{
            if(err){
                console.error(err);
                return res.sendStatus(500).end();
            };
        });
        return res.status(201).json({message: "comment is created"}).end();
    }catch(err){
        console.error(err);
        return res.sendStatus(500).end();
    };
};

const getComments = (req, res)=>{
    try{
        commentService.getComments((err, results)=>{
            if(err){
                console.error(err);
                return res.sendStatus(500).end();
            };
            return res.status(200).json(results).end();
        });
    }catch(err){
        console.error(err);
        return res.sendStatus(500).end();
    };
}

const putComment = (req, res)=>{
    const {comment} = req.body;
    const id = req.params.id;
    if(!comment){
        return res.status(400).json({message: "comment is required"}).end();
    };
    try{
        commentService.putComment(comment, id, (err, results)=>{
            if(err){
                console.error(err);
                return res.sendStatus(500).end();
            };
            return res.status(200).json({message: "comment is updated"}).end();
        });
    }catch(err){
        console.error(err);
        return res.sendStatus(500).end();
    };
}

const deleteComment = (req, res)=>{
    const id = req.params.id;
    try{
        commentService.deleteComment(id, (err, results)=>{
            if(err){
                console.error(err);
                return res.sendStatus(500).end();
            };
            return res.status(200).json({message: "comment is deleted"}).end();
        });
    }catch(err){
        console.error(err);
        return res.sendStatus(500).end();
    };
}
module.exports = {createComment, getComments, putComment
, deleteComment};