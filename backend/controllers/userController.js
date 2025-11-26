import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js'
import validator from 'validator'


const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

const loginUser = async (req,res)=>{
 
    try{
        let {password , email }= req.body;

        const user = await userModel.findOne({email});

        if(!user){
          return  res.json({success : false , message : "User doesn't exists"});
        }
        const isMatch = await bcrypt.compare(password , user.password);

        if(isMatch){
            const token=  createToken(user._id);
           return res.json({success : true , token});
        }else{
           return res.json({ success : false , message : "Invalid credentials "})
        }
    }catch(error){
        console.log(error);
        return res.json({success : false , message: error.message});
    }
}

const registerUser = async (req,res)=>{

    try{
        let {name:userName , password , email} =req.body;
    
        const exists = await userModel.findOne({email});

        if(exists){
            return res.json({success : false ,message :" User already exists"});
        }
        if(!validator.isEmail(email)){
            return res.json({success: false , message: "Please enter a valid email"});
        }
        if(password.length < 8){
            return res.json({success: false , message: "Please enter a strong password"});
        }
        
        if(userName.length == 0 ){
            return res.json({success: false , message: "Please enter a name"});
        }
        
        const salt= await bcrypt.genSalt(10);
        const hashedPass= await bcrypt.hash(password,salt);

        const newUser = new userModel({
            userName,
            email,
            password:hashedPass
        })

        const user= await newUser.save();

        const token = createToken(user._id);

        return res.json({success : true , token });

    }catch(error){
        console.log(error);
       return res.json({success : false , message: error.message});
    }

}
const adminLogin = async (req,res)=>{
    try{
        let {email ,password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password , process.env.JWT_SECRET);
            res.json({success:true , token});
        }else{
           return res.json( {success: false , message: "Invalid Credentials"});
        }

    }catch(error){
        console.log(error); 
       return res.json({success : false , message: error.message});
    }
}


export {loginUser, registerUser ,adminLogin};