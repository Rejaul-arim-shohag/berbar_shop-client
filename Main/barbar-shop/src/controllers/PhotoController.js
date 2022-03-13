const PhotoModel = require("../models/PhotoModel");
exports.AllPhotos=(req,res)=>{
    PhotoModel.find({},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.PhotoByRemark=(req,res)=>{
    let remark=req.params.remark;
    PhotoModel.find({remark:remark},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}