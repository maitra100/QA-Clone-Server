const boardServices=require('../services/boardTable')
const questionServices=require('../services/questions');

const createBoard=async(req,res)=>{
    try{
        const response=await boardServices.createBoardService(req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    
}

const deleteBoard=async(req,res)=>{
    try{
        const response=await boardServices.deleteBoardService(req.params);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getBoards=async(req,res)=>{
    try{
        const response=await boardServices.getBoardsService();
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getBoard=async(req,res)=>{
    try{
        const response=await boardServices.getBoardService(req.params.id);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getQuestions=async(req,res)=>{
    try{
        const response=await questionServices.getQuestions(req.params.id);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const postQuestion=async(req,res)=>{
    try{
        const response=await questionServices.postQuestionService(req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const changeLikes=async(req,res)=>{
    try{
        const response=await questionServices.changeLikesService(req.params.id);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const changeBoard=async(req,res)=>{
    try{
        const response=await boardServices.changeBoardService(req.params.id,req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}



module.exports={createBoard,deleteBoard,getBoards,getBoard,getQuestions,postQuestion,changeLikes,changeBoard};