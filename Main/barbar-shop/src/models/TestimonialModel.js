const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    name:{type:String},
    photo:{type:String},
    comments:{type:String},
    rating:{type:String}
},{versionKey:false});
const TestimonialModel=mongoose.model('testimonials',DataSchema);
module.exports=TestimonialModel