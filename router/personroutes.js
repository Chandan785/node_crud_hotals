const express =require('express');
const router =express.Router();

const person =require('./../models/person');



router.get('/', async (req, res)=>{
    try{  
    const data =await person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server eror'})

    }
})

router.post('/',async(req,res)=>{
    try{
const data =req.body//assuming the request body contains the person data 

//create new perso during the document
const newperson = new person(data);

// save the new person to the database 
 const response =await newperson.save();
 console.log(' data saved')
 res.status(200).json(response)
    }
    catch(err){
console.log(err);
res.status(500).json({error:'internal server error'});
    }
})




router.get('/:worktype',async(req,res)=>{
    try{
        //extract the work from hte url parameter
        const worktype =req.params.worktype;
 if(worktype=='Student'||worktype=='Teacher'||worktype=='Employee'){
    const response = await person.find({work: worktype});
 console.log('data fatched ');
 res.status(200).json(response);
 }else{

 }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})



router.put('/:id',async(req,res) => {
try{
const personid = req.params.id;//extract the id from the url parameter
const upadatedpersondata=req.body;//updated data for the person

const response =await person.findByIdAndUpdate(personid,upadatedpersondata,{
    new:true,
    runValidators:true
})

if(!response){ 
    return res.status(404).json({error:'person not fount'})
}
console.log('data updated');
res.status(200).json(response)
}
catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
}
})


router.delete('/:id',async(req,res)=>{ 
    try{

        const personid = req.params.id;//extract the id from the url parameter
        const response= await person.findOneAndDelete(personid);

        console.log('data deleated')
        res.status (200).json({massage:'peson data detleted successfuly'})
        if(!response){ 
            return res.status(404).json({error:'person not fount'})
        }
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})



module.exports = router;