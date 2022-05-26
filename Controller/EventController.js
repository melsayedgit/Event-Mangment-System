const event = require('../Model/event');


/**@type {import("express").RequestHandler} */
module.exports.getAllevents = (req,res,next)=>{

    // event.find({},((error,obj)=>{
      
    //     res.status(200).json(obj)
    //  }))
     event.find({})
     .populate(["mainSpeaker","otherSpeakers","students"])
     .exec(
     ((error,obj)=>{
      
        res.status(200).json(obj)
     }))
  
}

/**@type {import("express").RequestHandler} */
module.exports.editEvent = (req,res,next)=>{
 let update ={
     title:req.body.title,
     eventDate:req.body.date,
     mainSpeaker:req.body.mainSpeaker,
     otherSpeakers:req.body.otherSpeakers,
     students:req.body.students
 }
 
    event.findOneAndUpdate({_id:req.params.id},update)
    .then((err,obj)=>{ 
        res.status(200).json(`event number: ${req.params.id} Was updated`)
    })

}

/**@type {import("express").RequestHandler} */
module.exports.deleteEvent = (req,res,next)=>{
    event.deleteOne({_id:req.params.id})
    .then(obj=>{
        res.status(200).json({msg:"Deleted Successfully "})
    })

}

/**@type {import("express").RequestHandler} */
module.exports.createEvent = (req,res,next)=>{
    event.find({}).sort({_id:-1}).limit(1)
    .then((obj)=>{
        let ev;
      if (obj[0]._id) {
          console.log("hello");
      ev ={
            _id: obj[0]._id+1,
            title:req.body.title,
            eventDate:req.body.date,
            mainSpeaker:req.body.mainSpeaker,
            otherSpeakers:req.body.otherSpeakers,
            students:req.body.students
        }
      }
 
else{
 
    ev ={
        _id:1,
        title:req.body.title,
        eventDate:req.body.date,
        mainSpeaker:req.body.mainSpeaker,
        otherSpeakers:req.body.otherSpeakers,
        students:req.body.students
    }

}

           event.create(ev)
           .then(ob=> res.status(200).json({msg:` ${ev.title} Event was Created successfully`}))
           .catch(err=>res.json(err))

    })

}