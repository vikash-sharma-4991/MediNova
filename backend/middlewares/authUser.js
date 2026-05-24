import jwt from 'jsonwebtoken'


//User Authentication Middleware

const authUser = async(req, res,next) => {
    try{
        const token = req.headers.token
        console.log("Token:",token )
        //token check
        if(!token){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }

        //Verify token

        const token_decode = jwt.verify(token,process.env.JWT_SECRET)

        req.userId = token_decode.id

        next()

    }catch(error){
        console.log(error);
        return res.json({success:false, message:error.message})
    }
}


export default authUser;