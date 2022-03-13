const TestimonialModel = require("../models/TestimonialModel");
exports.AllTestimonial=(req,res)=>{
    TestimonialModel.find({},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}