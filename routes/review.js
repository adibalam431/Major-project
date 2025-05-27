const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const {reviewSchema,listingSchema} = require("../schema.js");
const Listing = require("../models/listing");
const { isLoggedIn,validateReview,isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");
 
//reviews
   //post route
   router.post("/",validateReview,isLoggedIn, wrapAsync(reviewController.createReview));

  //delete review route 
  router.delete("/:r_id",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));


  module.exports = router;