const mongoose =require('mongoose');//require mongoose
const schema = mongoose.Schema({//give the schema for data
    Name:String,
    Age: Number,
    Place:String,
    Phone:Number
})
const userMode1=mongoose.model("user",schema);//create model to add data to database
module.exports=userMode1;//export the data
