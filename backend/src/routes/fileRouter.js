const express = require("express")
const { getFiles, uploadFiles, editFile, deleteFile} = require("../controller/file.controller")



const router = express.Router()


router.get("/getfiles/:folderId",getFiles)
router.post("/createFiles",uploadFiles)
router.put("/editFile/:id",editFile)
router.delete("/deleteFile/:id",deleteFile)

module.exports = router;