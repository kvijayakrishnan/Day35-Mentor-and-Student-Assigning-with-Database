const mongoose = require('mongoose');


const mentorSchema = mongoose.Schema({
    name:{
        require: true,
        type:String
    },
    email:{
        require: true,
        type:String,
        unique:true
    },
    
    assigningStudent:[String],
})


module.exports = mongoose.model("Mentors", mentorSchema)










