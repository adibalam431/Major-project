const { text } = require("express");
const mongoose = require("mongoose");
const Review = require("./review");
const { string } = require("joi");
const defaultLink = "https://cdn.pixabay.com/photo/2024/08/26/23/38/maranhao-sheets-9000410_1280.jpg";

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url:String,
        fileName:String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing; 