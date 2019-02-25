const express=require('express');
const app=express();
const userroute=require('./route/user.js')
const login=require('./route/loginroute.js')
const ejs=require('ejs')
const mysql=require('mysql');

var db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'sih'
});
db.connect((err)=>{
  if(err)
  {
    console.log(err)
  }
  else
  {
  console.log("MYSQL CONNECTED")  
  }
});



app.set('view engine','ejs');
app.use(userroute);


app.listen('1111',()=>{
  console.log("RUnning at 1111");
})
