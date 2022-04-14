const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    city:String,
    street:String,
    building:String
});

const SpeakerSchema = new  mongoose.Schema({
email:{
    type:String,
    unique:true
},
username:{
    type:String,
    unique:true
},
password:{
    type:String,
    required:true
},
address:AddressSchema
});


 
module.exports = mongoose.model("Speaker",SpeakerSchema);

const db = mongoose.connect("mongodb://localhost:27017/EventSystem")
db.then(
   () =>{

    Speaker.create({
        email:"odsh@gmail.com",
        username:"od",
        password:"123",
        address:{city:"dahab",street:"the street",building:"22"}

})
     }
   
).catch((erro)=>{console.log(error);})