const speaker = require('../Model/speaker');


/**@type {import("express").RequestHandler} */
module.exports.getAllSpeakers = (req,res,next)=>{
    speaker.find({},((error,obj)=>{
        res.status(200).json(obj.map((sp)=>{
           sp.password = undefined;
            return sp;
            }));
     }))
     .catch(err=>res.json(err))

}

/**@type {import("express").RequestHandler} */
module.exports.editSpeaker = (req,res,next)=>{
 let update ={
     username:req.body.username,
     password:req.body.password,
     email:req.body.email,
     address:{
       city :req.body.city,
       street :req.body.street,
       building :req.body.building
     }
 }
    speaker.findOneAndUpdate({_id:req.params.username},update)
    .then((err,obj)=>{ 
        res.status(200).json()
    })
    .catch(err=>res.json(err))

}

/**@type {import("express").RequestHandler} */
module.exports.deletespeaker = (req,res,next)=>{
    speaker.deleteOne(req.params.username)
    .then(obj=>{
        res.status(200).json({msg:"Deleted Successfully "})
    })
    .catch(err=>res.json(err))


}

/**@type {import("express").RequestHandler} */
module.exports.Registerspeaker = (req,res,next)=>{
    
        let sp ={

            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            address:{
                city :req.body.city,
                street :req.body.street,
                building :req.body.building
              }
        }

           speaker.create(sp)
           .then(ob=> res.status(200).json({msg:`user ${sp.username} was Created successfully`}))
           .catch(err=>res.json(err))



}