const express=require('express');
const app=express();
const userroute=require('./route/user.js')
const login=require('./route/loginroute.js')
const ejs=require('ejs')
const mysql=require('mysql');





app.set('view engine','ejs');
app.use(userroute);


app.listen('1111',()=>{
  console.log("RUnning at 1111");
})
