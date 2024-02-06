const {Schema ,model}=require("mongoose");

const bookSchema=new Schema({
    title:{type:String , required:true},
    author:{type:String, required:true},
    pages:{type:Number ,required:true},
})

module.exports=new model("book",bookSchema);