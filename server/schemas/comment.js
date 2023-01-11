const mongoose=require('mongoose');
const Joi=require('joi');

const Comments= new mongoose.model('Comments',new mongoose.Schema({

name:{

    type:String,
    require:true

},

body:{

    type:String,
    require:true

}

}))

function validateComments(user){
    const schema = Joi.object({
        
       body:Joi.string().min(1).required()

    });

    return schema.validate(user)
}

module.exports=Comments;
module.exports.validate=validateComments;