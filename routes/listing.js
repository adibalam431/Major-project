
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateList } = require("../middleware.js");
const User = require("../models/user.js");
const listingController = require("../controllers/listing.js");

const multer = require("multer");     //use for save files
const { storage } = require("../cloudConfig")
const upload = multer({ storage })//same use file save location

const expressError = require("../utils/expressError");
const { listingSchema } = require("../schema.js");//for server site validation joi



router.route("/")
    .get((listingController.index))
    .post( isLoggedIn, upload.single("list[image]"),validateList, wrapAsync(listingController.newListing));



router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

router.get("/filter",(req, res) => {
        res.render("listings/underConstruction.ejs");
    });

router.route("/:id/edit")
    .get(isLoggedIn, isOwner, wrapAsync(listingController.editListing))
    .put(isLoggedIn, isOwner, upload.single("list[image]"), validateList, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));



router.get("/:id", wrapAsync(listingController.showListing));

router.all("*", (req, res, next) => {
    next(new expressError(404, "Page not found!"));
});

module.exports = router;