const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    Message:{type:String},
    Subject:{type:String},
    Email:{type:String},
    Name:{type:String},
    ContactDateTime:{type: Date, default: Date.now},
},{versionKey:false});
const ContactModel=mongoose.model('contacts',DataSchema);
module.exports=ContactModel