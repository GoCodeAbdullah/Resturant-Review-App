const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var resturantSchema = mongoose.Schema({
    name: String,
    description: String,
    city: String,
    address: String
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

module.exports.Resturant = resturants;
module.exports.validateResturants= validateResturant;