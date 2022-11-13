const express=require('express');
const app=express();
const http=require('http');
const cors=require('cors');
const {Server}=require('socket.io');
const mongoose = require("mongoose");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
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
        console.log(data);
        socket.to(data.room).emit("receive_message",data);
    });

    socket.on("disconnect",()=>{
        console.log("User disconnect",socket.id);
    })
} )
mongoose.connect("mongodb+srv://mutant:vcube0508@cluster0.gcokmp6.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})
const userGamesSchema = new mongoose.Schema({
    username: String,
    Games: [String]
})

const User = new mongoose.model("User", userSchema)
const UserGames = new mongoose.model("UserGames", userGamesSchema)


//Routes
app.post("/login", (req, res)=> {
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Incorrect Password"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { username, email, password} = req.body
    User.findOne({username : username}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                username,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
app.post("/games",(req,res) =>{
    const {username,gameName}  = req.body;
    UserGames.findOne({username : username}, async (err, userGames) => {
        if(userGames){
            await UserGames.updateOne(
                { username: username },
                { $addToSet: { Games: [gameName] } },
            )
            res.send( { message: "Successfully Added" ,userGames : userGames})
            console.log("added " + gameName + " for user " + username)
        } else {
            UserGames.create({username : username ,Games : [gameName] }) 
            res.send( { message: "Successfully Added" ,userGames : userGames})
        }
    })

})
app.post("/community",(req,res) =>{
    const {username}  = req.body;
    UserGames.findOne({username : username}, async (err, userGames) => {
        if(userGames){
            res.send( { message : "User Found" ,userGames : userGames})
        }
        else {
            res.send( { message : "No Such user found"})
        }
    })
})

server.listen(3001,()=>{
    console.log("Server Running");
})