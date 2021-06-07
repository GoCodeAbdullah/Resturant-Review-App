var express = require('express');
var router = express.Router();
const {Resturant} = require("../../models/resturants");
const validateResturant = require("../../middlewares/validateResturant");

/* GET resturant */
router.get('/', async function(req, res, next) {
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

  res.send("Edited Sucessfully");

})

  
module.exports = router;