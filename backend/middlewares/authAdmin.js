import jwt from 'jsonwebtoken'


//Admin Authentication Middleware

const authAdmin = async(req, res,next) => {
    try{
        const {atoken} = req.headers
        console.log("Token:",atoken )
        //token check
        if(!atoken){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }

        //Verify token

        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        //admin validation
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }

        next()

    }catch(error){
        console.log(error);
        return res.json({success:false, message:error.message})
    }
}


export default authAdmin;