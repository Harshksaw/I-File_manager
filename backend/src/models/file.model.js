const mongoose = require("mongoose")


const file = new mongoose.Schema({
    file:{
        type:String,
        required:true
        
    },
    fileName:{
        type:String,
        required:true
    },
    folderId:{
        type:String

    }

},{
    timestamps:true
})


module.exports = mongoose.model("File",file)