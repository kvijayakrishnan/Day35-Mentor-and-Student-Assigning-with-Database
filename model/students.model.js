
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
    },
    assignMentor:{
        require:true,
        type:String,        
    },
});


module.exports = mongoose.model("Students", studentSchema);




















