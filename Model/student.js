const mongooes = require('mongoose');

const StudentSchema = new mongooes.Schema({
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

module.exports = mongooes.model("Student",StudentSchema);