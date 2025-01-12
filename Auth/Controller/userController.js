const User = require('./../model/userModel');
const bcrypt = require('bcrypt');


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

    getAllData,
}