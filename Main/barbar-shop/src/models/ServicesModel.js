const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    name:{type:String},
    price:{type:String},
},{versionKey:false});
const ServicesModel=mongoose.model('services',DataSchema);
module.exports=ServicesModel