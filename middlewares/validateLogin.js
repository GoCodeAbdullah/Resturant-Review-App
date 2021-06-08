const {validateLogins} = require("../models/users");

function validateLogIn(req,res,next){
    let {error} = validateLogins(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    next();
}
module.exports = validateLogIn;