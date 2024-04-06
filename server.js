const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path');
const connectDb = require('./config/connectDb')

//config dotenv file
dotenv.config();

// connect to db
connectDb();
//rest object
const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
//user route
app.use('/api/v1/users' , require('./routes/userRoute'))
//transaction route
app.use('/api/v1/transactions',require("./routes/transactionRoute"))

// statuic files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
// port creation
const PORT = 8080 || process.env.PORT
//iska mtlb hai ki 8080 production mode pe kam krega aur next wala jabb hmlg isko launch kregenge toh uspe kaam krega

//listen server
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})