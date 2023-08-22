const mongoose=require("mongoose");

const boardSchema=new mongoose.Schema({
    socketId:{
        type:String,
        required:true
    },
    speaker:{
        type:String
    },
    questions:[{
        type:String,
        required:true,
    }],
    title:{
        type:String,
        required:true
    }
  });
  
  const BoardTable=mongoose.model("BoardTable",boardSchema);

  module.exports=BoardTable;