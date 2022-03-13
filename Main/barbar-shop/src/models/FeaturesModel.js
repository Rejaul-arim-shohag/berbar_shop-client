const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    title:{type:String},
    icon:{type:String},
    des:{type:String}
},{versionKey:false});
const FeaturesModel=mongoose.model('features',DataSchema);
module.exports=FeaturesModel