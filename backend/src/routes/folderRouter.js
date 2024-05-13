const express = require("express")
const {getFolder,createFolder,editFolder,deleteFolder} = require("../controller/folder.controller")

const router = express.Router()
router.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Your server is up and running....'
	});
});


// router.get("/getUserFolder/:owner",getUserFolder)
router.get("/getFolder/:owner",getFolder)
router.post("/createFolder",createFolder)
router.put("/editFolder/:id",editFolder)
router.delete("/deleteFolder/:id",deleteFolder)

module.exports = router