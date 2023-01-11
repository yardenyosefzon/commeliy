const express=require('express');
const mongoose=require('mongoose');
const {User}=require('../schemas/user');
const {validate}=require('../schemas/user');
const _=require('lodash');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const router=express.Router();
router.use(express.json());

router.post('/',async(req,res)=>{
    
    
        
        const {error} = validate(req.body)
        if(error) return res.status(400).send(error.details[0].message)
        
        let user = await User.findOne({email:req.body.email})
        if(user) return res.status(400).send('User already exsist ')

        user=new User(_.pick(req.body,['name','password','email']))
        let salt= await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(user.password,salt);
        
    try{
        user=await user.save();
        res
        .header('x-auth-token',user.tokenMaker())
        .header('access-control-expose-headers','x-auth-token')
        .send(_.pick(user,['name','email']));
    }
        catch(err){
        res.status(404).send(err);
    }

})

module.exports=router;