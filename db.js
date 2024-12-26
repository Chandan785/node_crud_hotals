const mongoose = require('mongoose');
//define the mongoDB connection url
 
mongoose.connect('mongodb://localhost:27017/hotels');

//set up mongodb connection  

// mongoose.connect(mongoURL,{
//     useNewURLparser:true,
//     useUnifiedTopology:true
// })
 
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

module.exports=db;