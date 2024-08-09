const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
 key:{
  type:String,
  required:true
 },
 last:{
  type:String,
  required:true,
 },
 buy:{
   type:String,
   required:true,
 },
 sell:{
   type:String,
   required:true
 },
 volume:{
   type:String,
   required:true
 },
 base_unit:{
  type:String,
  required:true
 }
})

const report = mongoose.model("tradeReport",tradeSchema);

module.exports=report;