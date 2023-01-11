const jwt=require("jsonwebtoken");

module.exports=auth=(req,res,next)=>{

    let token=req.header('x-auth-token');
    console.log(token)
    if(!token)return res.status(401).send('Access denied, sign in to gain access');

    try{

        const decoded = jwt.verify(token,'hey hey');
        
        next();
        }
    
    catch{

        res.status(400).send('invalid token');

    }

}

