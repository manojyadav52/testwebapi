const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
    },
    role:{
        type:String,
        enum:["User","Admin"],
        default:"User"
    },
});


userSchema.pre('save', async function (next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


// created model
const User = mongoose.model('User',userSchema);

// exports the User
module.exports = User;