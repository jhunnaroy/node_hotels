const express=require('express');
const router=express();
const Person=require('./../models/person');




router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log(" Data was saved");
    res.status(200).json(response);

  } catch (error) {
    console.error(" Error saving person:", error.message);
    res.status(500).json({ error: error.message });
  }
});
router.get('/',async(req,res ) => {
    try {
        const perons=await Person.find();
        res.status(200).json(perons);
        
    } catch (error) {
        
         console.error(" Error saving person:", error.message);
      res.status(500).json({ error: error.message });
    }
})


router.get('/:worktype',async(req,res)=>{
  try {

    const worktype=req.params.worktype;
    if(worktype=='manager' || worktype == 'chef' || worktype=='worker'){
      const response=await Person.find({work:worktype});
      res.status(200).json(response);
    }
    
  } catch (error) {
         console.error(" Error saving person:", error.message);
      res.status(500).json({ error: error.message });
    }
    
  
})

// updataed data 
router.put('/:id',async(req,res)=>{
    try {

        const personId=req.params.id;
        const updatedData=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedData,{
            new :true,
            runValidators: true
        });
        if(!response){
            return res.status(404).json({error : "person not found"});
        }
        res.status(200).json(response);

        
        
    } catch (error) {
            console.error(" Error saving person:", error.message);
      res.status(500).json({ error: error.message });
    }
        
    
})

// Delete data
router.delete("/:id", async(req,res)=>{
    try {

        const personId=req.params.id;
        const deletData=await Person.findByIdAndDelete(personId);
        if(!deletData){
            res.status(404).json({message: "person not found"});
        }
        res.status(200).json({message:"person was deleted successfully"});
        
    } catch (error) {
              console.error(" Error saving person:", error.message);
      res.status(500).json({ error: error.message });

        
    }
})

module.exports=router;