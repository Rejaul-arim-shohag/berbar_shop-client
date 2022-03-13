const FeaturesModel = require("../models/FeaturesModel");
exports.AllFeatures=(req,res)=>{
    FeaturesModel.find({},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}