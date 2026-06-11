import jwt from 'jsonwebtoken'


//Doctor Authentication Middleware

const authDoctor = async(req, res,next) => {
    try{
        const dtoken = req.headers.dtoken
        console.log("Token:",dtoken )
        //token check
        if(!dtoken){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }

        //Verify token

        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)

        req.docId = token_decode.id

        next()

    }catch(error){
        console.log(error);
        return res.json({success:false, message:error.message})
    }
}


export default authDoctor;