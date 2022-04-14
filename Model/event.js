const mongooes = require('mongoose');

const EventSchema = new mongooes.Schema({
    _id:Number,
    title:{
        type:String,
        required:true
    },
  eventDate: Date,
  mainSpeaker:mongooes.Types.ObjectId,
  otherSpeakers:[{type:mongooes.Types.ObjectId,ref:"Speaker"}],
  students:[{type:Number, ref:"Student"}]
});

module.exports = mongooes.model("Event",EventSchema);