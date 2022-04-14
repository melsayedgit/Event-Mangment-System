const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    _id:Number,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model("Student",StudentSchema);