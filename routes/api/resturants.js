var express = require('express');
var router = express.Router();
const {Resturant} = require("../../models/resturants");
const validateResturant = require("../../middlewares/validateResturant");
const validateReview = require("../../middlewares/validateResturant");
const auth = require("../../middlewares/auth");
const { Users } = require('../../models/users');
const { x } = require('@hapi/joi');

/* GET resturant */
router.get('/', async function(req, res, next) {
    console.log(req.user);
    let rest =await Resturant.find();
    return res.send(rest);

});
/* GET resturant */
router.get('/:id', async function(req, res, next) {
  try {
    var rest = await Resturant.findById(req.params.id);
    if (!rest) {
      res.status(400).send("Given ID is not found");
    }
    return res.send(rest);
  } catch (err) {
    res.status(400).send("invalid ID");
  }

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


router.post("/review/:id",async function(req,res,next){
  
  let rest =await Resturant.findById({_id:req.params.id});
  if(!rest) return res.status(400).send("User not Exist"); 
  console.log(rest.reviews)

  rest.reviews.map((resturant)=>{
    if(resturant.customerId==req.body.id)
    {
      res.status(400).send("User Already Review")
    }

  })


  let review ={
      customerId: req.body.id,
      rating: req.body.rating,
      review: req.body.review
  }

  console.log("Here");

  rest.reviews.push(review);

  await rest.save();
  
  return res.send("Reviewed Successfully");

})
  
module.exports = router;