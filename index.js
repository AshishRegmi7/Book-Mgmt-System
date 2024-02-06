const express=require("express");
const app =express();
const morgan=require("morgan");
require("dotenv").config();
const PORT=Number(process.env.PORT);
const indexRouter=require("./routes");
const mongoose=require("mongoose");

mongoose.connect(process.env.DB).then(
    console.log("Database is connected")
)

app.use(express.json());
app.use(express.static("public"));
app.use((err,req,res,next)=>{
    err=err?err.toString() :"Something went wrong";
    err.status(500).json({msg:err})
})

app.use("/",indexRouter);
app.listen(PORT,()=>{
    console.log(`Express-Application is running on ${PORT}`)
})