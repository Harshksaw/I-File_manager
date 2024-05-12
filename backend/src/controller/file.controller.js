const File = require("../models/file.model");
const multer = require("multer");
const uploadMiddleware = require("../middleware/uploadmiddleware");
const uploadImageToCloudinary = require("../utils/imageUploader");
const Folder = require("../models/folder.model");

const upload = uploadMiddleware("folderName");
const getFiles = async (req, res) => {
  try {
    const files = await File.find({ folderId: req.params.folderId });


    if (files) {
      return res.status(200).json(files);
    } else {
      return res.status(500).json("Folder has not been created");
    }
  } catch (error) {}
};

const uploadFiles = async (req, res) => {
  try {
    	if (!req.file) {
	  // No file was uploaded
	  return res.status(400).json({ error: "No file uploaded" });
	}
  
	// File upload successful
	const fileUrl = req.file.path; // URL of the uploaded file 

  const folderId = req.body.folderId;
  const fileName = req.body.fileName;


	


    if (fileName === null || folderId === null)
      return res.status(500).json("value is null");

    const newFile = await new File({ fileName, fileUrl, folderId }).populate("folderId");

    console.log(newFile, "newFile-----------------");
    const updatedFolder = await Folder.findByIdAndUpdate(
      folderId,
      { $push: { files: newFile._id } },
      { new: true, useFindAndModify: false }
    )
    
    if(!updatedFolder) return res.status(500).json("Folder not found")



    res.status(200).json({ success: true, newFile});
  } catch (error) {
    console.log(error, "error");
  }
};
const editFile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFolder = await File.findByIdAndDelete(id);

    if (!deleteFolder) return res.status(500).json("File not found");

    res.status(200).json(deleteFolder);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async(req, res)=>{

  try {
    const {id} = req.params
    const deleteFile = await File.findByIdAndDelete(id)
    if(!deleteFile) return res.status(500).json("File not found")
    res.status(200).json(deleteFile)
    
  } catch (error) {
    console.log(error)
    
  }

}

module.exports = { getFiles, uploadFiles, editFile, deleteFile}
