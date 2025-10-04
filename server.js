const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const Person=require('./models/person');
const PORT= process.env.PORT || 3001;


app.get('/',(req,res)=>{
    res.send(
" welcome to Hotels"
    )
});



const PersonRouter=require('./routes/personroute');
app.use('/person',PersonRouter);
const MenuRouter=require('./routes/menuitems');
app.use('/menu',MenuRouter);



app.listen(PORT,()=>{
    console.log(` server is running on http://localhost:${PORT}`);
})
