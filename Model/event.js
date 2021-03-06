const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    _id:Number,
    title:{
        type:String,
        required:true
    },
  eventDate: Date,
  mainSpeaker:{type:mongoose.Types.ObjectId,ref:"Speaker"},
  otherSpeakers:[{type:mongoose.Types.ObjectId,ref:"Speaker"}],
  students:[{type:Number, ref:"Student"}]
});

module.exports = mongoose.model("Event",EventSchema);