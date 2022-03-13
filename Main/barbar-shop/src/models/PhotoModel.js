const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    name:{type:String},
    photo:{type:String},
    remark:{type:String}
},{versionKey:false});
const PhotoModel=mongoose.model('photos',DataSchema);
module.exports=PhotoModel