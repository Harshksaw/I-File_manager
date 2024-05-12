const mongoose = require("mongoose")


const folder = new mongoose.Schema({
    folderName:{
        type:String,
        
        unique:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true


    },
    files:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"File",

    }]
},{
    timestamps:true
})


module.exports = mongoose.model("Folder",folder)