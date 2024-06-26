const express = require("express")
const { getFiles, uploadFiles, editFile, deleteFile, moveFile} = require("../controller/file.controller")
const multer = require('multer');
const uploadMiddleware = require("../middleware/uploadMiddleware");

const upload = uploadMiddleware("folderName");


const router = express.Router()


router.get("/getfiles/:folderId",getFiles)
router.post("/createFiles",upload.single("file"), uploadFiles)
router.put("/editFile/:id",editFile)
router.delete("/deleteFile/:id",deleteFile)
router.put("/move/:fileId",moveFile)


module.exports = router;