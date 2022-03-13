const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    name:{type:String},
    title:{type:String},
    share_title:{type:String},
    description:{type:String},
    keywords:{type:String},
    page_img:{type:String},
},{versionKey:false});
const PageSeoModel=mongoose.model('page_seos',DataSchema);
module.exports=PageSeoModel