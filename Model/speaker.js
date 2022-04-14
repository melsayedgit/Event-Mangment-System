const mongooes = require('mongoose');

const AddressSchema = new mongooes.Schema({
    city:String,
    street:String,
    building:String
});

const SpeakerSchema = new  mongooes.Schema({
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


 
module.exports = mongooes.model("Speaker",SpeakerSchema);

const db = mongooes.connect("mongodb://localhost:27017/EventSystem")
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