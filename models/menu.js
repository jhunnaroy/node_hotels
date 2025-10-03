const mongoose=require('mongoose');

const MenuSchema=new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    price: {
        type: Number,
        require:true
    },
    taste : {
        type : String,
        enum : ['sweet','spicy','sour']
    },
    is_drink :{
        type : Boolean,
        default : false,
    }
})

// create item model
const MenuItems= mongoose.model('MenuItems',MenuSchema);
module.exports=MenuItems;

// this new version file in node js