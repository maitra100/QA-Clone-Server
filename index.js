const mongoose=require('mongoose');
const express = require('express');
require('dotenv').config();
const cors=require('cors');
const route = require('./src/routes/routes');
const {Server}= require('socket.io')

const app = express();
app.use(cors({
    origin: '*'
  }));
app.use(express.json());
const http=require('http')
const port = process.env.PORT;


mongoose.connect("mongodb://127.0.0.1:27017/QA",{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=> console.log("connected to mongodb"))
.catch(err => console.error("couldn't connect to mongodb"));


const server=http.createServer(app);
app.use('/',route)

const io=new Server(server,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>{
    socket.on("update_board",(data)=>{
        socket.broadcast.emit("recieve",data);
    })

    socket.on("update_one_board",(data)=>{
        socket.broadcast.emit("edit board",data);
    })

    socket.on('update_questions',(data)=>{
        socket.broadcast.emit('update_ques',data);
    })

    socket.on('update_questions_likes',(data)=>{
        socket.broadcast.emit('update_ques_likes',data);
    })

    socket.on("join_room",(data)=>{
        socket.data=data;
        console.log(data, "join");
        socket.join(data.room);
        io.emit("add_user",data);
    })
    socket.on("leave_room",(data)=>{
        console.log(data, "leave");
        io.emit("remove_user",data);
        socket.leave(data.room);
    })
    socket.on('disconnect', function() {
        console.log("disconnet");
        console.log(socket.data);
        io.emit("remove_user",socket.data);
    })
}) 

server.listen(port,()=>{
    console.log('Server running',port)
})
