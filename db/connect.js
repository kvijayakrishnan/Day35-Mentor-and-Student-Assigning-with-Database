
const mongoose = require('mongoose');

 db = async() => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('DB connection is established....')
    }catch(err){
        console.log('error while connecting db ??')
    }
 }


module.exports = db;




