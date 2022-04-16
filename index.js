const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
//Routers
const LoginAPI=require("./Routers/authRouter");

const server = express();

const db = mongoose.connect("mongodb://localhost:27017/EventSystem")

db.then(()=>{
 server.listen(process.env.PORT||8080,()=>console.log(" iam listening"))}
   
).catch((error)=>{console.log(error);})

server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));


// Routers
server.use(LoginAPI)

//Not Found MW
server.use((request,response)=>{
    response.status(404).json({meassge:"Page is Not Found"});

 });



//Error
server.use((error,request,response,next)=>{
    response.status(500).json({meassge:error+""});
});
