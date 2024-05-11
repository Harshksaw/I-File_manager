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

    },
    fileUrl:{  // New field for storing the URL of the file in Cloudinary
        type:String,
        required:true
    },

},{
    timestamps:true
})


module.exports = mongoose.model("File",file)