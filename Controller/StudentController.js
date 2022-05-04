const student = require('../Model/student');


/**@type {import("express").RequestHandler} */
module.exports.getAllStudents = (req,res,next)=>{
    student.find({},((error,obj)=>{
        res.status(200).json(obj);
     }))
    
}
/**@type {import("express").RequestHandler} */
module.exports.editStudent = (req,res,next)=>{
 let updae ={}
    student.findOneAndUpdate(req.body.id,update)
    .catch(erro=>{
        res.json(erro)
    })
    


}
/**@type {import("express").RequestHandler} */
module.exports.deleteStudent = (req,res,next)=>{

}
/**@type {import("express").RequestHandler} */
module.exports.RegisterStudent = (req,res,next)=>{
 
}