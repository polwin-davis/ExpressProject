//1.import express
var express = require('express');
require('./connection')
const user = require('./model/user');
//2.Insitialization
var app=express();


//middleware
app.use(express.json());//enable to accept the json format
//3.api
//app.get("path",(req,res)=>{})
app.get('/',(req,res)=>{res.send("hello")})
app.get('/login',(req,res)=>{res.send("I logged in")})
//to add data into db
app.post('/add',async(req,res)=>{
    try{
            console.log(req.body);
            user(req.body).save()//save the data as per the model
            res.send({message:"data added successfully!!"})
    }catch{
            console.log(error)
    }
})
//to view the data in the database
app.get('/view',async(req,res)=>{
try{
    const data = await user.find()
    res.send(data)
}catch (error){
    console.log(error)
}
})

//to delete the data from database
app.delete('/remove/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        var data = await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted"})
    }catch(error)
    {
        console.log(error)
    }
})
//Update the database
app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:'updated successfully',data})
    } catch (error) {
        console.log(error)
    }
})


//4.port allocation
app.listen(3000,()=>{
    console.log("port is up and running")//callback function to required code is running


})