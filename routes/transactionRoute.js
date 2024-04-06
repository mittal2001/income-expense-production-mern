const express = require('express');
const { addTransaction, getAllTrnsaction,editTransaction,deleteTransaction } = require('../controllers/transactionsctrl');


//router object
const router = express.Router();

//routerss
//add transaction
router.post('/add-transaction',addTransaction)

//edit transaction
router.post('/edit-transaction',editTransaction);

//delete transaction
router.post('/delete-transaction',deleteTransaction);
//get transactuon
router.post('/get-transaction',getAllTrnsaction)

module.exports = router