const mongoose=require('mongoose');
const { Schema }=mongoose;
const userschema=new Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
    profession:String,
    selected:{type:Boolean,default:false}
},{timestamp:true})
const User=mongoose.model('User',userschema);
module.exports=User; 