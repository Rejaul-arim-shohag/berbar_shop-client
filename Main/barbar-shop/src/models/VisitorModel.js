const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    IPAddress:{type:String},
    VisitDateTime:{type: Date, default: Date.now},
},{versionKey:false});
const VisitorModel=mongoose.model('visitors',DataSchema);
module.exports=VisitorModel