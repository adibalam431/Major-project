const Listing = require("../models/listing");
const Review = require("../models/review.js");

module.exports.deleteReview = async (req, res) => {
    let { id, r_id } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: r_id } });
    await Review.findByIdAndDelete(r_id);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
};

module.exports.createReview = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    listing.owner = req.user._id;
    await newReview.save();
    await listing.save();
    req.flash("success", "New review added!");
    res.redirect(`/listings/${id}`);
}