const {validateReviews} = require("../models/resturants");

function validateRev(req,res,next){
    let {error} = validateReviews(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    next();
}
module.exports = validateRev;