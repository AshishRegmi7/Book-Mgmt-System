const bookModel=require("./books.model");

const create=(payload)=>{
    return bookModel.create(payload);
}
const get=()=>{
    return bookModel.find();
}
const getById=(_id)=>{
    return bookModel.findOne({_id});
}
const updateById=(_id,payload)=>{
    return bookModel.updateOne({_id},payload);
}
const deleteById=(_id)=>{
    return bookModel.deleteOne({_id});
}

module.exports={create,get,getById,updateById,deleteById};