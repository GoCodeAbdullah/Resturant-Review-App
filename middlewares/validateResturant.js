const {validateResturants} = require("../models/resturants");

function validateRest(req,res,next){
    let {error} = validateResturants(req.body);

    if(error) return res.status(400).send(error.details);
    next();
}
module.exports = validateRest;