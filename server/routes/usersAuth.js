const express=require('express');
const mongoose=require('mongoose');
const {User}=require('../schemas/user');
const Joi=require('joi');
const bcrypt=require('bcrypt');

const router=express.Router();
router.use(express.json());

router.post('/', async (req, res) => {

    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    console.log(req.body)
    let user = await User.findOne({email:req.body.email});
    console.log(user)
    if(!user) return res.status(400).send('Invalid email or password.')

    let token =null;
    const valiedPassword= await bcrypt.compare(req.body.password , user.password)

    if(valiedPassword)
     token = user.tokenMaker();
     token? res.send(token) : res.status(400).send('Invalid email or password. ') 
  })
  
  function validate(req) {
      const schema = Joi.object({
          email: Joi.string().min(4).max(255).required().email(),
          password: Joi.string().min(5).max(1024).required()
      });
  
      return schema.validate(req);
  }
  
  module.exports = router
  