const express=require('express');
const router=express();
const MenuItems=require('./../models/menu');
const { model } = require('mongoose');




// for menuItems
router.post('/', async(req,res)=>{
  try {
    const data=req.body;
    const newMenuItems= new MenuItems(data);
    const response= await newMenuItems.save();
    res.status(200).json(response);
    
  } catch (error) {
    console.error("occured error", error.message);

    res.status(500).json({error : 'Internal server error'});
    
  }
})


router.get('/', async(req,res)=>{
  try {
    const data=await MenuItems.find();

    res.status(200).json(data);

    
  } catch (error) {
     console.error("occured error", error.message);

    res.status(500).json({error : 'Internal server error'});
    

    
  }
})

router.get('/:tastetype',async(req,res)=>{
    try {

        const tastetype=req.params.tastetype;

        if(tastetype=='sweet' || tastetype=='spicy'|| tastetype=='sour'){
            const response=await MenuItems.find({taste:tastetype});
            res.status(200).json(response);
        }

        
        
    } catch (error) {
        
         console.error("occured error", error.message);

    res.status(500).json({error : 'Invalid taste type'});
    }
})

module.exports=router;
