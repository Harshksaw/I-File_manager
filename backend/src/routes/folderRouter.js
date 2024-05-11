const express = require("express")
const {getFolder,createFolder,editFolder,deleteFolder} = require("../controller/folder.controller")

const router = express.Router()


router.get("/getFolder/:owner",getFolder)
router.post("/createFolder",createFolder)
router.put("/editFolder/:id",editFolder)
router.delete("/deleteFolder/:id",deleteFolder)

module.exports = router