var express = require('express');
var router = express.Router();
const {Resturant} = require("../../models/resturants");
const validateResturant = require("../../middlewares/validateResturant");
const validateReview = require("../../middlewares/validateResturant");
const auth = require("../../middlewares/auth");
const { Users } = require('../../models/users');
const { x } = require('@hapi/joi');

/* GET resturant */
router.get('/',auth, async function(req, res, next) {
    console.log(req.user);
    let rest =await Resturant.find();
    return res.send(rest);

});

/* Post Resturant */
router.post('/',validateResturant, async function(req, res, next) {
  let rest = new Resturant();

  rest.name = req.body.name;
  rest.description = req.body.description;
  rest.city = req.body.city;
  rest.address = req.body.address;

  await rest.save();

  return res.send("Saved Successfully");
});

// Delete Resturant

router.delete("/:id",async function (req,res,next) {
  try {
    let rest =await Resturant.findById({_id:req.params.id});
    if(!rest) return res.status(400).send("User not Exist");  

  let restDelete = await Resturant.findByIdAndDelete({_id:req.params.id});
  res.send("Delete Successfully");
    
  } catch (error) {
    return res.status(400).send("Invalid ID");  
  }
})


// Edit Resturants

router.put("/:id",validateResturant, async function(req,res,next){
  let rest =await Resturant.findById({_id:req.params.id});
  if(!rest) return res.status(400).send("User not Exist");  

  rest.name = req.body.name;
  rest.description = req.body.description;
  rest.city = req.body.city;
  rest.address = req.body.address;

  rest.save();

  return res.send("Edited Sucessfully");

})


router.put("/review/:id",auth,async function(req,res,next){
  
  let rest =await Resturant.findById({_id:req.params.id});
  if(!rest) return res.status(400).send("User not Exist"); 


  let review ={
      customerId: req.user._id,
      rating: req.body.rating,
      review: req.body.review
  }

  console.log("Here");

  rest.reviews.push(review);

  await rest.save();
  
  return res.send("Reviewed Successfully");

})
  
module.exports = router;