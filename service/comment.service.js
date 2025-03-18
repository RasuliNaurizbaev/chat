const commentModel = require("../model/comment.model");

const createComment = (comment, user_id, message_id, callback)=>{
    commentModel.Comment.createComment(comment, user_id, message_id, callback);
};

const getComments = (callback)=>{
    commentModel.Comment.getComments(callback);
}
const putComment = (comment, id, callback)=>{
    commentModel.Comment.putComment(comment, id, callback);
}  
const deleteComment = (id, callback)=>{
    commentModel.Comment.deleteComment(id, callback);
}

module.exports = {createComment, getComments, putComment, deleteComment};