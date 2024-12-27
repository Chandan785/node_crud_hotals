const mongoose = require('mongoose');
require('dotenv').config();
//define the mongoDB connection url
 
//mongoose.connect('');
//mongoose.connect('');

const mongoURL = process.env.mongoDB_URL;

//const mongoURL='mongodb+srv://chandankumar700451:<Chandan211>@cluster0.wtsxz.mongodb.net/'
//set up mongodb connection  

 mongoose.connect(mongoURL,{
     useNewURLparser:true,
     useUnifiedTopology:true
 })

 
//mongoose maintain a default connection representing the mongo connection
const db= mongoose.connection;

//define event listener for database connection 
db.on('connected',()=>{
    console.log('connected to mongoDB server');
});
db.on('error',()=>{
    console.log('connected to mongoDB connection error in server');
});
db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server');
});



//export the db 
module.exports=db;