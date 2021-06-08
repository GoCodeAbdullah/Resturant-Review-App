var express = require('express');
var router = express.Router();
var {Users} = require("../../models/users");
var validateSignUp = require("../../middlewares/validateSignup");
var validateLogIn = require("../../middlewares/validateLogin");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config");
// /* GET users listing. */
// router.get('/', async function(req, res, next) {
//   let users = await Users.find();
//   res.send(users);
// });
// /* Delete users listing. */
// router.delete('/:id', async function(req, res, next) {
//   let users = await Users.findById({_id:req.params.id});
//   if(!users) return res.status(400).send("User not Found");

//   await Users.findByIdAndDelete({_id:req.params.id})

//   res.send("Delete Successfully");
// });
// /* Edit users listing. */
// router.put('/:id', async function(req, res, next) {
//   let users = await Users.findById({_id:req.params.id});
//   if(!users) return res.status(400).send("User not Found");

//   users.name = req.body.name;
//   users.email = req.body.email;
//   users.password = req.body.password; 
//   users.phone = req.body.phone;
//   let salt = await bcrypt.genSalt(10);
//   users.password = await bcrypt.hash(users.password,salt);
//   await users.save();

//   res.send("Update Successfully");
// });


/* SignUp User users listing. */
router.post('/signup',validateSignUp, async function(req, res, next) {
  let user = await Users.findOne({email:req.body.email});
  if(user) return res.status(400).send("User Already Exist");
  
  let users = new Users();
  users.name = req.body.name;
  users.email = req.body.email;
  users.phone = req.body.phone;
  users.password = req.body.password; 

  let salt = await bcrypt.genSalt(10);
  users.password = await bcrypt.hash(users.password,salt);

  await users.save();
  return res.send(users);
});

router.post("/login",validateLogIn,async function(req,res,next){
  let use = await Users.findOne({email:req.body.email});
  if(!use) return res.status(400).send("User does not Exist");

  let isValid = await bcrypt.compare(req.body.password,use.password);
  if(!isValid) return res.status(401).send("Password not correct");

  let token = jwt.sign({_id:use._id, name:use.name},config.get("jwtwebtoken"));

  return res.send(token);
})


module.exports = router;
