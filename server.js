const express = require('express')
const app=express();
const db = require('./db');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());//req.body

const person =require('./models/person'); 
app.get('/', function(req, res){
    res.send('welcome! in my site  may i help you!')
}) 

//imports the router file
const personRoutes =require('./router/personroutes')
//use router
app.use('/person', personRoutes); 
app.listen(3000,()=>{
    console.log('listing on port 3000')   
})