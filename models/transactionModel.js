const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
     userid:{
      type:String,
      required:true,
     },
     amount :{
        type:Number,
        required:[true,'amount is required']
     },
     type:{
        type:String,
        required:[true,'type is required']
     },
     category:{
        type:String,
        required:[true,'cat is required']
     },
     refernce:{
        type:String,
        
     },
     description:{
        type:String,
        required:[true,"this is required"]
     },
     date:{
        type:Date,
        required:[true,'data is required']
     }
},{timestamp:true})

const transactionModel  = mongoose.model('transactions',transactionSchema)
module.exports = transactionModel;