const mongoose=require("mongoose");

const questionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    }
  });
  
  const QuestionTable=mongoose.model("QuestionTable",questionSchema);

  module.exports=QuestionTable;