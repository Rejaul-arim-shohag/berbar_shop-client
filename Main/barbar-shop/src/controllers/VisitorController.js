const VisitorModel = require("../models/VisitorModel");
exports.CreateVisitor=(req,res)=>{
    let reqIP=req.headers['x-forwarded-for'] || req.socket.remoteAddress ;
    let PostBody={
        IPAddress:reqIP
    }
    VisitorModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:reqIP})
        }
        else {
            res.status(200).json({status:"success",data:reqIP})
        }
    })
}