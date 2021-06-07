var express = require('express');
var router = express.Router();
var {Users} = require("../../models/users");
var validateSignUp = require("../../middlewares/validateSignup");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let users = await Users.find();
  res.send(users);
});

/* SignUp User users listing. */
router.post('/signup',validateSignUp, async function(req, res, next) {
  let user = await Users.findOne({email:req.body.email});
  if(user) return res.status(400).send("User Already Exist");
  
  let users = new Users();
  users.name = req.body.name;
  users.email = req.body.email;
  users.password = req.body.password;
  users.phone = req.body.phone;

  await users.save();
  res.send(users);
});

/* Delete users listing. */
router.delete('/:id', async function(req, res, next) {
  let users = await Users.findById({_id:req.params.id});
  if(!users) return res.status(400).send("User not Found");

  await Users.findByIdAndDelete({_id:req.params.id})

  res.send("Delete Successfully");
});

/* Edit users listing. */
router.put('/:id', async function(req, res, next) {
  let users = await Users.findById({_id:req.params.id});
  if(!users) return res.status(400).send("User not Found");

  users.name = req.body.name;
  users.email = req.body.email;
  users.password = req.body.password;
  users.phone = req.body.phone;

  await users.save();

  res.send("Update Successfully");
});


module.exports = router;
