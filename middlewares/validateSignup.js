const {validateSignups} = require("../models/users");

function validateSignUp(req,res,next){
    let {error} = validateSignups(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    next();
}
module.exports = validateSignUp;