const messageModel = require("../model/message.model");

const createMessage = (post, userId, callback)=>{
    console.log(userId, "service-userId");
    
    messageModel.Message.createMessage(post, userId, callback);
};
const getAllMessage = (callback)=>{
    messageModel.Message.getAllMessage(callback);
};
const putMessage = (id, post, callback)=>{
    messageModel.Message.putMessage(id, post, callback);
};
const deleteMessage = (id, callback)=>{
    messageModel.Message.deleteMessage(id, callback);
};

module.exports = {createMessage, getAllMessage, putMessage
, deleteMessage};