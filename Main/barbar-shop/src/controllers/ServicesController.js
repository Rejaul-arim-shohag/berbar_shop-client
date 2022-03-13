const ServicesModel = require("../models/ServicesModel");
const ServiceBookingModel = require("../models/ServiceBookingModel");
exports.AllServices=(req,res)=>{
    ServicesModel.find({},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.BookServices=(req,res)=>{
    ServiceBookingModel.create(req.body,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}