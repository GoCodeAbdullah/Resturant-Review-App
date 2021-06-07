const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var userSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
});

var user = mongoose.model("Users",userSchema);

function validateSignup(data){
    const scheme = Joi.object({
        name: Joi.string().min(3).max(14).required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).required()
    });

    return scheme.validate(data);
}

module.exports.Users = user;
module.exports.validateSignups = validateSignup;