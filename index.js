require('dotenv').config();
const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const AuthmMW = require('./Middlleware/authMiddleware');
//Routers
const LoginAPI =require("./Router/authRouter");
const StudentAPI = require('./Router/StudentRouter'); 
const SpeakerAPI = require('./Router/SpeakerRouter'); 

const server = express();

const db = mongoose.connect("mongodb://localhost:27017/EventSystem")

db.then(()=>{
 server.listen(process.env.PORT||8080,()=>console.log(" iam listening at  http://localhost:" + process.env.PORT))}
   
).catch((error)=>{console.log(error);})

server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));


server.use(express.static('public'));

//auth MD
server.use(LoginAPI);
server.use(AuthmMW);

// Routers
server.use(StudentAPI);
server.use(SpeakerAPI);

//Not Found MW
server.use((request,response)=>{
    response.status(404).json({meassge:"Page is Not Found"});

 });



//Error
server.use((error,request,response,next)=>{
    response.status(500).json({meassge:error+""});
});
