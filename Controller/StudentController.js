const student = require('../Model/student');


/**@type {import("express").RequestHandler} */
module.exports.getAllStudents = (req,res,next)=>{
    // if(req.role =="admin"){
        student.find({},((error,obj)=>{
            res.status(200).json(obj.map((st)=>{
               st.password = undefined;
                return st;
                }));
         }))
         
//     }
// else{
//     res.status(401)

// }
    
}

/**@type {import("express").RequestHandler} */
module.exports.editStudent = (req,res,next)=>{
   
 let update ={
     username:req.body.username,
     password:req.body.password,
     email:req.body.email
 }
 
    student.findOneAndUpdate({_id:req.params.id},update)
    .then((err,obj)=>{ 
        res.status(200).json()
        
    })

}

/**@type {import("express").RequestHandler} */
module.exports.deleteStudent = (req,res,next)=>{
    student.deleteOne({_id:req.params.id})
    .then(obj=>{
        res.status(200).json({msg:"Deleted Successfully "})
    })

}

/**@type {import("express").RequestHandler} */
module.exports.RegisterStudent = (req,res,next)=>{
    student.find({}).sort({_id:-1}).limit(1)
    .then((obj)=>{
      
        let std ={
            _id: obj[0]._id+1,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        }

           student.create(std)
           .then(ob=> res.status(200).json({msg:`user ${std.username} was Created successfully`}))
           .catch(err=>next(err))

    })

}