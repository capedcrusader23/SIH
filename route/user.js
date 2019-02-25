const express=require('express');
const app=express();
var route=express.Router();
var passport=require('passport')
var body=require('body-parser')
var url=body.urlencoded({ extended: false })
var isAuth=function(req,res,next){
var user=require('./schema/user.js')
if(req.user==null)
{
res.redirect('/localhome')
}
else
{
next();
}
}





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
var us=new user();
us.name=req.body.name;
us.email=req.body.em;
us.Access_Level=req.body.position;
us.pass=req.body.pass;
us.save().then((da)=>{
  console.log(da);
  res.redirect('/localhome')
})
})
module.exports=route;
