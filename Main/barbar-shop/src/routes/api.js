const express =require('express');
const VisitorController=require("../controllers/VisitorController")
const ContactController=require("../controllers/ContactController")
const PhotoController=require("../controllers/PhotoController")
const TestimonialController=require("../controllers/TestimonialController")
const FeaturesController=require("../controllers/FeaturesController")
const ServicesController=require("../controllers/ServicesController")
const PageSeoController=require("../controllers/PageSeoController")

const router =express.Router();

// Track Visitor
router.get("/create-visitor",VisitorController.CreateVisitor);

// CreateContact
router.post("/create-contact",ContactController.CreateContact);

//Photos
router.get("/all-photos",PhotoController.AllPhotos);
router.get("/by-remark-photos/:remark",PhotoController.PhotoByRemark);

//Testimonial
router.get("/all-testimonial",TestimonialController.AllTestimonial);

//AllFeatures
router.get("/all-features",FeaturesController.AllFeatures);

// AllServices
router.get("/all-services",ServicesController.AllServices);
router.post("/book-services",ServicesController.BookServices);

//Site Ifno
router.get("/all-siteinfo",ServicesController.BookServices);
router.get("/page-seo/:name",PageSeoController.PageSeo);



module.exports=router;