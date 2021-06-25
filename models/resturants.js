const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var reviewSchema = mongoose.Schema({
    customerId: String,
    rating: {
        type:Number,
        default:0
    },
    review: String
})

var resturantSchema = mongoose.Schema({
    name: String,
    description: String,
    city: String,
    address: String,
    reviews: [reviewSchema]
})




var resturants = mongoose.model("Resturants",resturantSchema);

function validateResturant(data){
    const scheme = Joi.object({
        name: Joi.string().min(3).max(14).required(),
        description: Joi.string().min(3).max(500).required(),
        city: Joi.string().min(3).max(30).required(),
        address: Joi.string().min(3).max(30).required(),
    });

    return scheme.validate(data);
}

function validateReview(data){
    const scheme = Joi.object({
        customerId: Joi.string().required(),
        rating: Joi.number().required(),
        review: Joi.string().required(),
        
    });

    return scheme.validate(data);
}


module.exports.Resturant = resturants;
module.exports.validateResturants= validateResturant;
module.exports.validateReviews= validateReview;