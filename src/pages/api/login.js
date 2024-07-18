/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
import CryptoJS from "crypto-js"
import jwt from'jsonwebtoken'

const handler = async(req,res)=>{
    if(req.method=='POST'){
        let user = await User.findOne({"email":req.body.email})
        if (user) {
            const bytes=CryptoJS.AES.decrypt(user.password, process.env.AES_Secret)
            let decryptedPass=bytes.toString(CryptoJS.enc.Utf8)
            if(req.body.email == user.email && req.body.password == decryptedPass)
            {
                let token =jwt.sign({ email:user.email , name:user.name},process.env.JWT_Secret,{expiresIn:'2d'});
                res.status(200).json({success:true ,token})
            }
            else{
                res.status(200).json({success:false , error:"Invalid Credentials"})
            }
        }
        else{
            res.status(200).json({success:false , error:"No User Found"})
        }
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
}
export default connectDb(handler); 