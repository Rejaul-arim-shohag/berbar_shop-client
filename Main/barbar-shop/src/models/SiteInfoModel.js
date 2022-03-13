const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    SiteLogo:{type:String},
    SiteTitle:{type:String},
    SiteSubTitle:{type:String},
    SiteMobile:{type:String},
    SiteEmail:{type:String},
    SiteAddress:{type:String},
    GoogleMapLink:{type:String},
    FacebookLink:{type:String},
    TwitterLink:{type:String},
    InstagramLink:{type:String},
    AboutDes:{type:String},
},{versionKey:false});
const SiteInfoModel=mongoose.model('site_infos',DataSchema);
module.exports=SiteInfoModel