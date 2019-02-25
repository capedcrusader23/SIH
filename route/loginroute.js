const express=require('express');
const app=express();
var route=express.Router();
route.get('/',(req,res)=>{
  res.send("Hello");
})



module.exports=route;
