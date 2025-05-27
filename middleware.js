const Listing = require("./models/listing");
const wrapAsync = require("./utils/wrapAsync");
const expressError = require("./utils/expressError");
const {reviewSchema,listingSchema} = require("./schema.js");
const Review = require("./models/review.js");
module.exports.isLoggedIn =  (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;//path 
        req.flash("error", "You must be logged In to perform this activity");
        res.redirect("/login");
    }else{
        next();
    }
    
};

module.exports.saveRedirectUrl= ( req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};



module.exports.isOwner =async( req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","Only Owner of this listing can perform such activity");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isReviewAuthor =async( req,res,next)=>{
    let {id,r_id} = req.params;
    let review = await Review.findById(r_id);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","you can't delete this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};






module.exports.validateList = ((req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        console.log(error,"next");
        let errMsg = error.details.map((el)=>el.message).join(",");
        console.log();
        throw new expressError(400,errMsg)
    }else{
        next();
    }
});



module.exports.validateReview = ((req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }else{
        next();
    }
});