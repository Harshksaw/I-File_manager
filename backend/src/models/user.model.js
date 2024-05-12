const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],
    folders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder'
    }]
},{
    timestamps:true
})

module.exports = mongoose.model("User",user)