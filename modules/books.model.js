const {Schema ,model}=require("mongoose");

const bookSchema=new Schema({
    title:{type:String , required:true},
    author:{type:String, required:true},
    content:{type:String ,required:true},
    pages:{type:Number ,required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

module.exports=new model("book",bookSchema);