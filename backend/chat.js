const express=require('express');
const app=express();
const http=require('http');
const cors=require('cors');
const {Server}=require('socket.io');
app.use(cors());

const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        method: ["POST","GET"]
    }
});


//Socket working

io.on("connection", (socket)=>{
    console.log(`User connected ${socket.id}`);


    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`user with id: ${socket.id} joinded room: ${data}`)
    })

    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data);
    });

    socket.on("disconnect",()=>{
        console.log("User disconnect",socket.id);
    })
} )

module.export = chat