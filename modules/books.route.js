const router =require("express").Router();
const bookController=require("./books.controller");
const {validate}=require("./books.validation ")

router.get("/",async(req,res,next)=>{
    try{
        const result=await bookController.get();
        res.json({result});
    }catch(e){next(e)}
})
router.get("/:id",async(req,res,next)=>{
    try{
        const result=await bookController.getById(req.params.id);
        res.json({result});
    }catch(e){
        next(e)}
})
router.post("/",validate,async(req,res,next)=>{
    try{
        const result=await bookController.create(req.body);
        res.json({result});
    }catch(e){next(e)}
})
router.put("/:id",async(req,res,next)=>{
    try{
        const result=await bookController.updateById(req.params.id,req.body);
        res.json({result});
    }catch(e){next(e)}
})
router.patch("/:id",async(req,res,next)=>{
    try{
        const result=await bookController.updateById(req.params.id,req.body);
        res.json({result});
    }catch(e){next(e)}
})

router.delete("/:id",async(req,res,next)=>{
    try{
        const result= await bookController.deleteById();
        res.json({result});
    }catch(e){next(e)}
})

module.exports= router;