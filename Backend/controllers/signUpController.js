import User from '../models/User.js';
import generateToken from "../utilities/generateToken.js";

// Register user
export const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        
        // validate fields
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        // check if user alreay registered
        const isUserExist = await User.findOne({email});
        if(isUserExist){
            return res.status(400).json({
                success:false,
                message:"Email already used"
            });
        }
        const newUser = await User.create({name,email,password});

        return res.status(201).json({
            success:true,
            message:"Registration successful",
            user: {
                id:newUser._id,
                name:newUser.name,
                email:newUser.email
            },
            token: generateToken(newUser._id)
        });
        
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Registration Failed",
            error:error.message
        });
    }
}