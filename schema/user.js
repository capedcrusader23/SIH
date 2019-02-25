cosnt mongoose=require('mongoose');
const schema=mongoose.Schema;

let user=new schema({
name:{
  type:String
},
Eid:{
  type:String
},
Access_Level:{
  type:String
},
email:{
  type:String
},
pass:{
  type:String
}
})

const us=mongoose.model('user',user);
module.exports=us;
