const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateList } = require("../middleware.js");
const { listingSchema } = require("../schema.js");//for server site validation joi
const expressError = require("../utils/expressError");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};


module.exports.showListing = (async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing })
});


module.exports.newListing = (async (req, res) => {
   
        let url = req.file.path;
        let fileName = req.file.filename;
        const newListing = new Listing(req.body.list);
        newListing.owner = req.user._id;
        newListing.image = {url,fileName};
        await newListing.save();
        req.flash("success", "New listing created!");
        res.redirect("/listings");
   
});

module.exports.editListing = (async (req, res) => {
    let { id } = req.params;
    const found = await Listing.findById(id);

    if (!found) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings")
    }
let orgImg = found.image.url;
orgImg = orgImg.replace("/upload","/upload/h_300,w_250");

    res.render("listings/edit.ejs", { found,orgImg })
});

module.exports.updateListing = (async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.list });
    if( typeof req.file !== "undefined"){
        let url = req.file.path;
        let fileName = req.file.filename;
        listing.image = {url,fileName};
        await listing.save(); 
    }
    req.flash("success", "listing updated!");
    res.redirect(`/listings/${id}`);
});

module.exports.deleteListing = (async (req, res) => {
    try {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing deleted!");
    } catch (error) {
        console.log(error);
    };
    res.redirect("/listings");
});