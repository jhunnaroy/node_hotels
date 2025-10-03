const mongoose=require('mongoose');
const personScheam=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work: {
    type: String,
    enum: ['manager', 'chef', 'worker'],
    required: true
},

   
    mobile:{
        type : String,
        required :true,
    },
    email:{
        type : String,
        required:true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true,
    }
    
});

// create person model
const Person=mongoose.model('Person',personScheam);
module.exports=Person;