const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  tournament: { type: String, required: true },
  course: { type: String, required:true },
  ratingOne: { type: Number },
  roundOne: { type:Number },
  ratingTwo: { type: Number },
  roundTwo: { type:Number },
  ratingThree: { type: Number },
  roundThree: { type:Number },
  ratingFour: { type: Number },
  roundFour: { type:Number },
  start: { type: Date, required:true },
  finish: { type: Date, required:true },
  url: { type: String },
  position: { type: String, required:true },
  field: { type: Number },
});

module.exports = mongoose.model("Results", resultSchema);
