const Joi = require("joi");//for schema validation
const Listing = require("./models/listing");
const Review = require("./models/review");

module.exports.listingSchema = Joi.object({
    list:Joi.object({
        _id:Joi.string().allow(),
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        image: Joi.any(),
    }).required()
}); 

module.exports.reviewSchema = Joi.object({
    review:Joi.object({
        comment:Joi.string().required().min(10).max(350),
        rating:Joi.number().required().min(1).max(5)
    }).required()
});

