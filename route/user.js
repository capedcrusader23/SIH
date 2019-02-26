const express=require('express');
const app=express();
var route=express.Router();
var passport=require('passport')
var body=require('body-parser')
var url=body.urlencoded({ extended: false })
var isAuth=function(req,res,next){
const user=require('../db/db.js').user
console.log(user)
var db=require('../db/db.js').db
console.log(user);
if(req.user==null)
{
res.redirect('/localhome')
}
else
{
next();
}
}

const mysql=require('mysql');

route.post('/local',passport.authenticate('local',{successRedirect:'/home',failureRedirect:'/localhome'}));

route.get('/localhome',(req,res)=>{
  res.render('local');
})
route.get('/home',isAuth,(req,res)=>{
  res.send(req.user);
})

route.get('/signup',(req,res)=>{
  res.render('signup')
})
route.post('/signup',url,(req,res)=>{
  console.log(req.body)
let user={id:Math.floor(Math.random()*100000000),name:req.body.name,Access:req.body.position,email:req.body.em,pass:req.body.pass}
user.create({
user_name:req.body.name,
Access:req.body.position,
email:req.body.em,
pass:req.body.pass
}).then((resp)=>{
  res.send(resp)
})
})

route.get('/getusers',(req,res)=>{
  db.query('Select * from users',(err,result)=>{
    console.log(result)
  })
})


module.exports=route;
