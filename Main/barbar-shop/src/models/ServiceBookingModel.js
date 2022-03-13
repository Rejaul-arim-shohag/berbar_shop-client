const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    BookingDate:{type:String},
    BookingTime:{type:String},
    ServiceName:{type:String},
    ServicePrice:{type:String},
    Mobile:{type:String},
    Email:{type:String},
    Name:{type:String},
    RequestStatus:{type:String},
    RequestDateTime:{type: Date, default: Date.now},
},{versionKey:false});
const ServiceBookingModel=mongoose.model('service_books',DataSchema);
module.exports=ServiceBookingModel