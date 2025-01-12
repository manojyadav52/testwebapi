const User = require('./../model/userModel');
const bcrypt = require('bcrypt');


const register = async (req,res)=>{
    const {fullName,email,password,phone,gender} =req.body;
    try{
        const user = new User({fullName,email,password,phone,gender});
        await user.save();
        res.json({message:"user Registerd Successfully",status:true,user:user});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Internal Server Issue",status:false});
    }
};

// login
// login
const login = async (req,res)=>{
    const {email,password} =req.body;
    try{
        const userData = await User.findOne({email});
        if(!userData) return res.json(userData,{message:"Invalid Email Address"});

        // compare the password 
        const comparePassword = await bcrypt.compare(password, userData.password);
        if(!comparePassword) return res.json({message:"Invalid Password"});

        // token created 
        const token = await jwt.sign({id:userData._id,email:userData.email,phone:userData.phone},SECRETE_KEY,{expiresIn:'1h'});
        console.log("Token:", token);
        // cookies 
        res.cookie('token', token, {httpOnly: true });
        // res.cookies('token',token);
        res.json({message:"user login Successfully ",status:true,data:userData,token});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Srver Issue",status:false,data:null})
    }
}


// getAll 
const getAllData = async (req,res)=>{
    try{
        const user = await User.find();
        res.status(201).json({message:'All Data here',data:user,status:true});
    }catch(error){
        console.log(error);
        res.status(500).json({
            data:null,
            message:"Inernal Server issue",
            satus:false,
        })
    }
};

module.exports ={
    register,
    login,
    getAllData,
}