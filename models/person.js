const mongoose = require('mongoose');

const personSchema =new mongoose.Schema({
    name:{
        type: String,
        required :true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['Student','Teacher','Employee'],
        required:true
    },
    mobile:{
        type:Number, 
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }
})


// create person model 
const person=mongoose.model('person',personSchema)
module.exports=person;