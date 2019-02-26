var mysql=require('mysql')
var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'rachna1423'
});

con.connect(function(err){
if(err) throw err;
console.log("connected");
})
const Sequelize=require('sequelize');
const db=new Sequelize('sihfinal','root','rachna1423',{
  dialect:'mysql',
  host:'localhost',
  port:3306,
  freezeTableName:true,
  operatorsAliases:false
})

var user=db.define('users',{
  user_id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  user_name:{
    type:Sequelize.STRING
  },
  Access:{
    type:Sequelize.STRING
  },
  email:{
    type:Sequelize.STRING
  },
  pass:{
    type:Sequelize.STRING
  }
})

db.sync().then(()=>{
  console.log("DB SYNCED")
})
module.exports={
user,db
}
