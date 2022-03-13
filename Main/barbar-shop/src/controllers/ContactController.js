const ContactModel = require("../models/ContactModel");
exports.CreateContact=(req,res)=>{
    ContactModel.create(req.body,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:null})
        }
        else {
            res.status(200).json({status:"success",data:req.body})
        }
    })
}