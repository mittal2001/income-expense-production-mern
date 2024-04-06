const transactionModel = require('../models/transactionModel')
const moment = require('moment');
const getAllTrnsaction = async(req,res) =>{
    try {
        const {frequency,selectedDate,type} = req.body
        const transaction = await transactionModel.find({
            
         ...(frequency !== 'custom' ? {
            date:{
                //gt = greater than
               $gt : moment().subtract(Number(frequency),'d').toDate(),
            },
         } : {
            date:{
                $gte : selectedDate[0],
                $lte : selectedDate[1]
            }
         }),
            userid:req.body.userid,
            ...(type !== 'all' && {type})
        })
        res.status(200).json(transaction)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteTransaction = async(req,res)=>{
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionid})
        res.status(200).send("Transaction deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}
const editTransaction = async(req,res) =>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionid},req.body.payload)
        res.status(200).send("edit successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

const addTransaction = async(req,res)=>{
    try{
        // console.log(req.body);
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save();
        res.status(201).send("transaction created")
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {getAllTrnsaction,addTransaction,editTransaction,deleteTransaction}