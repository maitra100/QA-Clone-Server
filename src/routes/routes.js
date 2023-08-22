const express = require('express');
const route = express.Router();
const controller=require('../controller/controller')
const validation=require('../middleware/validator');
const {questionSchema,boardSchema,editBoardSchema}=require('../middleware/schema')

route.post('/board',validation.validator(boardSchema),controller.createBoard);
route.delete('/board/:id/:boardId',controller.deleteBoard);
route.put('/board/:id',validation.validator(editBoardSchema),controller.changeBoard)
route.get('/board',controller.getBoards)
route.get('/board/:id',controller.getBoard)
route.get('/questions/:id',controller.getQuestions);
route.post('/questions',validation.validator(questionSchema),controller.postQuestion);
route.put('/questions/:id',controller.changeLikes);


module.exports=route;