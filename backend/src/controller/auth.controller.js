


const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const bcrypt = require('bcryptjs');
const { TOKEN_SECRET } = require("../config/server.config");

 const register = async(req,res)=>{
    console.log(req.body , "register")

    const{name,email,password} = req.body;
    const edata = await User.findOne({email})
    if(edata) return res.status(500).json("This email is already used")


    try {

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)


        const newUser = new User({name,email,password:hash})

        const user = await newUser.save()
        res.status(200).json("User created")


        
    } catch (error) {
        console.log(error)
        
    }

}


const login = async(req,res)=>{
    console.log( "login-->>")
    

    try {

        const user = await User.findOne({email:req.body.email})

        if(!user) return res.status(404).json("User hasnot been created")

        const cpassword = await bcrypt.compare(req.body.password,user.password)
        if(!cpassword) return res.status(400).json("Password Incorrect")

        const token = jwt.sign({id:user._id},TOKEN_SECRET,{expiresIn:"1d"})

        const {password, createdAt, updatedAt, ...others} = user._doc;

        res.cookie("access-token",token,{
            httpOnly:true
        }).status(200).json(others)

        



        
    } catch (error) {
        console.log("login eror--->>")
        console.log(error)

        
    }
    
}

module.exports = {register,login}