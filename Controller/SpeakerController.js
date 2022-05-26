const speaker = require('../Model/speaker');


/**@type {import("express").RequestHandler} */
module.exports.getAllSpeakers = (req,res,next)=>{
    if(req.role =="admin"){
    speaker.find({},((error,obj)=>{
        res.status(200).json(obj.map((sp)=>{
           sp.password = undefined;
            return sp;
            }));
     }))
    }
    //  .catch(err=>next(new Error()))
    else{
        res.status(401)}
}

/**@type {import("express").RequestHandler} */
module.exports.editSpeaker = (req,res,next)=>{
 let update ={
     username:req.body.username,
     password:req.body.password,
     email:req.body.email,
     address:{
       city :req.body.address.city,
       street :req.body.address.street,
       building :req.body.address.building
     }
    
 }
 
    speaker.findOneAndUpdate({username:req.params.username},update)
    .then((err,obj)=>{ 
        res.status(200).json({msg:`Speakr:`})
    })
    .catch(err=>res.json(err))

}

/**@type {import("express").RequestHandler} */
module.exports.deletespeaker = (req,res,next)=>{
    speaker.deleteOne({username:req.params.username})
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
                city :req.body.address.city,
                street :req.body.address.street,
                building :req.body.address.building
              }
        }

           speaker.create(sp)
           .then(ob=> res.status(200).json({msg:`user ${sp.username} was Created successfully`}))
           .catch(err=>res.json(err))



}

/**@type {import("express").RequestHandler} */
module.exports.EditOwnProfile = (req,res,next)=>{
    let update ={
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        address:{
          city :req.body.address.city,
          street :req.body.address.street,
          building :req.body.address.building
        }
       
    }
    
       speaker.findOneAndUpdate({username:req.username},update)
       .then((err,obj)=>{ 
           res.status(200).json({msg:`Speakr:`})
       })
       .catch(err=>res.json(err))

}
/**@type {import("express").RequestHandler} */

module.exports.getOwnProfile = (req,res,next)=>{
speaker.findOne({username:req.username})
.then((err,obj)=>{
    res.status(200).json(obj)
}).catch(err=>res.json(err))
}
