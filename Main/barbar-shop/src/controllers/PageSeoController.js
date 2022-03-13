const PageSeoModel = require("../models/PageSeoModel");
exports.PageSeo=(req,res)=>{
    let name=req.params.name;
    PageSeoModel.find({name:name},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}