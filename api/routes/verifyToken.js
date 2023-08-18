const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    if (authHeader){
        // IT will verify that we give the token in the authHeader it is correct or not
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err){
                res.status(403).json("Token is not valid")
            }
            else{
                req.user=user
                // next will help to go to the next program and start execution it means that the work has been completed 
                next();
            }
        })

    }
    else{
        return res.status(401).json("You are not authenticated")
    }
}
const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("You are not allowed to do that")
        }
    })
}



module.exports={verifyToken,verifyTokenAndAuthorization};