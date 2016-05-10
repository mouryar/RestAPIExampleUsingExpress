var express = require('express')
  , router = express.Router();
var users;
users = [{
    id:1,
    name:'Mourya',
    lastName:'rajala'   
},
{
    id:2,
    name:'Mourya',
    lastName:'rajala'   
},
{
    id:3,
    name:'Mourya',
    lastName:'rajala'   
}]
router.get('/', function(req,res){
   return res.json(
       {
           users: users,
           error: false
       }
   )  
});

router.post('/', function(req,res){
   if(!req.body.name){
       return res.json({
          message:'user name is missing',
          error:true           
       });
   }
   users.push(req.body);
   return res.json(
       {
          message: 'success',
          error:false
       }
   );  
});

router.get('/:id',function(req,res){
   
   console.log(req.params.id);
   return res.json(
       {
          message: 'success',
          error:false
       });
});

module.exports = router;