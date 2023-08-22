const BoardTable=require('../database/BoardTable');
const QuestionTable=require('../database/Questions');

const getQuestions=async(id)=>{
    let board=await BoardTable.findById(id);
    let promises=[];
    board.questions.map((ques)=>{
        let promise=QuestionTable.findById(ques);
        promises.push(promise);
    })
    try{
        let questions=await Promise.all(promises);
        questions.sort((a,b)=>{
            return b.likes-a.likes;
        })
        return questions;
    }
    catch(e){
        throw new Error(e.message);
    }
}

const postQuestionService=async(details)=>{
    let question=new QuestionTable({
        text:details.text,
        likes:0
    });
    question=await question.save();
    let board=await BoardTable.findByIdAndUpdate(details.id,{$push:{questions:question.id}});
    return question;
}

const changeLikesService=async(id)=>{
    let question=await QuestionTable.findByIdAndUpdate(id,{$inc:{likes:1}});
    return question;
}

module.exports={getQuestions,postQuestionService,changeLikesService};