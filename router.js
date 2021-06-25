var express = require('express')
var app = express();
var router = express.Router();
var personModel = require('./models/person');

router.get('/',(req,res)=>{
    res.send('hello')
})


var person = new personModel({
  name:"Ons",
  age:15,
  favoriteFoods:["pasta","steak","chiken"]

})
///////////////
personModel.create({
     name:"yesser",
     age:5,
     favoriteFoods:["milk","sweet","chocolate"]
 },{
     name:"feten",
    age:16,
    favoriteFoods:["pasta","steak","strawberry"]

 });
 //////////////////////////////  
router.get('/find',(req,res)=>{
  personModel.find()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
      console.log(err)
  })
}) 

// /////////////////////////////
router.get('/findone',(req,res)=>{
 
personModel.findOne({name:"yesser"},{favoriteFoods:1})
.then((result)=>{
  res.send(result)})

.catch((err)=>{
  console.log(error)
})
})


// ////////////////////
router.get('/findid',(req,res)=>{
 
  personModel.findById('60d31b66b4da161f7c181aaf')
  .then((result)=>{
    res.send(result)})
  
  .catch((err)=>{
    console.log(error)
  })
  })

//////////////////////
router.put('/add',(req,res)=>{
 personModel.updateOne({_id:'60d31a76187ce01780a4051e'},{ $push: { favoriteFoods: "hamburger" }})
 .then((result)=>{
    res.send(result)})
  
  .catch((err)=>{
    console.log(error)
  })

})
////////////////////:
router.put('/findupdate',(req,res)=>{
  personModel.findOneAndUpdate({name:'yesser'},{ $set: { age:20 }})
  .then((result)=>{
     res.send(result)})
   
   .catch((err)=>{
     console.log(error)
   })
 
 })
////////////////////////
router.delete('/findandremove',(req,res)=>{
personModel.findOneAndRemove({_id:'60d31a76187ce01780a4051e'})
.then((result)=>{
res.send(result)
})
.catch((error)=>{
console.log(error)
})

})
//////////////////////////
router.get('/foods',(req,res)=>{

  
    const foodToSearch = 'pasta';
    personModel.find({favoriteFoods:foodToSearch})
           .sort({ name: 1 })
           .limit(2)
           .select({ age: 0 })
      
    .then((result)=>{
       res.send(result)
    })
    .catch((error)=>{
     cosole.log(error)
    })

})



/////////////:
 person.save()
 .then(doc => {
   console.log(doc)
 })
 .catch(err => {
   console.error(err)
 }) 

module.exports = router
