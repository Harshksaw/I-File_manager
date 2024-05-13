const mongoose = require("mongoose")


const file = new mongoose.Schema({
    
    fileName:{
        type:String,
        required:true
    },
    folderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder"
        

    },
    fileUrl:{  
        type:String,
        required:true
    },

},{
    timestamps:true
})


module.exports = mongoose.model("File",file)