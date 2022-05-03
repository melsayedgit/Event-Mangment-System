const student = require('../Model/student');


/**@type {import("express").RequestHandler} */
module.exports.getAllStudents = (req,res,next)=>{

}
/**@type {import("express").RequestHandler} */
module.exports.editStudent = (req,res,next)=>{

}
/**@type {import("express").RequestHandler} */
module.exports.deleteStudent = (req,res,next)=>{

}
/**@type {import("express").RequestHandler} */
module.exports.RegisterStudent = (req,res,next)=>{
 id =  student.find().sort({_id:-1}).limit(1)._id
 
 

}