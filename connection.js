//1.import mongoose
const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://polwindavis123:polwin@cluster0.2swxggc.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to db");
})

.catch(error=>{
    console.log(error);
})