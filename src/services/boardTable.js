const BoardTable=require('../database/BoardTable');
const QuestionTable=require('../database/Questions');

const createBoardService=async(details)=>{
    let board=new BoardTable({
        socketId:details.socketId,
        questions:[],
        speaker:details.speaker,
        title:details.title
    });
    board=await board.save();
    return board;
}

const deleteBoardService=async(details)=>{
    let board=await BoardTable.findById(details.boardId);
    if(board.socketId!==details.id){
        throw new Error('not allowed');
    }
    let promises=[];
    board.questions.map((ques)=>{
        let promise=QuestionTable.findByIdAndDelete(ques);
        promises.push(promise);
    })
    try{
        let questions=await Promise.all(promises);
        let response=await BoardTable.findByIdAndDelete(details.boardId);
        return response;
    }
    catch(e){
        throw new Error(e.message);
    }
}

const changeBoardService=async(id,details)=>{
    let board=await BoardTable.findByIdAndUpdate(id,{speaker:details.speaker,title:details.title},{new:true});
    return board;
}

const getBoardsService=async()=>{
    let boards=await BoardTable.find({});
    return boards;
}

const getBoardService=async(id)=>{
    let board=await BoardTable.findById(id);
    return board;
}

module.exports={createBoardService,deleteBoardService,getBoardsService,getBoardService,changeBoardService};