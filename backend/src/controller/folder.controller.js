const Folder = require("../models/folder.model")



 const getUserFolder = async(req,res)=>{

    try {
        
        const uFolder = await Folder.findById({owner:req.params.owner})
        console.log(uFolder)

        if(uFolder) {
            return res.status(200).json(uFolder)
        }else{
            return res.status(500).json("Folder has not been created")
        }

        
        
    } catch (error) {
        console.log(error, "error")
        
    }


}
 const getFolder = async(req,res)=>{

    try {
        
        const uFolder = await Folder.find({owner:req.params.owner})
        console.log(uFolder)

        if(uFolder) {
            return res.status(200).json(uFolder)
        }else{
            return res.status(500).json("Folder has not been created")
        }

        
        
    } catch (error) {
        console.log(error, "error")
        
    }


}


 const createFolder = async(req,res)=>{
    console.log(req.body, 'creating folder')

    try {
        const { folderName, owner } = req.body;

        console.log('Checking if folder with similar name already exists');
        const folder = await Folder.findOne({ folderName })

        if (folder) {
            console.log('Folder with similar name already exists');
            return res.status(500).json("Folder with similar name already exists");
        }

        console.log('Creating new folder');
        const newFolder = new Folder({ folderName, owner });
        const user = await newFolder.save();

        console.log('Folder created');
        res.status(200).json("Folder created");
    } catch (error) {
        console.log('Error creating folder:', error);
        res.status(500).json("Folder not created");
    }

        
  

}


 const editFolder = async(req,res)=>{

    try {
        const { id } = req.params;
        const { folderName } = req.body;


        const edit = await Folder.findByIdAndUpdate(id, { folderName }); // Update the folder name using the findByIdAndUpdate method

        if (!edit) return res.status(500).json("Folder not found");
        res.status(200).json("Folder name updated");

    } catch (error) {
        console.log(error);

    }

}


 const deleteFolder = async(req,res)=>{

    try {
        const {id} = req.params
        const deleteFolder = await Folder.findByIdAndDelete(id)

        if(!deleteFolder) return res.status(500).json("Folder not found")

        res.status(200).json(deleteFolder)

        
    } catch (error) {
        console.log(error)
    }

}
module.exports = {getFolder,createFolder,editFolder,deleteFolder}