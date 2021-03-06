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
