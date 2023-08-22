const joi=require('joi');

const questionSchema=joi.object({
    id:joi.string(),
    text:joi.string().min(4).max(25).required(),
})

const boardSchema=joi.object({
    speaker:joi.string().max(25).allow('').optional(),
    title:joi.string().min(3).max(25).required(),
    socketId:joi.string().required()
})

const editBoardSchema=joi.object({
    speaker:joi.string().max(25).allow('').optional(),
    title:joi.string().min(3).max(25).required(),
})

module.exports={questionSchema,boardSchema,editBoardSchema};