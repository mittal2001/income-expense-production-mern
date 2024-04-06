const mongoose = require('mongoose');
const colors = require("colors");

// haan bhai aagaya
// main database connect kiya rha pr.. pata nahi
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully ✅".bgCyan.white)
    } catch (error) {
        console.log("Error connecting to db 💣".bgred);
    }
}

module.exports = connectDb;
// mongoose.connect(process.env.MONGO_URL).then(()=>{
//     console.log("DB connected successfully ✅")
// }).catch(()=>{
//     console.log("Error connecting to db 💣")
// })