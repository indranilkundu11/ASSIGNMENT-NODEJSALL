const express = require('express');
const app=express();
var bodyParser = require('body-parser')
​
app.use(bodyParser());
app.set('views','./views');
app.set('views engine','ejs');
var users = [{
    name:"Sandeep",
    age:25,
    email:"sandeep@gmail.com",
    profession:"IT",
    city:"Noida"
},
{
    name:"Shlok",
    age:21,
    email:"shlok@gmail.com",
    profession:"Mechanical",
    city:"Delhi"
},{
    name:"Kundan",
    age:24,
    email:"kundan@gmail.com",
    profession:"Civil",
    city:"Bangalore"
},{
    name:"Sohan",
    age:30,
    email:"sohan@gmail.com",
    profession:"Automobile",
    city:"Raipur"
}];
​
​
app.get("/",(req,res)=>{
    res.render('index.ejs',{users});
})
​
app.get("/form",(req,res)=>{
    res.render('form.ejs');
})
​
app.post("/user/add",(req,res)=>{
    users.push({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    profession:req.body.profession,
    city:req.body.city
    })
    res.redirect('/');
})
​
app.listen(3000,()=>console.log('hello'))