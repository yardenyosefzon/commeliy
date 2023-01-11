const mongoose = require('mongoose')
const Joi = require('joi');
const jwt=require('jsonwebtoken');

const schema=new mongoose.Schema({
    name:{

        type: String,
        required: true,
        minlength:1,
        maxlength: 255, 
        unique:true

    },
    password:{

        type: String,
        required: true,
        maxlength: 1024, 
        minlength: 5

    },
    email:{

        type: String,
        required: true,
        minlength:4,
        maxlength: 255, 
        unique: true

    }
});

schema.methods.tokenMaker=function(){

    const token=jwt.sign({_id:this._id, name:this.name},'hey hey');
    return token;

}

const User=  new mongoose.model('Users',schema);


function validateUser(user){
    const schema =Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(4).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user)
};


module.exports.validate= validateUser;
module.exports.User= User;