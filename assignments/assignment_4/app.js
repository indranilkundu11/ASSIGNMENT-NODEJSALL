const express=require("express");
const app=express();
const user=require('./modal/user.js');
var bodyparser=require("body-parser");
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment_4')
app.set("views","./views");
app.set("view engine","ejs");
var methodOverride = require('method-override');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));
//override with POST having ? _method=DELETE
app.use(methodOverride('_method'))

app.get("/", async (req,res)=>{
    // fetch the data from data base
    const users=await user.find()
    res.render("index.ejs",{users})
})
app.get("/form",(req,res)=>{
    res.render("form.ejs")
})
app.post("/user/add",async (req,res)=>{
   // console.log(req.body)
    // write data in database
    console.log(req.body)
    const {name,email,age,city,profession}=req.body;
    await user.create({
        name,
        email,
        age,
        city,
        profession

    })
    res.redirect("/")
})
app.put("/user/:id/select",async (req,res)=>{
     // write updating data  in database
     await user.updateOne({_id:req.params.id},{selected:true})
     res.redirect("/")
 })
 app.delete("/user/:id/delete",async (req,res)=>{
     // write deleting  data  in database
     await user.deleteOne({_id:req.params.id},{selected:true})
     res.redirect("/")
 })
app.listen(3000,()=>{
    console.log("express sever is ready")
}) 