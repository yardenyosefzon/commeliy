const express=require('express');
const mongoose=require('mongoose');
const Comments=require('../schemas/comment');
const {validate}=require('../schemas/comment');
const auth=require('../middlewares/auth');
const { JsonWebTokenError } = require('jsonwebtoken');
const router=express.Router();
const jwt=require('jsonwebtoken');

router.use(express.json());

router.get('/',async(req,res)=>{

    let comments=await Comments.find()
    res.send(comments);

})
router.post('/',auth,async(req,res)=>{
   
    let token=req.header('x-auth-token');
    console.log(token);
    let decoded=jwt.decode(token);
    
    let {error}=validate(req.body);
    if(error)return res.status(404).send(error.details[0].message);

        try{
        let comment = new Comments({body:req.body.body, name:decoded.name});
        comment=await comment.save();
        
        res.send(comment);
    }
        catch(err){
        res.status(400).send(err.details);
        }

})

module.exports=router;